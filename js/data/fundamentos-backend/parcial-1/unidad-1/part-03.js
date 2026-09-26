/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 1 (Parte 3: Q22 - Q31)
 * Temas: Protocolo HTTP (Request Body, Response y Códigos de Estado), Project Lombok, Flyway / Migraciones.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U1_PART_03_QUESTIONS = [
  {
    id: "fb-p1-u1-q22",
    num: 22,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Request Body",
    type: "single",
    prompt: "¿En qué encabezado HTTP se define el formato de los datos que viajan en el cuerpo (Request Body) de una petición?",
    options: [
      { id: "a", text: "Authorization" },
      { id: "b", text: "Content-Type" },
      { id: "c", text: "User-Agent" },
      { id: "d", text: "Connection" }
    ],
    correctAnswers: ["b"],
    explanation: "El material señala explícitamente: «Pueden tener distintos formatos, establecidos en el encabezado content-type». (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q23",
    num: 23,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Request Body",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes son formatos de datos válidos mencionados en el material para el Request Body? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "application/json" },
      { id: "b", text: "multipart/form-data" },
      { id: "c", text: "application/xml" },
      { id: "d", text: "binary/assembly-code" }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La diapositiva lista textualmente: application/json, multipart/form-data, application/xml y etc.. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q24",
    num: 24,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Request Body",
    type: "single",
    prompt: "Al analizar el comando cURL de ejemplo:\ncurl -X POST https://api.ejemplo.com/usuarios -H \"Content-Type: application/json\" -H \"Authorization: Bearer TU_TOKEN_AQUI\" -d '{ \"nombre\": \"Juan Pérez\", ... }'\n¿Qué elemento del request HTTP representa el flag -d?",
    options: [
      { id: "a", text: "Los encabezados de autenticación segura." },
      { id: "b", text: "El método HTTP que se ejecutará en la llamada." },
      { id: "c", text: "El cuerpo (body) de la petición que contiene los datos a enviar." },
      { id: "d", text: "La ruta del recurso (Path) dentro del servidor." }
    ],
    correctAnswers: ["c"],
    explanation: "En cURL, -d (data) especifica los datos que compondrán el cuerpo de la petición (Request Body), en este caso una cadena JSON con los datos del usuario. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q25",
    num: 25,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Response",
    type: "single",
    prompt: "De acuerdo con la tabla de códigos de estado de respuesta HTTP del material, ¿qué significa un código 201?",
    options: [
      { id: "a", text: "OK" },
      { id: "b", text: "Created" },
      { id: "c", text: "Accepted" },
      { id: "d", text: "Non-Authoritative Information" }
    ],
    correctAnswers: ["b"],
    explanation: "Según la tabla provista: 200 es OK, 201 es Created, 202 es Accepted y 203 es Non-Authoritative Information. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q26",
    num: 26,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Response",
    type: "single",
    prompt: "¿Qué diferencia existe entre un código 404 y un código 500 según sus definiciones en la diapositiva?",
    options: [
      { id: "a", text: "El 404 representa una petición exitosa y el 500 una petición que requiere redirección." },
      { id: "b", text: "El 404 indica que el recurso solicitado no fue encontrado en el servidor; el 500 indica un error interno del servidor al procesar el request." },
      { id: "c", text: "El 404 advierte problemas en el cable de red y el 500 problemas con el navegador del cliente." },
      { id: "d", text: "El 404 se genera por fallas en la base de datos y el 500 por errores ortográficos en la URL." }
    ],
    correctAnswers: ["b"],
    explanation: "En la diapositiva: 404 = «Not Found: The requested resource was not found on the server», mientras que 500 = «Internal Server Error: The server encountered an error while processing the request». (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q27",
    num: 27,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Response",
    type: "multiple",
    prompt: "En el ejemplo de respuesta HTTP presentado en la diapositiva:\nHTTP/1.1 200 OK\nDate: Sun, 28 Mar 2023 10:15:00 GMT\nContent-Type: application/json\nServer: Apache/2.4.39...\n¿Qué componentes integran esta estructura de respuesta? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Una línea de estado con el código y mensaje de resultado (200 OK)" },
      { id: "b", text: "Una lista de encabezados con metadatos sobre el servidor y el contenido" },
      { id: "c", text: "Una sección de query con parámetros de búsqueda delimitados por ?" },
      { id: "d", text: "Un cuerpo (body) que contiene los datos en formato JSON" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Las respuestas HTTP constan de línea de estado, encabezados (headers) y el cuerpo (body) con los datos solicitados. La query corresponde exclusivamente a las URLs enviadas en las peticiones (requests). (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q28",
    num: 28,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Project Lombok",
    type: "single",
    prompt: "¿Cuál es el beneficio primordial de incorporar Project Lombok en las clases de modelo en Java?",
    options: [
      { id: "a", text: "Reemplazar el motor de base de datos relacional por almacenamiento en memoria." },
      { id: "b", text: "Reducir el código repetitivo (boilerplate), logrando clases más cortas, legibles y menos propensas a errores." },
      { id: "c", text: "Permitir que la máquina virtual de Java ejecute código sin necesidad de compilar." },
      { id: "d", text: "Cifrar automáticamente los atributos privados para que no puedan ser leídos en memoria." }
    ],
    correctAnswers: ["b"],
    explanation: "Lombok elimina la necesidad de escribir manualmente getters, setters, constructores, equals y hashCode, evitando código redundante (boilerplate) y simplificando el mantenimiento. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q29",
    num: 29,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Project Lombok",
    type: "single",
    prompt: "Al utilizar la combinación de anotaciones @Data, @NoArgsConstructor y @AllArgsConstructor de Lombok en una clase:",
    options: [
      { id: "a", text: "Se genera automáticamente el constructor por defecto sin argumentos, el constructor con todos los argumentos, y los getters, setters, equals, hashCode y toString." },
      { id: "b", text: "La clase queda bloqueada como inmutable y no se pueden leer ni escribir sus propiedades." },
      { id: "c", text: "Solo se generan los métodos constructores, siendo necesario declarar los getters y setters manualmente." },
      { id: "d", text: "Se crea una réplica de la tabla SQL de inmediato en la base de datos sin necesidad de JPA." }
    ],
    correctAnswers: ["a"],
    explanation: "@NoArgsConstructor genera el constructor vacío, @AllArgsConstructor crea el constructor con todos los campos, y @Data agrupa @Getter, @Setter, @ToString, @EqualsAndHashCode y @RequiredArgsConstructor. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q30",
    num: 30,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Project Lombok",
    type: "single",
    prompt: "Según la diapositiva, ¿por qué Lombok aporta «escalabilidad» al modelo de datos?",
    options: [
      { id: "a", text: "Porque permite particionar la base de datos en múltiples nodos automáticamente." },
      { id: "b", text: "Porque si se agrega un nuevo atributo, Lombok genera automáticamente sus métodos correspondientes (getter, setter, etc.) sin mantenimiento manual." },
      { id: "c", text: "Porque aumenta de forma exponencial la velocidad de procesamiento de los hilos de la CPU." },
      { id: "d", text: "Porque convierte las clases síncronas en servicios de streaming en tiempo real." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto destaca: «Escalable: si agrego un atributo, automáticamente genera el getter, setter, etc.», lo que ahorra refactorizaciones propensas a olvidos u omisiones en constructores y métodos estándar. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q31",
    num: 31,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Flyway / Migraciones",
    type: "single",
    prompt: "¿Cuál es el propósito central de utilizar una herramienta como Flyway en un proyecto backend?",
    options: [
      { id: "a", text: "Generar interfaces web reactivas a partir de archivos de estilos CSS." },
      { id: "b", text: "Manejar de forma controlada y versionada las mutaciones del esquema de la base de datos." },
      { id: "c", text: "Reemplazar por completo el uso del protocolo HTTP mediante conexiones binarias." },
      { id: "d", text: "Administrar la inyección de dependencias dentro del Application Context de Spring." }
    ],
    correctAnswers: ["b"],
    explanation: "El material indica que Flyway «permite manejar las mutaciones del esquema de base de datos» de manera ordenada y reproducible. (Diapositiva 14)",
    diagram: null,
    points: 1
  }
];
