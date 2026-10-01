/**
 * Componente: Tarjeta de Pregunta (.que)
 * Réplica exacta de la estructura HTML y clases de Moodle Quiz
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

import { evaluateSingleQuestion } from "../core/quiz-engine.js";
import { formatExplanation, escapeHtml } from "./explanation-formatter.js";

export function renderQuestion(question, index, state, isReview = false, result = null) {
  const qId = question.id;
  const userSelected = state.userAnswers[qId] || [];
  const isFlagged = state.flaggedQuestions ? state.flaggedQuestions.has(qId) : false;
  const isAnswered = userSelected.length > 0;
  const isMultiple = question.type === "multiple";
  const isQuickMode = state.executionMode === "quick";
  const isQuickEvaluated = isQuickMode && state.quickEvaluatedQuestions && state.quickEvaluatedQuestions.has(qId);
  const effectiveResult = result || (isQuickEvaluated ? evaluateSingleQuestion(question, userSelected) : null);
  const showFeedback = isReview || isQuickEvaluated;

  // Clases CSS de la pregunta
  let queClasses = `que ${isMultiple ? "multichoice" : "singlechoice"}`;
  let statusText = isAnswered ? "Respuesta guardada" : "Sin responder aún";
  let gradeText = `Puntúa como ${(question.points || 1.0).toFixed(2).replace(".", ",")}`;

  if (showFeedback && effectiveResult) {
    if (effectiveResult.status === "correct") {
      queClasses += " correct";
      statusText = "Correcta";
    } else if (effectiveResult.status === "partiallycorrect") {
      queClasses += " partiallycorrect";
      statusText = "Parcialmente correcta";
    } else {
      queClasses += " incorrect";
      statusText = "Incorrecta";
    }
    gradeText = `Puntúa ${effectiveResult.earnedPoints.toFixed(2).replace(".", ",")} sobre ${(question.points || 1.0).toFixed(2).replace(".", ",")}`;
  }

  // Renderizar opciones
  const optionsHtml = question.options.map((opt, optIdx) => {
    const isChecked = userSelected.includes(opt.id);
    const inputType = isMultiple ? "checkbox" : "radio";
    const inputName = `q_${qId}`;
    const inputId = `q_${qId}_opt_${opt.id}`;
    const rowClass = optIdx % 2 === 0 ? "r0" : "r1";

    let reviewFeedbackBadge = "";
    let optionRowClass = rowClass;

    if (showFeedback && effectiveResult) {
      const isCorrectOption = question.correctAnswers.includes(opt.id);
      if (isChecked && isCorrectOption) {
        optionRowClass += " option-correct-selected";
      } else if (isChecked && !isCorrectOption) {
        optionRowClass += " option-incorrect-selected";
        reviewFeedbackBadge = `<span class="feedback-badge incorrect" title="Opción incorrecta seleccionada">✗</span>`;
      } else if (!isChecked && isCorrectOption) {
        optionRowClass += " option-correct-missed";
      }
    }

    let quickInlineBtn = "";
    if (showFeedback && effectiveResult && isQuickMode) {
      const isCorrectOption = question.correctAnswers.includes(opt.id);
      const isFirstCorrect = opt.id === (question.correctAnswers || [])[0];
      if (isCorrectOption && isFirstCorrect) {
        const totalQ = state?.currentQuestions?.length || 0;
        const isLast = totalQ > 0 && index >= totalQ - 1;
        const btnClass = isLast ? "btn-quick-finish-inline" : "btn-quick-next-inline";
        const btnText = isLast ? "Siguiente &rarr;" : "Siguiente &rarr;";
        const finalBtnText = isLast ? "Finalizar &rarr;" : btnText;
        const btnTitle = isLast ? "Finalizar repaso y ver calificación" : "Pasar a la siguiente pregunta";
        quickInlineBtn = `
          <button type="button" class="btn btn-primary btn-sm ${btnClass} btn-quick-inline-action" title="${btnTitle}">
            ${finalBtnText}
          </button>
        `;
      }
    }

    return `
      <div class="${optionRowClass}">
        <input 
          type="${inputType}" 
          name="${inputName}" 
          value="${opt.id}" 
          id="${inputId}"
          ${isChecked ? "checked" : ""}
          ${showFeedback ? "disabled" : ""}
          data-question-id="${qId}"
          data-option-id="${opt.id}"
          data-is-multiple="${isMultiple}"
          class="option-input"
        />
        <label for="${inputId}" class="option-label">
          <span class="answernumber">${opt.id}. </span>
          <span class="option-text">${escapeHtml(opt.text)}</span>
        </label>
        ${reviewFeedbackBadge}
        ${quickInlineBtn}
      </div>
    `;
  }).join("");

  // Gráfico ilustrativo si la pregunta lo amerita
  const diagramHtml = renderDiagramSvg(question.diagram);

  // Cuadro de retroalimentación final o inmediata
  let outcomeHtml = "";
  if (showFeedback && effectiveResult) {
    let outcomeBoxClass = "outcome";
    let outcomeTitle = "Respuesta correcta";

    if (effectiveResult.status === "correct") {
      outcomeBoxClass += " outcome-correct";
      outcomeTitle = "Respuesta correcta";
    } else if (effectiveResult.status === "partiallycorrect") {
      outcomeBoxClass += " outcome-partial";
      outcomeTitle = `Respuesta parcialmente correcta. Ha seleccionado correctamente ${effectiveResult.earnedPoints.toFixed(2).replace(".", ",")}.`;
    } else {
      outcomeBoxClass += " outcome-incorrect";
      outcomeTitle = "Respuesta incorrecta.";
    }

    // Texto de las opciones correctas
    const correctTexts = question.options
      .filter(o => question.correctAnswers.includes(o.id))
      .map(o => `<strong>${o.id}.</strong> ${escapeHtml(o.text)}`)
      .join("<br/>");

    outcomeHtml = `
      <div class="${outcomeBoxClass}">
        <div class="feedback-title">${outcomeTitle}</div>
        <div class="feedback-correct-answer">
          La respuesta correcta es:<br/>
          <div class="correct-answer-list">${correctTexts}</div>
        </div>
        ${question.explanation ? `
          <div class="feedback-explanation">
            <div class="feedback-explanation-header">
              <span class="feedback-explanation-icon" aria-hidden="true">💡</span>
              <strong>Justificación teórica:</strong>
            </div>
            <div class="feedback-explanation-body">
              ${formatExplanation(question.explanation)}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  return `
    <div class="${queClasses}" id="question-${qId}">
      <!-- Columna izquierda: Información de Moodle -->
      <div class="info">
        <h3 class="no">Pregunta <span class="qno">${index + 1}</span></h3>
        <div class="status">${statusText}</div>
        <div class="grade">${gradeText}</div>
        <div class="questionflag">
          <button type="button" class="btn-flag ${isFlagged ? "flagged" : ""}" data-flag-qid="${qId}">
            <svg class="flag-icon" viewBox="0 0 24 24" width="14" height="14" fill="${isFlagged ? "#dc3545" : "none"}" stroke="${isFlagged ? "#dc3545" : "#6c757d"}" stroke-width="2">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
              <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
            <span class="flag-text">${isFlagged ? "Pregunta señalada" : "Señalar con bandera la pregunta"}</span>
          </button>
        </div>
      </div>

      <!-- Columna derecha: Formulación y contenido -->
      <div class="content">
        <div class="formulation">
          <div class="qtext">
            <p>${escapeHtml(question.prompt)}</p>
          </div>

          ${diagramHtml}

          <div class="prompt">
            ${isMultiple ? "Seleccione una o más de una:" : "Seleccione una:"}
          </div>

          <div class="answer">
            ${optionsHtml}
          </div>

          ${isMultiple && isQuickMode && !isQuickEvaluated && isAnswered ? `
            <div class="check-answer-wrapper" style="margin-top: 1rem;">
              <button type="button" class="btn btn-primary btn-check-answer" data-check-qid="${qId}">
                Comprobar respuesta
              </button>
            </div>
          ` : ""}

          ${!showFeedback && isAnswered && !isQuickMode ? `
            <div class="clear-choice-wrapper">
              <button type="button" class="btn-clear-choice" data-clear-qid="${qId}">
                Quitar mi elección
              </button>
            </div>
          ` : ""}
        </div>

        ${outcomeHtml}
      </div>
    </div>
  `;
}

/**
 * Generador de diagramas SVG para preguntas que referencian figuras de parcial
 */
function renderDiagramSvg(diagramType) {
  if (!diagramType) return "";

  if (diagramType === "fallo_soft" || diagramType === "failure-rate-chart") {
    return `
      <div class="quiz-diagram-box">
        <div class="diagram-caption">Gráfico: Tasa de fallas del software a lo largo del tiempo (Efectos colaterales por cambios)</div>
        <img src="fallo_soft.png" alt="Curva de tasa de fallas del software a lo largo del tiempo" class="quiz-diagram-img" />
      </div>
    `;
  }

  if (diagramType === "baniera" || diagramType === "bathtub-chart") {
    return `
      <div class="quiz-diagram-box">
        <div class="diagram-caption">Gráfico: Curva de tasa de fallas del hardware (Curva de la Bañera)</div>
        <img src="baniera.png" alt="Curva de la Bañera - Tasa de fallas del hardware a lo largo del tiempo" class="quiz-diagram-img" />
      </div>
    `;
  }

  if (diagramType === "baseline-structure-chart") {
    return `
      <div class="quiz-diagram-box">
        <div class="diagram-caption">Gráfico 2: Estructura de Elementos de Configuración y Línea Base</div>
        <svg viewBox="0 0 600 200" class="quiz-svg-chart">
          <!-- Marco Línea Base -->
          <rect x="50" y="30" width="500" height="140" rx="8" fill="#edf2f7" stroke="#2b6cb0" stroke-width="2" stroke-dasharray="5"/>
          <text x="70" y="55" font-size="13" font-weight="bold" fill="#2b6cb0">Línea Base Aprobada (Baseline)</text>
          
          <!-- Nodos de elementos -->
          <g transform="translate(80, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="18" y="36" font-size="16" font-weight="bold" fill="#2d3748">A2</text>
          </g>
          <g transform="translate(160, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="18" y="36" font-size="16" font-weight="bold" fill="#2d3748">B2</text>
          </g>
          <g transform="translate(240, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="18" y="36" font-size="16" font-weight="bold" fill="#2d3748">C1</text>
          </g>
          <g transform="translate(320, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="18" y="36" font-size="16" font-weight="bold" fill="#2d3748">D1</text>
          </g>
          <g transform="translate(400, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="18" y="36" font-size="16" font-weight="bold" fill="#2d3748">E3</text>
          </g>
          <g transform="translate(480, 80)">
            <rect width="60" height="60" rx="6" fill="#fff" stroke="#4a5568" stroke-width="2"/>
            <text x="20" y="36" font-size="16" font-weight="bold" fill="#2d3748">F3</text>
          </g>
        </svg>
      </div>
    `;
  }

  return "";
}
