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
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "parcial-1",
          name: "Parcial 1",
          description: "Banco oficial de examen: Modelos de proceso, ciclo de vida, SCM, Git, métricas y calidad",
          questionCount: 217,
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
              id: "quiz-p1-unidad-1-ciclos-de-vida",
              title: "UNIDAD 1 - Ciclos de Vida (8 preguntas)",
              description: "Evaluación basada en los casos prácticos de Retail y Municipalidad, enfocada en los criterios de selección de metodologías de desarrollo de software.",
              questionCount: 8,
              timeLimitMinutes: 15,
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-1-ciclos-de-vida"
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
              maxScore: 10.0,
              quizId: "quiz-p1-unidad-3"
            },
            {
              id: "quiz-p1-todos-wacho",
              title: "TODOS WACHO",
              description: "Banco consolidado con todos los cuestionarios de este parcial (217 preguntas).",
              questionCount: 217,
              maxScore: 10.0,
              allForUnit: true,
              subjectId: "ing-calidad",
              unitId: "parcial-1"
            }
          ]
        }
      ]
    },
    {
      id: "fundamentos-backend",
      name: "Fundamentos Backend",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "fb-parcial-1",
          name: "Parcial 1",
          description: "Banco oficial de examen: Spring Boot, Arquitectura, HTTP, REST APIs, Genéricos, Jackson, Postman, Asincronía y Spring Batch",
          questionCount: 148,
          quizzes: [
            {
              id: "quiz-fb-p1-unidad-1",
              quizId: "quiz-fb-p1-unidad-1",
              title: "UNIDAD 1 (43 preguntas)",
              description: "Banco oficial Unidad 1: Spring Boot, Arquitectura, Protocolo HTTP, Lombok, Flyway, Monolitos y Microservicios.",
              questionCount: 43,
              maxScore: 10.0
            },
            {
              id: "quiz-fb-p1-unidad-2",
              quizId: "quiz-fb-p1-unidad-2",
              title: "UNIDAD 2 (53 preguntas)",
              description: "Banco oficial Unidad 2: Arquitecturas y Comunicación, REST APIs, Convenciones, Genéricos, Spring Boot REST, Jackson, Postman y Asincronía.",
              questionCount: 53,
              maxScore: 10.0
            },
            {
              id: "quiz-fb-p1-unidad-3",
              quizId: "quiz-fb-p1-unidad-3",
              title: "UNIDAD 3 (53 preguntas)",
              description: "Banco oficial Unidad 3: Spring Batch, Arquitectura, JobRepository, JobLauncher, Steps, Readers, Writers, Ciclo de Ejecución y Sincronización en Pods.",
              questionCount: 53,
              maxScore: 10.0
            },
            {
              id: "quiz-fb-p1-todos-wacho",
              title: "TODOS WACHO",
              description: "Banco consolidado con todas las unidades de este parcial (149 preguntas).",
              questionCount: 149,
              maxScore: 10.0,
              allForUnit: true,
              subjectId: "fundamentos-backend",
              unitId: "fb-parcial-1"
            }
          ]
        }
      ]
    },
    {
      id: "github",
      name: "GitHub",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "comandos",
          name: "Comandos",
          description: "Banco oficial de examen: Comandos Online y Offline de Git y GitHub",
          questionCount: 25,
          quizzes: [
            {
              id: "quiz-github-comandos-cuestionario-1",
              quizId: "quiz-github-comandos-cuestionario-1",
              title: "Cuestionario 1 (25 preguntas)",
              description: "Banco oficial de comandos: clone, fetch, pull, push, ramas, merge, rebase, cherry-pick y utilidades.",
              questionCount: 25,
              maxScore: 10.0
            },
            {
              id: "quiz-github-comandos-todos-wacho",
              title: "TODOS WACHO",
              description: "Banco consolidado con todas las preguntas de esta unidad (25 preguntas).",
              questionCount: 25,
              maxScore: 10.0,
              allForUnit: true,
              subjectId: "github",
              unitId: "comandos"
            }
          ]
        },
        {
          id: "ci-cd",
          name: "CI/CD",
          description: "Banco oficial de examen: Fundamentos de CI/CD, Pipelines, Runners, YAML, Workflows y Políticas de Calidad",
          questionCount: 20,
          quizzes: [
            {
              id: "quiz-github-ci-cd-cuestionario-1",
              quizId: "quiz-github-ci-cd-cuestionario-1",
              title: "Cuestionario 1 (20 preguntas)",
              description: "Banco oficial de CI/CD: conceptos, Pipelines, Runners, sintaxis YAML, GitHub Actions, Steps, Secretos y Branch Protection.",
              questionCount: 20,
              maxScore: 10.0
            },
            {
              id: "quiz-github-ci-cd-todos-wacho",
              title: "TODOS WACHO",
              description: "Banco consolidado con todas las preguntas de esta unidad (20 preguntas).",
              questionCount: 20,
              maxScore: 10.0,
              allForUnit: true,
              subjectId: "github",
              unitId: "ci-cd"
            }
          ]
        }
      ]
    },
    {
      id: "administracion-de-sistemas",
      name: "Administración de Sistemas",
      department: "Ingeniería en Sistemas de Información",
      units: [
        {
          id: "as-parcial-3",
          name: "Parcial 3",
          description: "Banco oficial de examen: Unidades 7, 8, 9 y 10 de Administración de Sistemas",
          questionCount: 165,
          quizzes: [
            {
              id: "quiz-as-p3-unidad-7",
              quizId: "quiz-as-p3-unidad-7",
              title: "UNIDAD 7 (57 preguntas)",
              description: "Banco oficial Unidad 7: Planificación de Proyectos Informáticos (PMBOK, Ciclo de Vida, EDT, Estimaciones, Riesgos y Cronograma).",
              questionCount: 57,
              maxScore: 10.0
            },
            {
              id: "quiz-as-p3-unidad-8",
              quizId: "quiz-as-p3-unidad-8",
              title: "UNIDAD 8 (38 preguntas)",
              description: "Banco oficial Unidad 8: Gestión de Servicios de TI (ITSM, ITIL v3, Ciclo de Vida del Servicio, Procesos y Funciones).",
              questionCount: 38,
              maxScore: 10.0
            },
            {
              id: "quiz-as-p3-unidad-9",
              quizId: "quiz-as-p3-unidad-9",
              title: "UNIDAD 9 (34 preguntas)",
              description: "Banco oficial Unidad 9: Auditoría Informática (Enfoques, Causas Disparadoras, Ética, Normas, Metodología en 6 Pasos y Dominios COBIT).",
              questionCount: 34,
              maxScore: 10.0
            },
            {
              id: "quiz-as-p3-unidad-10",
              quizId: "quiz-as-p3-unidad-10",
              title: "UNIDAD 10 (36 preguntas)",
              description: "Banco oficial Unidad 10: Seguridad en el Trabajo, Prevención de Accidentes, Teletrabajo y Ergonomía (Binomio Hombre-Máquina y Factores de Riesgo).",
              questionCount: 36,
              maxScore: 10.0
            },
            {
              id: "quiz-as-p3-todos-wacho",
              title: "TODOS WACHO",
              description: "Banco consolidado con todas las preguntas cargadas de este parcial (165 preguntas).",
              questionCount: 165,
              maxScore: 10.0,
              allForUnit: true,
              subjectId: "administracion-de-sistemas",
              unitId: "as-parcial-3"
            }
          ]
        }
      ]
    }
  ]
};

/** Obtener materia por ID */
export function getSubjectById(subjectId) {
  return VAULT_STRUCTURE.subjects.find(s => s.id === subjectId) || VAULT_STRUCTURE.subjects[0];
}

/** Obtener unidad por ID */
export function getUnitById(subjectId, unitId) {
  const subject = getSubjectById(subjectId);
  return subject?.units.find(u => u.id === unitId) || subject?.units[0];
}

/** Obtener cuestionario por ID */
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
  
  // Opción "TODOS WACHO" (consolida todas las preguntas del parcial correspondiente)
  if (quiz.allForUnit || quiz.id?.endsWith("-todos-wacho")) {
    if (quiz.subjectId === "ing-calidad" || quiz.unitId === "parcial-1" || quiz.id === "quiz-p1-todos-wacho") {
      return allQuestions.filter(q => q.subject === "Ingeniería y Calidad" || q.id.startsWith("ing-cal-p1-"));
    }
    if (quiz.subjectId === "fundamentos-backend" || quiz.unitId === "fb-parcial-1" || quiz.id === "quiz-fb-p1-todos-wacho") {
      return allQuestions.filter(q => q.subject === "Fundamentos Backend" || q.id.startsWith("fb-p1-"));
    }
    if (quiz.unitId === "comandos" || quiz.id === "quiz-github-comandos-todos-wacho") {
      return allQuestions.filter(q => (q.subject === "GitHub" && q.unit === "Comandos") || q.id.startsWith("gh-cmd-"));
    }
    if (quiz.unitId === "ci-cd" || quiz.id === "quiz-github-ci-cd-todos-wacho") {
      return allQuestions.filter(q => (q.subject === "GitHub" && q.unit === "CI/CD") || q.id.startsWith("gh-cicd-"));
    }
    if (quiz.subjectId === "administracion-de-sistemas" || quiz.unitId === "as-parcial-3" || quiz.id === "quiz-as-p3-todos-wacho") {
      return allQuestions.filter(q => q.subject === "Administración de Sistemas" || q.id.startsWith("as-p3-"));
    }
  }

  if (quiz.questionIds && Array.isArray(quiz.questionIds)) {
    return allQuestions.filter(q => quiz.questionIds.includes(q.id));
  }
  if (quiz.quizId) {
    return allQuestions.filter(q => q.quizId === quiz.quizId);
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
  return [];
}
