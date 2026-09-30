/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 01 (Preguntas 1 a 9)
 * Temas: Grandes volúmenes de datos (Procesos batch, Ventanas de baja demanda),
 * Casos de uso Batch (Resúmenes de cuenta, Generación masiva), Estrategia de procesamiento (Chunks),
 * Arquitectura General de Spring Batch (JobRepository central, Cardinalidad Job-Step, ItemReader-Processor-Writer),
 * JobRepository y Metadatos (Funciones y tablas).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
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
      { id: "a", text: "Requieren la confirmación interactiva y la autorización paso a paso de un operador sobre cada registro." },
      { id: "b", text: "Se ejecutan de forma programada y automatizada, sin intervención humana directa." },
      { id: "c", text: "Se diseñan específicamente para operar en ventanas diurnas coincidiendo con el pico de demanda de los usuarios." },
      { id: "d", text: "Solo pueden manipular estructuras transitorias que residen en la memoria volátil de clientes web remotos." }
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
      { id: "a", text: "Porque los sistemas operativos restringen el acceso concurrente a los canales de lectura y escritura durante el día." },
      { id: "b", text: "Para no saturar ni degradar el rendimiento del entorno transaccional con operaciones masivas de datos." },
      { id: "c", text: "Porque el framework Spring Batch requiere el cese programado de los servicios web para inicializar sus contextos." },
      { id: "d", text: "Para forzar la liberación periódica de conexiones y el reinicio preventivo de los motores de persistencia relacional." }
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
      { id: "c", text: "Transmisión interactiva de mensajería bidireccional cliente-servidor mediante WebSockets en tiempo real." },
      { id: "d", text: "Validación síncrona de credenciales y autenticación biométrica instantánea de usuarios en un portal web." }
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
      { id: "a", text: "Carga masiva de la totalidad de los datos en memoria previa al procesamiento." },
      { id: "b", text: "Procesamiento orientado a lotes fraccionados denominados chunks." },
      { id: "c", text: "Procesamiento individual registro a registro con transacciones inmediatas." },
      { id: "d", text: "Delegación del cómputo exclusivo en stored procedures de la base de datos." }
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
      { id: "a", text: "Un Job contiene estrictamente un único Step indivisible a lo largo de su ciclo." },
      { id: "b", text: "Un Job se compone de 1 a muchos (1..*) Steps ejecutados bajo su ciclo." },
      { id: "c", text: "Múltiples Jobs enlazan y comparten de forma obligatoria un único Step global común." },
      { id: "d", text: "Un Step coordina e invoca múltiples Jobs anidados de manera recursiva en su interior." }
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
      { id: "a", text: "Compilar dinámicamente y validar el código Java de los procesadores antes de abrir las transacciones batch." },
      { id: "b", text: "Almacenar y administrar los datos y metadatos de las distintas ejecuciones de los jobs en la base de datos." },
      { id: "c", text: "Controlar la apertura, autenticación y cierre de conexiones HTTP seguras hacia los clientes externos." },
      { id: "d", text: "Transformar y serializar los registros CSV a estructuras binarias omitiendo la interacción con la base de datos." }
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
  }
];
