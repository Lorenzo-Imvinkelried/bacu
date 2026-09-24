/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 05 (Preguntas 29 a 35)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart05 = [
  {
    "id": "ing-cal-p1-q29",
    "num": 29,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Naturaleza del Software vs Hardware",
    "type": "single",
    "prompt": "En relación al siguiente gráfico y a la información que describe, seleccione la opción correcta:",
    "options": [
      {
        "id": "a",
        "text": "El gráfico muestra la tasa de fallas producida por el análisis de requerimientos de un producto de software a lo largo  del tiempo."
      },
      {
        "id": "b",
        "text": "El gráfico muestra la tasa de fallas del hardware a lo largo del tiempo."
      },
      {
        "id": "c",
        "text": "El gráfico muestra la tasa de falla de cualquier producto industrial a lo largo del tiempo."
      },
      {
        "id": "d",
        "text": "El gráfico muestra la tasa de fallas del software a lo largo del tiempo."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "El gráfico corresponde a la curva clásica de bañera (bathtub curve), que representa la tasa de fallas del hardware a lo largo del tiempo, con mortalidad infantil inicial y posterior desgaste físico acumulado por envejecimiento de materiales.",
    "diagram": "baniera",
    "points": 1
  },
  {
    "id": "ing-cal-p1-q30",
    "num": 30,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Definición de Software",
    "type": "multiple",
    "prompt": "¿Qué es el software? Seleccione la/s sentencia/s correspondiente/s:",
    "options": [
      {
        "id": "a",
        "text": "La información relativa a las fuentes de información y stakeholders."
      },
      {
        "id": "b",
        "text": "Los casos de prueba necesarios para verificar su funcionamiento esperado."
      },
      {
        "id": "c",
        "text": "Las estructuras de datos que le permiten manipular información."
      },
      {
        "id": "d",
        "text": "La documentación asociada al proyecto."
      },
      {
        "id": "e",
        "text": "Las instrucciones (programas) que proporcionan las características y funciones."
      }
    ],
    "correctAnswers": [
      "c",
      "d",
      "e"
    ],
    "explanation": "Según la definición estándar de la IEEE y de cátedra, el software comprende: (e) las instrucciones y programas que proporcionan las funciones requeridas, (c) las estructuras de datos que permiten manipular información, y (d) la documentación asociada (tanto técnica como de usuario).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q31",
    "num": 31,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Marco de Trabajo Genérico",
    "type": "single",
    "prompt": "A la hora de desarrollar software, las actividades que sí o sí se deberán realizar de una manera ingenieril son:",
    "options": [
      {
        "id": "a",
        "text": "Construcción."
      },
      {
        "id": "b",
        "text": "Planificación, Modelado, Construcción."
      },
      {
        "id": "c",
        "text": "Comunicación, Planificación, Modelado, Construcción, Despliegue/Distribución."
      },
      {
        "id": "d",
        "text": "Comunicación, Planificación, Modelado, Construcción."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Las cinco actividades fundamentales del marco de trabajo según Pressman son: Comunicación, Planificación, Modelado, Construcción y Despliegue.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q32",
    "num": 32,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Métodos de Ingeniería de Software",
    "type": "multiple",
    "prompt": "Un método de Ingeniería de Software:",
    "options": [
      {
        "id": "a",
        "text": "Incluye reglas, recomendaciones, guías y/o técnicas para generar artefactos de calidad."
      },
      {
        "id": "b",
        "text": "Empiezan a aplicarse en la etapa de programación del proyecto."
      },
      {
        "id": "c",
        "text": "Indica la manera en que una clase resolverá un mensaje recibido."
      },
      {
        "id": "d",
        "text": "Sólo se pueden aplicar si se dispone de una herramienta gráfica que lo soporte."
      },
      {
        "id": "e",
        "text": "Indica cómo construir técnicamente el software."
      }
    ],
    "correctAnswers": [
      "a",
      "e"
    ],
    "explanation": "Un método de IS incluye reglas, recomendaciones y técnicas para generar artefactos de calidad e indica técnicamente cómo construir el software.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q33",
    "num": 33,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Mitos del Software",
    "type": "single",
    "prompt": "Un líder de proyecto afirma que: “Cuanto más pronto se comience a escribir código, más se tardará en terminarlo.”",
    "options": [
      {
        "id": "a",
        "text": "Lo más importante es el código, por lo tanto debe iniciarse rápidamente la programación."
      },
      {
        "id": "b",
        "text": "Existen procesos de ingeniería de software donde esto no se aplica."
      },
      {
        "id": "c",
        "text": "Esto aplica en todos los enfoques de procesos de desarrollo de software ingenieriles."
      },
      {
        "id": "d",
        "text": "Esto aplica sólo a los proyectos de mayor tamaño o complejidad."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "El mito de empezar a programar de inmediato genera retrabajo y retrasos. Esta regla preventiva aplica a todos los enfoques de procesos ingenieriles rigurosos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q34",
    "num": 34,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Versionado Semántico (SemVer)",
    "type": "single",
    "prompt": "Se están corrigiendo bugs sobre la versión 2.0.0, ¿cuál es el próximo número de versión sugerido?",
    "options": [
      {
        "id": "a",
        "text": "3.0.0"
      },
      {
        "id": "b",
        "text": "2.0.1"
      },
      {
        "id": "c",
        "text": "2.1.1"
      },
      {
        "id": "d",
        "text": "2.1.0"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "En SemVer (MAJOR.MINOR.PATCH), si se corrigen errores (bugfixes) compatibles hacia atrás sobre la versión 2.0.0, se incrementa el PATCH, resultando en 2.0.1.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q35",
    "num": 35,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso y Proyecto",
    "type": "multiple",
    "prompt": "En relación a los conceptos de Proceso y Proyecto en Ingeniería de Software, indique las opciones que son correctas.",
    "options": [
      {
        "id": "a",
        "text": "Un proceso define los métodos y las herramientas a utilizar en un proyecto particular."
      },
      {
        "id": "b",
        "text": "El proceso define, entre otras cosas, el modelo de ciclo de vida a utilizar en un proyecto."
      },
      {
        "id": "c",
        "text": "Un proceso debe ser definido a nivel organización, para que todos los proyectos a llevar adelante en la misma lo utilicen o instancien."
      },
      {
        "id": "d",
        "text": "Cada proyecto define el proceso o enfoque que debe ser seguido para guiarlo."
      },
      {
        "id": "e",
        "text": "Un proceso definido debe ser adaptado a las características de cada proyecto."
      }
    ],
    "correctAnswers": [
      "b",
      "c",
      "e"
    ],
    "explanation": "Un proceso se define a nivel organizacional para ser reutilizado e instanciado, debe adaptarse a las particularidades de cada proyecto, y define el modelo de ciclo de vida a seguir.",
    "diagram": null,
    "points": 1
  }
];
