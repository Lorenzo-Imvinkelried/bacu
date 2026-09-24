/**
 * Estructura del Baúl de Cuestionarios
 * Permite seleccionar Materia y Parcial mediante desplegables.
 * En Ingeniería y Calidad -> Parcial 1: Simulacro Rápido (4 preguntas) y Cuestionario Completo (92 preguntas).
 * Cumple con directivas en AGENTS.md (Capa de Datos)
 */

export const VAULT_STRUCTURE = {
  subjects: [
    {
      id: "ing-calidad",
      name: "Ingeniería y Calidad",
      code: "ISI-401",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "parcial-1",
          name: "Parcial 1",
          description: "Banco oficial de examen: Modelos de proceso, ciclo de vida, SCM, Git, métricas y calidad",
          questionCount: 92,
          quizzes: [
            {
              id: "quiz-p1-completo",
              title: "WORD PARCIAL 1 (92 preguntas)",
              description: "Banco maestro completo de 92 preguntas de examen con todas las unidades evaluadas en el primer parcial.",
              questionCount: 92,
              timeLimitMinutes: 120,
              maxScore: 10.0
            }
          ]
        },
        {
          id: "parcial-2",
          name: "Parcial 2",
          description: "Métricas de software, pruebas, aseguramiento de la calidad (SQA) y mantenimiento",
          questionCount: 0,
          quizzes: []
        },
        {
          id: "examen-final",
          name: "Examen Final",
          description: "Evaluación integradora de toda la materia",
          questionCount: 0,
          quizzes: []
        }
      ]
    },
    {
      id: "sistemas-operativos",
      name: "Sistemas Operativos",
      code: "ISI-302",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "so-parcial-1",
          name: "Parcial 1",
          description: "Procesos, hilos, planificación de CPU y sincronización",
          questionCount: 0,
          quizzes: []
        },
        {
          id: "so-parcial-2",
          name: "Parcial 2",
          description: "Memoria virtual, sistemas de archivos y E/S",
          questionCount: 0,
          quizzes: []
        }
      ]
    },
    {
      id: "diseno-sistemas",
      name: "Diseño de Sistemas",
      code: "ISI-305",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "ds-parcial-1",
          name: "Parcial 1",
          description: "Patrones de diseño, arquitectura y modelado UML",
          questionCount: 0,
          quizzes: []
        },
        {
          id: "ds-parcial-2",
          name: "Parcial 2",
          description: "Diseño de persistencia, microservicios e integración",
          questionCount: 0,
          quizzes: []
        }
      ]
    }
  ]
};

/**
 * Obtener materia por ID
 * @param {string} subjectId
 */
export function getSubjectById(subjectId) {
  return VAULT_STRUCTURE.subjects.find(s => s.id === subjectId) || VAULT_STRUCTURE.subjects[0];
}

/**
 * Obtener unidad por ID
 * @param {string} subjectId
 * @param {string} unitId
 */
export function getUnitById(subjectId, unitId) {
  const subject = getSubjectById(subjectId);
  return subject?.units.find(u => u.id === unitId) || subject?.units[0];
}

/**
 * Obtener cuestionario por ID
 * @param {string} subjectId
 * @param {string} unitId
 * @param {string} quizId
 */
export function getQuizById(subjectId, unitId, quizId) {
  const unit = getUnitById(subjectId, unitId);
  if (!unit || !unit.quizzes || unit.quizzes.length === 0) return null;
  return unit.quizzes.find(q => q.id === quizId) || unit.quizzes[0];
}

/**
 * Obtener las preguntas asociadas a un cuestionario
 * @param {object} quiz
 * @param {Array<object>} allQuestions
 * @returns {Array<object>}
 */
export function getQuestionsForQuiz(quiz, allQuestions = []) {
  if (!quiz || !allQuestions || allQuestions.length === 0) return [];
  
  if (quiz.questionIds && Array.isArray(quiz.questionIds)) {
    return allQuestions.filter(q => quiz.questionIds.includes(q.id));
  }
  if (quiz.questionRange && Array.isArray(quiz.questionRange)) {
    const [start, end] = quiz.questionRange;
    return allQuestions.filter(q => q.num >= start && q.num <= end);
  }
  return [...allQuestions];
}
