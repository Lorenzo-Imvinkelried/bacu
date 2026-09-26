/**
 * Banco de Preguntas - UNIDAD 2 PARTE 2A (Ingeniería y Calidad - Parcial 1)
 * Temas: Definición de Ciclo de Vida (ISO 12207-2017), Razones para variantes de ciclos de vida,
 * Factores determinantes (tipo de aplicación), Fundamentos de la ISW (Sommerville),
 * Actividades de Modelado, Modelo Espiral (Boehm), Modelo en V, Modelo Big Bang, RAD y Enfoques Ágiles.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS = [
  {
    id: "ing-cal-p1-u2-2a-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Definición de Ciclo de Vida (ISO 12207-2017)",
    type: "single",
    prompt: "Según la ISO 12207-2017, ¿cómo se define el Ciclo de Vida de un sistema o producto?",
    options: [
      {
        id: "a",
        text: "La evolución de un sistema, producto o servicio desde su concepción hasta su retiro."
      },
      {
        id: "b",
        text: "El proceso exclusivo de programación y compilación de un software en una organización."
      },
      {
        id: "c",
        text: "El conjunto de herramientas de hardware necesarias para testear una aplicación web."
      },
      {
        id: "d",
        text: "La etapa final de un proyecto en la que se descarta el código fuente obsoleto."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El estándar ISO/IEC/IEEE 12207-2017 define el Ciclo de Vida (Life Cycle) como el período que abarca toda la evolución y trayectoria de un sistema, producto o servicio creado por el hombre, comenzando en la concepción inicial de la idea y finalizando con su retiro definitivo y disposición final.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q2",
    num: 2,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Variantes de Modelos de Ciclo de Vida",
    type: "single",
    prompt: "Según el texto, ¿por qué existen tantas variantes de Modelos de Ciclo de Vida (Cascada, Scrum, etc.)?",
    options: [
      {
        id: "a",
        text: "Porque la elección depende del conocimiento del dominio, la naturaleza del problema, el tiempo, el alcance y el tamaño del equipo, entre otros factores."
      },
      {
        id: "b",
        text: "Porque las normas internacionales obligan a utilizar al menos tres modelos distintos en cada proyecto."
      },
      {
        id: "c",
        text: "Porque es imposible terminar un proyecto sin cambiar de modelo a mitad del desarrollo."
      },
      {
        id: "d",
        text: "Porque cada lenguaje de programación moderno exige su propio modelo de ciclo de vida exclusivo."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La proliferación de modelos de proceso responde a que ningún proyecto es idéntico a otro: las características del dominio, la volatilidad de los requisitos, la criticidad del sistema, la disponibilidad del cliente, los plazos y el tamaño del equipo exigen estrategias de gestión diferenciadas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q3",
    num: 3,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Factores Determinantes de Métodos y Técnicas",
    type: "single",
    prompt: "Al implementar el enfoque sistemático de la Ingeniería de Software, ¿cuál es quizás el factor MÁS significativo para determinar qué métodos y técnicas usar?",
    options: [
      {
        id: "a",
        text: "El presupuesto destinado exclusivamente al marketing del producto final."
      },
      {
        id: "b",
        text: "El tipo de aplicación (o sistema) que está siendo desarrollada."
      },
      {
        id: "c",
        text: "El modelo de la computadora que utilicen los programadores para codificar."
      },
      {
        id: "d",
        text: "La cantidad de gerentes involucrados en las etapas de soporte técnico."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Como señala Sommerville, el tipo de aplicación es el factor primordial: desarrollar un sistema crítico de control en tiempo real (médico, aeroespacial) exige métodos formales y verificación rigurosa, mientras que un software web de consumo masivo prioriza la agilidad y el tiempo de comercialización.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q4",
    num: 4,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Fundamentos de la Ingeniería de Software",
    type: "single",
    prompt: "¿Cuál de las siguientes afirmaciones corresponde a un 'Fundamento de la Ingeniería de Software'?",
    options: [
      {
        id: "a",
        text: "Se deben evitar a toda costa los procesos administrados para mantener la creatividad del equipo."
      },
      {
        id: "b",
        text: "La confiabilidad y el desempeño solo son importantes en aplicaciones de inteligencia artificial."
      },
      {
        id: "c",
        text: "Es importante comprender y gestionar la especificación y los requerimientos del software (saber lo que debe hacer)."
      },
      {
        id: "d",
        text: "Es necesario ignorar los recursos existentes para fomentar el desarrollo desde cero en todos los proyectos."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Uno de los cuatro fundamentos universales de la Ingeniería de Software establecidos por Sommerville es gestionar y comprender con claridad la especificación de requerimientos (determinar con precisión qué debe hacer el software y cuáles son sus restricciones de operación).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q5",
    num: 5,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Actividades de Modelado",
    type: "single",
    prompt: "Según el Modelo de Proceso Genérico, ¿qué actividades componen específicamente la fase de 'Modelado'?",
    options: [
      {
        id: "a",
        text: "Programación, Compilación y Ejecución."
      },
      {
        id: "b",
        text: "Relevamiento, Análisis y Diseño."
      },
      {
        id: "c",
        text: "Distribución, Ventas y Mantenimiento."
      },
      {
        id: "d",
        text: "Reclutamiento, Contratación y Despliegue."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La actividad marco de Modelado involucra la comprensión conceptual profunda del problema y la formulación técnica de su solución: se descompone en el relevamiento de necesidades, el análisis de requerimientos y el diseño arquitectónico y de datos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q6",
    num: 6,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Modelo Espiral (Barry Boehm)",
    type: "single",
    prompt: "¿Qué característica define principalmente al Modelo Espiral?",
    options: [
      {
        id: "a",
        text: "Es un enfoque estrictamente lineal y secuencial que prohíbe volver atrás una vez finalizada una etapa."
      },
      {
        id: "b",
        text: "Descarta por completo la planificación y se enfoca únicamente en el prototipado rápido."
      },
      {
        id: "c",
        text: "Exige que todo el código se realice de golpe y se integre al final sin análisis previo."
      },
      {
        id: "d",
        text: "Combina el desarrollo iterativo con los aspectos sistemáticos del modelo Cascada, e involucra análisis de riesgo en cada ciclo."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "Propuesto por Barry Boehm, el Modelo Espiral es un proceso evolutivo guiado explícitamente por el análisis y la mitigación continua de riesgos en cada ciclo o vuelta de la espiral, integrando la naturaleza iterativa de los prototipos con el control estructurado del modelo en cascada.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q7",
    num: 7,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Modelo en V (V-Model)",
    type: "single",
    prompt: "Dentro de los modelos de manejo de proyectos, ¿en qué consiste el Modelo en V (V-Model)?",
    options: [
      {
        id: "a",
        text: "Es una extensión del modelo Cascada donde cada fase de desarrollo está asociada directamente con una fase de testing."
      },
      {
        id: "b",
        text: "En desarrollar todo el código con mínima planificación y testearlo al mismo tiempo al final del proyecto."
      },
      {
        id: "c",
        text: "En hacer pequeños incrementos manejables (sprints) priorizando la flexibilidad por sobre la verificación."
      },
      {
        id: "d",
        text: "En crear un prototipo rápido con feedback constante del cliente eliminando las etapas de diseño formal."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El Modelo en V formaliza la relación simétrica entre las fases de definición y especificación (rama izquierda descendente) y las fases de validación y prueba (rama derecha ascendente), por ejemplo: requerimientos con pruebas de aceptación, diseño arquitectónico con pruebas de integración y diseño detallado con pruebas unitarias.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q8",
    num: 8,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Modelo Big Bang",
    type: "single",
    prompt: "¿Cómo se describe al modelo 'Big Bang' en la gestión de proyectos de software?",
    options: [
      {
        id: "a",
        text: "El desarrollo se hace en pequeños incrementos (sprints) muy bien estructurados y planificados iterativamente."
      },
      {
        id: "b",
        text: "Todo el código es realizado con mínima planificación, y el sistema completo es integrado y testeado al mismo tiempo."
      },
      {
        id: "c",
        text: "Se centra en el análisis minucioso de riesgos antes de escribir una sola línea de código fuente."
      },
      {
        id: "d",
        text: "Asocia estrictamente cada fase de desarrollo con una fase de pruebas por parte de un equipo externo."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El modelo Big Bang se caracteriza por la casi total ausencia de planificación formal o procesos estructurados. Los desarrolladores programan de forma autónoma o desarticulada y se intenta integrar y probar todo el conjunto en un único esfuerzo caótico final, con altísimo riesgo de fallos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q9",
    num: 9,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Modelo RAD (Desarrollo Rápido de Aplicaciones)",
    type: "single",
    prompt: "¿En qué hace énfasis el modelo RAD (Rapid Application Development)?",
    options: [
      {
        id: "a",
        text: "En la creación exhaustiva de documentación formal antes de comenzar a diseñar la arquitectura del sistema."
      },
      {
        id: "b",
        text: "En avanzar linealmente paso a paso sin posibilidad de mostrar avances al cliente hasta la fase de mantenimiento."
      },
      {
        id: "c",
        text: "En el prototipado rápido con respuestas rápidas de los clientes para lograr un desarrollo y liberación veloces."
      },
      {
        id: "d",
        text: "En el desarrollo de hardware embebido dejando la integración del software para una segunda etapa alejada."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El modelo RAD prioriza ciclos de desarrollo extremadamente cortos (típicamente de 60 a 90 días) mediante la reutilización intensiva de componentes, construcción de prototipos funcionales rápidos y constante retroalimentación del usuario.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-2a-q10",
    num: 10,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p2a",
    topic: "Modelos Ágiles (Agile / Scrum / Kanban)",
    type: "single",
    prompt: "¿Cómo maneja el desarrollo el modelo AGILE (ej. Scrum, Kanban)?",
    options: [
      {
        id: "a",
        text: "Divide el proyecto en una única secuencia rígida de Requerimientos, Diseño, Implementación, Verificación y Mantenimiento."
      },
      {
        id: "b",
        text: "El desarrollo se hace en incrementos pequeños y manejables (sprints), siguiendo un proceso flexible."
      },
      {
        id: "c",
        text: "Construye el software en un solo paso sin planificar iteraciones y lo entrega de golpe al finalizar el año."
      },
      {
        id: "d",
        text: "Basa todo su enfoque en el análisis exhaustivo de riesgos como paso previo obligatorio a cualquier comunicación."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El desarrollo ágil descompone el trabajo en ciclos cortos e iterativos (iteraciones o sprints de 1 a 4 semanas) entregando incrementos de software funcionales y adaptándose con flexibilidad al cambio constante de requerimientos y a la colaboración continua con el cliente.",
    diagram: null,
    points: 1
  }
];
