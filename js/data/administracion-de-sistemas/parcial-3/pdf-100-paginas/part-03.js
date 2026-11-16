/**
 * Banco de Preguntas - PDF 100 PÁGINAS (Administración de Sistemas - Parcial 3)
 * Parte 03 (Preguntas 24 a 34)
 * Temas: Seguridad Informática (Definición y Recursos) e Higiene y Seguridad (Objetivos y Clasificación de Riesgos)
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "as-p3-pdf100-q24",
    num: 24,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Imprenta y Publicidad)",
    type: "single",
    prompt: "En el marco de una organización dedicada a servicios de imprenta y material para publicidad, la higiene y seguridad en el trabajo:",
    options: [
      { id: "a", text: "Ninguna de las opciones es correcta." },
      { id: "b", text: "Es necesario tenerla en cuenta sólo en el área de impresiones de alto volumen, donde la probabilidad de los riesgos es mayor y también el impacto." },
      { id: "c", text: "Es necesario tenerla en cuenta en el área de impresiones de alto volumen, donde la probabilidad de riesgos es mayor y el impacto generalmente desconocido." },
      { id: "d", text: "Si la organización está certificada, no persigue objetivos concretos en materia de prevención de accidentes." }
    ],
    correctAnswers: ["a"],
    explanation: "La higiene y seguridad aplica a toda la organización (no solo a un área de alto volumen) y siempre persigue la prevención de accidentes laborales independientemente de si está certificada. Por ello ninguna de las afirmaciones restantes es correcta.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q25",
    num: 25,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Definición / Aseguramiento)",
    type: "single",
    prompt: "La seguridad informática consiste en asegurar que:",
    options: [
      { id: "a", text: "el acceso a la información allí contenida así como su modificación sólo sea posible a las personas que se encuentren acreditadas." },
      { id: "b", text: "los recursos del sistema de información de una organización sean utilizados de cualquier manera." },
      { id: "c", text: "Todas las opciones son adecuadas para referirnos a la seguridad informática." },
      { id: "d", text: "el acceso a la información allí contenida, así como su modificación, sea posible por fuera de los límites de su autorización." }
    ],
    correctAnswers: ["a"],
    explanation: "La seguridad informática asegura que el acceso y modificación de la información solo sea posible a personas acreditadas y dentro de los límites de su autorización, utilizando los recursos de la manera que se decidió.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q26",
    num: 26,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Definición Variante Todas)",
    type: "single",
    prompt: "La seguridad informática consiste en asegurar que:",
    options: [
      { id: "a", text: "el acceso a la información allí contenida, así como su modificación, sólo sea posible dentro de los límites de su autorización." },
      { id: "b", text: "el acceso a la información allí contenida, así como su modificación, sólo sea posible a las personas que se encuentren acreditadas." },
      { id: "c", text: "los recursos del sistema de información de una organización sean utilizados de la manera que se decidió." },
      { id: "d", text: "Todas las opciones son adecuadas para referirnos a la seguridad informática." }
    ],
    correctAnswers: ["d"],
    explanation: "Las tres afirmaciones forman parte de la definición completa de seguridad informática: acceso y modificación solo dentro de los límites de autorización, por personas acreditadas, y uso de recursos de la manera decidida.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q27",
    num: 27,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Recursos asegurados)",
    type: "single",
    prompt: "Al incorporar la Seguridad Informática en una organización, estamos asegurando:",
    options: [
      { id: "a", text: "Los recursos de software, humanos y no los de hardware." },
      { id: "b", text: "Los recursos humanos, de hardware, pero no los de software." },
      { id: "c", text: "Los recursos de hardware y software pero no los recursos humanos" },
      { id: "d", text: "Ninguna de las opciones garantizan la seguridad informática." }
    ],
    correctAnswers: ["d"],
    explanation: "La seguridad informática protege integralmente los recursos humanos, de hardware y de software. Ninguna opción que excluya alguno de estos tres pilares es correcta.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q28",
    num: 28,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Seguridad Informática (Recursos asegurados Variante Todas)",
    type: "single",
    prompt: "Al incorporar la Seguridad Informática en una organización, estamos asegurando:",
    options: [
      { id: "a", text: "Los recursos humanos" },
      { id: "b", text: "Los recursos de hardware" },
      { id: "c", text: "Los recursos de software" },
      { id: "d", text: "Todas las opciones son adecuadas para referirnos a la seguridad informática." }
    ],
    correctAnswers: ["d"],
    explanation: "La seguridad informática abarca la protección de los recursos humanos, de hardware y de software de la organización.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q29",
    num: 29,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Venta de tickets musicales)",
    type: "single",
    prompt: "En una organización dedicada a la venta de tickets para eventos musicales, la higiene y seguridad en el trabajo",
    options: [
      { id: "a", text: "Persigue el objetivo de aplicar medidas y desarrollar actividades tendientes a prevenir accidentes en el ambiente de trabajo." },
      { id: "b", text: "Debería enfocarse en la prevención de fraudes digitales y garantizar la legalidad de los tickets y el resto de los servicios." },
      { id: "c", text: "No persigue objetivos dado que el trabajo administrativo está garantizado y también sus procesos de negocio centrales." },
      { id: "d", text: "Ninguna de las opciones es correcta." }
    ],
    correctAnswers: ["a"],
    explanation: "Sin importar el rubro comercial (como la venta de tickets), la higiene y seguridad en el trabajo tiene por objeto aplicar medidas y desarrollar actividades tendientes a prevenir accidentes en el ambiente laboral.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q30",
    num: 30,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Riesgo de muerte / consecuencias)",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de muerte:",
    options: [
      { id: "a", text: "Todas las afirmaciones son correctas." },
      { id: "b", text: "lo clasificamos con respecto al origen." },
      { id: "c", text: "lo clasificamos con respecto a las consecuencias." },
      { id: "d", text: "lo clasificamos con respecto a las personas." }
    ],
    correctAnswers: ["c"],
    explanation: "El riesgo de muerte o lesiones se ubica dentro de la clasificación de riesgos con respecto a las consecuencias.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q31",
    num: 31,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Riesgo de un empleado en particular / personas)",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de un empleado en particular:",
    options: [
      { id: "a", text: "lo clasificamos con respecto al origen." },
      { id: "b", text: "Todas las afirmaciones son correctas." },
      { id: "c", text: "lo clasificamos con respecto a las personas." },
      { id: "d", text: "lo clasificamos con respecto a las consecuencias." }
    ],
    correctAnswers: ["c"],
    explanation: "Evaluar el riesgo sobre un empleado en particular (riesgo individual vs. social) corresponde a la clasificación con respecto a las personas.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q32",
    num: 32,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Fabricación de juguetes)",
    type: "single",
    prompt: "Considerando una organización dedicada a la fabricación de juguetes, la higiene y seguridad en el trabajo:",
    options: [
      { id: "a", text: "Se vincula directamente a la seguridad de la información intercambiada en los procesos de negocios y flujos de información." },
      { id: "b", text: "Ninguna de las opciones es correcta." },
      { id: "c", text: "Persigue el objetivo de aplicar medidas y desarrollar actividades tendientes a prevenir accidentes en el ambiente de trabajo." },
      { id: "d", text: "Debería enfocarse en garantizar la calidad de los productos, en pos de evitar cualquier daño en los clientes." }
    ],
    correctAnswers: ["c"],
    explanation: "El objeto de la higiene y seguridad en el trabajo es aplicar medidas y desarrollar actividades tendientes a prevenir accidentes en el ambiente laboral, no la calidad del producto final ni la seguridad de la información.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q33",
    num: 33,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Compañía de investigaciones y servicios estadísticos)",
    type: "single",
    prompt: "En una compañía de investigaciones y servicios estadísticos, la higiene y seguridad en el trabajo:",
    options: [
      { id: "a", text: "Ninguna de las opciones es correcta." },
      { id: "b", text: "Si la organización está certificada, no persigue objetivos concretos en materia de prevención de accidentes." },
      { id: "c", text: "No persigue objetivos dado que el trabajo administrativo está garantizado y también sus procesos de negocio centrales." },
      { id: "d", text: "Debería enfocarse en garantizar la calidad de los servicios, en pos de evitar cualquier falta de seguridad en la información brindada a los clientes y el daño que esto pueda generar en los mismos." }
    ],
    correctAnswers: ["a"],
    explanation: "La higiene y seguridad en el trabajo siempre persigue la prevención de accidentes en el ambiente laboral (aun en tareas administrativas o empresas certificadas) y no trata sobre la calidad ni seguridad de la información hacia clientes. Por ello ninguna de las opciones restantes es correcta.",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-pdf100-q34",
    num: 34,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-pdf-100-paginas",
    topic: "Higiene y Seguridad (Riesgo de inundación por lluvias / origen)",
    type: "single",
    prompt: "En el marco de la implementación de un plan de higiene y seguridad del trabajo en nuestra organización, si estamos evaluando el riesgo de inundación por lluvias:",
    options: [
      { id: "a", text: "Todas las afirmaciones son correctas." },
      { id: "b", text: "lo clasificamos con respecto a las consecuencias." },
      { id: "c", text: "lo clasificamos con respecto al origen." },
      { id: "d", text: "lo clasificamos con respecto a las personas." }
    ],
    correctAnswers: ["c"],
    explanation: "El riesgo de inundación por lluvias proviene de un fenómeno natural, por lo que corresponde a la clasificación con respecto al origen (natural o inducido).",
    diagram: null,
    points: 1
  }
];
