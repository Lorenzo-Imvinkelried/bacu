/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 06 (Preguntas 36 a 42)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart06 = [
  {
    "id": "ing-cal-p1-q36",
    "num": 36,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Proceso de Software",
    "type": "multiple",
    "prompt": "Indique las afirmaciones que son correctas en relación con el Proceso de Software en la Ingeniería de Software.",
    "options": [
      {
        "id": "a",
        "text": "Utilizar un proceso no contribuye a la rapidez con la que se desarrollarán los productos de software."
      },
      {
        "id": "b",
        "text": "En el marco de la Ingeniería de Software, es sinónimo de proyecto de software."
      },
      {
        "id": "c",
        "text": "Debe estar explícitamente definido para ser bien administrado."
      },
      {
        "id": "d",
        "text": "Define un marco de trabajo compuesto por actividades estructurales y de soporte, además de un conjunto de tareas para cada actividad."
      },
      {
        "id": "e",
        "text": "Al definir un proceso es necesario identificar el modelo de proceso o modelo de ciclo de vida a utilizar."
      }
    ],
    "correctAnswers": [
      "c",
      "d",
      "e"
    ],
    "explanation": "Un proceso debe estar explícitamente definido para ser administrado, define un marco de trabajo de actividades estructurales y sombrilla (soporte), e identifica el modelo de ciclo de vida.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q37",
    "num": 37,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Releases",
    "type": "single",
    "prompt": "Un sistema posee las versiones históricas 0.5.1, 0.8.0, 1.0.0, 1.0.5, 1.1.0, 1.2.0 y 2.0.0 bajo Versionado Semántico. ¿Cuál es formalmente el primer 'release' (entrega oficial estable) del sistema?",
    "options": [
      {
        "id": "a",
        "text": "La versión 1.0.0 (marca el primer producto funcional completo puesto formalmente a disposición de los clientes)."
      },
      {
        "id": "b",
        "text": "La versión 0.5.1 (primer prototipo ejecutable generado por los desarrolladores)."
      },
      {
        "id": "c",
        "text": "La versión 0.8.0 (primera versión probada internamente en testing)."
      },
      {
        "id": "d",
        "text": "La versión 2.0.0 (primer cambio sustancial de arquitectura)."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Las versiones 0.y.z corresponden a desarrollo inicial y versiones alfa/beta inestables. La versión 1.0.0 define la primera release oficial estable y funcional del producto para los usuarios.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q38",
    "num": 38,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Entregas (Releases)",
    "type": "single",
    "prompt": "Un release de un producto de software es:",
    "options": [
      {
        "id": "a",
        "text": "Una versión del producto que pasó exitosamente el proceso de pruebas."
      },
      {
        "id": "b",
        "text": "Una Línea Base del producto que ingresa al proceso de pruebas."
      },
      {
        "id": "c",
        "text": "Una definición de los requerimientos que deben ser incluidos en la próxima versión del producto."
      },
      {
        "id": "d",
        "text": "Una versión del producto que ha sido entregado al cliente."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Un release o entrega es una versión del producto de software que se pone formalmente a disposición de los clientes o usuarios finales.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q39",
    "num": 39,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estructura del Proceso de Software",
    "type": "single",
    "prompt": "En el modelo general del proceso de software según Pressman, ¿cuál de las siguientes opciones describe la jerarquía correcta de elementos?",
    "options": [
      {
        "id": "a",
        "text": "Marco de trabajo común (5 actividades estructurales: Comunicación, Planeación, Modelado, Construcción, Despliegue) asistido transversalmente por actividades sombrilla o de soporte."
      },
      {
        "id": "b",
        "text": "Etapa de codificación exclusiva respaldada por reuniones diarias sin planificación previa."
      },
      {
        "id": "c",
        "text": "Proceso lineal cerrado sin actividades de soporte ni control de calidad."
      },
      {
        "id": "d",
        "text": "Conjunto de métodos formales matemáticos que sustituyen el uso de diagramas de diseño."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El proceso se conforma por un marco de trabajo con 5 actividades estructurales y un conjunto de actividades sombrilla (control de calidad, gestión de configuración, gestión de riesgos, etc.) que se aplican a lo largo de todo el ciclo de vida.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q40",
    "num": 40,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Definición IEEE de Software",
    "type": "single",
    "prompt": "Formalmente podemos afirmar que el software es:",
    "options": [
      {
        "id": "a",
        "text": "Programas de computadora, documentación asociada y datos para la operación de un sistema."
      },
      {
        "id": "b",
        "text": "Programas de computadoras."
      },
      {
        "id": "c",
        "text": "Programas de computadoras, y datos para la operación de un sistema."
      },
      {
        "id": "d",
        "text": "Programas de computadoras, procedimientos, documentación asociada, y datos para la operación de un sistema."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Definición estándar IEEE 610.12: El software es el conjunto de programas de computadora, procedimientos, reglas y documentación y datos asociados que forman parte de las operaciones de un sistema de computación.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q41",
    "num": 41,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Construcción de Software",
    "type": "single",
    "prompt": "‘Construir’ un sistema de software significa:",
    "options": [
      {
        "id": "a",
        "text": "Compilar, general el sistema ejecutable, y adjuntar los datos y documentos necesarios para su uso."
      },
      {
        "id": "b",
        "text": "Compilar, generar el sistema ejecutable, y dejarlo disponible a los clientes."
      },
      {
        "id": "c",
        "text": "Desarrollar los programas de acuerdo a la especificación de diseño."
      },
      {
        "id": "d",
        "text": "Compilar y generar el sistema ejecutable"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Construir (build) implica transformar el código fuente en elementos ejecutables mediante compilación y enlazado de dependencias.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q42",
    "num": 42,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso Ágiles",
    "type": "single",
    "prompt": "Para desarrollar un sistema de gestión bursátil para una empresa en un mercado financiero sumamente inestable, con requerimientos volátiles y necesidad de entregas tempranas continuas, ¿qué enfoque es el más adecuado?",
    "options": [
      {
        "id": "a",
        "text": "Un modelo de proceso ágil iterativo e incremental (como Scrum o XP), que acepte cambios tardíos y priorice entregas de valor frecuentes."
      },
      {
        "id": "b",
        "text": "Un modelo en Cascada clásico con requerimientos congelados desde el inicio del proyecto."
      },
      {
        "id": "c",
        "text": "El modelo de Métodos Formales para verificación matemática completa antes de cualquier entrega."
      },
      {
        "id": "d",
        "text": "Un modelo lineal secuencial rígido sin participación del cliente durante el desarrollo."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Frente a un dominio altamente dinámico e incierto, los modelos ágiles son ideales porque gestionan la incertidumbre mediante iteraciones cortas, retroalimentación constante del cliente y adaptación continua a los cambios del negocio.",
    "diagram": null,
    "points": 1
  }
];
