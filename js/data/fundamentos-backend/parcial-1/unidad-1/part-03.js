/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 03 (Preguntas 19 a 27)
 * Temas: Protocolo HTTP (Headers: Propósito, Extensibilidad, Accept header;
 * Request Body: Formato, Content-Type, cURL flag -d; Response: Código 201, Códigos 404 vs 500, Componentes de Response).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "fb-p1-u1-q19",
    num: 19,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Headers",
    type: "single",
    prompt: "¿Cuál es el propósito de los encabezados (headers) en el protocolo HTTP según la diapositiva?",
    options: [
      { id: "a", text: "Transmitir obligatoriamente el conjunto masivo de datos de negocio pertenecientes a las entidades del dominio." },
      { id: "b", text: "Proveer información adicional que puede ser usada para procesar la petición o personalizar la respuesta." },
      { id: "c", text: "Identificar de forma exclusiva la dirección física de red y la arquitectura de hardware del servidor backend." },
      { id: "d", text: "Sustituir el método HTTP por secuencias binarias de control para acelerar el procesamiento de cada petición." }
    ],
    correctAnswers: ["b"],
    explanation: "Los headers contienen metadatos clave para la negociación de contenido, control de caché, autorización y configuración técnica de la comunicación. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q20",
    num: 20,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Headers",
    type: "single",
    prompt: "Respecto a la extensibilidad de los encabezados en el protocolo HTTP, ¿qué aclara el material de estudio?",
    options: [
      { id: "a", text: "Solo es legal utilizar los encabezados definidos en el estándar RFC original sin posibilidad alguna de crear otros." },
      { id: "b", text: "Se pueden utilizar nuevos encabezados personalizados, siempre que el cliente y el servidor estén de acuerdo." },
      { id: "c", text: "Cualquier nuevo encabezado requiere la aprobación previa de un organismo regulador de estándares de Internet." },
      { id: "d", text: "Los encabezados personalizados solo se permiten si la conexión se establece a través del protocolo HTTP inseguro." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto indica claramente: «El protocolo HTTP tiene encabezados definidos, pero se pueden utilizar nuevos, mientras que el cliente y el servidor estén de acuerdo». (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q21",
    num: 21,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Headers",
    type: "single",
    prompt: "En el ejemplo de request provisto (GET /api/data HTTP/1.1), ¿cuál de los encabezados indica el formato de contenido que el cliente espera recibir en la respuesta?",
    options: [
      { id: "a", text: "User-Agent: Mozilla/5.0..." },
      { id: "b", text: "Host: example.com" },
      { id: "c", text: "Accept: application/json" },
      { id: "d", text: "Cache-Control: no-cache" }
    ],
    correctAnswers: ["c"],
    explanation: "El encabezado Accept le comunica al servidor el tipo de medio MIME que el cliente es capaz de interpretar o prefiere recibir (en este caso, application/json). (Diapositiva 10)",
    diagram: null,
    points: 1
  },
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
      { id: "a", text: "La lista de encabezados y tokens para la autenticación de la petición." },
      { id: "b", text: "El método HTTP específico mediante el cual se ejecutará la operación." },
      { id: "c", text: "El cuerpo (body) de la petición que contiene los datos a enviar." },
      { id: "d", text: "La ruta relativa del recurso (Path) que se invoca dentro del servidor." }
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
      { id: "a", text: "El 404 indica que los parámetros enviados poseen errores sintácticos; el 500 indica que el usuario carece de permisos para acceder al sistema." },
      { id: "b", text: "El 404 indica que el recurso solicitado no fue encontrado en el servidor; el 500 indica un error interno del servidor al procesar el request." },
      { id: "c", text: "El 404 advierte que la conexión excedió el tiempo límite de respuesta; el 500 advierte que la pasarela o proxy intermedio no logró comunicarse." },
      { id: "d", text: "El 404 señala que faltan credenciales de autorización válidas; el 500 señala que existe una incompatibilidad de versión en el protocolo HTTP." }
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
      { id: "c", text: "Una sección de query con parámetros de filtrado delimitados por el signo ?" },
      { id: "d", text: "Un cuerpo (body) que contiene los datos en formato JSON" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Las respuestas HTTP constan de línea de estado, encabezados (headers) y el cuerpo (body) con los datos solicitados. La query corresponde exclusivamente a las URLs enviadas en las peticiones (requests). (Diapositiva 12)",
    diagram: null,
    points: 1
  }
];
