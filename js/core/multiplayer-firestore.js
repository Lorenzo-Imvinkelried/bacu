/**
 * Adaptador de Persistencia Remota Firestore para Multijugador
 * Responsabilidad: Escritura, lectura y suscripciones a salas en Firebase Firestore
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { FIREBASE_CONFIG, isFirebaseConfigured } from "./firebase-config.js";

let firestoreDb = null;
let firestoreInitialized = false;

export async function getFirestoreInstance() {
  if (firestoreInitialized) return firestoreDb;
  if (!isFirebaseConfigured()) return null;
  try {
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    const app = getApps().length > 0 ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
    firestoreDb = getFirestore(app);
    firestoreInitialized = true;
    return firestoreDb;
  } catch (err) {
    console.warn("No se pudo inicializar Firestore para multijugador:", err);
    return null;
  }
}

export async function createFirestoreRoom(code, initialData) {
  const db = await getFirestoreInstance();
  if (!db) return;
  try {
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    await setDoc(doc(db, "multiplayer_rooms", code), initialData);
  } catch (e) {
    console.warn("Fallo al crear sala en Firestore:", e);
  }
}

export async function joinFirestoreRoom(code, user) {
  const db = await getFirestoreInstance();
  if (!db) return;
  try {
    const { doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    const roomRef = doc(db, "multiplayer_rooms", code);
    const updates = {
      [`participants.${user.id}`]: {
        id: user.id,
        name: user.name,
        color: user.color,
        isHost: false,
        lastSeen: Date.now()
      },
      lastActive: Date.now()
    };
    await updateDoc(roomRef, updates);
  } catch (e) {
    console.warn("Fallo al unirse a sala en Firestore:", e);
  }
}

export async function subscribeToFirestoreRoom(code, onUpdate) {
  const db = await getFirestoreInstance();
  if (!db) return null;
  try {
    const { doc, onSnapshot } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    const roomRef = doc(db, "multiplayer_rooms", code);
    return onSnapshot(roomRef, (snapshot) => {
      if (snapshot.exists()) onUpdate(snapshot.data());
    });
  } catch (e) {
    console.warn("Fallo al suscribir a Firestore:", e);
    return null;
  }
}

export async function syncPayloadToFirestore(code, payload, localUser) {
  if (!code) return;
  const db = await getFirestoreInstance();
  if (!db) return;
  try {
    const { doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    const roomRef = doc(db, "multiplayer_rooms", code);
    const updates = { lastActive: Date.now() };

    if (payload.type === "SET_ANSWER") {
      updates[`quizState.userAnswers.${payload.questionId}`] = payload.options;
      updates[`quizState.lastSelectedBy.${payload.questionId}`] = {
        userId: localUser.id,
        userName: localUser.name,
        userColor: localUser.color,
        optionId: payload.optionId
      };
    } else if (payload.type === "NAVIGATE") {
      updates["quizState.activeQuestionIndex"] = payload.index;
    } else if (payload.type === "START_QUIZ") {
      updates["quizState.quizStatus"] = "attempt";
      updates.config = payload.config;
      if (payload.preparedQuestions) updates.preparedQuestions = payload.preparedQuestions;
    } else if (payload.type === "QUICK_EVALUATE") {
      updates["quizState.quickEvaluatedQuestions"] = payload.evaluatedList;
    }

    await updateDoc(roomRef, updates);
  } catch (_) {}
}
