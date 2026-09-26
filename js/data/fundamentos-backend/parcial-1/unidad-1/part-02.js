/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 1 (Parte 2: Q12 - Q21)
 * Temas: Protocolo HTTP (Interacción Cliente-Servidor, URLs, Métodos HTTP, Encabezados HTTP).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U1_PART_02_QUESTIONS = [
  {
    id: "fb-p1-u1-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP",
    type: "single",
    prompt: "En el modelo de comunicación del protocolo HTTP mostrado, ¿cómo interactúan el cliente y el servidor?",
    options: [
      { id: "a", text: "El cliente envía un request HTTP al servidor y a partir de este obtiene una respuesta (response)." },
      { id: "b", text: "El servidor emite solicitudes sin requerimiento previo y el cliente decide si devuelve una confirmación." },
      { id: "c", text: "La base de datos y el cliente dialogan directamente omitiendo la participación del servidor web." },
      { id: "d", text: "La comunicación es exclusivamente unidireccional y el servidor nunca responde a las peticiones del cliente." }
    ],
    correctAnswers: ["a"],
    explanation: "El protocolo opera bajo el patrón cliente-servidor basado en solicitud-respuesta: el cliente inicia la interacción mediante una request y el servidor procesa y retorna una response. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - URLs",
    type: "single",
    prompt: "En la estructura de una URL, ¿qué función cumple el «Path» según la definición del material?",
    options: [
      { id: "a", text: "Indica si la conexión utiliza cifrado seguro mediante certificados SSL/TLS." },
      { id: "b", text: "Representa la ruta específica del recurso que se está solicitando al servidor." },
      { id: "c", text: "Define la lista de variables opcionales delimitadas por signos de interrogación." },
      { id: "d", text: "Contiene la dirección IP o dominio al que se desea dirigir la conexión de red." }
    ],
    correctAnswers: ["b"],
    explanation: "El material define «Path» como «la ruta del recurso que se está pidiendo al servidor». (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - URLs",
    type: "single",
    prompt: "Dada la URL de ejemplo https://www.freecodecamp.org/news/search?query=svg, ¿cuál es la correspondencia exacta de sus partes según la diapositiva?",
    options: [
      { id: "a", text: "Scheme: https | Host: www.freecodecamp.org | Path: /news/search | Query: ?query=svg" },
      { id: "b", text: "Scheme: www.freecodecamp.org | Host: https | Path: ?query=svg | Query: /news/search" },
      { id: "c", text: "Scheme: https | Host: /news/search | Path: www.freecodecamp.org | Query: query=svg" },
      { id: "d", text: "Scheme: http | Host: freecodecamp.org | Path: /news | Query: search?query=svg" }
    ],
    correctAnswers: ["a"],
    explanation: "De acuerdo con la descomposición gráfica mostrada en la diapositiva: el scheme es el protocolo (https), el host es el destino (www.freecodecamp.org), el path es la ruta al recurso (/news/search) y la query corresponde a los parámetros (?query=svg). (Diapositiva 8)",
    diagram: null,
    points: 1
  },
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
      { id: "a", text: "Solicitar al servidor que elimine permanentemente un registro de la base de datos." },
      { id: "b", text: "Preguntar al servidor por el estado (tamaño, disponibilidad) de un recurso sin solicitar su contenido completo." },
      { id: "c", text: "Reemplazar todos los datos del recurso existente por un nuevo payload JSON." },
      { id: "d", text: "Autenticar las credenciales del usuario antes de otorgar acceso al sistema." }
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
      { id: "a", text: "POST se utiliza para consultar datos y PUT para darlos de baja." },
      { id: "b", text: "POST solicita al servidor crear un nuevo recurso, mientras que PUT solicita editar/actualizar un recurso existente." },
      { id: "c", text: "POST se limita a enviar cabeceras y PUT a recibir archivos adjuntos binarios." },
      { id: "d", text: "POST es un método exclusivo de microservicios y PUT pertenece a arquitecturas monolíticas." }
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
      { id: "c", text: "Borra las credenciales de sesión en el navegador cliente." },
      { id: "d", text: "Vacía la caché del servidor web sin alterar la base de datos." }
    ],
    correctAnswers: ["a"],
    explanation: "La definición en la tabla indica textualmente: «Asks the server to delete a resource». (Diapositiva 9)",
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
      { id: "a", text: "Transmitir de forma obligatoria todo el conjunto masivo de datos de las entidades del negocio." },
      { id: "b", text: "Proveer información adicional que puede ser usada para procesar la petición o personalizar la respuesta." },
      { id: "c", text: "Definir exclusivamente la dirección física del hardware donde reside el servidor web." },
      { id: "d", text: "Sustituir el uso de métodos HTTP por identificadores numéricos binarios." }
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
      { id: "c", text: "Cualquier nuevo encabezado requiere la aprobación explícita de un comité internacional de estándares web." },
      { id: "d", text: "Los encabezados personalizados solo son válidos si la conexión se establece a través de HTTP sin cifrado (puerto 80)." }
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
