/**
 * Banco de Preguntas - UNIDAD 4 (Fundamentos Backend - Parcial 1)
 * Parte 01 (Preguntas 1 a 8)
 * Temas: Ciclo TDD, Diagrama de Flujo TDD, Beneficios de TDD,
 * Pirámide de Testing, Manejo de Dependencias y Estructura BDD (WHEN).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "fb-p1-u4-q01",
    num: 1,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Ciclo TDD",
    type: "single",
    prompt: "¿Cuál es la secuencia de pasos que compone el ciclo iterativo básico de Test Driven Development (TDD)?",
    options: [
      { id: "a", text: "Escribir un test que falle, hacer que el test pase y refactorizar el código resultante." },
      { id: "b", text: "Escribir el código de producción, refactorizar la implementación y crear las pruebas unitarias." },
      { id: "c", text: "Ejecutar los tests existentes, refactorizar la arquitectura y escribir el código faltante." },
      { id: "d", text: "Crear la base de datos, escribir las pruebas de integración y adaptar la capa del servicio." }
    ],
    correctAnswers: ["a"],
    explanation: "El ciclo de TDD se basa en tres etapas consecutivas e iterativas: primero escribir un test que falle (\"Write a failing test\"), luego implementar el código mínimo para hacerlo pasar (\"Make the test pass\"), y finalmente refactorizar el código manteniendo las pruebas pasando (\"Refactor\"). (Diapositivas 2 y 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q02",
    num: 2,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Diagrama de Flujo TDD",
    type: "single",
    prompt: "Según el diagrama de flujo de TDD, ¿qué acción inmediata debe realizarse tras ejecutar un test y obtener un resultado fallido (Fail)?",
    options: [
      { id: "a", text: "Detener inmediatamente el desarrollo del sistema." },
      { id: "b", text: "Escribir un test adicional antes de modificar algo." },
      { id: "c", text: "Realizar los cambios necesarios en el código." },
      { id: "d", text: "Iniciar directamente la fase de refactorización." }
    ],
    correctAnswers: ["c"],
    explanation: "En el diagrama de flujo de TDD, cuando la ejecución de un test resulta en fallo (\"Fail\"), el paso directo a seguir es modificar el código de producción (\"Make changes to the code\") y volver a ejecutar el test. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q03",
    num: 3,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Beneficios de TDD",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes elementos son señalados explícitamente como beneficios de aplicar Test Driven Development (TDD)? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Detección de issues mucho más temprano." },
      { id: "b", text: "Eliminación absoluta de la necesidad de refactorizar." },
      { id: "c", text: "Garantía de compatibilidad automática con bases de datos." },
      { id: "d", text: "Mayor cobertura de testing y mejor diseño." }
    ],
    correctAnswers: ["a", "d"],
    explanation: "Los beneficios explícitos enumerados para TDD son: mejora en la calidad del código, detección de issues mucho más temprano, mejor diseño, refactorización más rápida y mayor cobertura de testing. No elimina la necesidad de refactorizar ni garantiza compatibilidad de bases de datos. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q04",
    num: 4,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Beneficios de TDD",
    type: "single",
    prompt: "¿Cómo impacta la adopción de TDD en el proceso de refactorización según el contenido presentado?",
    options: [
      { id: "a", text: "Provoca que la refactorización sea un proceso más lento pero seguro." },
      { id: "b", text: "Invalida la necesidad de refactorizar al escribir tests con anterioridad." },
      { id: "c", text: "Reemplaza la refactorización por la reescritura completa del módulo." },
      { id: "d", text: "Permite efectuar una refactorización de código de manera más rápida." }
    ],
    correctAnswers: ["d"],
    explanation: "Uno de los beneficios específicos mencionados de TDD es lograr una \"Refactorización más rápida\", ya que se cuenta con una suite de pruebas que valida que el comportamiento no cambie durante el rediseño. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q05",
    num: 5,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Pirámide de Testing",
    type: "single",
    prompt: "En la pirámide de testing, ¿qué características definen a las pruebas unitarias (Unit test) en comparación con los otros niveles?",
    options: [
      { id: "a", text: "Menor nivel de aislamiento, ejecución más lenta y costo más elevado." },
      { id: "b", text: "Mayor nivel de aislamiento, ejecución más rápida y menor costo monetario." },
      { id: "c", text: "Mayor nivel de integración, ejecución más rápida y costo intermedio." },
      { id: "d", text: "Menor nivel de integración, ejecución más lenta y costo económico bajo." }
    ],
    correctAnswers: ["b"],
    explanation: "En la base de la pirámide se ubican los \"Unit test\", los cuales se caracterizan por ofrecer mayor aislamiento (\"More isolation\"), ser más rápidos (\"Faster\") y tener un menor costo económico (\"$\"). (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q06",
    num: 6,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Pirámide de Testing",
    type: "single",
    prompt: "Considerando la pirámide de testing, ¿cómo se posicionan los tests de UI frente a los tests de Service/Integration?",
    options: [
      { id: "a", text: "Tienen mayor integración, son más lentos de ejecutar y conllevan un mayor costo." },
      { id: "b", text: "Tienen mayor aislamiento, son más rápidos de ejecutar y resultan más económicos." },
      { id: "c", text: "Tienen menor integración, son más lentos de ejecutar y resultan más económicos." },
      { id: "d", text: "Tienen mayor aislamiento, son más rápidos de ejecutar y conllevan un mayor costo." }
    ],
    correctAnswers: ["a"],
    explanation: "Los tests de UI están situados en el vértice superior de la pirámide, lo que implica que poseen mayor grado de integración (\"More integration\"), son más lentos (\"Slower\") y son los más costosos (\"$$$\"). (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q07",
    num: 7,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Manejo de Dependencias",
    type: "single",
    prompt: "Sin importar el tipo de test que se esté implementando, ¿dónde reside la diferencia principal entre ellos?",
    options: [
      { id: "a", text: "En el lenguaje de programación elegido para redactar las aserciones." },
      { id: "b", text: "En la velocidad del procesador donde se ejecutan las pruebas." },
      { id: "c", text: "En la cantidad de clases modelo que intervienen en la prueba." },
      { id: "d", text: "En la manera en que se gestionan y manejan las dependencias." }
    ],
    correctAnswers: ["d"],
    explanation: "La diapositiva establece expresamente que \"sin importar el tipo de test que estemos implementando, la diferencia principal está en cómo manejamos las dependencias\" entre las distintas capas (Controller, Service, Repository, DB, Models). (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u4-q08",
    num: 8,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-4",
    topic: "Estructura de Unit Test",
    type: "single",
    prompt: "En la estructura de un test unitario, ¿a qué corresponde la fase identificada como \"WHEN\"?",
    options: [
      { id: "a", text: "A la configuración del escenario inicial y preparación de los datos." },
      { id: "b", text: "A la verificación final de que el resultado obtenido coincide con el esperado." },
      { id: "c", text: "A la ejecución de la acción o el comportamiento específico a probar." },
      { id: "d", text: "A la inicialización del contexto general de la aplicación en memoria." }
    ],
    correctAnswers: ["c"],
    explanation: "En la convención BDD (Given-When-Then), la sección \"WHEN\" representa el momento en que ocurre la acción o el comportamiento exacto que se desea evaluar (por ejemplo, llamar al método sumar). (Diapositiva 6)",
    diagram: null,
    points: 1
  }
];
