/**
 * Motor de Evaluación y Lógica de Cuestionarios
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado)
 */

import { QUESTION_BANK } from "../data/question-bank.js";

/**
 * Evaluar un intento completo de cuestionario
 * @param {Array<object>} questions - Lista de preguntas del cuestionario
 * @param {object} userAnswers - Mapeo { [questionId]: Array<string> }
 * @param {Date} startTime - Fecha y hora de inicio
 * @param {Date} finishTime - Fecha y hora de finalización
 * @returns {object} Resultados detallados de la evaluación
 */
export function evaluateAttempt(questions, userAnswers, startTime, finishTime) {
  let totalScore = 0;
  const maxPossibleScore = questions.reduce((sum, q) => sum + (q.points || 1.0), 0);
  const questionResults = [];

  for (const q of questions) {
    const userSelected = userAnswers[q.id] || [];
    const qResult = evaluateSingleQuestion(q, userSelected);
    totalScore += qResult.earnedPoints;
    questionResults.push({
      ...qResult,
      num: q.num
    });
  }

  // Escalar calificación a 10.00 como es estándar en Moodle y UTN
  const scale = 10.0;
  const grade10 = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * scale : 0;
  const percentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  // Cálculo de tiempo empleado
  const elapsedMs = finishTime && startTime ? finishTime.getTime() - startTime.getTime() : 0;
  const totalSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeTakenFormatted = `${minutes} min ${seconds} seg`;

  return {
    score: parseFloat(totalScore.toFixed(2)),
    totalPoints: parseFloat(totalScore.toFixed(2)),
    maxScore: parseFloat(maxPossibleScore.toFixed(2)),
    maxPoints: parseFloat(maxPossibleScore.toFixed(2)),
    grade10: parseFloat(grade10.toFixed(2)),
    gradeFormatted: grade10.toFixed(2).replace(".", ","),
    percentage,
    timeTaken: timeTakenFormatted,
    startTimeFormatted: formatMoodleDate(startTime),
    finishTimeFormatted: formatMoodleDate(finishTime),
    questionResults
  };
}

/**
 * Formatear fecha en formato Moodle en español
 * Ejemplo: "miércoles, 24 de septiembre de 2026, 00:15"
 * @param {Date} date
 */
export function formatMoodleDate(date) {
  if (!date) return "-";
  try {
    const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${dayName}, ${day} de ${month} de ${year}, ${hours}:${minutes}`;
  } catch {
    return date.toLocaleString();
  }
}

/**
 * Mezclar aleatoriamente un array utilizando el algoritmo Fisher-Yates
 * @param {Array<any>} array
 * @returns {Array<any>} Nuevo array barajado
 */
export function shuffleArray(array) {
  if (!Array.isArray(array)) return [];
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Barajar opciones de una pregunta y reasignar letras identificadoras ('a', 'b', 'c', ...)
 * Actualiza de forma correlativa el array de respuestas correctas
 * @param {object} question
 * @returns {object} Pregunta clonada con opciones barajadas
 */
export function shuffleQuestionOptions(question) {
  if (!question || !Array.isArray(question.options) || question.options.length <= 1) {
    return { ...question };
  }

  const shuffledRaw = shuffleArray(question.options);
  const oldToNewMap = new Map();

  const newOptions = shuffledRaw.map((opt, idx) => {
    const newId = String.fromCharCode(97 + idx); // 'a', 'b', 'c', 'd'...
    oldToNewMap.set(opt.id, newId);
    return {
      ...opt,
      id: newId
    };
  });

  const newCorrectAnswers = (question.correctAnswers || []).map(oldId =>
    oldToNewMap.has(oldId) ? oldToNewMap.get(oldId) : oldId
  );

  return {
    ...question,
    options: newOptions,
    correctAnswers: newCorrectAnswers
  };
}

/**
 * Preparar conjunto de preguntas para un intento aplicando opciones de barajado
 * @param {Array<object>} questions
 * @param {object} [options]
 * @param {boolean} [options.shuffleQuestions=true]
 * @param {boolean} [options.shuffleOptions=true]
 * @returns {Array<object>}
 */
export function prepareQuizQuestions(questions, { shuffleQuestions = true, shuffleOptions = true } = {}) {
  if (!Array.isArray(questions)) return [];

  // Clonar preguntas profundamente a nivel de opciones
  let prepared = questions.map(q => ({
    ...q,
    options: q.options ? q.options.map(opt => ({ ...opt })) : [],
    correctAnswers: q.correctAnswers ? [...q.correctAnswers] : []
  }));

  if (shuffleOptions) {
    prepared = prepared.map(q => shuffleQuestionOptions(q));
  }

  if (shuffleQuestions) {
    prepared = shuffleArray(prepared);
  }

  return prepared;
}

/**
 * Obtener N preguntas aleatorias para simulacro rápido
 * @param {number} count
 * @param {Array<object>} [pool]
 * @returns {Array<object>}
 */
export function getRandomQuestions(count = 4, pool = QUESTION_BANK) {
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, count);
}

/**
 * Obtener las preguntas incorrectas o con puntaje parcial del estado actual
 * @param {object} currentState
 * @returns {Array<object>}
 */
export function getMissedQuestions(currentState) {
  if (!currentState) return [];

  // Si finalizó una sesión continua completa (todas las tandas completadas):
  if (currentState.continuousSession?.active) {
    const isCompleted = currentState.continuousSession.completedQuestionsCount >= currentState.continuousSession.totalQuestions;
    if (isCompleted) {
      return currentState.continuousSession.missedQuestions || [];
    }
  }

  // Si es un intento estándar (completo, aleatorio, reintento o lote evaluado):
  if (currentState.results && Array.isArray(currentState.currentQuestions)) {
    const resMap = new Map((currentState.results.questionResults || []).map(r => [r.questionId, r.status]));
    return currentState.currentQuestions.filter(q => {
      const status = resMap.get(q.id);
      return status && status !== "correct";
    });
  }

  return [];
}

/**
 * Evaluar una sola pregunta bajo demanda para retroalimentación inmediata (Modo Repaso Rápido)
 * @param {object} question
 * @param {Array<string>} userSelected
 * @returns {object}
 */
export function evaluateSingleQuestion(question, userSelected = []) {
  const correctOptions = question.correctAnswers || [];
  const questionMaxPoints = question.points || 1.0;
  let earnedPoints = 0;
  let status = "notanswered";

  if (!userSelected || userSelected.length === 0) {
    return {
      questionId: question.id,
      status: "notanswered",
      earnedPoints: 0,
      maxPoints: questionMaxPoints,
      userSelected: [],
      correctOptions,
      explanation: question.explanation
    };
  }

  if (question.type === "single") {
    const isCorrect = userSelected.length === 1 && userSelected[0] === correctOptions[0];
    earnedPoints = isCorrect ? questionMaxPoints : 0;
    status = isCorrect ? "correct" : "incorrect";
  } else if (question.type === "multiple") {
    const totalCorrect = correctOptions.length;
    const incorrectOptions = question.options.filter(opt => !correctOptions.includes(opt.id)).map(opt => opt.id);
    const totalIncorrect = incorrectOptions.length || 1;

    let scoreFrac = 0;
    for (const sel of userSelected) {
      if (correctOptions.includes(sel)) {
        scoreFrac += 1 / totalCorrect;
      } else {
        scoreFrac -= 1 / totalIncorrect;
      }
    }
    scoreFrac = Math.max(0, Math.min(1, scoreFrac));
    earnedPoints = parseFloat((scoreFrac * questionMaxPoints).toFixed(2));
    if (earnedPoints >= questionMaxPoints - 0.01) {
      status = "correct";
    } else if (earnedPoints > 0.05) {
      status = "partiallycorrect";
    } else {
      status = "incorrect";
    }
  }

  return {
    questionId: question.id,
    status,
    earnedPoints,
    maxPoints: questionMaxPoints,
    userSelected,
    correctOptions,
    explanation: question.explanation
  };
}

