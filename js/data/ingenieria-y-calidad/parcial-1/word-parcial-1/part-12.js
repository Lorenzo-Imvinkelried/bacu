/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 12 (Preguntas 78 a 84)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart12 = [
  {
    "id": "ing-cal-p1-q78",
    "num": 78,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "multiple",
    "prompt": "Considerando el Estándar ISO/IEC 12207, identifique qué afirmaciones son correctas.",
    "options": [
      {
        "id": "a",
        "text": "Los procesos que define pueden ser utilizados sólo para organizaciones desarrolladoras de software."
      },
      {
        "id": "b",
        "text": "Considera sólo el desarrollo y uso del producto de software."
      },
      {
        "id": "c",
        "text": "El marco de trabajo que presenta puede ser adaptado a cada organización y a cada proyecto concreto."
      },
      {
        "id": "d",
        "text": "Considera y describe procesos relacionados a la compra (adquisición) y venta (provisión) de productos de software."
      },
      {
        "id": "e",
        "text": "Es un marco de referencia que contiene procesos, las actividades y las tareas."
      }
    ],
    "correctAnswers": [
      "c",
      "d",
      "e"
    ],
    "explanation": "El Estándar 12207 es un marco adaptable que describe procesos, actividades y tareas, e incluye procesos de adquisición y suministro.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q79",
    "num": 79,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Entregas (Releases)",
    "type": "single",
    "prompt": "Una ‘release representa",
    "options": [
      {
        "id": "a",
        "text": "Un momento en la vida de un sistema de software en el cual es puesto a disposición de los clientes"
      },
      {
        "id": "b",
        "text": "Una implementación para un contexto diferente de un elemento de configuración probado y aprobado"
      },
      {
        "id": "c",
        "text": "Un momento en la vida de un elemento de configuración cuyo estado ha sido probado y aprobado."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Un release representa un momento formal en el ciclo de vida del software en el cual es puesto a disposición de los clientes o usuarios.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q80",
    "num": 80,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Versionado Semántico (SemVer)",
    "type": "single",
    "prompt": "Hasta la versión 2.0.10 un sistema funciona solo en Windows. Si se introduce soporte para Linux con cambios estructurales incompatibles en sus interfaces externas, ¿cuál debe ser la versión siguiente bajo SemVer?",
    "options": [
      {
        "id": "a",
        "text": "3.0.0 (al haber cambios incompatibles en la API o interfaces públicas se debe incrementar la versión mayor MAJOR)."
      },
      {
        "id": "b",
        "text": "2.0.11 (se incrementa únicamente la versión de corrección de parches PATCH)."
      },
      {
        "id": "c",
        "text": "2.1.0 (se incrementa la versión menor MINOR preservando la versión mayor)."
      },
      {
        "id": "d",
        "text": "2.0.10-linux (se mantiene la versión agregando solo un sufijo de compilación)."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "SemVer estipula rigurosamente que cuando se rompe la compatibilidad hacia atrás o se introducen breaking changes en la interfaz pública, la versión MAJOR debe incrementarse a la siguiente (3.0.0).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q81",
    "num": 81,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "Una configuración es:",
    "options": [
      {
        "id": "a",
        "text": "El conjunto de valores de inicio de los parámetros de configuración del sistema."
      },
      {
        "id": "b",
        "text": "La combinación de las librerías de software necesarias para el funcionamiento del sistema."
      },
      {
        "id": "c",
        "text": "El conjunto de versiones del sistema desde su inicio al momento actual."
      },
      {
        "id": "d",
        "text": "Una combinación de versiones particulares de los componentes que forman un sistema consistente."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Una configuración es una combinación específica de versiones particulares de los componentes que forman un sistema consistente y funcional.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q82",
    "num": 82,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "La evolución de una componente de software se conoce como:",
    "options": [
      {
        "id": "a",
        "text": "Mainline"
      },
      {
        "id": "b",
        "text": "Baseline"
      },
      {
        "id": "c",
        "text": "Codeline"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "La secuencia de versiones en el tiempo de un componente de software se denomina 'codeline' (mientras que la del sistema completo es el 'mainline').",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q83",
    "num": 83,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso Genérico de Software",
    "type": "single",
    "prompt": "Un ‘proceso genérico’ de desarrollo de software completo debería incluir",
    "options": [
      {
        "id": "1",
        "text": "Análisis, Diseño, Programación, Documentación, Instalación, Mantenimiento"
      },
      {
        "id": "2",
        "text": "Especificación, Diseño, Construcción, Prueba, Instalación, Mantenimiento"
      },
      {
        "id": "3",
        "text": "Análisis, Diseño, Programación, Instalación, Mantenimiento"
      },
      {
        "id": "4",
        "text": "Análisis, Diseño Arquitectónico, Diseño Detallado, Programación, Prueba, Instalación"
      },
      {
        "id": "5",
        "text": "Especificación, Diseño, Construcción, Prueba, Instalación"
      }
    ],
    "correctAnswers": [
      "2"
    ],
    "explanation": "Según Sommerville, el proceso genérico fundamental comprende: Especificación, Diseño, Construcción (Implementación), Prueba (Validación), Instalación y Mantenimiento (Evolución).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q84",
    "num": 84,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Líneas Base (SCM)",
    "type": "multiple",
    "prompt": "Las Líneas Bases se pueden generar sobre:",
    "options": [
      {
        "id": "1",
        "text": "Un conjunto de documentos y programas"
      },
      {
        "id": "2",
        "text": "Un conjunto de programas"
      },
      {
        "id": "3",
        "text": "Un documento"
      },
      {
        "id": "4",
        "text": "El main line de un sistema"
      },
      {
        "id": "5",
        "text": "El codeline de un componente"
      }
    ],
    "correctAnswers": [
      "1",
      "2",
      "3"
    ],
    "explanation": "Las líneas base pueden generarse sobre documentos formales (ej. SRS, diseño), programas individuales o un conjunto integrado de documentos y programas aprobados.",
    "diagram": null,
    "points": 1
  }
];
