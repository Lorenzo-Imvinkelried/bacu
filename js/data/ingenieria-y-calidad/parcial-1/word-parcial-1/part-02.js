/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 02 (Preguntas 8 a 14)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart02 = [
  {
    "id": "ing-cal-p1-q8",
    "num": 8,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Versionado Semántico (SemVer)",
    "type": "single",
    "prompt": "En el marco de la identificación de versiones bajo 'Versionado Semántico' (SemVer con formato X.Y.Z o MAJOR.MINOR.PATCH), ¿qué significado tiene un incremento en el número MAJOR (X.0.0)?",
    "options": [
      {
        "id": "a",
        "text": "Se introducen cambios mayores en la API que generan incompatibilidad con versiones anteriores (breaking changes)."
      },
      {
        "id": "b",
        "text": "Se corrigen errores o bugs menores manteniendo total compatibilidad hacia atrás."
      },
      {
        "id": "c",
        "text": "Se agrega nueva funcionalidad manteniendo compatibilidad hacia atrás."
      },
      {
        "id": "d",
        "text": "Indica un contador simple de compilaciones diarias generado automáticamente por la herramienta de integración continua."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "En SemVer: MAJOR se incrementa cuando se realizan cambios incompatibles en la API; MINOR cuando se añade funcionalidad compatible; PATCH cuando se corrigen errores compatibles hacia atrás.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q9",
    "num": 9,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Sistemas Heredados (Legacy)",
    "type": "multiple",
    "prompt": "Los sistemas heredados son uno de los retos del siglo XXI según Sommerville. Generalmente, tienen un papel crítico en la organización y dependen de tecnologías de hardware y software obsoletas. En relación a este tipo de sistemas se puede afirmar que:",
    "options": [
      {
        "id": "a",
        "text": "Condicionan las posibilidades de actualización de hardware."
      },
      {
        "id": "b",
        "text": "Sólo deben mantenerse por los datos que manejan."
      },
      {
        "id": "c",
        "text": "Incluyen procesos y procedimientos, además de hardware y software."
      },
      {
        "id": "d",
        "text": "No proporcionan servicios esenciales del negocio."
      }
    ],
    "correctAnswers": [
      "a",
      "c"
    ],
    "explanation": "Según Sommerville, los sistemas heredados condicionan las posibilidades de actualización de hardware y además abarcan no solo código sino procesos de negocio, procedimientos y hardware obsoleto.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q10",
    "num": 10,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Ingeniería de Software",
    "type": "single",
    "prompt": "Dos problemáticas fundamentales de la Ingeniería de Software son:",
    "options": [
      {
        "id": "a",
        "text": "Identificar los requerimientos funcionales y no funcionales, y luego implementarlos."
      },
      {
        "id": "b",
        "text": "Identificar qué significa buena calidad y luego alcanzarla."
      },
      {
        "id": "c",
        "text": "Lidiar con la performance y la seguridad de los sistemas."
      },
      {
        "id": "d",
        "text": "Lidiar con la escala y complejidad de sistemas de software."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Dos problemáticas fundamentales de la Ingeniería de Software según Sommerville son lidiar con la escala y la complejidad inherentes de los sistemas de software modernos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q11",
    "num": 11,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Naturaleza del Software",
    "type": "single",
    "prompt": "¿Por qué se sostiene formalmente en la Ingeniería de Software que el software no se 'manufactura' en el sentido clásico industrial?",
    "options": [
      {
        "id": "a",
        "text": "Porque los mayores costos y esfuerzos de calidad radican en el diseño y desarrollo conceptual, mientras que la replicación o copia física del software tiene costo y esfuerzo marginales casi nulos."
      },
      {
        "id": "b",
        "text": "Porque el software carece por completo de etapas de prueba, control de calidad y validación formal."
      },
      {
        "id": "c",
        "text": "Porque el software nunca puede ser comercializado como un producto final ni vendido a usuarios."
      },
      {
        "id": "d",
        "text": "Porque requiere ensamblaje de piezas mecánicas en líneas de montaje industriales automatizadas."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Pressman y Sommerville destacan que el software se desarrolla o construye mediante ingeniería conceptual, no se manufactura. Una vez creado, crear millones de copias tiene un costo casi cero y no depende de materias primas físicas.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q12",
    "num": 12,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Versiones",
    "type": "single",
    "prompt": "Un ‘número de versión’ (o ‘identificación de versión’) debe servir para:",
    "options": [
      {
        "id": "a",
        "text": "Tener un contador que se incremente cada vez que se genera una nueva release del producto."
      },
      {
        "id": "b",
        "text": "Indicar cuán antigua es una versión de software."
      },
      {
        "id": "c",
        "text": "Rápidamente interpretar cuál es el nivel de cambios que tiene el producto de software."
      },
      {
        "id": "d",
        "text": "Como remplazo de un nombre 'alfabético' de cada versión del producto."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Un número de versión (especialmente en esquemas como SemVer) sirve para interpretar de forma rápida y clara el nivel y tipo de cambios (mayor, menor o parche/corrección) introducidos en el producto.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q13",
    "num": 13,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Git)",
    "type": "single",
    "prompt": "La rama ‘principal’ (master) que se define utilizando alguna herramienta de versionado:",
    "options": [
      {
        "id": "a",
        "text": "Se crea cuando se quiere trabajar en cambios sobre la versión actual del producto."
      },
      {
        "id": "b",
        "text": "Mantiene los primeros elementos de software que se incorporan al producto de software."
      },
      {
        "id": "c",
        "text": "Representa la primer versión del producto de software."
      },
      {
        "id": "d",
        "text": "Es la que siempre contiene la última versión funcional del sistema."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "La rama principal (master / main) representa la versión oficial, estable y funcional del sistema lista para producción.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q14",
    "num": 14,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Versionado Semántico y GitFlow",
    "type": "single",
    "prompt": "Se necesita incorporar una funcionalidad nueva a un sistema que ya se encuentra en entorno productivo con versión 2.3.5, utilizando GitFlow y Versionado Semántico (compatible con la versión anterior). ¿Cuál es la versión generada para producción?",
    "options": [
      {
        "id": "a",
        "text": "2.4.0 (incremento de versión menor MINOR y reinicio a 0 del contador de parches PATCH)."
      },
      {
        "id": "b",
        "text": "2.3.6 (incremento únicamente de la versión de corrección PATCH)."
      },
      {
        "id": "c",
        "text": "3.0.0 (incremento de la versión mayor MAJOR)."
      },
      {
        "id": "d",
        "text": "2.4.5 (incremento de la versión menor conservando el valor previo del parche)."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Al ser una nueva funcionalidad compatible hacia atrás (no rompe la API existente), corresponde un incremento MINOR: de 2.3.5 pasa a 2.4.0 (reseteando el parche Z a 0).",
    "diagram": null,
    "points": 1
  }
];
