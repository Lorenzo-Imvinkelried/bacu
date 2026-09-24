/**
 * Banco de Preguntas - UNIDAD 3 (Gestión de Configuración del Software)
 * Parte 01 (Preguntas 1 a 10)
 * Temas: Concepto de Configuración, 1ra Ley de Bersoff, Fuentes de cambio, Meta de Babich,
 * Momento de control, 4 elementos de GCSW, Objetos básicos vs agregados,
 * Variantes, Líneas Base (Baselines), y SCV Centralizado vs Distribuido.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "ing-cal-p1-u3-q1",
    num: 1,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Concepto de Configuración del Software",
    type: "single",
    prompt: "Según la definición de Gestión de la Configuración del Software (GCSW), ¿qué se entiende por 'Configuración del Software'?",
    options: [
      {
        id: "a",
        text: "Exclusivamente el código fuente y los archivos ejecutables del sistema final."
      },
      {
        id: "b",
        text: "Los elementos que componen toda la información producida como parte del proceso de ingeniería (documentos, programas, datos y herramientas)."
      },
      {
        id: "c",
        text: "Las especificaciones técnicas del hardware donde se instalará el programa."
      },
      {
        id: "d",
        text: "El conjunto de manuales de usuario impresos entregados al cliente."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La configuración del software abarca mucho más que el código ejecutable: comprende la totalidad de los artefactos generados a lo largo del proceso de ingeniería, incluyendo modelos de análisis y diseño, documentos de especificación, código fuente, casos de prueba, datos de prueba y herramientas del entorno.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q2",
    num: 2,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Primera Ley de la Ingeniería de Sistemas (Bersoff)",
    type: "single",
    prompt: "¿Qué establece la 'Primera Ley de la Ingeniería de Sistemas' (Bersoff, 1980) respecto al cambio en el software?",
    options: [
      {
        id: "a",
        text: "Que el cambio solo ocurre durante la fase de mantenimiento, nunca durante el desarrollo inicial."
      },
      {
        id: "b",
        text: "Que el sistema cambiará y el deseo de cambiarlo persistirá a lo largo de todo el ciclo de vida, sin importar en qué etapa nos encontremos."
      },
      {
        id: "c",
        text: "Que los cambios deben prohibirse estrictamente una vez finalizada la etapa de requisitos."
      },
      {
        id: "d",
        text: "Que el cambio es producto de una mala planificación y siempre debe evitarse."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La Primera Ley de Bersoff enuncia: 'No importa en qué momento del ciclo de vida del sistema nos encontremos, el sistema cambiará y el deseo de cambiarlo persistirá a lo largo de todo el ciclo de vida'. El cambio es inevitable e inherente a la naturaleza del software.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q3",
    num: 3,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Fuentes del Cambio en el Software",
    type: "single",
    prompt: "¿Cuál de las siguientes es mencionada en el texto como una de las 'Principales Fuentes del Cambio' en un proyecto?",
    options: [
      {
        id: "a",
        text: "Nuevas condiciones en el negocio, restricciones presupuestarias y defectos."
      },
      {
        id: "b",
        text: "El uso exclusivo de metodologías ágiles en etapas tempranas."
      },
      {
        id: "c",
        text: "La estabilidad permanente de las necesidades del cliente."
      },
      {
        id: "d",
        text: "La ausencia total de errores y fallos en el código de producción."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Las fuentes primarias que motivan cambios son: la evolución del entorno de negocios (leyes, competidores), redefinición de necesidades de clientes y usuarios, restricciones presupuestarias o de calendario y la detección de defectos o fallas durante las pruebas o la operación.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q4",
    num: 4,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Meta de la Gestión de Configuración (Babich)",
    type: "single",
    prompt: "Según Babich (1986), ¿cuál es la meta principal del 'arte' de la Gestión de la Configuración?",
    options: [
      {
        id: "a",
        text: "Maximizar la cantidad de líneas de código escritas por día."
      },
      {
        id: "b",
        text: "Maximizar la productividad minimizando los errores y la confusión."
      },
      {
        id: "c",
        text: "Eliminar la necesidad de realizar pruebas de software."
      },
      {
        id: "d",
        text: "Automatizar completamente el trabajo de los programadores."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Wayne Babich definió la gestión de configuración como el arte de coordinar el desarrollo de software para minimizar la confusión y los errores derivados del cambio constante, maximizando así la productividad del equipo.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q5",
    num: 5,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Momento de Entrada bajo Control de Configuración",
    type: "single",
    prompt: "Respecto a cuándo un elemento debe pasar a estar bajo control de configuración, ¿qué consecuencias tiene hacerlo demasiado temprano o demasiado tarde?",
    options: [
      {
        id: "a",
        text: "Demasiado temprano genera burocracia (costo y tiempo); demasiado tarde genera caos."
      },
      {
        id: "b",
        text: "Demasiado temprano genera caos; demasiado tarde reduce los costos drásticamente."
      },
      {
        id: "c",
        text: "Demasiado temprano garantiza el éxito; demasiado tarde no tiene ningún impacto negativo."
      },
      {
        id: "d",
        text: "El momento no importa, siempre y cuando se utilice una herramienta automatizada."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Someter un artefacto a control formal prematuramente sobrecarga al equipo de trámites burocráticos y autorizaciones innecesarias cuando todavía está en borrador exploratorio; por el contrario, postergarlo en exceso conduce al descontrol, inconsistencias y pérdida de versiones (caos).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q6",
    num: 6,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Elementos de un Sistema GCSW",
    type: "single",
    prompt: "¿Cuáles son los 4 elementos que componen un Sistema de Gestión de Configuración del Software (GCSW)?",
    options: [
      {
        id: "a",
        text: "Hardware, Software, Redes y Bases de Datos."
      },
      {
        id: "b",
        text: "Elementos Componentes, de Proceso, de Construcción y Humanos."
      },
      {
        id: "c",
        text: "Análisis, Diseño, Programación y Mantenimiento."
      },
      {
        id: "d",
        text: "Documentos, Casos de Prueba, Ejecutables y Archivos de Configuración."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Un sistema integral de GCSW descansa sobre 4 pilares: Elementos Componentes (herramientas y repositorio), Elementos de Proceso (políticas y procedimientos), Elementos de Construcción (reglas de integración y compilación) y Elementos Humanos (roles, responsabilidades y comités).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q7",
    num: 7,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Identificación de Objetos: Básicos vs Agregados",
    type: "single",
    prompt: "En la etapa de 'Identificación' de la GCS, ¿cuál es la diferencia entre objetos básicos y objetos agregados?",
    options: [
      {
        id: "a",
        text: "El básico es el código fuente y el agregado es el ejecutable."
      },
      {
        id: "b",
        text: "El básico es la unidad de información (ej. un programa); el agregado es una colección de objetos básicos y otros agregados (ej. Plan de Proyecto)."
      },
      {
        id: "c",
        text: "El básico es el hardware y el agregado es el software."
      },
      {
        id: "d",
        text: "No hay diferencia, ambos términos son sinónimos en la Gestión de Configuración."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Un objeto básico es una unidad de información atómica creada durante la ingeniería (ej. un módulo de código, una especificación de interfaz o un caso de prueba). Un objeto agregado es una colección estructurada de objetos básicos y de otros objetos agregados (ej. un Documento de Diseño o una Línea Base).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q8",
    num: 8,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Gestión de Versiones - Variantes",
    type: "single",
    prompt: "Dentro de la Gestión de Versiones, ¿cómo se define una 'Variante'?",
    options: [
      {
        id: "a",
        text: "Es la versión más antigua del software que ya no se utiliza."
      },
      {
        id: "b",
        text: "Es una versión que evoluciona en el tiempo reemplazando a la anterior de forma lineal."
      },
      {
        id: "c",
        text: "Es una versión de un componente (o configuración global) que evoluciona por separado, representando una variación espacial (ej. para otra plataforma o con otras funciones)."
      },
      {
        id: "d",
        text: "Es un error temporal que se produce al compilar el código fuente."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Una variante representa una divergencia intencional o espacial en la configuración: son versiones coexistentes de un mismo componente adaptadas para diferentes sistemas operativos, idiomas o perfiles de clientes, a diferencia de las revisiones que son evoluciones temporales que sustituyen a la versión previa.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q9",
    num: 9,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Concepto de Línea Base (Baseline)",
    type: "single",
    prompt: "¿Qué es una 'Línea Base' (Baseline) en el control de versiones?",
    options: [
      {
        id: "a",
        text: "El último commit realizado por un desarrollador en su repositorio local."
      },
      {
        id: "b",
        text: "La primera línea de código de un programa."
      },
      {
        id: "c",
        text: "Una definición de un sistema específico que incluye las versiones de los componentes, librerías utilizadas, componentes externas y archivos de configuración."
      },
      {
        id: "d",
        text: "El canal de comunicación principal entre el cliente y el equipo de desarrollo."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Una línea base (baseline) es una especificación o producto que ha sido formalmente revisado y acordado, sirviendo como fundamento para el desarrollo posterior. Define con exactitud las versiones específicas de todos los elementos componentes (código, dependencias y configuraciones) en un momento dado.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q10",
    num: 10,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "SCV Centralizado vs Distribuido",
    type: "single",
    prompt: "¿Cuál es la principal diferencia entre un Sistema de Control de Versiones Centralizado y uno Distribuido?",
    options: [
      {
        id: "a",
        text: "El Centralizado no guarda historial, el Distribuido sí."
      },
      {
        id: "b",
        text: "El Centralizado usa un solo repositorio principal para todas las versiones (ej. SVN); en el Distribuido existen múltiples copias del repositorio al mismo tiempo (ej. Git)."
      },
      {
        id: "c",
        text: "El Centralizado es exclusivo para Windows y el Distribuido para Linux."
      },
      {
        id: "d",
        text: "El Distribuido requiere conexión permanente a Internet para poder programar, el Centralizado no."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "En un SCV centralizado (SVN, CVS) existe un único servidor central que custodia el historial oficial. En un SCV distribuido (Git, Mercurial) cada colaborador clona un repositorio completo local con todo el historial de cambios, permitiendo trabajar y commitear desconectado.",
    diagram: null,
    points: 1
  }
];
