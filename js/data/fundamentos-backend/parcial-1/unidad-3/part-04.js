/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 3 (Parte 4: Q33 - Q43)
 * Temas: JobExecutionListener, Ciclo de Ejecución de Spring Batch, Formas de Ejecutar un Job, Consideraciones de Diseño (Chunk Size).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U3_PART_04_QUESTIONS = [
  {
    id: "fb-p1-u3-q33",
    num: 33,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "JobExecutionListener",
    type: "single",
    prompt: "¿Qué tipo de información proporciona el objeto JobExecution que reciben los métodos de JobExecutionListener?",
    options: [
      { id: "a", text: "Exclusivamente la contraseña y usuario del motor de base de datos en texto plano." },
      { id: "b", text: "Información sobre la ejecución del proceso (tales como estado de finalización, horarios, parámetros y contexto)." },
      { id: "c", text: "El contenido íntegro en memoria de todos los archivos planos que se van a procesar." },
      { id: "d", text: "La configuración de red de los balanceadores de carga del clúster de Kubernetes." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto indica textualmente: «JobExecution -> contiene información de la ejecución», permitiendo inspeccionar estados (BatchStatus, ExitStatus), excepciones lanzadas, tiempos de ejecución y parámetros. (Diapositiva 10)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q34",
    num: 34,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "De acuerdo con el diagrama de flujo del ciclo de ejecución, ¿cuál es la primera acción que tiene lugar al comenzar la ejecución de un Job con listeners configurados?",
    options: [
      { id: "a", text: "Reader: lee un chunk" },
      { id: "b", text: "beforeJob()" },
      { id: "c", text: "Writer: persiste el chunk" },
      { id: "d", text: "Processor: transforma cada item del chunk" }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama sitúa a beforeJob() como el punto inicial del flujo, ejecutándose previamente a cualquier lectura de chunks por parte de los steps. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q35",
    num: 35,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "Siguiendo el ciclo de procesamiento dentro de un Step, ¿cuál es el orden secuencial exacto de las fases para cada chunk?",
    options: [
      { id: "a", text: "Writer persiste el chunk -> Processor transforma cada item -> Reader lee un chunk" },
      { id: "b", text: "Reader lee un chunk -> Processor transforma cada item del chunk -> Writer persiste el chunk" },
      { id: "c", text: "Processor transforma cada item -> Writer persiste el chunk -> Reader lee un chunk" },
      { id: "d", text: "Reader lee un chunk -> Writer persiste el chunk -> Processor transforma cada item" }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama muestra el flujo: primero el Reader lee los elementos del chunk, luego el Processor transforma uno a uno los ítems leídos de ese chunk, y finalmente el Writer persiste el chunk consolidado. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "En el diagrama del ciclo de ejecución, ¿qué ocurre inmediatamente después de que el Writer persiste un chunk?",
    options: [
      { id: "a", text: "El Job finaliza sin importar si quedan datos en la fuente de entrada." },
      { id: "b", text: "Se evalúa la condición «¿Quedan más chunks?»: si la respuesta es Sí, el flujo regresa a la lectura del siguiente chunk." },
      { id: "c", text: "Se invoca de inmediato el método afterJob() de forma obligatoria." },
      { id: "d", text: "Se procede a borrar la base de datos de metadatos de Spring Batch." }
    ],
    correctAnswers: ["b"],
    explanation: "Tras persistir el chunk, el flujo se bifurca en la decisión «¿Quedan más chunks?». De haber más datos disponibles (Sí), vuelve al Reader para procesar el nuevo bloque. (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q37",
    num: 37,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Ciclo de Ejecución",
    type: "single",
    prompt: "¿Bajo qué condición concluye formalmente un Job y se ejecuta el método afterJob() según el diagrama?",
    options: [
      { id: "a", text: "Cuando no quedan más chunks en el step actual y la evaluación de «¿Hay otro Step?» resulta en «No»." },
      { id: "b", text: "En cuanto el primer chunk de cualquier step es procesado exitosamente por el Writer." },
      { id: "c", text: "Cuando se lanza una excepción en el Reader que anula la verificación de steps." },
      { id: "d", text: "Cada vez que se completa una página en el JpaPagingItemReader." }
    ],
    correctAnswers: ["a"],
    explanation: "El diagrama indica que si no quedan más chunks y a la pregunta «¿Hay otro Step?» la respuesta es «No», se llega a «Job finalizado» y acto seguido se ejecuta afterJob(). Si hubiera otro step, el flujo se mueve al «Siguiente Step». (Diapositiva 11)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q38",
    num: 38,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Maneras de Ejecutar un Job",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes opciones corresponden a formas válidas de ejecutar un Job en Spring Batch según la lista presentada? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Automáticamente al arrancar la aplicación." },
      { id: "b", text: "Manualmente vía código (por ejemplo mediante CommandLineRunner)." },
      { id: "c", text: "Programado con cron utilizando @Scheduled." },
      { id: "d", text: "Disparado a demanda desde un endpoint REST." }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva enumera de forma completa: «Automáticamente al arrancar la aplicación», «Manualmente vía código (CommandLineRunner)», «Programado con cron (@Scheduled)», «Disparado desde un endpoint REST», «Desde línea de comandos (CommandLineJobRunner)» y «Mediante un scheduler externo». (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q39",
    num: 39,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Maneras de Ejecutar un Job",
    type: "single",
    prompt: "Si se requiere iniciar un proceso batch a partir de una acción directa de un usuario en un panel de administración web, ¿cuál de las alternativas listadas en el material resulta la más apropiada?",
    options: [
      { id: "a", text: "Configurar un cron @Scheduled fijo a la medianoche." },
      { id: "b", text: "Disparar la ejecución del Job desde un endpoint REST expuesto en un controlador." },
      { id: "c", text: "Reiniciar el servidor físico para forzar la ejecución en el arranque." },
      { id: "d", text: "Compilar un nuevo archivo JAR desde la línea de comandos en cada petición." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva incluye explícitamente «Disparado desde un endpoint REST», lo que permite recibir una petición HTTP en un controlador e invocar a jobLauncher.run(job, jobParameters). (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q40",
    num: 40,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Maneras de Ejecutar un Job",
    type: "single",
    prompt: "¿Qué componente nativo provisto por el framework permite lanzar Jobs directamente desde la consola o terminal del sistema operativo?",
    options: [
      { id: "a", text: "CommandLineJobRunner" },
      { id: "b", text: "RestJobController" },
      { id: "c", text: "CronJobDispatcher" },
      { id: "d", text: "DatabaseMigrationRunner" }
    ],
    correctAnswers: ["a"],
    explanation: "La diapositiva lista textualmente: «Desde línea de comandos (CommandLineJobRunner)». (Diapositiva 12)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q41",
    num: 41,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Consideraciones de Diseño",
    type: "single",
    prompt: "¿Por qué es fundamental prestar especial atención a la estrategia de lectura de ítems en relación con la base de datos según la diapositiva 13?",
    options: [
      { id: "a", text: "Porque el framework realiza un commit de base de datos antes de consultar los registros." },
      { id: "b", text: "Porque la consulta de datos se ejecuta por cada chunk que se procesa en el Step." },
      { id: "c", text: "Porque los lectores de Spring Batch invalidan automáticamente los índices SQL de las tablas." },
      { id: "d", text: "Porque el compilador no permite utilizar repositorios JPA dentro de un Step." }
    ],
    correctAnswers: ["b"],
    explanation: "El material advierte explícitamente: «Prestar atención a la manera de leer los ítems, la consulta se ejecuta por cada chunk», lo que puede ocasionar problemas de rendimiento o lecturas inconsistentes si las consultas o paginaciones no están bien diseñadas. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q42",
    num: 42,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Consideraciones de Diseño",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes recomendaciones prácticas se señalan en la diapositiva «SpringBatch - Tener en cuenta»? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Determinar correctamente el tamaño de cada chunk (chunk size)." },
      { id: "b", text: "Utilizar Listeners para enriquecer la funcionalidad del proceso batch." },
      { id: "c", text: "Evitar siempre el uso de JobRepository para no consumir espacio en base de datos." },
      { id: "d", text: "Ejecutar todos los Steps en paralelo de forma obligatoria." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "Los tres puntos destacados en la diapositiva son: prestar atención a cómo se leen los ítems (consulta por cada chunk), utilizar listeners para enriquecer funcionalidad y determinar correctamente el tamaño de cada chunk. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q43",
    num: 43,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Consideraciones de Diseño",
    type: "single",
    prompt: "¿Qué impacto técnico tiene definir un tamaño de chunk (chunk size) inadecuado (demasiado pequeño o excesivamente grande)?",
    options: [
      { id: "a", text: "Un chunk de tamaño incorrecto desactiva la compatibilidad de Java con Spring Boot." },
      { id: "b", text: "Un tamaño muy pequeño genera un exceso de transacciones y sobrecarga de E/S; un tamaño excesivamente grande puede saturar la memoria RAM y generar problemas de rendimiento o caídas." },
      { id: "c", text: "Impide que Flyway pueda ejecutar sus migraciones de esquema en el arranque." },
      { id: "d", text: "Convierte automáticamente el Job en una arquitectura monolítica sin controladores." }
    ],
    correctAnswers: ["b"],
    explanation: "El tamaño del chunk determina cuántos elementos se cargan en memoria antes de escribir y comitear. El balance es clave: chunks mínimos multiplican el overhead transaccional, mientras que chunks masivos aumentan drásticamente el consumo de memoria y el riesgo ante fallos. (Diapositiva 13)",
    diagram: null,
    points: 1
  }
];
