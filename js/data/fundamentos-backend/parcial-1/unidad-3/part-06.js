/**
 * Banco de Preguntas - UNIDAD 3 (Fundamentos Backend - Parcial 1)
 * Parte 06 (Preguntas 46 a 53)
 * Temas: Caso Práctico - fillClientesJob (Valores por defecto asignados),
 * Sincronización entre Pods (Problema de concurrencia en réplicas, consecuencias negativas,
 * principio imperativo, enfoques de sincronización: Leader Election, ShedLock, Pod dedicado Kubernetes,
 * idempotencia y mecanismo de locking distribuido).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart06 = [
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
      { id: "d", text: "Teléfono: \"Sin datos\" | Dirección: \"Pendiente\"" }
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
      { id: "a", text: "Cuando las réplicas del backend pierden conectividad externa y no pueden verificar los certificados de seguridad en el entorno de producción." },
      { id: "b", text: "Cuando existen múltiples réplicas o instancias (pods) del mismo servicio conectadas a la misma base de datos ejecutando el batch simultáneamente." },
      { id: "c", text: "Cuando se implementa Project Lombok en conjunto con entidades JPA generando colisiones entre los identificadores autoincrementales de las tablas." },
      { id: "d", text: "Cuando la base de datos transaccional se reemplaza por intermediarios de colas AMQP sin soporte para sincronización distribuida entre nodos." }
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
      { id: "c", text: "Incompatibilidad de clases por alteración del bytecode en tiempo de ejecución." },
      { id: "d", text: "Cierre abrupto de las conexiones TCP en todos los navegadores conectados." }
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
      { id: "c", text: "Invalida y bloquea la creación de tablas de metadatos del JobRepository en la base de datos." },
      { id: "d", text: "Restringe a los clientes forzándolos a utilizar peticiones HTTP GET en lugar de verbos mutables." }
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
      { id: "b", text: "En delegar la temporización en scripts del cliente web para que disparen peticiones REST consecutivas en ventanas de tiempo previamente acordadas." },
      { id: "c", text: "En prescindir de tecnologías de virtualización y contenedores para ejecutar el backend de forma nativa sobre servidores dedicados de hardware local." },
      { id: "d", text: "En reemplazar las tablas del repositorio por colas de mensajería AMQP sin persistencia que descarten los eventos no consumidos en el período activo." }
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
      { id: "a", text: "Envía una señal de apagado preventivo a todos los pods secundarios del clúster, permitiendo que únicamente la réplica con menor dirección IP procese la tarea." },
      { id: "b", text: "Adquiere un bloqueo compartido en un recurso central (como una tabla de base de datos o Redis), garantizando que solo el primer pod que obtenga el lock pueda ejecutar la tarea programada." },
      { id: "c", text: "Fragmenta el archivo de entrada en bloques independientes según la cantidad de núcleos de CPU disponibles, distribuyendo un hilo de trabajo por cada nodo activo." },
      { id: "d", text: "Inyecta directivas de sincronización en el bytecode de los controladores REST durante la compilación, impidiendo la atención concurrente de peticiones web." }
    ],
    correctAnswers: ["b"],
    explanation: "ShedLock utiliza un almacenamiento centralizado accesible por todos los nodos (habitualmente una tabla en la base de datos compartida o Redis) para registrar un bloqueo con tiempo de expiración. El primer nodo en adquirir el lock ejecuta el batch mientras los demás detectan el bloqueo y omiten la ejecución. (Diapositiva 16)",
    diagram: null,
    points: 1
  }
];
