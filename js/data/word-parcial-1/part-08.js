/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 08 (Preguntas 50 a 56)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart08 = [
  {
    "id": "ing-cal-p1-q50",
    "num": 50,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Git)",
    "type": "single",
    "prompt": "La importancia de un mensaje de ‘commit’ radica en que:",
    "options": [
      {
        "id": "a",
        "text": "Si no se incluyen los revisores no sabrán qué revisar."
      },
      {
        "id": "b",
        "text": "Si no se incluye no se puede reportar cambios en el software"
      },
      {
        "id": "c",
        "text": "Si no se incluye no se sabrá cuál es la línea base a modificar."
      },
      {
        "id": "d",
        "text": "Si no se incluye no se puede saber cómo se resolvió un problema."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Un mensaje de commit claro documenta qué cambio se hizo, por qué se hizo y cómo se resolvió el problema, permitiendo la trazabilidad histórica del proyecto.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q51",
    "num": 51,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Definición IEEE de Ingeniería de Software",
    "type": "single",
    "prompt": "En la definición de Ingeniería de Software de la IEEE ('enfoque sistemático, disciplinado y cuantificable'), ¿qué significa específicamente el adjetivo 'cuantificable'?",
    "options": [
      {
        "id": "a",
        "text": "Que se establecen métricas y mediciones concretas de los productos, proyectos y procesos para evaluar calidad, esfuerzo y avance de forma objetiva."
      },
      {
        "id": "b",
        "text": "Que el software solo puede valorarse y venderse por el número total de líneas de código fuente escritas."
      },
      {
        "id": "c",
        "text": "Que la empresa debe contar con un número par de desarrolladores en cada proyecto."
      },
      {
        "id": "d",
        "text": "Que las aplicaciones solo pueden procesar datos numéricos enteros y operaciones aritméticas."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Cuantificable implica que la ingeniería de software utiliza la medición (métricas de calidad, complejidad, defectos, tiempo y esfuerzo) para tomar decisiones racionales basadas en datos objetivos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q52",
    "num": 52,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "multiple",
    "prompt": "Un ‘Proceso de Gestión de configuración de Software’ debería contemplar las siguientes actividades:",
    "options": [
      {
        "id": "a",
        "text": "Generación de Reportes"
      },
      {
        "id": "b",
        "text": "Control de Versiones"
      },
      {
        "id": "c",
        "text": "Control de Cambio"
      },
      {
        "id": "d",
        "text": "Identificación de elementos"
      },
      {
        "id": "e",
        "text": "Implementar ‘bug tracking’."
      },
      {
        "id": "f",
        "text": "Auditoría."
      },
      {
        "id": "g",
        "text": "Implementación de Git/SVN"
      }
    ],
    "correctAnswers": [
      "a",
      "b",
      "c",
      "d",
      "f"
    ],
    "explanation": "Según Pressman y la teoría de cátedra, las cinco tareas base de la Gestión de la Configuración del Software (GCSW) son: (d) Identificación de elementos de configuración, (b) Control de versiones, (c) Control de cambios, (f) Auditoría de configuración, y (a) Generación de reportes.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q53",
    "num": 53,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Ingeniería de Software Capas",
    "type": "single",
    "prompt": "Tres elementos claves de la Ingeniería de Software son:",
    "options": [
      {
        "id": "a",
        "text": "Métodos, Herramientas, Procesos."
      },
      {
        "id": "b",
        "text": "Métodos Rigurosos, Herramientas de Diseño, Procedimientos."
      },
      {
        "id": "c",
        "text": "Métodos Formales, CASE, CMMI."
      },
      {
        "id": "d",
        "text": "Métodos, Orientación a Objetos, Herramientas CASE."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Los tres elementos claves o pilares de la Ingeniería de Software según la cátedra (y Pressman) son: Procesos, Métodos y Herramientas, sustentados bajo un compromiso con la Calidad.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q54",
    "num": 54,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Hotfixes en GitFlow",
    "type": "single",
    "prompt": "En producción (versión 2.3.5) se detecta un bug urgente. Teniendo en cuenta GitFlow, ¿cómo se debe estructurar la solución?",
    "options": [
      {
        "id": "a",
        "text": "Crear una rama 'hotfix/2.3.6' a partir de 'master', corregir el error y hacer PR tanto a 'master' (publicando la versión 2.3.6) como a 'develop'."
      },
      {
        "id": "b",
        "text": "Crear una rama 'feature' desprendida de 'develop' y esperar al próximo release general del año siguiente."
      },
      {
        "id": "c",
        "text": "Editar el archivo directamente en el servidor de producción mediante SSH sin dejar registro en Git."
      },
      {
        "id": "d",
        "text": "Ejecutar git reset --hard en master para borrar el último release y volver a la versión 2.3.4."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Un hotfix en GitFlow se desprende de master para corregir la versión productiva. Al resolverse, debe fusionarse a master (con nuevo tag de versión PATCH 2.3.6) y también a develop para que la corrección no se pierda en el futuro.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q55",
    "num": 55,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso",
    "type": "single",
    "prompt": "Un modelo de proceso de desarrollo de software iterativo se caracteriza por:",
    "options": [
      {
        "id": "a",
        "text": "Liberar fragmentos de software de acuerdo a cómo se vayan definiendo."
      },
      {
        "id": "b",
        "text": "Liberar fragmentos de software previamente definidos y planificados."
      },
      {
        "id": "c",
        "text": "Liberar fragmentos de software si existen nuevas necesidades."
      },
      {
        "id": "d",
        "text": "Liberar software cuando todas sus partes están completas."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "A diferencia del modelo incremental (que libera fragmentos de software funcionales previamente definidos y planificados a lo largo del tiempo), el modelo iterativo clásico refina el sistema completo en ciclos sucesivos hasta alcanzar el producto final, liberando el software cuando todas sus partes están completas.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q56",
    "num": 56,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "Las Líneas Bases en un proyecto de software sirven para:",
    "options": [
      {
        "id": "a",
        "text": "Saber cuál es la última versión liberada del producto de software generado por el proyecto."
      },
      {
        "id": "b",
        "text": "Saber cuáles son las versiones de software aceptas por el cliente."
      },
      {
        "id": "c",
        "text": "Saber cuál es la configuración de software del proyecto en un momento determinado."
      },
      {
        "id": "d",
        "text": "Saber cuál es la documentación generada en el proyecto."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Las Líneas Bases en GCSW sirven para saber cuál es la configuración oficial y controlada del software del proyecto en un momento determinado del tiempo, sirviendo como punto de referencia acordado.",
    "diagram": null,
    "points": 1
  }
];
