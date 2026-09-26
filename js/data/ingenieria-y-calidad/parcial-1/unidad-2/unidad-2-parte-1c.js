/**
 * Banco de Preguntas - UNIDAD 2 PARTE 1C (Ingeniería y Calidad - Parcial 1)
 * Temas: Estándares vs Guías, Utilidad de los estándares (Sommerville), Objetivos de marcos de proceso,
 * Jerarquía ISO/IEC 12207 (Procesos, Actividades, Tareas), Grupos de procesos ISO 12207
 * (Primarios, Soporte, Organizacionales, Técnicos), Flexibilidad normativa y Niveles del proceso en SWEBOK.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS = [
  {
    id: "ing-cal-p1-u2-1c-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Estándares vs Guías",
    type: "single",
    prompt: "Según el texto, ¿cuál es la principal diferencia entre un 'Estándar' y una 'Guía'?",
    options: [
      {
        id: "a",
        text: "El estándar es opcional y la guía es de uso obligatorio por ley."
      },
      {
        id: "b",
        text: "La guía encamina una actividad y es más flexible que un estándar, el cual determina la adecuación de una acción o producto."
      },
      {
        id: "c",
        text: "La guía se usa solo para el hardware y el estándar aplica únicamente para el software."
      },
      {
        id: "d",
        text: "El estándar aplica únicamente a la documentación y la guía se usa exclusivamente para el código fuente."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Un estándar establece criterios normativos rigurosos y obligatorios para determinar si un producto o proceso es conforme o adecuado. Por su parte, una guía brinda recomendaciones y orientación metodológica, siendo notablemente más flexible y adaptable al contexto del proyecto.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q2",
    num: 2,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Utilidad de los Estándares (Sommerville)",
    type: "single",
    prompt: "Según Sommerville (2016), ¿por qué son útiles los estándares en la Ingeniería de Software?",
    options: [
      {
        id: "a",
        text: "Porque eliminan por completo la necesidad de testear el software antes de entregarlo al cliente."
      },
      {
        id: "b",
        text: "Porque agrupan las mejores prácticas, engloban conocimientos organizacionales y proporcionan continuidad entre el trabajo de distintas personas."
      },
      {
        id: "c",
        text: "Porque automatizan la escritura del código sin necesidad de intervención de un programador."
      },
      {
        id: "d",
        text: "Porque fuerzan a todas las empresas del mundo a utilizar un único lenguaje de programación."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Ian Sommerville destaca que los estándares encapsulan la sabiduría acumulada de la industria y la memoria institucional de la organización. Facilitan que el trabajo iniciado por un desarrollador pueda ser continuado o auditado por otro sin fricción, preservando la coherencia y la calidad.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q3",
    num: 3,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Objetivos de los Estándares de Proceso",
    type: "single",
    prompt: "¿Cuál es uno de los principales objetivos de los estándares relacionados con el proceso de software?",
    options: [
      {
        id: "a",
        text: "Conseguir un marco común para 'hablar el mismo lenguaje' y definir procesos de forma genérica y abstracta."
      },
      {
        id: "b",
        text: "Dictar paso a paso qué herramientas específicas debe usar cada programador individual."
      },
      {
        id: "c",
        text: "Limitar legalmente la cantidad de proyectos que una empresa puede desarrollar al año."
      },
      {
        id: "d",
        text: "Reemplazar completamente a los ingenieros de software mediante el uso de inteligencia artificial."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Los estándares de proceso buscan homogeneizar la terminología, consensuar responsabilidades y proporcionar un marco de referencia abstracto y aplicable a múltiples dominios sin encorsetar a las organizaciones en tecnologías particulares.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q4",
    num: 4,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Jerarquía ISO/IEC 12207 - Tarea",
    type: "single",
    prompt: "En el contexto de la norma ISO/IEC 12207, ¿cómo se define jerárquicamente a una 'Tarea'?",
    options: [
      {
        id: "a",
        text: "Como un marco de referencia completo del ciclo de vida del sistema."
      },
      {
        id: "b",
        text: "Como un conjunto enorme de procesos organizacionales interconectados."
      },
      {
        id: "c",
        text: "Como una acción que transforma entradas en salidas, formando parte de una actividad."
      },
      {
        id: "d",
        text: "Como el único elemento del proyecto que no requiere entradas para completarse."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la estructura jerárquica de ISO/IEC 12207, la descomposición es: Proceso -> Actividad -> Tarea. La Tarea es el elemento elemental indivisible de acción que procesa entradas específicas para generar salidas o resultados concretos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q5",
    num: 5,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Grupos de Procesos ISO/IEC 12207",
    type: "single",
    prompt: "¿Cuáles son los tres grandes grupos en los que el Estándar ISO/IEC 12207 divide sus procesos?",
    options: [
      {
        id: "a",
        text: "Procesos Iniciales, Procesos Intermedios y Procesos Finales."
      },
      {
        id: "b",
        text: "Procesos de Código, Procesos de Hardware y Procesos de Usuario."
      },
      {
        id: "c",
        text: "Procesos Primarios, Procesos de Soporte y Procesos Organizacionales."
      },
      {
        id: "d",
        text: "Procesos de Diseño, Procesos de Programación y Procesos de Venta."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "La arquitectura tradicional de ISO/IEC 12207 clasifica los procesos del ciclo de vida del software en tres grandes categorías: Procesos Primarios (adquisición, suministro, desarrollo, operación y mantenimiento), Procesos de Soporte (documentación, SCM, SQA, etc.) y Procesos Organizacionales (gestión, infraestructura, recursos humanos y mejora).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q6",
    num: 6,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Procesos de Soporte en ISO/IEC 12207",
    type: "single",
    prompt: "Dentro de la clasificación de la ISO/IEC 12207, ¿qué incluyen los 'Procesos de Soporte (o apoyo)'?",
    options: [
      {
        id: "a",
        text: "La gestión de los recursos humanos y la infraestructura general de la empresa."
      },
      {
        id: "b",
        text: "Las acciones directas con el producto como la adquisición, el desarrollo y la operación."
      },
      {
        id: "c",
        text: "Exclusivamente el despliegue del producto final en los servidores del cliente."
      },
      {
        id: "d",
        text: "La documentación, la gestión de la configuración, la verificación, la validación y las auditorías."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "Los procesos de soporte de ISO/IEC 12207 asisten a otros procesos garantizando la calidad y el rigor técnico. Abarcan: proceso de documentación, gestión de configuración, aseguramiento de la calidad, verificación, validación, revisión conjunta, auditoría y resolución de problemas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q7",
    num: 7,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Flexibilidad del Estándar ISO/IEC 12207",
    type: "single",
    prompt: "¿A qué se refiere la 'Flexibilidad' que proporciona el Estándar ISO/IEC 12207?",
    options: [
      {
        id: "a",
        text: "A que permite a las empresas saltarse fases críticas de prueba si el proyecto está atrasado."
      },
      {
        id: "b",
        text: "A que no dice qué herramientas usar ni cómo programar, sino que solo marca los objetivos a cumplir en cada paso."
      },
      {
        id: "c",
        text: "A que el presupuesto original puede modificarse ilimitadamente durante todo el desarrollo."
      },
      {
        id: "d",
        text: "A que las reglas del estándar pueden ignorarse si el cliente no está de acuerdo con ellas."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "ISO/IEC 12207 es intencionalmente no prescriptivo respecto a metodologías, herramientas de desarrollo o ciclos de vida concretos. Se centra en el 'QUÉ' debe alcanzarse (resultados y metas) permitiendo a cada organización adaptar y seleccionar el 'CÓMO' según su tecnología y contexto.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q8",
    num: 8,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Procesos Técnicos en ISO/IEC 12207",
    type: "single",
    prompt: "Según el texto, ¿cuál es la función de los 'Procesos Técnicos' en el estándar ISO 12207?",
    options: [
      {
        id: "a",
        text: "Transformar las necesidades de los stakeholders en un producto o servicio de software, describiendo acciones técnicas del ciclo de vida."
      },
      {
        id: "b",
        text: "Gestionar exclusivamente las planificaciones financieras y los presupuestos de la organización."
      },
      {
        id: "c",
        text: "Definir el entorno general y las políticas de recursos humanos donde los proyectos deben desarrollarse."
      },
      {
        id: "d",
        text: "Auditar legalmente los contratos entre proveedores y clientes antes de iniciar el proyecto."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Los procesos técnicos formalizan las actividades esenciales de ingeniería requeridas para convertir requerimientos y expectativas de los interesados en productos de software operativos, abarcando definición de necesidades, análisis, diseño arquitectónico, implementación, integración, verificación y transición.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q9",
    num: 9,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Procesos Organizacionales Habilitadores de Proyectos",
    type: "single",
    prompt: "¿Cuál es el rol de los 'Procesos Organizacionales que habilitan proyectos' en la norma ISO 12207?",
    options: [
      {
        id: "a",
        text: "Programar las funciones primarias del código fuente en lenguajes de alto nivel."
      },
      {
        id: "b",
        text: "Descartar los requisitos de software que resulten demasiado costosos para la empresa."
      },
      {
        id: "c",
        text: "Gestionar y controlar los recursos necesarios para que los proyectos se ejecuten exitosamente, estableciendo los modelos de ciclo de vida."
      },
      {
        id: "d",
        text: "Vincular las acciones técnicas del ciclo de vida únicamente con las actividades estructurales de Pressman."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Estos procesos operan a nivel corporativo para dotar a la organización de las capacidades necesarias: administran el modelo de ciclo de vida, gestionan la infraestructura de hardware y software, capacitan al personal y gestionan el portafolio para habilitar la ejecución exitosa de los proyectos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1c-q10",
    num: 10,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1c",
    topic: "Niveles del Proceso de Software según SWEBOK",
    type: "single",
    prompt: "Según el SWEBoK, el proceso de Ingeniería de Software se analiza en dos niveles. ¿De qué se encarga el 'Segundo nivel' (meta-nivel)?",
    options: [
      {
        id: "a",
        text: "De la escritura directa del código y la resolución de errores técnicos menores."
      },
      {
        id: "b",
        text: "De la definición, implementación, evaluación, gestión, cambio y mejora del propio proceso de software."
      },
      {
        id: "c",
        text: "De las actividades operativas ejecutadas durante la adquisición, desarrollo y mantenimiento."
      },
      {
        id: "d",
        text: "De negociar el retiro de productos de software directamente con los usuarios finales."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El SWEBOK distingue dos niveles de proceso: el primer nivel corresponde a los procesos técnicos del ciclo de vida directo del producto (desarrollo, pruebas, etc.); el segundo nivel (meta-proceso) se encarga de la ingeniería y gestión del propio proceso: su definición, medición, evaluación, control y mejora continua.",
    diagram: null,
    points: 1
  }
];
