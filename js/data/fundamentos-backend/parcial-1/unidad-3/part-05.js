/**
 * Banco de Preguntas - Fundamentos Backend - Unidad 3 (Parte 5: Q44 - Q53)
 * Temas: Caso Práctico fillClientesJob, Sincronización entre Pods (Problema, Consecuencias y Soluciones: ShedLock, Kubernetes, Idempotencia).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const BACKEND_U3_PART_05_QUESTIONS = [
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
      { id: "a", text: "Eliminar permanentemente todos los clientes que no registren compras en el último año." },
      { id: "b", text: "Buscar clientes con teléfono o dirección nulos, asignarles valores por defecto y persistirlos nuevamente en la base de datos." },
      { id: "c", text: "Enviar correos electrónicos masivos con promociones a todos los clientes registrados." },
      { id: "d", text: "Exportar la nómina de clientes a un archivo de texto plano delimitado por comas." }
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
      { id: "d", text: "Un único chunk con la totalidad de los clientes nulos." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva indica de forma textual y precisa: «...procesando de a chunks de 10». (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q46",
    num: 46,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Caso Práctico - fillClientesJob",
    type: "single",
    prompt: "¿Qué valores por defecto asigna el fillClientesJob a los campos que se encuentran nulos en los registros de clientes?",
    options: [
      { id: "a", text: "Teléfono: \"N/A\" | Dirección: \"Desconocida\"" },
      { id: "b", text: "Teléfono: \"0000-0000\" | Dirección: \"Sin domicilio\"" },
      { id: "c", text: "Teléfono: \"1234-5678\" | Dirección: \"Domicilio central\"" },
      { id: "d", text: "Teléfono: null | Dirección: \"Pendiente de actualización\"" }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva explicita puntualmente: «les asigna valores por defecto (\"0000-0000\" y \"Sin domicilio\")». (Diapositiva 14)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q47",
    num: 47,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "single",
    prompt: "En una arquitectura moderna basada en microservicios y contenedores, ¿cuándo surge el problema de «Sincronización entre pods» en relación con los procesos batch?",
    options: [
      { id: "a", text: "Cuando la aplicación no dispone de conexión a Internet en producción." },
      { id: "b", text: "Cuando existen múltiples réplicas o instancias (pods) del mismo servicio conectadas a la misma base de datos ejecutando el batch simultáneamente." },
      { id: "c", text: "Cuando se utiliza Project Lombok en conjunto con entidades JPA." },
      { id: "d", text: "Cuando la base de datos relacional se sustituye por una cola de mensajería AMQP." }
    ],
    correctAnswers: ["b"],
    explanation: "El problema se manifiesta cuando el microservicio está escalado horizontalmente (ej. Microservicio 1 Pod 1, Pod 2 y Pod 3) y cada uno de los pods dispara el mismo proceso batch al mismo tiempo contra la misma base de datos. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q48",
    num: 48,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "multiple",
    prompt: "¿Cuáles son las consecuencias negativas directas identificadas en el material si múltiples pods corren el mismo proceso batch en simultáneo? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Errores a nivel de bases de datos, tales como bloqueos mutuos (dead-locks)." },
      { id: "b", text: "Degradación severa de la performance del sistema de almacenamiento." },
      { id: "c", text: "Conversión automática del código Java a lenguaje binario incompatible." },
      { id: "d", text: "Pérdida total de la conexión TCP en la máquina de los clientes web." }
    ],
    correctAnswers: ["a", "b"],
    explanation: "La diapositiva señala explícitamente: «Al correr en simultáneo, pueden ocurrir errores a nivel de bases de datos (dead-locks), así como también degradar la performance». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q49",
    num: 49,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "single",
    prompt: "¿Cuál es el principio imperativo que se debe garantizar al implementar ejecuciones batch en entornos distribuidos multi-instancia?",
    options: [
      { id: "a", text: "Se debe duplicar la base de datos para que cada pod tenga su esquema aislado." },
      { id: "b", text: "Se debe asegurar que sólo una instancia ejecute el batch job a la vez." },
      { id: "c", text: "Se debe apagar el clúster de Kubernetes cada vez que inicie una migración." },
      { id: "d", text: "Se debe evitar el uso de cualquier mecanismo de locking o control de concurrencia." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva concluye como regla crítica: «Se debe asegurar que sólo una instancia ejecute el batch job». (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q50",
    num: 50,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes enfoques de sincronización entre pods son propuestos en la diapositiva 16? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Un solo pod \"líder\" ejecuta el scheduling (Leader Election)." },
      { id: "b", text: "Locking distribuido (por ejemplo utilizando librerías como ShedLock)." },
      { id: "c", text: "Desacoplar el scheduling de la aplicación (por ejemplo creando un pod dedicado mediante Kubernetes)." },
      { id: "d", text: "Bloquear manualmente los puertos de red del servidor de base de datos antes de cada corrida." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La diapositiva enumera: «Un solo pod \"líder\" ejecuta el scheduling (Leader Election)», «Locking distribuido (ej: ShedLock)», «Desacoplar el scheduling de la aplicación (por ejemplo crear un pod dedicado a esto mediante Kubernetes)» y «Diseñar el Job para ser idempotente». (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q51",
    num: 51,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "single",
    prompt: "En el marco de las estrategias para mitigar conflictos de concurrencia en batches distribuidos, ¿qué rol cumple «Diseñar el Job para ser idempotente»?",
    options: [
      { id: "a", text: "Actúa como un sustituto autosuficiente que hace innecesario cualquier otro mecanismo de sincronización." },
      { id: "b", text: "Actúa como un enfoque complementario de robustez, no como un sustituto del control de concurrencia." },
      { id: "c", text: "Deshabilita la creación de las tablas de JobRepository en la base de datos." },
      { id: "d", text: "Obliga a que los clientes envíen solicitudes HTTP GET en lugar de POST." }
    ],
    correctAnswers: ["b"],
    explanation: "El material enfatiza: «Diseñar el Job para ser idempotente (complementario, no sustituto)». Si bien la idempotencia asegura que procesar los mismos datos múltiples veces no genere inconsistencias lógicas, no previene por sí sola la degradación de performance ni las contiendas por locks a nivel de base de datos. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q52",
    num: 52,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "single",
    prompt: "¿En qué consiste la solución de «Desacoplar el scheduling de la aplicación» mencionada en el material?",
    options: [
      { id: "a", text: "En trasladar la programación y el disparo del batch fuera de los pods web regulares, empleando un componente externo como un Job o CronJob dedicado de Kubernetes." },
      { id: "b", text: "En programar la ejecución en el navegador cliente para que emita llamadas REST consecutivas." },
      { id: "c", text: "En prescindir de Docker y Kubernetes ejecutando la aplicación únicamente en hardware local." },
      { id: "d", text: "En migrar todas las tablas de base de datos hacia un servicio de colas AMQP sin persistencia." }
    ],
    correctAnswers: ["a"],
    explanation: "En lugar de que cada réplica de la aplicación tenga un @Scheduled interno que compita con los demás pods, se delega la ejecución en un orquestador externo (como un Job / CronJob de Kubernetes) que levanta un único contenedor efímero dedicado a correr el proceso por lotes. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u3-q53",
    num: 53,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-3",
    topic: "Sincronización entre Pods",
    type: "single",
    prompt: "¿Cuál es el mecanismo operativo que utiliza una solución de «Locking distribuido» como ShedLock en una arquitectura de microservicios?",
    options: [
      { id: "a", text: "Reinicia todos los pods excepto el que tiene el número de IP más bajo." },
      { id: "b", text: "Adquiere un bloqueo compartido en un recurso central (como una tabla de base de datos o Redis), garantizando que solo el primer pod que obtenga el lock pueda ejecutar la tarea programada." },
      { id: "c", text: "Divide el archivo CSV en fragmentos según la cantidad de procesadores de la máquina virtual." },
      { id: "d", text: "Modifica el código fuente de los controladores REST en tiempo de compilación." }
    ],
    correctAnswers: ["b"],
    explanation: "ShedLock utiliza un almacenamiento centralizado accesible por todos los nodos (habitualmente una tabla en la base de datos compartida o Redis) para registrar un bloqueo con tiempo de expiración. El primer nodo en adquirir el lock ejecuta el batch mientras los demás detectan el bloqueo y omiten la ejecución. (Diapositiva 16)",
    diagram: null,
    points: 1
  }
];
