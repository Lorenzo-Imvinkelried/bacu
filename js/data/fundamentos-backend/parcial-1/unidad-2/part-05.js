/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 05 (Preguntas 37 a 45)
 * Temas: REST APIs en Spring Boot (Anotaciones de Java), ResponseEntity (Control de headers/status/body,
 * Mezcla con lógica de negocio), Anotaciones Spring (@RestController, @RequestMapping, @GetMapping,
 * @ResponseStatus), JSON con Jackson (Librería por defecto, Serialización vs Deserialización,
 * LOWER_CAMEL_CASE, @JsonProperty).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
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
      { id: "c", text: "Scripts SQL de migración gestionados por Flyway." },
      { id: "d", text: "Clases abstractas intermedias de sockets nativos." }
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
      { id: "b", text: "Transforma el canal síncrono HTTP en un socket binario no bloqueante con soporte nativo para streaming continuo de eventos." },
      { id: "c", text: "Establece de forma estricta un código 200 OK en todas las respuestas independientemente de las excepciones internas lanzadas." },
      { id: "d", text: "Sincroniza y persiste automáticamente el objeto en la base de datos relacional omitiendo la llamada a los repositorios CRUD." }
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
      { id: "a", text: "Dificulta el proceso de serialización automática de entidades hacia objetos en formato JSON." },
      { id: "b", text: "Puede dar lugar a código que mezcla el manejo de la respuesta HTTP con la lógica de negocio." },
      { id: "c", text: "Impide que el controlador pueda retornar códigos de respuesta pertenecientes a las familias 4xx y 5xx." },
      { id: "d", text: "Invalida el uso de la inyección de dependencias al vincular servicios con los controladores de Spring." }
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
      { id: "a", text: "Mapea el cuerpo de una petición entrante vinculándolo con un parámetro del método para su posterior deserialización automática." },
      { id: "b", text: "Permite definir estáticamente el código de estado HTTP que se retornará cuando la ejecución culmine exitosamente o capture una excepción." },
      { id: "c", text: "Instancia y registra un nuevo repositorio transaccional en el contexto de Spring para gestionar consultas de base de datos." },
      { id: "d", text: "Configura los encabezados de autenticación JWT requeridos para validar el token de seguridad enviado por el cliente web." }
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
      { id: "a", text: "Serializar transforma cadenas JSON entrantes en instancias Java; deserializar exporta el estado de los objetos a registros en base de datos." },
      { id: "b", text: "Serializar convierte objetos Java a JSON en las respuestas (@RestController); deserializar transforma JSON a objetos Java en los requests (@RequestBody)." },
      { id: "c", text: "Serializar genera esquemas de validación DDL en runtime; deserializar ejecuta consultas SQL a través del mapeador objeto-relacional." },
      { id: "d", text: "Serializar cifra los encabezados de autenticación HTTP; deserializar valida los certificados de seguridad en el intercambio de mensajes." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva explicita: «Serializa automáticamente objetos Java a JSON en las respuestas (@RestController) y deserializa JSON a objetos Java en los requests (@RequestBody)». (Diapositiva 20)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q44",
    num: 44,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "JSON - Jackson",
    type: "single",
    prompt: "¿Cuál es la estrategia de nomenclatura (naming case) predeterminada que utiliza Jackson en Spring Boot para generar las claves JSON?",
    options: [
      { id: "a", text: "SNAKE_CASE (por ejemplo: \"first_name\")" },
      { id: "b", text: "KEBAB_CASE (por ejemplo: \"first-name\")" },
      { id: "c", text: "LOWER_CAMEL_CASE (por ejemplo: \"firstName\")" },
      { id: "d", text: "UPPER_CAMEL_CASE (por ejemplo: \"FirstName\")" }
    ],
    correctAnswers: ["c"],
    explanation: "El texto indica: «Naming case por defecto: LOWER_CAMEL_CASE -> respeta el nombre tal cual está en Java (firstName -> \"firstName\")». (Diapositiva 20)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q45",
    num: 45,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "JSON - Jackson",
    type: "single",
    prompt: "Si un desarrollador necesita alterar el nombre de una propiedad específica en el JSON generado sin cambiar el nombre del atributo en la clase Java, ¿qué recurso debe emplear según el material?",
    options: [
      { id: "a", text: "Configurar una variable de entorno personalizada a nivel de sistema operativo." },
      { id: "b", text: "Aplicar la anotación @JsonProperty(\"nombre_custom\") sobre el atributo." },
      { id: "c", text: "Renombrar la columna física correspondiente en el esquema de la base de datos." },
      { id: "d", text: "Sobrescribir manualmente el método toString en la clase de entidad del modelo." }
    ],
    correctAnswers: ["b"],
    explanation: "Para personalizar un campo particular, el material indica usar la anotación @JsonProperty(\"nombre_custom\"). Para cambios globales se usa spring.jackson.property-naming-strategy. (Diapositiva 20)",
    diagram: null,
    points: 1
  }
];
