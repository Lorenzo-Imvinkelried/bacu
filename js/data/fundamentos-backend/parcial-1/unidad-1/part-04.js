/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 1 (Parte 4: Q32 - Q42)
 * Temas: Flyway / Migraciones, Arquitectura Monolítica, Microservicios, Testing y Comparativa.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U1_PART_04_QUESTIONS = [
  {
    id: "fb-p1-u1-q32",
    num: 32,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Flyway / Migraciones",
    type: "single",
    prompt: "¿En qué momento del ciclo de vida de la aplicación se ejecutan las migraciones de Flyway?",
    options: [
      { id: "a", text: "Al apagar el servidor de base de datos." },
      { id: "b", text: "Al levantar el servidor de la aplicación." },
      { id: "c", text: "Cada vez que un usuario realiza una consulta GET en una API." },
      { id: "d", text: "Exclusivamente cuando la aplicación arroja un error 500 Internal Server Error." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica de forma explícita que Flyway «corre al levantar el servidor». (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q33",
    num: 33,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Flyway / Migraciones",
    type: "single",
    prompt: "¿Cómo sabe Flyway qué scripts de migración ya han sido ejecutados para no volver a correrlos?",
    options: [
      { id: "a", text: "Guarda información en la base de datos sobre los scripts que fueron corridos en una tabla de historial (como flyway_schema_history)." },
      { id: "b", text: "Envía un correo electrónico al administrador con el log de compilación." },
      { id: "c", text: "Borra físicamente del disco del servidor los archivos .sql ya ejecutados." },
      { id: "d", text: "Modifica el código fuente de los controladores de Spring en cada inicio." }
    ],
    correctAnswers: ["a"],
    explanation: "Flyway consulta la tabla de metadatos flyway_schema_history donde registra versión, descripción, script, checksum y resultado de ejecución de cada migración. (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q34",
    num: 34,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Flyway / Migraciones",
    type: "single",
    prompt: "¿Qué sugerencia de diseño mencionada por algunos autores se destaca en la diapositiva respecto al uso de Flyway?",
    options: [
      { id: "a", text: "Usarlo únicamente para ingresar datos (seeds) y nunca para esquemas." },
      { id: "b", text: "Usarlo solo para modificaciones de esquema (DDL), no para ingresar datos (DML)." },
      { id: "c", text: "Ejecutarlo únicamente en entornos de producción y desactivarlo en desarrollo." },
      { id: "d", text: "No emplear scripts SQL sino únicamente archivos de texto plano sin formato." }
    ],
    correctAnswers: ["b"],
    explanation: "El material señala textualmente: «Algunos autores sugieren solo usarlo para modificaciones de esquema, no para ingresar datos». (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q35",
    num: 35,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura Monolítica",
    type: "single",
    prompt: "¿Cuál de las siguientes afirmaciones describe conceptualmente a una «Arquitectura Monolítica» según el material?",
    options: [
      { id: "a", text: "Un conjunto de microaplicaciones desacopladas que se comunican exclusivamente por eventos asíncronos." },
      { id: "b", text: "Un servicio basado en una única aplicación que se encarga de todo el funcionamiento del sistema." },
      { id: "c", text: "Una solución donde cada tabla de la base de datos se aloja en un servidor físico diferente." },
      { id: "d", text: "Una arquitectura sin persistencia que delega todo el almacenamiento en la memoria del navegador." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto indica que el monolito es: «Un servicio basado en una única aplicación. Esta aplicación se encarga de todo». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura Monolítica",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes características se identifican como ventajas de la arquitectura monolítica en la diapositiva? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Mayor facilidad para incorporar nuevas tecnologías disímiles." },
      { id: "b", text: "Mejor seguridad." },
      { id: "c", text: "Más simplicidad (sólo una app)." },
      { id: "d", text: "Más fácil de testear/debuggear." }
    ],
    correctAnswers: ["b", "c", "d"],
    explanation: "Las ventajas listadas son: mejor seguridad, mayor simplicidad al tratarse de una única aplicación y mayor facilidad para testear y debuggear. Agregar nuevas tecnologías figura explícitamente como una desventaja. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q37",
    num: 37,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura Monolítica",
    type: "single",
    prompt: "¿Cuáles son las dos principales desventajas atribuidas a la arquitectura monolítica en el material?",
    options: [
      { id: "a", text: "Complejidad extrema de pruebas unitarias y dependencia de redes distribuidas." },
      { id: "b", text: "Es difícil de agregar nuevas tecnologías y más difícil de escalar." },
      { id: "c", text: "Excesiva cantidad de repositorios de código y duplicación de bases de datos." },
      { id: "d", text: "Costo elevado en licencias de mensajería y sincronización obligatoria entre servicios." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva destaca bajo desventajas: «Es difícil de agregar nuevas tecnologías» y «Más difícil de escalar». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q38",
    num: 38,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Microservicios",
    type: "single",
    prompt: "¿Cómo define el material al estilo arquitectónico de «Microservicios»?",
    options: [
      { id: "a", text: "Como un paquete comprimido único que contiene toda la lógica de negocio centralizada." },
      { id: "b", text: "Como un estilo de arquitectura que define aplicaciones más pequeñas en cantidad de responsabilidades." },
      { id: "c", text: "Como un modelo de base de datos relacional compartida entre múltiples tablas sin claves foráneas." },
      { id: "d", text: "Como una biblioteca de Java destinada a eliminar código repetitivo en clases de entidad." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto define a los microservicios como: «Estilo de arquitectura que define aplicaciones más pequeñas en cantidad de responsabilidades». (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q39",
    num: 39,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Microservicios",
    type: "multiple",
    prompt: "¿Cuáles son las ventajas de la arquitectura de microservicios señaladas en la diapositiva? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Mejor escalabilidad." },
      { id: "b", text: "Más automatizable (CI/CD, aplicaciones más chicas)." },
      { id: "c", text: "Mayor simplicidad de depuración en un único proceso en memoria." },
      { id: "d", text: "Más resistencia a fallos, ya que una parte puede fallar pero las demás siguen funcionando." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "La diapositiva menciona tres ventajas directas: mejor escalabilidad, mayor facilidad de automatización (CI/CD) y alta resistencia a fallos (aislamiento de caídas). La simplicidad de depuración pertenece a las arquitecturas monolíticas. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q40",
    num: 40,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Microservicios",
    type: "single",
    prompt: "En el modelo de microservicios mostrado en el diagrama, ¿cómo se gestiona habitualmente la persistencia de datos?",
    options: [
      { id: "a", text: "Todos los microservicios comparten de forma obligatoria una única base de datos centralizada." },
      { id: "b", text: "Los microservicios no utilizan bases de datos para evitar la latencia de red." },
      { id: "c", text: "Cada microservicio cuenta con su propia base de datos independiente (patrón database-per-service)." },
      { id: "d", text: "La base de datos administra y ejecuta los microservicios mediante procedimientos almacenados." }
    ],
    correctAnswers: ["c"],
    explanation: "En el diagrama de la diapositiva 16, cada microservicio individual tiene conectada su propia base de datos dedicada, garantizando el desacoplamiento de datos. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q41",
    num: 41,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Microservicios",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes opciones corresponden a desventajas o desafíos de los microservicios expuestos en el documento? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Mucho más difícil de testear (varios microservicios pueden estar involucrados)." },
      { id: "b", text: "Potencialmente es menos seguro." },
      { id: "c", text: "Muchas veces se requiere sincronización entre microservicios." },
      { id: "d", text: "Imposibilidad total de utilizar integración y entrega continua (CI/CD)." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "Las tres desventajas enumeradas en la diapositiva son: dificultad de testing por involucrar múltiples componentes distribuidos, potencial menor seguridad (mayor superficie de ataque e interfaces expuestas) y necesidad frecuente de sincronización entre servicios. CI/CD figura más bien como una ventaja. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q42",
    num: 42,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Monolitos vs Microservicios",
    type: "single",
    prompt: "Al contrastar la arquitectura Monolítica frente a la de Microservicios respecto a las pruebas de software (testing), ¿cuál es la conclusión técnica del material?",
    options: [
      { id: "a", text: "Los microservicios son más fáciles de testear porque su base de código es más reducida." },
      { id: "b", text: "El monolito es más fácil de testear/debuggear, mientras que en microservicios el testeo es mucho más difícil al involucrar múltiples servicios interconectados." },
      { id: "c", text: "Ambas arquitecturas presentan idéntico nivel de esfuerzo y complejidad al ejecutar pruebas end-to-end." },
      { id: "d", text: "El monolito no permite pruebas automatizadas, obligando a realizarlas de forma manual." }
    ],
    correctAnswers: ["b"],
    explanation: "En la diapositiva 15 se resalta como ventaja del monolito ser «Más fácil de testear/debuggear», mientras que en la diapositiva 16 se lista como desventaja de los microservicios que es «Mucho más difícil de testear (varios microservicios pueden estar involucrados)». (Diapositiva 15 y 16)",
    diagram: null,
    points: 1
  }
];
