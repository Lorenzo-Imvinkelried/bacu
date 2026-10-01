/**
 * Banco de Preguntas - PDF 100 PÁGINAS (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 9)
 * Temas: Seguridad Informática (Lógica, Física, Tríada CID, Firma Digital), Auditoría y Ergonomía
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-pdf100-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática - Concepto y Alcance",
    type: "single",
    prompt: "La seguridad informática consiste en asegurar que:",
    options: [
      { id: "a", text: "el acceso a la información allí contenida así como su modificación sólo sea posible a las personas que se encuentren acreditadas." },
      { id: "b", text: "los recursos del sistema de información de una organización sean utilizados de cualquier manera." },
      { id: "c", text: "el acceso a la información allí contenida, así como su modificación, sea posible por fuera de los límites de su autorización." },
      { id: "d", text: "Todas las opciones son adecuadas para referirnos a la seguridad informática." }
    ],
    correctAnswers: ["d"],
    explanation: "Según la clave oficial del Campus Virtual UTN, la respuesta correcta es la opción D ('Todas las opciones son adecuadas para referirnos a la seguridad informática').",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Lógica y Física",
    type: "single",
    prompt: "Según la clasificación de la seguridad informática dentro de la organización:",
    options: [
      { id: "a", text: "la Seguridad Lógica consiste en la aplicación de barreras y procedimientos que resguarden el acceso a los datos." },
      { id: "b", text: "la Seguridad Física consiste en la aplicación de barreras y procedimientos de control implementados para proteger el hardware." },
      { id: "c", text: "la Seguridad Física se refiere a los controles y mecanismos de seguridad dentro y alrededor del Centro de Cómputo." },
      { id: "d", text: "Todas las opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "Según la clave oficial del Campus Virtual UTN, todas las opciones son correctas: la seguridad lógica resguarda el acceso a datos y la física protege hardware e instalaciones del Centro de Cómputos.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Recursos Protegidos por la Seguridad Informática",
    type: "single",
    prompt: "Al incorporar la Seguridad Informática en una organización, estamos asegurando:",
    options: [
      { id: "a", text: "Los recursos de software, humanos y no los de hardware." },
      { id: "b", text: "Los recursos humanos, de hardware, pero no los de software." },
      { id: "c", text: "Los recursos de hardware y software pero no los recursos humanos." },
      { id: "d", text: "Todas las opciones son adecuadas para referirnos a la seguridad informática." }
    ],
    correctAnswers: ["d"],
    explanation: "Según la clave oficial del Campus Virtual UTN, la opción correcta es la D ('Todas las opciones son adecuadas para referirnos a la seguridad informática').",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Tríada CID: Confidencialidad, Integridad y Disponibilidad",
    type: "single",
    prompt: "Con la seguridad informática, preservamos:",
    options: [
      { id: "a", text: "la integridad al salvaguardar la exactitud y totalidad de la información y los métodos de procesamiento." },
      { id: "b", text: "la disponibilidad al garantizar que los usuarios autorizados tengan acceso a la información y a los recursos relacionados con la misma, toda vez que lo requieran." },
      { id: "c", text: "la confidencialidad al garantizar que la información sea accesible sólo a aquellas personas autorizadas a tener acceso a la misma." },
      { id: "d", text: "todas las opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "La tríada de seguridad CID abarca Integridad (exactitud), Disponibilidad (acceso continuo cuando se requiere) y Confidencialidad (acceso solo a autorizados). Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Firma Digital y Mecanismos de Seguridad Lógica",
    type: "single",
    prompt: "Al implementar firma digital en la organización:",
    options: [
      { id: "a", text: "se permite al receptor de un mensaje firmado digitalmente determinar la entidad originadora de dicho mensaje." },
      { id: "b", text: "estamos utilizando un mecanismo de seguridad lógica." },
      { id: "c", text: "se garantiza la autenticación de origen y el no repudio al poder confirmar que el mensaje no ha sido alterado desde que fue firmado por el originador." },
      { id: "d", text: "estamos utilizando un mecanismo de seguridad física." },
      { id: "e", text: "Ninguna de las opciones son correctas." }
    ],
    correctAnswers: ["a", "b", "e"],
    explanation: "La firma digital permite determinar la entidad originadora del mensaje (Opción A) y constituye un mecanismo de seguridad lógica (Opción B). En variantes donde las opciones están incompletas o alteradas, la clave del sistema es 'Ninguna de las opciones son correctas'. El simulador valida cualquiera de las respuestas oficiales.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Objetivos de la Auditoría Informática",
    type: "single",
    prompt: "La auditoría informática pretende determinar, entre otras cosas, si un sistema de información:",
    options: [
      { id: "a", text: "mantiene la integridad de los datos." },
      { id: "b", text: "cumple con las leyes y regulaciones establecidas." },
      { id: "c", text: "utiliza eficientemente los recursos." },
      { id: "d", text: "lleva a cabo eficazmente los fines de la organización." },
      { id: "e", text: "Todas las opciones son correctas." }
    ],
    correctAnswers: ["e"],
    explanation: "La auditoría informática evalúa integridad de datos, cumplimiento legal, uso eficiente de recursos y eficacia en los fines organizacionales. Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Tipos de Auditoría Informática: Interna, Externa y Mixta",
    type: "single",
    prompt: "En el marco de la clasificación de la Auditoría Informática:",
    options: [
      { id: "a", text: "es Interna si es realizada por una entidad funcional perteneciente a la propia estructura organizativa." },
      { id: "b", text: "es Externa si se realiza por personas ajenas a la empresa." },
      { id: "c", text: "es Mixta si es realizada tanto por auditores externos e internos." },
      { id: "d", text: "Todas las opciones son correctas." }
    ],
    correctAnswers: ["d"],
    explanation: "La auditoría informática se clasifica según la posición del auditor en Interna (estructura propia), Externa (terceros independientes) o Mixta (equipo conjunto). Todas las opciones son correctas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Definición Formal de Ergonomía",
    type: "single",
    prompt: "La ergonomía se define como:",
    options: [
      { id: "a", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para el diseño de los puestos de trabajo." },
      { id: "b", text: "un cuerpo de conocimientos acerca de las habilidades humanas, sus limitaciones y características que son relevantes para la evaluación de los riesgos en el trabajo." },
      { id: "c", text: "un cuerpo de conocimientos acerca de las habilidades de las máquinas, sus limitaciones y características." },
      { id: "d", text: "Ninguna de las opciones es válida para definir la ergonomía." }
    ],
    correctAnswers: ["a", "d"],
    explanation: "La definición exacta de ergonomía es el cuerpo de conocimientos sobre habilidades, limitaciones y características humanas relevantes para el diseño de los puestos de trabajo (Opción A). En variantes de examen donde la opción A exacta no figura, la respuesta oficial es la D.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Propósito del Diseño Ergonómico",
    type: "single",
    prompt: "El diseño ergonómico:",
    options: [
      { id: "a", text: "persigue el logro de un diseño óptimo de puestos de trabajo." },
      { id: "b", text: "considera las habilidades humanas, sus limitaciones y características." },
      { id: "c", text: "pretende lograr herramientas, máquinas, sistemas, tareas, trabajos y ambientes seguros, confortables y de uso humano efectivo." },
      { id: "d", text: "Todas las opciones son válidas." }
    ],
    correctAnswers: ["d"],
    explanation: "El diseño ergonómico persigue optimizar puestos, considerar limitaciones humanas y lograr ambientes seguros y confortables. Todas las opciones son válidas.",
    diagram: null,
    points: 1
  }
];
