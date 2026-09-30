/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 03 (Preguntas 19 a 27)
 * Temas: URLs predecibles (GET /users), Métodos HTTP e Idempotencia (PUT y PATCH),
 * Limpieza de URLs, Búsqueda con múltiples filtros (Método GET y Query Parameters),
 * Códigos de estado HTTP (Familias 2xx, 4xx, 5xx, Utilidad de status codes),
 * Manejo de Errores (Estandarización de respuestas y reporte conjunto).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
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
      { id: "a", text: "PUT crea recursos totalmente nuevos en el servidor, mientras que PATCH elimina registros existentes de forma definitiva." },
      { id: "b", text: "PUT modifica el recurso (típicamente de forma completa), mientras que PATCH modifica parcialmente el recurso." },
      { id: "c", text: "PUT opera mediante comunicación puramente asincrónica, mientras que PATCH exige procesamiento síncrono bloqueante." },
      { id: "d", text: "PUT se aplica de forma exclusiva sobre colecciones completas, mientras que PATCH procesa un único atributo escalar." }
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
      { id: "a", text: "Evita tener que incluir códigos de estado numéricos en las respuestas." },
      { id: "b", text: "Permite limpiar de acciones las URLs de los endpoints." },
      { id: "c", text: "Elimina la necesidad de utilizar bases de datos relacionales en el servidor." },
      { id: "d", text: "Transforma peticiones sincrónicas en eventos asincrónicos sin intermediarios." }
    ],
    correctAnswers: ["b"],
    explanation: "La nota explicita: «Esto permite limpiar de acciones las url», ya que el verbo HTTP comunica la operación sin ensuciar la ruta. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q23",
    num: 23,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Búsqueda con Múltiples Filtros",
    type: "single",
    prompt: "En una interfaz de búsqueda de personas con múltiples campos opcionales (Nombre, Apellido, DNI, Fecha de nacimiento, Email, Ciudad), ¿cuál es el método HTTP correcto a emplear según las buenas prácticas presentadas?",
    options: [
      { id: "a", text: "POST" },
      { id: "b", text: "GET" },
      { id: "c", text: "DELETE" },
      { id: "d", text: "PUT" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva titula expresamente: «Utilizar bien los métodos http: GET -> Leer datos» junto al formulario de búsqueda, recordando que las consultas de lectura y filtrado de datos deben ser solicitudes GET (utilizando query parameters). (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q24",
    num: 24,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Búsqueda con Múltiples Filtros",
    type: "single",
    prompt: "Al implementar la búsqueda de personas de la diapositiva 9 mediante una API REST, ¿cómo deberían enviarse los valores de los filtros seleccionados por el usuario?",
    options: [
      { id: "a", text: "Incrustados en el cuerpo (Request Body) de una petición POST con formato JSON codificado." },
      { id: "b", text: "Como parámetros de consulta (query parameters) en la URL dentro de una petición GET." },
      { id: "c", text: "Como encabezados HTTP de metadatos personalizados agregados por cada campo del formulario." },
      { id: "d", text: "Definiendo segmentos jerárquicos fijos en la ruta (path variables) para cada valor ingresado." }
    ],
    correctAnswers: ["b"],
    explanation: "Al tratarse de una operación de lectura (GET), los filtros opcionales de búsqueda deben viajar en la URL como parámetros de consulta (/personas?nombre=Maria&ciudad=SantaFe). (Diapositiva 8 y 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q25",
    num: 25,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Códigos de Estado HTTP",
    type: "single",
    prompt: "De acuerdo con la convención resumida en la diapositiva, ¿a qué familia de códigos corresponde cada categoría de resultado?",
    options: [
      { id: "a", text: "2xx: Errores del servidor | 4xx: Códigos de éxito | 5xx: Errores del cliente" },
      { id: "b", text: "2xx: Códigos de éxito | 4xx: Errores del cliente | 5xx: Errores del servidor" },
      { id: "c", text: "2xx: Redirecciones de red | 4xx: Códigos de éxito | 5xx: Errores de sintaxis" },
      { id: "d", text: "2xx: Errores del cliente | 4xx: Errores del servidor | 5xx: Códigos de éxito" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva clasifica: 2xx -> Códigos de éxito, 4xx -> Errores del cliente y 5xx -> Errores del servidor. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q26",
    num: 26,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Códigos de Estado HTTP",
    type: "single",
    prompt: "¿Por qué es fundamental que el código de estado HTTP comunique con precisión lo sucedido durante el procesamiento del request?",
    options: [
      { id: "a", text: "Porque fuerza al navegador web a habilitar la compresión y el almacenamiento en caché de los datos." },
      { id: "b", text: "Porque evita tener que agregar información redundante de estado dentro del cuerpo de la respuesta." },
      { id: "c", text: "Porque de lo contrario los cortafuegos intermedios rechazan la conexión TCP por motivos de seguridad." },
      { id: "d", text: "Porque los servidores REST prohíben retornar mensajes descriptivos de texto en los cuerpos de respuesta." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica que «el código de estado indica lo que sucedió al procesar el request, esto evita agregar información de este tipo en la respuesta» (como campos booleanos success: true innecesarios). (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q27",
    num: 27,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Manejo de Errores y Formato de Respuestas",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes recomendaciones deben aplicarse para los errores que explican lo que sucedió en una API REST? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Estandarizar las respuestas y respetar el formato siempre." },
      { id: "b", text: "Si hay más de un error, retornarlos todos juntos en la respuesta." },
      { id: "c", text: "Responder siempre con código 200 OK incluyendo el detalle del fallo en el cuerpo para no alarmar al cliente." },
      { id: "d", text: "Enmascarar las fallas de validación del cliente detrás de códigos 500 genéricos para ocultar la lógica interna." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "El material indica textualmente: «Estandarizar las respuestas y respetar el formato siempre» y «Si hay más de un error, retornarlos todos juntos en la respuesta». (Diapositiva 11)",
    diagram: null,
    points: 1
  }
];
