/**
 * Banco de Preguntas - UNIDAD 4 (Fundamentos Backend - Parcial 1)
 * Parte 02 (Preguntas 9 a 17)
 * Temas: Mocks y Stubbing, Verificación en Unit Tests, Ciclo de Vida JUnit,
 * Unit Testing sin dependencias, Testing de Repositorios (H2, @DataJpaTest),
 * Testing de Servicios y Mockito (@ExtendWith, @Mock, @InjectMocks).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "fb-p1-u4-q09",
    num: 9,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Mocks y Stubbing",
    type: "single",
    prompt: "En el contexto del manejo de dependencias mediante Mocks, ¿en qué consiste el concepto de \"Stubbing\"?",
    options: [
      { id: "a", text: "En configurar los valores de entrada esperados y las respuestas esperadas en los mocks." },
      { id: "b", text: "En verificar cuántas veces fue invocado un método durante la prueba." },
      { id: "c", text: "En levantar el contexto completo de Spring para realizar pruebas integrales." },
      { id: "d", text: "En capturar excepciones no controladas generadas por la base de datos." }
    ],
    correctAnswers: ["a"],
    explanation: "El concepto de \"Stubbing\" se define en el material como la acción de setear o definir los valores de entrada esperados en los mocks y las respuestas simuladas que estos deben retornar. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Estructura de Unit Test",
    type: "multiple",
    prompt: "¿Qué acciones o comprobaciones forman parte de la etapa de verificación en un test unitario según el material? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Modificar la estructura del esquema de tablas en la base de datos." },
      { id: "b", text: "Comprobar valores mediante métodos como Assertions.assertEquals()." },
      { id: "c", text: "Verificar las invocaciones e interacciones realizadas sobre los mocks." },
      { id: "d", text: "Validar el lanzamiento de excepciones mediante Assertions.assertThrows()." }
    ],
    correctAnswers: ["b", "c", "d"],
    explanation: "Entre las verificaciones mencionadas se destacan la evaluación de valores mediante Assertions.assertEquals(), el uso de Assertions.assertThrows() para excepciones, y la verificación de las invocaciones e interacciones producidas sobre los objetos Mocks. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Ciclo de Vida JUnit",
    type: "single",
    prompt: "Durante el ciclo de vida de ejecución de JUnit, ¿en qué momento se ejecuta un método anotado con @BeforeEach?",
    options: [
      { id: "a", text: "Una sola vez al principio, antes de que se ejecute cualquier método de test." },
      { id: "b", text: "Únicamente cuando la totalidad de los métodos anotados con @Test han finalizado." },
      { id: "c", text: "Justo después de la ejecución de cada método @Test para limpiar el contexto." },
      { id: "d", text: "Inmediatamente antes de la ejecución de cada uno de los métodos de prueba @Test." }
    ],
    correctAnswers: ["d"],
    explanation: "Según el diagrama del ciclo de vida de JUnit, @BeforeEach se ejecuta inmediatamente antes de cada método individual anotado con @Test. Si hay múltiples @Test, se vuelve a ejecutar antes de cada uno. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Ciclo de Vida JUnit",
    type: "single",
    prompt: "¿Qué característica de definición comparten las anotaciones @BeforeAll y @AfterAll en el ciclo de vida de JUnit?",
    options: [
      { id: "a", text: "Deben ser aplicadas sobre métodos estáticos dentro de la clase de prueba." },
      { id: "b", text: "Deben aplicarse exclusivamente sobre métodos no estáticos dentro de la clase." },
      { id: "c", text: "Se ejecutan repetidamente antes y después de cada método anotado con @Test." },
      { id: "d", text: "Requieren obligatoriamente la presencia de un contexto de Spring cargado." }
    ],
    correctAnswers: ["a"],
    explanation: "En el diagrama del ciclo de vida de JUnit se explicita que tanto @BeforeAll como @AfterAll son métodos estáticos ((estático)), ejecutándose una sola vez al inicio y al final de la suite completa respectivamente. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Unit Testing sin Dependencias",
    type: "single",
    prompt: "Dentro del ámbito del Unit Testing, ¿cuál es considerado el caso más simple de probar?",
    options: [
      { id: "a", text: "Aquel donde el componente a probar interactúa con varias bases de datos." },
      { id: "b", text: "Aquel en el que se requiere simular la capa REST mediante clientes HTTP." },
      { id: "c", text: "Aquel en el que no existen dependencias en el componente bajo prueba." },
      { id: "d", text: "Aquel que necesita levantar el contexto completo de Spring Boot." }
    ],
    correctAnswers: ["c"],
    explanation: "El material indica explícitamente que dentro de las pruebas unitarias \"el caso más simple es cuando no hay dependencias\", siendo además mucho más rápido y menos costoso de ejecutar. (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Testing de Repositorios",
    type: "single",
    prompt: "Al realizar pruebas en la capa de Repositorio (Repository) en Java, ¿cuál es la dependencia principal y qué recurso se utiliza comúnmente para gestionarla?",
    options: [
      { id: "a", text: "La capa de servicios, utilizando Mocks gestionados por la librería Mockito." },
      { id: "b", text: "La base de datos, utilizando una base de datos en memoria como H2." },
      { id: "c", text: "Los controladores REST, utilizando la herramienta cliente MockMvc." },
      { id: "d", text: "Las APIs externas, utilizando un servidor simulado como MockServer." }
    ],
    correctAnswers: ["b"],
    explanation: "En los tests de Repository, la dependencia directa es la base de datos. Para testear las consultas agregadas sin afectar entornos reales, se utiliza una base de datos en memoria como H2. (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q15",
    num: 15,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Testing de Repositorios",
    type: "single",
    prompt: "¿Cuál es el propósito principal de utilizar la anotación @DataJpaTest al probar repositorios?",
    options: [
      { id: "a", text: "Cargar únicamente las clases que están relacionadas con el acceso a datos." },
      { id: "b", text: "Cargar el contexto completo del sistema incluyendo controladores y servicios." },
      { id: "c", text: "Mockear automáticamente las respuestas del servicio WebMvc en las pruebas." },
      { id: "d", text: "Levantar servidores HTTP simulados para realizar peticiones externas." }
    ],
    correctAnswers: ["a"],
    explanation: "La anotación @DataJpaTest se emplea en Java para cargar únicamente los componentes y clases relacionados con la capa de acceso a datos (JPA/Hibernate), optimizando la ejecución de la prueba. (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q16",
    num: 16,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Testing de Servicios",
    type: "single",
    prompt: "Al testear la capa de Servicio (Service) en Java, ¿qué aspecto se está evaluando y cómo se manejan sus dependencias?",
    options: [
      { id: "a", text: "Se evalúa la capa REST y sus dependencias se gestionan con bases de datos H2." },
      { id: "b", text: "Se evalúa el acceso a datos y sus dependencias se manejan mediante @SpringBootTest." },
      { id: "c", text: "Se evalúan las llamadas externas y sus dependencias se manejan con MockServer." },
      { id: "d", text: "Se evalúa la capa de negocio y sus dependencias se manejan con Mocks (Mockito)." }
    ],
    correctAnswers: ["d"],
    explanation: "Al probar la capa de Service se testea la lógica de negocio. Como la dependencia directa es la capa de Repositorios, se utilizan Mocks (Mockito) para aislar la prueba de las dependencias propias del proyecto. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q17",
    num: 17,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Mockito y Extensiones",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes funciones realiza la extensión @ExtendWith(MockitoExtension.class) durante la ejecución de los tests? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Inicializar automáticamente los objetos mocks anotados con @Mock." },
      { id: "b", text: "Inyectar los mocks creados dentro de la clase anotada con @InjectMocks." },
      { id: "c", text: "Validar el uso correcto de los mocks una vez finalizado el test." },
      { id: "d", text: "Crear tablas automáticas dentro de una base de datos PostgreSQL real." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "@ExtendWith(MockitoExtension.class) se encarga de: 1) Inicializar automáticamente los mocks anotados con @Mock, 2) Inyectarlos en la instancia anotada con @InjectMocks, y 3) Validar el uso correcto de los mocks al finalizar la prueba. (Diapositiva 11)",
    diagram: null,
    points: 1
  }
];
