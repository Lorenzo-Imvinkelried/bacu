/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 2 (Parte 5: Q44 - Q53)
 * Temas: Jackson (Naming Case, @JsonProperty), Postman, Estructura de Controladores (DTOs y Mappers), Comunicación Asincrónica.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U2_PART_05_QUESTIONS = [
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
      { id: "a", text: "Modificar la propiedad global en el archivo del sistema operativo." },
      { id: "b", text: "Aplicar la anotación @JsonProperty(\"nombre_custom\") sobre el atributo." },
      { id: "c", text: "Renombrar forzosamente la tabla física en la base de datos relacional." },
      { id: "d", text: "Crear un nuevo método constructor sin argumentos en la clase." }
    ],
    correctAnswers: ["b"],
    explanation: "Para personalizar un campo particular, el material indica usar la anotación @JsonProperty(\"nombre_custom\"). Para cambios globales se usa spring.jackson.property-naming-strategy. (Diapositiva 20)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q46",
    num: 46,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Postman",
    type: "single",
    prompt: "Según la interfaz de Postman ilustrada en la diapositiva 21, ¿qué tipo de operación HTTP y formato de carga útil (payload) se está configurando en la pestaña activa?",
    options: [
      { id: "a", text: "Un método GET sin encabezados de autenticación." },
      { id: "b", text: "Un método PUT con cuerpo de datos en formato JSON." },
      { id: "c", text: "Un método DELETE con carga útil en texto plano." },
      { id: "d", text: "Un método POST enviando archivos binarios multipart." }
    ],
    correctAnswers: ["b"],
    explanation: "En la captura de Postman se observa seleccionado el método PUT en el selector de verbo y la pestaña Body con formato raw -> JSON. (Diapositiva 21)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q47",
    num: 47,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Postman",
    type: "single",
    prompt: "¿Cuál es la utilidad primordial de una herramienta como Postman durante el desarrollo de soluciones backend?",
    options: [
      { id: "a", text: "Servir como servidor de base de datos relacional para guardar entidades JPA." },
      { id: "b", text: "Probar, simular y documentar peticiones HTTP (GET, POST, PUT, DELETE) hacia endpoints inspeccionando encabezados, cuerpos y códigos de estado." },
      { id: "c", text: "Compilar el código fuente Java en bytecode para la máquina virtual." },
      { id: "d", text: "Gestionar automáticamente los scripts de migración de esquema en Flyway." }
    ],
    correctAnswers: ["b"],
    explanation: "Postman es un cliente HTTP gráfico ampliamente utilizado para construir peticiones, enviar payloads, verificar respuestas del servidor y validar el comportamiento de las APIs desarrolladas. (Diapositiva 21)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q48",
    num: 48,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Estructura de Controladores - Inyección",
    type: "single",
    prompt: "Al inspeccionar la clase ClienteControlador.java en la diapositiva 22:\n\npublic class ClienteControlador {\n    private final ClienteServicio servicio;\n    public ClienteControlador(ClienteServicio servicio) {\n        this.servicio = servicio;\n    }\n    // ...\n}\n\n¿Qué patrón de diseño se implementa para vincular el servicio con el controlador?",
    options: [
      { id: "a", text: "Instanciación explícita mediante this.servicio = new ClienteServicio()." },
      { id: "b", text: "Inyección de dependencias a través del constructor." },
      { id: "c", text: "Localizador de servicios estático (Service Locator)." },
      { id: "d", text: "Herencia múltiple de clases de negocio." }
    ],
    correctAnswers: ["b"],
    explanation: "El controlador declara el campo como private final y lo recibe como argumento en su constructor público, que es el mecanismo predilecto de Inyección de Dependencias promovido por Spring. (Diapositiva 22)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q49",
    num: 49,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Estructura de Controladores - DTO y Mappers",
    type: "single",
    prompt: "En los métodos expuestos dentro de ClienteControlador.java se observa la interacción entre ClienteDTO y ClienteMapper:\n\nreturn servicio.crear(ClienteMapper.toEntity(clienteDTO));\n\n¿Cuál es el beneficio de utilizar objetos DTO (Data Transfer Object) y Mappers en el controlador en lugar de recibir directamente la entidad de la base de datos?",
    options: [
      { id: "a", text: "Evitar que los controladores interactúen con la base de datos sin compilar." },
      { id: "b", text: "Desacoplar el modelo de datos interno/persistencia del contrato externo expuesto a los clientes de la API." },
      { id: "c", text: "Impedir que Jackson pueda serializar los datos en formato JSON." },
      { id: "d", text: "Transformar de manera obligatoria la petición HTTP en un mensaje asincrónico." }
    ],
    correctAnswers: ["b"],
    explanation: "El uso de DTOs y Mappers evita exponer directamente la estructura interna de la base de datos al exterior, otorgando mayor seguridad, flexibilidad y desacoplamiento en el diseño de APIs REST. (Diapositiva 22)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q50",
    num: 50,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Asincrónica",
    type: "single",
    prompt: "Frente al modelo de comunicación sincrónica tradicional, ¿qué desafíos de los entornos en la nube motivan la incorporación de arquitecturas asincrónicas según la diapositiva 23?",
    options: [
      { id: "a", text: "La total ausencia de protocolos web capaces de transportar texto JSON." },
      { id: "b", text: "Factores de red como latencia, fallas transitorias de conectividad y la necesidad de desacoplar procesos pesados para evitar bloqueos." },
      { id: "c", text: "La prohibición técnica de utilizar Java en servidores remotos." },
      { id: "d", text: "La incompatibilidad de los microservicios con los servidores Tomcat embebidos." }
    ],
    correctAnswers: ["b"],
    explanation: "En sistemas distribuidos y entornos cloud («¿Qué problema nos puede traer una nube?»), la comunicación síncrona puede degradarse por problemas de red, caídas de servicios encadenados y cuellos de botella; la asincronía mitiga el acoplamiento temporal y la fragilidad del enlace directo. (Diapositiva 23)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q51",
    num: 51,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Asincrónica",
    type: "multiple",
    prompt: "Según la diapositiva 24, ¿cuáles son los componentes principales de un sistema de comunicación asincrónica? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Productor" },
      { id: "b", text: "Broker" },
      { id: "c", text: "Consumidor" },
      { id: "d", text: "Cola o Tópico" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva lista formalmente: «Productor», «Broker», «Consumidor», «Cola o Tópico» y «Almacenamiento». (Diapositiva 24)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q52",
    num: 52,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Asincrónica",
    type: "single",
    prompt: "¿Cuál es el rol específico que desempeña el componente «Productor» dentro del esquema asincrónico presentado?",
    options: [
      { id: "a", text: "Procesar y confirmar la eliminación definitiva de los mensajes leídos." },
      { id: "b", text: "Generar mensajes y agregarlos a la cola de mensajes." },
      { id: "c", text: "Administrar el hardware físico del servidor en la nube." },
      { id: "d", text: "Interceptar llamadas HTTP del navegador para bloquearlas." }
    ],
    correctAnswers: ["b"],
    explanation: "En el diagrama y texto de la diapositiva 24 se define claramente: Productor: Genera mensajes (acción: «agrega» a la cola). (Diapositiva 24)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q53",
    num: 53,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Asincrónica",
    type: "single",
    prompt: "En el diagrama de flujo de la cola de mensajes, ¿cuál es la función de la «Cola de mensajes» y del «Consumidor»?",
    options: [
      { id: "a", text: "La cola descarta los mensajes que no se pueden responder inmediatamente; el consumidor reinicia el servidor." },
      { id: "b", text: "La cola guarda los mensajes en orden; el consumidor toma y procesa dichos mensajes." },
      { id: "c", text: "La cola serializa los objetos en memoria; el consumidor crea las tablas SQL en Flyway." },
      { id: "d", text: "La cola actúa como cliente HTTP; el consumidor funciona como navegador web." }
    ],
    correctAnswers: ["b"],
    explanation: "El esquema detalla que la «Cola de mensajes» «Guarda mensajes en orden» (ilustrado con elementos 1, 2, 3), mientras que el «Consumidor» «Procesa mensajes» tomándolos de la cola cuando tiene capacidad de procesamiento. (Diapositiva 24)",
    diagram: null,
    points: 1
  }
];
