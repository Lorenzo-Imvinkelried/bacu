/**
 * Formateador de Título de Cuestionario
 * Responsabilidad: Generar el título dinámico con indicador de tanda si corresponde
 * Cumple con directivas de arquitectura en AGENTS.md
 */

/**
 * Obtener el título formateado del cuestionario con indicador de tanda
 * @param {object} quiz
 * @param {object} currentState
 * @param {number} totalQuestions
 * @returns {string}
 */
export function getFormattedQuizTitle(quiz, currentState, totalQuestions) {
  const baseTitle = quiz ? quiz.title : "WORD PARCIAL 1 (92 preguntas)";
  const isBatches = currentState.executionMode === "batches" || Boolean(currentState.continuousSession?.active);

  if (!isBatches) {
    return baseTitle;
  }

  const batchSize = Math.min(totalQuestions, Math.max(1, currentState.batchSize || 10));
  const totalBatches = Math.ceil(totalQuestions / batchSize);
  let batchNum = 1;
  let questionsUpToNow = batchSize;

  if (currentState.continuousSession?.active) {
    batchNum = currentState.continuousSession.batchNumber;
    questionsUpToNow = Math.min(
      currentState.continuousSession.totalQuestions,
      currentState.continuousSession.currentIndex + currentState.continuousSession.batchSize
    );
  }

  return `${baseTitle} (Tanda ${batchNum}/${totalBatches} ${questionsUpToNow}/${totalQuestions} preguntas)`;
}
