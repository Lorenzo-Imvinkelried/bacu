/**
 * Vista de Intento y Revisión de Cuestionario
 * Responsabilidad: Renderizar la estructura del intento activo y de la pantalla de revisión
 * Cumple con directivas de arquitectura en AGENTS.md
 */

import { renderQuestion } from "../components/question-component.js";
import { renderNavBlock } from "../components/navblock-component.js";
import { renderReviewHeader, renderContinuousBanner } from "../components/review-summary.js";

/**
 * Renderizar grilla de preguntas y bloque de navegación
 * @param {Array<object>} questions
 * @param {object} currentState
 * @param {boolean} isReview
 * @param {object|null} results
 * @returns {string} HTML
 */
export function renderAttemptView(questions, currentState, isReview, results) {
  const reviewHeaderHtml = isReview ? renderReviewHeader(results) : "";
  const continuousBannerHtml = (isReview && currentState.continuousSession?.active) 
    ? renderContinuousBanner(currentState.continuousSession, results) 
    : "";

  const questionsListHtml = questions.map((q, idx) => {
    const qResult = results?.questionResults?.find(r => r.questionId === q.id);
    return renderQuestion(q, idx, currentState, isReview, qResult);
  }).join("");

  const navBlockHtml = renderNavBlock(questions, currentState, isReview, results);

  const isContinuousActive = currentState.continuousSession?.active;
  const remaining = isContinuousActive 
    ? Math.max(0, currentState.continuousSession.totalQuestions - currentState.continuousSession.completedQuestionsCount)
    : 0;
  const nextBatchCount = isContinuousActive 
    ? Math.min(remaining, currentState.continuousSession.batchSize) 
    : 0;

  return `
    ${reviewHeaderHtml}
    ${continuousBannerHtml}
    <div class="cv-quiz-grid-layout">
      <div class="quiz-questions-column">
        ${questionsListHtml}
        
        <div class="quiz-bottom-actions">
          ${!isReview ? `
            <button type="button" id="btn-finish-attempt-bottom" class="btn btn-secondary">
              Terminar intento...
            </button>
          ` : (
            isContinuousActive && remaining > 0 ? `
              <button type="button" id="btn-next-continuous-batch-bottom" class="btn btn-primary btn-lg">
                Continuar con las siguientes ${nextBatchCount} preguntas (sin repetir) ➡️
              </button>
              <button type="button" id="btn-finish-review-bottom" class="btn btn-secondary">
                Pausar y finalizar revisión
              </button>
            ` : `
              <button type="button" id="btn-finish-review-bottom" class="btn btn-primary">
                Finalizar revisión
              </button>
            `
          )}
        </div>
      </div>

      <aside class="quiz-navblock-column">
        ${navBlockHtml}
      </aside>
    </div>
  `;
}
