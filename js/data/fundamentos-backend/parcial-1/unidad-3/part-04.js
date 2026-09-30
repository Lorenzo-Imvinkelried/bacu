/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 04 (Preguntas 28 a 36)
 * Temas: Readers (AmqpItemReader, JmsItemReader),
 * Writers (Interfaz ItemWriter y método write(), JpaItemWriter, FlatFileItemWriter),
 * JobExecutionListener (Métodos beforeJob() y afterJob(), objeto JobExecution),
 * Ciclo de Ejecución (Punto de inicio, orden de fases en Step, evaluación tras persistir chunk).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart04 = [
  {
    id: "fb-p1-u3-q28",
    num: 28,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Readers",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes implementaciones de ItemReader mencionadas en la diapositiva se utilizan para consumir datos desde sistemas de colas de mensajería? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "AmqpItemReader" },
      { id: "b", text: "JmsItemReader" },
      { id: "c", text: "FlatFileItemReader" },
      { id: "d", text: "JpaPagingItemReader" }
    ],
    correctAnswers: ["a", "b"],
    explanation: "La diapositiva agrupa a AmqpItemReader y JmsItemReader bajo la descripción: «leen desde una cola de mensajes». (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q29",
    num: 29,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Writers",
    type: "single",
    prompt: "Al contrastar la interfaz ItemWriter con ItemReader:\n\npublic interface ItemWriter<T> {\n  void write(Chunk<? extends T> chunk) throws Exception;\n}\n\n¿Cuál es la principal diferencia funcional en la forma en que interactúan con los datos?",
    options: [
      { id: "a", text: "El Reader extrae colecciones completas en memoria, mientras que el Writer persiste registros individuales fila por fila." },
      { id: "b", text: "El Reader lee elemento por elemento (T), mientras que el Writer recibe y persiste un bloque completo (Chunk<? extends T>)." },
      { id: "c", text: "El Reader se limita a consumir archivos planos, mientras que el Writer opera exclusivamente sobre tablas relacionales SQL." },
      { id: "d", text: "El Writer inicializa las tablas de destino de forma previa a que el Reader comience la lectura de cualquier registro." }
    ],
    correctAnswers: ["b"],
    explanation: "La firma de ItemWriter recibe un objeto Chunk que agrupa todos los elementos leídos y procesados en esa iteración, escribiéndolos en bloque dentro de una misma transacción. (Diapositiva 8 y 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q30",
    num: 30,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Writers",
    type: "single",
    prompt: "¿Qué mecanismo utiliza la implementación JpaItemWriter (o RepositoryItemWriter) para almacenar las entidades en la base de datos relacional?",
    options: [
      { id: "a", text: "Ejecuta sentencias SQL concatenadas directamente sobre el socket de red." },
      { id: "b", text: "Escribe en la base de datos utilizando el EntityManager de JPA." },
      { id: "c", text: "Exporta los registros a un archivo intermedio para importación diferida." },
      { id: "d", text: "Encola los objetos en un broker JMS para su persistencia asincrónica." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva explicita que JpaItemWriter: «escribe en la base de datos utilizando el EntityManager». (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q31",
    num: 31,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Writers",
    type: "single",
    prompt: "¿Cuál es el propósito de FlatFileItemWriter según la clasificación del documento?",
    options: [
      { id: "a", text: "Persistir entidades en la base de datos gestionando claves autoincrementales." },
      { id: "b", text: "Escribir el resultado del procesamiento en archivos de texto plano." },
      { id: "c", text: "Transmitir eventos y notificaciones a clientes web mediante HTTP/2." },
      { id: "d", text: "Limpiar las tablas de metadatos de JobRepository antes de cada corrida." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica que FlatFileItemWriter: «escribe en archivos de texto plano». (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q32",
    num: 32,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobExecutionListener",
    type: "single",
    prompt: "¿Cuáles de los dos métodos fundamentales que definen el ciclo de vida de un Job en la interfaz JobExecutionListener?",
    options: [
      { id: "a", text: "initJob() y destroyJob()" },
      { id: "b", text: "beforeJob() y afterJob()" },
      { id: "c", text: "startStep() y stopStep()" },
      { id: "d", text: "onOpen() y onClose()" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva 10 detalla los dos métodos del ciclo de vida del listener del Job: beforeJob() (ejecutado antes de iniciar el procesamiento) y afterJob() (ejecutado al concluir el Job). (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q33",
    num: 33,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobExecutionListener",
    type: "single",
    prompt: "¿Qué tipo de información proporciona el objeto JobExecution que reciben los métodos de JobExecutionListener?",
    options: [
      { id: "a", text: "Credenciales de acceso, contraseñas del motor de persistencia y configuraciones de red en texto plano." },
      { id: "b", text: "Información sobre la ejecución del proceso (tales como estado de finalización, horarios, parámetros y contexto)." },
      { id: "c", text: "El volcado íntegro en memoria de la totalidad de registros y archivos planos pendientes de procesar." },
      { id: "d", text: "Los parámetros de red, topología de puertos y balanceadores de carga asignados al clúster de ejecución." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto indica textualmente: «JobExecution -> contiene información de la ejecución», permitiendo inspeccionar estados (BatchStatus, ExitStatus), excepciones lanzadas, tiempos de ejecución y parámetros. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q34",
    num: 34,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "De acuerdo con el diagrama de flujo del ciclo de ejecución, ¿cuál es la primera acción que tiene lugar al comenzar la ejecución de un Job con listeners configurados?",
    options: [
      { id: "a", text: "Reader: lee un chunk" },
      { id: "b", text: "beforeJob()" },
      { id: "c", text: "Writer: persiste el chunk" },
      { id: "d", text: "Processor: transforma cada item del chunk" }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama sitúa a beforeJob() como el punto inicial del flujo, ejecutándose previamente a cualquier lectura de chunks por parte de los steps. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q35",
    num: 35,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "Siguiendo el ciclo de procesamiento dentro de un Step, ¿cuál es el orden secuencial exacto de las fases para cada chunk?",
    options: [
      { id: "a", text: "Writer persiste el chunk -> Processor transforma cada item -> Reader lee un chunk" },
      { id: "b", text: "Reader lee un chunk -> Processor transforma cada item del chunk -> Writer persiste el chunk" },
      { id: "c", text: "Processor transforma cada item -> Writer persiste el chunk -> Reader lee un chunk" },
      { id: "d", text: "Reader lee un chunk -> Writer persiste el chunk -> Processor transforma cada item" }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama muestra el flujo: primero el Reader lee los elementos del chunk, luego el Processor transforma uno a uno los ítems leídos de ese chunk, y finalmente el Writer persiste el chunk consolidado. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "En el diagrama del ciclo de ejecución, ¿qué ocurre inmediatamente después de que el Writer persiste un chunk?",
    options: [
      { id: "a", text: "El Job finaliza automáticamente su ejecución independientemente de si aún quedan datos pendientes en la fuente de entrada." },
      { id: "b", text: "Se evalúa la condición «¿Quedan más chunks?»: si la respuesta es Sí, el flujo regresa a la lectura del siguiente chunk." },
      { id: "c", text: "Se interrumpe el Step para invocar obligatoriamente el método afterJob() y liberar las conexiones activas en el repositorio." },
      { id: "d", text: "Se depuran de forma irreversible los registros de estado almacenados en las tablas de metadatos del framework Spring Batch." }
    ],
    correctAnswers: ["b"],
    explanation: "Tras persistir el chunk, el flujo se bifurca en la decisión «¿Quedan más chunks?». De haber más datos disponibles (Sí), vuelve al Reader para procesar el nuevo bloque. (Diapositiva 11)",
    diagram: null,
    points: 1
  }
];
