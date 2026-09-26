/**
 * Banco de Preguntas - UNIDAD 1: Ciclos de Vida (Modelos de Procesos de Software - Casos Prácticos)
 * Asignatura: Ingeniería y Calidad de Software -> Parcial 1
 * Temas: Casos prácticos de Retail y Municipalidad, criterios de selección de metodologías
 * (Cascada, Modelo en V, Incremental, Espiral, Prototipos, Metodologías Ágiles, Dashboard).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS = [
  {
    id: "ing-cal-p1-u1-cv-q1",
    num: 1,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Caso Retail / Cascada",
    type: "single",
    prompt: "Según el profesor, ¿cuál es el mayor problema de usar el modelo en Cascada si el dominio del sistema de retail es muy cambiante?",
    options: [
      {
        id: "a",
        text: "Falta de documentación para el mantenimiento."
      },
      {
        id: "b",
        text: "Es muy costoso y un 'quilombo' corregir o agregar nuevos requerimientos si el análisis inicial falla."
      },
      {
        id: "c",
        text: "Requiere demasiado personal experimentado en gestión de riesgos."
      },
      {
        id: "d",
        text: "Genera confusión en los clientes al ver maquetas incompletas."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "En el modelo en Cascada todo el sistema se piensa de antemano. Si el dominio cambia, modificar fases previas ('subir la cascada') es sumamente inflexible y costoso.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q2",
    num: 2,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Caso Municipalidad / Modelo en V",
    type: "single",
    prompt: "Para el proyecto de la municipalidad, si se decide tercerizar mediante una licitación pública, ¿por qué el Modelo en V suele ser el más recomendado por el profesor?",
    options: [
      {
        id: "a",
        text: "Porque permite lanzar un prototipo rápido para mostrar gestión antes de las elecciones."
      },
      {
        id: "b",
        text: "Porque no requiere de testers, bajando los costos operativos de la municipalidad."
      },
      {
        id: "c",
        text: "Porque facilita cumplir con los estándares de calidad de la licitación, los temas legales y permite trazar mejor las penalizaciones."
      },
      {
        id: "d",
        text: "Porque es el modelo más rápido y económico para proyectos que arrancan desde cero."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El Modelo en V integra validaciones y testeos en cada etapa, lo que da seguridad legal y trazabilidad, aspectos fundamentales al lidiar con licitaciones gubernamentales.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q3",
    num: 3,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Caso Municipalidad / Modelo Incremental",
    type: "single",
    prompt: "Siguiendo con el caso de la municipalidad, si la empresa desarrolladora ya tiene la experiencia de haber hecho el mismo sistema en otras 5 provincias (ya conoce el dominio), ¿qué otro modelo se vuelve una opción viable?",
    options: [
      {
        id: "a",
        text: "Modelo Incremental."
      },
      {
        id: "b",
        text: "Modelo en Espiral."
      },
      {
        id: "c",
        text: "Metodologías Ágiles sin documentación."
      },
      {
        id: "d",
        text: "Prototipos desechables."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Al conocer bien el dominio por haberlo hecho antes en otras provincias, se reduce la incertidumbre. Esto permite dividir el trabajo y entregar módulos funcionales de a poco (Incremental).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q4",
    num: 4,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Caso Retail / Modelo en Espiral",
    type: "single",
    prompt: "Si alguien propone usar el Modelo en Espiral para el sistema de la cadena de retail, ¿cuál sería el argumento principal del profesor para rechazarlo?",
    options: [
      {
        id: "a",
        text: "El cliente exige ver la interfaz visual rápido y este modelo no lo permite."
      },
      {
        id: "b",
        text: "Obliga a realizar código 'quick and dirty' que luego no escala."
      },
      {
        id: "c",
        text: "El modelo prohíbe paralelizar tareas entre los distintos módulos."
      },
      {
        id: "d",
        text: "El dominio de un retail no presenta riesgos críticos (como aviones); usarlo generaría burocracia y sobrecostos innecesarios."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "La palabra clave del Espiral es 'RIESGO'. Es un modelo muy caro destinado a sistemas críticos o sensibles. Un sistema de retail no justifica este nivel de análisis de riesgo constante.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q5",
    num: 5,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Caso Municipalidad / Prototipos",
    type: "single",
    prompt: "En el proyecto de la municipalidad, ¿cuál es el mayor riesgo político/práctico de utilizar el modelo de Prototipos para validar requerimientos?",
    options: [
      {
        id: "a",
        text: "Que es muy difícil programar prototipos en lenguajes modernos."
      },
      {
        id: "b",
        text: "Que el funcionario vea el sistema funcionando, presione para inaugurarlo por motivos políticos y no entienda que el código sucio debe desecharse."
      },
      {
        id: "c",
        text: "Que es el modelo más costoso de todos los disponibles."
      },
      {
        id: "d",
        text: "Que obliga a generar tanta documentación que retrasa los tiempos de desarrollo."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El cliente suele creer que un prototipo visual es el sistema final. Explicar que es 'código sucio' y que hay que empezar de cero es una batalla política difícil de ganar, y si se usa en producción el sistema no será escalable ni seguro.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q6",
    num: 6,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Dinámica del Modelo Incremental",
    type: "single",
    prompt: "¿Cómo describe el profesor la dinámica de trabajo del Modelo Incremental aplicado a un proyecto con múltiples módulos (como el retail o la municipalidad)?",
    options: [
      {
        id: "a",
        text: "Se hace un único gran análisis y se entrega todo de forma monolítica al final."
      },
      {
        id: "b",
        text: "Se forman 'cascadas chiquitas' donde en cada una se obtiene una parte funcional del producto, permitiendo avanzar en múltiples frentes."
      },
      {
        id: "c",
        text: "Se basa enteramente en gestionar riesgos críticos en iteraciones largas."
      },
      {
        id: "d",
        text: "No tiene costos adicionales de integración entre módulos."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El modelo Incremental permite paralelizar el trabajo, terminando un requerimiento y pasando a otro, entregando partes funcionales y mostrando algo rápido para convencer al cliente.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q7",
    num: 7,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Metodologías Ágiles y Mantenimiento",
    type: "single",
    prompt: "Si se eligen Metodologías Ágiles para el extenso sistema de retail (30 sucursales), ¿cuál es la principal advertencia o desventaja para el mantenimiento futuro?",
    options: [
      {
        id: "a",
        text: "El alto costo de los equipos de desarrollo."
      },
      {
        id: "b",
        text: "La extrema rigidez para aceptar cambios durante los sprints."
      },
      {
        id: "c",
        text: "La falta de documentación y pérdida de trazabilidad al ser un sistema tan grande."
      },
      {
        id: "d",
        text: "Que es imposible aplicarlo en equipos pequeños."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Las metodologías ágiles priorizan el software funcionando por sobre la documentación exhaustiva. En sistemas muy grandes esto dificulta enormemente el mantenimiento a largo plazo si no se gestiona de manera excelente.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-cv-q8",
    num: 8,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1-ciclos-de-vida",
    topic: "Modelos de Procesos - Dashboard y Prioridades",
    type: "single",
    prompt: "Al analizar los requerimientos de un proyecto, ¿qué opina el profesor sobre el desarrollo de un 'Dashboard' (panel de control/reportes)?",
    options: [
      {
        id: "a",
        text: "Es el núcleo de cualquier desarrollo y debe hacerse primero."
      },
      {
        id: "b",
        text: "En general no es prioritario, excepto que la persona que pidió el proyecto exija tener todo el informe."
      },
      {
        id: "c",
        text: "Reemplaza a las pruebas de testeo en el modelo en V."
      },
      {
        id: "d",
        text: "Solo se puede implementar si se usa el Modelo en Cascada."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Suele ser una característica secundaria (nice-to-have) a menos que sea un requerimiento excluyente del stakeholder principal que financia o solicita el proyecto.",
    diagram: null,
    points: 1
  }
];
