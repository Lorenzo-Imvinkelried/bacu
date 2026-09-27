/**
 * Banco de Preguntas - GitHub - CI/CD - Cuestionario 1 (Parte 2: Q11 - Q20)
 * Temas: Estructura YAML, Workflows, Jobs, Steps, Matrix, Secretos, Exit Codes, Artefactos y Branch Protection
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const GITHUB_CICD_C1_PART_02_QUESTIONS = [
  {
    id: "gh-cicd-q11",
    num: 11,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Sintaxis y Fundamentos de YAML",
    type: "single",
    prompt: "En la sintaxis de YAML, ¿cómo se representan respectivamente un par **clave-valor** y un elemento de una **lista (secuencia)**?",
    options: [
      { id: "a", text: "`clave = valor` para pares, y `(elemento)` para listas." },
      { id: "b", text: "`clave: valor` para pares, y `- elemento` para listas." },
      { id: "c", text: "`<clave>valor</clave>` para pares, y `[elemento]` para listas." },
      { id: "d", text: "`clave -> valor` para pares, y `* elemento` para listas." }
    ],
    correctAnswers: ["b"],
    explanation: "En YAML los diccionarios o mapas usan la sintaxis `clave: valor` (con un espacio obligatorio tras los dos puntos), y las secuencias o listas ordenadas se identifican anteponiendo un guion seguido de un espacio (`- item`). (Diapositiva de origen: Sintaxis y Fundamentos de YAML)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q12",
    num: 12,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Estructura de Workflows en YAML",
    type: "single",
    prompt: "En plataformas como GitHub Actions, ¿cuál es la jerarquía organizativa estándar de los conceptos dentro de un archivo YAML de workflow?",
    options: [
      { id: "a", text: "Step -> Job -> Workflow" },
      { id: "b", text: "Workflow -> Job -> Step" },
      { id: "c", text: "Runner -> Pipeline -> Event" },
      { id: "d", text: "Job -> Step -> Trigger" }
    ],
    correctAnswers: ["b"],
    explanation: "El archivo YAML completo representa el **Workflow**. Dentro de él se definen uno o más **Jobs** (que corren en runners específicos de forma paralela o dependiente), y cada Job contiene una serie secuencial de **Steps** (tareas o comandos individuales). (Diapositiva de origen: Estructura de Workflows en YAML)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q13",
    num: 13,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Estructura de Workflows en YAML",
    type: "multiple",
    prompt: "Dentro de un workflow YAML de CI/CD, ¿qué función cumple la sección `steps:` y qué puede contener cada paso individual? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Ejecutar comandos directos del sistema operativo mediante la clave `run:` (ej. `npm test` o `make build`)." },
      { id: "b", text: "Invocar acciones o módulos reutilizables predefinidos por la comunidad o la plataforma mediante la clave `uses:` (ej. `actions/checkout@v4`)." },
      { id: "c", text: "Definir el nombre del autor del commit que disparó el pipeline." },
      { id: "d", text: "Asignar un nombre identificatorio a la tarea con `name:` para facilitar la lectura de los logs." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Los *steps* son las unidades operativas de un job. Pueden ejecutar scripts shell directos (`run:`), llamar acciones empaquetadas (`uses:`) y llevar un nombre descriptivo (`name:`). El autor del commit es un metadato que Git y la plataforma proveen en el contexto, no se define manualmente en los steps. (Diapositiva de origen: Estructura de Workflows en YAML)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q14",
    num: 14,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Pasos Comunes en Pipelines de CI",
    type: "single",
    prompt: "¿Para qué se utiliza la acción típica `actions/checkout` en el primer paso de casi cualquier job de CI en GitHub Actions?",
    options: [
      { id: "a", text: "Para compilar el código fuente y empaquetar el binario." },
      { id: "b", text: "Para clonar el repositorio en el espacio de trabajo del runner, de modo que los pasos siguientes tengan acceso al código fuente." },
      { id: "c", text: "Para verificar que las credenciales del usuario sean válidas en el navegador." },
      { id: "d", text: "Para eliminar los archivos temporales generados por ejecuciones anteriores." }
    ],
    correctAnswers: ["b"],
    explanation: "Los runners inician en un entorno vacío sin los archivos del proyecto. La acción de checkout clona el repositorio en la rama y commit específicos que dispararon el pipeline, dejándolo listo para su análisis o compilación. (Diapositiva de origen: Pasos Comunes en Pipelines de CI)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q15",
    num: 15,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Orquestación de Jobs en Pipelines",
    type: "single",
    prompt: "Por defecto, si un workflow define múltiples **jobs** (por ejemplo: `job_frontend` y `job_backend`), ¿cómo se ejecutan en el sistema de CI y cómo se puede forzar una secuencia?",
    options: [
      { id: "a", text: "Se ejecutan estrictamente uno tras otro en orden alfabético sin posibilidad de cambio." },
      { id: "b", text: "Se ejecutan en paralelo de forma predeterminada; para que un job espere a otro se utiliza la directiva `needs:`." },
      { id: "c", text: "Se ejecutan al azar y si uno falla los demás se cancelan inmediatamente sin importar la configuración." },
      { id: "d", text: "Solo puede ejecutarse un job por archivo YAML." }
    ],
    correctAnswers: ["b"],
    explanation: "Para optimizar tiempos, los jobs independientes corren concurrentemente en runners distintos. Si un job depende del resultado exitoso de otro (por ejemplo, el job de `deploy` depende del job de `test`), se explicita la dependencia con `needs: [nombre_del_job]`. (Diapositiva de origen: Orquestación de Jobs en Pipelines)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q16",
    num: 16,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Técnicas Avanzadas en Pipelines",
    type: "single",
    prompt: "¿Qué es una **Matriz de Ejecución** (*Matrix Strategy*) en un pipeline YAML y cuál es su beneficio principal?",
    options: [
      { id: "a", text: "Una tabla que lista los salarios de los desarrolladores del equipo." },
      { id: "b", text: "Una configuración que permite ejecutar automáticamente un mismo job combinando múltiples variables (por ejemplo, probar simultáneamente el código en Node 18, 20 y 22 bajo Ubuntu, Windows y macOS)." },
      { id: "c", text: "Un gráfico que mide el tiempo de respuesta del servidor en milisegundos." },
      { id: "d", text: "Un plugin para transformar código YAML a formato JSON." }
    ],
    correctAnswers: ["b"],
    explanation: "La estrategia matricial (`strategy: matrix`) genera un abanico de ejecuciones paralelas parametrizadas, garantizando que el software sea compatible con distintas versiones de lenguaje, compiladores o sistemas operativos sin duplicar código de configuración. (Diapositiva de origen: Técnicas Avanzadas en Pipelines)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q17",
    num: 17,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Seguridad en CI/CD",
    type: "multiple",
    prompt: "¿Por qué en un pipeline de CI/CD es crítico el uso de variables de entorno secretas (como *Repository Secrets*) en lugar de escribir tokens o credenciales directamente en el YAML? (Selecciona todas las opciones correctas)",
    options: [
      { id: "a", text: "Porque el archivo YAML se guarda en el repositorio y cualquier persona con acceso al código podría leer credenciales en texto plano." },
      { id: "b", text: "Porque la plataforma de CI enmascara automáticamente los secretos en los registros de salida (*logs*), evitando que se filtren públicamente si se imprimen por error." },
      { id: "c", text: "Porque los runners se apagan automáticamente si detectan cadenas de texto largas en el archivo YAML." },
      { id: "d", text: "Porque permite cambiar contraseñas o tokens desde la configuración del repositorio sin necesidad de modificar ni comitear cambios en el código." }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "Los secretos protegen tokens de despliegue, claves de API o accesos a bases de datos. Almacenados de forma encriptada en la plataforma, se inyectan en memoria en el runner y se censuran (con `***`) en los logs de la consola. (Diapositiva de origen: Seguridad en CI/CD)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q18",
    num: 18,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Ejecución y Diagnóstico de Pipelines",
    type: "single",
    prompt: "¿Qué rol juegan los códigos de salida estándar (*exit status codes*) de los comandos ejecutados en el runner para determinar el estado del pipeline?",
    options: [
      { id: "a", text: "Si un comando termina con código `0`, el paso se considera exitoso; si devuelve un valor distinto de cero (ej. `1`), el runner interpreta un fallo y detiene la ejecución del job por defecto." },
      { id: "b", text: "Cualquier comando que devuelva un número positivo se considera un éxito rotundo." },
      { id: "c", text: "Los códigos de salida solo sirven para medir el uso de memoria RAM del script." },
      { id: "d", text: "El runner ignora los códigos numéricos y solo evalúa si el comando imprimió texto en la consola." }
    ],
    correctAnswers: ["a"],
    explanation: "En sistemas Unix/Linux y Windows, el estándar es que un proceso que termina con éxito retorne `0`. Cuando una prueba falla o una compilación da error, la herramienta retorna un código distinto de cero, lo que le indica al runner que el step fracasó, marcando el build en rojo. (Diapositiva de origen: Ejecución y Diagnóstico de Pipelines)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q19",
    num: 19,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Artefactos y Persistencia en CI",
    type: "single",
    prompt: "¿Qué es un **Artefacto** (*Artifact*) en el contexto de un pipeline de CI/CD?",
    options: [
      { id: "a", text: "Un error en el código que no pudo ser detectado por las pruebas automáticas." },
      { id: "b", text: "Un archivo o conjunto de archivos generado durante la ejecución del job (como un ejecutable compilado, un archivo ZIP, un `.jar` o un reporte de cobertura) que se almacena para su descarga o uso en etapas posteriores." },
      { id: "c", text: "Una computadora obsoleta utilizada exclusivamente como servidor local." },
      { id: "d", text: "El diagrama en papel que describe la arquitectura del software." }
    ],
    correctAnswers: ["b"],
    explanation: "Dado que el runner es efímero y se destruye al finalizar el job, los archivos producidos que se deseen conservar (binarios, reportes de tests, instaladores) deben subirse a la plataforma como *artifacts* mediante acciones dedicadas (como `actions/upload-artifact`). (Diapositiva de origen: Artefactos y Persistencia en CI)",
    diagram: null,
    points: 1
  },
  {
    id: "gh-cicd-q20",
    num: 20,
    subject: "GitHub",
    unit: "CI/CD",
    quizId: "quiz-github-ci-cd-cuestionario-1",
    topic: "Integración Continua y Políticas de Calidad",
    type: "single",
    prompt: "¿Cómo interactúan las **Branch Protection Rules** de un repositorio con el pipeline de CI/CD para garantizar la calidad del software?",
    options: [
      { id: "a", text: "Bloquean el acceso al repositorio a cualquier desarrollador que no tenga un runner propio." },
      { id: "b", text: "Impiden que se fusionen (*merge*) cambios a la rama principal a menos que los jobs del pipeline de CI hayan pasado exitosamente y las pruebas estén en verde." },
      { id: "c", text: "Borran automáticamente el repositorio local del desarrollador si un commit produce un error de compilación." },
      { id: "d", text: "Convierten automáticamente el código YAML a lenguaje C++ antes de cada push." }
    ],
    correctAnswers: ["b"],
    explanation: "Combinar CI con reglas de protección de rama (marcando el pipeline como *Status check required*) es la defensa fundamental de calidad: ningún pull request puede integrarse a `main` si rompe la compilación o no aprueba los tests automatizados. (Diapositiva de origen: Integración Continua y Políticas de Calidad)",
    diagram: null,
    points: 1
  }
];
