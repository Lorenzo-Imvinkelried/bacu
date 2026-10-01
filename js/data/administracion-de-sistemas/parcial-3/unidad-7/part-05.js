/**
 * Banco de Preguntas - UNIDAD 7 (Administración de Sistemas - Parcial 3)
 * Parte 05 (Preguntas 47 a 57)
 * Temas: Fórmula de Duración y Trabajo, Alcance Producto vs Proyecto, EDT, Riesgos y Estrategias, Calendarización (Gantt y Red).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
  {
    id: "as-p3-u7-q47",
    num: 47,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Calendarización y Duración",
    type: "single",
    prompt: "En la planificación temporal, ¿cuál es la fórmula general que vincula la Duración, el Trabajo y las Unidades de Recurso?",
    options: [
      { id: "a", text: "Duración = Trabajo / Unidades de recurso." },
      { id: "b", text: "Duración = Trabajo × Unidades de recurso." },
      { id: "c", text: "Duración = Unidades de recurso / Trabajo." },
      { id: "d", text: "Duración = Trabajo + Unidades de recurso." }
    ],
    correctAnswers: ["a"],
    explanation: "La fórmula matemática expresada explícitamente en la diapositiva 45 es Duración = Trabajo / Unidades de recurso. (Diapositiva 45)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q48",
    num: 48,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Calendarización y Duración",
    type: "single",
    prompt: "En la fórmula de planificación temporal, ¿cómo se define el término \"Trabajo\"?",
    options: [
      { id: "a", text: "El período transcurrido entre el inicio y la finalización de una tarea." },
      { id: "b", text: "El esfuerzo expresado en horas u otra unidad para finalizar una tarea." },
      { id: "c", text: "La cantidad de personas contratadas en el mercado informático." },
      { id: "d", text: "El porcentaje de tiempo lectivo asignado a un recurso de hardware." }
    ],
    correctAnswers: ["b"],
    explanation: "El material define el \"Trabajo\" como el esfuerzo (medido por ejemplo en horas) necesario para finalizar una tarea determinada. (Diapositiva 45)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q49",
    num: 49,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Calendarización y Duración",
    type: "single",
    prompt: "¿Por qué la relación entre las personas disponibles y el tiempo necesario para completar un trabajo NO es lineal?",
    options: [
      { id: "a", text: "Porque el estándar PMBOK limita la cantidad de personas por proyecto a un número fijo." },
      { id: "b", text: "Por factores como el desempeño, la experiencia, el porcentaje de asignación y las comunicaciones." },
      { id: "c", text: "Porque la duración de las tareas depende exclusivamente del tipo de procesador del servidor." },
      { id: "d", debido: "Debido a que los costos de licencias disminuyen cuando aumentan los desarrolladores.", text: "Debido a que los costos de licencias disminuyen cuando aumentan los desarrolladores." }
    ],
    correctAnswers: ["b"],
    explanation: "La relación no es lineal debido a factores de influencia como el desempeño, experiencia, conocimientos del personal, el porcentaje de asignación y la necesidad de conciliar estimaciones y comunicaciones. (Diapositiva 46)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q50",
    num: 50,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Gestión del Alcance",
    type: "single",
    prompt: "¿Cuál es la diferencia conceptual entre el \"Alcance del Producto\" y el \"Alcance del Proyecto\"?",
    options: [
      { id: "a", text: "El del producto refiere al presupuesto; el del proyecto, al tiempo disponible." },
      { id: "b", text: "El del producto abarca características y funciones; el del proyecto, el trabajo para desarrollarlo." },
      { id: "c", text: "El del producto se aplica a hardware; el del proyecto se aplica únicamente a software." },
      { id: "d", text: "El del producto es definido por proveedores; el del proyecto, por los usuarios finales." }
    ],
    correctAnswers: ["b"],
    explanation: "El Alcance del Producto abarca las características y funciones que identifican al producto o servicio, mientras que el Alcance del Proyecto es el trabajo que debe realizarse para entregarlo con dichas características. (Diapositiva 47)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q51",
    num: 51,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "EDT / WBS",
    type: "single",
    prompt: "¿Qué es una EDT (Estructura de Desglose del Trabajo) o WBS?",
    options: [
      { id: "a", text: "Un gráfico temporal que ordena las tareas según su fecha de inicio y finalización." },
      { id: "b", text: "Una descomposición jerárquica orientada al entregable relativa al trabajo a ejecutar." },
      { id: "c", text: "Un informe financiero que detalla los costos de las compras de licencias de software." },
      { id: "d", text: "Un registro de los riesgos tecnológicos ordenados por probabilidad de ocurrencia." }
    ],
    correctAnswers: ["b"],
    explanation: "La EDT/WBS es una descomposición jerárquica orientada al entregable relativa al trabajo que será ejecutado por el equipo para lograr los objetivos y crear los entregables requeridos. (Diapositiva 48)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q52",
    num: 52,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Gestión de Riesgos",
    type: "single",
    prompt: "En la gestión de proyectos, ¿cómo se define un \"Riesgo\"?",
    options: [
      { id: "a", text: "Un defecto confirmado en el código fuente que ocasiona la detención del sistema." },
      { id: "b", text: "Algo desconocido que, si se produce, afecta en forma negativa o positiva los objetivos." },
      { id: "c", text: "Un sobrecosto inevitable generado por la inflación durante el desarrollo." },
      { id: "d", text: "Una sanción contractual impuesta por el cliente debido a retrasos en las entregas." }
    ],
    correctAnswers: ["b"],
    explanation: "Un riesgo es un evento incierto o algo desconocido que, si se produce, afecta de forma negativa (amenaza) o positiva (oportunidad) a los objetivos del proyecto. (Diapositiva 50)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q53",
    num: 53,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Gestión de Riesgos",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas respecto a las estrategias de gestión para \"Amenazas\" (riesgos negativos).",
    options: [
      { id: "a", text: "Evitar." },
      { id: "b", text: "Transferir." },
      { id: "c", text: "Mitigar." },
      { id: "d", text: "Aceptar." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "Las cuatro estrategias de respuesta ante amenazas citadas expresamente en la diapositiva 50 son evitar, transferir, mitigar y aceptar. (Diapositiva 50)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q54",
    num: 54,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Gestión de Riesgos",
    type: "multiple",
    prompt: "¿Cuáles son las estrategias de gestión utilizadas para abordar \"Oportunidades\" (riesgos positivos)? Selecciona todas las opciones correctas.",
    options: [
      { id: "a", text: "Explotar." },
      { id: "b", text: "Compartir." },
      { id: "c", text: "Mejorar." },
      { id: "d", text: "Aceptar." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "Para las oportunidades, el material enumera las estrategias de explotar, compartir, mejorar y aceptar. (Diapositiva 50)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q55",
    num: 55,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Calendarización - Red y Cronograma",
    type: "single",
    prompt: "Dentro del proceso de calendarización del proyecto, ¿cuál es la primera actividad expresada en el material para generar el cronograma?",
    options: [
      { id: "a", text: "Estimar el costo total de las licencias de software." },
      { id: "b", text: "Identificar actividades y dependencias (secuenciar mediante diagramas de red)." },
      { id: "c", text: "Asignar salarios al personal técnico del equipo." },
      { id: "d", text: "Diseñar los prototipos de interfaz de usuario." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 51 indica explícitamente que la primera actividad en la calendarización es \"Identificar actividades y dependencias\" secuenciando mediante diagramas de red (métodos AON y AOA). (Diapositiva 51)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q56",
    num: 56,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Diagramas de Calendarización",
    type: "single",
    prompt: "¿Qué tipo de diagrama se define como aquel que muestra las actividades con sus fechas de inicio/fin y su duración?",
    options: [
      { id: "a", text: "Diagrama de Red." },
      { id: "b", text: "Diagrama de barras (Gantt)." },
      { id: "c", text: "Diagrama de hitos." },
      { id: "d", text: "Diagrama jerárquico de EDT." }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama de barras (Gantt) muestra las actividades con sus fechas de inicio/fin y duración en un formato temporal de barras. (Diapositiva 52)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q57",
    num: 57,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Diagramas de Calendarización",
    type: "single",
    prompt: "¿Cuál es la característica principal de un \"Diagrama de Red\" respecto al desarrollo del cronograma?",
    options: [
      { id: "a", text: "Representa de forma gráfica la jerarquía de los paquetes de trabajo de la EDT." },
      { id: "b", text: "Muestra el camino crítico y cómo están relacionadas lógicamente las actividades." },
      { id: "c", text: "Lista exclusivamente la fecha de ocurrencia de los eventos de duración cero." },
      { id: "d", text: "Detalla el costo acumulado del proyecto en función del tiempo transcurrido." }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama de red destaca por mostrar el camino crítico del proyecto y la forma en que las actividades se relacionan lógicamente entre sí. (Diapositiva 52)",
    diagram: null,
    points: 1
  }
];
