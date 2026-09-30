/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 01 (Preguntas 1 a 9)
 * Temas: Arquitecturas y Comunicación (Premisa central, Almacenamiento Monolito vs Microservicios,
 * Flujo de peticiones), Comunicación Sincrónica (Definición, Protocolo HTTP),
 * REST APIs (Definición, Restricciones y Propiedades deseables, Definición de API),
 * Diseño de APIs REST (Recursos vs Acciones).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
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
      { id: "a", text: "La comunicación intermodular es una propiedad exclusiva de arquitecturas distribuidas basadas en microservicios." },
      { id: "b", text: "En cualquier arquitectura existe comunicación entre sus distintos componentes." },
      { id: "c", text: "Las aplicaciones monolíticas operan como bloques cerrados que prescinden de cualquier intercambio entre capas." },
      { id: "d", text: "La comunicación entre módulos solo cobra relevancia técnica cuando intervienen llamadas a través de redes remotas." }
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
      { id: "a", text: "El monolito particiona sus datos asignando un motor por módulo, mientras que los microservicios centralizan toda su información en una única base compartida." },
      { id: "b", text: "El monolito se conecta a una base de datos centralizada, mientras que en microservicios cada servicio cuenta con su propia base de datos dedicada." },
      { id: "c", text: "El monolito delega el almacenamiento en sistemas distribuidos en la nube, mientras que los microservicios omiten bases de datos para reducir la latencia." },
      { id: "d", text: "El monolito administra esquemas de persistencia aislados por capa funcional, mientras que los microservicios sincronizan tablas comunes sin aislamiento." }
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
      { id: "b", text: "El usuario despacha solicitudes simultáneas a todos los servicios del clúster para que procesen la tarea de manera paralela." },
      { id: "c", text: "El usuario interactúa de forma directa con el motor de base de datos, el cual orquesta las llamadas hacia cada microservicio." },
      { id: "d", text: "El usuario canaliza cada interacción por separado hacia servicios aislados que tienen prohibido comunicarse entre sí." }
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
      { id: "a", text: "El cliente emite una petición y reanuda sus tareas sin aguardar la confirmación o el resultado del servidor." },
      { id: "b", text: "Se envía un request y el cliente espera activamente la respuesta del servidor antes de continuar." },
      { id: "c", text: "El servidor procesa y remite los datos de manera preventiva antes de recibir la solicitud formal del cliente." },
      { id: "d", text: "La transferencia de mensajes se realiza exclusivamente mediante colas persistentes con entrega postergada en el tiempo." }
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
      { id: "a", text: "Un protocolo estricto de transporte y cifrado binario que reemplaza la capa TCP/IP en la comunicación de servicios." },
      { id: "b", text: "Un estándar internacional promovido por la W3C que obliga al intercambio de mensajes exclusivamente en formato XML." },
      { id: "c", text: "Un conjunto de restricciones (constraints) que permite construir servicios web escalables, simples y desacoplados." },
      { id: "d", text: "Un framework de desarrollo web integrado en el núcleo de Java para la gestión automatizada de peticiones HTTP." }
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
      { id: "a", text: "Como un lenguaje de programación compilado de propósito general orientado a la construcción de microservicios backend de alto rendimiento en la nube." },
      { id: "b", text: "Como un conjunto de reglas y definiciones que permite que dos componentes de software se comuniquen sin conocer detalles internos de implementación mutuos." },
      { id: "c", text: "Como un entorno de persistencia y mapeo relacional que sustituye a los repositorios de Spring Data para la consulta directa de tablas en memoria." },
      { id: "d", text: "Como un marco de trabajo especializado en la eliminación de código repetitivo y la autogeneración de clases de dominio dentro del modelo backend." }
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
      { id: "a", text: "Un endpoint REST debe contener un verbo explicativo que detalle la acción a ejecutar." },
      { id: "b", text: "Un endpoint REST debe representar recursos (cosas), no acciones." },
      { id: "c", text: "Un endpoint REST debe replicar de forma directa la firma del método en el código Java." },
      { id: "d", text: "Un endpoint REST debe estructurarse según el rol y nivel de acceso del cliente conectado." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva establece como pilar fundamental: «Un endpoint REST debe representar recursos (cosas), no acciones». (Diapositiva 5)",
    diagram: null,
    points: 1
  }
];
