/**
 * Servicio de Presencia en Tiempo Real (Firebase Firestore)
 * Responsabilidad: Registrar sesiones activas, latidos, actividad actual y suscripción en vivo
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { FIREBASE_CONFIG, isFirebaseConfigured } from "./firebase-config.js";
import { getFirestoreInstance } from "./multiplayer-firestore.js";
import { getSubjectById, getUnitById, getQuizById } from "../data/vault-structure.js";
import {
  generateUniqueId,
  getOrCreateStoredId,
  resolveClientIp,
  detectDeviceInfo
} from "./presence-client-info.js";

const COLLECTION_NAME = "active_sessions";
const CLIENT_ID_KEY = "bacu_presence_client_id";
const HEARTBEAT_VISIBLE_MS = 30 * 1000;
const HEARTBEAT_HIDDEN_MS = 60 * 1000;
export const SESSION_TTL_MS = 95 * 1000;
const STALE_CLEANUP_MS = 5 * 60 * 1000;

const STATUS_LABELS = {
  intro: "Inicio",
  attempt: "En intento",
  summary: "Resumen",
  review: "Revisión"
};

let initialized = false;
let heartbeatTimer = null;
let activityDebounceTimer = null;
let lastWriteAt = 0;
let lastActivitySignature = "";
let removedOnUnload = false;
let currentGetState = null;

const localSession = {
  sessionId: "",
  clientId: "",
  ip: "No disponible",
  connectedAt: Date.now(),
  device: null
};

export function getLocalSessionId() {
  return localSession.sessionId;
}

/**
 * Inicializar el seguimiento de presencia de la pestaña actual
 * @param {Function} getAppState
 * @param {Function} subscribeState
 */
export function initPresenceTracking(getAppState, subscribeState) {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  currentGetState = getAppState;

  localSession.sessionId = generateUniqueId("sess");
  localSession.clientId = getOrCreateStoredId(window.localStorage, CLIENT_ID_KEY, "cli");
  localSession.connectedAt = Date.now();
  localSession.device = detectDeviceInfo(navigator.userAgent || "");

  startPresenceLifecycle();

  if (typeof subscribeState === "function") {
    subscribeState((nextState) => handleAppStateChange(nextState));
  }
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handleTabUnload);
  window.addEventListener("beforeunload", handleTabUnload);
}

async function startPresenceLifecycle() {
  localSession.ip = await resolveClientIp();
  await writePresenceHeartbeat();
  scheduleNextHeartbeat();
}

function scheduleNextHeartbeat() {
  if (heartbeatTimer) clearTimeout(heartbeatTimer);
  const delay = document.visibilityState === "hidden" ? HEARTBEAT_HIDDEN_MS : HEARTBEAT_VISIBLE_MS;
  heartbeatTimer = setTimeout(async () => {
    await writePresenceHeartbeat();
    scheduleNextHeartbeat();
  }, delay);
}

function handleVisibilityChange() {
  if (document.visibilityState === "visible" && Date.now() - lastWriteAt > 10000) {
    writePresenceHeartbeat();
  }
  scheduleNextHeartbeat();
}

function handleAppStateChange(nextState) {
  const activity = buildActivityInfo(nextState);
  const signature = `${activity.subjectName}|${activity.unitName}|${activity.quizTitle}|${activity.status}|${activity.isMultiplayer}`;
  if (signature === lastActivitySignature) return;
  lastActivitySignature = signature;

  if (activityDebounceTimer) clearTimeout(activityDebounceTimer);
  activityDebounceTimer = setTimeout(() => {
    writePresenceHeartbeat();
  }, 1500);
}

async function writePresenceHeartbeat() {
  const db = await getFirestoreInstance();
  if (!db || !localSession.sessionId) return;

  const appState = typeof currentGetState === "function" ? currentGetState() : {};
  const activity = buildActivityInfo(appState);
  lastActivitySignature = `${activity.subjectName}|${activity.unitName}|${activity.quizTitle}|${activity.status}|${activity.isMultiplayer}`;

  const payload = {
    sessionId: localSession.sessionId,
    clientId: localSession.clientId,
    ip: localSession.ip || "No disponible",
    deviceLabel: localSession.device?.label || "Navegador web",
    deviceType: localSession.device?.deviceType || "Escritorio",
    subjectName: activity.subjectName,
    unitName: activity.unitName,
    quizTitle: activity.quizTitle,
    status: activity.status,
    statusLabel: activity.statusLabel,
    isMultiplayer: activity.isMultiplayer,
    visibility: document.visibilityState || "visible",
    connectedAt: localSession.connectedAt,
    lastSeen: Date.now()
  };

  try {
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    await setDoc(doc(db, COLLECTION_NAME, localSession.sessionId), payload, { merge: true });
    lastWriteAt = Date.now();
  } catch (err) {
    console.warn("No se pudo actualizar presencia en Firestore:", err);
  }
}

function handleTabUnload() {
  if (removedOnUnload || !localSession.sessionId || !isFirebaseConfigured()) return;
  removedOnUnload = true;

  const projectId = encodeURIComponent(FIREBASE_CONFIG.projectId);
  const docId = encodeURIComponent(localSession.sessionId);
  const apiKey = encodeURIComponent(FIREBASE_CONFIG.apiKey);
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${COLLECTION_NAME}/${docId}?key=${apiKey}`;

  try {
    fetch(url, { method: "DELETE", keepalive: true }).catch(() => {});
  } catch (_) {}
}

/**
 * Suscribirse en tiempo real a todas las sesiones registradas en Firestore
 * @param {Function} onUpdate
 * @param {Function} onError
 * @returns {Promise<Function>} función para cancelar suscripción
 */
export async function subscribeToActiveSessions(onUpdate, onError) {
  const db = await getFirestoreInstance();
  if (!db) {
    if (onError) onError(new Error("Firebase Firestore no está configurado o no pudo inicializarse."));
    return () => {};
  }

  try {
    const { collection, onSnapshot } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    return onSnapshot(
      collection(db, COLLECTION_NAME),
      (snapshot) => {
        const allDocs = [];
        snapshot.forEach((docSnap) => allDocs.push({ id: docSnap.id, ...docSnap.data() }));
        cleanupStaleSessions(db, allDocs);
        if (onUpdate) onUpdate(allDocs);
      },
      (err) => {
        if (onError) onError(err);
      }
    );
  } catch (err) {
    if (onError) onError(err);
    return () => {};
  }
}

/**
 * Filtrar sesiones con latido reciente y ordenarlas por actividad
 * @param {Array<object>} sessions
 * @param {number} now
 * @returns {Array<object>}
 */
export function filterActiveSessions(sessions = [], now = Date.now()) {
  return sessions
    .filter((s) => s && typeof s.lastSeen === "number" && (now - s.lastSeen) <= SESSION_TTL_MS)
    .sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0));
}

async function cleanupStaleSessions(db, docs) {
  const now = Date.now();
  const stale = docs
    .filter((d) => typeof d.lastSeen === "number" && (now - d.lastSeen) > STALE_CLEANUP_MS)
    .slice(0, 20);
  if (!stale.length) return;
  try {
    const { doc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    await Promise.allSettled(stale.map((d) => deleteDoc(doc(db, COLLECTION_NAME, d.id))));
  } catch (_) {}
}

function buildActivityInfo(appState = {}) {
  const subject = getSubjectById(appState.activeSubjectId);
  const unit = getUnitById(appState.activeSubjectId, appState.activeUnitId);
  const quiz = getQuizById(appState.activeSubjectId, appState.activeUnitId, appState.activeQuizId);
  const status = appState.quizStatus || "intro";

  return {
    subjectName: subject?.name || "Sin asignatura",
    unitName: unit?.name || "",
    quizTitle: quiz?.title || "Cuestionario",
    status,
    statusLabel: STATUS_LABELS[status] || "Activo",
    isMultiplayer: Boolean(appState.isMultiplayer)
  };
}
