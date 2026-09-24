/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 10 (Preguntas 64 a 70)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart10 = [
  {
    "id": "ing-cal-p1-q64",
    "num": 64,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "La Gestión de Configuración de Software se enfoca en",
    "options": [
      {
        "id": "a",
        "text": "La calidad interna de un producto de software."
      },
      {
        "id": "b",
        "text": "Los cambios que puede sufrir un producto de software."
      },
      {
        "id": "c",
        "text": "Que los costos de mantenimiento de un producto de software se mantengan al mínimo posible."
      },
      {
        "id": "d",
        "text": "Asegurar que el producto de software no tiene defectos."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "La Gestión de Configuración de Software (GCSW) se enfoca en gestionar los cambios y modificaciones que puede sufrir un producto de software a lo largo de todo su ciclo de vida (Babich, 1986).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q65",
    "num": 65,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Definición IEEE de Software",
    "type": "multiple",
    "prompt": "¿Qué define la IEEE como software?",
    "options": [
      {
        "id": "1",
        "text": "Las instrucciones (programas) que proporcionan las características y funciones."
      },
      {
        "id": "2",
        "text": "Herramientas, métodos y procesos utilizados para desarrollarlo."
      },
      {
        "id": "3",
        "text": "Los documentos que describen la operación y uso."
      },
      {
        "id": "4",
        "text": "La información que gestiona el producto de software."
      },
      {
        "id": "5",
        "text": "Las restricciones de calidad y productividad impuestas por el cliente."
      },
      {
        "id": "6",
        "text": "Las estructuras de datos que le permiten manipular información."
      }
    ],
    "correctAnswers": [
      "1",
      "3",
      "6"
    ],
    "explanation": "Según la definición formal IEEE 610.12, el software comprende: (1) las instrucciones y programas que proporcionan funciones, (3) los documentos que describen la operación y uso, y (6) las estructuras de datos que le permiten manipular información.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q66",
    "num": 66,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso",
    "type": "single",
    "prompt": "Un ‘modelo de proceso de software’:",
    "options": [
      {
        "id": "a",
        "text": "Describe la forma en que el desarrollo de software debería llevarse a cabo."
      },
      {
        "id": "b",
        "text": "Prescribe la forma en que el desarrollo de software debería llevarse a cabo."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Un modelo de proceso de software prescriptivo prescribe la forma en que el desarrollo de software debería llevarse a cabo (mientras que las descripciones relatan cómo se lleva a cabo realmente).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q67",
    "num": 67,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso",
    "type": "multiple",
    "prompt": "Indica las afirmaciones correctas en relación a los ¨Modelos de procesos de software¨.",
    "options": [
      {
        "id": "a",
        "text": "Para todos los proyectos, los mismos aspectos tienen incidencia en la elección del modelo de proceso a utilizar."
      },
      {
        "id": "b",
        "text": "Los diferentes modelos de procesos de software organizan las actividades de diferentes formas."
      },
      {
        "id": "c",
        "text": "Los diferentes modelos de procesos de software deben describir las actividades con el mismo nivel de detalle."
      },
      {
        "id": "d",
        "text": "Los diferentes modelos de procesos de software se definen de acuerdo al producto a desarrollar."
      },
      {
        "id": "e",
        "text": "Para algunos tipos de aplicación, algunos procesos son más convenientes que otros."
      }
    ],
    "correctAnswers": [
      "b",
      "d",
      "e"
    ],
    "explanation": "Según la cátedra: los modelos de proceso organizan las actividades de diferentes formas (b), se definen y eligen de acuerdo al producto a desarrollar (d), y para algunos tipos de aplicación ciertos procesos son más convenientes que otros (e). No existe un único modelo que aplique a todos los proyectos por igual.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q68",
    "num": 68,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "multiple",
    "prompt": "De los siguientes artefactos generados durante el desarrollo de software, ¿cuáles no deben ser colocados bajo la Gestión de Configuración del Software?",
    "options": [
      {
        "id": "a",
        "text": "El Plan de Entrevistas"
      },
      {
        "id": "b",
        "text": "Las grabaciones de audio de las entrevistas realizadas"
      },
      {
        "id": "c",
        "text": "Los borradores de las entrevistas realizadas."
      },
      {
        "id": "d",
        "text": "Las entrevistas realizadas y aprobadas."
      }
    ],
    "correctAnswers": [
      "b",
      "c"
    ],
    "explanation": "Artefactos transitorios o borradores no aprobados (como grabaciones de audio o borradores preliminares) no deben ponerse bajo control formal de configuración.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q69",
    "num": 69,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Git)",
    "type": "single",
    "prompt": "La 'línea de trabajo principal' en un sistema de control de versiones se conoce como:",
    "options": [
      {
        "id": "a",
        "text": "master"
      },
      {
        "id": "b",
        "text": "release"
      },
      {
        "id": "c",
        "text": "develop"
      },
      {
        "id": "d",
        "text": "label"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "La línea de trabajo principal en Git históricamente se denomina 'master' (o actualmente 'main').",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q70",
    "num": 70,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso de Software",
    "type": "single",
    "prompt": "En la definición del ‘modelo de proceso’ a aplicar en el desarrollo de software están involucrados:",
    "options": [
      {
        "id": "a",
        "text": "El cliente y el líder de proyecto."
      },
      {
        "id": "b",
        "text": "El personal gerencial."
      },
      {
        "id": "c",
        "text": "El equipo técnico del equipo de desarrollo de software."
      },
      {
        "id": "d",
        "text": "El líder de proyecto y el equipo técnico de desarrollo de software."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "En la definición y adaptación del modelo de proceso intervienen principalmente el líder del proyecto y el equipo técnico de desarrollo.",
    "diagram": null,
    "points": 1
  }
];
