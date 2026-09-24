/**
 * Banco de Preguntas - UNIDAD 3 (Gestión de Configuración del Software)
 * Parte 03 (Preguntas 21 a 30)
 * Temas: CalVer (Ubuntu), Identificación por atributos, Construcción del Sistema (Build),
 * requirements.txt en Python, Releases/Entregas, 5ta Ley de Lehman, Frecuencia de entregas,
 * Documentación de entregas y Repositorio de GCSW (Base de Datos de Configuración).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "ing-cal-p1-u3-q21",
    num: 21,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Versionado Basado en Calendario (Ubuntu)",
    type: "single",
    prompt: "¿Cómo se define el esquema de numeración de versiones del sistema operativo Ubuntu (ej. 22.04)?",
    options: [
      {
        id: "a",
        text: "Utiliza estrictamente el Versionado Semántico (Major.Minor.Patch)."
      },
      {
        id: "b",
        text: "Está basado en la fecha de lanzamiento de la distribución (Año y Mes)."
      },
      {
        id: "c",
        text: "Está basado en la cantidad de commits realizados en el núcleo de Linux."
      },
      {
        id: "d",
        text: "Asigna un número aleatorio generado por la comunidad de desarrolladores."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Ubuntu utiliza un esquema CalVer (Calendar Versioning) donde el número principal indica el año de publicación (22 para 2022) y el secundario el mes exacto (04 para abril, 10 para octubre).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q22",
    num: 22,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Identificación Basada en Atributos",
    type: "single",
    prompt: "¿Cuál es la dificultad que presenta la 'Identificación basada en atributos' (ej. Fecha, Creador, SO)?",
    options: [
      {
        id: "a",
        text: "Es imposible usar atributos en repositorios distribuidos como Git."
      },
      {
        id: "b",
        text: "La identificación adecuada de qué atributos usar para identificar unívocamente a cada versión; por lo que en la práctica se necesita un nombre para referenciarla directamente."
      },
      {
        id: "c",
        text: "Solo se puede usar un único atributo por cada línea de base generada."
      },
      {
        id: "d",
        text: "Los atributos deben ser aprobados por la IEEE antes de compilar el código."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Aunque enriquecer las versiones con metadatos (autor, plataforma, fecha) es útil para consultas, determinar un conjunto mínimo de atributos que garantice unicidad en el tiempo resulta complejo; por ello, en la práctica se recurre siempre a un identificador, tag o nombre unívoco.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q23",
    num: 23,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Construcción del Sistema (Build)",
    type: "single",
    prompt: "¿Qué implica el proceso de 'Construcción del Sistema'?",
    options: [
      {
        id: "a",
        text: "Crear un sistema ejecutable completo mediante la compilación y vinculación de componentes, librerías externas y archivos de configuración."
      },
      {
        id: "b",
        text: "Diseñar los diagramas de clases en UML y enviarlos al cliente."
      },
      {
        id: "c",
        text: "Escribir exclusivamente el manual de usuario en formato PDF."
      },
      {
        id: "d",
        text: "Vender el producto de software al mercado masivo."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El proceso de build (construcción) automatiza la recolección de los elementos de configuración correctos, la resolución de dependencias externas, la compilación de código fuente, la vinculación (linking) de bibliotecas y la generación de binarios o paquetes ejecutables listos para su despliegue.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q24",
    num: 24,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Gestión de Dependencias (Python)",
    type: "single",
    prompt: "En proyectos desarrollados en Python, ¿cuál es el archivo típico utilizado para gestionar y versionar las librerías o dependencias requeridas?",
    options: [
      {
        id: "a",
        text: "pom.xml"
      },
      {
        id: "b",
        text: "composer.json"
      },
      {
        id: "c",
        text: "requirements.txt"
      },
      {
        id: "d",
        text: "config.yml"
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "En el ecosistema Python, el archivo estándar para congelar y versionar dependencias externas exactas es `requirements.txt` (utilizado habitualmente por el gestor pip mediante `pip install -r requirements.txt`).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q25",
    num: 25,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Concepto de Release (Entrega)",
    type: "single",
    prompt: "¿Qué es exactamente una 'Entrega' o 'Release' en la gestión de configuración?",
    options: [
      {
        id: "a",
        text: "Cualquier commit realizado por un desarrollador Junior en la rama de pruebas."
      },
      {
        id: "b",
        text: "Un diagrama que documenta la arquitectura de base de datos."
      },
      {
        id: "c",
        text: "Una versión del sistema que se distribuye a los clientes, incluyendo funcionalidad nueva o correcciones."
      },
      {
        id: "d",
        text: "La reunión final donde se da por terminado el mantenimiento del sistema."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Una release (o entrega) es una versión formalmente empaquetada, documentada y autorizada del sistema destinada a ser entregada a usuarios o clientes externos, conteniendo instaladores, binarios, notas de lanzamiento (release notes) y documentación asociada.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q26",
    num: 26,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Quinta Ley de Lehman",
    type: "single",
    prompt: "Según la 'Quinta ley de Lehman', ¿por qué una entrega con funcionalidad significativamente nueva suele ir seguida de otra enfocada en reparar problemas?",
    options: [
      {
        id: "a",
        text: "Porque agregar mucha funcionalidad nueva introduce bugs que limitan la funcionalidad de la siguiente entrega."
      },
      {
        id: "b",
        text: "Porque los clientes siempre exigen una actualización visual (UI) un mes después del lanzamiento."
      },
      {
        id: "c",
        text: "Porque el hardware se vuelve obsoleto inmediatamente después de instalar software nuevo."
      },
      {
        id: "d",
        text: "Porque es la única forma de cobrar el doble por el mismo producto."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Manny Lehman demostró en su Quinta Ley de Evolución del Software que las grandes incorporaciones de funcionalidad incrementan exponencialmente la complejidad interna y los defectos latentes, obligando a que la siguiente versión deba orientarse predominantemente a la estabilización y corrección de fallos.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q27",
    num: 27,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Frecuencia de Entregas",
    type: "single",
    prompt: "En la Gestión de Entregas, ¿qué problema puede surgir si las entregas al cliente son DEMASIADO FRECUENTES?",
    options: [
      {
        id: "a",
        text: "Los clientes sentirán que el software no sigue el crecimiento del negocio y lo abandonarán."
      },
      {
        id: "b",
        text: "Los clientes pueden optar por no actualizarlas debido al constante costo/esfuerzo de instalación."
      },
      {
        id: "c",
        text: "El código fuente se eliminará automáticamente del repositorio."
      },
      {
        id: "d",
        text: "Se viola automáticamente el estándar ISO 12207 de calidad."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Someter al cliente a un flujo excesivo de actualizaciones frecuentes puede saturarlo: cada pase a producción involucra paradas de servicio, pruebas de regresión, re-capacitación y costos operativos, lo que lleva al usuario a saltear versiones y fragmentar el parque instalado.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q28",
    num: 28,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Documentación y Archivo de Entregas",
    type: "single",
    prompt: "¿Por qué es crucial mantener documentación sobre las entregas (guardar versiones de componentes, OS, bibliotecas, compiladores, etc.)?",
    options: [
      {
        id: "a",
        text: "Porque ocupa poco espacio en disco y es gratis."
      },
      {
        id: "b",
        text: "Para asegurar que se pueda reconstruir exactamente el sistema en un futuro si fuese necesario."
      },
      {
        id: "c",
        text: "Para evitar que el cliente tenga acceso al código fuente abierto."
      },
      {
        id: "d",
        text: "Porque lo exige el departamento de marketing para realizar folletos."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Si un cliente reporta un fallo crítico en una versión entregada hace años, la empresa debe ser capaz de reproducir y reconstruir el entorno exacto (mismo compilador, SO y bibliotecas) para diagnosticar el defecto y compilar un parche específico.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q29",
    num: 29,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Repositorio de GCSW - Funciones Clave",
    type: "single",
    prompt: "¿Cuál es una de las funciones principales de la Base de Datos de Configuraciones (Repositorio)?",
    options: [
      {
        id: "a",
        text: "Ayudar a evaluar el impacto de los cambios, responder qué versiones se ven afectadas y ahorrar espacio de almacenamiento al evitar duplicados."
      },
      {
        id: "b",
        text: "Escribir automáticamente el código fuente en base a modelos UML."
      },
      {
        id: "c",
        text: "Eliminar definitivamente las ramas secundarias (branches) antiguas."
      },
      {
        id: "d",
        text: "Compilar el sistema directamente en las computadoras de los clientes."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "El repositorio centralizado de configuraciones mantiene las relaciones de trazabilidad entre artefactos: permite consultar el historial completo, evaluar qué módulos se verán impactados si se modifica un requerimiento y garantizar la integridad referencial sin duplicar información.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u3-q30",
    num: 30,
    subject: "Ingeniería y Calidad de Software",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-3",
    topic: "Alcance del Contenido en Repositorio GCSW",
    type: "single",
    prompt: "¿El repositorio de GCSW guarda únicamente el código fuente del proyecto?",
    options: [
      {
        id: "a",
        text: "Sí, el repositorio está diseñado exclusivamente para archivos con extensión .java, .py, .c, etc."
      },
      {
        id: "b",
        text: "No, guarda también contenido de negocio, modelo (UML), V&V (casos de prueba), documentos y planes de gestión del proyecto."
      },
      {
        id: "c",
        text: "Sí, solo guarda código fuente y los binarios ejecutables finales."
      },
      {
        id: "d",
        text: "No, solo almacena los manuales de usuario y las bases de datos de clientes."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Bajo la óptica de la Ingeniería de Software moderna, el repositorio de GCSW custodia todo el patrimonio del proyecto: especificaciones de negocio, modelos UML, planes de proyecto, casos de prueba, scripts de despliegue y documentación de usuario.",
    diagram: null,
    points: 1
  }
];
