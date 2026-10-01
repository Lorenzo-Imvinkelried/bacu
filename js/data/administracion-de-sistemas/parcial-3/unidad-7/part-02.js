/**
 * Banco de Preguntas - UNIDAD 7 (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 12 a 23)
 * Temas: Factores Ambientales, Activos de Procesos, Ciclo de Vida, Entregables, Fases y Grupos de Procesos.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-u7-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Factores Ambientales y Activos",
    type: "single",
    prompt: "¿Cuál de los siguientes elementos se clasifica como un \"Factor Ambiental de la Empresa\"?",
    options: [
      { id: "a", text: "Las plantillas institucionales para el diseño de documentos." },
      { id: "b", text: "Los lineamientos metodológicos para el control de cambios." },
      { id: "c", text: "Las normas de la industria, las condiciones del mercado y la cultura organizacional." },
      { id: "d", text: "Los archivos históricos con lecciones aprendidas de proyectos anteriores." }
    ],
    correctAnswers: ["c"],
    explanation: "Los factores ambientales comprenden aspectos internos y externos al entorno como procesos, estructura y cultura organizacional, normas gubernamentales/industriales, condiciones del mercado y recursos humanos. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Factores Ambientales y Activos",
    type: "single",
    prompt: "¿Cuál de las siguientes opciones constituye un \"Activo de los Procesos de la Organización\"?",
    options: [
      { id: "a", text: "La infraestructura tecnológica instalada en la empresa." },
      { id: "b", text: "Las plantillas, procesos y lineamientos institucionales." },
      { id: "c", text: "El nivel de competencia comercial de los competidores." },
      { id: "d", text: "Las regulaciones de privacidad exigidas por el gobierno." }
    ],
    correctAnswers: ["b"],
    explanation: "Los activos de los procesos de la organización incluyen procesos, lineamientos y plantillas que forman parte de la base de conocimientos propia de la empresa. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Ciclo de Vida y Entregables",
    type: "single",
    prompt: "¿Qué función cumple el \"Ciclo de Vida\" en la gestión de proyectos?",
    options: [
      { id: "a", text: "Define las tarifas salariales aplicables a los recursos asignados a las tareas." },
      { id: "b", text: "Establece el inicio, el final y las fases que integran el proyecto." },
      { id: "c", text: "Enumera los proveedores de software aprobados para la contratación." },
      { id: "d", text: "Muestra el cálculo del margen de beneficio financiero esperado." }
    ],
    correctAnswers: ["b"],
    explanation: "El ciclo de vida (asociado a los grupos de procesos) define la estructura general del proyecto determinando su comienzo, su final y las fases intermedias. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Ciclo de Vida y Entregables",
    type: "single",
    prompt: "¿Cómo se define un \"Entregable\" en el contexto de la dirección de proyectos?",
    options: [
      { id: "a", text: "Un hito de duración variable que señala el inicio del presupuesto." },
      { id: "b", text: "Un documento de auditoría que aprueba la gestión financiera del proyecto." },
      { id: "c", text: "Un producto tangible y comprobable generado para completar una fase o proyecto." },
      { id: "d", text: "Una estimación probabilística sobre la duración total de las actividades." }
    ],
    correctAnswers: ["c"],
    explanation: "Un entregable se define expresamente como un producto tangible y comprobable, como un estudio de viabilidad, un diseño detallado o un prototipo. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Fases y Etapas del Proyecto",
    type: "single",
    prompt: "Respecto a la estructura de las \"Fases del proyecto\", ¿cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { id: "a", text: "Deben ejecutarse obligatoriamente de forma secuencial sin posibilidad de superposición." },
      { id: "b", text: "Son subdivisiones operativas que integran las etapas y carecen de entregables propios." },
      { id: "c", text: "Facilitan la dirección y control, e implican la realización completa de uno o varios entregables." },
      { id: "d", text: "Representan eventos instantáneos de duración cero que marcan hitos en el cronograma." }
    ],
    correctAnswers: ["c"],
    explanation: "Las fases dividen el proyecto para facilitar su dirección, planificación y control. Pueden ser secuenciales o superponerse, y cada fase supone completar uno o varios entregables. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Fases y Etapas del Proyecto",
    type: "single",
    prompt: "En el ejemplo del ciclo de vida presentado en la diapositiva 13, si la fase se denomina \"Diseño del Sistema\", ¿cuál de los siguientes elementos corresponde a una \"Etapa\"?",
    options: [
      { id: "a", text: "Captura y análisis de requisitos." },
      { id: "b", text: "Validación del diseño de clases." },
      { id: "c", text: "Operación y mantenimiento." },
      { id: "d", text: "Integración y prueba." }
    ],
    correctAnswers: ["b"],
    explanation: "En el diagrama de la diapositiva 13, dentro de la Fase \"Diseño del Sistema\" se detalla la Etapa \"Validación del diseño de clases\" como una subdivisión representativa. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q18",
    num: 18,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Estructura de un Proceso",
    type: "single",
    prompt: "De acuerdo con el modelo genérico de proceso presentado en la asignatura, ¿cuáles son sus tres componentes fundamentales?",
    options: [
      { id: "a", text: "Requisitos, Desarrollo y Pruebas." },
      { id: "b", text: "Entradas, Herramientas y Técnicas, y Salidas." },
      { id: "c", text: "Objetivos, Indicadores y Resultados." },
      { id: "d", text: "Planificación, Ejecución y Cierre." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 15 esquematiza la definición formal de un proceso representando las \"Entradas\" que se transforman mediante \"Herramientas y Técnicas\" para producir \"Salidas\". (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q19",
    num: 19,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Estructura de un Proceso",
    type: "single",
    prompt: "En el proceso de gestión denominado \"Desarrollar el Cronograma\", ¿cuál de los siguientes elementos actúa como una Entrada?",
    options: [
      { id: "a", text: "El cronograma del proyecto aprobado." },
      { id: "b", text: "La lista de actividades y requerimientos de recursos." },
      { id: "c", text: "Las actualizaciones a los documentos de la organización." },
      { id: "d", text: "El informe final de control de cambios." }
    ],
    correctAnswers: ["b"],
    explanation: "Según el ejemplo de la diapositiva 16, la lista de actividades, la duración de las actividades y los requerimientos de recursos son entradas del proceso \"Desarrollar el Cronograma\". (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q20",
    num: 20,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos",
    type: "single",
    prompt: "Respecto a los Grupos de Procesos de la dirección de proyectos, ¿cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { id: "a", text: "Son equivalentes a las fases del ciclo de vida del software y no se repiten." },
      { id: "b", text: "Son independientes de las áreas de aplicación y se repiten en cada fase del proyecto." },
      { id: "c", text: "Aplican únicamente en proyectos de gran tamaño e industria pesada." },
      { id: "d", text: "Reemplazan la necesidad de definir áreas de conocimiento específicas." }
    ],
    correctAnswers: ["b"],
    explanation: "Los grupos de procesos son independientes de las áreas de aplicación e industria, no son fases del proyecto, y se repiten en cada fase o subproyecto. (Diapositiva 17)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q21",
    num: 21,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos - Iniciación",
    type: "single",
    prompt: "¿Cuál es el propósito central del Grupo del Proceso de Iniciación?",
    options: [
      { id: "a", text: "Detallar las tareas técnicas de programación y asignación de puestos." },
      { id: "b", text: "Definir un nuevo proyecto o fase y obtener la autorización para comenzar." },
      { id: "c", text: "Monitorear el grado de desviación de los costos presupuestados." },
      { id: "d", text: "Finalizar formalmente los contratos con los proveedores informáticos." }
    ],
    correctAnswers: ["b"],
    explanation: "El grupo de procesos de iniciación tiene como fin definir un nuevo proyecto o una nueva fase, así como obtener la autorización formal para comenzar. (Diapositiva 19)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q22",
    num: 22,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos - Planificación",
    type: "single",
    prompt: "¿Qué acciones caracterizan al Grupo del Proceso de Planificación?",
    options: [
      { id: "a", text: "Autorizar el inicio formal de las adquisiciones externas." },
      { id: "b", text: "Establecer el alcance, refinar objetivos y definir cursos de acción." },
      { id: "c", text: "Coordinar al equipo humano durante la construcción del software." },
      { id: "d", text: "Validar la aceptación formal de los entregables por parte del usuario." }
    ],
    correctAnswers: ["b"],
    explanation: "El grupo de planificación abarca el establecimiento del alcance, el refinamiento de los objetivos y la definición de los cursos de acción para alcanzarlos. (Diapositiva 20)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q23",
    num: 23,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos - Ejecución",
    type: "single",
    prompt: "El Grupo del Proceso de Ejecución se orienta a:",
    options: [
      { id: "a", text: "Desarrollar el acta de constitución y evaluar alternativas de inversión." },
      { id: "b", text: "Completar el trabajo definido cumpliendo con las especificaciones planeadas." },
      { id: "c", text: "Medir periódicamente el avance de las actividades frente a la línea base." },
      { id: "d", text: "Cerrar administrativamente los contratos al término de las tareas." }
    ],
    correctAnswers: ["b"],
    explanation: "La ejecución implica llevar a cabo y completar el trabajo definido en el plan de gestión del proyecto, respetando las especificaciones aprobadas. (Diapositiva 21)",
    diagram: null,
    points: 1
  }
];
