/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 05 (Preguntas 37 a 45)
 * Temas: Ciclo de Ejecución (Condición de conclusión de Job y afterJob),
 * Maneras de Ejecutar un Job (Formas válidas, disparo desde endpoint REST, CommandLineJobRunner),
 * Consideraciones de Diseño (Estrategia de lectura por chunk, recomendaciones y listeners, impacto del chunk size),
 * Caso Práctico - fillClientesJob (Objetivo del Job, tamaño de chunk).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
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
      { id: "b", text: "En cuanto el primer chunk del step inicial es procesado y comiteado exitosamente por el Writer." },
      { id: "c", text: "Cuando se produce una excepción no controlada en el ItemReader que omite los steps siguientes." },
      { id: "d", text: "Cada vez que finaliza la lectura de una página de datos configurada en el JpaPagingItemReader." }
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
      { id: "a", text: "Configurar una expresión cron fija mediante @Scheduled para ejecutarse periódicamente." },
      { id: "b", text: "Disparar la ejecución del Job desde un endpoint REST expuesto en un controlador." },
      { id: "c", text: "Reiniciar el contenedor de la aplicación para desencadenar el Job durante el arranque." },
      { id: "d", text: "Compilar y desplegar un nuevo ejecutable JAR desde la consola con cada solicitud web." }
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
      { id: "d", text: "Ejecutar todos los Steps de forma paralela y concurrente obligatoria." }
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
      { id: "a", text: "Un chunk mal dimensionado desactiva las optimizaciones automáticas del recolector de basura, provocando incompatibilidades con la máquina virtual de Java." },
      { id: "b", text: "Un tamaño muy pequeño genera un exceso de transacciones y sobrecarga de E/S; un tamaño excesivamente grande puede saturar la memoria RAM y generar problemas de rendimiento o caídas." },
      { id: "c", text: "Bloquea los mecanismos de migración de Flyway al inicio, impidiendo que el motor de base de datos verifique el esquema de tablas antes de procesar el lote." },
      { id: "d", text: "Fuerza la reestructuración del Job hacia un modelo monolítico cerrado, anulando la separación en capas y la delegación de tareas en servicios desacoplados." }
    ],
    correctAnswers: ["b"],
    explanation: "El tamaño del chunk determina cuántos elementos se cargan en memoria antes de escribir y comitear. El balance es clave: chunks mínimos multiplican el overhead transaccional, mientras que chunks masivos aumentan drásticamente el consumo de memoria y el riesgo ante fallos. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q44",
    num: 44,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Caso Práctico - fillClientesJob",
    type: "single",
    prompt: "En el caso de estudio presentado en la diapositiva 14, ¿cuál es el objetivo del Job denominado fillClientesJob?",
    options: [
      { id: "a", text: "Identificar y depurar de forma permanente a todos los clientes que no registren transacciones ni movimientos durante el último período anual." },
      { id: "b", text: "Buscar clientes con teléfono o dirección nulos, asignarles valores por defecto y persistirlos nuevamente en la base de datos." },
      { id: "c", text: "Generar y enviar notificaciones masivas por correo electrónico con promociones comerciales personalizadas para la nómina completa de usuarios." },
      { id: "d", text: "Extraer la información consolidada de clientes y exportarla a un archivo de texto plano delimitado por comas para su archivo histórico." }
    ],
    correctAnswers: ["b"],
    explanation: "El enunciado detalla: «El job fillClientesJob busca clientes con telefono o direccion nulos, les asigna valores por defecto (\"0000-0000\" y \"Sin domicilio\") y los persiste de nuevo en la base, procesando de a chunks de 10». (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q45",
    num: 45,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Caso Práctico - fillClientesJob",
    type: "single",
    prompt: "De acuerdo con la descripción del fillClientesJob, ¿cuál es el tamaño de chunk configurado para dicho procesamiento por lotes?",
    options: [
      { id: "a", text: "Chunks de 1 registro individual." },
      { id: "b", text: "Chunks de 10 registros." },
      { id: "c", text: "Chunks de 100 registros." },
      { id: "d", text: "Chunks de 50 registros." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica de forma textual y precisa: «...procesando de a chunks de 10». (Diapositiva 14)",
    diagram: null,
    points: 1
  }
];
