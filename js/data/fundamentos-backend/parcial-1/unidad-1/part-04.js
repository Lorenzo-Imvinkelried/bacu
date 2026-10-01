/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 04 (Preguntas 22 a 28)
 * Temas: Protocolo HTTP - Request Body (Content-Type, Formatos de datos, cURL flag -d),
 * Response HTTP (Códigos de estado: 201 Created, 404 vs 500, Clasificación por centenas),
 * Componentes de Response, Introducción a Project Lombok.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart04 = [
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
    prompt: `Al analizar el comando cURL de ejemplo:
curl -X POST https://api.ejemplo.com/usuarios -H "Content-Type: application/json" -H "Authorization: Bearer TU_TOKEN_AQUI" -d '{ "nombre": "Juan Pérez", ... }'
¿Qué elemento del request HTTP representa el flag -d?`,
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
    explanation: `Según la tabla provista: 200 es OK, 201 es Created, 202 es Accepted y 203 es Non-Authoritative Information. (Diapositiva 12)

---

### Resumen rápido

| Rango | Familia | Responsable / Significado | Ejemplo típico |
| --- | --- | --- | --- |
| **1xx** | Informativo | La solicitud fue recibida y continúa el proceso | \`100 Continue\` |
| **2xx** | Éxito | La acción se recibió, entendió y procesó con éxito | \`200 OK\`, \`201 Created\` |
| **3xx** | Redirección | El recurso cambió de ubicación o requiere otra acción | \`301 Moved\`, \`304 Not Modified\` |
| **4xx** | Error de Cliente (navegador) | El cliente mandó mal algo o pidió algo que no existe | \`400 Bad Request\`, \`404 Not Found\` |
| **5xx** | Error de Servidor | El servidor tuvo un problema interno al procesar | \`500 Internal Error\`, \`503 Unavailable\` |`,
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
    explanation: `En la diapositiva: 404 = «Not Found: The requested resource was not found on the server», mientras que 500 = «Internal Server Error: The server encountered an error while processing the request». (Diapositiva 12)

La clasificación estándar por centenas es:

* **3xx (Redirección):** No es error de cliente. Indica que el cliente debe tomar una acción adicional para completar la solicitud (por ejemplo, \`301 Moved Permanently\` o \`302 Found\`).
* **4xx (Error del Cliente):** Indica que el problema proviene de la solicitud enviada por el cliente (sintaxis inválida, falta de autenticación, recurso inexistente, etc.).
* **404 (Not Found):** Es un código específico dentro de esta familia que significa **recurso no encontrado**.
* Otros ejemplos: \`400 Bad Request\` (solicitud mal formada), \`401 Unauthorized\` (falta autenticación), \`403 Forbidden\` (sin permisos).
* **5xx (Error del Servidor):** Indica que el servidor falló al intentar procesar una solicitud válida.
* **500 (Internal Server Error):** Error genérico e inesperado en el backend al ejecutar la lógica.
* Otros ejemplos: \`502 Bad Gateway\`, \`503 Service Unavailable\`, \`504 Gateway Timeout\`.

---

### Resumen rápido

| Rango | Familia | Responsable / Significado | Ejemplo típico |
| --- | --- | --- | --- |
| **1xx** | Informativo | La solicitud fue recibida y continúa el proceso | \`100 Continue\` |
| **2xx** | Éxito | La acción se recibió, entendió y procesó con éxito | \`200 OK\`, \`201 Created\` |
| **3xx** | Redirección | El recurso cambió de ubicación o requiere otra acción | \`301 Moved\`, \`304 Not Modified\` |
| **4xx** | Error de Cliente (navegador) | El cliente mandó mal algo o pidió algo que no existe | \`400 Bad Request\`, \`404 Not Found\` |
| **5xx** | Error de Servidor | El servidor tuvo un problema interno al procesar | \`500 Internal Error\`, \`503 Unavailable\` |`,
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
    prompt: `En el ejemplo de respuesta HTTP presentado en la diapositiva:
HTTP/1.1 200 OK
Date: Sun, 28 Mar 2023 10:15:00 GMT
Content-Type: application/json
Server: Apache/2.4.39...
¿Qué componentes integran esta estructura de respuesta? (Seleccione todas las opciones correctas)`,
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
      { id: "a", text: "Reemplazar los motores de base de datos relacionales por esquemas de persistencia optimizados en memoria interna." },
      { id: "b", text: "Reducir el código repetitivo (boilerplate), logrando clases más cortas, legibles y menos propensas a errores." },
      { id: "c", text: "Habilitar la ejecución directa de código en la máquina virtual de Java sin necesidad de compilar a bytecode." },
      { id: "d", text: "Implementar cifrado automático sobre los atributos privados para impedir accesos indebidos a nivel de memoria." }
    ],
    correctAnswers: ["b"],
    explanation: "Lombok elimina la necesidad de escribir manualmente getters, setters, constructores, equals y hashCode, evitando código redundante (boilerplate) y simplificando el mantenimiento. (Diapositiva 13)",
    diagram: null,
    points: 1
  }
];
