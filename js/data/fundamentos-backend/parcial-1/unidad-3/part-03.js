/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 3 (Parte 3: Q23 - Q32)
 * Temas: Steps (Secuencia y Processor), Readers (Interfaces e Implementaciones), Writers (Chunk y EntityManager), JobExecutionListener.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U3_PART_03_QUESTIONS = [
  {
    id: "fb-p1-u3-q23",
    num: 23,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Steps",
    type: "single",
    prompt: "En la ejecución de un Job compuesto por múltiples Steps, ¿cuál es la forma de ejecución predeterminada entre ellos?",
    options: [
      { id: "a", text: "Se ejecutan de manera simultánea en hilos aleatorios no coordinados." },
      { id: "b", text: "Se ejecutan de manera secuencial, uno a continuación de otro." },
      { id: "c", text: "Solo se ejecuta el primer Step y los subsiguientes quedan descartados." },
      { id: "d", text: "Se ejecutan en orden inverso al declarado en la configuración del Job." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva especifica claramente respecto a los Steps que: «Se ejecutan de manera secuencial». (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q24",
    num: 24,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Steps - ItemProcessor",
    type: "single",
    prompt: "¿Cuál es la responsabilidad puntual asignada al ItemProcessor dentro de un Step?",
    options: [
      { id: "a", text: "Leer los registros directamente desde la fuente física de entrada." },
      { id: "b", text: "Realizar el procesamiento, transformación o validación sobre los ítems del chunk que se está procesando." },
      { id: "c", text: "Hacer el commit final de los datos en la base de datos de destino." },
      { id: "d", text: "Registrar los códigos de error HTTP en la tabla BATCH_JOB_EXECUTION." }
    ],
    correctAnswers: ["b"],
    explanation: "El ItemProcessor tiene como rol tomar cada ítem leído y aplicar sobre él la lógica de negocio o transformación antes de pasarlo al componente de escritura. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q25",
    num: 25,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Readers",
    type: "single",
    prompt: "Al examinar la interfaz ItemReader<T> de Spring Batch:\n\npublic interface ItemReader<T> {\n    T read() throws Exception;\n}\n\n¿Cuál es la mecánica de funcionamiento de su método read()?",
    options: [
      { id: "a", text: "Lee la totalidad de la base de datos de una sola vez y retorna una colección con todos los registros." },
      { id: "b", text: "Retorna un único ítem T cada vez que es invocado, o devuelve null cuando no quedan más elementos por leer." },
      { id: "c", text: "Retorna un arreglo de tamaño fijo que coincide exactamente con el total de pasos configurados en el Job." },
      { id: "d", text: "Escribe los datos leídos directamente en un archivo de salida en disco." }
    ],
    correctAnswers: ["b"],
    explanation: "El contrato de ItemReader establece que read() procesa y entrega un elemento a la vez (T). Spring Batch invoca este método de forma iterativa hasta reunir un chunk completo o hasta recibir null, lo que señaliza el fin de los datos. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q26",
    num: 26,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Readers",
    type: "single",
    prompt: "¿Qué tipo de fuentes de datos está diseñado para leer el componente FlatFileItemReader según el material?",
    options: [
      { id: "a", text: "Tablas distribuidas en bases de datos NoSQL basadas en grafos." },
      { id: "b", text: "Archivos de texto plano, ya sea con formato delimitado (CSV) o de ancho fijo." },
      { id: "c", text: "Mensajes binarios comprimidos provenientes exclusivamente de sockets TCP." },
      { id: "d", text: "Encabezados HTTP de peticiones REST interceptadas por un controlador." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica textualmente que FlatFileItemReader: «lee archivos de texto plano, sea CSV o de ancho fijo». (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q27",
    num: 27,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Readers",
    type: "single",
    prompt: "¿Cómo opera el lector JpaPagingItemReader (o su variante RepositoryItemReader) al consultar información de la base de datos?",
    options: [
      { id: "a", text: "Carga toda la tabla a memoria en una única consulta SQL masiva sin límites." },
      { id: "b", text: "Trae los datos de a páginas, realizando una consulta de base de datos por cada página requerida." },
      { id: "c", text: "Lee los datos a través de una cola de mensajería AMQP intermediada por RabbitMQ." },
      { id: "d", text: "Lee exclusivamente archivos de texto almacenados en carpetas compartidas del sistema." }
    ],
    correctAnswers: ["b"],
    explanation: "El material indica que JpaPagingItemReader «trae los datos de a páginas (una consulta por página)», lo cual optimiza drásticamente el uso de memoria RAM en el servidor de aplicaciones. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
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
    prompt: "Al contrastar la interfaz ItemWriter<T> con ItemReader<T>:\n\npublic interface ItemWriter<T> {\n    void write(Chunk<? extends T> chunk) throws Exception;\n}\n\n¿Cuál es la principal diferencia funcional en la forma en que interactúan con los datos?",
    options: [
      { id: "a", text: "El Reader procesa colecciones completas y el Writer procesa registros individuales uno a uno." },
      { id: "b", text: "El Reader lee elemento por elemento (T), mientras que el Writer recibe y persiste un bloque completo (Chunk<? extends T>)." },
      { id: "c", text: "El Reader solo interactúa con archivos planos y el Writer solo con bases de datos SQL." },
      { id: "d", text: "El Writer se ejecuta antes de que el Reader comience la lectura de los datos." }
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
      { id: "a", text: "Escribe sentencias SQL concatenadas directamente en un socket raw de red." },
      { id: "b", text: "Escribe en la base de datos utilizando el EntityManager de JPA." },
      { id: "c", text: "Exporta los datos a un archivo CSV para que el motor de base de datos los importe con scripts externos." },
      { id: "d", text: "Invoca a una cola de mensajería JMS para que esta realice la inserción diferida." }
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
      { id: "a", text: "Persistir entidades relacionales gestionando claves primarias auto-incrementales." },
      { id: "b", text: "Escribir el resultado del procesamiento en archivos de texto plano." },
      { id: "c", text: "Enviar notificaciones push a dispositivos móviles a través de HTTP/2." },
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
    prompt: "¿Cuáles son los dos métodos fundamentales que definen el ciclo de vida de un Job en la interfaz JobExecutionListener?",
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
  }
];
