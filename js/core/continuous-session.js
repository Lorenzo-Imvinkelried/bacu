/**
 * Dominio de Práctica Continua por Tandas sin Repetición
 * Responsabilidad: Manejo y cálculo de sesiones secuenciales por tandas
 * Cumple con directivas de arquitectura en AGENTS.md (< 300 líneas)
 */

/**
 * Crear nueva sesión de práctica continua
 * @param {Array<object>} questionsPool Pool de preguntas
 * @param {number} batchSize Tamaño de tanda
 * @returns {{ session: object, firstBatch: Array<object> }}
 */
export function createContinuousSession(questionsPool, batchSize = 10) {
  const size = Math.max(1, Math.min(questionsPool.length, parseInt(batchSize, 10) || 10));
  // Mezcla aleatoria Fisher-Yates
  const shuffled = [...questionsPool].sort(() => Math.random() - 0.5);
  const firstBatch = shuffled.slice(0, size);

  const session = {
    active: true,
    batchSize: size,
    pool: shuffled,
    currentIndex: 0,
    totalQuestions: shuffled.length,
    completedQuestionsCount: 0,
    batchNumber: 1,
    totalBatches: Math.ceil(shuffled.length / size),
    cumulativeCorrect: 0,
    cumulativeTotal: 0,
    cumulativeScore: 0,
    cumulativeMaxScore: 0,
    historyBatches: []
  };

  return { session, firstBatch };
}

/**
 * Avanzar a la siguiente tanda
 * @param {object} session
 * @returns {{ updatedSession: object, nextBatch: Array<object> } | null}
 */
export function advanceContinuousSession(session) {
  if (!session?.active) return null;
  const nextIndex = session.currentIndex + session.batchSize;
  if (nextIndex >= session.pool.length) return null;

  const nextBatch = session.pool.slice(nextIndex, nextIndex + session.batchSize);
  const updatedSession = {
    ...session,
    currentIndex: nextIndex,
    batchNumber: session.batchNumber + 1
  };

  return { updatedSession, nextBatch };
}

/**
 * Acumular resultados de evaluación de una tanda finalizada
 * @param {object} session
 * @param {number} questionsCount
 * @param {object} evaluationResults
 * @returns {object} updatedSession
 */
export function accumulateContinuousResults(session, questionsCount, evaluationResults) {
  if (!session?.active) return null;
  const correctCount = evaluationResults.correctCount || 
    (evaluationResults.questionResults || []).filter(r => r.status === "correct").length;

  return {
    ...session,
    completedQuestionsCount: session.completedQuestionsCount + questionsCount,
    cumulativeCorrect: session.cumulativeCorrect + correctCount,
    cumulativeTotal: session.cumulativeTotal + questionsCount,
    cumulativeScore: session.cumulativeScore + evaluationResults.score,
    cumulativeMaxScore: session.cumulativeMaxScore + evaluationResults.maxScore,
    historyBatches: [
      ...session.historyBatches,
      {
        batchNumber: session.batchNumber,
        score: evaluationResults.score,
        maxScore: evaluationResults.maxScore,
        percentage: evaluationResults.percentage,
        count: questionsCount
      }
    ]
  };
}
