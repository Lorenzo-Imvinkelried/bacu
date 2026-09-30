/**
 * Banco de Preguntas - GitHub - CI/CD - Cuestionario 1 (Parte 1: Q1 - Q10)
 * Temas: Fundamentos de CI/CD, Principios, Arquitectura de Pipelines, Runners y Sintaxis YAML
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const GITHUB_CICD_C1_PART_01_QUESTIONS = [
  {
    id: "gh-cicd-q01",
    num: 1,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Fundamentos de CI/CD",
    type: "single",
    prompt: "¿Qué significan las siglas CI y CD en el contexto del ciclo de vida del desarrollo de software?",
    options: [
      { id: "a", text: "Code Inspection y Code Deployment" },
      { id: "b", text: "Continuous Integration y Continuous Delivery / Continuous Deployment" },
      { id: "c", text: "Central Infrastructure y Cloud Distribution" },
      { id: "d", text: "Compiled Interface y Continuous Debugging" }
    ],
    correctAnswers: ["b"],
    explanation: "CI corresponde a *Continuous Integration* (Integración Continua) y CD puede referirse a *Continuous Delivery* (Entrega Continua) o *Continuous Deployment* (Despliegue Continuo), según el grado de automatización hacia producción. (Diapositiva de origen: Fundamentos de CI/CD)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q02",
    num: 2,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Fundamentos de CI/CD",
    type: "single",
    prompt: "¿Cuál es el problema principal que la Integración Continua (CI) busca resolver en un equipo de trabajo?",
    options: [
      { id: "a", text: "La falta de espacio en los discos de los servidores de producción." },
      { id: "b", text: 'El conocido "integration hell", donde múltiples desarrolladores integran ramas aisladas tras semanas de trabajo y surgen conflictos masivos difíciles de resolver.' },
      { id: "c", text: "La necesidad de escribir pruebas unitarias de forma manual." },
      { id: "d", text: "El costo de licenciamiento de los sistemas operativos donde corre la aplicación." }
    ],
    correctAnswers: ["b"],
    explanation: "Al integrar cambios de código de forma frecuente (idealmente diaria o tras cada commit/PR) y verificarlos automáticamente con builds y tests, los conflictos y errores se detectan de inmediato cuando el cambio todavía es pequeño y fácil de corregir. (Diapositiva de origen: Fundamentos de CI/CD)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q03",
    num: 3,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Fundamentos de CI/CD",
    type: "single",
    prompt: "¿Cuál es la diferencia técnica clave entre *Continuous Delivery* (Entrega Continua) y *Continuous Deployment* (Despliegue Continuo)?",
    options: [
      { id: "a", text: "Continuous Delivery requiere compilar el código; Continuous Deployment no requiere compilación." },
      { id: "b", text: "Continuous Delivery deja el software siempre listo para producción pero requiere una aprobación humana o manual para el pase final, mientras que Continuous Deployment pasa los cambios automáticamente a producción si superan el pipeline." },
      { id: "c", text: "Continuous Delivery aplica solo a aplicaciones web y Continuous Deployment solo a aplicaciones de escritorio." },
      { id: "d", text: "Continuous Deployment es exclusivo de servidores locales (on-premise)." }
    ],
    correctAnswers: ["b"],
    explanation: "En *Continuous Delivery*, cada cambio probado con éxito genera un artefacto listo para desplegar, pero el paso a producción lo gatilla una decisión humana (un clic de aprobación). En *Continuous Deployment*, todo cambio que supera las pruebas se despliega en producción de manera 100% automatizada sin intervención manual. (Diapositiva de origen: Fundamentos de CI/CD)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q04",
    num: 4,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Principios de Integración Continua",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes prácticas son pilares esenciales para implementar una Integración Continua efectiva? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Mantener un repositorio de código centralizado y compartido." },
      { id: "b", text: "Contar con una suite de pruebas automatizadas que valide la aplicación ante cada cambio." },
      { id: "c", text: "Postergar la integración del código hasta el final del sprint para no interrumpir al resto del equipo." },
      { id: "d", text: "Automatizar el proceso de construcción (*build*) para que no dependa de configuraciones manuales en máquinas individuales." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "CI requiere control de versiones centralizado, automatización completa del proceso de build y pruebas automáticas rápidas. Postergar la integración es lo opuesto a la filosofía continua. (Diapositiva de origen: Principios de Integración Continua)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q05",
    num: 5,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Arquitectura de Pipelines",
    type: "single",
    prompt: "¿Qué es un **Pipeline** en el contexto de CI/CD?",
    options: [
      { id: "a", text: "Una base de datos relacional donde se registran los usuarios del repositorio." },
      { id: "b", text: "Una secuencia automatizada y estructurada de etapas (como build, test, análisis estático y deploy) por las que pasa el código desde que se confirma hasta que se entrega." },
      { id: "c", text: "Un cable de fibra óptica dedicado entre el servidor de Git y el entorno de pruebas." },
      { id: "d", text: "Un comando de Git que reemplaza a `git merge` en ramas protegidas." }
    ],
    correctAnswers: ["b"],
    explanation: "Un pipeline es el flujo de trabajo automatizado que define el camino del código fuente. Se organiza en etapas o jobs que se ejecutan secuencialmente o en paralelo para validar y entregar la aplicación. (Diapositiva de origen: Arquitectura de Pipelines)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q06",
    num: 6,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Infraestructura de CI: Runners",
    type: "single",
    prompt: "¿Qué es y qué función cumple un **Runner** (o agente de CI) dentro de la infraestructura de integración continua?",
    options: [
      { id: "a", text: "Es la máquina virtual, contenedor o servidor físico que toma los trabajos definidos en el pipeline, ejecuta los comandos del script y reporta el estado final a la plataforma de Git." },
      { id: "b", text: "Es una extensión del navegador que le avisa al programador cuándo terminó una prueba." },
      { id: "c", text: "Es un algoritmo de compresión que reduce el tamaño del repositorio `.git`." },
      { id: "d", text: "Es el proceso del sistema operativo encargado de gestionar los permisos de los pull requests." }
    ],
    correctAnswers: ["a"],
    explanation: 'El runner es el "músculo" ejecutor del sistema de CI. Escucha eventos, descarga el repositorio, provisiona el entorno de ejecución, corre los comandos configurados paso a paso y devuelve el código de salida (éxito o fallo). (Diapositiva de origen: Infraestructura de CI: Runners)',
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q07",
    num: 7,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Tipos de Runners",
    type: "single",
    prompt: "¿Qué ventajas ofrece utilizar **Runners gestionados por la plataforma** (como GitHub-hosted runners) frente a instalar un **Self-hosted Runner** propio?",
    options: [
      { id: "a", text: "No requieren mantenimiento ni configuración de infraestructura por parte del equipo, y proporcionan un entorno limpio y aislado en cada ejecución." },
      { id: "b", text: "Son completamente gratuitos de forma ilimitada para cualquier volumen de datos y tiempo de cómputo en cuentas corporativas." },
      { id: "c", text: "Tienen acceso directo por defecto a la red interna privada (LAN) de la empresa sin configurar VPN ni túneles." },
      { id: "d", text: "Permiten conservar intacto el estado del disco duro entre ejecuciones de distintos repositorios." }
    ],
    correctAnswers: ["a"],
    explanation: "Los runners gestionados por el proveedor (GitHub, GitLab, etc.) son máquinas efímeras: se crean, ejecutan el trabajo en un entorno limpio y se destruyen al finalizar, liberando al desarrollador de parches de SO, seguridad y aprovisionamiento. (Diapositiva de origen: Tipos de Runners)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q08",
    num: 8,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Tipos de Runners",
    type: "multiple",
    prompt: "¿En qué escenarios es indispensable o altamente recomendable optar por un **Self-hosted Runner**? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Cuando el pipeline necesita acceder a bases de datos, dispositivos de prueba o servidores ubicados dentro de una red local privada no expuesta a internet." },
      { id: "b", text: "Cuando se requiere hardware especializado (como GPUs específicas para entrenamiento/renderizado o arquitecturas ARM dedicadas)." },
      { id: "c", text: "Cuando se busca evitar el uso de cualquier archivo de configuración en el repositorio." },
      { id: "d", text: "Cuando el volumen de compilación es masivo y se busca optimizar tiempos reutilizando cachés locales pesadas en disco propio." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Los self-hosted runners son ideales para requerimientos de hardware puntual (GPU/arquitecturas específicas), acceso a intranets/redes locales y pipelines con dependencias gigantescas donde se busca aprovechar el almacenamiento local permanente para acelerar builds. (Diapositiva de origen: Tipos de Runners)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q09",
    num: 9,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Sintaxis y Fundamentos de YAML",
    type: "single",
    prompt: "¿Qué es **YAML** y por qué es el formato predominante para definir pipelines de CI/CD?",
    options: [
      { id: "a", text: "Un lenguaje de programación compilado para crear microservicios de alto rendimiento." },
      { id: "b", text: "Un formato de serialización de datos basado en texto plano diseñado para ser legible por humanos, fácil de versionar en Git y estructurado mediante indentación." },
      { id: "c", text: "Un protocolo binario de comunicación entre microcontroladores y servidores web." },
      { id: "d", text: "Un estándar de bases de datos NoSQL exclusivo de plataformas cloud." }
    ],
    correctAnswers: ["b"],
    explanation: "YAML (*YAML Ain't Markup Language*) es limpio y legible porque evita etiquetas de cierre o llaves complejas. Al ser texto plano, se almacena directamente en el repositorio junto al código, permitiendo versionar la infraestructura como código. (Diapositiva de origen: Sintaxis y Fundamentos de YAML)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q10",
    num: 10,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Sintaxis y Fundamentos de YAML",
    type: "single",
    prompt: "¿Cuál es el error de sintaxis más común y crítico al redactar archivos YAML de configuración?",
    options: [
      { id: "a", text: "Olvidar cerrar los corchetes angulares al final de cada bloque." },
      { id: "b", text: "Utilizar caracteres de tabulación (`\\t`) en lugar de espacios en blanco para la indentación jerárquica." },
      { id: "c", text: "Escribir cadenas de texto sin ponerles siempre comillas dobles obligatorias." },
      { id: "d", text: "No colocar punto y coma (`;`) al final de cada asignación de clave y valor." }
    ],
    correctAnswers: ["b"],
    explanation: "El estándar de YAML prohíbe taxativamente el uso de tabulaciones para anidar niveles estructurales; los niveles jerárquicos deben definirse con espacios consistentes. La mayoría de los linters y parsers fallan inmediatamente si encuentran un tabulador. (Diapositiva de origen: Sintaxis y Fundamentos de YAML)",
    diagram: null,
    points: 1
  }
];
