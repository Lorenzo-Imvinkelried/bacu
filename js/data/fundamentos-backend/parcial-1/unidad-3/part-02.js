/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 3 (Parte 2: Q12 - Q22)
 * Temas: Metadatos de Step, JobLauncher, Objeto Job (Configuración y Parámetros), Definición de Steps.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U3_PART_02_QUESTIONS = [
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
      { id: "a", text: "1 : 1" },
      { id: "b", text: "1 : N (Un Job Execution tiene 1 a N Step Executions)" },
      { id: "c", text: "N : 1" },
      { id: "d", text: "N : M mediante una tabla intermedia" }
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
      { id: "a", text: "Definir las consultas JPQL de lectura paginada en los repositorios." },
      { id: "b", text: "Lanzar los procesos batch suministrando los parámetros de entrada deseados." },
      { id: "c", text: "Escribir físicamente los bloques de datos procesados en archivos planos." },
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
      { id: "a", text: "Es obligatoria en todas las versiones de Spring Boot para poder compilar cualquier bean de batch." },
      { id: "b", text: "Brinda la configuración por defecto del ecosistema batch, pero actualmente se considera opcional en versiones modernas de Spring Boot." },
      { id: "c", text: "Ha sido eliminada por completo y su uso provoca errores fatales en runtime." },
      { id: "d", text: "Solo se puede declarar dentro de clases que implementen la interfaz ItemWriter." }
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
      { id: "c", text: "El dialecto SQL nativo del motor relacional." },
      { id: "d", text: "La codificación de caracteres del archivo CSV de salida." }
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
      { id: "b", text: "El launcher bloquea indefinidamente el servidor web hasta que todos los chunks finalicen exitosamente." },
      { id: "c", text: "Se desactivan automáticamente todas las transacciones de base de datos en los steps." },
      { id: "d", text: "El Job se divide obligatoriamente en múltiples servidores remotos sin base de datos compartida." }
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
      { id: "a", text: "Es la clase encargada de deserializar cadenas JSON a entidades Java." },
      { id: "b", text: "Es el objeto que representa el proceso global que se debe llevar a cabo." },
      { id: "c", text: "Es un hilo del sistema operativo reservado exclusivamente para la base de datos." },
      { id: "d", text: "Es el registro puntual de una falla de red en la tabla de migraciones." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva señala explícitamente: «Es el objeto que representa el proceso que hay que llevar a cabo». (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q19",
    num: 19,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Job",
    type: "multiple",
    prompt: "Al configurar un objeto Job, ¿cuáles de los siguientes parámetros son de carácter obligatorio según el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "name" },
      { id: "b", text: "steps" },
      { id: "c", text: "jobRepository" },
      { id: "d", text: "incrementer" }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La diapositiva clasifica explícitamente a name, steps y jobRepository como parámetros «(obligatorio)». Por su parte, restartable, incrementer y listeners figuran como «(opcional)». (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q20",
    num: 20,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Job",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes parámetros de configuración de un Job son definidos como opcionales en la diapositiva? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "restartable" },
      { id: "b", text: "incrementer" },
      { id: "c", text: "listeners" },
      { id: "d", text: "steps" }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "En la diapositiva 6, restartable, incrementer y listeners se encuentran expresamente categorizados como «(opcional)», mientras que steps es obligatorio. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q21",
    num: 21,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Job",
    type: "single",
    prompt: "¿Para qué se utiliza el parámetro opcional incrementer en la configuración de un Job?",
    options: [
      { id: "a", text: "Para incrementar el tamaño del chunk dinámicamente cuando hay memoria disponible." },
      { id: "b", text: "Para generar automáticamente nuevos identificadores de parámetros (por ejemplo un contador de corridas o timestamp) permitiendo iniciar nuevas instancias del Job sin duplicar parámetros manualmente." },
      { id: "c", text: "Para sumar la cantidad de registros leídos en el ItemReader." },
      { id: "d", text: "Para multiplicar el número de pods de Kubernetes donde se ejecuta la aplicación." }
    ],
    correctAnswers: ["b"],
    explanation: "Un JobParametersIncrementer permite encadenar corridas consecutivas variando automáticamente un parámetro (como un ID secuencial o fecha), creando nuevas JobInstance sin violar la unicidad de parámetros. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q22",
    num: 22,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Steps",
    type: "single",
    prompt: "¿Cómo define el material a un Step dentro de la arquitectura de Spring Batch?",
    options: [
      { id: "a", text: "Como un script DDL que ejecuta mutaciones en el esquema de persistencia." },
      { id: "b", text: "Como una unidad de trabajo que representa un aspecto o fase del proceso total." },
      { id: "c", text: "Como el hilo daemon responsable de vigilar el consumo de CPU del servidor." },
      { id: "d", text: "Como una anotación de Spring encargada de convertir URLs REST a métodos Java." }
    ],
    correctAnswers: ["b"],
    explanation: "La definición textual de la diapositiva indica: «Cada Step representa una unidad de trabajo, un aspecto del proceso total». (Diapositiva 7)",
    diagram: null,
    points: 1
  }
];
