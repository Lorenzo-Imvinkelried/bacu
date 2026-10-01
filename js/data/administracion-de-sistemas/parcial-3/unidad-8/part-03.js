/**
 * Banco de Preguntas - UNIDAD 8 (Administración de Sistemas - Parcial 3)
 * Parte 03 (Preguntas 27 a 38)
 * Temas: Transición, Operación (Incidentes, Problemas, Accesos), Funciones y Mejora Continua (Deming).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "as-p3-u8-q27",
    num: 27,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Capacidad vs Disponibilidad",
    type: "single",
    prompt: "¿En qué se diferencian la Gestión de la Capacidad y la Gestión de la Disponibilidad?",
    options: [
      { id: "a", text: "Capacidad asegura espacio de proceso/almacenamiento; Disponibilidad vela por el funcionamiento fiable e ininterrumpido." },
      { id: "b", text: "Capacidad negocia los contratos externos; Disponibilidad gestiona las contraseñas de usuarios." },
      { id: "c", text: "Capacidad restaura servicios tras fallas; Disponibilidad diseña los esquemas gráficos de red." },
      { id: "d", text: "Capacidad gestiona la seguridad lógica; Disponibilidad financia los equipos informáticos." }
    ],
    correctAnswers: ["a"],
    explanation: "La Capacidad asegura un dimensionamiento adecuado de procesamiento y almacenamiento; la Disponibilidad busca que los servicios operen ininterrumpidamente al nivel acordado y coste razonable. (Diapositiva 70, 71)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q28",
    num: 28,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Continuidad del Servicio (ITSCM)",
    type: "single",
    prompt: "¿Cuál es la meta central de la \"Gestión de la Continuidad de los Servicios de TI\" (ITSCM)?",
    options: [
      { id: "a", text: "Prevenir que fallas menores consuman la memoria RAM de los servidores de correo." },
      { id: "b", text: "Minimizar o impedir que interrupciones por desastres tengan consecuencias catastróficas para el negocio." },
      { id: "c", text: "Garantizar que los códigos fuente no contengan errores de sintaxis antes del despliegue." },
      { id: "d", text: "Mantener actualizadas las listas de precios en el catálogo de servicios de negocio." }
    ],
    correctAnswers: ["b"],
    explanation: "La ITSCM se enfoca en impedir o mitigar las consecuencias catastróficas sobre el negocio provocadas por interrupciones graves o desastres en la infraestructura de TI. (Diapositiva 71)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q29",
    num: 29,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Seguridad de la Información",
    type: "single",
    prompt: "El proceso de \"Gestión de Seguridad de la Información\" busca velar por que la información:",
    options: [
      { id: "a", text: "Sea procesada exclusivamente en servidores locales sin utilizar almacenamiento remoto." },
      { id: "b", text: "Sea correcta, completa, esté siempre disponible y sea usada solo por personal autorizado." },
      { id: "c", text: "Se archive en papel antes de ser eliminada de la base de datos corporativa." },
      { id: "d", text: "Tenga un costo de almacenamiento igual a cero mediante compresión de archivos." }
    ],
    correctAnswers: ["b"],
    explanation: "La Gestión de Seguridad de la Información (ISM) resguarda la integridad (correcta y completa), la disponibilidad y la confidencialidad (solo usuarios autorizados). (Diapositiva 71)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q30",
    num: 30,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Transición del Servicio",
    type: "single",
    prompt: "¿Cuál es el propósito general de la fase de \"Transición del Servicio\"?",
    options: [
      { id: "a", text: "Negociar las metas presupuestarias anuales con la junta directiva." },
      { id: "b", text: "Atender los reclamos de los clientes mediante una central telefónica." },
      { id: "c", text: "Asegurar que servicios nuevos, modificados o retirados cumplan las expectativas del negocio." },
      { id: "d", text: "Supervisar el mantenimiento físico del edificio del centro de datos." }
    ],
    correctAnswers: ["c"],
    explanation: "La Transición del Servicio orienta el despliegue de servicios nuevos, modificados o retirados para garantizar que cumplan con las expectativas fijadas en la estrategia y diseño. (Diapositiva 72)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q31",
    num: 31,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión del Cambio",
    type: "single",
    prompt: "¿Qué proceso de Transición del Servicio se encarga de controlar los cambios en arquitecturas, herramientas e infraestructuras con mínimas interrupciones?",
    options: [
      { id: "a", text: "Gestión del Cambio." },
      { id: "b", text: "Gestión de la Configuración y Activos del Servicio." },
      { id: "c", text: "Gestión de Versiones y Despliegues." },
      { id: "d", text: "Gestión del Conocimiento." }
    ],
    correctAnswers: ["a"],
    explanation: "La Gestión del Cambio evalúa y controla el ciclo de vida de los cambios tecnológicos o metodológicos para implementarlos reduciendo al mínimo la interrupción en los servicios. (Diapositiva 73)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q32",
    num: 32,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Versiones y Despliegues",
    type: "single",
    prompt: "¿En qué consiste el objetivo del proceso \"Gestión de Versiones y Despliegues\"?",
    options: [
      { id: "a", text: "Redactar los manuales de capacitación para los nuevos empleados administrativos." },
      { id: "b", text: "Planificar, programar y controlar la construcción, prueba y entrega de nuevas funcionalidades." },
      { id: "c", text: "Eliminar la necesidad de realizar pruebas de software en ambientes de laboratorio." },
      { id: "d", text: "Registrar las solicitudes telefónicas de restablecimiento de contraseñas de red." }
    ],
    correctAnswers: ["b"],
    explanation: "La Gestión de Versiones y Despliegues planifica, programa y controla la construcción, prueba e implementación de entregas, adoptando nuevas funciones mientras resguarda los servicios activos. (Diapositiva 73)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q33",
    num: 33,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Operación del Servicio",
    type: "single",
    prompt: "¿Cuál es el objetivo principal de la fase de \"Operación del Servicio\"?",
    options: [
      { id: "a", text: "Crear la visión a largo plazo para las futuras inversiones tecnológicas." },
      { id: "b", text: "Coordinar y realizar actividades para ofrecer y gestionar servicios en los niveles acordados." },
      { id: "c", text: "Evaluar las alternativas de arquitectura antes de comenzar la programación." },
      { id: "d", text: "Definir los términos legales para las contrataciones con proveedores externos." }
    ],
    correctAnswers: ["b"],
    explanation: "La Operación del Servicio se encarga de lograr eficacia y eficiencia coordinando y ejecutando el trabajo diario necesario para entregar los servicios dentro de los niveles acordados. (Diapositiva 74)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q34",
    num: 34,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Incidentes vs Problemas",
    type: "single",
    prompt: "¿Cuál es la diferencia fundamental entre \"Gestión de Incidentes\" y \"Gestión de Problemas\"?",
    options: [
      { id: "a", text: "Incidentes busca la causa raíz; Problemas se limita a cambiar contraseñas." },
      { id: "b", text: "Incidentes gestiona compras; Problemas administra las licencias de software." },
      { id: "c", text: "Incidentes programa cambios de hardware; Problemas audita la seguridad física." },
      { id: "d", text: "Incidentes busca restablecer la operación normal rápido; Problemas busca eliminar la causa raíz." }
    ],
    correctAnswers: ["d"],
    explanation: "La Gestión de Incidentes busca restablecer la operación normal lo antes posible; la Gestión de Problemas se enfoca en investigar los errores subyacentes para prevenir la recurrencia. (Diapositiva 75)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q35",
    num: 35,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Accesos",
    type: "single",
    prompt: "¿Qué proceso de Operación del Servicio garantiza a los usuarios autorizados el derecho a usar un servicio impidiendo el acceso a los no autorizados?",
    options: [
      { id: "a", text: "Gestión de Accesos." },
      { id: "b", text: "Gestión de Eventos." },
      { id: "c", text: "Gestión de Solicitudes." },
      { id: "d", text: "Gestión de Aplicaciones." }
    ],
    correctAnswers: ["a"],
    explanation: "La Gestión de Accesos administra el derecho de acceso de usuarios autorizados resguardando el sistema frente a usuarios no autorizados. (Diapositiva 75)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q36",
    num: 36,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Operaciones de TI",
    type: "single",
    prompt: "¿Qué función dentro de la Operación del Servicio es responsable de las actividades operativas diarias necesarias para gestionar la infraestructura de TI?",
    options: [
      { id: "a", text: "Gestión de Aplicaciones." },
      { id: "b", text: "Centro de Servicios (Service Desk)." },
      { id: "c", text: "Gestión de Operaciones de TI." },
      { id: "d", text: "Gestión Técnica." }
    ],
    correctAnswers: ["c"],
    explanation: "La Gestión de Operaciones de TI es la función responsable de ejecutar las tareas y actividades operativas cotidianas indispensables para mantener la infraestructura tecnológica. (Diapositiva 76)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q37",
    num: 37,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Mejora Continua y Ciclo de Deming",
    type: "single",
    prompt: "¿En qué modelo o ciclo de calidad se basa la fase de \"Mejora Continua del Servicio\"?",
    options: [
      { id: "a", text: "El modelo de cascada para desarrollo de software." },
      { id: "b", text: "El ciclo de Deming: Planificar - Hacer - Verificar - Actuar (PDCA)." },
      { id: "c", text: "La matriz de análisis de riesgos PxI." },
      { id: "d", text: "La estructura de desglose del trabajo (EDT)." }
    ],
    correctAnswers: ["b"],
    explanation: "La fase de Mejora Continua del Servicio descansa conceptualmente en el ciclo de Deming (Plan - Do - Check - Act). (Diapositiva 77)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q38",
    num: 38,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Proceso de Mejora Continua en 7 Pasos",
    type: "single",
    prompt: "Selecciona el orden correcto de los primeros 4 pasos del proceso de Mejora Continua según el esquema de 7 pasos presentado en la asignatura.",
    options: [
      { id: "a", text: "1. Identificar estrategia; 2. Definir qué mediremos; 3. Recopilar datos; 4. Procesar datos." },
      { id: "b", text: "1. Recopilar datos; 2. Implementar mejoras; 3. Analizar datos; 4. Presentar informes." },
      { id: "c", text: "1. Procesar datos; 2. Definir qué mediremos; 3. Analizar datos; 4. Recopilar datos." },
      { id: "d", text: "1. Implementar acciones; 2. Recopilar datos; 3. Presentar informes; 4. Definir métricas." }
    ],
    correctAnswers: ["a"],
    explanation: "Los primeros 4 pasos consecutivos del ciclo de 7 pasos son: 1. Identificar la estrategia para mejorar, 2. Definir lo que mediremos, 3. Recopilar los datos y 4. Procesar los datos. (Diapositiva 77, 78)",
    diagram: null,
    points: 1
  }
];
