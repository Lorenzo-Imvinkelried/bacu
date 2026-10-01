/**
 * Banco de Preguntas - UNIDAD 8 (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 14 a 26)
 * Temas: Marcos (ITIL, ISO 20000, COBIT), Ciclo de Vida ITIL, Estrategia del Servicio y Diseño del Servicio.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-u8-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Problemas en Soporte TI (Perspectiva Cliente)",
    type: "single",
    prompt: "Desde la perspectiva del cliente, ¿cuáles son las deficiencias más comunes cuando existe una gestión deficiente del soporte de TI?",
    options: [
      { id: "a", text: "Exceso de documentación en los procedimientos e incrementos presupuestarios." },
      { id: "b", text: "Tiempos de respuesta inconsistentes, baja confianza y deficiente atención a sus necesidades." },
      { id: "c", text: "Automatización excesiva de solicitudes e imposibilidad de realizar cambios técnicos." },
      { id: "d", text: "Rigidez en las auditorías internas y sobreabundancia de métricas de rendimiento." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 62 resume la perspectiva del cliente en tres deficiencias clave: baja confianza/mala percepción, déficit de atención a sus necesidades y tiempos de respuesta bajos o inconsistentes. (Diapositiva 62)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Beneficios de Adoptar GSTI",
    type: "single",
    prompt: "¿Cuál de los siguientes puntos constituye un beneficio directo de adoptar la Gestión de Servicios de TI?",
    options: [
      { id: "a", text: "Eliminar la necesidad de medir el rendimiento mediante indicadores clave." },
      { id: "b", text: "Centrarse en la mejora continua y evitar reinventar la rueda en la solución de problemas." },
      { id: "c", text: "Prescindir del alineamiento con las demandas cambiantes de los clientes." },
      { id: "d", text: "Garantizar que las decisiones se tomen basadas únicamente en la intuición técnica." }
    ],
    correctAnswers: ["b"],
    explanation: "Entre los beneficios enumerados en la diapositiva 63 destacan el enfoque en la mejora continua, el aprovechamiento de experiencias previas para \"evitar reinventar la rueda\" y la adopción de métricas para la toma de decisiones. (Diapositiva 63)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "ITIL vs ISO/IEC 20000",
    type: "single",
    prompt: "¿Cuál es la diferencia fundamental entre ITIL e ISO/IEC 20000?",
    options: [
      { id: "a", text: "ITIL es una ley obligatoria para empresas públicas; ISO 20000 es un marco teórico opcional." },
      { id: "b", text: "ITIL se enfoca en hardware; ISO 20000 se aplica exclusivamente al desarrollo de software." },
      { id: "c", text: "ITIL define controles contables; ISO 20000 es un marco para la gestión de proyectos de construcción." },
      { id: "d", text: "ITIL ofrece un conjunto de mejores prácticas; ISO 20000 es un estándar internacional de calidad certificable." }
    ],
    correctAnswers: ["d"],
    explanation: "ITIL es una librería de buenas prácticas acumuladas, mientras que ISO/IEC 20000 es el estándar internacional de calidad para la gestión de servicios de TI basado en dichas prácticas. (Diapositiva 64)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Marco de Referencia COBIT",
    type: "single",
    prompt: "¿Cuál es el foco principal del marco de referencia COBIT?",
    options: [
      { id: "a", text: "El control y la supervisión del gobierno de la TI mediante guías de procesos." },
      { id: "b", text: "La evaluación del nivel de madurez en la construcción de código fuente." },
      { id: "c", text: "La certificación de calidad en la atención de mesas de ayuda telefónicas." },
      { id: "d", text: "La definición de arquitecturas de hardware para centros de procesamiento de datos." }
    ],
    correctAnswers: ["a"],
    explanation: "COBIT se define como un marco de referencia (framework) enfocado específicamente en el control, supervisión y gobierno de las tecnologías de la información. (Diapositiva 64)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q18",
    num: 18,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "ITIL y Gestión de Servicios",
    type: "single",
    prompt: "¿Cómo concibe ITIL a la Gestión de Servicios de TI (ITSM)?",
    options: [
      { id: "a", text: "Como un conjunto aislado de herramientas de automatización de servidores." },
      { id: "b", text: "Como un reglamento exclusivo para grandes corporaciones multinacionales." },
      { id: "c", text: "Como un conjunto integrado de procesos aplicable a organizaciones de todo tamaño." },
      { id: "d", text: "Como una metodología rígida para el diseño de bases de datos relacionales." }
    ],
    correctAnswers: ["c"],
    explanation: "ITIL concibe la ITSM como un conjunto integrado de procesos orientados a entregar y mantener servicios de TI de calidad, siendo aplicable tanto a pequeñas como a grandes organizaciones. (Diapositiva 65)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q19",
    num: 19,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Fases del Ciclo de Vida ITIL",
    type: "single",
    prompt: "¿Cuál es la secuencia ordenada de las 5 fases del Ciclo de Vida del Servicio según ITIL?",
    options: [
      { id: "a", text: "Inicio, Planificación, Ejecución, Control y Cierre del Servicio." },
      { id: "b", text: "Estrategia, Diseño, Transición, Operación y Mejora Continua del Servicio." },
      { id: "c", text: "Análisis, Requisitos, Programación, Pruebas y Mantenimiento del Servicio." },
      { id: "d", text: "Adquisición, Instalación, Configuración, Monitoreo y Retiro del Servicio." }
    ],
    correctAnswers: ["b"],
    explanation: "El ciclo de vida de ITIL consta de 5 fases estructuradas: 1. Estrategia del Servicio, 2. Diseño del Servicio, 3. Transición del Servicio, 4. Operación del Servicio y 5. Mejora continua del Servicio. (Diapositiva 66)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q20",
    num: 20,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Estrategia del Servicio",
    type: "single",
    prompt: "¿Cuál es el propósito fundamental de la fase de \"Estrategia del Servicio\"?",
    options: [
      { id: "a", text: "Monitorear los sucesos diarios de la infraestructura técnica de la red." },
      { id: "b", text: "Programar la construcción de paquetes de software antes de su despliegue." },
      { id: "c", text: "Resolver los incidentes presentados por los usuarios en la mesa de ayuda." },
      { id: "d", text: "Orientar la gestión del servicio como capacidad organizativa y activo estratégico." }
    ],
    correctAnswers: ["d"],
    explanation: "La Estrategia del Servicio proporciona la orientación para diseñar, desarrollar e implementar la gestión de servicios no solo como capacidad organizativa, sino como activo estratégico. (Diapositiva 67)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q21",
    num: 21,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de la Demanda",
    type: "single",
    prompt: "¿Qué proceso de la Estrategia del Servicio se encarga de predecir y regular los ciclos de consumo adaptando la producción a los picos de exigencia?",
    options: [
      { id: "a", text: "Gestión de la Demanda." },
      { id: "b", text: "Gestión del Portafolio de Servicios." },
      { id: "c", text: "Gestión de las Relaciones con el Negocio." },
      { id: "d", text: "Gestión Financiera para Servicios de TI." }
    ],
    correctAnswers: ["a"],
    explanation: "La Gestión de la Demanda predice y regula los ciclos de consumo, adaptando la capacidad a los picos de exigencia para mantener los niveles de calidad acordados. (Diapositiva 68)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q22",
    num: 22,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión del Portafolio de Servicios",
    type: "single",
    prompt: "¿Cuál es el objetivo principal del proceso \"Gestión del Portafolio de Servicios\"?",
    options: [
      { id: "a", text: "Atender las llamadas telefónicas de los clientes que experimentan fallas de red." },
      { id: "b", text: "Modificar los parámetros de configuración en los servidores corporativos." },
      { id: "c", text: "Definir la estrategia para generar el máximo valor equilibrando inversiones, riesgos y costos." },
      { id: "d", text: "Auditar la seguridad física de los centros de cómputos de la empresa." }
    ],
    correctAnswers: ["c"],
    explanation: "La Gestión del Portafolio de Servicios define la estrategia para generar el máximo valor equilibrando las inversiones en TI con la mitigación de riesgos y costos. (Diapositiva 68)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q23",
    num: 23,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión de Relaciones con el Negocio",
    type: "single",
    prompt: "¿Cuál es la función del proceso \"Gestión de las Relaciones con el Negocio\"?",
    options: [
      { id: "a", text: "Mantener actualizada la infraestructura de hardware del centro de datos." },
      { id: "b", text: "Identificar las necesidades del cliente y garantizar que el proveedor pueda satisfacerlas." },
      { id: "c", text: "Diseñar los esquemas de bases de datos para las aplicaciones comerciales." },
      { id: "d", text: "Coordinar las pruebas de estrés en los entornos de desarrollo de software." }
    ],
    correctAnswers: ["b"],
    explanation: "Este proceso establece el vínculo entre el proveedor y el cliente, identificando sus necesidades y asegurando que el proveedor disponga de servicios capaces de responder a ellas. (Diapositiva 68)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q24",
    num: 24,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Diseño del Servicio",
    type: "single",
    prompt: "¿Qué objetivo busca la fase de \"Diseño del Servicio\"?",
    options: [
      { id: "a", text: "Desplegar los componentes de software en los entornos de producción final." },
      { id: "b", text: "Diseñar servicios de TI, procesos y políticas para hacer realidad la estrategia." },
      { id: "c", text: "Reparar las averías técnicas que detienen el funcionamiento de los servidores." },
      { id: "d", text: "Cancelar los contratos de servicios que hayan superado el presupuesto asignado." }
    ],
    correctAnswers: ["b"],
    explanation: "La fase de Diseño del Servicio ofrece la orientación para diseñar servicios de TI, prácticas, procesos y políticas orientados a concretar la estrategia acordada. (Diapositiva 69)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q25",
    num: 25,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión del Nivel de Servicio (SLM)",
    type: "single",
    prompt: "¿Qué proceso de Diseño del Servicio tiene como meta aprobar y documentar objetivos dentro de Acuerdos de Nivel de Servicio (SLA)?",
    options: [
      { id: "a", text: "Gestión del Nivel de Servicio (SLM)." },
      { id: "b", text: "Gestión del Catálogo de Servicios (SCM)." },
      { id: "c", text: "Gestión de la Capacidad." },
      { id: "d", text: "Coordinación del Diseño." }
    ],
    correctAnswers: ["a"],
    explanation: "La Gestión del Nivel de Servicio (SLM) aprueba y documenta las metas y responsabilidades dentro de los SLAs y SLRs, sosteniendo un ciclo continuo de monitoreo y revisión. (Diapositiva 70)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u8-q26",
    num: 26,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-8",
    topic: "Gestión del Catálogo de Servicios",
    type: "single",
    prompt: "¿Cuál es la responsabilidad principal del proceso \"Gestión del Catálogo de Servicios\"?",
    options: [
      { id: "a", text: "Evaluar el nivel de satisfacción de los empleados respecto a sus salarios." },
      { id: "b", text: "Monitorear la carga de trabajo diaria de los procesadores de almacenamiento." },
      { id: "c", text: "Proveer y mantener una única fuente de información sobre servicios en producción o disponibles." },
      { id: "d", text: "Administrar las contraseñas y permisos de acceso de los usuarios del sistema." }
    ],
    correctAnswers: ["c"],
    explanation: "La Gestión del Catálogo de Servicios mantiene una fuente única y confiable de información comprensiva sobre todos los servicios activos y en preparación. (Diapositiva 70)",
    diagram: null,
    points: 1
  }
];
