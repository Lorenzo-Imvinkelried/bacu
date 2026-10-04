/**
 * Lógica de Duelo 1 a 1 y Sincronización Paso a Paso
 * Responsabilidad: Controlar evaluación sincronizada y avance coordinado en Repaso Rápido
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { state } from "./state.js";
import { multiplayerService } from "./multiplayer-service.js";

export const readyNextMap = new Map();

/**
 * Evaluar pregunta en modo rápido solo cuando todos los participantes hayan seleccionado opción
 * @param {string} qId
 */
export function checkIfBothAnsweredQuick(qId) {
  if (!qId || state.state.executionMode !== "quick" || !multiplayerService.isInRoom()) return;
  const room = multiplayerService.getCurrentRoom();
  if (!room) return;

  const participants = Object.values(room.participants || {});
  if (participants.length < 2) return;

  const selections = room.quizState?.selections?.[qId] || {};
  const hasLocal = (state.state.userAnswers?.[qId] || []).length > 0;
  const answeredCount = Object.keys(selections).length + (hasLocal && !selections[multiplayerService.localUser.id] ? 1 : 0);

  if (answeredCount >= participants.length) {
    state.evaluateQuickQuestion(qId);
    multiplayerService.broadcastMessage({ type: "QUICK_EVALUATE", questionId: qId });
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

  multiplayerService.broadcastMessage({ type: "READY_NEXT", questionIndex: currentIndex, userId: localId });

  const nextBtns = document.querySelectorAll("#btn-quick-next, .btn-quick-next-inline");
  nextBtns.forEach(b => {
    b.disabled = true;
    b.innerHTML = `Listo (1/${requiredCount}) &bull; Esperando...`;
  });

  if (set.size >= requiredCount) {
    readyNextMap.delete(currentIndex);
    state.goToNextQuestion();
    multiplayerService.broadcastMessage({ type: "NAVIGATE", index: currentIndex + 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  if (set.size >= requiredCount) {
    readyNextMap.delete(qIndex);
    state.goToNextQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (qIndex === currentIndex) {
    const nextBtns = document.querySelectorAll("#btn-quick-next, .btn-quick-next-inline");
    nextBtns.forEach(b => {
      if (!b.disabled) b.innerHTML = `Tu compañero está listo &rarr;`;
    });
  }
}
