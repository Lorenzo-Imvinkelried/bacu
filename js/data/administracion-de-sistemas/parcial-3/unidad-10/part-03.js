/**
 * Banco de Preguntas - UNIDAD 10 (Administración de Sistemas - Parcial 3)
 * Parte 03 (Preguntas 25 a 36)
 * Temas: Ergonomía (Binomio Hombre-Máquina, Objetivos, Puesto vs Ambiente, Pantalla, Asiento, Teclado, Factores de Riesgo).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "as-p3-u10-q25",
    num: 25,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Objeto Central de la Ergonomía: Hombre-Máquina",
    type: "single",
    prompt: "Respecto a su enfoque de análisis, ¿cuál es el objeto central sobre el que trabaja la ergonomía?",
    options: [
      { id: "a", text: "Estudia al hombre de forma aislada para medir su resistencia biológica." },
      { id: "b", text: "Estudia a la máquina aislada para optimizar su rendimiento energético." },
      { id: "c", text: "Estudia al binomio integrado hombre-máquina dentro de la situación laboral." },
      { id: "d", text: "Estudia únicamente las condiciones climáticas del exterior de la fábrica." }
    ],
    correctAnswers: ["c"],
    explanation: "El texto remarca expresamente que la ergonomía no estudia ni al hombre aislado ni a la máquina aislada, sino al binomio integrado en el ambiente de trabajo. (Diapositiva 119)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q26",
    num: 26,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Objetivos Formales de la Ergonomía",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas. ¿Cuáles constituyen objetivos formales de la ergonomía?",
    options: [
      { id: "a", text: "Diseñar situaciones de trabajo cómodas, fáciles y seguras." },
      { id: "b", text: "Elevar los índices globales de productividad cuantitativa y cualitativa." },
      { id: "c", text: "Reducir lesiones, enfermedades y costos por incapacidades." },
      { id: "d", text: "Promover el incremento de pérdidas en materia prima para agilizar procesos." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La ergonomía busca adecuar el trabajo al hombre (comodidad, seguridad), elevar la productividad, reducir lesiones/enfermedades, reducir costos por incapacidad y disminuir pérdidas de materia prima. (Diapositiva 120)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q27",
    num: 27,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Puesto de Trabajo vs Ambiente de Trabajo",
    type: "single",
    prompt: "¿En qué se diferencia la noción de \"puesto de trabajo\" de la de \"ambiente de trabajo\"?",
    options: [
      { id: "a", text: "El puesto abarca maquinaria, herramientas y mobiliario; el ambiente abarca iluminación, ruido y temperatura." },
      { id: "b", text: "El puesto comprende la temperatura y humedad; el ambiente comprende las sillas y paneles de control." },
      { id: "c", text: "El puesto aplica solo a industrias pesadas; el ambiente aplica solo a tareas administrativas de oficina." },
      { id: "d", text: "El puesto es regulado por el trabajador; el ambiente depende de normativas de comercialización externas." }
    ],
    correctAnswers: ["a"],
    explanation: "El puesto de trabajo comprende maquinaria, herramientas, mobiliario y controles; mientras que el ambiente de trabajo incluye las condiciones físicas circundantes como temperatura, humedad, iluminación y ruido. (Diapositiva 121)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q28",
    num: 28,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Requisitos Ergonómicos del Asiento de Trabajo",
    type: "single",
    prompt: "Según las recomendaciones ergonómicas de oficina, ¿qué características debe cumplir el asiento de trabajo?",
    options: [
      { id: "a", text: "Poseer una altura fija e inmodificable para garantizar la estabilidad estructural." },
      { id: "b", text: "Ser estable, de altura regulable y con respaldo inclinable y ajustable en altura." },
      { id: "c", text: "Contar con un respaldo rígido a 90° sin posibilidad de adaptación o movimiento." },
      { id: "d", text: "Prescindir de libertad de movimiento para forzar al usuario a mantener la misma postura." }
    ],
    correctAnswers: ["b"],
    explanation: "El asiento de oficina debe ser estable, permitir libertad de movimientos, brindar postura confortable, poseer altura regulable y tener un respaldo inclinable y ajustable en altura. (Diapositiva 122)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q29",
    num: 29,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Ángulos Posturales: Cadera (Hip Angle)",
    type: "single",
    prompt: "En la figura sobre ángulos posturales recomendados para el trabajo sentado, ¿cuál es el rango establecido para la cadera (hip angle)?",
    options: [
      { id: "a", text: "45° - 60°." },
      { id: "b", text: "130° - 160°." },
      { id: "c", text: "15° - 30°." },
      { id: "d", text: "90° - 120°." }
    ],
    correctAnswers: ["d"],
    explanation: "El esquema de la diapositiva 122 detalla los ángulos ergonométricos recomendados: ángulo de cadera de 90° - 120°, ángulo de rodilla de 90° - 130° y ángulo de tobillo de 100° - 120°. (Diapositiva 122)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q30",
    num: 30,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Requisitos Ergonómicos de la Pantalla",
    type: "single",
    prompt: "Para prevenir la fatiga visual en puestos de oficina, ¿qué condición se exige a la imagen de la pantalla?",
    options: [
      { id: "a", text: "Mantener un nivel constante de parpadeo para estimular la concentración." },
      { id: "b", text: "Ser estable, sin fenómenos de destellos, centelleos ni inestabilidad." },
      { id: "c", text: "Estar fija en la estructura de la mesa sin posibilidad de orientación o inclinación." },
      { id: "d", text: "Funcionar con el brillo máximo de fábrica sin regulaciones según el entorno." }
    ],
    correctAnswers: ["b"],
    explanation: "La pantalla debe ofrecer una imagen estable libre de destellos o centelleos, caracteres claros y legibles, capacidad de inclinarse/orientarse y ajuste de contraste y luminosidad. (Diapositiva 123)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q31",
    num: 31,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Requisitos Ergonómicos del Teclado",
    type: "single",
    prompt: "¿Qué característica ergonómica se exige para el teclado en un puesto informático de trabajo?",
    options: [
      { id: "a", text: "Estar integrado de forma fija e inseparable a la pantalla del ordenador." },
      { id: "b", text: "Colocarse justo en el borde de la mesa sin dejar espacio para apoyar los brazos." },
      { id: "c", text: "Ser inclinable e independiente de la pantalla, con espacio frontal para apoyar brazos y manos." },
      { id: "d", text: "Tener símbolos de teclas del mismo color del fondo para evitar distracciones." }
    ],
    correctAnswers: ["c"],
    explanation: "El teclado debe ser inclinable e independiente de la pantalla, permitir una postura cómoda sin fatiga en brazos/manos, disponer de espacio de apoyo frontal y tener teclas legibles. (Diapositiva 124)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q32",
    num: 32,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Requisitos Ergonómicos de la Mesa de Trabajo",
    type: "single",
    prompt: "¿Qué propiedad debe poseer la superficie de la mesa de trabajo según las recomendaciones ergonómicas?",
    options: [
      { id: "a", text: "Ser poco reflectante y tener dimensiones suficientes para la colocación flexible de elementos." },
      { id: "b", text: "Presentar un acabado altamente brillante y reflectante para mejorar la iluminación." },
      { id: "c", text: "Estar inclinada de forma fija hacia el suelo a 45° para facilitar la lectura." },
      { id: "d", text: "Carecer de soporte documental para reducir el volumen de objetos en la mesa." }
    ],
    correctAnswers: ["a"],
    explanation: "La mesa de trabajo debe ser poco reflectante, poseer dimensiones suficientes para ubicar cómodamente pantalla, teclado y documentos, y contar con espacio adecuado para las piernas. (Diapositiva 125)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q33",
    num: 33,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Clasificación de Factores de Riesgo Laboral",
    type: "single",
    prompt: "¿Cuáles son los tres grandes grupos en los que se clasifican los factores de riesgo del trabajo en la unidad?",
    options: [
      { id: "a", text: "Riesgos físicos, riesgos químicos y riesgos biológicos." },
      { id: "b", text: "Carga postural, condiciones ambientales y aspectos psicosociales." },
      { id: "c", text: "Riesgos del empleador, riesgos de la ART y riesgos del trabajador." },
      { id: "d", text: "Accidentes in-itinere, enfermedades agudas y afecciones crónicas." }
    ],
    correctAnswers: ["b"],
    explanation: "Los factores de riesgo del trabajo presentados se clasifican en tres categorías: 1) La carga postural, 2) Las condiciones ambientales y 3) Los aspectos psicosociales. (Diapositiva 126)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q34",
    num: 34,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Factores de Riesgo: Carga Postural",
    type: "single",
    prompt: "En la tabla de factores de riesgo, ¿qué daños a la salud se asocian a la \"carga postural\" (movilidad restringida y posturas inadecuadas)?",
    options: [
      { id: "a", text: "Trastornos respiratorios e infecciones oculares por aire acondicionado." },
      { id: "b", text: "Infecciones cutáneas por contacto con herramientas de oficina." },
      { id: "c", text: "Dificultades graves para la concentración por fuentes de ruido." },
      { id: "d", text: "Incomodidad, molestias y lesiones musculares, y trastornos circulatorios." }
    ],
    correctAnswers: ["d"],
    explanation: "La carga postural genera incomodidad, molestias y lesiones musculares, así como trastornos circulatorios derivados de la movilidad restringida y el mal diseño de la silla/mesa. (Diapositiva 127)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q35",
    num: 35,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Factores de Riesgo: Condiciones Ambientales (Iluminación)",
    type: "single",
    prompt: "¿Qué daños a la salud se derivan de deficiencias en la iluminación (reflejos, mala iluminación y fuertes contrastes) dentro de las condiciones ambientales?",
    options: [
      { id: "a", text: "Molestias musculares en la zona lumbar y tobillos." },
      { id: "b", text: "Infecciones graves en el sistema respiratorio superior." },
      { id: "c", text: "Alteraciones visuales y fatiga visual." },
      { id: "d", text: "Trastornos del sueño y depresión psicosocial." }
    ],
    correctAnswers: ["c"],
    explanation: "En el apartado de condiciones ambientales, los problemas de iluminación (reflejos, contrastes, mala luz) producen directamente alteraciones visuales y fatiga visual. (Diapositiva 127)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q36",
    num: 36,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Factores de Riesgo: Aspectos Psicosociales",
    type: "single",
    prompt: "¿Qué posibles consecuencias para la salud se vinculan a los factores de riesgo psicosociales (organización del trabajo, tipo de tarea y políticas de RRHH)?",
    options: [
      { id: "a", text: "Trastornos circulatorios severos por falta de espacio para las piernas." },
      { id: "b", text: "Lesiones musculares agudas por ubicación incorrecta del ordenador." },
      { id: "c", text: "Alteraciones visuales provocadas por la excesiva velocidad del aire." },
      { id: "d", text: "Insatisfacción, trastornos del sueño, nerviosismo, depresión y baja del rendimiento." }
    ],
    correctAnswers: ["d"],
    explanation: "Los aspectos psicosociales afectan la salud mental y general produciendo insatisfacción, trastornos del sueño, nerviosismo, depresión, alteraciones físicas y disminución del rendimiento. (Diapositiva 127)",
    diagram: null,
    points: 1
  }
];
