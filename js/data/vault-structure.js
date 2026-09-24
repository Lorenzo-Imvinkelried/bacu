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
      name: "Ingeniería y Calidad de Software",
      code: "ISI-401",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "parcial-1",
          name: "Parcial 1",
          description: "Banco oficial de examen: Modelos de proceso, ciclo de vida, SCM, Git, métricas y calidad",
          questionCount: 209,
          quizzes: [
            {
              id: "quiz-p1-completo",
              title: "WORD PARCIAL 1 (92 preguntas)",
              description: "Banco maestro completo de 92 preguntas de examen con todas las unidades evaluadas en el primer parcial.",
              questionCount: 92,
              timeLimitMinutes: 120,
              maxScore: 10.0
            },
            {
              id: "quiz-p1-unidad-1",
              title: "UNIDAD 1 (10 preguntas)",
              description: "Conceptos de software, mitos, características vs hardware, pilares de la ISW, herramientas CASE y SWEBOK.",
              questionCount: 10,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-1"
            },
            {
              id: "quiz-p1-unidad-2-p1a",
              title: "UNIDAD 2 - Parte 1a (13 preguntas)",
              description: "Problemas en el desarrollo de software, CHAOS Report, causas de fallo de proyectos, situación tecnológica y capas de la ISW.",
              questionCount: 13,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-2-p1a"
            },
            {
              id: "quiz-p1-unidad-2-p1b",
              title: "UNIDAD 2 - Parte 1b (13 preguntas)",
              description: "Procesos técnicos vs soporte, relación P-P-P, actividades estructurales CPMCD, actividades sombrilla y confiabilidad.",
              questionCount: 13,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-2-p1b"
            },
            {
              id: "quiz-p1-unidad-2-p1c",
              title: "UNIDAD 2 - Parte 1c (10 preguntas)",
              description: "Estándares y guías (Sommerville), marco ISO/IEC 12207 (procesos primarios, soporte, organizacionales y técnicos) y niveles SWEBOK.",
              questionCount: 10,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-2-p1c"
            },
            {
              id: "quiz-p1-unidad-2-p2a",
              title: "UNIDAD 2 - Parte 2a (10 preguntas)",
              description: "Ciclo de vida (ISO 12207), fundamentos de la ISW, modelos de proceso (Espiral, Modelo en V, Big Bang, RAD y Agile).",
              questionCount: 10,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-2-p2a"
            },
            {
              id: "quiz-p1-unidad-2-p2b",
              title: "UNIDAD 2 - Parte 2b (10 preguntas)",
              description: "Modelos prescriptivos, Cascada, Modelo en V, Incremental, Espiral, Prototipos, Proceso Unificado (ADN y 4 fases), WSDM y MDA.",
              questionCount: 10,
              timeLimitMinutes: 20,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-2-p2b"
            },
            {
              id: "quiz-p1-unidad-3",
              title: "UNIDAD 3 (51 preguntas)",
              description: "Gestión de la Configuración del Software (GCSW), control de versiones, ramas, versionado semántico, builds, entregas y Estándar IEEE 828-2012.",
              questionCount: 51,
              timeLimitMinutes: 60,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-3"
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
  if (quiz.quizId) {
    const matched = allQuestions.filter(q => q.quizId === quiz.quizId);
    if (matched.length > 0) return matched;
  }
  const matchedById = allQuestions.filter(q => q.quizId === quiz.id);
  if (matchedById.length > 0) return matchedById;

  if (quiz.id === "quiz-p1-completo") {
    return allQuestions.filter(q => q.id.startsWith("ing-cal-p1-q") && !q.quizId);
  }

  if (quiz.questionRange && Array.isArray(quiz.questionRange)) {
    const [start, end] = quiz.questionRange;
    return allQuestions.filter(q => q.num >= start && q.num <= end);
  }
  return [...allQuestions];
}
