/**
 * Banco de Preguntas - PARCIAL 1 OFICIAL (Fundamentos Backend)
 * Parte 02 (Preguntas 11 a 20)
 * Temas: Jackson (Serialización JSON), Spring Boot (application.properties/yml),
 * HTTP Status Codes (403 Forbidden vs 401), Procesos Batch, Spring Batch
 * (Framework, Jobs, Steps, ItemReader, BATCH_JOB_EXECUTION, Chunk-Oriented Processing)
 * y Arquitectura en Capas (Capa de Servicio / Lógica de Negocio).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "fb-p1-parcial-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Boot / Jackson - Serialización",
    type: "single",
    prompt: "¿Qué proceso realiza Jackson al convertir un objeto Java en una representación JSON para enviarla al cliente?",
    options: [
      { id: "a", text: "Serialización" },
      { id: "b", text: "Compilación" },
      { id: "c", text: "Inyección de dependencias" },
      { id: "d", text: "Deserialización" }
    ],
    correctAnswers: ["a"],
    explanation: "El proceso de transformar un objeto de la memoria Java (POJO) en una cadena o flujo con formato JSON se denomina Serialización (o marshaling). El proceso inverso, convertir una cadena JSON recibida en un objeto Java, se denomina Deserialización.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Boot - Configuración",
    type: "single",
    prompt: "¿Qué archivo se utiliza habitualmente en un proyecto Spring Boot para centralizar las propiedades de configuración (por ejemplo, el puerto del servidor o la conexión a la base de datos)?",
    options: [
      { id: "a", text: "pom.xml" },
      { id: "b", text: "application.properties (o application.yml)" },
      { id: "c", text: "build.gradle únicamente" },
      { id: "d", text: "web.xml" }
    ],
    correctAnswers: ["b"],
    explanation: "En las aplicaciones Spring Boot, el archivo application.properties (o application.yml), ubicado en src/main/resources, es el archivo estándar donde se centralizan las variables y propiedades de configuración, tales como server.port, spring.datasource.url, credenciales y perfiles de ejecución.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "REST APIs - Códigos de Estado HTTP",
    type: "single",
    prompt: "En el manejo de errores de una API REST, ¿qué código de estado HTTP es apropiado devolver cuando un usuario autenticado intenta acceder a un recurso para el cual no tiene permisos suficientes?",
    options: [
      { id: "a", text: "403 Forbidden" },
      { id: "b", text: "404 Not Found" },
      { id: "c", text: "500 Internal Server Error" },
      { id: "d", text: "401 Unauthorized" }
    ],
    correctAnswers: ["a"],
    explanation: "El código 403 Forbidden indica que el servidor reconoció la identidad del cliente (el usuario está autenticado), pero este no posee los permisos o roles requeridos para acceder al recurso solicitado. Por el contrario, 401 Unauthorized se emplea cuando el usuario no está autenticado o sus credenciales son inválidas.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Procesamiento Batch - Conceptos",
    type: "single",
    prompt: "¿Qué son los procesos batch (o procesos por lotes)?",
    options: [
      { id: "a", text: "Programas que se lanzan generalmente de manera programada, sin intervención humana, y procesan grandes volúmenes de información" },
      { id: "b", text: "Interfaces gráficas de usuario para el cliente final" },
      { id: "c", text: "Servicios que solo responden a peticiones HTTP en tiempo real" },
      { id: "d", text: "Programas que requieren intervención humana constante para ejecutarse" }
    ],
    correctAnswers: ["a"],
    explanation: "Los procesos batch (procesamiento por lotes) son aplicaciones no interactivas diseñadas para procesar de forma masiva grandes volúmenes de datos. Se ejecutan habitualmente en segundo plano de manera programada (por cron o disparadores automáticos) sin requerir intervención de un operador humano.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q15",
    num: 15,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Batch - Propósito",
    type: "single",
    prompt: "¿Qué es Spring Batch?",
    options: [
      { id: "a", text: "Un servidor de aplicaciones para desplegar microservicios" },
      { id: "b", text: "Una base de datos NoSQL para almacenamiento distribuido" },
      { id: "c", text: "Un framework del ecosistema Spring especializado en el desarrollo de procesos por lotes (batch)" },
      { id: "d", text: "Una librería exclusiva para pruebas unitarias" }
    ],
    correctAnswers: ["c"],
    explanation: "Spring Batch es un framework integral y de código abierto perteneciente al ecosistema Spring, diseñado específicamente para permitir el desarrollo robusto de aplicaciones de procesamiento por lotes que manejan grandes volúmenes de transacciones e información corporativa.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q16",
    num: 16,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Batch - Concepto de Job",
    type: "single",
    prompt: "En términos generales de arquitectura, ¿qué representa un \"Job\" en Spring Batch?",
    options: [
      { id: "a", text: "Un endpoint HTTP expuesto por un microservicio" },
      { id: "b", text: "Un contenedor de pasos (Steps) que representa el proceso batch completo" },
      { id: "c", text: "Una tabla de la base de datos" },
      { id: "d", text: "Una única línea de un archivo de texto" }
    ],
    correctAnswers: ["b"],
    explanation: "En el modelo de dominio de Spring Batch, un Job es el concepto fundamental que encapsula la totalidad del proceso por lotes. Funciona como un contenedor jerárquico que organiza, coordina y ejecuta una secuencia definida de pasos (Steps).",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q17",
    num: 17,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Batch - Componentes del Step",
    type: "single",
    prompt: "Dentro de un Step de Spring Batch, ¿qué componente es responsable de leer datos desde una fuente (base de datos, archivo, cola de mensajes, etc.)?",
    options: [
      { id: "a", text: "JobRepository" },
      { id: "b", text: "ItemReader" },
      { id: "c", text: "ItemWriter" },
      { id: "d", text: "ItemProcessor" }
    ],
    correctAnswers: ["b"],
    explanation: "Dentro de un Step orientado a chunks, el ItemReader es la interfaz responsable de obtener o leer secuencialmente los datos desde una fuente de entrada (archivos planos, bases de datos SQL/NoSQL, colas JMS, etc.) registro por registro.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q18",
    num: 18,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Batch - Tablas de Metadatos",
    type: "single",
    prompt: "¿Qué tabla de metadatos de Spring Batch permite consultar el estado (status) y el código de salida (exit_code) de una ejecución, indicando por ejemplo si terminó en COMPLETED o FAILED?",
    options: [
      { id: "a", text: "BATCH_JOB_EXECUTION" },
      { id: "b", text: "BATCH_JOB_EXECUTION_PARAMS" },
      { id: "c", text: "BATCH_STEP_EXECUTION_CONTEXT" },
      { id: "d", text: "BATCH_JOB_INSTANCE" }
    ],
    correctAnswers: ["a"],
    explanation: "La tabla BATCH_JOB_EXECUTION almacena información crucial de cada intento de ejecución de un Job, incluyendo fecha/hora de inicio y finalización, el estado actual (STATUS) y el código de finalización (EXIT_CODE, ej. COMPLETED o FAILED).",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q19",
    num: 19,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Batch - Chunk-Oriented Processing",
    type: "single",
    prompt: "¿Qué técnica utiliza Spring Batch para procesar los datos de un Step de forma eficiente, leyendo y tratando varios elementos antes de persistirlos en bloque?",
    options: [
      { id: "a", text: "Full Table Scan" },
      { id: "b", text: "Stream Processing continuo" },
      { id: "c", text: "Single Item Processing" },
      { id: "d", text: "Chunk-Oriented Processing" }
    ],
    correctAnswers: ["d"],
    explanation: "El procesamiento orientado a chunks (Chunk-Oriented Processing) es el enfoque estándar en Spring Batch: lee los elementos uno a uno, los procesa a través del ItemProcessor, y una vez alcanzado el tamaño del lote (chunk size), delega la lista completa al ItemWriter para persistirlos dentro de una única transacción.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q20",
    num: 20,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Arquitectura en Capas - Capa de Servicio",
    type: "single",
    prompt: "En la arquitectura en capas típica de una aplicación Spring Boot, ¿qué capa se encarga de contener la lógica de negocio y coordinar entre el controlador y el repositorio?",
    options: [
      { id: "a", text: "Capa de Servicio (Lógica de negocio)" },
      { id: "b", text: "Capa de Repositorio (Acceso a datos)" },
      { id: "c", text: "Capa de Controlador (Presentación)" },
      { id: "d", text: "Capa de Modelo (Entidad)" }
    ],
    correctAnswers: ["a"],
    explanation: "La Capa de Servicio (Service Layer, comúnmente anotada con @Service) encapsula la lógica de negocio, validaciones complejas y la delimitación transaccional (@Transactional), actuando como puente intermediario entre los controladores HTTP y los repositorios de persistencia.",
    diagram: null,
    points: 1
  }
];
