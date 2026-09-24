/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 03 (Preguntas 15 a 21)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart03 = [
  {
    "id": "ing-cal-p1-q15",
    "num": 15,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Definición IEEE de Ingeniería de Software",
    "type": "single",
    "prompt": "Según la IEEE 610.12, la Ingeniería de Software es la aplicación de un enfoque 'sistemático, disciplinado y cuantificable' al desarrollo y mantenimiento del software. ¿A qué hace referencia que sea 'sistemático'?",
    "options": [
      {
        "id": "a",
        "text": "A que tiene definido un proceso estructurado, metodológico y repetible capaz de ser aplicado en todos los proyectos de la organización."
      },
      {
        "id": "b",
        "text": "A que el código fuente debe compilarse de forma automática sin supervisión humana."
      },
      {
        "id": "c",
        "text": "A que solo es aplicable si se cuenta con sistemas operativos Unix o Linux."
      },
      {
        "id": "d",
        "text": "A que el desarrollo debe prescindir de documentación para acelerar las entregas."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Enfoque sistemático significa que el proceso está formalizado, tiene etapas y procedimientos definidos, y puede ser repetido consistentemente a lo largo de los proyectos de la organización.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q16",
    "num": 16,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Proceso",
    "type": "multiple",
    "prompt": "En relación al modelo de proceso iterativo, indique qué afirmaciones son correctas.",
    "options": [
      {
        "id": "a",
        "text": "Tiene alta dependencia entre fases o etapas."
      },
      {
        "id": "b",
        "text": "Se pueden repetir las secuencias de ejecución de etapas o fases."
      },
      {
        "id": "c",
        "text": "En cada iteración se obtienen versiones más completas del software."
      },
      {
        "id": "d",
        "text": "Enfatiza el re uso."
      },
      {
        "id": "e",
        "text": "Es una variante del modelo cascada."
      }
    ],
    "correctAnswers": [
      "b",
      "c"
    ],
    "explanation": "En un modelo iterativo se pueden repetir las secuencias de ejecución de fases y en cada iteración se obtienen versiones sucesivas más completas y refinadas del software.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q17",
    "num": 17,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Diseño y Calidad",
    "type": "single",
    "prompt": "Un arquitecto de software afirma que: “El software es flexible y por lo tanto los cambios en los requerimientos del proyecto pueden ajustarse con facilidad.”",
    "options": [
      {
        "id": "a",
        "text": "Esa (flexibilidad) es una característica del software que se logra siempre al aplicar un proceso de desarrollo ingenieril."
      },
      {
        "id": "b",
        "text": "Esa (flexibilidad) es una característica del software que no se puede alcanzar en un producto de software."
      },
      {
        "id": "c",
        "text": "Esa (flexibilidad) es una característica del software que se logra sólo si se diseña el producto para alcanzarla."
      },
      {
        "id": "d",
        "text": "Esa (flexibilidad) es una característica del software que no se logra siempre al aplicar un proceso de desarrollo ingenieril."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "La flexibilidad no es una propiedad mágica ni automática del software: solo se logra si la arquitectura y el diseño del producto se conciben intencionalmente para ser flexibles y adaptables.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q18",
    "num": 18,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelos de Ciclo de Vida",
    "type": "single",
    "prompt": "Una software factory desarrolla un ERP. Posee subsistemas existentes que deben ser refactorizados (Producción, Logística, Distribución) y otros a crear desde cero. ¿Qué modelo de ciclo de vida es el más conveniente para estructurarlo?",
    "options": [
      {
        "id": "a",
        "text": "Modelo de proceso de desarrollo basado en componentes (o incremental/concurrente por subsistemas)."
      },
      {
        "id": "b",
        "text": "Modelo en Cascada estricto para todo el ERP como un bloque monolítico único."
      },
      {
        "id": "c",
        "text": "Modelo de Métodos Formales puros con especificación matemática exhaustiva."
      },
      {
        "id": "d",
        "text": "Modelo de Prototipado desechable sin preservación de arquitectura base."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El modelo basado en componentes e incremental permite construir aplicaciones a partir de fragmentos de software reutilizables o refactorizados, reduciendo tiempo de desarrollo, riesgos y costos al integrar partes preexistentes.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q19",
    "num": 19,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Curva de Fallas Hardware vs Software",
    "type": "single",
    "prompt": "En la curva de tasa de fallas del hardware a lo largo del tiempo (la clásica 'curva de la bañera'), ¿a qué se debe el incremento pronunciado de fallas en su etapa final?",
    "options": [
      {
        "id": "a",
        "text": "Al desgaste físico acumulado, envejecimiento de materiales y fatiga mecánica por el uso continuo y factores ambientales."
      },
      {
        "id": "b",
        "text": "A la introducción de efectos colaterales producidos por parches de código fuente."
      },
      {
        "id": "c",
        "text": "A errores iniciales en la especificación de requerimientos de diseño."
      },
      {
        "id": "d",
        "text": "A la instalación de virus o malware en los discos de almacenamiento."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El hardware es físico y sufre desgaste (wear-out) por temperatura, polvo, vibración y envejecimiento de materiales, aumentando su tasa de fallas al final de su vida útil. El software no se desgasta físicamente.",
    "diagram": "baniera",
    "points": 1
  },
  {
    "id": "ing-cal-p1-q20",
    "num": 20,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "¿Qué grupo de procesos de los propuestos por el Estándar 12207 se utiliza para mejorar las actividades de la organización y formación del personal, según lo aprendido de la implementación del estándar en experiencias previas?",
    "options": [
      {
        "id": "a",
        "text": "Procesos de gestión técnica."
      },
      {
        "id": "b",
        "text": "Procesos de acuerdo."
      },
      {
        "id": "c",
        "text": "Procesos que habilitan proyectos organizacionales."
      },
      {
        "id": "d",
        "text": "Procesos técnicos."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "El Estándar 12207 agrupa los procesos que permiten a la organización gestionar sus recursos y capacidades en los 'Procesos que habilitan proyectos organizacionales'.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q21",
    "num": 21,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "En relación con el Estándar 12207, indique qué grupo de procesos es el que se orienta a la gestión de recursos para cumplir los acuerdos de la organización con el fin de establecer, ejecutar y controlar las planificaciones.",
    "options": [
      {
        "id": "a",
        "text": "Procesos que habilitan proyectos organizacionales."
      },
      {
        "id": "b",
        "text": "Procesos de gestión técnica."
      },
      {
        "id": "c",
        "text": "Procesos técnicos."
      },
      {
        "id": "d",
        "text": "Procesos de acuerdo."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Según el Estándar ISO/IEC 12207, los 'Procesos de gestión técnica' se orientan a la gestión de recursos para cumplir los acuerdos de la organización, estableciendo, ejecutando y controlando las planificaciones para cada proyecto particular (incluyen las actividades de soporte del marco de trabajo).",
    "diagram": null,
    "points": 1
  }
];
