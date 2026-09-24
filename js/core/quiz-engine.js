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
    const correctOptions = q.correctAnswers || [];
    const questionMaxPoints = q.points || 1.0;
    let earnedPoints = 0;
    let status = "notanswered"; // "correct" | "incorrect" | "partiallycorrect" | "notanswered"

    if (userSelected.length === 0) {
      status = "notanswered";
      earnedPoints = 0;
    } else if (q.type === "single") {
      const isCorrect = userSelected.length === 1 && userSelected[0] === correctOptions[0];
      if (isCorrect) {
        earnedPoints = questionMaxPoints;
        status = "correct";
      } else {
        earnedPoints = 0;
        status = "incorrect";
      }
    } else if (q.type === "multiple") {
      // Puntuación proporcional al estilo Moodle
      const totalCorrect = correctOptions.length;
      const incorrectOptions = q.options.filter(opt => !correctOptions.includes(opt.id)).map(opt => opt.id);
      const totalIncorrect = incorrectOptions.length || 1;

      let scoreFrac = 0;
      for (const sel of userSelected) {
        if (correctOptions.includes(sel)) {
          scoreFrac += 1 / totalCorrect;
        } else {
          scoreFrac -= 1 / totalIncorrect;
        }
      }

      // No permitir puntajes negativos en la pregunta
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

    totalScore += earnedPoints;

    questionResults.push({
      questionId: q.id,
      num: q.num,
      status,
      earnedPoints,
      maxPoints: questionMaxPoints,
      userSelected,
      correctOptions,
      explanation: q.explanation
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
 * Obtener 4 preguntas aleatorias para simulacro rápido
 * @param {Array<object>} [pool]
 * @returns {Array<object>}
 */
export function getRandomQuestions(count = 4, pool = QUESTION_BANK) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
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

