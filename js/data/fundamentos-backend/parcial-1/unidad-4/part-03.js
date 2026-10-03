/**
 * Banco de Preguntas - UNIDAD 4 (Fundamentos Backend - Parcial 1)
 * Parte 03 (Preguntas 18 a 25)
 * Temas: Testing de Controladores (@WebMvcTest, MockMvc), MockServer y APIs Externas,
 * Tests de Integración (@SpringBootTest, Docker / Mocks), Cobertura de Código y CI/CD,
 * JaCoCo y Patrón de Delegación Controlador-Servicio.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "fb-p1-u4-q18",
    num: 18,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Testing de Controladores",
    type: "single",
    prompt: "Para llevar a cabo las pruebas unitarias de la capa de Controladores (Controller / capa REST) en Java, ¿qué tecnologías específicas se mencionan?",
    options: [
      { id: "a", text: "Uso de @DataJpaTest junto con una base de datos H2 en memoria." },
      { id: "b", text: "Uso de @SpringBootTest junto con contenedores de Docker para servicios." },
      { id: "c", text: "Uso de @WebMvcTest y la herramienta MockMvc para instanciar controladores." },
      { id: "d", text: "Uso exclusivo de MockServer para simular las peticiones del controlador." }
    ],
    correctAnswers: ["c"],
    explanation: "Para testear la capa REST en los controladores se utiliza la anotación @WebMvcTest acompañada de MockMvc para instanciar y enviar peticiones a los controladores. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q19",
    num: 19,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Testing de Controladores",
    type: "single",
    prompt: "Al probar la capa REST de un Controller, ¿cuál es la dependencia directa que se debe reemplazar mediante Mocks?",
    options: [
      { id: "a", text: "La capa de servicios." },
      { id: "b", text: "La capa de repositorios." },
      { id: "c", text: "El motor de base de datos." },
      { id: "d", text: "El servidor web de producción." }
    ],
    correctAnswers: ["a"],
    explanation: "La dependencia directa de la capa de controladores (Controller) es la capa de servicios (Service); por lo tanto, en las pruebas de controladores se emplean Mocks (Mockito) para reemplazar a los servicios. (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q20",
    num: 20,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "MockServer y APIs Externas",
    type: "single",
    prompt: "¿Qué herramienta se utiliza en Java para mockear llamadas a APIs externas y qué alcance puede tener dicha API según la documentación?",
    options: [
      { id: "a", text: "Se utiliza Mockito; la API solo puede ser un servicio externo de terceros." },
      { id: "b", text: "Se utiliza MockServer; la API puede ser externa o ser otro microservicio del sistema." },
      { id: "c", text: "Se utiliza MockMvc; la API representa únicamente repositorios locales." },
      { id: "d", text: "Se utiliza JaCoCo; la API solo puede ser una base de datos relacional." }
    ],
    correctAnswers: ["b"],
    explanation: "Se utiliza MockServer para simular llamadas HTTP a APIs externas. El documento resalta que una API externa puede ser tanto un sistema ajeno como otro microservicio perteneciente al propio sistema. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q21",
    num: 21,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Tests de Integración",
    type: "single",
    prompt: "¿Qué define a un test de integración a nivel de alcance y contexto en Spring Boot?",
    options: [
      { id: "a", text: "Testea un solo componente de forma aislada sin cargar ninguna configuración." },
      { id: "b", text: "Testea únicamente sentencias SQL utilizando una base de datos H2 con @DataJpaTest." },
      { id: "c", text: "Testea exclusivamente serializaciones JSON mediante el uso aislado de MockMvc." },
      { id: "d", text: "Testea más de un componente utilizando la anotación @SpringBootTest y el contexto completo." }
    ],
    correctAnswers: ["d"],
    explanation: "Los tests de integración evalúan más de un componente de manera simultánea utilizando el contexto completo del sistema mediante la anotación @SpringBootTest. (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q22",
    num: 22,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Tests de Integración",
    type: "single",
    prompt: "En el contexto de los tests de integración, ¿cómo pueden tratarse las dependencias de componentes externos?",
    options: [
      { id: "a", text: "Deben ser reemplazadas obligatoriamente por arreglos estáticos de datos." },
      { id: "b", text: "Es obligatorio eliminarlas del código fuente antes de ejecutar los tests." },
      { id: "c", text: "Se pueden utilizar dependencias reales (mediante Docker) o emplear mocks." },
      { id: "d", text: "Se deben reemplazar únicamente mediante scripts de base de datos H2." }
    ],
    correctAnswers: ["c"],
    explanation: "Para la gestión de componentes externos en pruebas de integración, el material explicita que se pueden utilizar dependencias reales (por ejemplo, levantadas con Docker) o bien recurrir al uso de mocks. (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q23",
    num: 23,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Cobertura de Código y CI/CD",
    type: "single",
    prompt: "¿Qué utilidad práctica ofrece la medición del porcentaje de cobertura de código al integrarse en un flujo de CI/CD?",
    options: [
      { id: "a", text: "Corrige automáticamente los errores de sintaxis detectados en el código antes de compilar." },
      { id: "b", text: "Permite saber si un Pull Request altera la cobertura y puede hacer fallar el build si no alcanza el umbral." },
      { id: "c", text: "Genera instancias de base de datos en memoria para cada prueba unitaria que se ejecute." },
      { id: "d", text: "Aumenta la velocidad de compilación al descartar los tests que tienen menor cobertura." }
    ],
    correctAnswers: ["b"],
    explanation: "Al integrar la medición de cobertura con herramientas de CI/CD, es posible detectar si un PR modifica el porcentaje de cobertura y configurar reglas para que la construcción (build) falle si no se cumple el umbral aceptado por la organización. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q24",
    num: 24,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "JaCoCo",
    type: "single",
    prompt: "¿Qué es JaCoCo según lo expresado en el material?",
    options: [
      { id: "a", text: "Una librería gratuita de cobertura de código para Java (Java Code Coverage Library)." },
      { id: "b", text: "Un framework de aserciones para reemplazar JUnit en proyectos de Java." },
      { id: "c", text: "Una herramienta para la creación de contenedores Docker en pruebas integrales." },
      { id: "d", text: "Un plugin de Spring Boot utilizado para la instanciación de controladores web." }
    ],
    correctAnswers: ["a"],
    explanation: "JaCoCo se define como una librería libre/gratuita de cobertura de código para Java (\"JaCoCo Java Code Coverage Library\"). (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q25",
    num: 25,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Patrón de Delegación Controlador-Servicio",
    type: "single",
    prompt: "Al observar la implementación del controlador (ClienteControlador), ¿qué patrón de delegación se aprecia entre el Controlador y la Capa de Servicio?",
    options: [
      { id: "a", text: "El controlador ejecuta consultas SQL directamente mediante la llamada al repositorio." },
      { id: "b", text: "El servicio invoca directamente las anotaciones @WebMvcTest para transformar los datos." },
      { id: "c", text: "El controlador delega las operaciones de negocio (crear, buscarPorId, eliminar) a la capa de servicio." },
      { id: "d", text: "El controlador gestiona la base de datos H2 sin pasar por las entidades de modelo." }
    ],
    correctAnswers: ["c"],
    explanation: "En el código presentado en la diapositiva 16, la clase ClienteControlador recibe una instancia de ClienteServicio y delega en ella las operaciones REST como servicio.crear(), servicio.buscarPorId(), servicio.buscarTodos(), servicio.actualizar() y servicio.eliminar(). (Diapositiva 16)",
    diagram: null,
    points: 1
  }
];
