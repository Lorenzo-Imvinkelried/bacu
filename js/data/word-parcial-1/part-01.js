/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 01 (Preguntas 1 a 7)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart01 = [
  {
    "id": "ing-cal-p1-q1",
    "num": 1,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso",
    "type": "multiple",
    "prompt": "Un modelo de proceso de desarrollo de software incremental se caracteriza por:",
    "options": [
      {
        "id": "1",
        "text": "Liberar software cuando todas sus partes están integradas."
      },
      {
        "id": "2",
        "text": "Liberar software cuando todas sus partes están completas."
      },
      {
        "id": "3",
        "text": "Liberar fragmentos de software previamente definidos y planificados."
      },
      {
        "id": "4",
        "text": "Liberar fragmentos de software de acuerdo a como se vayan definiendo."
      }
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "El modelo incremental se caracteriza por entregar incrementos de software operativos previamente definidos y planificados. Cada incremento proporciona una funcionalidad parcial pero operativa.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q2",
    "num": 2,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "Un proyecto de software en el que se está utilizando una herramienta de gestión de versiones, dispone en un momento determinado T de una rama ‘principal’ P. Se aprueba la realización de un cambio en el elemento E (que forma parte de la rama principal P). Las acciones a tomar son:",
    "options": [
      {
        "id": "1",
        "text": "(1) Comenzar a aplicar el cambio en la rama principal P."
      },
      {
        "id": "2",
        "text": "(1) Buscar la última rama ‘secundaria’ creada y (2) Trabajar en ésta el cambio requerido."
      },
      {
        "id": "3",
        "text": "(1) Crear una nueva rama B a partir de la rama principal P para trabajar el cambio E. (2) Cuando este esté listo, probado y aprobado, se agregan a la rama P."
      },
      {
        "id": "4",
        "text": "(1) Trabajar el cambio por fuera de la herramienta de gestión de versiones, y (2) Cuando este esté listo para probar, se agregan a la rama P."
      }
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "En un flujo de trabajo con control de versiones (como Git), para modificar un elemento de la rama principal se debe crear una nueva rama (branch) a partir de ella, realizar y probar el cambio allí, y una vez aprobado, integrarlo (merge) a la rama principal.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q3",
    "num": 3,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Proyectos",
    "type": "single",
    "prompt": "Un líder de proyecto afirma que: “Si el cronograma va atrasado es posible contratar más programadores para terminar a tiempo.”",
    "options": [
      {
        "id": "1",
        "text": "Es algo que se puede aplicar y funciona en todos los proyectos."
      },
      {
        "id": "2",
        "text": "No funciona en un proyecto en desarrollo."
      },
      {
        "id": "3",
        "text": "Es aplicable en proyectos a corto plazo."
      },
      {
        "id": "4",
        "text": "Funciona sólo en proyectos grandes y complejos."
      }
    ],
    "correctAnswers": [
      "2"
    ],
    "explanation": "Ley de Brooks: 'Agregar más programadores a un proyecto de software retrasado lo retrasa aún más', debido a la sobrecarga de comunicación, coordinación y curva de aprendizaje requerida.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q4",
    "num": 4,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "¿Define el Estándar ISO/IEC 12207 los modelos de ciclo de vida para los proyectos de software?",
    "options": [
      {
        "id": "a",
        "text": "No define modelos de ciclo de vida específicos, sino un conjunto estructurado de procesos y sugiere a las organizaciones aplicar modelos que se adapten a sus necesidades."
      },
      {
        "id": "b",
        "text": "Sí, prescribe de forma obligatoria y cerrada los modelos Cascada y Espiral para todo proyecto de software."
      },
      {
        "id": "c",
        "text": "Sí, establece únicamente modelos ágiles (Scrum y XP) para organizaciones certificadas bajo normas ISO."
      },
      {
        "id": "d",
        "text": "No, el estándar no trata cuestiones de ciclo de vida de software, solo define requerimientos físicos de hardware y servidores."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El Estándar 12207 no define ni impone modelos de ciclo de vida concretos; define un marco de procesos común y sugiere que la organización seleccione o adapte el modelo de ciclo de vida más adecuado para sus proyectos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q5",
    "num": 5,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso de Software",
    "type": "single",
    "prompt": "La relación entre el concepto de ‘actividades’ y ‘tareas’ es la siguiente:",
    "options": [
      {
        "id": "1",
        "text": "Son sinónimos."
      },
      {
        "id": "2",
        "text": "Las actividades incluyen tareas y éstas pueden incluir también actividades."
      },
      {
        "id": "3",
        "text": "Las actividades incluyen las tareas."
      },
      {
        "id": "4",
        "text": "Las tareas incluyen las actividades."
      },
      {
        "id": "5",
        "text": "No tienen relación."
      }
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "En la jerarquía de un proceso de software según Pressman, un proceso define actividades del marco de trabajo, y cada actividad incluye un conjunto de acciones y tareas de ingeniería de software.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q6",
    "num": 6,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "Una variante representa:",
    "options": [
      {
        "id": "1",
        "text": "Una implementación para un contexto diferente de un elemento de configuración probado y aprobado."
      },
      {
        "id": "2",
        "text": "Un momento en la vida de un elemento de configuración cuyo estado ha sido probado y aprobado."
      },
      {
        "id": "3",
        "text": "Un momento en la vida de un sistema de software en el cual es puesto a disposición de los clientes."
      }
    ],
    "correctAnswers": [
      "1"
    ],
    "explanation": "Una variante es una versión que se desarrolla para un contexto o plataforma diferente coexistiendo con otra versión (por ejemplo, soporte para diferentes sistemas operativos o idiomas).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q7",
    "num": 7,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Naturaleza del Software",
    "type": "single",
    "prompt": "En relación al siguiente gráfico, indique cuál afirmación es correcta.",
    "options": [
      {
        "id": "a",
        "text": "El gráfico representa la tasa de fallas de un producto de hardware a lo largo del tiempo."
      },
      {
        "id": "b",
        "text": "El gráfico representa la tasa de fallas de un producto industrial, que se manufactura, a lo largo del tiempo."
      },
      {
        "id": "c",
        "text": "El gráfico representa la tasa de fallas de un sistema de información a lo largo del tiempo."
      },
      {
        "id": "d",
        "text": "El gráfico representa la tasa de fallas de un producto de software a lo largo del tiempo."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "El gráfico muestra la curva de tasa de fallas del software a lo largo del tiempo, donde cada modificación o cambio posterior en el software introduce nuevos defectos, generando 'picos' en la tasa de fallas (a diferencia de la curva de la bañera del hardware).",
    "diagram": "fallo_soft",
    "points": 1
  }
];
