/**
 * Banco de Preguntas - PDF 100 PÁGINAS (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 12)
 * Temas: Firma Digital, Ergonomía, Teletrabajo, Auditoría Informática (Objetivos) e Higiene y Seguridad
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-pdf100-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Firma Digital",
    type: "single",
    prompt: "Al implementar firma digital en la organización:",
    options: [
      { id: "a", text: "se permite al receptor de un mensaje firmado digitalmente determinar la entidad originadora de dicho mensaje, garantizando la integridad." },
      { id: "b", text: "Ninguna de las opciones son correctas." },
      { id: "c", text: "estamos utilizando un mecanismo de seguridad física." },
      { id: "d", text: "se garantiza la autenticación de origen y el no repudio al poder confirmar que el mensaje no ha sido alterado desde que fue firmado por el originador." }
    ],
    correctAnswers: ["b"],
    explanation: "La firma digital es un mecanismo de seguridad lógica (no física). Además, las opciones A y D cruzan incorrectamente sus propiedades: determinar la entidad originadora refiere a la autenticación de origen, mientras que confirmar que el mensaje no fue alterado refiere a la integridad. Por eso la respuesta correcta es 'Ninguna de las opciones son correctas.'",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Firma Digital (Variante 2)",
    type: "single",
    prompt: "Al implementar firma digital en la organización:",
    options: [
      { id: "a", text: "no es posible confirmar que el mensaje no ha sido alterado desde que fue firmado por el originador." },
      { id: "b", text: "Ninguna de las opciones son correctas." },
      { id: "c", text: "se permite al receptor de un mensaje firmado digitalmente determinar la entidad originadora de dicho mensaje." },
      { id: "d", text: "estamos utilizando un mecanismo de seguridad física." }
    ],
    correctAnswers: ["c"],
    explanation: "La firma digital permite al receptor de un mensaje firmado digitalmente determinar la entidad originadora del mensaje (además de ser un mecanismo de seguridad lógica y permitir verificar que no fue alterado).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Firma Digital (Variante 3)",
    type: "single",
    prompt: "Al implementar firma digital en la organización:",
    options: [
      { id: "a", text: "Todas las opciones son correctas." },
      { id: "b", text: "se garantiza la autenticación de origen y el no repudio al poder confirmar que el mensaje no ha sido alterado desde que fue firmado por el originador." },
      { id: "c", text: "estamos utilizando un mecanismo de seguridad lógica." },
      { id: "d", text: "se permite al receptor de un mensaje firmado digitalmente determinar la entidad originadora de dicho mensaje, garantizando la integridad." }
    ],
    correctAnswers: ["c"],
    explanation: "La firma digital constituye un mecanismo de seguridad lógica. Las opciones B y D mezclan las definiciones de autenticación de origen, no repudio e integridad, por lo que únicamente la opción C es correcta.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Diseño Ergonómico / Ergonomía",
    type: "single",
    prompt: "El diseño ergonómico:",
    options: [
      { id: "a", text: "persigue el logro de un diseño óptimo de puestos de trabajo." },
      { id: "b", text: "pretende lograr herramientas, máquinas, sistemas, tareas, trabajos y ambientes seguros, confortables y de uso humano efectivo." },
      { id: "c", text: "Todas las opciones son válidas." },
      { id: "d", text: "considera las habilidades humanas, sus limitaciones y características." }
    ],
    correctAnswers: ["c"],
    explanation: "El diseño ergonómico busca el diseño óptimo de los puestos de trabajo considerando las habilidades, limitaciones y características humanas para lograr herramientas, sistemas, tareas y ambientes seguros, confortables y efectivos. Todas las opciones son válidas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Ergonomía (Definición Variante)",
    type: "single",
    prompt: "La ergonomía se define como:",
    options: [
      { id: "a", text: "tiene como objetivo lograr un diseño de puestos de trabajo sin importar los medios." },
      { id: "b", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para la evaluación de los riesgos en el trabajo." },
      { id: "c", text: "Ninguna de las opciones es válida para definir la ergonomía." },
      { id: "d", text: "un cuerpo de conocimientos acerca de las habilidades de las máquinas, sus limitaciones y características que son relevantes para el diseño de los puestos de trabajo." }
    ],
    correctAnswers: ["c"],
    explanation: "La ergonomía es un cuerpo de conocimientos sobre las habilidades, limitaciones y características humanas relevantes para el diseño de los puestos de trabajo. Como ninguna opción reproduce correctamente esa definición, la respuesta es 'Ninguna de las opciones es válida para definir la ergonomía.'",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Ergonomía (Definición Variante 2)",
    type: "single",
    prompt: "La ergonomía se define como:",
    options: [
      { id: "a", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para definir el organigrama de la empresa." },
      { id: "b", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para el diseño de los puestos de trabajo." },
      { id: "c", text: "Ninguna de las opciones es válida para definir la ergonomía." },
      { id: "d", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para la evaluación de los riesgos en el trabajo." }
    ],
    correctAnswers: ["b"],
    explanation: "La definición formal de ergonomía corresponde al cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características relevantes para el diseño de los puestos de trabajo.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Teletrabajo",
    type: "single",
    prompt: "Si estamos evaluando aplicar el Teletrabajo en la organización, podemos considerar:",
    options: [
      { id: "a", text: "como ventaja, el ahorro de ciertos costos de funcionamiento en la organización." },
      { id: "b", text: "como desventaja, el manejo de los horarios por parte del empleado." },
      { id: "c", text: "como ventaja, la posible pérdida del sentido de pertenencia del empleado a la organización." },
      { id: "d", text: "Todas las opciones son correctas" }
    ],
    correctAnswers: ["a"],
    explanation: "En el teletrabajo, el ahorro de costos de funcionamiento es una ventaja. En cambio, el manejo de los horarios es una ventaja (no desventaja) y la posible pérdida del sentido de pertenencia es una desventaja (no ventaja).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Teletrabajo (Desventaja)",
    type: "single",
    prompt: "Si estamos evaluando aplicar el Teletrabajo en la organización, podemos considerar como desventaja:",
    options: [
      { id: "a", text: "Todas las opciones son desventajas." },
      { id: "b", text: "el manejo de los horarios por parte del empleado." },
      { id: "c", text: "el ahorro de ciertos costos de funcionamiento en la organización." },
      { id: "d", text: "la posible pérdida del sentido de pertenencia del empleado a la organización." }
    ],
    correctAnswers: ["d"],
    explanation: "La posible pérdida del sentido de pertenencia del empleado a la organización constituye una desventaja del teletrabajo, mientras que el manejo de horarios y el ahorro de costos de funcionamiento son ventajas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Teletrabajo (Variante general)",
    type: "single",
    prompt: "Si estamos evaluando aplicar el Teletrabajo en la organización, podemos considerar:",
    options: [
      { id: "a", text: "Todas las opciones son correctas." },
      { id: "b", text: "como ventaja, el ahorro de ciertos costos de funcionamiento en la organización." },
      { id: "c", text: "como ventaja, el manejo de los horarios por parte del empleado." },
      { id: "d", text: "como desventaja, la posible pérdida del sentido de pertenencia del empleado a la organización." }
    ],
    correctAnswers: ["a"],
    explanation: "En esta variante todas las relaciones ventaja/desventaja están correctamente planteadas: el ahorro de costos y el manejo de horarios por parte del empleado son ventajas, y la posible pérdida del sentido de pertenencia es una desventaja.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Objetivos)",
    type: "single",
    prompt: "La auditoría informática pretende determinar, entre otras cosas, si un sistema de información:",
    options: [
      { id: "a", text: "mantiene la integridad de las personas." },
      { id: "b", text: "Las dos opciones son correctas." },
      { id: "c", text: "Ninguna de las opciones son correctas." },
      { id: "d", text: "cumple con las leyes y regulaciones establecidas." }
    ],
    correctAnswers: ["d"],
    explanation: "La auditoría informática busca determinar si el sistema cumple con las leyes y regulaciones establecidas y si mantiene la integridad de los datos (no 'de las personas').",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Objetivos Variante 2)",
    type: "single",
    prompt: "La auditoría informática pretende determinar, entre otras cosas, si un sistema de información:",
    options: [
      { id: "a", text: "Todas las opciones son correctas." },
      { id: "b", text: "utiliza eficientemente los recursos." },
      { id: "c", text: "lleva a cabo eficazmente los fines de la organización." },
      { id: "d", text: "mantiene la integridad de los datos." }
    ],
    correctAnswers: ["a"],
    explanation: "La auditoría informática evalúa el uso eficiente de los recursos, la eficacia para alcanzar los fines de la organización y el mantenimiento de la integridad de los datos. Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Plan General)",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización:",
    options: [
      { id: "a", text: "Si lo clasificamos con respecto a las personas, el riesgo puede ser individual o social." },
      { id: "b", text: "Todas las afirmaciones son correctas." },
      { id: "c", text: "Si lo clasificamos con respecto a las consecuencias, el riesgo puede ser de muerte o lesiones, entre otras." },
      { id: "d", text: "Si lo clasificamos con respecto al origen, el riesgo puede ser natural o inducido." }
    ],
    correctAnswers: ["b"],
    explanation: "Dentro de un plan de higiene y seguridad del trabajo, los riesgos se clasifican con respecto a las personas (individual o social), con respecto a las consecuencias (muerte, lesiones, etc.) y con respecto al origen (natural o inducido). Todas las afirmaciones son correctas.",
    diagram: null,
    points: 1
  }
];
