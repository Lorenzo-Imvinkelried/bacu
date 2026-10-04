/**
 * Vista de Intento y Revisión de Cuestionario
 * Responsabilidad: Renderizar la estructura del intento activo y de la pantalla de revisión
 * Cumple con directivas de arquitectura en AGENTS.md
 */

import { renderQuestion } from "../components/question-component.js";
import { renderNavBlock } from "../components/navblock-component.js";
import { renderReviewHeader, renderContinuousBanner, renderRetryNotice } from "../components/review-summary.js";
import { getMissedQuestions, evaluateSingleQuestion } from "../core/quiz-engine.js";
import { readyNextMap } from "../core/multiplayer-duel.js";

/**
 * Renderizar grilla de preguntas y bloque de navegación
 * @param {Array<object>} questions
 * @param {object} currentState
 * @param {boolean} isReview
 * @param {object|null} results
 * @returns {string} HTML
 */
export function renderAttemptView(questions, currentState, isReview, results) {
  const isContinuousActive = currentState.continuousSession?.active;
  const isQuickMode = currentState.executionMode === "quick";
  const remaining = isContinuousActive 
    ? Math.max(0, currentState.continuousSession.totalQuestions - currentState.continuousSession.completedQuestionsCount)
    : 0;
  const nextBatchCount = isContinuousActive 
    ? Math.min(remaining, currentState.continuousSession.batchSize) 
    : 0;
  const isAllCompleted = !isContinuousActive || (isContinuousActive && remaining === 0);

  const missedQuestions = (isReview && isAllCompleted) ? getMissedQuestions(currentState) : [];
  const reviewHeaderHtml = isReview ? renderReviewHeader(results) : "";
  const continuousBannerHtml = (isReview && isContinuousActive) 
    ? renderContinuousBanner(currentState.continuousSession, results) 
    : "";
  const retryNoticeHtml = (isReview && isAllCompleted) 
    ? renderRetryNotice(missedQuestions) 
    : "";

  if (!questions || questions.length === 0) {
    return `
      <div class="empty-questions-notice" style="text-align: center; padding: 3rem 1rem;">
        <p style="font-size: 1.1rem; color: var(--color-text-muted);">Sincronizando preguntas de la sala compartida...</p>
      </div>
    `;
  }

  // Barra de progreso y estadísticas en Modo Repaso Rápido
  let quickHeaderHtml = "";
  let questionsListHtml = "";
  let bottomActionsHtml = "";

  if (isQuickMode && !isReview) {
    const evaluatedSet = (currentState.quickEvaluatedQuestions && typeof currentState.quickEvaluatedQuestions.has === "function")
      ? currentState.quickEvaluatedQuestions
      : new Set();
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(q => {
      if (evaluatedSet.has(q.id)) {
        const userSel = (currentState.userAnswers && currentState.userAnswers[q.id]) || [];
        const res = evaluateSingleQuestion(q, userSel);
        if (res.status === "correct") correctCount++;
        else incorrectCount++;
      }
    });

    const evaluatedCount = evaluatedSet.size;
    const pendingCount = Math.max(0, questions.length - evaluatedCount);
    const progressPercent = questions.length > 0 ? Math.round((evaluatedCount / questions.length) * 100) : 0;
    const activeIdx = Math.max(0, Math.min(questions.length - 1, currentState.activeQuestionIndex || 0));
    const isSingleView = (currentState.quickViewMode || "single") === "single";
    const currentQ = questions[activeIdx];
    const isCurrentEvaluated = currentQ && evaluatedSet.has(currentQ.id);

    quickHeaderHtml = `
      <div class="quick-mode-header-card">
        <div class="quick-header-top">
          <div class="quick-mode-title-tag">
            <strong>Repaso Rápido:</strong>
            <span class="quick-step-text">Pregunta ${activeIdx + 1} de ${questions.length}</span>
          </div>
          <div class="quick-stats-pills">
            <span class="quick-stat-badge stat-correct">${correctCount} correctas</span>
            <span class="quick-stat-badge stat-incorrect">${incorrectCount} incorrectas</span>
            <span class="quick-stat-badge stat-pending">${pendingCount} restantes</span>
          </div>
          <div class="quick-view-toggle-group">
            <button type="button" class="btn-quick-view-mode ${isSingleView ? "active" : ""}" data-quick-view="single">1 a 1</button>
            <button type="button" class="btn-quick-view-mode ${!isSingleView ? "active" : ""}" data-quick-view="list">Ver todas</button>
          </div>
        </div>
        <div class="quick-progress-container">
          <div class="quick-progress-bar" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
    `;

    if (isSingleView && currentQ) {
      questionsListHtml = renderQuestion(currentQ, activeIdx, currentState, false, null);
      bottomActionsHtml = `
        <div class="quiz-bottom-actions quick-bottom-actions">
          <button type="button" id="btn-quick-prev" class="btn btn-secondary" ${activeIdx === 0 ? "disabled" : ""}>
            &larr; Anterior
          </button>
          ${activeIdx < questions.length - 1 ? (() => {
            if (currentState.isMultiplayer) {
              const localId = (typeof window !== "undefined" && window._bacuLocalUserId) || "";
              const set = readyNextMap.get(activeIdx);
              const isLocalReady = set?.has(localId);
              const readyCount = set?.size || 0;
              if (isLocalReady) {
                return `
                  <button type="button" id="btn-quick-next" class="btn btn-secondary btn-lg" disabled>
                    Listo (${readyCount}/2) &bull; Esperando al compañero...
                  </button>
                `;
              }
              if (readyCount > 0) {
                return `
                  <button type="button" id="btn-quick-next" class="btn btn-primary btn-lg btn-partner-ready">
                    Tu compañero está listo &rarr; Avanzar
                  </button>
                `;
              }
            }
            return `
              <button type="button" id="btn-quick-next" class="btn ${isCurrentEvaluated ? "btn-primary" : "btn-outline"} btn-lg">
                ${isCurrentEvaluated ? "Siguiente pregunta &rarr;" : "Saltear pregunta &rarr;"}
              </button>
            `;
          })() : `
            <button type="button" id="btn-quick-finish" class="btn btn-primary btn-lg">
              Finalizar repaso y ver calificación
            </button>
          `}
          <button type="button" id="btn-finish-attempt-bottom" class="btn btn-outline" style="margin-left: auto;">
            Finalizar repaso ahora...
          </button>
        </div>
      `;
    } else {
      questionsListHtml = questions.map((q, idx) => renderQuestion(q, idx, currentState, false, null)).join("");
      bottomActionsHtml = `
        <div class="quiz-bottom-actions">
          <button type="button" id="btn-finish-attempt-bottom" class="btn btn-primary btn-lg">
            Finalizar repaso y ver calificación
          </button>
        </div>
      `;
    }
  } else {
    questionsListHtml = questions.map((q, idx) => {
      const qResult = results?.questionResults?.find(r => r.questionId === q.id);
      return renderQuestion(q, idx, currentState, isReview, qResult);
    }).join("");

    bottomActionsHtml = `
      <div class="quiz-bottom-actions">
        ${!isReview ? `
          <button type="button" id="btn-finish-attempt-bottom" class="btn btn-secondary">
            Terminar intento...
          </button>
        ` : (
          isContinuousActive && remaining > 0 ? `
            <button type="button" id="btn-next-continuous-batch-bottom" class="btn btn-primary btn-lg">
              Continuar con las siguientes ${nextBatchCount} preguntas (sin repetir)
            </button>
            <button type="button" id="btn-finish-review-bottom" class="btn btn-secondary">
              Pausar y finalizar revisión
            </button>
          ` : `
            ${missedQuestions.length > 0 ? `
              <button type="button" id="btn-retry-missed-bottom" class="btn btn-warning btn-lg btn-retry-missed-action">
                Rehacer incorrectas / parciales (${missedQuestions.length})
              </button>
            ` : ""}
            <button type="button" id="btn-finish-review-bottom" class="btn btn-primary">
              Finalizar revisión
            </button>
          `
        )}
      </div>
    `;
  }

  const navBlockHtml = renderNavBlock(questions, currentState, isReview, results);

  return `
    ${reviewHeaderHtml}
    ${continuousBannerHtml}
    ${retryNoticeHtml}
    ${quickHeaderHtml}
    <div class="cv-quiz-grid-layout">
      <div class="quiz-questions-column">
        ${questionsListHtml}
        ${bottomActionsHtml}
      </div>

      <aside class="quiz-navblock-column">
        ${navBlockHtml}
      </aside>
    </div>
  `;
}
