/**
 * Banco de Preguntas - UNIDAD 3 (Gestión de Configuración del Software)
 * Parte 04 (Preguntas 31 a 41)
 * Temas: Estándar IEEE 828-2012, Plan de GCS (Estructura y Secciones A, C, F, H, I),
 * Matriz de responsabilidades, 6 Actividades GCS requeridas, Control de Cambios (H.2),
 * Cronograma (¿Cuándo?), Recursos (¿Cómo?) y Flexibilidad de implementación.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart04 = [
  {
    id: "ing-cal-p1-u3-q31",
    num: 31,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Estándar IEEE 828-2012",
    type: "single",
    prompt: "¿Qué establece el Estándar IEEE 828-2012?",
    options: [
      {
        id: "a",
        text: "Los lenguajes de programación obligatorios para sistemas embebidos."
      },
      {
        id: "b",
        text: "Los requerimientos mínimos para los procesos de Gestión de Configuración (GC) en ingeniería de sistemas y software."
      },
      {
        id: "c",
        text: "La estructura organizativa obligatoria para el departamento de Recursos Humanos de empresas IT."
      },
      {
        id: "d",
        text: "Los pasos precisos para aplicar Scrum y metodologías ágiles en desarrollo web."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El estándar internacional IEEE 828-2012 ('Standard for Configuration Management in Systems and Software Engineering') formaliza los procesos, actividades y contenidos requeridos para elaborar un Plan de Gestión de Configuración uniforme y verificable.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q32",
    num: 32,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Contenido Central del Plan de GCS",
    type: "single",
    prompt: "Según el Estándar IEEE 828-2012, el Plan de GCS documenta fundamentalmente:",
    options: [
      {
        id: "a",
        text: "Qué actividades se realizarán, cómo, quién es responsable, cuándo sucederán y qué recursos son requeridos."
      },
      {
        id: "b",
        text: "El precio de venta del software, los costos de marketing y los canales de distribución."
      },
      {
        id: "c",
        text: "El manual de usuario final y las guías de instalación rápida."
      },
      {
        id: "d",
        text: "El algoritmo principal de encriptación de datos del sistema."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El plan de GCS es el documento operativo que estipula con claridad: QUÉ tareas de control se llevarán a cabo, CÓMO se implementarán, QUIÉN responde por cada rol, CUÁNDO se producirán los hitos y QUÉ recursos humanos, tecnológicos y de hardware son necesarios.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q33",
    num: 33,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección A (Introducción)",
    type: "single",
    prompt: "En el Plan de GCS (IEEE 828-2012), ¿qué se debe definir en la 'Sección A: Introducción'?",
    options: [
      {
        id: "a",
        text: "La matriz de responsabilidades organizacionales y los recursos físicos."
      },
      {
        id: "b",
        text: "El cronograma exacto de días y horas de auditorías."
      },
      {
        id: "c",
        text: "El propósito, alcance, relaciones a otros proyectos, términos claves (glosario) y referencias."
      },
      {
        id: "d",
        text: "Las versiones exactas del compilador y el hardware destino."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "La Sección A fija los cimientos del documento: delimita el propósito de la gestión de configuración, el alcance y frontera del proyecto, dependencias con proyectos afines, glosario terminológico y normas de referencia consultadas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q34",
    num: 34,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección C (Limitaciones y Supuestos)",
    type: "single",
    prompt: "En la 'Sección C: Limitaciones y supuestos' del Plan de GCS, ¿qué tipo de información se incluye?",
    options: [
      {
        id: "a",
        text: "Los nombres exactos de los archivos ejecutables y manuales impresos."
      },
      {
        id: "b",
        text: "Restricciones de tiempo, supuestos que afectan el costo/programación y grado de participación del cliente."
      },
      {
        id: "c",
        text: "El listado de bugs resueltos en el último release candidato."
      },
      {
        id: "d",
        text: "Los diagramas de casos de uso y la arquitectura de clases."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La Sección C documenta las condiciones contextuales que condicionan la ejecución del plan: plazos inamovibles, límites presupuestarios, supuestos sobre la disponibilidad de subcontratistas y nivel de involucramiento requerido por parte del cliente.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q35",
    num: 35,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección F (Matriz de Responsabilidades)",
    type: "single",
    prompt: "¿Qué recomienda el Estándar IEEE 828-2012 utilizar en la 'Sección F: Responsabilidades de GC' para establecer qué unidad o cargo realiza cada actividad?",
    options: [
      {
        id: "a",
        text: "Un diagrama de red detallado."
      },
      {
        id: "b",
        text: "Una matriz de responsabilidades (relacionando unidad organizacional con funciones y tareas)."
      },
      {
        id: "c",
        text: "Un listado de código fuente con comentarios explicativos."
      },
      {
        id: "d",
        text: "Un reporte estadístico de fallos (BugTracking report)."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El estándar recomienda una matriz RACI o tabla de asignación de responsabilidades que cruce cada tarea de configuración (identificación, control de cambios, auditorías, etc.) con los cargos u órganos responsables (ej. Administrador de GC, Comité de Control de Cambios CCB, Líder Técnico).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q36",
    num: 36,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección H (6 Actividades Clave)",
    type: "single",
    prompt: "En el Plan de GCS, la Sección H abarca 'Actividades Planeadas, programación y recursos'. Las 6 actividades GCS requeridas incluyen:",
    options: [
      {
        id: "a",
        text: "Identificación, Control, Registro de Estado, Auditorías, Control de Interface y Control de Subcontratista."
      },
      {
        id: "b",
        text: "Análisis de Requisitos, Diseño de Base de Datos, Programación, Testing, Ventas y Mantenimiento."
      },
      {
        id: "c",
        text: "Compilación, Vinculación, Instalación, Empaquetado, Publicidad y Distribución."
      },
      {
        id: "d",
        text: "Creación de Repositorio, Commit, Branching, Merging, Push y Pull."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Las seis funciones operativas normadas por el IEEE 828 son: 1) Identificación de la configuración, 2) Control de cambios, 3) Registro y reporte del estado de la configuración (CSA), 4) Auditorías y revisiones de configuración, 5) Control de interfaces y 6) Gestión y control de proveedores/subcontratistas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q37",
    num: 37,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección H.2 (Control de Cambios)",
    type: "single",
    prompt: "En el control de cambios de la Configuración (Sección H.2 del Plan GCS), ¿cuál de las siguientes es una tarea de esta actividad?",
    options: [
      {
        id: "a",
        text: "Asignar el nombre a los Elementos de Configuración (EC)."
      },
      {
        id: "b",
        text: "Determinar los recursos físicos necesarios para el proyecto."
      },
      {
        id: "c",
        text: "Solicitud, evaluación, aprobación (o rechazo) e implementación de cambios."
      },
      {
        id: "d",
        text: "Coordinar los cambios con elementos externos al plan."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El control de cambios norma el circuito formal ante cualquier modificación: emisión de la solicitud de cambio (CR), análisis de impacto técnico y financiero, decisión del Comité de Control de Cambios (CCB), implementación controlada y verificación.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q38",
    num: 38,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Cronograma (¿Cuándo?)",
    type: "single",
    prompt: "¿Qué información provee la subsección 'Cronograma GCS' (¿CUÁNDO?) en el Plan de Gestión de Configuración?",
    options: [
      {
        id: "a",
        text: "El costo en dólares de cada licencia de software instalada."
      },
      {
        id: "b",
        text: "Establece la secuencia, dependencias y fechas clave (Líneas base, auditorías) integradas al proyecto principal."
      },
      {
        id: "c",
        text: "El número de teléfono y correo de cada subcontratista."
      },
      {
        id: "d",
        text: "Las métricas técnicas de complejidad ciclomática del código."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El cronograma de GCS vincula las tareas de configuración con el plan maestro del proyecto: define cuándo se congelarán las líneas base, las fechas estimadas para auditorías de configuración y los hitos de entrega previstos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q39",
    num: 39,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Recursos (¿Cómo?)",
    type: "single",
    prompt: "Dentro de la Sección H del Plan GCS, ¿qué identifica la parte de 'Recursos GCS' (¿CÓMO?)?",
    options: [
      {
        id: "a",
        text: "Identifica las herramientas software, técnicas, equipos, personal y capacitación necesaria para la GCS."
      },
      {
        id: "b",
        text: "Identifica los lenguajes de programación prohibidos por la organización."
      },
      {
        id: "c",
        text: "Identifica únicamente el salario de los ingenieros de calidad."
      },
      {
        id: "d",
        text: "Identifica los clientes potenciales a los que se les venderá el software."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La sección de recursos detalla el soporte material y humano necesario: herramientas SCV (Git, GitHub, SVN), servidores de integración continua, sistemas de seguimiento de incidencias (Jira, Bugzilla) y los planes de entrenamiento del personal.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q40",
    num: 40,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Plan de GCS - Sección I (Mantenimiento del Plan)",
    type: "single",
    prompt: "Según la 'Sección I - Mantenimiento del Plan GCS', ¿qué debe documentarse sobre el propio plan de configuración?",
    options: [
      {
        id: "a",
        text: "Que el plan no puede ser modificado bajo ninguna circunstancia una vez aprobado."
      },
      {
        id: "b",
        text: "Quién monitorea el plan, la frecuencia de actualización, y cómo se evalúan/comunican los cambios al mismo."
      },
      {
        id: "c",
        text: "La eliminación del plan de GCS una vez se haya programado el primer componente."
      },
      {
        id: "d",
        text: "Únicamente el historial de versiones del sistema operativo donde se guarda el plan."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El plan de GCS es un documento vivo que también evoluciona. La Sección I explicita quién es responsable de auditar su vigencia, cada cuánto tiempo se revisa y cómo se aprueban y comunican las modificaciones al propio plan.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q41",
    num: 41,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Resumen IEEE 828-2012 - Flexibilidad y Adaptabilidad",
    type: "single",
    prompt: "Como resumen sobre la implementación del Plan GCS (IEEE 828-2012):",
    options: [
      {
        id: "a",
        text: "El plan es totalmente rígido e impone las mismas metodologías para todos los proyectos del mundo."
      },
      {
        id: "b",
        text: "Debe ser extremadamente largo y complejo, redactado en lenguaje académico incomprensible."
      },
      {
        id: "c",
        text: "El estándar permite gran flexibilidad; un plan exitoso debe reflejar el entorno del proyecto, ser comprensible y consistente con el proceso de desarrollo."
      },
      {
        id: "d",
        text: "Se define un único Plan de Configuración global que nunca se ajusta a ningún proyecto en particular."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El estándar IEEE 828 está diseñado para ser adaptable: la extensión y formalidad del plan deben graduarse proporcionalmente al tamaño, criticidad y contexto del proyecto. Un buen plan es claro, útil para el equipo y coherente con el proceso de software.",
    diagram: null,
    points: 1
  }
];
