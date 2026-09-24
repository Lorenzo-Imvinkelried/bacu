/**
 * Banco de Preguntas - UNIDAD 3 (Gestión de Configuración del Software)
 * Parte 05 (Preguntas 42 a 51)
 * Temas: Archivos .env y parámetros de entorno, requirements.txt y composer.json,
 * Herramientas de Build (Make, Maven, Composer), Herramientas de BugTracking (Bugzilla, Mantis, Redmine),
 * Problemas de entornos y versiones (JasperReport), Codeline vs Mainline,
 * Variación espacial de Variantes, Esquema de versiones Microsoft (Build) y Proceso GCSW según Pressman.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart05 = [
  {
    id: "ing-cal-p1-u3-q42",
    num: 42,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Archivos de Entorno (.env)",
    type: "single",
    prompt: "En el marco de los archivos de configuración y construcción del sistema, ¿qué tipo de información suele almacenarse en los archivos como '.env', '.env.local' o '.env.test'?",
    options: [
      {
        id: "a",
        text: "Las imágenes, logotipos y hojas de estilo (CSS) públicas de la aplicación."
      },
      {
        id: "b",
        text: "Parámetros del entorno como credenciales de bases de datos, hosts, puertos y claves secretas para tokens de seguridad."
      },
      {
        id: "c",
        text: "El código fuente principal escrito en lenguajes como Java o Python."
      },
      {
        id: "d",
        text: "Los binarios ya compilados y listos para ser distribuidos al cliente."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Los archivos `.env` definen variables de entorno sensibles y variables dependientes del despliegue (conexiones a bases de datos, claves secretas, endpoints de APIs y flags de depuración) para desacoplar la configuración de la infraestructura respecto al código fuente.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q43",
    num: 43,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Archivos de Dependencias (requirements.txt y composer.json)",
    type: "single",
    prompt: "Según la estructura de construcción de proyectos, ¿qué propósito cumplen archivos específicos como 'requirements.txt' (en Python) o 'composer.json' (en PHP)?",
    options: [
      {
        id: "a",
        text: "Definir los permisos de administrador en los servidores de despliegue en la nube."
      },
      {
        id: "b",
        text: "Almacenar el manual de usuario y la ayuda en línea de la aplicación."
      },
      {
        id: "c",
        text: "Listar y especificar estrictamente las versiones de las librerías, dependencias y paquetes externos que el sistema necesita para funcionar."
      },
      {
        id: "d",
        text: "Crear copias de seguridad automáticas de la base de datos en texto plano."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Estos manifiestos de dependencias declaran con precisión qué paquetes externos y bibliotecas de terceros requiere el software, permitiendo a los gestores de paquetes reproducir idénticos árboles de dependencias en cualquier entorno.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q44",
    num: 44,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Herramientas de Construcción (Build Tools)",
    type: "single",
    prompt: "¿Cuáles de las siguientes herramientas son ejemplos típicos orientados a la 'Construcción' de sistemas de software (Build tools)?",
    options: [
      {
        id: "a",
        text: "Git, GitHub, GitLab y Bitbucket."
      },
      {
        id: "b",
        text: "Bugzilla, Mantis, Redmine y GLPI."
      },
      {
        id: "c",
        text: "Make, Ant, Maven, Jenkins y Composer."
      },
      {
        id: "d",
        text: "FreshService, Gensuite y Rational ClearQuest."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Herramientas como Make, Apache Ant, Apache Maven, Jenkins (automatización de CI/Builds) y Composer son utilitarios especializados en resolver dependencias, compilar y construir paquetes ejecutables del sistema.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q45",
    num: 45,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Herramientas de BugTracking",
    type: "single",
    prompt: "De acuerdo a las herramientas de soporte para la Ingeniería de Software, herramientas como Bugzilla, Mantis, Redmine y GLPI se utilizan específicamente para:",
    options: [
      {
        id: "a",
        text: "El modelado visual y diseño de diagramas UML."
      },
      {
        id: "b",
        text: "El seguimiento de errores, defectos e incidencias (BugTracking)."
      },
      {
        id: "c",
        text: "Automatizar la compilación de binarios en C++."
      },
      {
        id: "d",
        text: "Diseñar interfaces de usuario (UI) responsivas."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Bugzilla, MantisBT, Redmine y GLPI son sistemas de gestión y seguimiento de incidencias, tickets de soporte y reporte de defectos (BugTracking / Issue Tracking), fundamentales para registrar el estado de los cambios y solicitudes de corrección.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q46",
    num: 46,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Disparidad de Versiones entre Entornos (Testimonio)",
    type: "single",
    prompt: "En el 'Testimonio' del sistema que no podía generar reportes únicamente en el entorno de producción, ¿cuál fue la causa del problema diagnosticado en la construcción del sistema?",
    options: [
      {
        id: "a",
        text: "El cliente no tenía conexión a Internet."
      },
      {
        id: "b",
        text: "Había una diferencia de versiones en el módulo de 'JasperReport' instalado en producción respecto a los entornos de pruebas."
      },
      {
        id: "c",
        text: "Un error en la base de datos que borró todos los remitos del año."
      },
      {
        id: "d",
        text: "El uso de navegadores web incompatibles por parte de los gerentes de la empresa."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El caso real ilustra el peligro de no congelar ni alinear los entornos de build: una sutil discrepancia de versiones en la librería de reportes (JasperReport) instalada en el servidor de producción hacía que los reportes fallaran allí a pesar de funcionar en desarrollo y testing.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q47",
    num: 47,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Concepto de Codeline",
    type: "single",
    prompt: "Dentro de la gestión de versiones, ¿cómo define el material a una 'Codeline' (Línea de Código)?",
    options: [
      {
        id: "a",
        text: "Como la primera línea de código ejecutada por el compilador."
      },
      {
        id: "b",
        text: "Como la eliminación física de un archivo de código fuente del servidor."
      },
      {
        id: "c",
        text: "Como una secuencia de versiones de código fuente (aplicable a componentes) donde las versiones posteriores derivan de las anteriores."
      },
      {
        id: "d",
        text: "Como la versión comercial que es vendida al público general."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Una codeline es un conjunto ordenado cronológicamente de versiones de código fuente de un componente de software, donde cada versión se concibe y deriva a partir de su predecesora directa en el historial.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q48",
    num: 48,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Concepto de Mainline",
    type: "single",
    prompt: "A diferencia de la Codeline, ¿qué representa la 'Mainline' (Línea Principal) en el contexto de evolución y versiones?",
    options: [
      {
        id: "a",
        text: "Representa una secuencia de versiones del SISTEMA completo desarrolladas directamente desde una Línea Base original."
      },
      {
        id: "b",
        text: "Es el cableado físico principal que conecta los servidores de integración continua."
      },
      {
        id: "c",
        text: "Es un sinónimo de una rama (branch) secundaria y descartable."
      },
      {
        id: "d",
        text: "Es la documentación técnica que explica cómo se diseñó la base de datos."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Mientras que la codeline puede aludir a componentes individuales, la mainline (tronco o rama principal) representa la evolución troncal y unificada del sistema global completo, originada en una línea base fundamental y hacia la cual confluyen las demás ramas.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q49",
    num: 49,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Variantes como Variación Espacial",
    type: "single",
    prompt: "Al analizar la evolución de un sistema (variantes vs. revisiones), ¿qué tipo de variación representan las 'Variantes' (ej. adaptar un software para Linux y otra versión para Windows)?",
    options: [
      {
        id: "a",
        text: "Representan una variación temporal, ya que se suceden una tras otra."
      },
      {
        id: "b",
        text: "Representan un error de compilación en el sistema central."
      },
      {
        id: "c",
        text: "Representan una variación espacial, al evolucionar por separado en paralelo dependiendo del entorno o funciones opcionales."
      },
      {
        id: "d",
        text: "No representan ninguna evolución, sino un retroceso tecnológico."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Las variantes constituyen variaciones espaciales porque coexisten simultáneamente en el tiempo para satisfacer diferentes plataformas, configuraciones de hardware o regulaciones locales, a diferencia de las revisiones que son variaciones temporales lineales.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q50",
    num: 50,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Esquema de Versiones de Microsoft (Builds)",
    type: "single",
    prompt: "¿Qué formato utiliza históricamente Microsoft para los números de versión en productos de tipo 'Build' (como MS Office)?",
    options: [
      {
        id: "a",
        text: "[AÑO].[MES].[DÍA].[HORA]"
      },
      {
        id: "b",
        text: "[MAJOR VERSION].[MINOR VERSION].[BUILD NUMBER].[REVISION NUMBER]"
      },
      {
        id: "c",
        text: "Únicamente el año de lanzamiento de forma entera (Ej. 2007)."
      },
      {
        id: "d",
        text: "[VERSION].[SUBVERSION]-[NÚMERO DE CLIENTE]"
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Microsoft estandarizó el formato de cuatro dígitos en sus ensamblados (.NET y aplicaciones como Office): [Major].[Minor].[Build].[Revision], donde Build refleja el número consecutivo de compilación interna automatizada y Revision los parches específicos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q51",
    num: 51,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Proceso GCSW según Pressman",
    type: "single",
    prompt: "De acuerdo al modelo de Pressman, después de la 'Identificación' (SCI), ¿cuáles son las siguientes tareas base del proceso de Gestión de la Configuración del Software (GCSW)?",
    options: [
      {
        id: "a",
        text: "Programación extrema, refactorización, testeo unitario y venta."
      },
      {
        id: "b",
        text: "Análisis de requisitos, diseño arquitectónico y construcción de interfaces."
      },
      {
        id: "c",
        text: "Control del cambio, control de versiones, auditoría de configuración y reportes de estado."
      },
      {
        id: "d",
        text: "Publicidad, capacitación de usuarios, empaquetado y distribución de manuales impresos."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la taxonomía clásica de Roger Pressman, el proceso de GCSW está integrado por 5 tareas medulares: 1) Identificación de objetos de configuración, 2) Control de versiones, 3) Control del cambio, 4) Auditoría de configuración y 5) Reporte de estado.",
    diagram: null,
    points: 1
  }
];
