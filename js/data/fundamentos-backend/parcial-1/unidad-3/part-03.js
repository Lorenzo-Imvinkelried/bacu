/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 03 (Preguntas 19 a 27)
 * Temas: Job (Parámetros obligatorios y opcionales, parámetro incrementer),
 * Steps (Definición conceptual, orden de ejecución secuencial, ItemProcessor),
 * Readers (Interfaz ItemReader y método read(), FlatFileItemReader, JpaPagingItemReader).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
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
      { id: "a", text: "Para ajustar dinámicamente la capacidad del chunk y la memoria intermedia asignada a cada paso según la carga y disponibilidad de recursos del sistema." },
      { id: "b", text: "Para generar automáticamente nuevos identificadores de parámetros (por ejemplo un contador de corridas o timestamp) permitiendo iniciar nuevas instancias del Job sin duplicar parámetros manualmente." },
      { id: "c", text: "Para computar y registrar en tiempo real el volumen acumulado de registros leídos y procesados por el ItemReader dentro del contexto de ejecución." },
      { id: "d", text: "Para escalar horizontalmente la infraestructura aumentando de forma automática el número de réplicas y pods asignados a la tarea en el clúster." }
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
      { id: "a", text: "Como un script DDL encargado de aplicar modificaciones al esquema de base de datos." },
      { id: "b", text: "Como una unidad de trabajo que representa un aspecto o fase del proceso total." },
      { id: "c", text: "Como un hilo de fondo responsable de supervisar el uso de memoria en el servidor." },
      { id: "d", text: "Como una anotación de Spring encargada de convertir URLs REST a métodos Java." }
    ],
    correctAnswers: ["b"],
    explanation: "La definición textual de la diapositiva indica: «Cada Step representa una unidad de trabajo, un aspecto del proceso total». (Diapositiva 7)",
    diagram: null,
    points: 1
  },
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
      { id: "c", text: "Se ejecuta únicamente el primer Step y los restantes quedan omitidos." },
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
      { id: "a", text: "Leer y extraer secuencialmente los registros directamente desde el almacenamiento o fuente física de entrada." },
      { id: "b", text: "Realizar el procesamiento, transformación o validación sobre los ítems del chunk que se está procesando." },
      { id: "c", text: "Consolidar y comitear de forma transaccional el bloque de datos en el repositorio o base de destino." },
      { id: "d", text: "Persistir el historial de fallas y códigos de error HTTP dentro de la tabla BATCH_JOB_EXECUTION." }
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
    prompt: "Al examinar la interfaz ItemReader de Spring Batch:\n\npublic interface ItemReader<T> {\n  T read() throws Exception;\n}\n\n¿Cuál es la mecánica de funcionamiento de su método read()?",
    options: [
      { id: "a", text: "Lee la totalidad de la base de datos de una sola vez y retorna una colección con todos los registros." },
      { id: "b", text: "Retorna un único ítem T cada vez que es invocado, o devuelve null cuando no quedan más elementos por leer." },
      { id: "c", text: "Retorna un arreglo de tamaño fijo que coincide exactamente con el total de pasos configurados en el Job." },
      { id: "d", text: "Escribe directamente los registros leídos en un archivo de salida descartando el paso por el procesador." }
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
      { id: "a", text: "Colecciones distribuidas en motores de bases de datos NoSQL orientados a grafos." },
      { id: "b", text: "Archivos de texto plano, ya sea con formato delimitado (CSV) o de ancho fijo." },
      { id: "c", text: "Tramos de paquetes binarios comprimidos transmitidos mediante sockets de red TCP." },
      { id: "d", text: "Encabezados y metadatos de peticiones HTTP interceptadas en los controladores." }
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
      { id: "a", text: "Carga la totalidad de la tabla a memoria mediante una única consulta SQL masiva sin paginación." },
      { id: "b", text: "Trae los datos de a páginas, realizando una consulta de base de datos por cada página requerida." },
      { id: "c", text: "Extrae los registros a través de canales de mensajería asincrónica gestionados por RabbitMQ." },
      { id: "d", text: "Procesa secuencialmente archivos delimitados almacenados en el sistema de directorios local." }
    ],
    correctAnswers: ["b"],
    explanation: "El material indica que JpaPagingItemReader «trae los datos de a páginas (una consulta por página)», lo cual optimiza drásticamente el uso de memoria RAM en el servidor de aplicaciones. (Diapositiva 8)",
    diagram: null,
    points: 1
  }
];
