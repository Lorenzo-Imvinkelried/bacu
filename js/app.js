/**
 * Orquestador Principal de la Aplicación - Baúl de Cuestionarios
 * Conecta capas de Datos, Lógica, Estado, Componentes y Vistas
 * Cumple estrictamente con directivas en AGENTS.md (SoC, archivos < 300 líneas)
 */

import { state } from "./core/state.js";
import { QUESTION_BANK } from "./data/question-bank.js";
import { getSubjectById, getUnitById, getQuizById, getQuestionsForQuiz } from "./data/vault-structure.js";

import { renderHeader } from "./components/header-component.js";
import { renderAttemptSummary, renderConfirmationModal } from "./components/review-summary.js";
import { renderHowToCreateModal } from "./components/how-to-create-modal.js";

import { getFormattedQuizTitle } from "./app/quiz-title.js";
import { renderIntroView } from "./app/intro-view.js";
import { renderAttemptView } from "./app/attempt-view.js";
import { setupEventListeners } from "./app/event-handlers.js";
import { exportQuestionsToTxt } from "./app/export-service.js";
import { refreshAnnotationCountsForQuestions } from "./app/annotations-handlers.js";

// Re-exportar para compatibilidad si fuera requerido externamente
export { exportQuestionsToTxt };

/**
 * Inicialización de la aplicación
 */
export function initApp() {
  const root = document.getElementById("app-root");
  if (!root) {
    console.error("No se encontró el elemento #app-root en el DOM");
    return;
  }

  // Suscribirse a cambios en el estado para re-renderizar
  state.subscribe((currentState) => {
    render(root, currentState);
  });

  // Configurar eventos globales delegados
  setupEventListeners(root);

  // Render inicial
  render(root, state.getState());
}

/**
 * Renderizado principal de la vista
 * @param {HTMLElement} root
 * @param {object} currentState
 */
function render(root, currentState) {
  const subject = getSubjectById(currentState.activeSubjectId);
  const unit = getUnitById(currentState.activeSubjectId, currentState.activeUnitId);
  const quiz = getQuizById(currentState.activeSubjectId, currentState.activeUnitId, currentState.activeQuizId);

  const quizQuestions = getQuestionsForQuiz(quiz, QUESTION_BANK);
  const totalQuestions = quizQuestions.length || unit?.questionCount || 92;
  const displayTitle = getFormattedQuizTitle(quiz, currentState, totalQuestions);

  const headerHtml = renderHeader(currentState, subject, unit, quiz ? { ...quiz, title: displayTitle } : null);
  const confirmModalHtml = renderConfirmationModal();
  const howToCreateModalHtml = renderHowToCreateModal();

  let mainContentHtml = "";

  if (currentState.quizStatus === "intro") {
    mainContentHtml = renderIntroView(quiz, unit, currentState);
  } else if (currentState.quizStatus === "attempt") {
    mainContentHtml = renderAttemptView(currentState.currentQuestions, currentState, false, null);
  } else if (currentState.quizStatus === "summary") {
    mainContentHtml = renderAttemptSummary(currentState.currentQuestions, currentState);
  } else if (currentState.quizStatus === "review") {
    mainContentHtml = renderAttemptView(currentState.currentQuestions, currentState, true, currentState.results);
  }

  root.innerHTML = `
    ${headerHtml}
    <main class="cv-main-wrapper">
      <div class="cv-page-title-section">
        <div class="cv-page-title-group">
          <h1>${displayTitle}</h1>
          <p>${unit ? unit.name : "Parcial 1"} &bull; ${subject ? subject.name : "Ingeniería y Calidad"}</p>
        </div>
        <div class="cv-page-actions">
          <button type="button" class="btn btn-outline" id="btn-export-questions-page" title="Exportar las preguntas de este cuestionario con respuestas oficiales a TXT">
            Exportar cuestionario (TXT)
          </button>
        </div>
      </div>

      <div id="quiz-main-stage">
        ${mainContentHtml}
      </div>
    </main>

    ${confirmModalHtml}
    ${howToCreateModalHtml}

    <footer class="cv-footer">
      <p>BACU - Baúl de Cuestionarios &copy; 2026</p>
    </footer>
  `;

  if (currentState.quizStatus === "attempt" || currentState.quizStatus === "review") {
    refreshAnnotationCountsForQuestions(currentState.currentQuestions);
  }
}
