/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 05 (Preguntas 36 a 42)
 * Temas: Arquitectura Monolítica (Ventajas y Desventajas),
 * Microservicios (Definición, Ventajas, Database-per-service, Desventajas y Desafíos),
 * Monolitos vs Microservicios (Testing).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
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
      { id: "a", text: "Más facilidad para sumar nuevas tecnologías." },
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
      { id: "d", text: "Elevada sobrecarga de red y necesidad de coordinar llamadas entre servicios." }
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
      { id: "a", text: "Como un paquete comprimido único que concentra la lógica de negocio y se ejecuta en un único proceso." },
      { id: "b", text: "Como un estilo de arquitectura que define aplicaciones más pequeñas en cantidad de responsabilidades." },
      { id: "c", text: "Como una solución orientada a bases de datos relacionales donde múltiples esquemas comparten transacciones." },
      { id: "d", text: "Como un conjunto de librerías cliente diseñadas para delegar el cómputo del backend en el navegador web." }
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
      { id: "c", text: "Mayor facilidad de depuración al ejecutarse todo el código en un único proceso local." },
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
      { id: "a", text: "Todos los microservicios comparten de forma obligatoria una única base de datos relacional centralizada." },
      { id: "b", text: "Los microservicios evitan el uso de bases de datos delegando la persistencia en memoria volátil de red." },
      { id: "c", text: "Cada microservicio cuenta con su propia base de datos independiente (patrón database-per-service)." },
      { id: "d", text: "El motor de base de datos orquesta y ejecuta directamente los microservicios mediante procedimientos SQL." }
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
      { id: "d", text: "Mayor complejidad al exigir pipelines de integración y entrega continua (CI/CD)." }
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
      { id: "a", text: "Los microservicios resultan más sencillos de testear y depurar de forma aislada, mientras que el monolito requiere coordinar múltiples dependencias externas complejas." },
      { id: "b", text: "El monolito es más fácil de testear/debuggear, mientras que en microservicios el testeo es mucho más difícil al involucrar múltiples servicios interconectados." },
      { id: "c", text: "Ambas arquitecturas presentan exactamente los mismos retos y niveles de complejidad al momento de diseñar, coordinar y ejecutar pruebas de integración end-to-end." },
      { id: "d", text: "El monolito impide la automatización de pruebas debido a su alto acoplamiento, obligando a realizar verificaciones y auditorías de forma enteramente manual." }
    ],
    correctAnswers: ["b"],
    explanation: "En la diapositiva 15 se resalta como ventaja del monolito ser «Más fácil de testear/debuggear», mientras que en la diapositiva 16 se lista como desventaja de los microservicios que es «Mucho más difícil de testear (varios microservicios pueden estar involucrados)». (Diapositiva 15 y 16)",
    diagram: null,
    points: 1
  }
];
