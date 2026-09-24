/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 04 (Preguntas 22 a 28)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart04 = [
  {
    "id": "ing-cal-p1-q22",
    "num": 22,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Git)",
    "type": "single",
    "prompt": "Si utiliza alguna herramienta para gestionar las versiones de elementos de software (Git, SVN, otra), estas van a requerir que defina mínimamente:",
    "options": [
      {
        "id": "a",
        "text": "Una rama principal y una rama de trabajo."
      },
      {
        "id": "b",
        "text": "Una rama principal, una rama de trabajo, y una rama de prueba."
      },
      {
        "id": "c",
        "text": "Una rama principal del proyecto."
      },
      {
        "id": "d",
        "text": "No tienen requerimientos mínimos."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Toda herramienta de gestión de versiones (como Git o SVN) requiere definir como mínimo una rama principal (master/main o trunk) del proyecto. El uso de ramas de desarrollo o de prueba adicionales es una práctica metodológica, pero no una exigencia mínima de la herramienta.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q23",
    "num": 23,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "La primera Línea Base de un proyecto de software se genera",
    "options": [
      {
        "id": "a",
        "text": "Una vez definido el alcance del proyecto (Plan de Proyecto)."
      },
      {
        "id": "b",
        "text": "Cuando el producto de software fue aceptado por el cliente."
      },
      {
        "id": "c",
        "text": "Cuando se tiene la primera versión del software listo para liberar."
      },
      {
        "id": "d",
        "text": "Una vez realizado el diseño de software y antes de comenzar el proceso de programación."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "La primera Línea Base formal de un proyecto de software se genera una vez definido y aprobado el alcance del proyecto (Plan de Proyecto y Especificación de Requerimientos de Software - SRS), marcando el inicio del control formal de cambios.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q24",
    "num": 24,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Curva de Fallas Hardware",
    "type": "single",
    "prompt": "En el análisis de la curva de tasa de fallas del hardware, ¿a qué fenómeno responde la tasa elevada de fallas que se observa en el período inicial ('mortalidad infantil')?",
    "options": [
      {
        "id": "a",
        "text": "A defectos de fabricación no detectados o componentes defectuosos que fallan rápidamente durante las primeras horas de uso."
      },
      {
        "id": "b",
        "text": "Al desgaste progresivo por años de funcionamiento continuo en servidores."
      },
      {
        "id": "c",
        "text": "A modificaciones de mantenimiento adaptativo realizadas sobre el circuito impreso."
      },
      {
        "id": "d",
        "text": "A la obsolescencia de los estándares de comunicación de red."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "La tasa de fallas inicial alta en hardware ('burn-in' o mortalidad infantil) se debe a defectos de fabricación o ensamble que se descartan o corrigen en los primeros momentos de operación.",
    "diagram": "baniera",
    "points": 1
  },
  {
    "id": "ing-cal-p1-q25",
    "num": 25,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "‘Construir’ un sistema de software significa:",
    "options": [
      {
        "id": "a",
        "text": "Compilar, generar el sistema ejecutable, y dejarlo disponible a los clientes."
      },
      {
        "id": "b",
        "text": "Compilar, general el sistema ejecutable, y adjuntar los datos y documentos necesarios para su uso."
      },
      {
        "id": "c",
        "text": "Compilar y generar el sistema ejecutable"
      },
      {
        "id": "d",
        "text": "Desarrollar los programas de acuerdo a la especificación de diseño."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "En el contexto de la Gestión de la Configuración del Software (GCSW / Construcción de Sistemas - Build), 'construir' un sistema de software significa compilar el código fuente y generar el sistema ejecutable.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q26",
    "num": 26,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso de Software",
    "type": "multiple",
    "prompt": "La documentación (registro escritos manuales y/o electrónicos) de diferentes productos generados en el proceso de desarrollo de software",
    "options": [
      {
        "id": "a",
        "text": "Debe evitarse para acelerar los procesos de desarrollo de software."
      },
      {
        "id": "b",
        "text": "Existen procesos como los Ágiles que prescinden totalmente de ella."
      },
      {
        "id": "c",
        "text": "Sólo se realiza si el proceso de desarrollo de software lo requiere."
      },
      {
        "id": "d",
        "text": "Es siempre necesaria como parte del procesos de desarrollo de software."
      },
      {
        "id": "e",
        "text": "Brinda \"visibilidad\" al proceso de Ingeniería de Software."
      }
    ],
    "correctAnswers": [
      "d",
      "e"
    ],
    "explanation": "La documentación es siempre necesaria como parte del proceso de desarrollo de software porque brinda visibilidad y trazabilidad al proceso de ingeniería.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q27",
    "num": 27,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Flujo GitFlow",
    "type": "single",
    "prompt": "Bajo GitFlow, si se necesita incorporar una funcionalidad nueva (feature) a un sistema que ya se encuentra en producción, ¿cuál es el primer paso a realizar en Git?",
    "options": [
      {
        "id": "a",
        "text": "Posicionarse en la rama 'develop' y crear una nueva rama de feature (ej: git checkout -b feature/nueva-funcionalidad develop)."
      },
      {
        "id": "b",
        "text": "Crear una rama hotfix desprendida directamente de la rama 'master'."
      },
      {
        "id": "c",
        "text": "Aplicar los cambios directamente sobre el commit HEAD de la rama 'master' en producción."
      },
      {
        "id": "d",
        "text": "Hacer un push forzado sobre el repositorio central sin crear ramas locales."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "En GitFlow, todas las ramas de nuevas características (feature branches) deben nacer a partir de la rama 'develop' y, al finalizarse, volverse a fusionar en 'develop'.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q28",
    "num": 28,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Git)",
    "type": "single",
    "prompt": "En un proyecto de software en el cual está utilizando una herramienta de gestión de versiones, se dispone en un momento determinado una rama ‘principal’ y una rama ‘secundaria’. Para actualizar la rama ‘principal’ con los cambios de la rama ‘secundaria’ deberá:",
    "options": [
      {
        "id": "a",
        "text": "Hacer un ‘commit’ de la rama ‘secundaria’ a la rama ‘principal’."
      },
      {
        "id": "b",
        "text": "Hacer una nueva rama y clonar los cambios."
      },
      {
        "id": "c",
        "text": "‘Mezclar’ los cambios de la rama ‘secundaria’ en la rama ‘principal’."
      },
      {
        "id": "d",
        "text": "‘Clonar’ los cambios de la rama ‘secundaria’ en la rama ‘principal’."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Para incorporar los cambios de una rama secundaria a la rama principal se realiza una operación de mezcla o fusión ('merge').",
    "diagram": null,
    "points": 1
  }
];
