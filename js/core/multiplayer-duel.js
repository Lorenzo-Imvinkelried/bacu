/**
 * Lógica de Duelo 1 a 1 y Sincronización Paso a Paso
 * Responsabilidad: Controlar evaluación sincronizada y avance coordinado en Repaso Rápido
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { state } from "./state.js";
import { multiplayerService } from "./multiplayer-service.js";

export const readyNextMap = new Map();
export const confirmedSubmissionsMap = new Map();

/**
 * Confirmar respuesta en preguntas de selección múltiple (Duelo 1 a 1)
 * @param {string} qId
 */
export function handleConfirmMultipleAnswer(qId) {
  if (!qId || !multiplayerService.isInRoom()) return;
  const localId = multiplayerService.localUser.id;
  const userAnswers = state.state.userAnswers?.[qId] || [];
  if (userAnswers.length === 0) return;

  if (!confirmedSubmissionsMap.has(qId)) confirmedSubmissionsMap.set(qId, new Set());
  confirmedSubmissionsMap.get(qId).add(localId);

  const room = multiplayerService.getCurrentRoom();
  if (room) {
    if (!room.quizState) room.quizState = {};
    if (!room.quizState.selections) room.quizState.selections = {};
    if (!room.quizState.selections[qId]) room.quizState.selections[qId] = {};
    room.quizState.selections[qId][localId] = {
      userId: localId,
      userName: multiplayerService.localUser.name,
      userColor: multiplayerService.localUser.color,
      optionIds: userAnswers
    };
  }

  multiplayerService.broadcastMessage({
    type: "CONFIRM_MULTIPLE",
    questionId: qId,
    options: userAnswers,
    user: multiplayerService.localUser
  });

  checkIfBothAnsweredQuick(qId);
  state.notify();
}

/**
 * Evaluar pregunta en modo rápido solo cuando todos los participantes hayan confirmado
 * @param {string} qId
 */
export function checkIfBothAnsweredQuick(qId) {
  if (!qId || state.state.executionMode !== "quick" || !multiplayerService.isInRoom()) return;
  const room = multiplayerService.getCurrentRoom();
  if (!room) return;

  const participants = Object.values(room.participants || {});
  if (participants.length < 2) return;

  const question = (state.state.currentQuestions || []).find(q => q.id === qId);
  const isMultiple = question ? (question.type === "multiple") : false;

  if (isMultiple) {
    const confirmedSet = confirmedSubmissionsMap.get(qId) || new Set();
    if (confirmedSet.size >= participants.length) {
      state.evaluateQuickQuestion(qId);
      multiplayerService.broadcastMessage({ type: "QUICK_EVALUATE", questionId: qId });
    }
  } else {
    const selections = room.quizState?.selections?.[qId] || {};
    const hasLocal = (state.state.userAnswers?.[qId] || []).length > 0;
    const answeredCount = Object.keys(selections).length + (hasLocal && !selections[multiplayerService.localUser.id] ? 1 : 0);

    if (answeredCount >= participants.length) {
      state.evaluateQuickQuestion(qId);
      multiplayerService.broadcastMessage({ type: "QUICK_EVALUATE", questionId: qId });
    }
  }
}

/**
 * Manejar clic del usuario local en "Siguiente" durante el duelo 1 a 1
 */
export function handleMultiplayerNextQuick() {
  const room = multiplayerService.getCurrentRoom();
  const participants = Object.values(room?.participants || {});
  const currentIndex = state.state.activeQuestionIndex;
  const localId = multiplayerService.localUser.id;
  const requiredCount = Math.max(2, participants.length);

  if (!readyNextMap.has(currentIndex)) readyNextMap.set(currentIndex, new Set());
  const set = readyNextMap.get(currentIndex);
  set.add(localId);

  if (room) {
    if (!room.quizState) room.quizState = {};
    if (!room.quizState.readyNext) room.quizState.readyNext = {};
    if (!room.quizState.readyNext[currentIndex]) room.quizState.readyNext[currentIndex] = {};
    room.quizState.readyNext[currentIndex][localId] = true;
  }

  multiplayerService.broadcastMessage({ type: "READY_NEXT", questionIndex: currentIndex, userId: localId });

  if (set.size >= requiredCount) {
    readyNextMap.delete(currentIndex);
    state.goToNextQuestion();
    multiplayerService.broadcastMessage({ type: "NAVIGATE", index: currentIndex + 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    state.notify();
  }
}

/**
 * Procesar señal de que un compañero está listo para avanzar a la siguiente pregunta
 * @param {number} qIndex
 * @param {string} userId
 */
export function handlePlayerReadyNext(qIndex, userId) {
  const currentIndex = state.state.activeQuestionIndex;
  const room = multiplayerService.getCurrentRoom();
  const participants = Object.values(room?.participants || {});
  const requiredCount = Math.max(2, participants.length);

  if (!readyNextMap.has(qIndex)) readyNextMap.set(qIndex, new Set());
  const set = readyNextMap.get(qIndex);
  set.add(userId);

  if (room) {
    if (!room.quizState) room.quizState = {};
    if (!room.quizState.readyNext) room.quizState.readyNext = {};
    if (!room.quizState.readyNext[qIndex]) room.quizState.readyNext[qIndex] = {};
    room.quizState.readyNext[qIndex][userId] = true;
  }

  if (set.size >= requiredCount) {
    readyNextMap.delete(qIndex);
    state.goToNextQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (qIndex === currentIndex) {
    state.notify();
  }
}

/**
 * Sincronizar estado de avance conjunto desde Firestore
 * @param {object} readyNextData
 */
export function syncReadyNextFromFirestore(readyNextData) {
  if (!readyNextData) return;
  const currentIndex = state.state.activeQuestionIndex;
  const qReady = readyNextData[currentIndex];
  if (!qReady) return;

  if (!readyNextMap.has(currentIndex)) readyNextMap.set(currentIndex, new Set());
  const set = readyNextMap.get(currentIndex);
  for (const userId of Object.keys(qReady)) {
    if (qReady[userId]) set.add(userId);
  }

  const room = multiplayerService.getCurrentRoom();
  const participants = Object.values(room?.participants || {});
  const requiredCount = Math.max(2, participants.length);

  if (set.size >= requiredCount) {
    readyNextMap.delete(currentIndex);
    state.goToNextQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
