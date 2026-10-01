/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 03 (Preguntas 15 a 21)
 * Temas: Protocolo HTTP - URLs (Query, delimitadores ? y &),
 * Métodos HTTP (HEAD, POST vs PUT, DELETE),
 * Encabezados HTTP (Propósito, Extensibilidad, Header Accept).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "fb-p1-u1-q15",
    num: 15,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - URLs",
    type: "single",
    prompt: "¿Qué caracteres delimitan el inicio y la concatenación de parámetros en la sección «Query» de una URL?",
    options: [
      { id: "a", text: "Comienza con / y cada atributo se une con ," },
      { id: "b", text: "Comienza con ? y cada atributo se une con &" },
      { id: "c", text: "Comienza con # y cada atributo se une con ;" },
      { id: "d", text: "Comienza con ! y cada atributo se une con %" }
    ],
    correctAnswers: ["b"],
    explanation: "El material señala que la Query «comienza con '?' y cada atributo se une con '&'». (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q16",
    num: 16,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Métodos",
    type: "single",
    prompt: "Según la tabla de métodos HTTP del material, ¿cuál es el propósito específico del método HEAD?",
    options: [
      { id: "a", text: "Indicar al servidor que debe suprimir permanentemente el registro asociado al recurso de la base de datos." },
      { id: "b", text: "Preguntar al servidor por el estado (tamaño, disponibilidad) de un recurso sin solicitar su contenido completo." },
      { id: "c", text: "Reemplazar la totalidad del contenido del recurso existente mediante la carga de un nuevo payload en JSON." },
      { id: "d", text: "Transmitir las credenciales de autorización para verificar la identidad del usuario antes de otorgar acceso." }
    ],
    correctAnswers: ["b"],
    explanation: "La tabla define HEAD como: «Asks the server for status (size, availability) of a resource», permitiendo inspeccionar metadatos en los encabezados sin descargar el cuerpo. (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q17",
    num: 17,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Métodos",
    type: "single",
    prompt: "Según las definiciones dadas en la tabla de la diapositiva, ¿cuál es la diferencia de propósito entre POST y PUT?",
    options: [
      { id: "a", text: "POST se destina a la consulta masiva de datos en el servidor, mientras que PUT se enfoca en darlos de baja lógicamente." },
      { id: "b", text: "POST solicita al servidor crear un nuevo recurso, mientras que PUT solicita editar/actualizar un recurso existente." },
      { id: "c", text: "POST envía metadatos exclusivamente en las cabeceras HTTP, mientras que PUT transmite archivos binarios en el cuerpo." },
      { id: "d", text: "POST opera de manera exclusiva en entornos de microservicios, mientras que PUT se restringe a arquitecturas monolíticas." }
    ],
    correctAnswers: ["b"],
    explanation: "La tabla define: POST: «Asks the server to create a new resource» y PUT: «Asks the server to edit/update an existing resource». (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q18",
    num: 18,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - Métodos",
    type: "single",
    prompt: "¿Cuál de las siguientes afirmaciones describe con precisión el método DELETE de acuerdo con la tabla presentada?",
    options: [
      { id: "a", text: "Solicita al servidor remover o eliminar un recurso determinado." },
      { id: "b", text: "Modifica el estado del recurso marcándolo como temporalmente inactivo." },
      { id: "c", text: "Invalida y borra las credenciales de sesión activas en el cliente web." },
      { id: "d", text: "Revoca los privilegios de escritura sobre el directorio raíz de la API." }
    ],
    correctAnswers: ["a"],
    explanation: "La tabla define DELETE textualmente como: «Asks the server to remove a resource». (Diapositiva 9)",
    diagram: null,
    points: 1
  },
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
  }
];
