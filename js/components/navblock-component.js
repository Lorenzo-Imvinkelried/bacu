/**
 * Componente: Bloque de Navegación del Cuestionario (#mod_quiz_navblock)
 * Réplica exacta de la grilla de semáforos y estados de Moodle
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

import { evaluateSingleQuestion } from "../core/quiz-engine.js";

export function renderNavBlock(questions, state, isReview = false, results = null) {
  const isQuickMode = state.executionMode === "quick";

  const buttonsHtml = questions.map((q, idx) => {
    const qId = q.id;
    const isFlagged = state.flaggedQuestions ? state.flaggedQuestions.has(qId) : false;
    const userSelected = state.userAnswers[qId] || [];
    const isAnswered = userSelected.length > 0;
    const isQuickEvaluated = isQuickMode && state.quickEvaluatedQuestions && state.quickEvaluatedQuestions.has(qId);
    const isCurrent = isQuickMode && idx === state.activeQuestionIndex;

    let qnClasses = "qnbutton";
    let trafficLightClass = "trafficlight";

    if (isReview && results) {
      const qRes = results.questionResults?.find(r => r.questionId === qId);
      if (qRes) {
        if (qRes.status === "correct") {
          qnClasses += " correct";
          trafficLightClass += " correct";
        } else if (qRes.status === "partiallycorrect") {
          qnClasses += " partiallycorrect";
          trafficLightClass += " partiallycorrect";
        } else {
          qnClasses += " incorrect";
          trafficLightClass += " incorrect";
        }
      }
    } else if (isQuickEvaluated) {
      const qRes = evaluateSingleQuestion(q, userSelected);
      if (qRes.status === "correct") {
        qnClasses += " correct";
        trafficLightClass += " correct";
      } else if (qRes.status === "partiallycorrect") {
        qnClasses += " partiallycorrect";
        trafficLightClass += " partiallycorrect";
      } else {
        qnClasses += " incorrect";
        trafficLightClass += " incorrect";
      }
    } else {
      if (isAnswered) {
        qnClasses += " answersaved complete";
      } else {
        qnClasses += " notyetanswered";
      }
    }

    if (isFlagged) {
      qnClasses += " flagged";
    }

    if (isCurrent) {
      qnClasses += " current-question";
    }

    return `
      <a 
        href="#question-${qId}" 
        class="${qnClasses}" 
        id="quiznavbutton-${idx + 1}"
        data-nav-target="question-${qId}"
        data-quick-goto="${idx}"
        title="Pregunta ${idx + 1}: ${isAnswered ? "Respuesta guardada" : "Sin responder aún"}${isFlagged ? " (Señalada)" : ""}"
      >
        <span class="thispageholder"></span>
        <span class="qnum">${idx + 1}</span>
        <span class="${trafficLightClass}"></span>
      </a>
    `;
  }).join("");

  return `
    <div id="mod_quiz_navblock" class="block block_navigation">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Navegación por el cuestionario</h4>
        </div>
        <div class="card-body">
          <div class="qnlist clearfix">
            ${buttonsHtml}
          </div>

          <div class="nav-action-wrapper">
            ${!isReview ? `
              <button type="button" id="btn-finish-attempt-nav" class="btn btn-finish-attempt">
                ${isQuickMode ? "Finalizar repaso..." : "Terminar intento..."}
              </button>
            ` : `
              <button type="button" id="btn-finish-review" class="btn btn-finish-review">
                Finalizar revisión
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}
