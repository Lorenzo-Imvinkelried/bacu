/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 2 (Parte 4: Q33 - Q43)
 * Temas: Programación Genérica (Conceptos y Sintaxis), REST en Spring Boot (Controladores, ResponseEntity, Anotaciones, Jackson).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U2_PART_04_QUESTIONS = [
  {
    id: "fb-p1-u2-q33",
    num: 33,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Concepto",
    type: "single",
    prompt: "¿Cuál es el principio fundamental que sustenta a la programación genérica según la diapositiva 15?",
    options: [
      { id: "a", text: "Escribir código idéntico repetido para cada tipo de dato existente en el sistema." },
      { id: "b", text: "Aplicar un comportamiento común programado de forma genérica sobre objetos de distintos tipos." },
      { id: "c", text: "Limitar la estructura de datos para que únicamente acepte tipos primitivos como int y boolean." },
      { id: "d", text: "Delegar en la base de datos la responsabilidad de verificar el tipo de dato recibido." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva señala: «El comportamiento común se aplica con objetos de distintos tipos. Se programa el comportamiento genérico». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q34",
    num: 34,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Concepto",
    type: "multiple",
    prompt: "En el caso de una estructura de lista, ¿cuáles de las siguientes operaciones constituyen «comportamientos comunes» independientes del tipo de dato contenido? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Agregar un elemento" },
      { id: "b", text: "Remover un elemento" },
      { id: "c", text: "Recorrer la lista" },
      { id: "d", text: "Contar la cantidad de elementos" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva 15 lista textualmente estas cuatro operaciones como comportamiento común universal de una lista, con total independencia del tipo de datos que aloje. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q35",
    num: 35,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Sintaxis",
    type: "single",
    prompt: "Al declarar una estructura genérica en Java mediante la sintaxis:\nList<T> elementos = new ArrayList<>();\n¿Qué representa el símbolo <T>?",
    options: [
      { id: "a", text: "Un tipo primitivo reservado exclusivamente para números decimales." },
      { id: "b", text: "Un parámetro de tipo formal que representa de forma abstracta el tipo de elementos con el que operará la colección." },
      { id: "c", text: "Un valor constante inmutable que define la cantidad máxima de elementos de la lista." },
      { id: "d", text: "Una anotación de Spring Boot que expone el arreglo como servicio REST." }
    ],
    correctAnswers: ["b"],
    explanation: "T actúa como un parámetro de tipo genérico (type parameter), permitiendo definir métodos y atributos cuya tipificación concreta se define al instanciar o parametrizar la clase. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs en Spring Boot",
    type: "single",
    prompt: "En la arquitectura interna de una aplicación Spring Boot orientada a servicios REST, ¿en qué capa residen las definiciones y puntos de entrada de la API?",
    options: [
      { id: "a", text: "En la capa Database" },
      { id: "b", text: "En la capa Model" },
      { id: "c", text: "En la capa de Controladores" },
      { id: "d", text: "En JPA/Spring Data" }
    ],
    correctAnswers: ["c"],
    explanation: "La diapositiva enfatiza: «Todo está en la capa de Controladores», siendo la responsable de recibir las solicitudes de los clientes y coordinar las respuestas. (Diapositiva 17)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q37",
    num: 37,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs en Spring Boot",
    type: "single",
    prompt: "¿Cuál es el mecanismo central utilizado en Spring Boot para definir y mapear el comportamiento de las APIs REST en los controladores?",
    options: [
      { id: "a", text: "Archivos XML de configuración externa obligatorios." },
      { id: "b", text: "Anotaciones de Java provistas por el framework." },
      { id: "c", text: "Scripts de base de datos ejecutados por Flyway." },
      { id: "d", text: "Configuración manual de puertos de red mediante sockets en C++." }
    ],
    correctAnswers: ["b"],
    explanation: "El material explicita: «Usamos anotaciones» como la base declarativa para configurar controladores, rutas y respuestas en Spring Boot. (Diapositiva 17)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q38",
    num: 38,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "ResponseEntity",
    type: "single",
    prompt: "¿Qué capacidad otorga el uso de ResponseEntity<> al retornar respuestas desde un controlador en Spring Boot?",
    options: [
      { id: "a", text: "Permite retornar cualquier objeto teniendo control explícito sobre encabezados (headers), código de estado (status code) y cuerpo (body)." },
      { id: "b", text: "Bloquea la conexión HTTP para transformarla de forma obligatoria en un socket binario asincrónico." },
      { id: "c", text: "Fuerza a que todas las respuestas tengan siempre un código 200 OK con independencia del resultado." },
      { id: "d", text: "Guarda de forma automática el objeto retornado en la base de datos sin invocar a los repositorios." }
    ],
    correctAnswers: ["a"],
    explanation: "La diapositiva resume: «Nos permite retornar cualquier objeto desde un controlador. Tenemos control sobre la respuesta: headers, status code, body». (Diapositiva 18)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q39",
    num: 39,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "ResponseEntity",
    type: "single",
    prompt: "¿Qué observación o crítica respecto a la separación de responsabilidades se menciona en la diapositiva en relación con el uso directo de ResponseEntity?",
    options: [
      { id: "a", text: "Dificulta la serialización hacia cadenas en formato JSON." },
      { id: "b", text: "Puede dar lugar a código que mezcla el manejo de la respuesta HTTP con la lógica de negocio." },
      { id: "c", text: "Hace imposible retornar códigos de la familia 4xx y 5xx." },
      { id: "d", text: "Obliga a prescindir de la inyección de dependencias en la capa de servicios." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva advierte como aspecto de atención: «Código que mezcla manejo de respuesta con lógica de negocio». (Diapositiva 18)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q40",
    num: 40,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Anotaciones Spring Boot para REST",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes anotaciones forman parte del conjunto estándar de Spring Boot para construcción de APIs REST presentadas en el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "@RestController" },
      { id: "b", text: "@RequestMapping" },
      { id: "c", text: "@GetMapping" },
      { id: "d", text: "@ResponseStatus" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva enumera: @RestController, @RequestMapping, @GetMapping, @PostMapping, @ResponseEntity y @ResponseStatus. (Diapositiva 19)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q41",
    num: 41,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Anotaciones Spring Boot para REST",
    type: "single",
    prompt: "¿Qué propósito cumple la anotación @ResponseStatus en un endpoint o manejador de errores de Spring Boot?",
    options: [
      { id: "a", text: "Mapea una solicitud HTTP POST entrante con el cuerpo del mensaje." },
      { id: "b", text: "Permite definir estáticamente el código de estado HTTP que se retornará cuando la ejecución culmine exitosamente o capture una excepción." },
      { id: "c", text: "Instancia automáticamente un nuevo repositorio CRUD en memoria." },
      { id: "d", text: "Deserializa un objeto JSON a entidad Java ignorando los getters." }
    ],
    correctAnswers: ["b"],
    explanation: "@ResponseStatus se utiliza para especificar el código de estado HTTP que se asociará a la respuesta de un método o clase de excepción determinada. (Diapositiva 19)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q42",
    num: 42,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "JSON - Jackson",
    type: "single",
    prompt: "¿Qué librería viene incluida por defecto en spring-boot-starter-web para realizar tareas de serialización y deserialización JSON?",
    options: [
      { id: "a", text: "Gson" },
      { id: "b", text: "Jackson" },
      { id: "c", text: "Fastjson" },
      { id: "d", text: "Moshi" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva señala textualmente: «Jackson: Viene incluido por defecto en spring-boot-starter-web». (Diapositiva 20)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q43",
    num: 43,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "JSON - Jackson",
    type: "single",
    prompt: "En el ecosistema de Spring Boot y Jackson, ¿cuál es la diferencia funcional entre «serializar» y «deserializar»?",
    options: [
      { id: "a", text: "Serializar convierte JSON a objetos Java en el request; deserializar almacena bytes en disco." },
      { id: "b", text: "Serializar convierte objetos Java a JSON en las respuestas (@RestController); deserializar transforma JSON a objetos Java en los requests (@RequestBody)." },
      { id: "c", text: "Serializar y deserializar son términos idénticos para referirse al mapeo relacional en base de datos." },
      { id: "d", text: "Serializar cifra los encabezados HTTP; deserializar valida los certificados de seguridad." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva explicita: «Serializa automáticamente objetos Java a JSON en las respuestas (@RestController) y deserializa JSON a objetos Java en los requests (@RequestBody)». (Diapositiva 20)",
    diagram: null,
    points: 1
  }
];
