/**
 * Banco de Preguntas - UNIDAD 2 PARTE 2B (Ingeniería y Calidad de Software - Parcial 1)
 * Temas: Modelos Prescriptivos, Cascada (Censos Nacionales), Modelo en V (Testing anticipado),
 * Modelo Incremental, Modelo Espiral (análisis de riesgos), Prototipos (regla de oro descartable),
 * Proceso Unificado (ADN y 4 fases: Incepción, Elaboración, Construcción, Transición),
 * WSDM (diseño web por audiencia) y MDA (Model Driven Architecture).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS = [
  {
    id: "ing-cal-p1-u2-2b-q1",
    num: 1,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Modelos de Procesos Prescriptivos",
    type: "single",
    prompt: "¿Cuál es el objetivo principal de los Modelos de Procesos Prescriptivos según el texto?",
    options: [
      {
        id: "a",
        text: "Permitir que cada programador decida qué hacer sin seguir ninguna estructura."
      },
      {
        id: "b",
        text: "Ordenar el caos, prescribiendo actividades, flujos de trabajo y determinando los criterios de transición entre etapas."
      },
      {
        id: "c",
        text: "Eliminar la necesidad de documentar el software para acelerar la entrega al cliente."
      },
      {
        id: "d",
        text: "Reemplazar el ciclo de vida por la generación automática de código mediante Inteligencia Artificial."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Los modelos de proceso prescriptivos fueron concebidos para aportar orden y disciplina frente al caos en el desarrollo. Prescriben un conjunto definido de actividades estructurales, acciones, tareas, productos de trabajo intermedios y mecanismos de control para la transición entre etapas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q2",
    num: 2,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Modelo en Cascada - Idoneidad",
    type: "single",
    prompt: "En base al caso del 'Sistema de Censos Nacionales', ¿cuándo es ideal utilizar el Modelo en Cascada?",
    options: [
      {
        id: "a",
        text: "Cuando el proyecto tiene requisitos inciertos que cambian todas las semanas."
      },
      {
        id: "b",
        text: "Cuando el cliente exige entregas funcionales en iteraciones de muy pocos días."
      },
      {
        id: "c",
        text: "Cuando los requisitos son estables, están bien definidos, el riesgo de cambios es bajo y el ciclo de vida es largo."
      },
      {
        id: "d",
        text: "Cuando no se sabe cómo construir la arquitectura y se necesita experimentar con tecnologías nuevas."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El modelo lineal secuencial (cascada clásico) resulta idóneo cuando las especificaciones y normativas son altamente estables y exhaustivas desde el inicio, la tecnología es madura y el riesgo de fluctuación de requerimientos es mínimo (como un sistema de censo respaldado por marcos regulatorios fijos).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q3",
    num: 3,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Modelo en V - Enfoque de Pruebas",
    type: "single",
    prompt: "¿Cuál es la característica distintiva del Modelo en V (V-Model) respecto a las pruebas (testing)?",
    options: [
      {
        id: "a",
        text: "Las pruebas se descartan por completo si la fase de programación se realiza sin errores."
      },
      {
        id: "b",
        text: "Una fase de diseño/desarrollo sirve para validar o verificar fases posteriores; las pruebas se piensan desde el principio."
      },
      {
        id: "c",
        text: "Las pruebas solo las realizan los usuarios finales al terminar absolutamente todo el proyecto."
      },
      {
        id: "d",
        text: "Utiliza pruebas exclusivamente para medir el riesgo de la infraestructura de red, no del software."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El Modelo en V ilustra cómo cada fase de diseño y especificación se empareja de forma anticipada con su correspondiente plan de verificación o validación: las pruebas no se postergan para el final de la codificación, sino que se diseñan conceptualmente en paralelo a los requerimientos y la arquitectura.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q4",
    num: 4,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Modelo Incremental - Ventajas",
    type: "single",
    prompt: "Según el Modelo Incremental (ej. Sistema de Gestión para Universidad Privada), ¿cuál es una de sus mayores ventajas?",
    options: [
      {
        id: "a",
        text: "Proporciona entregas funcionales rápidas, entregando 'algo de valor' al cliente con cierta frecuencia."
      },
      {
        id: "b",
        text: "Es perfecto para sistemas transaccionales puros que no pueden dividirse en módulos."
      },
      {
        id: "c",
        text: "Garantiza que la integración de la arquitectura nunca falle bajo ninguna circunstancia."
      },
      {
        id: "d",
        text: "El cliente no necesita involucrarse en lo absoluto hasta el año final del despliegue."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El modelo incremental divide el sistema en incrementos operativos planificados. Su principal fortaleza es que permite entregar un núcleo funcional utilizable tempranamente, brindando valor comercial al cliente y facilitando la retroalimentación sin esperar a que el 100% del software esté construido.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q5",
    num: 5,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Modelo Espiral - Análisis de Riesgos",
    type: "single",
    prompt: "¿Cuál es el enfoque central y distintivo del Modelo Evolutivo en Espiral (ej. Planta Nuclear)?",
    options: [
      {
        id: "a",
        text: "Entregar todo el código de una sola vez sin planificación previa (estilo Big Bang)."
      },
      {
        id: "b",
        text: "Diseñar únicamente la interfaz gráfica del usuario de forma rápida y económica."
      },
      {
        id: "c",
        text: "Seguir un flujo puramente secuencial donde es imposible retroceder a una fase anterior."
      },
      {
        id: "d",
        text: "Tomar en consideración explícitamente el riesgo, analizándolo y mitigándolo en cada iteración o ciclo."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "El núcleo distintivo del Modelo Espiral de Barry Boehm es la gestión sistemática y explícita del riesgo. En cada revolución de la espiral se evalúan alternativas e incertidumbres técnicas y operativas antes de decidir avanzar hacia prototipos o fases de construcción.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q6",
    num: 6,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Construcción de Prototipos - Regla de Oro",
    type: "single",
    prompt: "¿Cuál es la 'Regla de Oro' sobre el uso del modelo de Construcción de Prototipos?",
    options: [
      {
        id: "a",
        text: "El prototipo inicial siempre debe reutilizarse como base para el código fuente del sistema final."
      },
      {
        id: "b",
        text: "Sirve EXCLUSIVAMENTE para especificar requerimientos y obtener feedback; el prototipo NO es el producto de software final."
      },
      {
        id: "c",
        text: "Debe ser costoso y muy lento de desarrollar para asegurar su máxima calidad técnica."
      },
      {
        id: "d",
        text: "Es ideal cuando los requisitos iniciales están perfectamente claros y no hay riesgo de incomprensión."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La regla de oro de la prototipación establece que el prototipo es un mecanismo descartable o de exploración para relevar y clarificar requerimientos con el usuario. Intentar reutilizar un prototipo apresurado como cimiento del software final compromete gravemente la arquitectura y la mantenibilidad.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q7",
    num: 7,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Proceso Unificado - Pilares Fundamentales (ADN)",
    type: "single",
    prompt: "¿Cuáles son los pilares fundamentales o 'ADN' del Proceso Unificado (PU)?",
    options: [
      {
        id: "a",
        text: "Está guiado por Casos de Uso, centrado en la Arquitectura, y es de naturaleza iterativa e incremental."
      },
      {
        id: "b",
        text: "Está guiado por riesgos nucleares, centrado en prototipos descartables, y es puramente secuencial."
      },
      {
        id: "c",
        text: "Está centrado en bases de datos relacionales, evita el uso de diagramas UML, y se entrega en una sola fase."
      },
      {
        id: "d",
        text: "Está diseñado para ignorar al cliente durante el análisis y priorizar el lenguaje de programación elegido."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El Proceso Unificado (creado por Booch, Jacobson y Rumbaugh) tiene tres rasgos esenciales en su ADN: 1) Guiado por Casos de Uso (orientado a las necesidades funcionales del usuario), 2) Centrado en la Arquitectura (robusta y modular), y 3) Iterativo e Incremental.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q8",
    num: 8,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Proceso Unificado - 4 Fases Principales",
    type: "single",
    prompt: "En la estructura del Proceso Unificado (PU), ¿cuáles son sus 4 fases principales?",
    options: [
      {
        id: "a",
        text: "Requisitos, Riesgos, Desarrollo y Mantenimiento."
      },
      {
        id: "b",
        text: "Comunicación, Cascada, Espiral y Despliegue."
      },
      {
        id: "c",
        text: "Incepción, Elaboración, Construcción y Transición."
      },
      {
        id: "d",
        text: "Análisis, Prototipado, Venta y Soporte Técnico."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El Proceso Unificado organiza el tiempo en 4 fases secuenciales compuestas por iteraciones: 1) Incepción o Inicio (viabilidad y alcance), 2) Elaboración (visión detallada y línea base arquitectónica), 3) Construcción (desarrollo e integración del producto) y 4) Transición (entrega y pase a producción).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q9",
    num: 9,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "Método WSDM (Web Site Design Method)",
    type: "single",
    prompt: "Dentro de los 'Otros ciclos de vida', ¿en qué se basa el método WSDM (Web Site Design Method)?",
    options: [
      {
        id: "a",
        text: "En diseñar la navegación web pensando 100% en la 'audiencia' y clasificando lo que cada grupo de usuarios necesita."
      },
      {
        id: "b",
        text: "En generar código fuente de manera automática a partir de diagramas UML complejos."
      },
      {
        id: "c",
        text: "En estructurar sistemas de control embebidos para equipos médicos de alta complejidad."
      },
      {
        id: "d",
        text: "En construir la arquitectura del software separando estrictamente la tecnología del negocio."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "WSDM es una metodología de diseño web dirigida por el usuario: estructura los requerimientos, la navegación y la información del sitio centrándose estrictamente en los perfiles de audiencia (audience classes) y en las necesidades particulares de cada grupo de visitantes.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2b-q10",
    num: 10,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2b",
    topic: "MDA (Model Driven Architecture)",
    type: "single",
    prompt: "¿Qué característica define a la metodología MDA (Model Driven Architecture)?",
    options: [
      {
        id: "a",
        text: "Es un enfoque enfocado en estimaciones de tiempo usando el modelo de cascada."
      },
      {
        id: "b",
        text: "Desarrolla interfaces web basándose únicamente en prototipos rápidos."
      },
      {
        id: "c",
        text: "Se utiliza exclusivamente para auditar la seguridad de las plataformas del INDEC."
      },
      {
        id: "d",
        text: "Separa completamente el modelo del negocio de la tecnología a utilizar (independencia tecnológica), generando luego el código."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "El estándar MDA de la OMG promueve la separación del diseño funcional del negocio respecto de las plataformas tecnológicas de implementación: se modela primero un PIM (Platform Independent Model) que luego se transforma automáticamente en PSM (Platform Specific Model) y código ejecutable.",
    diagram: null,
    points: 1
  }
];
