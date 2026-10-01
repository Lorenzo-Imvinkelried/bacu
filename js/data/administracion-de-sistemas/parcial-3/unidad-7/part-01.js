/**
 * Banco de Preguntas - UNIDAD 7 (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 11)
 * Temas: Proyectos Informáticos, PMBOK, Programas, Portafolios, Subproyectos, Operaciones y Restricciones.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-u7-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Proyectos Informáticos en las Organizaciones",
    type: "single",
    prompt: "Al analizar la integración de los proyectos informáticos en las organizaciones, ¿qué aspecto resulta fundamental considerar dentro de una visión integral?",
    options: [
      { id: "a", text: "El reemplazo inmediato de la estructura jerárquica por modelos de gestión no estructurados." },
      { id: "b", text: "El impacto del proyecto en los procesos operativos y de negocio a nivel técnico y cultural." },
      { id: "c", text: "La adquisición prioritaria de hardware de última generación antes de definir las necesidades." },
      { id: "d", text: "La eliminación de métricas de rendimiento para agilizar la adopción de las herramientas." }
    ],
    correctAnswers: ["b"],
    explanation: "Los proyectos informáticos generan un impacto directo en los procesos operativos y de negocio de la organización, demandando una visión integral que contemple tanto los aspectos técnicos como los culturales. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Definición de Proyecto (PMBOK)",
    type: "single",
    prompt: "Según la definición del PMBOK presentada en el material, ¿qué es un proyecto?",
    options: [
      { id: "a", text: "Una serie de procedimientos operativos de carácter continuo dirigidos a sostener la producción." },
      { id: "b", text: "Un conjunto de tareas repetitivas diseñadas para mantener la infraestructura tecnológica." },
      { id: "c", text: "Un esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único." },
      { id: "d", text: "Un marco normativo que regula las compras de equipamiento informático en las organizaciones." }
    ],
    correctAnswers: ["c"],
    explanation: "El PMBOK define al proyecto como un esfuerzo temporal que se emprende con el propósito de crear un producto, servicio o resultado que posee carácter único. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Definición de Proyecto (PMBOK)",
    type: "single",
    prompt: "¿Cuál de los siguientes entregables representa la creación de un \"resultado\" como producto directo de un proyecto?",
    options: [
      { id: "a", text: "Un documento o conjunto de documentos derivado de un proyecto de investigación." },
      { id: "b", text: "La ejecución diaria de copias de seguridad de las bases de datos de la empresa." },
      { id: "c", text: "El servicio continuo de atención telefónica para soporte técnico de usuarios." },
      { id: "d", text: "El mantenimiento preventivo mensual aplicado a los servidores de red." }
    ],
    correctAnswers: ["a"],
    explanation: "El material indica que un proyecto puede generar un resultado, citando expresamente como ejemplo un documento o conjunto de documentos derivado de una investigación que desarrolla conocimientos. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Programas y Portafolios",
    type: "single",
    prompt: "¿En qué consiste la diferencia conceptual entre un \"Programa\" y un \"Portfolio\" (Portafolio)?",
    options: [
      { id: "a", text: "Un programa vincula proyectos por un cliente común; un portfolio requiere siempre una tecnología idéntica." },
      { id: "b", text: "Un programa gestiona subproyectos externos; un portfolio administra exclusivamente proyectos de origen interno." },
      { id: "c", text: "Un programa agrupa proyectos interrelacionados para beneficios coordinados; un portfolio responde a objetivos estratégicos." },
      { id: "d", text: "Un programa carece de coordinación centralizada; un portfolio exige la presencia de un único proveedor técnico." }
    ],
    correctAnswers: ["c"],
    explanation: "Los programas agrupan proyectos interrelacionados gestionados coordinadamente para obtener beneficios grupales; los portfolios combinan programas, proyectos y operaciones para alcanzar objetivos estratégicos globales. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Programas y Portafolios",
    type: "single",
    prompt: "Si varios proyectos en una organización se relacionan únicamente por compartir el mismo cliente, vendedor o recurso tecnológico, ¿bajo qué categoría deben agruparse?",
    options: [
      { id: "a", text: "Programa de desarrollo informático." },
      { id: "b", text: "Portfolio (Portafolio)." },
      { id: "c", text: "Subproyecto funcional." },
      { id: "d", text: "Operación técnica continua." }
    ],
    correctAnswers: ["b"],
    explanation: "El documento aclara que si la relación entre proyectos viene dada únicamente por cliente, vendedor, tecnología o recurso común, la agrupación corresponde a un Portfolio y no a un Programa. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Subproyectos",
    type: "single",
    prompt: "¿Qué característica define a un \"Subproyecto\" dentro de la estructura de gestión?",
    options: [
      { id: "a", text: "Es una fase obligatoria que debe ejecutarse al inicio del ciclo de vida de todo software." },
      { id: "b", text: "Es una operación repetitiva que se mantiene en ejecución tras finalizar el proyecto principal." },
      { id: "c", text: "Es un componente de un proyecto que resulta más fácil de gestionar y suele contratarse externamente." },
      { id: "d", text: "Es un conjunto de metas estratégicas asignadas a la alta dirección de la empresa." }
    ],
    correctAnswers: ["c"],
    explanation: "Un subproyecto es un componente de un proyecto que simplifica la gestión y que habitualmente se contrata a una empresa externa o a otra unidad funcional de la organización. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Proyectos Informáticos",
    type: "single",
    prompt: "De las siguientes actividades del ámbito tecnológico, ¿cuál constituye un ejemplo de proyecto informático según el material?",
    options: [
      { id: "a", text: "El procesamiento rutinario de transacciones diarias en el sistema de ventas." },
      { id: "b", text: "La migración completa del hardware o software de la organización." },
      { id: "c", text: "La resolución periódica de incidentes de usuario en la mesa de ayuda." },
      { id: "d", text: "El monitoreo continuo de la disponibilidad de la red de datos." }
    ],
    correctAnswers: ["b"],
    explanation: "La migración de hardware y/o software es un esfuerzo temporal con un resultado único, lo que se ejemplifica explícitamente en el material como un proyecto informático. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Proyectos vs Operaciones",
    type: "single",
    prompt: "¿Qué característica comparten los proyectos y las operaciones continuas?",
    options: [
      { id: "a", text: "Ambos persiguen la creación de un producto o servicio totalmente único en el mercado." },
      { id: "b", text: "Ambos son realizados por personas, emplean recursos limitados y son planificados y controlados." },
      { id: "c", text: "Ambos concluyen formalmente una vez que se alcanzan los objetivos declarados en el inicio." },
      { id: "d", text: "Ambos operan de manera indefinida sin un horizonte de finalización predeterminado." }
    ],
    correctAnswers: ["b"],
    explanation: "El material señala que las similitudes entre proyectos y operaciones radican en que son realizados por personas, tienen restricciones de recursos limitados y requieren ser planificados, ejecutados y controlados. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Proyectos vs Operaciones",
    type: "single",
    prompt: "¿Cuál es la diferencia fundamental entre un proyecto y una operación?",
    options: [
      { id: "a", text: "El proyecto es de naturaleza temporal y crea un resultado único; la operación es continua y repetitiva." },
      { id: "b", text: "El proyecto prescinde de límites presupuestarios; la operación exige un control financiero estricto." },
      { id: "c", text: "La operación requiere la intervención de personas; el proyecto es ejecutado por sistemas automatizados." },
      { id: "d", text: "La operación concluye al alcanzar objetivos específicos; el proyecto se mantiene de forma permanente." }
    ],
    correctAnswers: ["a"],
    explanation: "Los proyectos se diferencian por ser temporales (tienen inicio y fin definidos) y estar dirigidos a crear un producto o servicio único no realizado antes, a diferencia de las operaciones continuas. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Gestión de Proyectos",
    type: "single",
    prompt: "Según el material de la asignatura, ¿qué es la Gestión de Proyectos?",
    options: [
      { id: "a", text: "La elaboración exclusiva de cronogramas y presupuestos mediante herramientas informáticas." },
      { id: "b", text: "La supervisión jerárquica del equipo técnico para garantizar el cumplimiento de horarios." },
      { id: "c", text: "La aplicación de conocimientos, habilidades, herramientas y técnicas para cumplir con los requisitos." },
      { id: "d", text: "La contratación de servicios externos para mitigar los riesgos operativos de la organización." }
    ],
    correctAnswers: ["c"],
    explanation: "La gestión de proyectos se define formalmente como la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para cumplir con sus requisitos. (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Restricciones del Proyecto",
    type: "multiple",
    prompt: "La gestión de proyectos implica equilibrar restricciones contrapuestas. Selecciona todas las opciones correctas sobre estas restricciones según el texto presentado.",
    options: [
      { id: "a", text: "Alcance." },
      { id: "b", text: "Tiempo." },
      { id: "c", text: "Costo." },
      { id: "d", text: "Calidad." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "El material especifica explícitamente que la gestión de proyectos requiere equilibrar restricciones contrapuestas relacionadas con alcance, tiempo, costo, calidad y recursos. (Diapositiva 10)",
    diagram: null,
    points: 1
  }
];
