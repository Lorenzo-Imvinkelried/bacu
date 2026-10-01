/**
 * Banco de Preguntas - UNIDAD 8 (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 13)
 * Temas: Calidad, Procesos, TI Estratégica, Servicios de TI, Objetivos GSTI y Problemas de Soporte.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-u8-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión, Procesos y Calidad",
    type: "single",
    prompt: "En la introducción a la Gestión de Servicios de TI, ¿cómo se vinculan conceptualmente la gestión, los procesos y la calidad?",
    options: [
      { id: "a", text: "La calidad del servicio depende de la calidad del proceso, la cual requiere una gestión adecuada." },
      { id: "b", text: "La gestión adecuada reemplaza la necesidad de definir procesos formales para asegurar la calidad." },
      { id: "c", text: "La calidad del proceso es independiente de las actividades de planificación y control de gestión." },
      { id: "d", text: "La calidad del servicio se logra ajustando la tecnología sin intervenir en los procesos operativos." }
    ],
    correctAnswers: ["a"],
    explanation: "La diapositiva 55 establece la cadena de causalidad: la calidad del servicio está sustentada por la calidad del proceso, y esta última exige una gestión adecuada que abarque planificar, organizar, dirigir y controlar. (Diapositiva 55)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "La TI como Recurso Estratégico",
    type: "single",
    prompt: "¿Por qué la Tecnología de la Información se considera un recurso estratégico clave en las organizaciones modernas?",
    options: [
      { id: "a", text: "Porque elimina completamente la necesidad de realizar cambios organizacionales y culturales." },
      { id: "b", text: "Porque automatiza la totalidad de las decisiones directivas sin requerir supervisión humana." },
      { id: "c", text: "Porque resulta imprescindible para la satisfacción de los requisitos del negocio y sus procesos." },
      { id: "d", text: "Porque reduce automáticamente el costo operativo a cero desde el momento de su instalación." }
    ],
    correctAnswers: ["c"],
    explanation: "La TI se reconoce como un recurso estratégico clave porque es imprescindible para satisfacer los requisitos del negocio, lo cual a su vez suele impulsar transformaciones en la organización y sus procesos. (Diapositiva 55)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Definición de Servicio",
    type: "single",
    prompt: "Según la definición formal presentada en el material, ¿qué es un \"Servicio\"?",
    options: [
      { id: "a", text: "Una unidad funcional encargada de resolver los incidentes técnicos de la infraestructura corporativa." },
      { id: "b", text: "Un medio para entregar valor a los clientes facilitándoles resultados sin asumir costes ni riesgos." },
      { id: "c", text: "Un conjunto de programas ejecutables que reemplazan la intervención de personas en la empresa." },
      { id: "d", text: "Una garantía contractual que obliga al cliente a adquirir la propiedad de los activos de TI." }
    ],
    correctAnswers: ["b"],
    explanation: "ITIL define el servicio como un medio para entregar valor a los clientes facilitándoles los resultados que desean alcanzar, evitándoles la propiedad de los costes y riesgos específicos. (Diapositiva 56)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Elementos de un Servicio de TI",
    type: "single",
    prompt: "¿Cuáles son los tres elementos fundamentales que integran un \"Servicio de TI\"?",
    options: [
      { id: "a", text: "Servidores, redes de datos y bases de datos relacionales." },
      { id: "b", text: "Estrategia, infraestructura y presupuesto financiero." },
      { id: "c", text: "Clientes internos, clientes externos y proveedores." },
      { id: "d", text: "Tecnología, personas y procesos." }
    ],
    correctAnswers: ["d"],
    explanation: "La diapositiva 56 establece explícitamente que un Servicio de TI está formado por la combinación de tecnología, personas y procesos. (Diapositiva 56)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Valor y Resultados del Servicio",
    type: "single",
    prompt: "En el ejemplo del servicio de acceso remoto seguro para el equipo de Ventas, ¿en qué consiste el valor o resultado entregado al negocio?",
    options: [
      { id: "a", text: "En otorgar flexibilidad para que los vendedores dediquen más tiempo a interactuar con clientes." },
      { id: "b", text: "En transferir la propiedad del software de conexión directamente a los empleados del área." },
      { id: "c", text: "En eliminar los costos de licencias mediante el uso de herramientas de código abierto." },
      { id: "d", text: "En garantizar la actualización automática del hardware de los dispositivos móviles." }
    ],
    correctAnswers: ["a"],
    explanation: "El ejemplo de la diapositiva 56 señala que el valor del servicio de acceso remoto es la flexibilidad proporcionada, permitiendo a los vendedores disponer de mayor tiempo efectivo con clientes. (Diapositiva 56)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Servicios de TI",
    type: "single",
    prompt: "¿Cómo se define la \"Gestión de Servicios\" en el marco conceptual expuesto?",
    options: [
      { id: "a", text: "Como la adquisición exclusiva de herramientas de monitoreo para la infraestructura de red." },
      { id: "b", text: "Como la delegación total del soporte técnico en proveedores externos especializados." },
      { id: "c", text: "Como un conjunto de capacidades organizacionales especializadas para proporcionar valor en forma de servicios." },
      { id: "d", text: "Como el desarrollo de software a medida respondiendo a peticiones puntuales de los usuarios." }
    ],
    correctAnswers: ["c"],
    explanation: "La Gestión de Servicios se define formalmente como el conjunto de capacidades organizacionales especializadas para proporcionar valor a los clientes en forma de servicios. (Diapositiva 57)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Ciclo de Vida de los Servicios",
    type: "single",
    prompt: "Respecto al alcance de la Gestión de Servicios, ¿cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { id: "a", text: "Se limita exclusivamente a la fase de entrega del servicio durante la operación diaria." },
      { id: "b", text: "Considera el ciclo de vida completo: estrategia, diseño, transición, operación y mejora continua." },
      { id: "c", text: "Prescinde de las funciones organizacionales para enfocarse únicamente en el desarrollo técnico." },
      { id: "d", text: "Aplica únicamente a los componentes de infraestructura de hardware sin abarcar procesos." }
    ],
    correctAnswers: ["b"],
    explanation: "La Gestión de Servicios no solo se ocupa de entregar el servicio, sino que contempla el ciclo de vida completo: desde la estrategia hasta la mejora continua. (Diapositiva 57)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Roles y Responsabilidades",
    type: "single",
    prompt: "En relación con los roles y responsabilidades dentro de la Gestión de Servicios, ¿qué regla aplica a las personas y los roles?",
    options: [
      { id: "a", text: "Cada persona dentro de la organización debe tener asignado un único rol de manera estricta." },
      { id: "b", text: "Un rol solo puede ser ejecutado por un equipo multidisciplinario de dirección." },
      { id: "c", text: "Las responsabilidades de gestión son independientes de los procesos y funciones." },
      { id: "d", text: "Una sola persona puede ejecutar múltiples roles en distintos procesos o funciones." }
    ],
    correctAnswers: ["d"],
    explanation: "El material indica que un rol se define como un conjunto de responsabilidades asociadas y que una misma persona puede ejecutar múltiples roles dentro de la organización. (Diapositiva 58)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Objetivos de la GSTI",
    type: "single",
    prompt: "¿Cuáles son los tres objetivos principales que persigue la Gestión de Servicios de TI?",
    options: [
      { id: "a", text: "Alinear servicios con las necesidades del negocio, mejorar su calidad y reducir costos a largo plazo." },
      { id: "b", text: "Automatizar las tareas del personal, eliminar el uso de software propietario y privatizar los servicios." },
      { id: "c", text: "Aumentar la cantidad de servidores, reducir el número de usuarios y tercerizar las operaciones." },
      { id: "d", text: "Centralizar las compras tecnológicas, estandarizar el hardware y eliminar las auditorías de calidad." }
    ],
    correctAnswers: ["a"],
    explanation: "La diapositiva 59 enumera expresamente los 3 objetivos de la GSTI: 1) Alinear los servicios IT con necesidades futuras y actuales del negocio, 2) Mejorar la calidad de los servicios IT, y 3) Reducir el costo en la provisión a largo plazo. (Diapositiva 59)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Personas, Procesos y Herramientas",
    type: "single",
    prompt: "Para alcanzar sus objetivos, la Gestión de Servicios de TI debe integrar tres conceptos clave. ¿Cuáles son?",
    options: [
      { id: "a", text: "Estrategia, Finanzas y Contratos." },
      { id: "b", text: "Hardware, Software y Redes." },
      { id: "c", text: "Personas, Procesos y Herramientas." },
      { id: "d", text: "Clientes, Proveedores y Auditores." }
    ],
    correctAnswers: ["c"],
    explanation: "El esquema conceptual de la diapositiva 59 exige la integración armónica entre Personas, Procesos y Herramientas. (Diapositiva 59)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Infraestructura Tecnológica y Servicios",
    type: "single",
    prompt: "¿De qué manera afecta la infraestructura tecnológica a la prestación de servicios en la organización?",
    options: [
      { id: "a", text: "Su impacto es irrelevante si el personal cuenta con la capacitación operativa adecuada." },
      { id: "b", text: "Su calidad, oportunidad y disponibilidad determinan directamente la calidad, oportunidad y disponibilidad del servicio." },
      { id: "c", text: "Afecta exclusivamente a los costos financieros sin influir en la percepción de valor del cliente." },
      { id: "d", text: "Determina únicamente la velocidad de conexión a internet sin afectar los procesos de negocio." }
    ],
    correctAnswers: ["b"],
    explanation: "El valor generado depende de la adecuada prestación de servicios tecnológicos; la calidad, oportunidad y disponibilidad de la infraestructura afectan directamente la calidad, oportunidad y disponibilidad de los servicios organizacionales. (Diapositiva 60)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Esquema Funcional de Gestión",
    type: "single",
    prompt: "Según el esquema funcional de la gestión de servicios, ¿qué componentes interactúan para asegurar y corregir los servicios de TI que dan soporte a las actividades del negocio?",
    options: [
      { id: "a", text: "La gestión de ventas, el marketing digital y la contabilidad financiera." },
      { id: "b", text: "La auditoría externa, las leyes gubernamentales y las normas de calidad." },
      { id: "c", text: "Las compras de hardware, la capacitación docente y el soporte telefónico." },
      { id: "d", text: "Los proyectos de mejora, las prácticas de operaciones y la gestión de cambios." }
    ],
    correctAnswers: ["d"],
    explanation: "El esquema gráfico de la diapositiva 61 ilustra que los proyectos (mejora), las prácticas de operaciones (aseguramiento) y los cambios (corrección) soportan directamente los servicios de TI que sostienen al negocio. (Diapositiva 61)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Problemas en Soporte TI (Perspectiva TI)",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas sobre los problemas típicos en el soporte de TI vistos desde la perspectiva de la propia área de TI.",
    options: [
      { id: "a", text: "Enfoque reactivo en lugar de proactivo y déficit de recursos de gestión." },
      { id: "b", text: "Problemas resueltos repetidamente antes de ser eliminados de raíz." },
      { id: "c", text: "Dependencia del personal por falta de procedimientos y soluciones documentadas." },
      { id: "d", text: "Alta confianza de los usuarios debido al exceso de controles en los cambios." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La diapositiva 62 menciona como problemas desde la perspectiva de TI el enfoque reactivo, la resolución repetida de problemas sin eliminar su causa y la dependencia del personal por falta de documentación. La opción D es incorrecta ya que existe baja confianza del usuario. (Diapositiva 62)",
    diagram: null,
    points: 1
  }
];
