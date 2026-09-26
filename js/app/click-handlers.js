/**
 * Manejador de Eventos de Clic
 * Responsabilidad: Procesar acciones de clic delegadas en la interfaz
 * Cumple con directivas de arquitectura en AGENTS.md (< 300 líneas)
 */

import { state } from "../core/state.js";
import { evaluateAttempt, getMissedQuestions, prepareQuizQuestions } from "../core/quiz-engine.js";
import { QUESTION_BANK } from "../data/question-bank.js";
import { getQuizById, getQuestionsForQuiz } from "../data/vault-structure.js";
import { exportQuestionsToTxt } from "./export-service.js";

/**
 * Procesar evento de clic delegado
 * @param {MouseEvent} e
 */
export function handleClickEvent(e) {
  // 1. Alternar Modo Oscuro / Modo Claro
  if (e.target.closest("#btn-theme-toggle")) {
    e.preventDefault();
    state.toggleTheme();
    return;
  }

  // 2. Exportar Cuestionario a TXT
  if (e.target.closest("#btn-export-questions-page") || e.target.closest("#btn-export-questions-intro")) {
    e.preventDefault();
    exportQuestionsToTxt();
    return;
  }

  // 3. Modalidad y preajustes
  const btnMode = e.target.closest("[data-execution-mode]");
  if (btnMode) { e.preventDefault(); state.setExecutionMode(btnMode.dataset.executionMode); return; }
  const btnBatch = e.target.closest("[data-batch-size]");
  if (btnBatch) { e.preventDefault(); state.setBatchSize(parseInt(btnBatch.dataset.batchSize, 10)); return; }
  const btnRandom = e.target.closest("[data-random-count]");
  if (btnRandom) { e.preventDefault(); state.setRandomCount(parseInt(btnRandom.dataset.randomCount, 10)); return; }

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
    const shuffleQuestions = state.state.shuffleQuestions ?? true;
    const shuffleOptions = state.state.shuffleOptions ?? true;
    state.startContinuousSession(quizQuestions, state.state.batchSize || 10, { shuffleQuestions, shuffleOptions });
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // 10. Rehacer preguntas incorrectas o con puntaje parcial
  if (e.target.closest(".btn-retry-missed-action") || e.target.closest("#btn-retry-missed-questions")) {
    e.preventDefault();
    const missed = getMissedQuestions(state.getState());
    const questionsToRetry = (missed && missed.length > 0) ? missed : (state.state.lastMissedQuestions || []);
    if (questionsToRetry.length > 0) {
      const shuffleQuestions = state.state.shuffleQuestions ?? true;
      const shuffleOptions = state.state.shuffleOptions ?? true;
      const originalIds = new Set(questionsToRetry.map(q => q.id));
      const cleanPool = QUESTION_BANK.filter(q => originalIds.has(q.id));
      const poolToUse = cleanPool.length > 0 ? cleanPool : questionsToRetry;
      state.startRetryAttempt(prepareQuizQuestions(poolToUse, { shuffleQuestions, shuffleOptions }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  // 11. Alternar bandera / Quitar mi elección
  const btnFlag = e.target.closest(".btn-flag");
  if (btnFlag?.dataset.flagQid) {
    e.preventDefault();
    state.toggleFlag(btnFlag.dataset.flagQid);
    return;
  }
  const btnClear = e.target.closest(".btn-clear-choice");
  if (btnClear?.dataset.clearQid) {
    e.preventDefault();
    state.clearAnswer(btnClear.dataset.clearQid);
    return;
  }

  // 12. Navegación por bloque navblock o enlace de resumen
  const btnNavTarget = e.target.closest(".qnbutton");
  if (btnNavTarget) {
    e.preventDefault();
    if (state.state.executionMode === "quick" && btnNavTarget.dataset.quickGoto !== undefined) {
      state.goToQuestion(parseInt(btnNavTarget.dataset.quickGoto, 10));
      if ((state.state.quickViewMode || "single") === "single") {
        scrollToQuickQuestionStage();
      } else {
        document.getElementById(btnNavTarget.dataset.navTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    document.getElementById(btnNavTarget.dataset.navTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const summaryLink = e.target.closest(".summary-q-link");
  if (summaryLink) {
    e.preventDefault();
    state.resumeAttempt();
    setTimeout(() => {
      document.getElementById(`question-${summaryLink.dataset.returnQid}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return;
  }

  // Botones de Modo Repaso Rápido
  if (e.target.closest("#btn-quick-next") || e.target.closest("#btn-quick-skip") || e.target.closest(".btn-quick-next-inline")) {
    e.preventDefault();
    state.goToNextQuestion();
    if ((state.state.quickViewMode || "single") === "single") scrollToQuickQuestionStage();
    return;
  }
  if (e.target.closest("#btn-quick-prev")) {
    e.preventDefault();
    state.goToPrevQuestion();
    if ((state.state.quickViewMode || "single") === "single") scrollToQuickQuestionStage();
    return;
  }
  if (e.target.closest("#btn-quick-finish") || e.target.closest("#btn-finish-quick-nav") || e.target.closest(".btn-quick-finish-inline")) {
    e.preventDefault();
    handleConfirmSubmit();
    return;
  }
  const btnQuickView = e.target.closest("[data-quick-view]");
  if (btnQuickView) {
    e.preventDefault();
    state.setQuickViewMode(btnQuickView.dataset.quickView);
    return;
  }
  const btnCheck = e.target.closest(".btn-check-answer");
  if (btnCheck?.dataset.checkQid) {
    e.preventDefault();
    state.evaluateQuickQuestion(btnCheck.dataset.checkQid);
    return;
  }

  // 13. Ir a resumen / Volver al intento
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

  // 14. Modales de confirmación y envío definitivo
  if (e.target.closest("#btn-submit-attempt-modal")) {
    e.preventDefault();
    document.getElementById("moodle-confirm-modal")?.classList.remove("hidden");
    return;
  }
  if (e.target.closest("#btn-modal-cancel") || e.target.closest("#btn-modal-cancel-x")) {
    e.preventDefault();
    document.getElementById("moodle-confirm-modal")?.classList.add("hidden");
    return;
  }
  if (e.target.closest("#btn-modal-confirm-submit")) {
    e.preventDefault();
    handleConfirmSubmit();
    return;
  }

  // 15. Modal "¿Cómo se crean los cuestionarios?"
  if (e.target.closest("#btn-how-to-create")) {
    e.preventDefault();
    document.getElementById("how-to-create-modal")?.classList.remove("hidden");
    return;
  }
  if (e.target.closest("#btn-how-to-create-close") || e.target.closest("#btn-how-to-create-close-x") || e.target.id === "how-to-create-modal") {
    e.preventDefault();
    document.getElementById("how-to-create-modal")?.classList.add("hidden");
    return;
  }
  const btnCopyPrompt = e.target.closest("#btn-copy-prompt") || e.target.closest("#btn-copy-prompt-footer");
  if (btnCopyPrompt) {
    e.preventDefault();
    const promptText = document.getElementById("prompt-text-display")?.innerText || "";
    const showCopied = () => {
      const orig = btnCopyPrompt.innerHTML;
      btnCopyPrompt.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>¡Copiado!</span>`;
      setTimeout(() => { btnCopyPrompt.innerHTML = orig; }, 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(promptText).then(showCopied).catch(() => {
        copyFallback(promptText);
        showCopied();
      });
    } else {
      copyFallback(promptText);
      showCopied();
    }
    return;
  }

  // 16. Finalizar revisión / Volver a P1
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
  const shuffleQuestions = state.state.shuffleQuestions ?? true;
  const shuffleOptions = state.state.shuffleOptions ?? true;
  const opts = { shuffleQuestions, shuffleOptions };

  if (mode === "batches") {
    state.startContinuousSession(quizQuestions, Math.max(1, state.state.batchSize || 10), opts);
  } else if (mode === "random") {
    const count = Math.max(1, Math.min(quizQuestions.length, state.state.randomCount || 4));
    state.startAttempt(prepareQuizQuestions(quizQuestions, { shuffleQuestions: true, shuffleOptions }).slice(0, count));
  } else if (mode === "quick") {
    state.startQuickAttempt(prepareQuizQuestions(quizQuestions, opts));
    setTimeout(scrollToQuickQuestionStage, 30);
    return;
  } else {
    state.startAttempt(prepareQuizQuestions(quizQuestions, opts));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Anclar scroll en el nivel del cuestionario y opciones en Repaso Rápido (1 a 1)
 */
function scrollToQuickQuestionStage() {
  const target = document.querySelector(".quick-mode-header-card") || document.getElementById("quiz-main-stage");
  if (!target) return;
  const headerHeight = document.querySelector(".cv-header")?.offsetHeight || 64;
  const desiredScrollY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 10);
  if (Math.abs(window.scrollY - desiredScrollY) > 15) window.scrollTo({ top: desiredScrollY, behavior: "smooth" });
}

function handleConfirmSubmit() {
  document.getElementById("moodle-confirm-modal")?.classList.add("hidden");
  const s = state.getState();
  state.finishAttempt(evaluateAttempt(s.currentQuestions, s.userAnswers, s.startTime, new Date()));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function copyFallback(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (_) {}
  document.body.removeChild(ta);
}
