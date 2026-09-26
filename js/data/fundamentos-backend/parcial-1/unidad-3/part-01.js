/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 3 (Parte 1: Q1 - Q11)
 * Temas: Manejo de grandes volúmenes de datos, Arquitectura General de Spring Batch, JobRepository y Tablas.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U3_PART_01_QUESTIONS = [
  {
    id: "fb-p1-u3-q01",
    num: 1,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Grandes volúmenes de datos",
    type: "single",
    prompt: "¿Cuál es una característica esencial de los programas orientados al manejo de grandes volúmenes de datos (procesos batch)?",
    options: [
      { id: "a", text: "Requieren la confirmación sincrónica e interactiva de un usuario en cada registro procesado." },
      { id: "b", text: "Se ejecutan de forma programada y automatizada, sin intervención humana directa." },
      { id: "c", text: "Se diseñan exclusivamente para ejecutarse durante los horarios de mayor tráfico de la plataforma." },
      { id: "d", text: "Solo pueden manipular datos que residen de forma temporal en la memoria de los navegadores web." }
    ],
    correctAnswers: ["b"],
    explanation: "Los procesos batch se definen como programas autónomos que se ejecutan de manera programada sin que sea necesaria la intervención humana durante su procesamiento. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q02",
    num: 2,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Grandes volúmenes de datos",
    type: "single",
    prompt: "¿Por qué los procesos de procesamiento por lotes suelen ejecutarse en horarios de baja carga operativa?",
    options: [
      { id: "a", text: "Porque los sistemas operativos bloquean la lectura de archivos de disco durante el día." },
      { id: "b", text: "Para no saturar ni degradar el rendimiento del entorno transaccional con operaciones masivas de datos." },
      { id: "c", text: "Porque el framework Spring Batch únicamente puede inicializarse fuera de la jornada laboral." },
      { id: "d", text: "Para forzar el reinicio completo de todos los servidores de bases de datos relacionales." }
    ],
    correctAnswers: ["b"],
    explanation: "Al procesar grandes volúmenes de datos que consumen recursos intensivos de E/S y CPU, se programan en ventanas de baja demanda para evitar afectar la experiencia de usuario y las transacciones en vivo. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q03",
    num: 3,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Casos de uso Batch",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes son casos de uso típicos para aplicaciones batch mencionados en el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Generación periódica de resúmenes de cuenta bancarios o comerciales." },
      { id: "b", text: "Generación masiva de documentos (por ejemplo, cartas de bienvenida a nuevos usuarios)." },
      { id: "c", text: "Chat interactivo cliente-servidor mediante WebSockets en tiempo real." },
      { id: "d", text: "Autenticación biométrica instantánea de usuarios en un portal web." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "La diapositiva indica como ejemplos clásicos la generación de resúmenes de cuenta y la producción masiva de documentos. Las interacciones en tiempo real corresponden a sistemas transaccionales sincrónicos o reactivos. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q04",
    num: 4,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Estrategia de procesamiento",
    type: "single",
    prompt: "¿En qué estrategia fundamental de procesamiento se basa el framework Spring Batch para gestionar grandes volúmenes de información de manera eficiente?",
    options: [
      { id: "a", text: "Carga completa de la totalidad de los datos en memoria antes de iniciar cualquier procesamiento." },
      { id: "b", text: "Procesamiento orientado a lotes fraccionados denominados chunks." },
      { id: "c", text: "Procesamiento continuo registro a registro con commits individuales inmediatos en cada celda." },
      { id: "d", text: "Delegación exclusiva del cálculo en procedimientos almacenados dentro del motor de base de datos." }
    ],
    correctAnswers: ["b"],
    explanation: "Spring Batch se fundamenta en el procesamiento basado en chunks (fragmentos o bloques de tamaño configurable), lo que permite leer, procesar y commitear transacciones en lotes controlados sin agotar la memoria. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q05",
    num: 5,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Arquitectura General de Spring Batch",
    type: "single",
    prompt: "Según el diagrama arquitectónico de Spring Batch, ¿cuál es el componente central con el que interactúan tanto JobLauncher, como Job y Step para persistir su estado?",
    options: [
      { id: "a", text: "ItemWriter" },
      { id: "b", text: "ItemProcessor" },
      { id: "c", text: "JobRepository" },
      { id: "d", text: "FlatFileItemReader" }
    ],
    correctAnswers: ["c"],
    explanation: "En el diagrama general, JobRepository actúa como la infraestructura central de persistencia que mantiene comunicación bidireccional con el JobLauncher, el Job y los Steps para registrar metadatos de ejecución. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q06",
    num: 6,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Arquitectura General de Spring Batch",
    type: "single",
    prompt: "De acuerdo con las cardinalidades reflejadas en la arquitectura de Spring Batch, ¿cuál es la relación cuantitativa entre un Job y sus Steps?",
    options: [
      { id: "a", text: "Un Job contiene exactamente un Step único e indivisible." },
      { id: "b", text: "Un Job se compone de 1 a muchos (1..*) Steps ejecutados bajo su ciclo." },
      { id: "c", text: "Múltiples Jobs comparten obligatoriamente un único Step común." },
      { id: "d", text: "Un Step puede contener múltiples Jobs anidados en su interior." }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama especifica una relación de 1 a * entre Job y Step, indicando que un trabajo por lotes puede estar conformado por uno o varios pasos secuenciales de trabajo. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q07",
    num: 7,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Arquitectura General de Spring Batch",
    type: "single",
    prompt: "En el modelo arquitectónico de un Step, ¿cuáles son los tres componentes funcionales que lo integran con cardinalidad 1 a 1?",
    options: [
      { id: "a", text: "JobLauncher, JobRepository y TransactionManager." },
      { id: "b", text: "ItemReader, ItemProcessor e ItemWriter." },
      { id: "c", text: "Controller, Service Layer y Repository." },
      { id: "d", text: "Model, JPA Entity y DataSource." }
    ],
    correctAnswers: ["b"],
    explanation: "Cada Step convencional basado en chunks conecta internamente con tres componentes especializados: un ItemReader (lectura), un ItemProcessor (transformación/negocio) y un ItemWriter (escritura/persistencia). (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q08",
    num: 8,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Metadatos",
    type: "single",
    prompt: "¿Cuál es la función primaria del componente JobRepository en el ecosistema Spring Batch?",
    options: [
      { id: "a", text: "Compilar el código Java de los procesadores antes de ejecutar las transacciones." },
      { id: "b", text: "Almacenar y administrar los datos y metadatos de las distintas ejecuciones de los jobs en la base de datos." },
      { id: "c", text: "Controlar la apertura y cierre de conexiones HTTP hacia los clientes externos." },
      { id: "d", text: "Transformar los registros CSV a entidades binarias sin intervención de la base de datos." }
    ],
    correctAnswers: ["b"],
    explanation: "JobRepository es el mecanismo encargado de persistir el historial, parámetros, estados y contextos de cada corrida en un conjunto predeterminado de tablas relacionales. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q09",
    num: 9,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Tablas",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes tablas forman parte del esquema de base de datos administrado por JobRepository según el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "BATCH_JOB_INSTANCE" },
      { id: "b", text: "BATCH_JOB_EXECUTION" },
      { id: "c", text: "BATCH_STEP_EXECUTION" },
      { id: "d", text: "SPRING_SESSION_ATTRIBUTES" }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La diapositiva lista textualmente las tablas de Spring Batch: BATCH_JOB_INSTANCE, BATCH_JOB_EXECUTION, BATCH_JOB_EXECUTION_CONTEXT, BATCH_JOB_EXECUTION_PARAMS, BATCH_STEP_EXECUTION y BATCH_STEP_EXECUTION_CONTEXT. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Tablas",
    type: "single",
    prompt: "Según el modelo relacional expuesto, ¿cuál es la relación de cardinalidad existente entre BATCH_JOB_INSTANCE y BATCH_JOB_EXECUTION?",
    options: [
      { id: "a", text: "1 Instancia : 1 Corrida" },
      { id: "b", text: "1 Instancia : N Corridas (1 a muchos)" },
      { id: "c", text: "N Instancias : 1 Corrida" },
      { id: "d", text: "No guardan relación de clave foránea entre sí" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica de forma explícita: «1 Instancia : N corridas». Una instancia representa la definición conceptual de un Job asociado a determinados parámetros identificatorios, mientras que cada corrida o intento de ejecución real genera una nueva entrada en BATCH_JOB_EXECUTION. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Tablas",
    type: "single",
    prompt: "En la tabla BATCH_JOB_EXECUTION, ¿cuál es la columna que almacena el resultado o fase en la que se encuentra la ejecución (por ejemplo: STARTING, STARTED, COMPLETED, FAILED)?",
    options: [
      { id: "a", text: "PARAMETER_NAME" },
      { id: "b", text: "SHORT_CONTEXT" },
      { id: "c", text: "STATUS" },
      { id: "d", text: "JOB_NAME" }
    ],
    correctAnswers: ["c"],
    explanation: "De acuerdo con la estructura mostrada en el esquema relacional, BATCH_JOB_EXECUTION contiene los campos JOB_EXECUTION_ID (PK), JOB_INSTANCE_ID (FK) y STATUS (varchar). (Diapositiva 4)",
    diagram: null,
    points: 1
  }
];
