/**
 * Manejador de Eventos de Clic
 * Responsabilidad: Procesar acciones de clic delegadas en la interfaz
 * Cumple con directivas de arquitectura en AGENTS.md (< 300 líneas)
 */

import { state } from "../core/state.js";
import { evaluateAttempt, getRandomQuestions, getMissedQuestions } from "../core/quiz-engine.js";
import { QUESTION_BANK } from "../data/question-bank.js";
import { getQuizById, getQuestionsForQuiz } from "../data/vault-structure.js";
import { exportQuestionsToTxt } from "./export-service.js";

/**
 * Procesar evento de clic delegado
 * @param {MouseEvent} e
 */
export function handleClickEvent(e) {
  // 1. Exportar Banco a TXT
  if (e.target.closest("#btn-export-questions-header") || 
      e.target.closest("#btn-export-questions-page") || 
      e.target.closest("#btn-export-questions-intro")) {
    e.preventDefault();
    exportQuestionsToTxt();
    return;
  }

  // 2. Abrir / Cerrar Baúl
  if (e.target.closest("#btn-open-vault") || e.target.closest("#btn-toggle-vault-inline")) {
    e.preventDefault();
    state.toggleVault(true);
    return;
  }
  if (e.target.closest("#btn-close-vault") || e.target.id === "vault-drawer-overlay") {
    state.toggleVault(false);
    return;
  }

  // 3. Seleccionar Cuestionario desde el Baúl
  const btnSelectQuiz = e.target.closest(".btn-select-quiz");
  if (btnSelectQuiz) {
    e.preventDefault();
    state.setState({
      activeSubjectId: btnSelectQuiz.dataset.subjectId,
      activeUnitId: btnSelectQuiz.dataset.unitId,
      activeQuizId: btnSelectQuiz.dataset.quizId,
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      vaultOpen: false,
      continuousSession: null
    });
    return;
  }

  // 4. Elegir Modalidad ('batches' | 'random' | 'full')
  const btnMode = e.target.closest("[data-execution-mode]");
  if (btnMode) {
    e.preventDefault();
    state.setExecutionMode(btnMode.dataset.executionMode);
    return;
  }

  // 5. Preajuste de tamaño de tanda
  const btnBatch = e.target.closest("[data-batch-size]");
  if (btnBatch) {
    e.preventDefault();
    state.setBatchSize(parseInt(btnBatch.dataset.batchSize, 10));
    return;
  }

  // 6. Preajuste de cantidad aleatoria
  const btnRandom = e.target.closest("[data-random-count]");
  if (btnRandom) {
    e.preventDefault();
    state.setRandomCount(parseInt(btnRandom.dataset.randomCount, 10));
    return;
  }

  // 7. Iniciar Cuestionario
  if (e.target.closest("#btn-start-quiz")) {
    e.preventDefault();
    handleStartQuiz();
    return;
  }

  // 8. Próxima tanda en práctica continua
  if (e.target.closest("#btn-next-continuous-batch") || e.target.closest("#btn-next-continuous-batch-bottom")) {
    e.preventDefault();
    state.nextContinuousBatch();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // 9. Reiniciar sesión de práctica continua
  if (e.target.closest("#btn-restart-continuous-session")) {
    e.preventDefault();
    const currentQuiz = getQuizById(state.state.activeSubjectId, state.state.activeUnitId, state.state.activeQuizId);
    const quizQuestions = getQuestionsForQuiz(currentQuiz, QUESTION_BANK);
    state.startContinuousSession(quizQuestions, state.state.batchSize || 10);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // 10. Rehacer preguntas incorrectas o con puntaje parcial
  if (e.target.closest(".btn-retry-missed-action") || e.target.closest("#btn-retry-missed-questions")) {
    e.preventDefault();
    const missed = getMissedQuestions(state.getState());
    const questionsToRetry = (missed && missed.length > 0) 
      ? missed 
      : (state.state.lastMissedQuestions || []);

    if (questionsToRetry.length > 0) {
      state.startRetryAttempt(questionsToRetry);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  // 10. Alternar bandera / Quitar mi elección
  const btnFlag = e.target.closest(".btn-flag");
  if (btnFlag) {
    e.preventDefault();
    if (btnFlag.dataset.flagQid) state.toggleFlag(btnFlag.dataset.flagQid);
    return;
  }
  const btnClear = e.target.closest(".btn-clear-choice");
  if (btnClear) {
    e.preventDefault();
    if (btnClear.dataset.clearQid) state.clearAnswer(btnClear.dataset.clearQid);
    return;
  }

  // 11. Navegación por bloque navblock o enlace de resumen
  const btnNavTarget = e.target.closest(".qnbutton");
  if (btnNavTarget) {
    e.preventDefault();
    const el = document.getElementById(btnNavTarget.dataset.navTarget);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const summaryLink = e.target.closest(".summary-q-link");
  if (summaryLink) {
    e.preventDefault();
    state.resumeAttempt();
    setTimeout(() => {
      const el = document.getElementById(`question-${summaryLink.dataset.returnQid}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return;
  }

  // 12. Ir a resumen / Volver al intento
  if (e.target.closest("#btn-finish-attempt-nav") || e.target.closest("#btn-finish-attempt-bottom")) {
    e.preventDefault();
    state.goToSummary();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (e.target.closest("#btn-return-attempt")) {
    e.preventDefault();
    state.resumeAttempt();
    return;
  }

  // 13. Modal de confirmación y envío definitivo
  if (e.target.closest("#btn-submit-attempt-modal")) {
    e.preventDefault();
    const modal = document.getElementById("moodle-confirm-modal");
    if (modal) modal.classList.remove("hidden");
    return;
  }
  if (e.target.closest("#btn-modal-cancel") || e.target.closest("#btn-modal-cancel-x")) {
    e.preventDefault();
    const modal = document.getElementById("moodle-confirm-modal");
    if (modal) modal.classList.add("hidden");
    return;
  }
  if (e.target.closest("#btn-modal-confirm-submit")) {
    e.preventDefault();
    handleConfirmSubmit();
    return;
  }

  // 14. Finalizar revisión / Volver a P1
  if (e.target.closest("#btn-finish-review") || e.target.closest("#btn-finish-review-bottom")) {
    e.preventDefault();
    state.exitReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (e.target.closest("#btn-switch-to-p1")) {
    e.preventDefault();
    state.setState({
      activeSubjectId: "ing-calidad",
      activeUnitId: "parcial-1",
      activeQuizId: "quiz-p1-completo",
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      continuousSession: null
    });
  }
}

/**
 * Iniciar intento según la modalidad seleccionada
 */
function handleStartQuiz() {
  const currentQuiz = getQuizById(state.state.activeSubjectId, state.state.activeUnitId, state.state.activeQuizId);
  const quizQuestions = getQuestionsForQuiz(currentQuiz, QUESTION_BANK);
  const mode = state.state.executionMode || "batches";

  if (mode === "batches") {
    const batchSize = Math.max(1, state.state.batchSize || 10);
    state.startContinuousSession(quizQuestions, batchSize);
  } else if (mode === "random") {
    const count = Math.max(1, Math.min(quizQuestions.length, state.state.randomCount || 4));
    const randomSubset = getRandomQuestions(count, quizQuestions);
    state.startAttempt(randomSubset);
  } else {
    state.startAttempt([...quizQuestions]);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Evaluar y confirmar envío definitivo del intento
 */
function handleConfirmSubmit() {
  const modal = document.getElementById("moodle-confirm-modal");
  if (modal) modal.classList.add("hidden");

  const currentState = state.getState();
  const results = evaluateAttempt(
    currentState.currentQuestions,
    currentState.userAnswers,
    currentState.startTime,
    new Date()
  );

  state.finishAttempt(results);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
