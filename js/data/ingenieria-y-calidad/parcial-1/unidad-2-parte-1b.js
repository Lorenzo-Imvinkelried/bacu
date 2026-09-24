/**
 * Banco de Preguntas - UNIDAD 2 PARTE 1B (Ingeniería y Calidad - Parcial 1)
 * Temas: Procesos técnicos vs de soporte, Relación Proceso-Proyecto-Producto (P-P-P),
 * Proceso vs Ingeniería de Software, 5 Actividades Estructurales (CPMCD),
 * Actividades Sombrilla, Orden temporal según Pressman, Elementos del proceso (Quién, Cómo, Qué),
 * Importancia del proceso, Características (Confiabilidad) y Selección de Modelos de Ciclo de Vida.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS = [
  {
    id: "ing-cal-p1-u2-1b-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Procesos Técnicos vs Procesos de Soporte",
    type: "single",
    prompt: "¿Cuál es la principal diferencia entre los 'procesos técnicos' y los 'procesos de soporte' según el texto?",
    options: [
      {
        id: "a",
        text: "Los procesos técnicos solo involucran el hardware, mientras que los de soporte involucran el código fuente."
      },
      {
        id: "b",
        text: "Los procesos técnicos se encargan del desarrollo del producto, mientras que los de soporte ayudan con la gestión y control de las actividades."
      },
      {
        id: "c",
        text: "Los procesos técnicos son opcionales en una organización, pero los procesos de soporte son obligatorios."
      },
      {
        id: "d",
        text: "Ambos son exactamente lo mismo, solo cambia el nombre dependiendo del tipo de empresa."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Los procesos técnicos se centran directamente en la construcción e ingeniería del producto (análisis, diseño, codificación y pruebas técnicas), mientras que los procesos de soporte o de gestión asisten, supervisan, controlan y garantizan la calidad y el seguimiento de esas actividades a lo largo del ciclo de vida.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q2",
    num: 2,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Relación Proceso, Proyecto y Producto (P-P-P)",
    type: "single",
    prompt: "¿Cuál es la relación correcta entre Proceso, Proyecto y Producto de Software (P-P-P)?",
    options: [
      {
        id: "a",
        text: "1 Producto -> genera n Proyectos -> que utilizan n Procesos."
      },
      {
        id: "b",
        text: "1 Proyecto -> aplica 1 Producto -> para crear n Procesos."
      },
      {
        id: "c",
        text: "1 Proceso -> puede aplicarse a n Proyectos -> para construir n Productos."
      },
      {
        id: "d",
        text: "n Procesos -> se fusionan en 1 Proyecto -> para eliminar 1 Producto."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la ingeniería organizacional, 1 Proceso general (las pautas metodológicas y estándares de la empresa) puede ser instanciado y aplicado en n Proyectos particulares de desarrollo, cada uno de los cuales tiene como objetivo entregar n Productos de software finales.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q3",
    num: 3,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Proceso de Software vs Ingeniería de Software",
    type: "single",
    prompt: "¿Es el 'Proceso de Desarrollo de Software' un sinónimo exacto de 'Ingeniería de Software'?",
    options: [
      {
        id: "a",
        text: "Sí, ambos conceptos significan exactamente lo mismo y se usan indistintamente."
      },
      {
        id: "b",
        text: "No, porque el proceso solo define el enfoque, mientras que la Ingeniería de Software comprende además los métodos y las herramientas."
      },
      {
        id: "c",
        text: "No, porque la Ingeniería de Software solo se encarga del hardware, mientras que el proceso maneja el software."
      },
      {
        id: "d",
        text: "Sí, siempre y cuando se apliquen ambos en modelos de ciclo de vida ágiles."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "No son sinónimos. El Proceso es una de las capas esenciales (el marco de trabajo y enfoque articulador), mientras que la disciplina integral de la Ingeniería de Software comprende además la cultura de calidad, los Métodos técnicos ('cómo hacer') y las Herramientas automáticas y semi-automáticas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q4",
    num: 4,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "5 Actividades Estructurales (CPMCD)",
    type: "single",
    prompt: "Según la definición de actividad estructural, ¿cuáles son las 5 actividades principales del proceso (C P M C D)?",
    options: [
      {
        id: "a",
        text: "Control, Programación, Mantenimiento, Codificación y Distribución."
      },
      {
        id: "b",
        text: "Compras, Pruebas, Metodología, Costos y Documentación."
      },
      {
        id: "c",
        text: "Comunicación, Planificación, Modelado, Construcción y Despliegue."
      },
      {
        id: "d",
        text: "Corrección, Prototipado, Migración, Control y Desarrollo."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "De acuerdo con el marco genérico de Pressman, las 5 actividades estructurales (marco de trabajo) presentes en todo desarrollo de software son: Comunicación (relevamiento e intercambio con el cliente), Planificación (estimación y cronograma), Modelado (análisis y diseño), Construcción (código y pruebas) y Despliegue (entrega y retroalimentación).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q5",
    num: 5,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Actividades Sombrilla",
    type: "single",
    prompt: "¿Cuál de las siguientes tareas es un ejemplo de una 'Actividad Sombrilla'?",
    options: [
      {
        id: "a",
        text: "Aseguramiento de la calidad y gestión de riesgos."
      },
      {
        id: "b",
        text: "La escritura directa del código fuente (Construcción)."
      },
      {
        id: "c",
        text: "La entrega del producto final al cliente (Despliegue)."
      },
      {
        id: "d",
        text: "La creación de diagramas de arquitectura de base de datos (Modelado)."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Las actividades sombrilla o transversales se ejecutan a lo largo de todo el ciclo de vida del proyecto para controlar y gestionar el avance. Incluyen el Aseguramiento de la Calidad del Software (SQA), Gestión de Riesgos, Seguimiento y Control del Proyecto, Revisiones Técnicas Formales y Gestión de Configuración (SCM).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q6",
    num: 6,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Orden Temporal en el Proceso (Pressman)",
    type: "single",
    prompt: "Según Pressman, ¿qué elemento NO se define a nivel general en el Proceso de Software?",
    options: [
      {
        id: "a",
        text: "Cuáles son las actividades estructurales a realizar."
      },
      {
        id: "b",
        text: "El orden específico en el que se llevan adelante las actividades estructurales."
      },
      {
        id: "c",
        text: "Los roles que deben involucrarse en el desarrollo."
      },
      {
        id: "d",
        text: "La necesidad de aplicar actividades sombrilla para asegurar la calidad."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El Proceso define conceptualmente las actividades marco y de soporte necesarias, pero NO estipula su ordenamiento temporal, secuencia o nivel de iteración. Dicha sincronización y flujo temporal es determinado puntualmente por el Modelo de Proceso o Ciclo de Vida que se seleccione (lineal, iterativo, evolutivo, etc.).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q7",
    num: 7,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Elementos del Proceso: Quién, Cómo y Qué",
    type: "single",
    prompt: "En la relación de los elementos del proceso, ¿a qué responde la pregunta 'QUÉ'?",
    options: [
      {
        id: "a",
        text: "A las personas y roles que participan en el desarrollo."
      },
      {
        id: "b",
        text: "Al artefacto producido por un rol en el marco de una actividad."
      },
      {
        id: "c",
        text: "A la serie de pasos que lleva a cabo un rol (actividades)."
      },
      {
        id: "d",
        text: "A los hitos que marcan el avance general del proyecto."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "En la articulación de elementos del proceso de software: 'QUIÉN' define el Rol asignado (ej. Analista, Programador), 'CÓMO' define las Actividades y tareas a ejecutar, y 'QUÉ' define los Artefactos o productos de trabajo generados (modelos, código, casos de prueba, documentación).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q8",
    num: 8,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Importancia de Seguir un Proceso",
    type: "single",
    prompt: "¿Por qué es importante seguir un Proceso de Desarrollo de Software?",
    options: [
      {
        id: "a",
        text: "Para imponer consistencia, estructurar actividades y forzar que el equipo replique la forma correcta de hacer las cosas."
      },
      {
        id: "b",
        text: "Para asegurar que el proyecto utilice el 100% del presupuesto asignado sin importar los requerimientos."
      },
      {
        id: "c",
        text: "Para poder evadir las auditorías de calidad externas."
      },
      {
        id: "d",
        text: "Para eliminar por completo la necesidad de mantener comunicación con el cliente."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Adoptar un proceso de desarrollo impone consistencia y orden en los equipos, establece canales formales de comunicación, reduce la improvisación y garantiza que las mejores prácticas metodológicas se apliquen de forma repetible en cada proyecto.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q9",
    num: 9,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Características del Proceso - Confiabilidad",
    type: "single",
    prompt: "Dentro de las características de un proceso (regla 'EVaS hacen ACMR'), ¿qué significa que un proceso sea 'Confiable'?",
    options: [
      {
        id: "a",
        text: "Que el proceso se puede soportar mediante herramientas CASE."
      },
      {
        id: "b",
        text: "Que el proceso es aceptado sin quejas por todos los desarrolladores."
      },
      {
        id: "c",
        text: "Que los errores del proceso son descubiertos antes de que se conviertan en errores del producto."
      },
      {
        id: "d",
        text: "Que se ejecuta extremadamente rápido y sin planificar."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "La Confiabilidad en un proceso implica que cuenta con puntos de control, revisiones y validaciones intermedias suficientes para detectar y corregir desviaciones o errores de proceso tempranamente, impidiendo que impacten como defectos en el producto de software entregado.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1b-q10",
    num: 10,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1b",
    topic: "Selección de Modelos de Ciclo de Vida",
    type: "single",
    prompt: "¿Cómo se elige correctamente un Modelo de Proceso o Ciclo de Vida para un proyecto en particular?",
    options: [
      {
        id: "a",
        text: "Se elige siempre el modelo en cascada porque es el más antiguo y seguro."
      },
      {
        id: "b",
        text: "No importa cuál se elija, todos garantizan el éxito independientemente de la naturaleza del proyecto."
      },
      {
        id: "c",
        text: "Se selecciona el modelo más caro y moderno disponible en el mercado."
      },
      {
        id: "d",
        text: "Se selecciona según la naturaleza del proyecto, la aplicación, los controles requeridos y las características del equipo."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "La elección del ciclo de vida adecuado no es arbitraria ni universal: debe responder a la naturaleza particular del problema, el grado de incertidumbre y volatilidad de los requerimientos, la criticidad de la aplicación, el tamaño y cultura del equipo y las exigencias de entrega del cliente.",
    diagram: null,
    points: 1
  }
];
