/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 07 (Preguntas 43 a 49)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart07 = [
  {
    "id": "ing-cal-p1-q43",
    "num": 43,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Ramas de Mantenimiento",
    "type": "single",
    "prompt": "En un sistema multicliente donde varios clientes operan en la versión 1.1.0 y otros en la versión 2.0.10, ¿cómo debe gestionar la herramienta de versiones el soporte a ambos?",
    "options": [
      {
        "id": "a",
        "text": "Mantener ramas de mantenimiento separadas (ej. rama 'support/v1.x' y rama 'main/v2.x') para corregir bugs en la versión 1 sin obligar a los clientes a migrar a la versión 2."
      },
      {
        "id": "b",
        "text": "Obligar a todos los clientes a actualizar sus servidores inmediatamente a la última versión disponible."
      },
      {
        "id": "c",
        "text": "Eliminar la rama 1.x del repositorio remoto para forzar la compatibilidad tecnológica."
      },
      {
        "id": "d",
        "text": "Mezclar los cambios de la versión 2 en la versión 1 sin importar si rompen la base de datos de los clientes."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Cuando conviven clientes con versiones mayores distintas, la gestión de configuración crea ramas de mantenimiento dedicadas para seguir proporcionando parches (bugfixes) a la rama anterior sin introducir las incompatibilidades de la nueva versión mayor.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q44",
    "num": 44,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Ingeniería de Software Capas",
    "type": "single",
    "prompt": "Tres elementos claves de la Ingeniería de Software son:",
    "options": [
      {
        "id": "a",
        "text": "Métodos Formales, CASE, CMMI."
      },
      {
        "id": "b",
        "text": "Métodos, Herramientas, Procesos."
      },
      {
        "id": "c",
        "text": "Métodos Rigurosos, Herramientas de Diseño, Procedimientos."
      },
      {
        "id": "d",
        "text": "Métodos, Orientación a Objetos, Herramientas CASE."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "El enfoque estratificado de la Ingeniería de Software (Pressman) se apoya en tres elementos clave: Métodos, Herramientas y Procesos, sustentados sobre el compromiso con la Calidad.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q45",
    "num": 45,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Ciclo de Vida",
    "type": "multiple",
    "prompt": "En relación a los modelos de procesos de software o modelos de ciclo de vida, indique qué afirmaciones son correctas.",
    "options": [
      {
        "id": "a",
        "text": "Descripciones de la forma en que el desarrollo se lleva a cabo realmente."
      },
      {
        "id": "b",
        "text": "Prescripciones de la forma en que el desarrollo de software debería llevarse a cabo."
      },
      {
        "id": "c",
        "text": "Se selecciona a nivel organizacional para todos los proyectos que se lleven adelante."
      },
      {
        "id": "d",
        "text": "Organizan la secuencia y orden de las actividades del proceso."
      },
      {
        "id": "e",
        "text": "Se selecciona de acuerdo a las características del equipo u organización de desarrollo."
      },
      {
        "id": "f",
        "text": "Todos incluyen los requerimientos del sistema como entrada y el producto liberado al uso como salida."
      }
    ],
    "correctAnswers": [
      "a",
      "b",
      "d",
      "e",
      "f"
    ],
    "explanation": "Según la cátedra: los modelos de proceso de software (1) organizan la secuencia y orden de las actividades, (2) prescriben cómo debería llevarse a cabo el desarrollo, (3) describen cómo se lleva a cabo realmente, (4) todos incluyen los requerimientos como entrada y el producto liberado como salida, y (5) se seleccionan según la naturaleza del proyecto, el equipo y la aplicación. No se impone un único modelo a nivel organizacional para todos los proyectos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q46",
    "num": 46,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Curva de Fallas del Software",
    "type": "single",
    "prompt": "¿A qué se debe que la curva real de la tasa de fallas del software a lo largo del tiempo presente 'picos' de aumento de fallas en lugar de una curva suave?",
    "options": [
      {
        "id": "a",
        "text": "A que cada cambio o mantenimiento correctivo/adaptativo introduce efectos colaterales y nuevos errores no previstos en el sistema."
      },
      {
        "id": "b",
        "text": "Al desgaste físico de los sectores magnéticos del disco rígido donde reside el ejecutable."
      },
      {
        "id": "c",
        "text": "A la falta de energía eléctrica durante los fines de semana en los servidores de la empresa."
      },
      {
        "id": "d",
        "text": "Al envejecimiento de los bits y transistores del procesador del cliente."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El software no se desgasta por uso; se deteriora cuando se le aplican cambios. Cada modificación puede introducir efectos secundarios que elevan súbitamente la tasa de fallas hasta que la versión se estabiliza.",
    "diagram": "fallo_soft",
    "points": 1
  },
  {
    "id": "ing-cal-p1-q47",
    "num": 47,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (Líneas Base)",
    "type": "single",
    "prompt": "Las ‘Líneas Bases’ se utilizan para:",
    "options": [
      {
        "id": "a",
        "text": "Identificar un elemento de configuración probado y aprobado."
      },
      {
        "id": "b",
        "text": "Identificar una versión de programa que ya no se utiliza."
      },
      {
        "id": "c",
        "text": "Identificar una variante de un elemento de configuración."
      },
      {
        "id": "d",
        "text": "Identificar un punto en el tiempo del proyecto que se toma como referencia."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Una línea base (baseline) es un punto de referencia en el tiempo del proyecto formalmente revisado y acordado, a partir del cual solo se permiten cambios mediante procedimientos formales de control de cambios.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q48",
    "num": 48,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "GitFlow Pull Requests",
    "type": "single",
    "prompt": "Bajo GitFlow, al finalizar el desarrollo de una funcionalidad en su rama 'feature/nueva-funcionalidad', ¿cuál es el destino del Pull Request (PR) correspondiente?",
    "options": [
      {
        "id": "a",
        "text": "Debe realizarse un Pull Request hacia la rama 'develop' para su integración y revisión por pares."
      },
      {
        "id": "b",
        "text": "Debe realizarse un Pull Request directo hacia la rama 'master' en el entorno productivo."
      },
      {
        "id": "c",
        "text": "Debe realizarse un Pull Request hacia una rama local 'backup' fuera del control de versiones."
      },
      {
        "id": "d",
        "text": "No se utilizan Pull Requests en GitFlow, los desarrolladores suben código directamente sin revisión."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "En GitFlow las features se integran a 'develop'. Solo las ramas 'release' y 'hotfix' se fusionan a 'master' (y a su vez a develop) para generar versiones productivas.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q49",
    "num": 49,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "En relación con el Estándar 12207, indique qué grupo de procesos es el que describe las acciones técnicas del ciclo de vida, guiando la transformación de las necesidades de los stakeholders en un producto servicio de software.",
    "options": [
      {
        "id": "a",
        "text": "Procesos de acuerdo."
      },
      {
        "id": "b",
        "text": "Procesos técnicos."
      },
      {
        "id": "c",
        "text": "Procesos que habilitan proyectos organizacionales."
      },
      {
        "id": "d",
        "text": "Procesos de gestión técnica."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Los Procesos Técnicos del Estándar 12207 son los que guían la transformación de necesidades de los stakeholders en un producto o servicio de software.",
    "diagram": null,
    "points": 1
  }
];
