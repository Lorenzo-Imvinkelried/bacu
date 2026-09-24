/**
 * Banco de Preguntas - UNIDAD 3 (Gestión de Configuración del Software)
 * Parte 02 (Preguntas 11 a 20)
 * Temas: Deltificación SVN, Ramas (Branches), Merging, Buenas prácticas de mensajes de commit,
 * 7 Reglas del título de commit, git log --oneline, Versionado Semántico (Major, Minor, Patch)
 * y Estados de pre-release (Release Candidate).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "ing-cal-p1-u3-q11",
    num: 11,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Almacenamiento Deltificado (SVN)",
    type: "single",
    prompt: "¿Cómo funciona el almacenamiento 'deltificado' en sistemas como Subversion (SVN)?",
    options: [
      {
        id: "a",
        text: "Crea copias completas de todos los archivos en cada nuevo commit, sin importar si cambiaron o no."
      },
      {
        id: "b",
        text: "Elimina las versiones antiguas permanentemente para ahorrar espacio en el disco duro."
      },
      {
        id: "c",
        text: "Codifica la representación de un bloque de datos como una colección de diferencias contra otro bloque, ahorrando mucho espacio de almacenamiento."
      },
      {
        id: "d",
        text: "Comprime todos los repositorios en un único archivo .ZIP cifrado."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El almacenamiento deltificado (delta encoding) guarda únicamente las diferencias o deltas entre revisiones consecutivas en lugar de duplicar el archivo entero en cada commit, reduciendo drásticamente el espacio en disco necesario en el repositorio central.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q12",
    num: 12,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Ramas (Branching)",
    type: "single",
    prompt: "¿Para qué sirve un 'Branch' (Rama) en la evolución de un sistema?",
    options: [
      {
        id: "a",
        text: "Para eliminar por completo la línea principal (trunk/master)."
      },
      {
        id: "b",
        text: "Es una revisión que surge de la línea principal y evoluciona independientemente, permitiendo el desarrollo en paralelo."
      },
      {
        id: "c",
        text: "Para unir dos repositorios distintos de empresas diferentes."
      },
      {
        id: "d",
        text: "Sirve únicamente para almacenar archivos multimedia pesados fuera de la base de datos."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Una rama (branch) bifurca la línea principal de desarrollo para permitir que un equipo o desarrollador trabaje de forma aislada en nuevas funcionalidades, refactorizaciones o correcciones críticas (hotfixes) sin desestabilizar la rama principal.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q13",
    num: 13,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Fusión de Ramas (Merging)",
    type: "single",
    prompt: "¿Qué acción realiza un 'Merge' en el control de versiones?",
    options: [
      {
        id: "a",
        text: "Incorpora los cambios realizados en una versión de un branch a una versión del trunk/master/main."
      },
      {
        id: "b",
        text: "Elimina el historial completo de un archivo específico."
      },
      {
        id: "c",
        text: "Sube el código automáticamente al servidor de producción del cliente."
      },
      {
        id: "d",
        text: "Crea una nueva rama vacía a partir del inicio del proyecto."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La operación de merge (o fusión) integra los cambios y el historial desarrollado en una rama secundaria de vuelta a la línea principal (main/master/trunk) o entre ramas, resolviendo discrepancias mediante algoritmos de comparación de tres vías.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q14",
    num: 14,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Mensajes de Commit - Utilidad",
    type: "single",
    prompt: "Al redactar mensajes de Commit, ¿cuál es la utilidad principal del mensaje según las buenas prácticas?",
    options: [
      {
        id: "a",
        text: "Copiar y pegar el código fuente que fue modificado."
      },
      {
        id: "b",
        text: "Explicar la razón o el 'por qué' hay detrás de esos cambios, ya que el historial ya dice el 'cómo'."
      },
      {
        id: "c",
        text: "Insultar a otros programadores cuando el código fuente tiene errores."
      },
      {
        id: "d",
        text: "Registrar el horario de entrada y salida del programador en la empresa."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El código y el 'diff' ya documentan de forma exacta el 'cómo' y el 'qué' se cambió. La principal responsabilidad del mensaje de commit es explicar el contexto y la motivación comercial o técnica: el 'por qué' se adoptó esa decisión.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q15",
    num: 15,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "7 Reglas para Mensajes de Commit (Título)",
    type: "single",
    prompt: "Según las 7 reglas para los Mensajes de Commit, ¿cómo debe formatearse el Título?",
    options: [
      {
        id: "a",
        text: "Debe tener más de 100 caracteres, terminar con un punto y estar en minúsculas."
      },
      {
        id: "b",
        text: "Debe estar separado del cuerpo por una línea en blanco, limitarse a 50 caracteres, estar capitalizado, en modo imperativo y no terminar en punto."
      },
      {
        id: "c",
        text: "Debe incluir siempre un emoji al inicio y detallar el 'cómo' se hizo el código."
      },
      {
        id: "d",
        text: "No importa el formato mientras contenga la fecha exacta de modificación."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Las directivas ampliamente aceptadas de Chris Beams prescriben: separar asunto de cuerpo con línea en blanco, limitar el asunto a 50 caracteres, empezar con mayúscula, redactar en modo imperativo ('Add feature' en vez de 'Added feature') y no terminar con punto final.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q16",
    num: 16,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Git Log Resumido",
    type: "single",
    prompt: "En Git, ¿qué comando muestra solo los títulos de los commits para ver la historia resumida?",
    options: [
      {
        id: "a",
        text: "git status --short"
      },
      {
        id: "b",
        text: "git log --oneline"
      },
      {
        id: "c",
        text: "git commit -m"
      },
      {
        id: "d",
        text: "git branch -v"
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "El modificador `git log --oneline` comprime cada commit en una única línea mostrando el hash SHA abreviado de 7 dígitos y el título del mensaje, facilitando una lectura rápida y panorámica del historial.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q17",
    num: 17,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Versionado Semántico - Patch (Z)",
    type: "single",
    prompt: "En el Versionado Semántico (X.Y.Z), ¿cuándo DEBE incrementarse el número 'patch' (Z)?",
    options: [
      {
        id: "a",
        text: "Cuando se aplica una corrección de errores (bugfix) que es compatible con la versión anterior."
      },
      {
        id: "b",
        text: "Cuando se introduce cualquier cambio NO compatible con la versión anterior."
      },
      {
        id: "c",
        text: "Cuando se agrega nueva funcionalidad que reinicia la versión mayor a cero."
      },
      {
        id: "d",
        text: "Cuando se cambia el nombre comercial del producto de software."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Según la especificación SemVer (Semantic Versioning), el dígito PATCH (Z) se incrementa únicamente cuando se implementan correcciones de defectos hacia atrás compatibles (bugfixes) que no alteran la API pública.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q18",
    num: 18,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Versionado Semántico - Incremento de Minor (Y)",
    type: "single",
    prompt: "En el Versionado Semántico, si incrementas la versión 'minor' (Y) porque agregaste nueva funcionalidad compatible, ¿qué debe pasar con la versión 'patch' (Z)?",
    options: [
      {
        id: "a",
        text: "Debe incrementarse en 1 también."
      },
      {
        id: "b",
        text: "Debe mantenerse igual que en la versión anterior."
      },
      {
        id: "c",
        text: "Debe ser reseteada obligatoriamente a 0."
      },
      {
        id: "d",
        text: "Debe reemplazarse por la palabra 'beta'."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En la regla formal de SemVer: al incrementar la versión MINOR (Y) por añadir nuevas funcionalidades compatibles, el dígito PATCH (Z) DEBE ser reiniciado obligatoriamente a cero (ej. de 1.2.4 pasa a 1.3.0).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q19",
    num: 19,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Versionado Semántico - Major (X)",
    type: "single",
    prompt: "En el Versionado Semántico, ¿qué indica incrementar la versión 'major' (X)?",
    options: [
      {
        id: "a",
        text: "Que se corrigió un pequeño error tipográfico en la documentación."
      },
      {
        id: "b",
        text: "Que el software se encuentra en fase pre-alfa."
      },
      {
        id: "c",
        text: "Que se introdujo cualquier cambio NO compatible con la versión anterior (grandes cambios o mejoras)."
      },
      {
        id: "d",
        text: "Que se añadió una etiqueta para identificar al cliente final."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El incremento de la versión MAJOR (X) señala la introducción de cambios que rompen la compatibilidad hacia atrás (breaking changes): los clientes o sistemas dependientes deberán adaptar su código para interactuar con la nueva API pública.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q20",
    num: 20,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Pre-Release: Release Candidate (RC)",
    type: "single",
    prompt: "¿A qué etapa de desarrollo corresponde el identificador pre-release 'RC' (Release Candidate)?",
    options: [
      {
        id: "a",
        text: "A las actividades antes de las pruebas formales, con código sumamente inestable."
      },
      {
        id: "b",
        text: "A la primera versión completa enviada a verificadores, que aún es muy inestable."
      },
      {
        id: "c",
        text: "A una versión preparada para publicarse como definitiva (libre de errores críticos), a menos que aparezcan errores que lo impidan."
      },
      {
        id: "d",
        text: "A un parche rápido liberado de urgencia para solucionar un problema en producción."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Un Release Candidate (candidato a lanzamiento) es una versión que ya ha superado las pruebas alfa y beta, congeló nuevas funcionalidades y se considera lista para producción definitiva salvo que surja un defecto crítico bloqueante imprevisto de última hora.",
    diagram: null,
    points: 1
  }
];
