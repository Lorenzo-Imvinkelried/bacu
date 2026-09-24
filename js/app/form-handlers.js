/**
 * Manejador de Eventos de Formulario
 * Responsabilidad: Procesar eventos 'change' e 'input' en desplegables y controles numéricos
 * Cumple con directivas de arquitectura en AGENTS.md (< 300 líneas)
 */

import { state } from "../core/state.js";
import { getSubjectById, getUnitById } from "../data/vault-structure.js";

/**
 * Procesar evento 'change' en elementos de formulario
 * @param {Event} e
 */
export function handleFormChangeEvent(e) {
  // Desplegable de Materia
  const selectSubject = e.target.closest("#select-subject");
  if (selectSubject) {
    const newSubId = selectSubject.value;
    const subObj = getSubjectById(newSubId);
    const firstUnit = subObj?.units[0];
    const firstQuiz = firstUnit?.quizzes[0];

    state.setState({
      activeSubjectId: newSubId,
      activeUnitId: firstUnit ? firstUnit.id : "",
      activeQuizId: firstQuiz ? firstQuiz.id : "",
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      continuousSession: null
    });
    return;
  }

  // Desplegable de Parcial / Unidad
  const selectUnit = e.target.closest("#select-unit");
  if (selectUnit) {
    const newUnitId = selectUnit.value;
    const unitObj = getUnitById(state.state.activeSubjectId, newUnitId);
    const firstQuiz = unitObj?.quizzes[0];

    state.setState({
      activeUnitId: newUnitId,
      activeQuizId: firstQuiz ? firstQuiz.id : "",
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      continuousSession: null
    });
    return;
  }

  // Desplegable de Cuestionario
  const selectQuiz = e.target.closest("#select-quiz");
  if (selectQuiz) {
    state.setState({
      activeQuizId: selectQuiz.value,
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      continuousSession: null
    });
    return;
  }

  // Opciones de preguntas (radio y checkbox)
  const input = e.target.closest(".option-input");
  if (input) {
    state.setAnswer(
      input.dataset.questionId,
      input.dataset.optionId,
      input.dataset.isMultiple === "true"
    );
    return;
  }

  // Input numérico para tamaño de tanda
  const inputBatch = e.target.closest("#input-custom-batch");
  if (inputBatch) {
    const val = parseInt(inputBatch.value, 10);
    if (!isNaN(val) && val >= 1) state.setBatchSize(val);
    return;
  }

  // Input numérico para cantidad aleatoria
  const inputRandom = e.target.closest("#input-custom-random");
  if (inputRandom) {
    const val = parseInt(inputRandom.value, 10);
    if (!isNaN(val) && val >= 1) state.setRandomCount(val);
  }
}

/**
 * Procesar evento 'input' en tiempo real
 * @param {Event} e
 */
export function handleRealtimeInputEvent(e) {
  const inputBatch = e.target.closest("#input-custom-batch");
  if (inputBatch) {
    const val = parseInt(inputBatch.value, 10);
    if (!isNaN(val) && val >= 1) state.setBatchSize(val);
  }

  const inputRandom = e.target.closest("#input-custom-random");
  if (inputRandom) {
    const val = parseInt(inputRandom.value, 10);
    if (!isNaN(val) && val >= 1) state.setRandomCount(val);
  }
}
