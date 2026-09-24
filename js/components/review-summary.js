/**
 * Componente: Resumen de Intento y Tabla de Revisión Final
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

/**
 * Renderizar la pantalla intermedia de "Resumen del intento"
 * @param {Array<object>} questions
 * @param {object} state
 */
export function renderAttemptSummary(questions, state) {
  const rowsHtml = questions.map((q, idx) => {
    const userSelected = state.userAnswers[q.id] || [];
    const isAnswered = userSelected.length > 0;
    const isFlagged = state.flaggedQuestions.has(q.id);

    return `
      <tr class="${idx % 2 === 0 ? "r0" : "r1"}">
        <td class="cell c0">
          <a href="#question-${q.id}" class="summary-q-link" data-return-qid="${q.id}">
            Pregunta ${idx + 1}
          </a>
          ${isFlagged ? '<span class="summary-flag-indicator" title="Pregunta señalada">⚑</span>' : ""}
        </td>
        <td class="cell c1 ${isAnswered ? "state-saved" : "state-notyet"}">
          ${isAnswered ? "Respuesta guardada" : "Sin responder aún"}
        </td>
      </tr>
    `;
  }).join("");

  return `
    <div class="quiz-summary-container">
      <h2 class="summary-title">Resumen del intento</h2>
      
      <table class="generaltable quizsummaryofattempt">
        <thead>
          <tr>
            <th class="header c0" scope="col">Pregunta</th>
            <th class="header c1" scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div class="summary-action-buttons">
        <button type="button" id="btn-return-attempt" class="btn btn-secondary">
          Volver al intento
        </button>
        <button type="button" id="btn-submit-attempt-modal" class="btn btn-primary">
          Enviar todo y terminar
        </button>
      </div>
    </div>
  `;
}

/**
 * Renderizar la tabla de cabecera en la pantalla de revisión final
 * @param {object} results
 */
export function renderReviewHeader(results) {
  if (!results) return "";

  // Color de badge de calificación
  let gradeBadgeClass = "grade-badge-high";
  if (results.percentage < 60) gradeBadgeClass = "grade-badge-low";
  else if (results.percentage < 80) gradeBadgeClass = "grade-badge-mid";

  return `
    <div class="quiz-review-header-card">
      <table class="generaltable quizreviewsummary">
        <tbody>
          <tr>
            <th scope="row" class="cell">Comenzado el</th>
            <td class="cell">${results.startTimeFormatted}</td>
          </tr>
          <tr>
            <th scope="row" class="cell">Estado</th>
            <td class="cell"><strong class="state-finished">Finalizado</strong></td>
          </tr>
          <tr>
            <th scope="row" class="cell">Finalizado en</th>
            <td class="cell">${results.finishTimeFormatted}</td>
          </tr>
          <tr>
            <th scope="row" class="cell">Tiempo empleado</th>
            <td class="cell">${results.timeTaken}</td>
          </tr>
          <tr>
            <th scope="row" class="cell">Puntos</th>
            <td class="cell">${results.totalPoints.toFixed(2).replace(".", ",")} / ${results.maxPoints.toFixed(2).replace(".", ",")}</td>
          </tr>
          <tr>
            <th scope="row" class="cell">Calificación</th>
            <td class="cell">
              <span class="quiz-final-grade ${gradeBadgeClass}">
                <strong>${results.gradeFormatted}</strong> de un máximo de 10,00 (<strong>${results.percentage}%</strong>)
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Modal de confirmación para "Enviar todo y terminar"
 */
export function renderConfirmationModal() {
  return `
    <div id="moodle-confirm-modal" class="moodle-dialogue-base modal-backdrop-custom hidden">
      <div class="moodle-dialogue" role="dialog" aria-modal="true">
        <div class="moodle-dialogue-wrap">
          <div class="moodle-dialogue-hd">
            <h4 class="modal-title">Confirmación</h4>
            <button type="button" class="btn-close-modal" id="btn-modal-cancel-x">×</button>
          </div>
          <div class="moodle-dialogue-bd">
            <p>Una vez que envíe el cuestionario, no podrá cambiar sus respuestas para este intento.</p>
          </div>
          <div class="moodle-dialogue-ft">
            <button type="button" id="btn-modal-cancel" class="btn btn-secondary">Cancelar</button>
            <button type="button" id="btn-modal-confirm-submit" class="btn btn-primary">Enviar todo y terminar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderizar banner de progreso para Práctica Continua por Tandas
 * @param {object} continuousSession
 * @param {object} results
 */
export function renderContinuousBanner(continuousSession, results) {
  if (!continuousSession?.active) return "";

  const {
    batchNumber,
    totalBatches,
    completedQuestionsCount,
    totalQuestions,
    batchSize,
    cumulativeCorrect,
    cumulativeTotal,
    cumulativeScore,
    cumulativeMaxScore
  } = continuousSession;

  const remaining = Math.max(0, totalQuestions - completedQuestionsCount);
  const nextBatchCount = Math.min(remaining, batchSize);
  const percentCompleted = Math.round((completedQuestionsCount / totalQuestions) * 100);
  const safeCumScore = Number(cumulativeScore) || 0;
  const safeMaxScore = Number(cumulativeMaxScore) || (cumulativeTotal > 0 ? cumulativeTotal : 0);
  const globalGrade = safeMaxScore > 0 
    ? ((safeCumScore / safeMaxScore) * 10).toFixed(2).replace(".", ",") 
    : (cumulativeTotal > 0 ? ((cumulativeCorrect / cumulativeTotal) * 10).toFixed(2).replace(".", ",") : "0,00");

  return `
    <div class="continuous-batch-banner">
      <div class="continuous-banner-header">
        <div class="continuous-batch-pill">
          🎲 Tanda ${batchNumber} de ${totalBatches} finalizada
        </div>
        <div class="continuous-progress-text">
          <strong>${completedQuestionsCount}</strong> de <strong>${totalQuestions}</strong> preguntas respondidas (<strong>${percentCompleted}%</strong>)
        </div>
      </div>

      <div class="continuous-progress-bar">
        <div class="continuous-progress-fill" style="width: ${percentCompleted}%"></div>
      </div>

      <div class="continuous-stats-grid">
        <div class="continuous-stat-card">
          <span class="stat-label">Este lote (${results?.questionResults?.length || batchSize} preg.)</span>
          <span class="stat-value">${results?.gradeFormatted || "0,00"} / 10,00</span>
        </div>
        <div class="continuous-stat-card">
          <span class="stat-label">Aciertos acumulados</span>
          <span class="stat-value">${cumulativeCorrect} / ${cumulativeTotal}</span>
        </div>
        <div class="continuous-stat-card">
          <span class="stat-label">Promedio global</span>
          <span class="stat-value">${globalGrade} / 10,00</span>
        </div>
        <div class="continuous-stat-card highlight">
          <span class="stat-label">Restantes sin repetir</span>
          <span class="stat-value">${remaining}</span>
        </div>
      </div>

      <div class="continuous-banner-actions">
        ${remaining > 0 ? `
          <button type="button" id="btn-next-continuous-batch" class="btn btn-primary btn-lg">
            Continuar con las siguientes ${nextBatchCount} preguntas al azar (sin repetir) ➡️
          </button>
        ` : `
          <div class="continuous-completion-notice">
            <div class="completion-trophy">🏆</div>
            <div class="completion-details">
              <h4>¡Felicitaciones! Has completado las ${totalQuestions} preguntas del banco sin repetir</h4>
              <p>Calificación final acumulada: <strong>${globalGrade} / 10,00</strong> (${cumulativeCorrect} respuestas correctas de ${totalQuestions})</p>
            </div>
            <div class="continuous-completion-actions">
              ${(continuousSession.missedQuestions && continuousSession.missedQuestions.length > 0) ? `
                <button type="button" id="btn-retry-missed-continuous" class="btn btn-warning btn-lg btn-retry-missed-action">
                  🔄 Rehacer preguntas incorrectas o parciales (${continuousSession.missedQuestions.length})
                </button>
              ` : ""}
              <button type="button" id="btn-restart-continuous-session" class="btn btn-primary">
                Comenzar nueva ronda completa
              </button>
            </div>
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Renderizar tarjeta destacada de opción para rehacer preguntas incorrectas / parciales
 * @param {Array<object>} missedQuestions
 * @returns {string}
 */
export function renderRetryNotice(missedQuestions = []) {
  if (!missedQuestions || missedQuestions.length === 0) {
    return `
      <div class="quiz-retry-card perfect-score">
        <div class="quiz-retry-content">
          <div class="quiz-retry-icon">🌟</div>
          <div class="quiz-retry-info">
            <h4 class="quiz-retry-title">¡Excelente desempeño!</h4>
            <p class="quiz-retry-desc">No tuviste preguntas incorrectas ni con puntaje parcial en este intento.</p>
          </div>
        </div>
      </div>
    `;
  }

  const count = missedQuestions.length;
  return `
    <div class="quiz-retry-card">
      <div class="quiz-retry-content">
        <div class="quiz-retry-icon">🎯</div>
        <div class="quiz-retry-info">
          <h4 class="quiz-retry-title">¿Deseas reforzar tus errores?</h4>
          <p class="quiz-retry-desc">
            Tuviste <strong>${count}</strong> pregunta${count > 1 ? "s" : ""} incorrecta${count > 1 ? "s" : ""} o con puntaje parcial. Puedes rehacerlas ahora para afianzar los conceptos.
          </p>
        </div>
      </div>
      <button type="button" id="btn-retry-missed-top" class="btn btn-warning btn-retry-missed-action">
        🔄 Rehacer preguntas incorrectas o parciales (${count})
      </button>
    </div>
  `;
}

