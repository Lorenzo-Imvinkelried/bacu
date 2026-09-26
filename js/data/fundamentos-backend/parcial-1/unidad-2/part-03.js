/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 2 (Parte 3: Q23 - Q32)
 * Temas: Búsqueda y Filtros, Códigos de Estado HTTP, Manejo de Errores y Formato de Respuestas, Programación Genérica (Runtime vs Compilación).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U2_PART_03_QUESTIONS = [
  {
    id: "fb-p1-u2-q23",
    num: 23,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Búsqueda con Múltiples Filtros",
    type: "single",
    prompt: "En una interfaz de búsqueda de personas con múltiples campos opcionales (Nombre, Apellido, DNI, Fecha de nacimiento, Email, Ciudad), ¿cuál es el método HTTP correcto a emplear según las buenas prácticas presentadas?",
    options: [
      { id: "a", text: "POST" },
      { id: "b", text: "GET" },
      { id: "c", text: "DELETE" },
      { id: "d", text: "PUT" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva titula expresamente: «Utilizar bien los métodos http: GET -> Leer datos» junto al formulario de búsqueda, recordando que las consultas de lectura y filtrado de datos deben ser solicitudes GET (utilizando query parameters). (Diapositiva 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q24",
    num: 24,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Búsqueda con Múltiples Filtros",
    type: "single",
    prompt: "Al implementar la búsqueda de personas de la diapositiva 9 mediante una API REST, ¿cómo deberían enviarse los valores de los filtros seleccionados por el usuario?",
    options: [
      { id: "a", text: "Incrustados en el cuerpo (Request Body) de una petición POST cifrada." },
      { id: "b", text: "Como parámetros de consulta (query parameters) en la URL dentro de una petición GET." },
      { id: "c", text: "Como nuevos encabezados de autenticación HTTP personalizados por cada campo." },
      { id: "d", text: "Creando una URL distinta con verbos para cada combinación posible de filtros." }
    ],
    correctAnswers: ["b"],
    explanation: "Al tratarse de una operación de lectura (GET), los filtros opcionales de búsqueda deben viajar en la URL como parámetros de consulta (/personas?nombre=Maria&ciudad=SantaFe). (Diapositiva 8 y 9)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q25",
    num: 25,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Códigos de Estado HTTP",
    type: "single",
    prompt: "De acuerdo con la convención resumida en la diapositiva, ¿a qué familia de códigos corresponde cada categoría de resultado?",
    options: [
      { id: "a", text: "2xx: Errores del servidor | 4xx: Códigos de éxito | 5xx: Errores del cliente" },
      { id: "b", text: "2xx: Códigos de éxito | 4xx: Errores del cliente | 5xx: Errores del servidor" },
      { id: "c", text: "2xx: Redirecciones de red | 4xx: Códigos de éxito | 5xx: Errores de sintaxis" },
      { id: "d", text: "2xx: Errores del cliente | 4xx: Errores del servidor | 5xx: Códigos de éxito" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva clasifica: 2xx -> Códigos de éxito, 4xx -> Errores del cliente y 5xx -> Errores del servidor. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q26",
    num: 26,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Códigos de Estado HTTP",
    type: "single",
    prompt: "¿Por qué es fundamental que el código de estado HTTP comunique con precisión lo sucedido durante el procesamiento del request?",
    options: [
      { id: "a", text: "Porque habilita la compresión gzip de manera forzada en el cliente." },
      { id: "b", text: "Porque evita tener que agregar información redundante de estado dentro del cuerpo de la respuesta." },
      { id: "c", text: "Porque de lo contrario el navegador bloqueará todos los certificados SSL." },
      { id: "d", text: "Porque los servidores web solo admiten respuestas cuyo cuerpo contenga texto plano sin formato." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica que «el código de estado indica lo que sucedió al procesar el request, esto evita agregar información de este tipo en la respuesta» (como campos booleanos success: true innecesarios). (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u2-q27",
    num: 27,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-2",
    topic: "Manejo de Errores y Formato de Respuestas",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes recomendaciones deben aplicarse para los errores que explican lo que sucedió en una API REST? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Estandarizar las respuestas y respetar el formato siempre." },
      { id: "b", text: "Si hay más de un error, retornarlos todos juntos en la respuesta." },
      { id: "c", text: "Retornar siempre un código 200 con el mensaje de error en el cuerpo para no alarmar al cliente." },
      { id: "d", text: "Ocultar los detalles de los errores del cliente detrás de códigos 500 genéricos." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "El material indica textualmente: «Estandarizar las respuestas y respetar el formato siempre» y «Si hay más de un error, retornarlos todos juntos en la respuesta». (Diapositiva 11)",
    diagram: null,
    points: 1
  },
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
      { id: "a", text: "Los navegadores web modernos no pueden parsear arreglos JSON." },
      { id: "b", text: "Dificulta la extensibilidad futura (por ejemplo, agregar metadatos, paginación o enlaces) sin romper la compatibilidad con el cliente." },
      { id: "c", text: "Obliga a que todos los elementos contengan exactamente el mismo precio numérico." },
      { id: "d", text: "Impide que Jackson serialice los atributos en formato camelCase." }
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
      { id: "a", text: "El código no compila debido a incompatibilidad de tipos en lista.add(123)." },
      { id: "b", text: "Compila sin problemas, pero arroja una excepción ClassCastException en tiempo de ejecución (runtime)." },
      { id: "c", text: "El número 123 se convierte automáticamente a String sin generar ningún error." },
      { id: "d", text: "Se genera un error de puntero nulo (NullPointerException) al invocar lista.get(1)." }
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
      { id: "a", text: "El compilador detectaba los errores antes de desplegar la aplicación." },
      { id: "b", text: "Los errores de casteo solo se descubrían cuando el código ya estaba en ejecución, provocando caídas inesperadas del sistema." },
      { id: "c", text: "Las aplicaciones requerían menos memoria RAM al omitir validaciones estáticas." },
      { id: "d", text: "Se impedía por completo almacenar datos heterogéneos dentro de un arreglo." }
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
      { id: "a", text: "Compila exitosamente y transforma el número en una cadena de texto." },
      { id: "b", text: "Provoca un error de compilación impidiendo generar el binario ejecutable." },
      { id: "c", text: "Emite una advertencia (warning) pero permite que el programa corra hasta fallar en runtime." },
      { id: "d", text: "Ejecuta una conversión forzada a tipo primitivo int." }
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
      { id: "a", text: "Obliga a invocar siempre al recolector de basura (Garbage Collector)." },
      { id: "b", text: "No hace falta realizar casteo explícito, ya que el tipo retornado se conoce de forma segura." },
      { id: "c", text: "Permite cambiar dinámicamente el tipo de la lista en memoria secundaria." },
      { id: "d", text: "Convierte automáticamente los datos a formato JSON sin necesidad de Jackson." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva destaca que con genéricos «no hace falta castear», puesto que el compilador garantiza que el elemento recuperado es de tipo String. (Diapositiva 14)",
    diagram: null,
    points: 1
  }
];
