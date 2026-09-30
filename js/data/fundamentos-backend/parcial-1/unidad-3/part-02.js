/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 02 (Preguntas 10 a 18)
 * Temas: JobRepository y Tablas (Cardinalidad Instance:Execution, campo STATUS, relación con StepExecution, ExecutionContext),
 * JobLauncher (Responsabilidades, anotación @EnableBatchProcessing, parámetros configurables, taskExecutor asincrónico),
 * Job (Definición conceptual).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
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
      { id: "d", text: "N Instancias : N Corridas" }
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
  },
  {
    id: "fb-p1-u3-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Tablas",
    type: "single",
    prompt: "¿Qué relación de cardinalidad vincula a la tabla BATCH_JOB_EXECUTION con BATCH_STEP_EXECUTION?",
    options: [
      { id: "a", text: "1 : 1 (Un Job Execution se asocia estrictamente a un único Step Execution)" },
      { id: "b", text: "1 : N (Un Job Execution tiene 1 a N Step Executions)" },
      { id: "c", text: "N : 1 (Múltiples Job Executions se agrupan bajo un único Step Execution)" },
      { id: "d", text: "N : M (Múltiples Job Executions vinculados mediante una tabla intermedia)" }
    ],
    correctAnswers: ["b"],
    explanation: "Como un Job puede constar de varios Steps, una ejecución de Job (BATCH_JOB_EXECUTION) se asocia con una o varias ejecuciones de pasos (BATCH_STEP_EXECUTION), representada en el diagrama con cardinalidad 1:N. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobRepository y Tablas",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes tablas de Spring Batch están destinadas a almacenar pares clave-valor y estados serializados para permitir reinicios de trabajos (ExecutionContext)? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "BATCH_JOB_EXECUTION_CONTEXT" },
      { id: "b", text: "BATCH_STEP_EXECUTION_CONTEXT" },
      { id: "c", text: "BATCH_JOB_INSTANCE" },
      { id: "d", text: "BATCH_JOB_EXECUTION_PARAMS" }
    ],
    correctAnswers: ["a", "b"],
    explanation: "Tanto a nivel de Job (BATCH_JOB_EXECUTION_CONTEXT) como a nivel de Step (BATCH_STEP_EXECUTION_CONTEXT), Spring Batch persiste el contexto de ejecución (SHORT_CONTEXT / serialized context) para registrar datos de progreso y estado recuperable. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobLauncher",
    type: "single",
    prompt: "¿Cuál es la responsabilidad principal asignada a JobLauncher en una aplicación Spring Batch?",
    options: [
      { id: "a", text: "Definir y ejecutar las consultas JPQL de lectura paginada dentro de los repositorios." },
      { id: "b", text: "Lanzar los procesos batch suministrando los parámetros de entrada deseados." },
      { id: "c", text: "Escribir y persistir físicamente los bloques de datos procesados en archivos planos." },
      { id: "d", text: "Generar automáticamente los esquemas DDL de base de datos en tiempo de arranque." }
    ],
    correctAnswers: ["b"],
    explanation: "El material indica textualmente que JobLauncher «es el componente encargado de lanzar los procesos suministrando los parámetros de entrada deseados». (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q15",
    num: 15,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobLauncher y Configuración",
    type: "single",
    prompt: "Con respecto a la anotación @EnableBatchProcessing, ¿cuál es su estado técnico según lo expresado en la diapositiva?",
    options: [
      { id: "a", text: "Es una anotación obligatoria en todas las versiones del framework para inicializar y compilar cualquier componente batch." },
      { id: "b", text: "Brinda la configuración por defecto del ecosistema batch, pero actualmente se considera opcional en versiones modernas de Spring Boot." },
      { id: "c", text: "Ha sido dada de baja en las especificaciones actuales y su declaración provoca fallas irreversibles durante el arranque." },
      { id: "d", text: "Solo se permite su declaración en clases de configuración que implementen explícitamente la interfaz ItemWriter." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto explicita: «@EnableBatchProcessing es la anotación base que brinda la configuración por defecto. Si necesitamos sobreescribirlo, se puede declarar manualmente. -> Opcional actualmente». (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q16",
    num: 16,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobLauncher",
    type: "multiple",
    prompt: "¿Qué parámetros o dependencias se pueden configurar en un JobLauncher de acuerdo con la diapositiva? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "El JobRepository a utilizar." },
      { id: "b", text: "El taskExecutor (pudiendo definirse de manera sincrónica o asincrónica)." },
      { id: "c", text: "El dialecto SQL y la estrategia de conexión nativa del motor relacional." },
      { id: "d", text: "La codificación de caracteres y formato delimitador del archivo de salida." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "La diapositiva lista específicamente dos elementos clave configurables en el launcher: el JobRepository a utilizar y el taskExecutor (sincrónico o asincrónico). (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q17",
    num: 17,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobLauncher",
    type: "single",
    prompt: "¿Qué implicancia práctica tiene configurar un taskExecutor asincrónico en el JobLauncher?",
    options: [
      { id: "a", text: "El launcher retorna inmediatamente el control al hilo invocador (por ejemplo, una respuesta HTTP) mientras el batch continúa ejecutándose en segundo plano." },
      { id: "b", text: "El launcher bloquea de forma indefinida el hilo principal del servidor web hasta verificar que la totalidad de los chunks hayan concluido exitosamente." },
      { id: "c", text: "Se deshabilita por completo la gestión transaccional automática de la base de datos, forzando a realizar commits manuales en cada uno de los steps." },
      { id: "d", text: "El Job se particiona y distribuye obligatoriamente entre múltiples nodos remotos de cómputo que prescinden de una base de datos centralizada." }
    ],
    correctAnswers: ["a"],
    explanation: "Al emplear un ejecutor asincrónico, el lanzamiento del trabajo no es bloqueante; la llamada devuelve inmediatamente un estado preliminar (permitiendo a una API responder de inmediato) mientras el procesamiento ocurre en un hilo independiente. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q18",
    num: 18,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Job",
    type: "single",
    prompt: "¿Cómo se define conceptualmente al objeto Job en Spring Batch?",
    options: [
      { id: "a", text: "Es el componente encargado de deserializar cadenas JSON a entidades de dominio." },
      { id: "b", text: "Es el objeto que representa el proceso global que se debe llevar a cabo." },
      { id: "c", text: "Es un hilo reservado por el sistema operativo para ejecutar transacciones en la base." },
      { id: "d", text: "Es la entidad que registra las fallas transitorias en la tabla de migraciones." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva señala explícitamente: «Es el objeto que representa el proceso que hay que llevar a cabo». (Diapositiva 6)",
    diagram: null,
    points: 1
  }
];
