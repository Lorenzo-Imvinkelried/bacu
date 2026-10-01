/**
 * Banco de Preguntas - UNIDAD 7 (Administración de Sistemas - Parcial 3)
 * Parte 04 (Preguntas 36 a 46)
 * Temas: Triple Restricción, Matriz de Procesos, Planificación, Métodos de Estimación, Ámbito y Recursos de SW, Hitos.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart04 = [
  {
    id: "as-p3-u7-q36",
    num: 36,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Triple Restricción",
    type: "single",
    prompt: "Según el esquema gráfico de la \"Triple Restricción\", ¿qué variable se sitúa en el centro del triángulo formado por Alcance, Tiempo y Costos?",
    options: [
      { id: "a", text: "Calidad." },
      { id: "b", text: "Riesgos." },
      { id: "c", text: "Recursos Humanos." },
      { id: "d", text: "Comunicaciones." }
    ],
    correctAnswers: ["a"],
    explanation: "En el diagrama de la triple restricción de la diapositiva 36, el núcleo central rodeado por los vértices de Alcance, Tiempo y Costos es la Calidad. (Diapositiva 36)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q37",
    num: 37,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Matriz de Procesos",
    type: "multiple",
    prompt: "De los siguientes procesos expuestos en la matriz del material, ¿cuáles pertenecen al Área de Conocimiento de Gestión del Alcance? Selecciona todas las opciones correctas.",
    options: [
      { id: "a", text: "Definir alcance." },
      { id: "b", text: "Crear EDT." },
      { id: "c", text: "Desarrollar el Acta de Constitución." },
      { id: "d", text: "Planificar calidad." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "De acuerdo con la tabla de ejemplos de la diapositiva 38, \"Definir alcance\" y \"Crear EDT\" corresponden explícitamente al área de Alcance. (Diapositiva 38)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q38",
    num: 38,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Matriz de Procesos",
    type: "single",
    prompt: "¿A qué Área de Conocimiento corresponden los procesos de \"Efectuar adquisiciones\" y \"Cerrar contratos\"?",
    options: [
      { id: "a", text: "Gestión de la Integración." },
      { id: "b", text: "Gestión de las Adquisiciones." },
      { id: "c", text: "Gestión de los Costos." },
      { id: "d", text: "Gestión de los Interesados." }
    ],
    correctAnswers: ["b"],
    explanation: "En la diapositiva 38, estos dos procesos están listados expresamente dentro del área de Adquisiciones. (Diapositiva 38)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q39",
    num: 39,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Matriz de Procesos",
    type: "single",
    prompt: "Respecto a la aplicación práctica de los procesos de gestión de proyectos presentados en la matriz, ¿qué característica se destaca en el material?",
    options: [
      { id: "a", text: "Se aplican de forma rigurosa e idéntica en todos los proyectos sin excepción." },
      { id: "b", text: "Se determinan para cada proyecto y en la práctica se superponen e interactúan." },
      { id: "c", text: "Se ejecutan de manera estrictamente aislada sin intercambiar datos entre sí." },
      { id: "d", text: "Deben completarse en su totalidad antes de iniciar cualquier fase de diseño." }
    ],
    correctAnswers: ["b"],
    explanation: "El material aclara que los procesos se determinan considerando diversos aspectos de cada proyecto y que, en la práctica, se superponen e interactúan de diversas formas. (Diapositiva 39)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q40",
    num: 40,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Planificación de Proyectos",
    type: "single",
    prompt: "¿Cuál es el objetivo principal de la Planificación de Proyectos según el material?",
    options: [
      { id: "a", text: "Inmovilizar las especificaciones para evitar la incorporación de nuevas funciones." },
      { id: "b", text: "Proporcionar un marco de trabajo para generar estimaciones razonables de recursos, costos y tiempo." },
      { id: "c", text: "Garantizar que el desarrollo del software se realice sin utilizar documentación técnica." },
      { id: "d", text: "Eliminar la necesidad de realizar ajustes en la etapa de ejecución y control." }
    ],
    correctAnswers: ["b"],
    explanation: "El objetivo de la planificación es dar un marco de trabajo que permita al gestor generar estimaciones razonables de recursos, costos y tiempos, preparando el mejor plan inicial. (Diapositiva 40)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q41",
    num: 41,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Estimación de Proyectos",
    type: "single",
    prompt: "¿Cuáles son los factores de influencia en las estimaciones que se mencionan explícitamente en el material?",
    options: [
      { id: "a", text: "La cotización de monedas extranjeras y el tipo de contrato." },
      { id: "b", text: "La complejidad, el tamaño y el grado de incertidumbre del proyecto." },
      { id: "c", text: "El lenguaje de programación y el sistema operativo utilizado." },
      { id: "d", text: "La antigüedad de los miembros del departamento de informática." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 41 señala que la complejidad, el tamaño y el grado de incertidumbre (facilidad para dividir el trabajo, disponibilidad de información) influyen directamente en las estimaciones. (Diapositiva 41)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q42",
    num: 42,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Estimación de Proyectos",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas sobre métodos, modelos o técnicas de estimación citados en la diapositiva 42.",
    options: [
      { id: "a", text: "Algorítmicos / fórmulas (COCOMO, Puntos de Función)." },
      { id: "b", text: "Descomposición." },
      { id: "c", text: "Juicio experto." },
      { id: "d", text: "Analogía y paramétrico." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "Todos los ítems listados están explicitados en el material como modelos, métodos o técnicas para la realización de estimaciones en proyectos. (Diapositiva 42)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q43",
    num: 43,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Ámbito y Recursos de Software",
    type: "single",
    prompt: "En la planificación de un proyecto de software, ¿qué comprende la actividad de determinar el \"Ámbito del Software\"?",
    options: [
      { id: "a", text: "La compra inmediata de servidores corporativos y licencias de base de datos." },
      { id: "b", text: "La obtención de información necesaria sobre datos a procesar, funciones, rendimiento y restricciones." },
      { id: "c", text: "La asignación del sueldo base para los programadores del equipo de desarrollo." },
      { id: "d", text: "La definición del organigrama directivo de la empresa cliente." }
    ],
    correctAnswers: ["b"],
    explanation: "Determinar el ámbito requiere obtener la información necesaria, incluyendo datos a procesar, funciones, rendimiento y restricciones del sistema. (Diapositiva 43)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q44",
    num: 44,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Ámbito y Recursos de Software",
    type: "single",
    prompt: "Al estimar recursos requeridos en un proyecto de software, ¿cuáles corresponden a la categoría de Software según la diapositiva 43?",
    options: [
      { id: "a", text: "Servidores físicos, monitores y equipamiento de red local." },
      { id: "b", text: "Licencias, librerías, entornos de desarrollo, máquinas virtuales y bases de datos." },
      { id: "c", text: "La especialidad de los analistas y el número de programadores." },
      { id: "d", text: "Las técnicas de entrevista y los formatos de encuestas de requisitos." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 43 incluye dentro de recursos de SW: licencias, librerías, entornos de desarrollo, máquinas virtuales, bases de datos, etc. (Diapositiva 43)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q45",
    num: 45,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Hitos en la Planificación",
    type: "single",
    prompt: "¿Qué es un \"Hito\" en la planificación temporal de un proyecto?",
    options: [
      { id: "a", text: "Una tarea compleja que consume la mayor parte del presupuesto global." },
      { id: "b", text: "Un evento de duración 0 que marca un momento importante dentro del proyecto." },
      { id: "c", text: "Un proceso de control ejecutado continuamente por los analistas." },
      { id: "d", text: "Un entregable ejecutable compuesto por código fuente probado." }
    ],
    correctAnswers: ["b"],
    explanation: "Los hitos son eventos de duración cero que marcan un momento significativo dentro del proyecto (por ejemplo, la firma de un contrato). No son procesos, actividades ni tareas. (Diapositiva 44)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q46",
    num: 46,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Hitos en la Planificación",
    type: "single",
    prompt: "¿Cuál de las siguientes alternativas representa un ejemplo válido de Hito?",
    options: [
      { id: "a", text: "El diseño de la base de datos relacional del proyecto." },
      { id: "b", text: "La firma de un contrato con el cliente." },
      { id: "c", text: "La codificación de los módulos de interfaz gráfica." },
      { id: "d", text: "La realización de pruebas unitarias de integración." }
    ],
    correctAnswers: ["b"],
    explanation: "La \"Firma de un contrato\" es el ejemplo textual expuesto en la diapositiva 44 para ilustrar un evento instantáneo de duración cero (hito). (Diapositiva 44)",
    diagram: null,
    points: 1
  }
];
