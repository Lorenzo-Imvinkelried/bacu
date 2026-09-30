/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 02 (Preguntas 10 a 18)
 * Temas: Diseño de APIs REST (Métodos HTTP para acciones, Códigos de estado, Swagger 400,
 * Sustantivos vs Verbos, Endpoints correctos e incorrectos, Convenciones y Casings: kebab-case,
 * camelCase / snake_case en body, URLs predecibles: PUT /users/123).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "fb-p1-u2-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Fundamentos",
    type: "single",
    prompt: "Dentro del diseño de APIs REST, ¿cuál es el mecanismo destinado a representar las acciones sobre los recursos?",
    options: [
      { id: "a", text: "Los segmentos léxicos definidos en las rutas de la URL." },
      { id: "b", text: "Los métodos HTTP (verbos como GET, POST, PUT, DELETE)." },
      { id: "c", text: "Los encabezados personalizados de autorización del cliente." },
      { id: "d", text: "Los identificadores primarios y claves del modelo relacional." }
    ],
    correctAnswers: ["b"],
    explanation: "Los métodos HTTP (verbos de protocolo) representan la acción a efectuar sobre el recurso referenciado en el endpoint. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Fundamentos",
    type: "single",
    prompt: "¿Qué elemento debe utilizarse para comunicar el resultado de una operación en una API REST?",
    options: [
      { id: "a", text: "Mensajes de error personalizados codificados en los parámetros de la URL." },
      { id: "b", text: "Los códigos de estado del protocolo HTTP (HTTP status codes)." },
      { id: "c", text: "Banderas booleanas obligatorias agregadas en la cabecera de la respuesta." },
      { id: "d", text: "Cierres de conexión TCP acompañados de códigos de excepción de sockets." }
    ],
    correctAnswers: ["b"],
    explanation: "El material explicita: «Utilizar los códigos de estado para representar el resultado» (por ejemplo 200 para éxito, 400 para error de validación, etc.). (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Fundamentos",
    type: "single",
    prompt: "En el ejemplo de Swagger mostrado para la operación GET /pet/findByStatus, ¿qué código de respuesta HTTP se especifica formalmente para indicar un «Invalid status value»?",
    options: [
      { id: "a", text: "200" },
      { id: "b", text: "400" },
      { id: "c", text: "500" },
      { id: "d", text: "201" }
    ],
    correctAnswers: ["b"],
    explanation: "En la captura de Swagger de la diapositiva 5, el código asociado a «successful operation» es 200 y el asociado a «Invalid status value» es 400. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Sustantivos vs Verbos",
    type: "single",
    prompt: "En el diseño de rutas de una API REST, ¿cuál es la buena práctica fundamental respecto al uso de términos léxicos?",
    options: [
      { id: "a", text: "Usar verbos de acción explícitos." },
      { id: "b", text: "Usar sustantivos, no verbos." },
      { id: "c", text: "Combinar sustantivos con adjetivos." },
      { id: "d", text: "Incluir nombres de clases Java." }
    ],
    correctAnswers: ["b"],
    explanation: "La regla destacada en la diapositiva indica de forma taxativa: «Usar sustantivos, no verbos». (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Sustantivos vs Verbos",
    type: "single",
    prompt: "¿Cuál de los siguientes pares representa un diseño de endpoint INCORRECTO frente a su alternativa CORRECTA según los ejemplos del documento?",
    options: [
      { id: "a", text: "Incorrecto: GET /users | Correcto: GET /getUsers" },
      { id: "b", text: "Incorrecto: POST /createOrder | Correcto: POST /orders" },
      { id: "c", text: "Incorrecto: DELETE /products/123 | Correcto: DELETE /deleteProduct/123" },
      { id: "d", text: "Incorrecto: PUT /orders/1 | Correcto: PUT /modifyOrders/1" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva marca con cruz roja POST /createOrder por usar verbos y con tilde verde POST /orders por apoyarse en el método HTTP y nombrar el recurso en sustantivo. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q15",
    num: 15,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Sustantivos vs Verbos",
    type: "single",
    prompt: "De acuerdo con los ejemplos ilustrados, ¿cuál de las siguientes opciones constituye una mala práctica de diseño REST?",
    options: [
      { id: "a", text: "GET /users" },
      { id: "b", text: "POST /orders" },
      { id: "c", text: "DELETE /deleteProduct/123" },
      { id: "d", text: "DELETE /products/123" }
    ],
    correctAnswers: ["c"],
    explanation: "DELETE /deleteProduct/123 repite la acción en el método y en la URL (verbo redundante). Lo correcto según el material es DELETE /products/123. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q16",
    num: 16,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Convenciones y Casings",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes directrices forman parte de las buenas prácticas de diseño de APIs REST listadas en la diapositiva 7? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Mantener las URL predecibles" },
      { id: "b", text: "Utilizar kebab-case en las URLs" },
      { id: "c", text: "Utilizar PascalCase de forma obligatoria en las rutas de URLs" },
      { id: "d", text: "Utilizar versionado" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Las directrices señaladas son: mantener las URL predecibles, utilizar kebab-case en las URLs, utilizar camelCase o snake_case para el cuerpo (body) y utilizar versionado. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q17",
    num: 17,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Convenciones y Casings",
    type: "single",
    prompt: "Según el material, ¿qué convenciones de nomenclatura de mayúsculas/minúsculas son recomendadas para los campos del cuerpo (body) de un request o response?",
    options: [
      { id: "a", text: "kebab-case exclusivamente en todos los casos de intercambio." },
      { id: "b", text: "camelCase o snake_case (dependiendo del ecosistema)." },
      { id: "c", text: "UPPER_SNAKE_CASE obligatorio para todas las propiedades." },
      { id: "d", text: "PascalCase combinado con guiones bajos en cada identificador." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica textualmente: «Utilizar camelCase o snake_case para el body (dependiendo del ecosistema)». (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q18",
    num: 18,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Convenciones y Casings",
    type: "single",
    prompt: "Siguiendo el esquema de «URLs predecibles» mostrado en la diapositiva, ¿cuál es el endpoint y método HTTP apropiado para modificar los datos del usuario con ID 123?",
    options: [
      { id: "a", text: "POST /users/update/123" },
      { id: "b", text: "PUT /users/123" },
      { id: "c", text: "GET /users/123/edit" },
      { id: "d", text: "PUT /users?id=123" }
    ],
    correctAnswers: ["b"],
    explanation: "En la lista de ejemplos predecibles se detalla: PUT /users/123 -> Update user. (Diapositiva 7)",
    diagram: null,
    points: 1
  }
];
