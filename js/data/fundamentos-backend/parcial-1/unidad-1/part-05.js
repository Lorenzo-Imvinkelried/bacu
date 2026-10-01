/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 05 (Preguntas 29 a 35)
 * Temas: Project Lombok (Anotaciones @Data / @NoArgsConstructor / @AllArgsConstructor, Escalabilidad),
 * Flyway / Migraciones de Base de Datos (Propósito central, Momento de ejecución, Historial flyway_schema_history, DDL vs DML),
 * Arquitectura Monolítica (Definición conceptual).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
  {
    id: "fb-p1-u1-q29",
    num: 29,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Project Lombok",
    type: "single",
    prompt: "Al utilizar la combinación de anotaciones @Data, @NoArgsConstructor y @AllArgsConstructor de Lombok en una clase:",
    options: [
      { id: "a", text: "Se genera automáticamente el constructor por defecto sin argumentos, el constructor con todos los argumentos, y los getters, setters, equals, hashCode y toString." },
      { id: "b", text: "Se bloquea la clase para convertirla en inmutable, omitiendo cualquier método de acceso y restringiendo la creación de nuevas instancias a fábricas estáticas externas." },
      { id: "c", text: "Se definen exclusivamente los constructores sobrecargados de la entidad, obligando al desarrollador a programar manualmente todos los getters, setters y comparadores." },
      { id: "d", text: "Se crea de forma automática el esquema de tablas en la base de datos relacional y se generan los repositorios CRUD correspondientes sin requerir JPA ni Hibernate." }
    ],
    correctAnswers: ["a"],
    explanation: "@NoArgsConstructor genera el constructor vacío, @AllArgsConstructor crea el constructor con todos los campos, y @Data agrupa @Getter, @Setter, @ToString, @EqualsAndHashCode y @RequiredArgsConstructor. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q30",
    num: 30,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Project Lombok",
    type: "single",
    prompt: "Según la diapositiva, ¿por qué Lombok aporta «escalabilidad» al modelo de datos?",
    options: [
      { id: "a", text: "Porque permite desacoplar los modelos de datos facilitando su particionamiento y replicación automática entre múltiples nodos de la base de datos." },
      { id: "b", text: "Porque si se agrega un nuevo atributo, Lombok genera automáticamente sus métodos correspondientes (getter, setter, etc.) sin mantenimiento manual." },
      { id: "c", text: "Porque optimiza la sobrecarga de memoria en el heap generando código compilado que incrementa de forma notable el rendimiento de los hilos de CPU." },
      { id: "d", text: "Porque transforma las llamadas a métodos bloqueantes en flujos reactivos no bloqueantes, permitiendo procesar mayores volúmenes de peticiones concurrentes." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto destaca: «Escalable: si agrego un atributo, automáticamente genera el getter, setter, etc.», lo que ahorra refactorizaciones propensas a olvidos u omisiones en constructores y métodos estándar. (Diapositiva 13)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q31",
    num: 31,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Flyway / Migraciones",
    type: "single",
    prompt: "¿Cuál es el propósito central de utilizar una herramienta como Flyway en un proyecto backend?",
    options: [
      { id: "a", text: "Generar dinámicamente interfaces de usuario web a partir de las entidades del modelo backend." },
      { id: "b", text: "Manejar de forma controlada y versionada las mutaciones del esquema de la base de datos." },
      { id: "c", text: "Reemplazar la capa de transporte HTTP por canales de comunicación basados en sockets binarios." },
      { id: "d", text: "Administrar el ciclo de vida y la inyección de repositorios dentro del contenedor de la aplicación." }
    ],
    correctAnswers: ["b"],
    explanation: "El material indica que Flyway «permite manejar las mutaciones del esquema de base de datos» de manera ordenada y reproducible. (Diapositiva 14)",
    diagram: null,
    points: 1
  },
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
      { id: "a", text: "Al detenerse el motor de la base de datos." },
      { id: "b", text: "Al levantar el servidor de la aplicación." },
      { id: "c", text: "Al ingresar la primera petición a la API." },
      { id: "d", text: "Al compilar los artefactos del proyecto." }
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
      { id: "b", text: "Almacena los registros de ejecución en variables de entorno del sistema operativo configuradas al iniciar el contenedor de la aplicación." },
      { id: "c", text: "Mantiene un archivo de configuración local en el proyecto con los hashes calculados de cada script durante la compilación previa." },
      { id: "d", text: "Modifica metadatos en el sistema de archivos del servidor para verificar las marcas de tiempo de los archivos .sql ejecutados." }
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
      { id: "a", text: "Usarlo únicamente para la carga masiva de datos (DML) y delegar el esquema en JPA." },
      { id: "b", text: "Usarlo solo para modificaciones de esquema (DDL), no para ingresar datos (DML)." },
      { id: "c", text: "Ejecutarlo de manera manual en producción y deshabilitarlo en entornos de prueba." },
      { id: "d", text: "Limitar su uso a la creación de vistas e índices, evitando alterar tablas maestras." }
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
      { id: "c", text: "Un sistema distribuido donde cada función de negocio se despliega en una máquina virtual independiente." },
      { id: "d", text: "Una solución sin servidor centralizado que delega toda la persistencia en el almacenamiento del cliente." }
    ],
    correctAnswers: ["b"],
    explanation: "El texto indica que el monolito es: «Un servicio basado en una única aplicación. Esta aplicación se encarga de todo». (Diapositiva 15)",
    diagram: null,
    points: 1
  }
];
