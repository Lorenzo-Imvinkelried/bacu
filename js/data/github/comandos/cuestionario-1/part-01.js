/**
 * Banco de Preguntas - GitHub - Comandos - Cuestionario 1 (Parte 1: Q1 - Q13)
 * Temas: Comandos Online (clone, fetch, pull, push, ls-remote) y Comandos Offline (init, status, add, commit, rm, mv, restore, log, diff)
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const GITHUB_CMD_C1_PART_01_QUESTIONS = [
  {
    id: "gh-cmd-q01",
    num: 1,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Online",
    type: "single",
    prompt: "¿Cuál de los siguientes comandos permite obtener el historial completo y todos los archivos de un repositorio remoto para trabajar de forma local por primera vez?",
    options: [
      { id: "a", text: "git init" },
      { id: "b", text: "git fetch" },
      { id: "c", text: "git clone" },
      { id: "d", text: "git remote add" }
    ],
    correctAnswers: ["c"],
    explanation: "`git clone <url>` descarga un repositorio remoto existente junto con todo su historial de commits, ramas y archivos a una carpeta local. `git init` crea un repositorio vacío desde cero, mientras que `git fetch` solo descarga cambios de un remoto ya configurado. (Diapositiva de origen: Comandos Online)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q02",
    num: 2,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Online",
    type: "single",
    prompt: "¿Cuál es la diferencia principal entre `git fetch` y `git pull` al interactuar con un repositorio remoto?",
    options: [
      { id: "a", text: "`git fetch` sobrescribe los archivos locales de inmediato, mientras que `git pull` solo actualiza los metadatos." },
      { id: "b", text: "`git fetch` descarga las referencias y objetos remotos sin fusionarlos, mientras que `git pull` realiza la descarga y fusiona automáticamente en la rama actual." },
      { id: "c", text: "`git fetch` envía cambios locales al servidor, mientras que `git pull` los recupera." },
      { id: "d", text: "`git fetch` es un comando offline y `git pull` requiere conexión a internet." }
    ],
    correctAnswers: ["b"],
    explanation: "`git fetch` únicamente recupera el estado y objetos del repositorio remoto sin alterar el árbol de trabajo local; `git pull` combina en un solo paso la descarga (`fetch`) con la integración o fusión (`merge`) en la rama activa. (Diapositiva de origen: Comandos Online)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q03",
    num: 3,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Online",
    type: "single",
    prompt: "¿Qué función cumple el comando `git push` en el flujo de trabajo distribuido de Git?",
    options: [
      { id: "a", text: "Sube los commits locales confirmados a una rama en el repositorio remoto." },
      { id: "b", text: "Pasa los cambios del Working Directory directamente al Remote Repository sin pasar por el commit." },
      { id: "c", text: "Descarga las ramas creadas por otros colaboradores hacia el entorno local." },
      { id: "d", text: "Actualiza la configuración global del usuario en los servidores remotos." }
    ],
    correctAnswers: ["a"],
    explanation: "`git push` publica las confirmaciones (commits) locales en el repositorio remoto configurado, sincronizando los avances hacia el servidor compartido. (Diapositiva de origen: Comandos Online)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q04",
    num: 4,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Online",
    type: "single",
    prompt: "¿Para qué se utiliza el comando `git ls-remote`?",
    options: [
      { id: "a", text: "Para listar los archivos locales que han sido modificados pero no comiteados." },
      { id: "b", text: "Para consultar y listar las referencias (ramas, tags y HEADs) disponibles directamente en un repositorio remoto sin necesidad de clonarlo." },
      { id: "c", text: "Para verificar la lista de remotos guardados localmente con sus URLs asociadas." },
      { id: "d", text: "Para eliminar referencias obsoletas en un servidor Git remoto." }
    ],
    correctAnswers: ["b"],
    explanation: "`git ls-remote` permite inspeccionar las referencias (como ramas y tags) presentes en un repositorio remoto consultándolo directamente por red, sin requerir una copia local completa. (Diapositiva de origen: Comandos Online)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q05",
    num: 5,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Online / Comandos Offline",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes comandos requieren obligatoriamente conectividad de red para poder ejecutarse con éxito? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "git clone" },
      { id: "b", text: "git log" },
      { id: "c", text: "git push" },
      { id: "d", text: "git status" }
    ],
    correctAnswers: ["a", "c"],
    explanation: "`git clone` y `git push` son comandos online que interactúan directamente con un servidor remoto. En contraste, `git log` y `git status` operan exclusivamente sobre la base de datos local de Git (`.git`) y el directorio de trabajo, funcionando de manera offline. (Diapositiva de origen: Comandos Online / Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q06",
    num: 6,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Cuál es el propósito del comando `git init`?",
    options: [
      { id: "a", text: "Clonar un proyecto existente desde un servidor web." },
      { id: "b", text: "Inicializar un nuevo repositorio Git local vacío en el directorio actual." },
      { id: "c", text: "Configurar el nombre de usuario y correo para la sesión activa." },
      { id: "d", text: "Restaurar el repositorio a su estado original después de un error crítico." }
    ],
    correctAnswers: ["b"],
    explanation: "`git init` crea la estructura interna de control de versiones (el directorio oculto `.git`) en la carpeta actual, permitiendo comenzar a versionar archivos localmente. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q07",
    num: 7,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué información proporciona el comando `git status` al desarrollador?",
    options: [
      { id: "a", text: "El historial completo de todos los autores que han realizado aportes al proyecto." },
      { id: "b", text: "El estado actual del directorio de trabajo y del área de preparación (staging area), detallando archivos modificados, en seguimiento o sin seguimiento." },
      { id: "c", text: "Una comparativa línea por línea del código fuente entre dos ramas distintas." },
      { id: "d", text: "La velocidad de descarga y el estado de la conexión con el servidor remoto." }
    ],
    correctAnswers: ["b"],
    explanation: "`git status` muestra qué archivos tienen cambios en el directorio de trabajo (Working Directory), cuáles están preparados para el siguiente commit (Staging Area / Index) y cuáles son Untracked. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q08",
    num: 8,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué acción realiza el comando `git add <archivo>` en el ciclo de vida de los cambios de Git?",
    options: [
      { id: "a", text: "Confirma los cambios permanentemente en la base de datos de historial local." },
      { id: "b", text: "Mueve las modificaciones de un archivo desde el Working Directory hacia el Staging Area (área de preparación)." },
      { id: "c", text: "Envía el archivo directamente al servidor remoto." },
      { id: "d", text: "Restaura el archivo a la última versión confirmada en HEAD." }
    ],
    correctAnswers: ["b"],
    explanation: "`git add` añade las modificaciones especificadas al Staging Area (o Index), marcándolas como listas para ser empaquetadas en la siguiente confirmación. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q09",
    num: 9,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué realiza `git commit -m \"mensaje\"` dentro del flujo de trabajo de Git?",
    options: [
      { id: "a", text: "Almacena un snapshot permanente en el historial del repositorio local con los cambios que se encontraban en el Staging Area." },
      { id: "b", text: "Sube los cambios con una descripción al servidor remoto." },
      { id: "c", text: "Prepara todos los archivos modificados sin necesidad de agregarlos al índice." },
      { id: "d", text: "Crea una nueva rama bautizándola con el texto indicado entre comillas." }
    ],
    correctAnswers: ["a"],
    explanation: "El comando `git commit` toma el contenido exacto presente en el Staging Area y crea un objeto commit con un identificador único (SHA) y un mensaje descriptivo en el repositorio local. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q10",
    num: 10,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué ocurre cuando se ejecuta el comando `git rm <archivo>`?",
    options: [
      { id: "a", text: "Elimina el archivo únicamente del historial de commits antiguos, dejándolo intacto en el disco." },
      { id: "b", text: "Elimina el archivo del área de preparación (staging) y también del sistema de archivos local (Working Directory)." },
      { id: "c", text: "Oculta temporalmente el archivo para que Git no lo rastree en el próximo push." },
      { id: "d", text: "Revierte el archivo al estado en que se encontraba en el commit anterior." }
    ],
    correctAnswers: ["b"],
    explanation: "`git rm` borra el archivo tanto del disco de trabajo como del índice de Git, dejando registrada la eliminación para el próximo commit. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q11",
    num: 11,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué combinación de acciones realiza el comando `git mv <origen> <destino>`?",
    options: [
      { id: "a", text: "Renombra o mueve un archivo en el disco y prepara automáticamente el cambio en el Staging Area." },
      { id: "b", text: "Mueve un archivo a una rama secundaria sin modificar la rama actual." },
      { id: "c", text: "Duplica un archivo manteniendo su historial de revisiones separado." },
      { id: "d", text: "Cambia de lugar un commit en el árbol genealógico del proyecto." }
    ],
    correctAnswers: ["a"],
    explanation: "`git mv` equivale operativamente a renombrar o mover el archivo en el sistema de archivos (`mv <origen> <destino>`) y luego registrar el cambio en el índice con `git add`. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q12",
    num: 12,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Cuál es el propósito principal del comando `git restore <archivo>`?",
    options: [
      { id: "a", text: "Descargar un archivo borrado desde el servidor remoto." },
      { id: "b", text: "Descartar cambios no confirmados en el Working Directory o desmarcar archivos del Staging Area según sus modificadores." },
      { id: "c", text: "Reconstruir el repositorio completo en caso de corrupción del directorio `.git`." },
      { id: "d", text: "Recuperar un commit que fue eliminado mediante rebase." }
    ],
    correctAnswers: ["b"],
    explanation: "Introducido en versiones modernas de Git para separar responsabilidades de `checkout`, `git restore` se usa para revertir modificaciones locales en los archivos de trabajo o retirar archivos del staging (`--staged`). (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q13",
    num: 13,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Cuál es la diferencia fundamental entre la salida de `git log` y la salida de `git diff`?",
    options: [
      { id: "a", text: "`git log` muestra la lista histórica de commits, autores y fechas; `git diff` muestra las diferencias línea por línea entre estados de archivos o commits." },
      { id: "b", text: "`git log` requiere conexión online y `git diff` es estrictamente offline." },
      { id: "c", text: "`git log` sirve para revertir commits y `git diff` para resolver conflictos de merge." },
      { id: "d", text: "`git log` solo lista nombres de ramas y `git diff` lista nombres de archivos modificados." }
    ],
    correctAnswers: ["a"],
    explanation: "`git log` permite inspeccionar la cronología de confirmaciones (metadatos, SHA, mensaje, autor), mientras que `git diff` compara y expone las modificaciones de texto (añadidos y borrados de líneas) entre el directorio de trabajo, el staging o dos commits. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  }
];
