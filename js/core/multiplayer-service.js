/**
 * Servicio Central de Modo Multijugador en Tiempo Real
 * Responsabilidad: Gestión de salas, presencia, sincronización de respuestas y cursores vía Firestore y BroadcastChannel
 * Cumple con directivas de arquitectura en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { initLocalUser, saveLocalUser, generateRoomCode } from "./multiplayer-user.js";
import {
  getFirestoreRoom,
  createFirestoreRoom,
  joinFirestoreRoom,
  subscribeToFirestoreRoom,
  syncPayloadToFirestore
} from "./multiplayer-firestore.js";

class MultiplayerService {
  constructor() {
    this.currentRoom = null;
    this.localUser = initLocalUser();
    this.listeners = new Map();
    this.broadcastChannel = null;
    this.firestoreUnsub = null;
    this.heartbeatTimer = null;
  }

  saveLocalUser(updates) {
    this.localUser = saveLocalUser(updates, this.localUser);
  }

  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (!this.listeners.has(event)) return;
    this.listeners.set(event, this.listeners.get(event).filter(cb => cb !== callback));
  }

  emit(event, data) {
    const list = this.listeners.get(event) || [];
    for (const cb of list) {
      try { cb(data); } catch (e) { console.error(`Error en listener ${event}:`, e); }
    }
  }

  async createRoom(config, preparedQuestions = []) {
    const code = generateRoomCode();
    const roomData = {
      code,
      hostId: this.localUser.id,
      createdAt: Date.now(),
      lastActive: Date.now(),
      config: { ...config },
      preparedQuestions: preparedQuestions.map(q => ({
        id: q.id,
        num: q.num,
        optionsOrder: q.options?.map(o => o.id) || []
      })),
      quizState: { activeQuestionIndex: 0, quizStatus: "intro", userAnswers: {} },
      participants: {
        [this.localUser.id]: {
          id: this.localUser.id,
          name: this.localUser.name,
          color: this.localUser.color,
          isHost: true,
          lastSeen: Date.now()
        }
      }
    };

    await this.connectToRoom(code, roomData, true);
    return code;
  }

  async joinRoom(code, userName) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (!cleanCode) throw new Error("Código de sala inválido");
    if (userName) this.saveLocalUser({ name: userName.trim() });

    await this.connectToRoom(cleanCode, null, false);
    return cleanCode;
  }

  async connectToRoom(code, initialData = null, isCreating = false) {
    this.leaveRoom();

    this.currentRoom = {
      code,
      isHost: Boolean(isCreating),
      participants: {},
      quizState: initialData?.quizState || {}
    };

    // 1. Canal BroadcastChannel local (latencia ultra baja entre pestañas del mismo navegador)
    try {
      this.broadcastChannel = new BroadcastChannel(`bacu_room_${code}`);
      this.broadcastChannel.onmessage = (e) => this.handleIncomingMessage(e.data);
    } catch (_) {}

    // 2. Conectar a Firestore
    if (isCreating && initialData) {
      await createFirestoreRoom(code, initialData);
    } else {
      const existingData = await getFirestoreRoom(code);
      if (existingData) {
        this.currentRoom = {
          ...this.currentRoom,
          ...existingData,
          participants: existingData.participants || {}
        };
      }
      await joinFirestoreRoom(code, this.localUser);
    }

    this.firestoreUnsub = await subscribeToFirestoreRoom(code, (data) => {
      this.handleFirestoreRoomUpdate(data);
    });

    // 3. Latido de presencia
    this.startHeartbeat();

    this.broadcastMessage({ type: "PEER_JOINED", user: this.localUser });
    this.emit("room_connected", { code, isHost: Boolean(isCreating), roomData: this.currentRoom });
  }

  handleFirestoreRoomUpdate(data) {
    if (!data) return;
    this.currentRoom = {
      ...this.currentRoom,
      ...data,
      participants: data.participants || {}
    };
    this.emit("room_updated", this.currentRoom);
  }

  handleIncomingMessage(msg) {
    if (!msg || msg.senderId === this.localUser.id) return;

    const eventsMap = {
      CURSOR: "peer_cursor",
      PEER_JOINED: "peer_presence",
      PEER_HEARTBEAT: "peer_presence",
      PEER_LEFT: "peer_left",
      SET_ANSWER: "remote_answer",
      NAVIGATE: "remote_navigate",
      START_QUIZ: "remote_start_quiz",
      NEXT_BATCH: "remote_next_batch",
      QUICK_EVALUATE: "remote_quick_evaluate",
      SUBMIT_QUIZ: "remote_submit_quiz"
    };

    const targetEvent = eventsMap[msg.type];
    if (targetEvent === "peer_presence") {
      this.handlePeerPresence(msg.user);
    } else if (targetEvent === "peer_left") {
      this.emit("peer_left", msg.userId);
    } else if (targetEvent) {
      this.emit(targetEvent, msg);
    }
  }

  handlePeerPresence(user) {
    if (!user || user.id === this.localUser.id || !this.currentRoom) return;
    this.currentRoom.participants[user.id] = { ...user, lastSeen: Date.now() };
    this.emit("participants_changed", Object.values(this.currentRoom.participants));
  }

  broadcastMessage(message) {
    const payload = { ...message, senderId: this.localUser.id, timestamp: Date.now() };

    if (this.broadcastChannel) {
      try { this.broadcastChannel.postMessage(payload); } catch (_) {}
    }

    if (["SET_ANSWER", "NAVIGATE", "START_QUIZ", "NEXT_BATCH", "QUICK_EVALUATE"].includes(message.type)) {
      syncPayloadToFirestore(this.currentRoom?.code, payload, this.localUser);
    }
  }

  startHeartbeat() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = setInterval(() => {
      if (!this.currentRoom) return;
      this.broadcastMessage({ type: "PEER_HEARTBEAT", user: this.localUser });

      // Purgar participantes desconectados tras 35s
      const now = Date.now();
      let changed = false;
      for (const [id, p] of Object.entries(this.currentRoom.participants || {})) {
        if (id !== this.localUser.id && (now - (p.lastSeen || 0)) > 35000) {
          delete this.currentRoom.participants[id];
          changed = true;
          this.emit("peer_left", id);
        }
      }
      if (changed) this.emit("participants_changed", Object.values(this.currentRoom.participants));
    }, 12000);
  }

  leaveRoom() {
    if (!this.currentRoom) return;
    this.broadcastMessage({ type: "PEER_LEFT", userId: this.localUser.id });

    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.firestoreUnsub) {
      try { this.firestoreUnsub(); } catch (_) {}
      this.firestoreUnsub = null;
    }
    if (this.broadcastChannel) {
      try { this.broadcastChannel.close(); } catch (_) {}
      this.broadcastChannel = null;
    }

    const oldCode = this.currentRoom.code;
    this.currentRoom = null;
    this.emit("room_left", oldCode);
  }

  isInRoom() {
    return Boolean(this.currentRoom);
  }

  getCurrentRoom() {
    return this.currentRoom;
  }
}

export const multiplayerService = new MultiplayerService();
