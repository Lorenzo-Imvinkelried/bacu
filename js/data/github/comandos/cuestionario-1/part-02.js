/**
 * Banco de Preguntas - GitHub - Comandos - Cuestionario 1 (Parte 2: Q14 - Q25)
 * Temas: Comandos Offline (show, blame, switch/checkout, merge vs rebase, cherry-pick, revert vs reset, clean, stash, tag, reflog, config, remote)
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const GITHUB_CMD_C1_PART_02_QUESTIONS = [
  {
    id: "gh-cmd-q14",
    num: 14,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué resultado produce ejecutar `git show <commit>`?",
    options: [
      { id: "a", text: "Abre una interfaz gráfica interactiva para modificar el commit seleccionado." },
      { id: "b", text: "Muestra los metadatos completos de ese commit específico (autor, fecha, mensaje) junto con el diff de los cambios introducidos." },
      { id: "c", text: "Cambia el puntero HEAD inmediatamente a ese commit en modo detached." },
      { id: "d", text: "Elimina el commit seleccionado del historial visible." }
    ],
    correctAnswers: ["b"],
    explanation: "`git show <commit>` inspecciona un objeto específico de Git, presentando la información del autor, fecha, mensaje descriptivo y el parche de diferencias detallado que introdujo esa confirmación. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q15",
    num: 15,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué utilidad práctica ofrece el comando `git blame <archivo>` a un equipo de desarrollo?",
    options: [
      { id: "a", text: "Identifica archivos corruptos dentro de la estructura interna de Git." },
      { id: "b", text: "Muestra el contenido del archivo anotando en cada línea el commit, la fecha y el autor que realizó la última modificación sobre ella." },
      { id: "c", text: "Compara el archivo local con la versión del último release para encontrar fallos sintácticos." },
      { id: "d", text: "Elimina del historial todas las contribuciones hechas por un autor determinado." }
    ],
    correctAnswers: ["b"],
    explanation: "`git blame` revisa cada línea de un archivo determinado e imprime el hash del commit, autor y fecha del último cambio introducido en esa línea puntual, facilitando el rastreo de por qué se tomó una decisión de código. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q16",
    num: 16,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "Con la introducción de `git switch`, ¿cuál es la forma recomendada y moderna de cambiar de una rama a otra existente?",
    options: [
      { id: "a", text: "git checkout <rama> o git switch <rama>" },
      { id: "b", text: "git branch --move" },
      { id: "c", text: "git merge" },
      { id: "d", text: "git restore" }
    ],
    correctAnswers: ["a"],
    explanation: "Tradicionalmente se usaba `git checkout <rama>`, pero Git introdujo `git switch <rama>` con la finalidad específica de cambiar de ramas sin la ambigüedad que tenía `checkout` (que servía tanto para ramas como para restaurar archivos). Ambos son válidos funcionalmente. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q17",
    num: 17,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes afirmaciones describen la diferencia entre `git merge` y `git rebase` al integrar cambios de una rama secundaria? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "`git merge` preserva la historia cronológica original y crea (en caso de no ser fast-forward) un commit de fusión explícito." },
      { id: "b", text: "`git rebase` reescribe la historia linealizando los commits sobre la punta de la rama destino." },
      { id: "c", text: "`git merge` es una operación online mientras que `git rebase` es exclusivamente offline." },
      { id: "d", text: "`git rebase` genera nuevos identificadores (hashes) para los commits que traslada." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "`git merge` une dos historias conservando los commits originales y agregando un commit de merge. `git rebase` replantea la base de la rama actual moviendo los commits encima de otra rama, reescribiendo la historia y cambiando sus SHA-1/hashes. Ambas operaciones son locales/offline. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q18",
    num: 18,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué realiza el comando `git cherry-pick <commit>`?",
    options: [
      { id: "a", text: "Elimina un commit específico de cualquier rama sin dejar rastros." },
      { id: "b", text: "Aplica los cambios introducidos por un commit específico de otra rama y crea un nuevo commit con esos cambios en la rama actual." },
      { id: "c", text: "Combina automáticamente todos los commits que compartan el mismo autor." },
      { id: "d", text: "Descarga selectivamente una rama desde un repositorio remoto." }
    ],
    correctAnswers: ["b"],
    explanation: "`git cherry-pick` permite elegir un commit puntual en cualquier punto del historial y aplicar sus modificaciones exactas como una nueva confirmación en la rama sobre la cual nos encontramos parados. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q19",
    num: 19,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "Si deseas deshacer un commit que ya fue compartido públicamente con el equipo, ¿por qué se prefiere utilizar `git revert <commit>` en lugar de `git reset <commit>`?",
    options: [
      { id: "a", text: "Porque `git revert` borra el historial de forma invisible en todos los equipos remotos." },
      { id: "b", text: "Porque `git revert` crea un nuevo commit que invierte exactamente los cambios del commit indicado, sin alterar ni reescribir la historia previa." },
      { id: "c", text: "Porque `git reset` no funciona en repositorios locales que tengan más de dos ramas." },
      { id: "d", text: "Porque `git revert` es el único comando que permite restaurar archivos borrados." }
    ],
    correctAnswers: ["b"],
    explanation: "`git revert` es seguro para historias públicas porque no modifica commits anteriores: genera un nuevo commit que desace los cambios del commit objetivo. En cambio, `git reset` reescribe el historial eliminando o retrocediendo el puntero de la rama, lo cual genera inconsistencias en ramas compartidas. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q20",
    num: 20,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Cuál es el propósito del comando `git clean -fd`?",
    options: [
      { id: "a", text: "Limpiar los commits huérfanos que quedaron sin referencia en el repositorio." },
      { id: "b", text: "Eliminar forzadamente (`-f`) los archivos no rastreados (untracked) y los directorios completos no rastreados (`-d`) del directorio de trabajo." },
      { id: "c", text: "Formatear el código fuente según las reglas definidas en el repositorio." },
      { id: "d", text: "Descartar todos los cambios que ya fueron añadidos al Staging Area." }
    ],
    correctAnswers: ["b"],
    explanation: "`git clean` borra archivos que no están bajo seguimiento de Git. El modificador `-f` (force) confirma la eliminación y `-d` incluye directorios completos que no están rastreados. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q21",
    num: 21,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿En qué situación resulta fundamental utilizar `git stash` y posteriormente `git stash pop`?",
    options: [
      { id: "a", text: "Cuando se desea enviar una copia de seguridad temporal directamente a GitHub sin confirmación." },
      { id: "b", text: "Cuando necesitas cambiar de rama urgentemente pero tienes cambios a medio terminar en tu Working Directory y no quieres crear un commit incompleto." },
      { id: "c", text: "Cuando un conflicto de merge no se puede resolver manualmente." },
      { id: "d", text: "Para eliminar permanentemente ramas que ya fueron fusionadas." }
    ],
    correctAnswers: ["b"],
    explanation: "`git stash` guarda temporalmente las modificaciones no confirmadas en una pila oculta y limpia el Working Directory a su estado HEAD, permitiendo cambiar de rama; `git stash pop` recupera esas modificaciones guardadas y las vuelve a aplicar sobre el espacio de trabajo. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q22",
    num: 22,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué función cumple el comando `git tag <nombre>`?",
    options: [
      { id: "a", text: "Asigna una etiqueta legible a un commit específico del historial, comúnmente utilizada para marcar versiones o releases (ej. v1.0.0)." },
      { id: "b", text: "Renombra la rama actual sin cambiar el commit al que apunta." },
      { id: "c", text: "Crea un apodo para un comando largo en el archivo de configuración." },
      { id: "d", text: "Clasifica los archivos en carpetas según su lenguaje de programación." }
    ],
    correctAnswers: ["a"],
    explanation: "Las etiquetas o *tags* son referencias inmutables que apuntan a un punto específico de la historia del repositorio, ideales para versionado de software o hitos clave de entrega. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q23",
    num: 23,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Por qué el comando `git reflog` es considerado la \"red de seguridad\" de Git?",
    options: [
      { id: "a", text: "Porque sincroniza automáticamente copias de seguridad cada 5 minutos en la nube." },
      { id: "b", text: "Porque registra cada movimiento que ha hecho el puntero HEAD localmente, permitiendo recuperar commits o estados que parecen haberse perdido tras un reset, rebase o borrado de ramas." },
      { id: "c", text: "Porque bloquea el repositorio ante accesos no autorizados mediante claves SSH." },
      { id: "d", text: "Porque valida que los archivos modificados no contengan errores de sintaxis antes de permitir el commit." }
    ],
    correctAnswers: ["b"],
    explanation: "`git reflog` guarda un registro cronológico de todas las actualizaciones de referencias locales (cada vez que HEAD se mueve por commits, checkout, rebase, etc.). Incluso si un commit queda descolgado de una rama, su hash sigue visible en el reflog durante un tiempo. (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q24",
    num: 24,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "multiple",
    prompt: "¿Qué configuración se puede consultar o modificar mediante el comando `git config`? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "El nombre de usuario (`user.name`) y correo electrónico (`user.email`)." },
      { id: "b", text: "Aliases o atajos personalizados para comandos de Git." },
      { id: "c", text: "El historial completo de confirmaciones de todos los colaboradores del repositorio." },
      { id: "d", text: "Preferencias del editor de texto por defecto para escribir mensajes de commit." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "`git config` gestiona las variables de configuración del entorno Git a nivel local, global o de sistema (usuarios, emails, editores, alias, comportamientos de merge/rebase). El historial de confirmaciones no forma parte de la configuración, sino de los objetos del repositorio (`git log`). (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cmd-q25",
    num: 25,
    subject: "GitHub",
    unit: "Comandos",
    quizId: "quiz-github-comandos-cuestionario-1",
    topic: "Comandos Offline",
    type: "single",
    prompt: "¿Qué gestiona el comando `git remote` cuando se ejecuta en un repositorio local?",
    options: [
      { id: "a", text: "Las direcciones IP de las máquinas de los demás integrantes del equipo." },
      { id: "b", text: "Los nombres y las URLs de conexión de los repositorios remotos vinculados al proyecto local (como `origin`)." },
      { id: "c", text: "Las credenciales de acceso directo a los servidores de producción vía SSH." },
      { id: "d", text: "El listado de dependencias externas y librerías que utiliza la aplicación." }
    ],
    correctAnswers: ["b"],
    explanation: "`git remote` permite ver, añadir (`add`), modificar o borrar las referencias de los repositorios remotos con los que el repositorio local está conectado e intercambia datos (mediante `push` o `fetch`). (Diapositiva de origen: Comandos Offline)",
    diagram: null,
    points: 1
  }
];
