/**
 * Banco de Preguntas - UNIDAD 2 PARTE 1A (Ingeniería y Calidad - Parcial 1)
 * Temas: Crisis del software, CHAOS Report (proyectos exitosos y comprometidos),
 * Causas de fracaso de proyectos, Situación tecnológica vs procesos, Modelo en cascada,
 * Madurez de la ISW, Capas de la ISW (Procesos, Métodos, Herramientas) y Definición IEEE.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS = [
  {
    id: "ing-cal-p1-u2-1a-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Crisis del Software y Problemas Comunes",
    type: "single",
    prompt: "¿Cuáles son los problemas comunes en el desarrollo de software mencionados en el texto?",
    options: [
      {
        id: "a",
        text: "Exceso de programadores, lenguajes obsoletos y falta de conexión a internet."
      },
      {
        id: "b",
        text: "Incapacidad para estimar tiempo/costos, falta de calidad, avance del hardware y cambio en la relación costo hard/soft."
      },
      {
        id: "c",
        text: "Precios bajos del software, hardware estancado y clientes sobreinformados."
      },
      {
        id: "d",
        text: "Uso excesivo de estándares de calidad, estimaciones perfectas y hardware inmutable."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Históricamente, los problemas medulares en el desarrollo de software (la denominada 'Crisis del Software') son: la dificultad para predecir costos y plazos con exactitud, los problemas crónicos de calidad y defectos, el ritmo acelerado de cambio en el hardware y la inversión en la relación de costos, donde el software pasó a representar la mayor parte del presupuesto total.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q2",
    num: 2,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "CHAOS Report - Proyectos Challenged",
    type: "single",
    prompt: "Según el CHAOS Report, ¿qué caracteriza a un proyecto 'Comprometido/Cuestionado' (Challenged)?",
    options: [
      {
        id: "a",
        text: "Se completa en el tiempo y con el presupuesto planificado, con toda función especificada originalmente."
      },
      {
        id: "b",
        text: "El proyecto se cancela antes de ser completado o nunca es implementado."
      },
      {
        id: "c",
        text: "Se completa y funciona, pero con tiempo y presupuesto mayores, o con menores características de las especificadas."
      },
      {
        id: "d",
        text: "Se entrega antes de tiempo, costando menos de lo esperado y con funciones extra."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la clasificación del Standish Group (CHAOS Report), los proyectos 'Challenged' (comprometidos o cuestionados) son aquellos que logran finalizarse y ponerse en marcha, pero sufrieron desvíos significativos: requirieron más tiempo del estimado, superaron el presupuesto asignado o se entregaron sacrificando características o requerimientos previstos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q3",
    num: 3,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "CHAOS Report - Proyectos Exitosos",
    type: "single",
    prompt: "Según el CHAOS Report, ¿qué porcentaje representan históricamente los proyectos Exitosos?",
    options: [
      {
        id: "a",
        text: "Del 50 al 53%."
      },
      {
        id: "b",
        text: "Del 19 al 31%."
      },
      {
        id: "c",
        text: "Más del 80%."
      },
      {
        id: "d",
        text: "Del 29 al 31%."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "En las estadísticas consolidadas del Standish Group a lo largo de los años, los proyectos clasificados estrictamente como 'Exitosos' (entregados a tiempo, dentro del presupuesto y con la totalidad del alcance y funciones especificadas) se ubican históricamente en una franja reducida de entre el 29% y el 31%.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q4",
    num: 4,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Causas de Fracaso en Proyectos (CHAOS)",
    type: "single",
    prompt: "Según el listado de motivos por los que fallan los proyectos (regla mnemotécnica 'Rupes, creen mate'), ¿cuáles son algunas de las causas principales?",
    options: [
      {
        id: "a",
        text: "Requerimientos incompletos, pobre inclusión del usuario y expectativas no realistas."
      },
      {
        id: "b",
        text: "Demasiados estándares de calidad, exceso de comunicación y hardware muy avanzado."
      },
      {
        id: "c",
        text: "Planificación perfecta, recursos ilimitados y manejo IT excepcional."
      },
      {
        id: "d",
        text: "Requisitos estáticos que nunca cambian y falta de herramientas de diseño gráfico."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La regla mnemotécnica resume los principales factores identificados en las investigaciones del CHAOS Report: Requerimientos incompletos, falta de involucramiento del Usuario, expectativas no realistas (Pobre inclusión/Expectativas), falta de soporte ejecutivo, Cambios continuos de requisitos y falta de Recursos o planificación tecnológica.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q5",
    num: 5,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Evolución Tecnológica vs Procesos",
    type: "single",
    prompt: "En cuanto a la situación actual del desarrollo tecnológico, ¿cuál es la relación entre el avance tecnológico y los procesos de Ingeniería de Software (ISI)?",
    options: [
      {
        id: "a",
        text: "Los procesos de ISI evolucionaron mucho más rápido que el hardware y el software."
      },
      {
        id: "b",
        text: "Tanto el hardware como los procesos de ISI se han estancado en los últimos 30 años."
      },
      {
        id: "c",
        text: "Los cambios en hardware han eliminado por completo la necesidad de tener procesos de ISI."
      },
      {
        id: "d",
        text: "El hardware y el software han tenido enormes cambios, pero muchos procesos de ISI siguen igual."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "Existe una evidente asimetría: mientras las tecnologías de hardware (capacidad, velocidad) y los entornos de software han crecido de manera exponencial, muchas prácticas metodológicas y procesos organizacionales para gestionar proyectos no evolucionaron con la misma agilidad, perpetuando problemas de vieja data.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q6",
    num: 6,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Modelo en Cascada en la Industria",
    type: "single",
    prompt: "¿Qué ocurre actualmente en muchas empresas respecto al uso del modelo en cascada?",
    options: [
      {
        id: "a",
        text: "Ha sido completamente reemplazado por estándares universales que garantizan el éxito."
      },
      {
        id: "b",
        text: "Muchas empresas lo siguen usando, a pesar de tener 30 años de problemas identificados."
      },
      {
        id: "c",
        text: "Ya ninguna empresa lo utiliza debido a sus altos costos de implementación."
      },
      {
        id: "d",
        text: "Solo se utiliza en proyectos 'Exitosos' según el CHAOS Report."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "A pesar de que la literatura académica e industrial ha documentado ampliamente durante tres décadas los graves inconvenientes del ciclo de vida secuencial clásico (cascada) frente a cambios de requerimientos e incertidumbre, gran parte del mercado empresarial continúa utilizándolo por inercia o requisitos burocráticos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q7",
    num: 7,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Madurez de la Ingeniería de Software",
    type: "single",
    prompt: "Según el texto, ¿por qué se considera que la disciplina de Ingeniería de Software aún NO es madura?",
    options: [
      {
        id: "a",
        text: "Porque en muchas áreas sigue sin existir un conjunto de estándares que se use ampliamente."
      },
      {
        id: "b",
        text: "Porque los lenguajes de programación modernos son muy inestables."
      },
      {
        id: "c",
        text: "Porque el hardware avanza más lento que las necesidades del software."
      },
      {
        id: "d",
        text: "Porque ya no hay demanda para nuevos proyectos de software."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Una ingeniería se considera madura cuando cuenta con cuerpos teóricos consensuados, estándares de aplicación universal y métodos ampliamente reglados. En la Ingeniería de Software persisten discrepancias metodológicas y en muchas facetas aún se carece de estándares de adopción universal homogénea.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q8",
    num: 8,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Capas de la ISW - El Proceso",
    type: "single",
    prompt: "En las capas de la Ingeniería de Software, ¿cuál es la función del 'Proceso'?",
    options: [
      {
        id: "a",
        text: "Proporcionar un enfoque automático o semi-automático para resolver problemas."
      },
      {
        id: "b",
        text: "Indicar cómo construir técnicamente el software paso a paso."
      },
      {
        id: "c",
        text: "Mantener las capas unidas actuando como un enfoque o marco de trabajo."
      },
      {
        id: "d",
        text: "Representar exclusivamente el compromiso de calidad de la organización."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la estructura en capas de la Ingeniería de Software de Pressman, el Proceso es el aglutinador que une todas las capas de tecnología y permite el desarrollo racional y oportuno del software. Define el marco de trabajo para un conjunto de áreas clave de proceso que deben establecerse para la entrega efectiva de tecnología.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q9",
    num: 9,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Capas de la ISW - Herramientas y Métodos",
    type: "single",
    prompt: "Dentro de la Ingeniería de Software, ¿qué proveen las 'Herramientas' y los 'Métodos' respectivamente?",
    options: [
      {
        id: "a",
        text: "Las herramientas dan un enfoque automático/semi-automático, y los métodos indican el 'cómo hacerlo'."
      },
      {
        id: "b",
        text: "Las herramientas son el marco de trabajo, y los métodos mantienen las capas unidas."
      },
      {
        id: "c",
        text: "Las herramientas representan a la organización, y los métodos son el hardware."
      },
      {
        id: "d",
        text: "Ambos conceptos se refieren exclusivamente a la gestión de requisitos del usuario."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Los Métodos proporcionan la experiencia técnica para construir el software (el 'cómo hacer': comunicación, análisis de requerimientos, diseño, codificación, prueba y soporte). Las Herramientas ofrecen soporte automático o semi-automático para el proceso y los métodos (entornos CASE y herramientas integradas).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q10",
    num: 10,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "Definición Formal de Ingeniería de Software (IEEE)",
    type: "single",
    prompt: "¿Cómo define el texto a la Ingeniería de Software (ISW) en relación con el desarrollo, operación y mantenimiento?",
    options: [
      {
        id: "a",
        text: "Como la construcción puramente artesanal de programas sin reglas estrictas."
      },
      {
        id: "b",
        text: "Como la aplicación de un enfoque sistemático, disciplinado y cuantificable."
      },
      {
        id: "c",
        text: "Como el conjunto exclusivo de lenguajes de programación modernos."
      },
      {
        id: "d",
        text: "Como la técnica para cambiar la relación de costo entre el hardware y el software."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La definición consagrada por el estándar IEEE 610.12 establece que la Ingeniería de Software es: 'La aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software; es decir, la aplicación de la ingeniería al software'.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q11",
    num: 11,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "CHAOS Report - Proyectos Exitosos",
    type: "single",
    prompt: "Según el CHAOS Report, ¿qué porcentaje de proyectos de software se clasifican históricamente como 'Exitosos' (completados a tiempo, en presupuesto y con todas las funciones originalmente especificadas)?",
    options: [
      {
        id: "a",
        text: "Del 50 al 53%."
      },
      {
        id: "b",
        text: "Del 19 al 31%."
      },
      {
        id: "c",
        text: "Del 29 al 31%."
      },
      {
        id: "d",
        text: "Más del 80%."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En las estadísticas consolidadas del Standish Group (CHAOS Report), los proyectos clasificados estrictamente como 'Exitosos' (entregados en tiempo, dentro del presupuesto y con la totalidad del alcance y funciones especificadas) rondan históricamente entre el 29% y el 31%.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q12",
    num: 12,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "CHAOS Report - Proyectos Comprometidos (Challenged)",
    type: "single",
    prompt: "Según las estadísticas del CHAOS Report, ¿qué porcentaje histórico representan los proyectos 'Comprometidos o Cuestionados' (Challenged), es decir, aquellos que se completan pero exceden tiempo/presupuesto o tienen menores funciones?",
    options: [
      {
        id: "a",
        text: "Del 50 al 53%."
      },
      {
        id: "b",
        text: "Del 29 al 31%."
      },
      {
        id: "c",
        text: "Del 19 al 31%."
      },
      {
        id: "d",
        text: "Menos del 10%."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Los proyectos Challenged (cuestionados o comprometidos) representan históricamente la mayoría en el CHAOS Report, ubicándose entre el 50% y el 53%. Son proyectos que logran ponerse en funcionamiento pero sufrieron sobrecostos, demoras en el cronograma o recortes de alcance.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u2-1a-q13",
    num: 13,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-2-p1a",
    topic: "CHAOS Report - Proyectos Fallados o Cancelados",
    type: "single",
    prompt: "De acuerdo con el CHAOS Report, ¿cuál es el porcentaje de proyectos que terminan siendo 'Fallados o Cancelados' (se cancelan antes de ser completados o nunca son implementados)?",
    options: [
      {
        id: "a",
        text: "Del 50 al 53%."
      },
      {
        id: "b",
        text: "Del 29 al 31%."
      },
      {
        id: "c",
        text: "Del 19 al 31%."
      },
      {
        id: "d",
        text: "Alrededor del 5%."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En los estudios históricos del Standish Group, los proyectos clasificados como 'Fallados' o cancelados (aquellos que fueron cancelados antes de su finalización o que nunca llegaron a ser implementados por el cliente) representan entre el 19% y el 31% del total.",
    diagram: null,
    points: 1
  }
];
