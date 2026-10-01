/**
 * Banco de Preguntas - UNIDAD 9 (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 13 a 23)
 * Temas: Marco de Actuación, Normas Profesionales, Técnicas, Tipos de Auditoría y Matriz de Intersección.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-u9-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Marco de Actuación del Auditor",
    type: "single",
    prompt: "Dentro del marco de actuación del auditor informático, ¿cuál de las siguientes acciones constituye algo que NO DEBE hacer?",
    options: [
      { id: "a", text: "Diagnosticar el estado de los sistemas en función de suposiciones." },
      { id: "b", text: "Mantenerse actualizado de forma continua en mejores prácticas." },
      { id: "c", text: "Recomendar mejoras operativas a la dirección de la empresa." },
      { id: "d", text: "Diagnosticar el entorno tecnológico basándose en verificaciones." }
    ],
    correctAnswers: ["a"],
    explanation: "El marco de actuación prohíbe expresamente al auditor realizar diagnósticos basados en suposiciones, así como obligar, amenazar o actuar en beneficio propio. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Rol Profesional del Auditor",
    type: "single",
    prompt: "¿Cuál es el rol profesional que debe asumir el auditor frente a los hallazgos y desviaciones detectadas durante la evaluación?",
    options: [
      { id: "a", text: "Imponer sanciones administrativas al personal de infraestructura." },
      { id: "b", text: "Obligar a la gerencia a modificar de inmediato sus procedimientos." },
      { id: "c", text: "Recomendar mejoras actuando de forma independiente y objetiva." },
      { id: "d", text: "Asumir la ejecución directa de los cambios en la arquitectura de red." }
    ],
    correctAnswers: ["c"],
    explanation: "El auditor debe recomendar mejoras manteniendo su independencia y objetividad, sin asumir roles de mando para obligar, amenazar o ejecutar cambios técnicos. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Normas Profesionales",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas que representan \"Normas Profesionales\" expresadas en el perfil del auditor.",
    options: [
      { id: "a", text: "Objetividad." },
      { id: "b", text: "Confidencialidad." },
      { id: "c", text: "Integridad." },
      { id: "d", text: "Responsabilidad." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva 9 incluye explícitamente la objetividad, confidencialidad, integridad y responsabilidad entre los principios de las normas profesionales del auditor. (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Técnicas de Auditoría - Cuestionarios",
    type: "single",
    prompt: "¿Qué herramienta o técnica de auditoría es la más adecuada para relevar información estandarizada de forma escalable sobre un gran número de usuarios?",
    options: [
      { id: "a", text: "Entrevistas individuales profundas." },
      { id: "b", text: "Cuestionarios estandarizados." },
      { id: "c", text: "Software de interrogación de archivos." },
      { id: "d", text: "Estándares de calidad internacional." }
    ],
    correctAnswers: ["b"],
    explanation: "Los cuestionarios constituyen el instrumento de relevamiento estandarizado y escalable adecuado para recopilar información proveniente de usuarios masivos. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Herramientas de Auditoría - Software de Interrogación",
    type: "single",
    prompt: "¿Cuál es la función específica del \"Software de Interrogación\" en el trabajo del auditor informático?",
    options: [
      { id: "a", text: "Formular preguntas automatizadas a los empleados durante la entrevista." },
      { id: "b", text: "Medir la satisfacción de los clientes respecto al servicio de mesa de ayuda." },
      { id: "c", text: "Comparar el diseño de procesos contra las normas ISO internacionales." },
      { id: "d", text: "Interrogar archivos y bases de datos grandes mediante lenguajes especiales." }
    ],
    correctAnswers: ["d"],
    explanation: "El software de interrogación está orientado a lenguajes especiales para consultar, procesar y analizar volúmenes grandes de datos y archivos de la organización. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q18",
    num: 18,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Herramientas de Auditoría - Estándares",
    type: "single",
    prompt: "¿Cuál es la utilidad del empleo de Estándares dentro del proceso de auditoría informática?",
    options: [
      { id: "a", text: "Detectar desviaciones comparando lo existente contra un marco normativo." },
      { id: "b", text: "Reemplazar la recolección directa de evidencia en las entrevistas." },
      { id: "c", text: "Garantizar que el informe de auditoría tenga validez laboral interna." },
      { id: "d", text: "Automatizar la extracción de tablas en las bases de datos relacionales." }
    ],
    correctAnswers: ["a"],
    explanation: "Los estándares brindan la referencia normativa que permite al auditor comparar la situación real encontrada y detectar las desviaciones existentes. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q19",
    num: 19,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Auditoría Externa vs Interna",
    type: "single",
    prompt: "¿En qué se diferencia fundamentalmente la Auditoría Externa de la Auditoría Interna en cuanto a su impacto legal e institucional?",
    options: [
      { id: "a", text: "La auditoría interna da fe pública; la externa es de uso confidencial." },
      { id: "b", text: "La auditoría interna requiere un contrato de servicio civil profesional." },
      { id: "c", text: "La auditoría externa da fe pública; la interna no da fe pública." },
      { id: "d", text: "La auditoría externa prescinde de evaluar la independencia del equipo." }
    ],
    correctAnswers: ["c"],
    explanation: "La auditoría externa es realizada por un servicio independiente, emite un reporte para terceros y otorga fe pública; la interna posee vínculo laboral y no da fe pública. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q20",
    num: 20,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Auditoría Mixta",
    type: "single",
    prompt: "¿Cuál es la ventaja operativa principal de implementar un esquema de \"Auditoría Mixta\"?",
    options: [
      { id: "a", text: "Eliminar la necesidad de presentar un informe final a la dirección." },
      { id: "b", text: "Combinar el conocimiento del negocio con la independencia externa." },
      { id: "c", text: "Evitar los costos asociados a la contratación de personal especializado." },
      { id: "d", text: "Otorgar fe pública al reporte sin requerir auditores externos." }
    ],
    correctAnswers: ["b"],
    explanation: "La auditoría mixta logra un equilibrio operativo al integrar la visión y conocimiento interno del negocio con la imparcialización e independencia del equipo externo. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q21",
    num: 21,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Matriz de Intersección - Usuarios y Explotación",
    type: "single",
    prompt: "En la Matriz de Intersección de auditoría, ¿qué aspecto evalúa el cruce entre el área específica de \"Usuarios\" y el área general de \"Explotación\"?",
    options: [
      { id: "a", text: "La estrategia tecnológica global de la empresa." },
      { id: "b", text: "La gestión de vulnerabilidades en los servidores." },
      { id: "c", text: "La alineación de los proyectos al modelo de negocio." },
      { id: "d", text: "La satisfacción del servicio percibida por el cliente." }
    ],
    correctAnswers: ["d"],
    explanation: "En la matriz de la diapositiva 12, la intersección entre el área específica de Usuarios y el área general de Explotación evalúa la satisfacción del servicio. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q22",
    num: 22,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Matriz de Intersección - Seguridad y Comunicaciones",
    type: "single",
    prompt: "¿Qué aspecto se analiza en la intersección entre el área específica de \"Seguridad\" y el área general de \"Comunicaciones\"?",
    options: [
      { id: "a", text: "La encriptación de datos y el manejo de tráfico." },
      { id: "b", text: "El control presupuestario del centro de cómputos." },
      { id: "c", text: "La adopción de metodologías ágiles en desarrollo." },
      { id: "d", text: "El retorno de la inversión en equipos de cómputo." }
    ],
    correctAnswers: ["a"],
    explanation: "El cruce entre Seguridad y Comunicaciones aborda controles técnicos específicos como la encriptación de datos y el manejo seguro del tráfico de red. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q23",
    num: 23,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Matriz de Intersección - Dirección y Desarrollo",
    type: "single",
    prompt: "Si se evalúa la \"Alineación al negocio\" en los proyectos de desarrollo informático, ¿desde qué área específica de la matriz se realiza este análisis?",
    options: [
      { id: "a", text: "Seguridad." },
      { id: "b", text: "Interna TI." },
      { id: "c", text: "Dirección." },
      { id: "d", text: "Usuarios." }
    ],
    correctAnswers: ["c"],
    explanation: "La perspectiva del área específica de Dirección sobre el área general de Desarrollo enfoca el análisis en la alineación estratégica del software con el negocio. (Diapositiva 12)",
    diagram: null,
    points: 1
  }
];
