/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 06 (Preguntas 46 a 53)
 * Temas: Herramientas de Testeo (Postman: Configuración de PUT/JSON, Utilidad general),
 * Buenas Prácticas en Controladores (Inyección por constructor, Desacoplamiento con DTO y Mappers),
 * Comunicación Asincrónica (Motivaciones en la nube, Componentes: Productor, Broker,
 * Consumidor, Cola o Tópico, Roles de Productor, Cola y Consumidor).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart06 = [
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
      { id: "a", text: "Funcionar como motor de base de datos relacional para ejecutar transacciones SQL y gestionar tablas en memoria durante pruebas." },
      { id: "b", text: "Probar, simular y documentar peticiones HTTP (GET, POST, PUT, DELETE) hacia endpoints inspeccionando encabezados, cuerpos y códigos de estado." },
      { id: "c", text: "Compilar el código fuente Java generando bytecode optimizado para su ejecución directa en la máquina virtual del servidor." },
      { id: "d", text: "Administrar el versionado de esquemas y automatizar la aplicación de scripts de migración dentro de las bases de datos de desarrollo." }
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
    prompt: "Al inspeccionar la clase ClienteControlador.java en la diapositiva 22:\n\npublic class ClienteControlador {\n  private final ClienteServicio servicio;\n  public ClienteControlador(ClienteServicio servicio) {\n    this.servicio = servicio;\n  }\n  // ...\n}\n\n¿Qué patrón de diseño se implementa para vincular el servicio con el controlador?",
    options: [
      { id: "a", text: "Instanciación manual mediante la creación de objetos con new." },
      { id: "b", text: "Inyección de dependencias a través del constructor." },
      { id: "c", text: "Implementación del patrón Service Locator estático." },
      { id: "d", text: "Herencia múltiple de interfaces y clases de servicio." }
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
      { id: "a", text: "Impedir que los controladores ejecuten consultas a la base de datos sin compilar previamente el proyecto." },
      { id: "b", text: "Desacoplar el modelo de datos interno/persistencia del contrato externo expuesto a los clientes de la API." },
      { id: "c", text: "Suprimir el uso de la biblioteca Jackson para evitar la serialización de atributos en formato JSON." },
      { id: "d", text: "Convertir de forma automática cada llamada síncrona en un mensaje desacoplado dentro de una cola de eventos." }
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
      { id: "a", text: "La falta de protocolos de transporte capaces de transferir estructuras JSON complejas a través de redes públicas distribuidas." },
      { id: "b", text: "Factores de red como latencia, fallas transitorias de conectividad y la necesidad de desacoplar procesos pesados para evitar bloqueos." },
      { id: "c", text: "Las limitaciones de rendimiento impuestas por las máquinas virtuales de Java al ejecutar aplicaciones en infraestructuras remotas." },
      { id: "d", text: "La imposibilidad técnica de desplegar servidores web embebidos como Tomcat dentro de entornos gestionados de contenedores en la nube." }
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
      { id: "a", text: "Extraer los mensajes encolados y confirmar su eliminación." },
      { id: "b", text: "Generar mensajes y agregarlos a la cola de mensajes." },
      { id: "c", text: "Gestionar el almacenamiento físico del broker de eventos." },
      { id: "d", text: "Bloquear las conexiones entrantes de clientes no autenticados." }
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
      { id: "a", text: "La cola filtra los mensajes según su contenido; el consumidor supervisa el estado de la red." },
      { id: "b", text: "La cola guarda los mensajes en orden; el consumidor toma y procesa dichos mensajes." },
      { id: "c", text: "La cola serializa los datos en formato binario; el consumidor valida las firmas de seguridad." },
      { id: "d", text: "La cola actúa como cliente de peticiones HTTP; el consumidor responde como servidor web." }
    ],
    correctAnswers: ["b"],
    explanation: "El esquema detalla que la «Cola de mensajes» «Guarda mensajes en orden» (ilustrado con elementos 1, 2, 3), mientras que el «Consumidor» «Procesa mensajes» tomándolos de la cola cuando tiene capacidad de procesamiento. (Diapositiva 24)",
    diagram: null,
    points: 1
  }
];
