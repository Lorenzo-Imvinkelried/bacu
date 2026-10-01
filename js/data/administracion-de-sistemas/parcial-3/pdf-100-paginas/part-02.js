/**
 * Banco de Preguntas - PDF 100 PÁGINAS (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 10 a 17)
 * Temas: Teletrabajo (Ventajas y Desventajas) e Higiene y Seguridad en el Trabajo (Clasificación de Riesgos y Objetivos)
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-pdf100-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Teletrabajo - Ventajas y Desventajas",
    type: "single",
    prompt: "Si estamos evaluando aplicar el Teletrabajo en la organización, podemos considerar:",
    options: [
      { id: "a", text: "como ventaja, el ahorro de ciertos costos de funcionamiento en la organización." },
      { id: "b", text: "como ventaja, el manejo de los horarios por parte del empleado." },
      { id: "c", text: "como desventaja, la posible pérdida del sentido de pertenencia del empleado a la organización." },
      { id: "d", text: "Todas las opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "El teletrabajo ofrece ventajas operativas (ahorro de costos, flexibilidad de horarios) y desventajas humanas (aislamiento, posible pérdida de sentido de pertenencia). Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Teletrabajo - Desventajas para el Empleado",
    type: "single",
    prompt: "Si estamos evaluando aplicar el Teletrabajo en la organización, podemos considerar como desventaja:",
    options: [
      { id: "a", text: "el manejo de los horarios por parte del empleado." },
      { id: "b", text: "el ahorro de ciertos costos de funcionamiento en la organización." },
      { id: "c", text: "la posible pérdida del sentido de pertenencia del empleado a la organización." },
      { id: "d", text: "Todas las opciones son desventajas." }
    ],
    correctAnswers: ["c"],
    explanation: "La única desventaja entre las opciones es la posible pérdida del sentido de pertenencia del empleado; el manejo de horarios y el ahorro de costos constituyen ventajas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad - Clasificación Integral de Riesgos",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización:",
    options: [
      { id: "a", text: "Si lo clasificamos con respecto a las personas, el riesgo puede ser individual o social." },
      { id: "b", text: "Si lo clasificamos con respecto a las consecuencias, el riesgo puede ser de muerte o lesiones, entre otras." },
      { id: "c", text: "Si lo clasificamos con respecto al origen, el riesgo puede ser natural o inducido." },
      { id: "d", text: "Todas las afirmaciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "Los riesgos laborales se clasifican por personas (individual o social), por consecuencias (muerte, lesiones, días perdidos) y por origen (natural o inducido). Todas las afirmaciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Clasificación de Riesgos - Con Respecto a las Personas",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de un empleado en particular:",
    options: [
      { id: "a", text: "lo clasificamos con respecto al origen." },
      { id: "b", text: "lo clasificamos con respecto a las consecuencias." },
      { id: "c", text: "lo clasificamos con respecto a las personas." },
      { id: "d", text: "Todas las afirmaciones son correctas." }
    ],
    correctAnswers: ["c"],
    explanation: "Evaluar el riesgo sobre un individuo aislado corresponde a la clasificación 'con respecto a las personas' (riesgo individual).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Clasificación de Riesgos - Con Respecto a las Consecuencias",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de muerte:",
    options: [
      { id: "a", text: "lo clasificamos con respecto al origen." },
      { id: "b", text: "lo clasificamos con respecto a las personas." },
      { id: "c", text: "lo clasificamos con respecto a las consecuencias." },
      { id: "d", text: "Todas las afirmaciones son correctas." }
    ],
    correctAnswers: ["c"],
    explanation: "El riesgo de muerte, lesiones o pérdida de días de trabajo se clasifica según 'las consecuencias' del evento.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Clasificación de Riesgos - Con Respecto al Origen",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de inundación por lluvias:",
    options: [
      { id: "a", text: "lo clasificamos con respecto a las consecuencias." },
      { id: "b", text: "lo clasificamos con respecto a las personas." },
      { id: "c", text: "lo clasificamos con respecto al origen." },
      { id: "d", text: "Todas las afirmaciones son correctas." }
    ],
    correctAnswers: ["c"],
    explanation: "Las inundaciones por lluvias son fenómenos climáticos, por lo que el riesgo se clasifica con respecto al origen (riesgo natural).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad - Objetivo Universal de Prevención",
    type: "single",
    prompt: "En una organización dedicada a la venta de tickets para eventos musicales / fabricación de juguetes, la higiene y seguridad en el trabajo:",
    options: [
      { id: "a", text: "Persigue el objetivo de aplicar medidas y desarrollar actividades tendientes a prevenir accidentes en el ambiente de trabajo." },
      { id: "b", text: "Debería enfocarse en la prevención de fraudes digitales y garantizar la legalidad de los tickets." },
      { id: "c", text: "No persigue objetivos dado que el trabajo administrativo está garantizado." },
      { id: "d", text: "Ninguna de las opciones es correcta." }
    ],
    correctAnswers: ["a"],
    explanation: "Sin importar el rubro comercial de la empresa, el objeto básico de la higiene y seguridad es siempre aplicar medidas y actividades orientadas a prevenir accidentes en el entorno laboral.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad - Alcance Empresarial",
    type: "single",
    prompt: "En una compañía de investigaciones y servicios estadísticos / imprenta, la higiene y seguridad en el trabajo:",
    options: [
      { id: "a", text: "Es necesario tenerla en cuenta sólo en el área de impresiones de alto volumen." },
      { id: "b", text: "Si la organización está certificada, no persigue objetivos concretos en materia de prevención de accidentes." },
      { id: "c", text: "Debería enfocarse en garantizar la calidad de los servicios/productos." },
      { id: "d", text: "Ninguna de las opciones es correcta." }
    ],
    correctAnswers: ["d"],
    explanation: "La higiene y seguridad aplica a la totalidad de la empresa, no se invalida por certificaciones y se enfoca en prevención de accidentes (no en calidad de productos). Al no figurar la definición real preventiva, la opción correcta es 'Ninguna de las opciones es correcta'.",
    diagram: null,
    points: 1
  }
];
