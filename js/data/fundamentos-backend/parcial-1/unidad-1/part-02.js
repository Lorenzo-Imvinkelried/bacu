/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 02 (Preguntas 10 a 18)
 * Temas: Inversión de Control / Inyección de Dependencias, Protocolo HTTP (Elementos de request,
 * Modelo Cliente-Servidor, Estructura de URLs: Path, Scheme, Host, Query, Delimitadores,
 * Métodos HTTP: HEAD, POST vs PUT, DELETE).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "fb-p1-u1-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Inyección de Dependencias",
    type: "single",
    prompt: "¿Cómo se materializa el principio de Inversión de Control / Inyección de Dependencias en relación con el Application Context?",
    options: [
      { id: "a", text: "Los desarrolladores deben instanciar manualmente cada servicio mediante la palabra clave new en cada controlador." },
      { id: "b", text: "No se crean componentes manualmente, sino que se solicitan directamente al contexto de la aplicación." },
      { id: "c", text: "El motor de base de datos asume la instanciación de los controladores cada vez que ingresa una petición HTTP." },
      { id: "d", text: "Los clientes externos configuran e instancian directamente las clases de servicio previo a consumir sus métodos." }
    ],
    correctAnswers: ["b"],
    explanation: "El material explicita: «No creamos componentes, solo los pedimos al contexto -> Inyección de Dependencias», delegando el ciclo de vida e instanciación de los objetos en el contenedor de Spring. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP",
    type: "multiple",
    prompt: "¿Cuáles son los cuatro elementos fundamentales que componen un request HTTP válido según la presentación? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "La URL" },
      { id: "b", text: "El método HTTP" },
      { id: "c", text: "Lista de encabezados (headers)" },
      { id: "d", text: "El cuerpo (body) del request" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva especifica literalmente los cuatro componentes de una petición HTTP válida: «La URL», «El método HTTP», «Lista de encabezados (headers)» y «El cuerpo (body) del request». (Diapositiva 7)",
    diagram: null,
    points: 1
  },
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
      { id: "c", text: "El cliente dialoga de forma directa con la base de datos omitiendo la participación del servidor web." },
      { id: "d", text: "La comunicación es puramente unidireccional por lo que el servidor nunca retorna respuestas al cliente." }
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
      { id: "a", text: "Especifica el protocolo y nivel de cifrado de seguridad aplicado a la transmisión web." },
      { id: "b", text: "Representa la ruta específica del recurso que se está solicitando al servidor." },
      { id: "c", text: "Define el conjunto de parámetros y variables opcionales añadidos al final de la petición." },
      { id: "d", text: "Identifica el nombre de host o dirección IP del servidor al que se dirige la solicitud." }
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
      { id: "d", text: "Purga la memoria caché del servidor web sin modificar los datos reales." }
    ],
    correctAnswers: ["a"],
    explanation: "La definición en la tabla indica textualmente: «Asks the server to delete a resource». (Diapositiva 9)",
    diagram: null,
    points: 1
  }
];
