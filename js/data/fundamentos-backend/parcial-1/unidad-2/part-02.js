/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 2 (Parte 2: Q12 - Q22)
 * Temas: Diseño de APIs REST (Swagger, Sustantivos vs Verbos, Convenciones de URL, Métodos HTTP e Idempotencia).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U2_PART_02_QUESTIONS = [
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
      { id: "a", text: "Usar verbos de acción en tiempo imperativo dentro de cada segmento de la URL." },
      { id: "b", text: "Usar sustantivos, no verbos." },
      { id: "c", text: "Combinar sustantivos y verbos en camelCase para mayor claridad de programación." },
      { id: "d", text: "Incluir el nombre del método Java correspondiente en la ruta del endpoint." }
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
      { id: "c", text: "Utilizar PascalCase obligatorio para las URLs y los parámetros" },
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
      { id: "a", text: "kebab-case exclusivamente en todos los casos." },
      { id: "b", text: "camelCase o snake_case (dependiendo del ecosistema)." },
      { id: "c", text: "UPPER_SNAKE_CASE obligatorio para todas las claves JSON." },
      { id: "d", text: "Title-Case separado por guiones bajos." }
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
  },
  {
    id: "fb-p1-u2-q19",
    num: 19,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Convenciones y Casings",
    type: "single",
    prompt: "Si se necesita obtener el listado completo de todos los usuarios registrados en el sistema, ¿cuál es la ruta REST predecible según el material?",
    options: [
      { id: "a", text: "GET /users" },
      { id: "b", text: "GET /users/all" },
      { id: "c", text: "POST /users/getAll" },
      { id: "d", text: "GET /list-users" }
    ],
    correctAnswers: ["a"],
    explanation: "El listado completo de una colección se consulta mediante GET /users («List all users»). (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q20",
    num: 20,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Métodos e Idempotencia",
    type: "multiple",
    prompt: "Según la clasificación del material, ¿cuáles de los siguientes métodos HTTP son considerados idempotentes? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "POST" },
      { id: "b", text: "PUT" },
      { id: "c", text: "PATCH" },
      { id: "d", text: "DELETE" }
    ],
    correctAnswers: ["b", "c"],
    explanation: "La diapositiva 8 señala explícitamente tanto a PUT («Modifica recursos. -> Idempotente») como a PATCH («Modifica parcialmente recursos. -> Idempotente») con la aclaración de idempotencia. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q21",
    num: 21,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Métodos e Idempotencia",
    type: "single",
    prompt: "¿Cuál es la diferencia conceptual entre PUT y PATCH establecida en el material?",
    options: [
      { id: "a", text: "PUT crea recursos nuevos y PATCH elimina registros de forma definitiva." },
      { id: "b", text: "PUT modifica el recurso (típicamente de forma completa), mientras que PATCH modifica parcialmente el recurso." },
      { id: "c", text: "PUT es asincrónico y PATCH es sincrónico." },
      { id: "d", text: "PUT opera sobre colecciones y PATCH únicamente sobre números enteros." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva define: PUT -> Modifica recursos y PATCH -> Modifica parcialmente recursos. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q22",
    num: 22,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Métodos e Idempotencia",
    type: "single",
    prompt: "¿Qué beneficio directo aporta utilizar adecuadamente los métodos HTTP según la nota explicativa de la diapositiva?",
    options: [
      { id: "a", text: "Permite prescindir de los códigos de estado HTTP en la respuesta." },
      { id: "b", text: "Permite limpiar de acciones las URLs de los endpoints." },
      { id: "c", text: "Elimina la necesidad de utilizar bases de datos relacionales en el servidor." },
      { id: "d", text: "Transforma peticiones sincrónicas en eventos asincrónicos sin intermediarios." }
    ],
    correctAnswers: ["b"],
    explanation: "La nota explicita: «Esto permite limpiar de acciones las url», ya que el verbo HTTP comunica la operación sin ensuciar la ruta. (Diapositiva 8)",
    diagram: null,
    points: 1
  }
];
