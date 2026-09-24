/**
 * Componente: Bloque de Navegación del Cuestionario (#mod_quiz_navblock)
 * Réplica exacta de la grilla de semáforos y estados de Moodle
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

export function renderNavBlock(questions, state, isReview = false, results = null) {
  const buttonsHtml = questions.map((q, idx) => {
    const qId = q.id;
    const isFlagged = state.flaggedQuestions.has(qId);
    const userSelected = state.userAnswers[qId] || [];
    const isAnswered = userSelected.length > 0;

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

    return `
      <a 
        href="#question-${qId}" 
        class="${qnClasses}" 
        id="quiznavbutton-${idx + 1}"
        data-nav-target="question-${qId}"
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
                Terminar intento...
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
