/**
 * Banco de Preguntas - PARCIAL 1 OFICIAL (Fundamentos Backend)
 * Parte 01 (Preguntas 1 a 10)
 * Temas: Spring Boot (@SpringBootApplication), REST APIs (URIs jerárquicas padre-hijo),
 * Project Lombok, Arquitectura Monolítica, Microservicios (desacoplamiento),
 * Comunicación Síncrona vs Asíncrona (HTTP/HTTPS, latencia, colas) y Métodos REST (POST e idempotencia).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "fb-p1-parcial-q01",
    num: 1,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Spring Boot - Anotaciones",
    type: "single",
    prompt: "¿Qué anotación se utiliza típicamente para marcar la clase principal de una aplicación Spring Boot y habilitar la auto-configuración?",
    options: [
      { id: "a", text: "@RestController" },
      { id: "b", text: "@Component" },
      { id: "c", text: "@SpringBootApplication" }
    ],
    correctAnswers: ["c"],
    explanation: "La anotación @SpringBootApplication es la anotación central de conveniencia en Spring Boot. Combina internamente @Configuration, @EnableAutoConfiguration y @ComponentScan, marcando la clase como punto de entrada de la aplicación y activando la auto-configuración según las dependencias en el classpath.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q02",
    num: 2,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "REST APIs - Diseño de URIs",
    type: "single",
    prompt: "En una API REST bien diseñada, ¿cómo debería representarse la relación entre un recurso padre y uno hijo (por ejemplo, los pedidos de un usuario)?",
    options: [
      { id: "a", text: "/users/{id}/orders" },
      { id: "b", text: "/getOrdersOfUser?id={id}" },
      { id: "c", text: "/orders_of_user_{id}" },
      { id: "d", text: "/user-orders-request" }
    ],
    correctAnswers: ["a"],
    explanation: "Siguiendo las convenciones y buenas prácticas RESTful, las relaciones jerárquicas padre-hijo deben representarse mediante rutas anidadas que empleen sustantivos en plural e identificadores de ruta: /{padres}/{idPadre}/{hijos}, en este caso /users/{id}/orders. No deben usarse verbos (getOrders) ni nombres de acciones en la URI.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q03",
    num: 3,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Herramientas - Project Lombok",
    type: "single",
    prompt: "¿Cuál es el propósito principal de Project Lombok?",
    options: [
      { id: "a", text: "Sustituir al compilador javac" },
      { id: "b", text: "Ofrecer un servidor de aplicaciones embebido" },
      { id: "c", text: "Minimizar el código repetitivo (boilerplate) en Java mediante anotaciones" },
      { id: "d", text: "Gestionar dependencias de Maven o Gradle" }
    ],
    correctAnswers: ["c"],
    explanation: "Project Lombok es una biblioteca que se conecta en tiempo de compilación para reducir drásticamente el código repetitivo (boilerplate code) en Java. Mediante anotaciones como @Getter, @Setter, @ToString, @NoArgsConstructor o @Builder genera automáticamente dichos métodos en el bytecode.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q04",
    num: 4,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Arquitectura - Monolitos",
    type: "single",
    prompt: "¿Cómo se organiza el código en una arquitectura monolítica?",
    options: [
      { id: "a", text: "En funciones serverless distribuidas" },
      { id: "b", text: "En una única base de código que se despliega como una sola unidad" },
      { id: "c", text: "En múltiples servicios independientes desplegados por separado" },
      { id: "d", text: "En contenedores independientes por cada función de negocio" }
    ],
    correctAnswers: ["b"],
    explanation: "En una arquitectura monolítica clásica, todos los componentes del sistema (interfaz o API, lógica de dominio y capa de acceso a datos) residen dentro de una única base de código unificada y se empaquetan y despliegan como una sola unidad ejecutable (por ejemplo un archivo .war o .jar).",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q05",
    num: 5,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Arquitectura - Microservicios",
    type: "single",
    prompt: "En una arquitectura de microservicios, ¿qué característica principal diferencia a los servicios entre sí?",
    options: [
      { id: "a", text: "Son componentes débilmente acoplados (loosely coupled), cada uno con su propio stack tecnológico" },
      { id: "b", text: "Comparten obligatoriamente la misma base de datos y el mismo stack tecnológico" },
      { id: "c", text: "No pueden comunicarse entre sí bajo ninguna circunstancia" },
      { id: "d", text: "Se ejecutan siempre dentro del mismo proceso que el monolito" }
    ],
    correctAnswers: ["a"],
    explanation: "Los microservicios son componentes autónomos y débilmente acoplados (loosely coupled), enfocados en capacidades de negocio específicas. Cada microservicio puede evolucionar, desplegarse y escalarse de forma independiente, e incluso utilizar un stack tecnológico y base de datos propios (persistencia políglota).",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q06",
    num: 6,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Microservicios - Comunicación Síncrona",
    type: "single",
    prompt: "En comunicación sincrónica basada en HTTP/HTTPS entre microservicios, ¿qué ocurre mientras un servicio espera la respuesta de otro?",
    options: [
      { id: "a", text: "El servicio que responde se detiene por completo" },
      { id: "b", text: "Ambos servicios continúan su ejecución en paralelo sin esperar" },
      { id: "c", text: "La petición se almacena indefinidamente sin ser procesada" },
      { id: "d", text: "El servicio que realiza la petición queda bloqueado, esperando la respuesta antes de continuar" }
    ],
    correctAnswers: ["d"],
    explanation: "En el modelo síncrono punto a punto (típico de peticiones HTTP/REST), el servicio solicitante envía la petición y detiene o bloquea su hilo de procesamiento mientras espera la respuesta del servicio llamado antes de poder continuar con el flujo.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q07",
    num: 7,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Microservicios - Latencia en Comunicación Síncrona",
    type: "single",
    prompt: "¿Cuál de las siguientes es una consecuencia directa de la comunicación síncrona entre microservicios cuando uno de los servicios involucrados sufre una demora?",
    options: [
      { id: "a", text: "El sistema completo mejora su rendimiento" },
      { id: "b", text: "Se genera automáticamente una cola de mensajes" },
      { id: "c", text: "El servicio solicitante ignora la demora y responde igual" },
      { id: "d", text: "El tiempo de respuesta total aumenta, ya que el servicio solicitante debe esperar" }
    ],
    correctAnswers: ["d"],
    explanation: "El acoplamiento temporal propio de las llamadas síncronas produce un encadenamiento de latencias: si un servicio dependiente se ralentiza, el tiempo de respuesta total del sistema aumenta proporcionalmente y puede provocar agotamiento de hilos (thread starvation) y fallos en cascada.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q08",
    num: 8,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "REST APIs - Idempotencia",
    type: "single",
    prompt: "Siguiendo las buenas prácticas de diseño de APIs REST (Postman), ¿qué particularidad tiene el método POST respecto a PUT o DELETE en cuanto a reintentos?",
    options: [
      { id: "a", text: "POST es siempre idempotente, igual que PUT" },
      { id: "b", text: "POST no es idempotente por naturaleza, por lo que cada envío repetido podría crear un nuevo recurso" },
      { id: "c", text: "POST no debería usarse nunca en una API REST" },
      { id: "d", text: "POST nunca modifica el estado del servidor" }
    ],
    correctAnswers: ["b"],
    explanation: "Según la especificación HTTP (RFC 7231 / RFC 9110), POST no es un método idempotente. A diferencia de PUT o DELETE (donde múltiples llamadas idénticas producen el mismo resultado final en el servidor), reintentar una petición POST idéntica suele ocasionar efectos secundarios adicionales, como la creación de recursos duplicados.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q09",
    num: 9,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Microservicios - Comunicación Asíncrona y Colas",
    type: "single",
    prompt: "En una arquitectura de microservicios con comunicación asíncrona mediante colas, si el servicio consumidor (Service B) falla inesperadamente, ¿qué ocurre con el servicio productor (Service A)?",
    options: [
      { id: "a", text: "Los mensajes se pierden automáticamente" },
      { id: "b", text: "Service A continúa aceptando y encolando peticiones con normalidad, hasta que Service B vuelva a estar disponible" },
      { id: "c", text: "Service A debe reiniciarse manualmente" },
      { id: "d", text: "Service A deja de funcionar inmediatamente" }
    ],
    correctAnswers: ["b"],
    explanation: "El uso de colas de mensajes (como RabbitMQ o Kafka) desacopla temporalmente al productor y al consumidor. El productor (Service A) continúa operando y depositando mensajes en la cola con normalidad; los mensajes permanecen almacenados de forma segura hasta que el consumidor (Service B) se recupere y los procese.",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-parcial-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-parcial-1",
    topic: "Microservicios - Desacoplamiento y Aislamiento de Fallos",
    type: "single",
    prompt: "¿Cuál es una de las ventajas clave del desacoplamiento (decoupling) logrado mediante el uso de colas de mensajes entre microservicios?",
    options: [
      { id: "a", text: "Hace que las respuestas sean siempre inmediatas" },
      { id: "b", text: "Obliga a que todos los servicios compartan la misma base de datos" },
      { id: "c", text: "Elimina la necesidad de definir contratos entre servicios" },
      { id: "d", text: "Mayor aislamiento de fallos, ya que un servicio puede seguir funcionando aunque otro esté caído" }
    ],
    correctAnswers: ["d"],
    explanation: "Una de las ventajas primordiales de la comunicación asíncrona desacoplada es el aislamiento de fallos (fault isolation). La indisponibilidad temporal de un consumidor no paraliza a los productores ni propaga errores al resto de la arquitectura distribuida.",
    diagram: null,
    points: 1
  }
];
