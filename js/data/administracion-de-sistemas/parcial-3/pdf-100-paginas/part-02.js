/**
 * Banco de Preguntas - PDF 100 PÁGINAS (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 13 a 23)
 * Temas: Auditoría Informática (Clasificación) y Seguridad Informática (Tríada CID, Física y Lógica)
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-pdf100-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Clasificación)",
    type: "single",
    prompt: "En el marco de la clasificación de la Auditoría Informática:",
    options: [
      { id: "a", text: "es Externa si se realiza por personas ajenas a la empresa." },
      { id: "b", text: "es Mixta si es realizada por una entidad funcional perteneciente a la propia estructura organizativa" },
      { id: "c", text: "Todas las opciones son correctas." },
      { id: "d", text: "es Interna si es realizada tanto por personal de la misma organización como personas ajenas a la empresa." }
    ],
    correctAnswers: ["a"],
    explanation: "La auditoría es Externa cuando la realizan personas ajenas a la empresa. La realizada por una entidad de la propia estructura es Interna (no Mixta), y la realizada conjuntamente por personal interno y externo es Mixta (no Interna).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Clasificación Variante 2)",
    type: "single",
    prompt: "En el marco de la clasificación de la Auditoría Informática:",
    options: [
      { id: "a", text: "es Interna si es realizada por una entidad funcional perteneciente a la propia estructura organizativa." },
      { id: "b", text: "es Externa si es realizada tanto por personal de la misma organización como personas ajenas a la empresa." },
      { id: "c", text: "es Mixta si se realiza por personas ajenas a la empresa." },
      { id: "d", text: "Todas las opciones son incorrectas." }
    ],
    correctAnswers: ["a"],
    explanation: "La auditoría es Interna cuando la realiza una entidad funcional perteneciente a la propia estructura organizativa. Las otras opciones intercambian las definiciones de Externa y Mixta.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Clasificación Variante 3)",
    type: "single",
    prompt: "En el marco de la clasificación de la Auditoría Informática:",
    options: [
      { id: "a", text: "es Interna si es realizada por una entidad funcional perteneciente a la propia estructura organizativa." },
      { id: "b", text: "Todas las opciones son correctas." },
      { id: "c", text: "es Mixta si es realizada tanto por auditores externos e internos." },
      { id: "d", text: "es externa si se realiza por personas ajenas a la empresa." }
    ],
    correctAnswers: ["b"],
    explanation: "En esta variante las tres definiciones coinciden con la clasificación oficial: Interna (entidad funcional propia), Mixta (auditores internos y externos) y Externa (personas ajenas a la empresa). Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Auditoría Informática (Clasificación Variante 4)",
    type: "single",
    prompt: "En el marco de la clasificación de la Auditoría Informática:",
    options: [
      { id: "a", text: "es Interna si es realizada tanto por personal de la misma organización como personas ajenas a la empresa." },
      { id: "b", text: "es Externa si es realizada por una entidad funcional perteneciente a la propia estructura organizativa." },
      { id: "c", text: "Todas las opciones son incorrectas." },
      { id: "d", text: "es Mixta si se realiza por personas ajenas a la empresa." }
    ],
    correctAnswers: ["c"],
    explanation: "Todas las definiciones están cruzadas: personal propio y ajeno corresponde a Mixta (no Interna), entidad propia a Interna (no Externa) y personas ajenas a Externa (no Mixta). Por eso todas las opciones son incorrectas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Preservación)",
    type: "single",
    prompt: "Con la seguridad informática, preservamos:",
    options: [
      { id: "a", text: "todas las opciones son correctas." },
      { id: "b", text: "la disponibilidad al garantizar que los usuarios autorizados tengan acceso a la información y a los recursos relacionados con la misma, toda vez que lo requieran." },
      { id: "c", text: "la integridad al salvaguardar la exactitud y totalidad de la información y los métodos de procesamiento." },
      { id: "d", text: "la confidencialidad al garantizar que la información sea accesible sólo a aquellas personas autorizadas a tener acceso a la misma." }
    ],
    correctAnswers: ["a"],
    explanation: "La seguridad informática preserva los tres pilares de la tríada CID con sus definiciones exactas: disponibilidad (acceso cuando se requiera), integridad (exactitud y totalidad) y confidencialidad (acceso solo a autorizados).",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q18",
    num: 18,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Preservación Variante Integridad)",
    type: "single",
    prompt: "Con la seguridad informática, preservamos:",
    options: [
      { id: "a", text: "todas las opciones son correctas." },
      { id: "b", text: "la confidencialidad al garantizar que los usuarios autorizados tengan acceso a la información y a los recursos relacionados con la misma, toda vez que lo requieran." },
      { id: "c", text: "la integridad al salvaguardar la exactitud y totalidad de la información y los métodos de procesamiento." },
      { id: "d", text: "la disponibilidad al garantizar que la información sea accesible sólo a aquellas personas autorizadas a tener acceso a la misma." }
    ],
    correctAnswers: ["c"],
    explanation: "Solo la integridad está definida correctamente (salvaguardar exactitud y totalidad). Las otras dos opciones intercambian las definiciones de confidencialidad y disponibilidad.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q19",
    num: 19,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Preservación Variante Disponibilidad)",
    type: "single",
    prompt: "Con la seguridad informática, preservamos:",
    options: [
      { id: "a", text: "todas las opciones son correctas." },
      { id: "b", text: "la confidencialidad al salvaguardar la exactitud y totalidad de la información y los métodos de procesamiento." },
      { id: "c", text: "la integridad al garantizar que la información sea accesible sólo a aquellas personas autorizadas a tener acceso a la misma." },
      { id: "d", text: "la disponibilidad al garantizar que los usuarios autorizados tengan acceso a la información y a los recursos relacionados con la misma, toda vez que lo requieran." }
    ],
    correctAnswers: ["d"],
    explanation: "Solo la disponibilidad está bien definida (acceso de los usuarios autorizados toda vez que lo requieran). Las opciones B y C asignan definiciones de integridad y confidencialidad de manera invertida.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q20",
    num: 20,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Preservación Variante Confidencialidad)",
    type: "single",
    prompt: "Con la seguridad informática, preservamos:",
    options: [
      { id: "a", text: "la integridad al garantizar que los usuarios autorizados tengan acceso a la información y a los recursos relacionados con la misma, toda vez que lo requieran." },
      { id: "b", text: "la confidencialidad al garantizar que la información sea accesible sólo a aquellas personas autorizadas a tener acceso a la misma." },
      { id: "c", text: "la disponibilidad al salvaguardar la exactitud y totalidad de la información y los métodos de procesamiento." },
      { id: "d", text: "todas las opciones son correctas." }
    ],
    correctAnswers: ["b"],
    explanation: "La única opción con definición correcta es la confidencialidad (garantizar acceso solo a personas autorizadas). Integridad y disponibilidad tienen sus conceptos intercambiados.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q21",
    num: 21,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática dentro de la organización (Física y Lógica)",
    type: "single",
    prompt: "Según la clasificación de las seguridad informática dentro de la organización:",
    options: [
      { id: "a", text: "Ninguna de las opciones es correcta." },
      { id: "b", text: "la Seguridad Lógica consiste en la aplicación de barreras y procedimientos que resguarden el acceso a los datos." },
      { id: "c", text: "la Seguridad Física consiste en la aplicación de barreras y procedimientos de control implementados para proteger el hardware." },
      { id: "d", text: "Las dos opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "Tanto la definición de Seguridad Lógica (barreras y procedimientos que resguardan el acceso a los datos) como la de Seguridad Física (barreras y controles para proteger el hardware) son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q22",
    num: 22,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática dentro de la organización (Variante Centro de Cómputo)",
    type: "single",
    prompt: "Según la clasificación de las seguridad informática dentro de la organización:",
    options: [
      { id: "a", text: "la Seguridad Física se refiere a los controles y mecanismos de seguridad dentro y alrededor del Centro de Cómputo." },
      { id: "b", text: "la Seguridad Lógica consiste en la aplicación de barreras y procedimientos de control implementados para proteger el hardware." },
      { id: "c", text: "la Seguridad Física consiste en la aplicación de barreras y procedimientos que resguarden el acceso a los datos." },
      { id: "d", text: "Ninguna de las opciones es correcta." }
    ],
    correctAnswers: ["a"],
    explanation: "La Seguridad Física comprende los controles dentro y alrededor del Centro de Cómputo (y la protección del hardware). Las opciones B y C invierten Física y Lógica.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q23",
    num: 23,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática dentro de la organización (Variante Todas correctas)",
    type: "single",
    prompt: "Según la clasificación de las seguridad informática dentro de la organización:",
    options: [
      { id: "a", text: "la Seguridad Lógica consiste en la aplicación de barreras y procedimientos que resguarden el acceso a los datos." },
      { id: "b", text: "la Seguridad Física consiste en la aplicación de barreras y procedimientos de control implementados para proteger el hardware." },
      { id: "c", text: "la Seguridad Física se refiere a los controles y mecanismos de seguridad dentro y alrededor del Centro de Cómputo." },
      { id: "d", text: "Todas las opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "Las tres afirmaciones describen correctamente la Seguridad Lógica (resguardo del acceso a los datos) y la Seguridad Física (protección del hardware y controles dentro y alrededor del Centro de Cómputo).",
    diagram: null,
    points: 1
  }
];
