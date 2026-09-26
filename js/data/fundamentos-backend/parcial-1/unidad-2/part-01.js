/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 2 (Parte 1: Q1 - Q11)
 * Temas: Arquitecturas y Comunicación, Comunicación Sincrónica, REST APIs, Diseño de APIs REST (Fundamentos).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U2_PART_01_QUESTIONS = [
  {
    id: "fb-p1-u2-q01",
    num: 1,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Arquitecturas y Comunicación",
    type: "single",
    prompt: "¿Cuál es la premisa central sobre la interacción entre módulos que se destaca al contrastar arquitecturas de software?",
    options: [
      { id: "a", text: "La comunicación solo es obligatoria en arquitecturas distribuidas basadas en microservicios." },
      { id: "b", text: "En cualquier arquitectura existe comunicación entre sus distintos componentes." },
      { id: "c", text: "Las aplicaciones monolíticas no requieren ningún tipo de intercambio de datos interno." },
      { id: "d", text: "La comunicación entre componentes solo ocurre cuando intervienen redes públicas de Internet." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva enfatiza de manera destacada que «En cualquier arquitectura tenemos comunicación entre componentes», cambiando únicamente el medio y la forma en que esta se implementa. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q02",
    num: 2,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Arquitecturas y Comunicación",
    type: "single",
    prompt: "Según el esquema arquitectónico comparativo, ¿cómo difiere el almacenamiento de datos entre el modelo Monolítico y el modelo de Microservicios?",
    options: [
      { id: "a", text: "El monolito utiliza una base de datos por cada módulo interno, mientras que los microservicios comparten una única base centralizada." },
      { id: "b", text: "El monolito se conecta a una base de datos centralizada, mientras que en microservicios cada servicio cuenta con su propia base de datos dedicada." },
      { id: "c", text: "Los microservicios prescinden de bases de datos para evitar la latencia entre peticiones de red." },
      { id: "d", text: "El monolito no persiste información en disco y delega toda la persistencia en cachés de memoria volátil." }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama ilustra que la aplicación monolítica interactúa con una única base de datos global, mientras que cada microservicio tiene su base de datos propia e independiente (patrón database-per-service). (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q03",
    num: 3,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Arquitecturas y Comunicación",
    type: "single",
    prompt: "En el diagrama de microservicios mostrado, ¿cómo se distribuye el flujo de comunicación cuando un usuario realiza una solicitud?",
    options: [
      { id: "a", text: "El usuario envía su petición a un microservicio de entrada y los microservicios se comunican entre sí para completar las operaciones." },
      { id: "b", text: "El usuario debe enviar peticiones en paralelo a todos los microservicios del sistema de forma obligatoria." },
      { id: "c", text: "La base de datos recibe directamente la llamada del usuario y la redirige al microservicio correspondiente." },
      { id: "d", text: "Los microservicios tienen prohibido comunicarse entre sí y solo responden de forma aislada al usuario." }
    ],
    correctAnswers: ["a"],
    explanation: "El diagrama muestra flechas bidireccionales de interacción entre el usuario y un servicio inicial, y luego múltiples conexiones directas entre los distintos microservicios para coordinar procesos. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q04",
    num: 4,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Sincrónica",
    type: "single",
    prompt: "¿Cuál es la característica distintiva del modelo de «Comunicación Sincrónica» según la definición del material?",
    options: [
      { id: "a", text: "El cliente emite una petición y continúa su ejecución sin esperar la confirmación del servidor." },
      { id: "b", text: "Se envía un request y el cliente espera activamente la respuesta del servidor antes de continuar." },
      { id: "c", text: "La respuesta se envía antes de que el cliente formule la solicitud formal al servidor." },
      { id: "d", text: "Las respuestas se entregan exclusivamente mediante colas de mensajería diferida en el tiempo." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva define textualmente la comunicación sincrónica como: «Se envía un request y se espera la respuesta». (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q05",
    num: 5,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Comunicación Sincrónica",
    type: "single",
    prompt: "¿Qué protocolo estándar se asocia en el material como ejemplo representativo de comunicación sincrónica?",
    options: [
      { id: "a", text: "Protocolo UDP" },
      { id: "b", text: "Protocolo SMTP" },
      { id: "c", text: "Protocolo HTTP" },
      { id: "d", text: "Protocolo AMQP" }
    ],
    correctAnswers: ["c"],
    explanation: "La diapositiva indica de forma expresa «Protocolo HTTP» como el mecanismo estándar de solicitud y respuesta sincrónica entre cliente y servidor. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q06",
    num: 6,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs",
    type: "single",
    prompt: "De acuerdo con la definición formal presentada en la diapositiva, ¿qué es REST (Representational State Transfer)?",
    options: [
      { id: "a", text: "Un protocolo de transporte seguro que sustituye las conexiones de capa de transporte TCP/IP." },
      { id: "b", text: "Un estándar binario impuesto por la W3C para serializar datos exclusivamente en formato XML." },
      { id: "c", text: "Un conjunto de restricciones (constraints) que permite construir servicios web escalables, simples y desacoplados." },
      { id: "d", text: "Un framework de desarrollo web específico para aplicaciones creadas en lenguaje Java." }
    ],
    correctAnswers: ["c"],
    explanation: "La diapositiva aclara: «No es un protocolo, ni un estándar, sino un conjunto de restricciones (constraints) que, si se cumplen, permiten construir servicios web con ciertas propiedades deseables: escalabilidad, simplicidad, y desacoplamiento entre cliente y servidor». (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q07",
    num: 7,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes propiedades deseables se obtienen al cumplir con las restricciones arquitectónicas de REST? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Escalabilidad" },
      { id: "b", text: "Simplicidad" },
      { id: "c", text: "Acoplamiento fuerte entre cliente y servidor" },
      { id: "d", text: "Desacoplamiento entre cliente y servidor" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "El cumplimiento de las directrices REST busca garantizar escalabilidad, simplicidad y un desacoplamiento efectivo entre el cliente y el servidor. El acoplamiento fuerte es lo contrario a las buenas prácticas de diseño distribuido. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q08",
    num: 8,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs",
    type: "single",
    prompt: "¿Cómo define el material a una API (Application Programming Interface)?",
    options: [
      { id: "a", text: "Como un lenguaje de programación compilado orientado exclusivamente al backend de aplicaciones en la nube." },
      { id: "b", text: "Como un conjunto de reglas y definiciones que permite que dos componentes de software se comuniquen sin conocer detalles internos de implementación mutuos." },
      { id: "c", text: "Como un motor de persistencia relacional que reemplaza a los repositorios JPA en memoria." },
      { id: "d", text: "Como una biblioteca encargada de eliminar código repetitivo (boilerplate) en los modelos Java." }
    ],
    correctAnswers: ["b"],
    explanation: "La definición textual señala que es un «conjunto de reglas y definiciones que permite que dos componentes de software se comuniquen entre sí, sin que cada una necesite conocer los detalles internos de implementación de la otra». (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q09",
    num: 9,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Diseño de APIs REST - Fundamentos",
    type: "single",
    prompt: "¿Qué principio fundamental debe regir el diseño de un endpoint REST según los fundamentos expuestos?",
    options: [
      { id: "a", text: "Un endpoint debe contener siempre un verbo que describa la acción que va a ejecutar." },
      { id: "b", text: "Un endpoint REST debe representar recursos (cosas), no acciones." },
      { id: "c", text: "Un endpoint debe exponer directamente los nombres de las funciones internas del código fuente." },
      { id: "d", text: "Un endpoint debe cambiar dinámicamente de nombre de acuerdo con el perfil del usuario autenticado." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva establece como pilar fundamental: «Un endpoint REST debe representar recursos (cosas), no acciones». (Diapositiva 5)",
    diagram: null,
    points: 1
  },
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
      { id: "a", text: "Los nombres de las rutas en la URL." },
      { id: "b", text: "Los métodos HTTP (verbos como GET, POST, PUT, DELETE)." },
      { id: "c", text: "Los encabezados de autenticación de usuario." },
      { id: "d", text: "Los identificadores primarios numéricos de la base de datos." }
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
      { id: "a", text: "Un mensaje de error arbitrario codificado como texto plano dentro de la URL." },
      { id: "b", text: "Los códigos de estado del protocolo HTTP (HTTP status codes)." },
      { id: "c", text: "Parámetros obligatorios en la sección Query de la siguiente petición." },
      { id: "d", text: "El cierre inesperado de la conexión TCP por parte del servidor." }
    ],
    correctAnswers: ["b"],
    explanation: "El material explicita: «Utilizar los códigos de estado para representar el resultado» (por ejemplo 200 para éxito, 400 para error de validación, etc.). (Diapositiva 5)",
    diagram: null,
    points: 1
  }
];
