/**
 * Banco de Preguntas - UNIDAD 2 (Fundamentos Backend - Parcial 1)
 * Parte 04 (Preguntas 28 a 36)
 * Temas: Formato de Respuestas (Arrays directos en raíz JSON), Programación Genérica
 * (Verificación en Runtime vs Compilación, ClassCastException, Sin casteo explícito,
 * Comportamiento común genérico, Operaciones comunes de lista, Parámetro formal <T>),
 * REST APIs en Spring Boot (Capa de Controladores).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart04 = [
  {
    id: "fb-p1-u2-q28",
    num: 28,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Manejo de Errores y Formato de Respuestas",
    type: "single",
    prompt: "En la diapositiva 11 se plantea la pregunta: «¿Qué problema tiene esta respuesta?» al devolver una lista plana directa en la raíz del JSON:\n[\n  { \"nombre\": \"Teclado mecánico\", \"precio\": 45.99, \"stock\": 120 },\n  { \"nombre\": \"Mouse inalámbrico\", \"precio\": 19.50, \"stock\": 80 }\n]\n¿Cuál es la limitación técnica de devolver directamente un array como raíz de la respuesta?",
    options: [
      { id: "a", text: "Provoca fallos en los analizadores de los navegadores modernos al ser incapaces de procesar arreglos directos en la raíz." },
      { id: "b", text: "Dificulta la extensibilidad futura (por ejemplo, agregar metadatos, paginación o enlaces) sin romper la compatibilidad con el cliente." },
      { id: "c", text: "Impide que la biblioteca de serialización convierta adecuadamente los tipos numéricos y cadenas de texto al formato estándar." },
      { id: "d", text: "Obliga al servidor a generar identificadores únicos consecutivos para cada elemento del arreglo antes de emitir la respuesta." }
    ],
    correctAnswers: ["b"],
    explanation: "Al retornar un array raíz sin envolverlo en un objeto contenedor (por ejemplo { \"data\": [...], \"pagination\": {...} }), no se «piensa la respuesta con el futuro en mente», complicando agregar metadatos como paginación, total de registros o filtros aplicados. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q29",
    num: 29,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Runtime",
    type: "single",
    prompt: "Al analizar el siguiente código de Java tradicional sin genéricos:\n\nList lista = new ArrayList();\nlista.add(\"texto\");\nlista.add(123);\nString s = (String) lista.get(1);\n\n¿Qué ocurre durante su ejecución?",
    options: [
      { id: "a", text: "El compilador detecta incompatibilidad de tipos en lista.add(123) impidiendo generar el archivo de bytecode." },
      { id: "b", text: "Compila sin problemas, pero arroja una excepción ClassCastException en tiempo de ejecución (runtime)." },
      { id: "c", text: "La máquina virtual ejecuta un casteo implícito del número entero a String sin provocar excepciones ni advertencias." },
      { id: "d", text: "Se interrumpe la ejecución con un error NullPointerException al intentar leer el índice mediante lista.get(1)." }
    ],
    correctAnswers: ["b"],
    explanation: "Sin genéricos, la lista almacena instancias de tipo Object. Al insertar un entero en la posición 1 e intentar castearlo forzosamente a (String), la máquina virtual lanza ClassCastException en runtime. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q30",
    num: 30,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Runtime",
    type: "single",
    prompt: "¿Cuál era la desventaja de que la verificación de tipos se diera en tiempo de ejecución (runtime) antes del uso de tipos genéricos?",
    options: [
      { id: "a", text: "El proceso de compilación requería mayores ciclos de procesamiento estático antes de autorizar el despliegue del sistema." },
      { id: "b", text: "Los errores de casteo solo se descubrían cuando el código ya estaba en ejecución, provocando caídas inesperadas del sistema." },
      { id: "c", text: "Las estructuras de almacenamiento aumentaban drásticamente el consumo de memoria heap al omitir validaciones estáticas." },
      { id: "d", text: "Se bloqueaba por completo la posibilidad de almacenar objetos de distintas jerarquías dentro de una misma colección de datos." }
    ],
    correctAnswers: ["b"],
    explanation: "Si la verificación ocurre en runtime, los fallos de incompatibilidad de tipos se manifiestan frente al usuario o en producción en lugar de ser advertidos de inmediato por el compilador. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q31",
    num: 31,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Compilación",
    type: "single",
    prompt: "En el siguiente fragmento de código adaptado con colecciones genéricas:\n\nList<String> lista = new ArrayList<>();\nlista.add(\"texto\");\nlista.add(123);\nString s = lista.get(0);\n\n¿Qué comportamiento exhibe el compilador frente a la línea lista.add(123)?",
    options: [
      { id: "a", text: "Admite el valor y realiza un autoboxing automático transformándolo en String." },
      { id: "b", text: "Provoca un error de compilación impidiendo generar el binario ejecutable." },
      { id: "c", text: "Genera una advertencia (warning) pero permite la ejecución hasta fallar en runtime." },
      { id: "d", text: "Convierte el dato a tipo Object omitiendo la parametrización de tipo definida." }
    ],
    correctAnswers: ["b"],
    explanation: "Gracias a la parametrización de tipos (List<String>), el compilador detecta inmediatamente que 123 no es un String y rechaza la compilación («error de compilación, no compila»). (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q32",
    num: 32,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Compilación",
    type: "single",
    prompt: "¿Qué ventaja directa ofrece la parametrización de tipos al recuperar elementos de la lista mediante lista.get(0)?",
    options: [
      { id: "a", text: "Optimiza el ciclo de vida del objeto forzando la intervención del Garbage Collector." },
      { id: "b", text: "No hace falta realizar casteo explícito, ya que el tipo retornado se conoce de forma segura." },
      { id: "c", text: "Permite mutar la parametrización de la colección de manera dinámica en memoria." },
      { id: "d", text: "Habilita la serialización directa de la lista sin requerir librerías de mapeo JSON." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva destaca que con genéricos «no hace falta castear», puesto que el compilador garantiza que el elemento recuperado es de tipo String. (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q33",
    num: 33,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Concepto",
    type: "single",
    prompt: "¿Cuál es el principio fundamental que sustenta a la programación genérica según la diapositiva 15?",
    options: [
      { id: "a", text: "Duplicar algoritmos específicos e independientes para cada uno de los tipos de datos existentes." },
      { id: "b", text: "Aplicar un comportamiento común programado de forma genérica sobre objetos de distintos tipos." },
      { id: "c", text: "Restringir las estructuras de colecciones para operar exclusivamente con tipos numéricos primitivos." },
      { id: "d", text: "Trasladar la verificación de tipos al motor de persistencia relacional durante el guardado de datos." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva señala: «El comportamiento común se aplica con objetos de distintos tipos. Se programa el comportamiento genérico». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q34",
    num: 34,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Concepto",
    type: "multiple",
    prompt: "En el caso de una estructura de lista, ¿cuáles de las siguientes operaciones constituyen «comportamientos comunes» independientes del tipo de dato contenido? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Agregar un elemento" },
      { id: "b", text: "Remover un elemento" },
      { id: "c", text: "Recorrer la lista" },
      { id: "d", text: "Contar la cantidad de elementos" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva 15 lista textualmente estas cuatro operaciones como comportamiento común universal de una lista, con total independencia del tipo de datos que aloje. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q35",
    num: 35,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Programación Genérica - Sintaxis",
    type: "single",
    prompt: "Al declarar una estructura genérica en Java mediante la sintaxis:\nList<T> elementos = new ArrayList<>();\n¿Qué representa el símbolo <T>?",
    options: [
      { id: "a", text: "Un modificador de acceso especial que determina la visibilidad del arreglo dentro del paquete donde fue declarado." },
      { id: "b", text: "Un parámetro de tipo formal que representa de forma abstracta el tipo de elementos con el que operará la colección." },
      { id: "c", text: "Una constante numérica estática que define la capacidad inicial asignada a la colección en la memoria heap." },
      { id: "d", text: "Una anotación de Spring Boot que expone automáticamente la lista como un endpoint de solo lectura en la API." }
    ],
    correctAnswers: ["b"],
    explanation: "T actúa como un parámetro de tipo genérico (type parameter), permitiendo definir métodos y atributos cuya tipificación concreta se define al instanciar o parametrizar la clase. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "REST APIs en Spring Boot",
    type: "single",
    prompt: "En la arquitectura interna de una aplicación Spring Boot orientada a servicios REST, ¿en qué capa residen las definiciones y puntos de entrada de la API?",
    options: [
      { id: "a", text: "En la capa Database" },
      { id: "b", text: "En la capa Model" },
      { id: "c", text: "En la capa de Controladores" },
      { id: "d", text: "En la capa de Repositorios" }
    ],
    correctAnswers: ["c"],
    explanation: "La diapositiva enfatiza: «Todo está en la capa de Controladores», siendo la responsable de recibir las solicitudes de los clientes y coordinar las respuestas. (Diapositiva 17)",
    diagram: null,
    points: 1
  }
];
