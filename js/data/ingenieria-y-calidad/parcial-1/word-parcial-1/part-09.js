/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 09 (Preguntas 57 a 63)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart09 = [
  {
    "id": "ing-cal-p1-q57",
    "num": 57,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "multiple",
    "prompt": "El estándar 12207 define los siguientes grupos de procesos.",
    "options": [
      {
        "id": "a",
        "text": "Procesos de hardware."
      },
      {
        "id": "b",
        "text": "Procesos de ciclo de vida."
      },
      {
        "id": "c",
        "text": "Procesos externos."
      },
      {
        "id": "d",
        "text": "Procesos que habilitan proyectos organizacionales."
      },
      {
        "id": "e",
        "text": "Procesos de acuerdo"
      },
      {
        "id": "f",
        "text": "Procesos Técnicos."
      },
      {
        "id": "g",
        "text": "Procesos de gestión técnica."
      }
    ],
    "correctAnswers": [
      "d",
      "e",
      "f",
      "g"
    ],
    "explanation": "El Estándar ISO/IEC 12207 divide sus procesos en: Procesos de acuerdo (e), Procesos Técnicos (f), Procesos de gestión técnica (g) y Procesos que habilitan proyectos organizacionales (d).",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q58",
    "num": 58,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Control de Versiones (Ramas)",
    "type": "single",
    "prompt": "Un rama ‘secundaria’ (branch) que se define utilizando alguna herramienta de versionado:",
    "options": [
      {
        "id": "a",
        "text": "Se crea cuando se quiere trabajar en cambios sobre la versión actual del producto."
      },
      {
        "id": "b",
        "text": "Mantiene los primeros elementos de software que se incorporan al producto de software."
      },
      {
        "id": "c",
        "text": "Representa la primer versión del producto de software."
      },
      {
        "id": "d",
        "text": "Es la que siempre contiene la última versión funcional del sistema."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Una rama secundaria (branch) en una herramienta de versionado se crea cuando se quiere trabajar en cambios, correcciones o nuevas funcionalidades de forma aislada sin alterar la versión estable de la rama principal.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q59",
    "num": 59,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Configuración (SCM)",
    "type": "single",
    "prompt": "¿Qué problema en el desarrollo de software intenta resolver la Gestión de la Configuración de Software?",
    "options": [
      {
        "id": "a",
        "text": "La consistencia de los documentos generados"
      },
      {
        "id": "b",
        "text": "La evolución de los programas desarrollados"
      },
      {
        "id": "c",
        "text": "La consistencia de los programas desarrollados"
      },
      {
        "id": "d",
        "text": "La evolución de los productos de software"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Según la definición de cátedra, la GCSW es una disciplina para gestionar la evolución de los productos de software a lo largo de todo su ciclo de vida, tanto en etapas tempranas como durante el mantenimiento.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q60",
    "num": 60,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Desarrollo Basado en Componentes",
    "type": "single",
    "prompt": "Al desarrollar un ERP reutilizando componentes y módulos ya existentes en la empresa para Logística y Producción, ¿cuál es un riesgo o contra principal que debe gestionarse?",
    "options": [
      {
        "id": "a",
        "text": "Compromisos en los requerimientos (adaptar las necesidades a lo que el componente provee) y complejidad en la evolución e integración de componentes legados."
      },
      {
        "id": "b",
        "text": "Aumento del tiempo de codificación de los algoritmos básicos desde cero."
      },
      {
        "id": "c",
        "text": "Imposibilidad total de realizar pruebas unitarias en los subsistemas nuevos."
      },
      {
        "id": "d",
        "text": "Obligación de que todos los integrantes del equipo utilicen la misma computadora física."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "La contra más notable del desarrollo basado en componentes es la pérdida de control directo sobre los requerimientos (hay que adaptarse a las interfaces del componente existente) y el costo de integrar tecnologías dispares.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q61",
    "num": 61,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "El estándar ISO/IEC 12207 tiene el título 'Software Lifecycle Processes'. ¿Qué entiende este estándar por 'Ciclo de Vida del Software' (Software Lifecycle)?",
    "options": [
      {
        "id": "a",
        "text": "Un marco de referencia que abarca los procesos, actividades y tareas involucrados en el desarrollo, operación y mantenimiento del software desde su concepción hasta su retiro."
      },
      {
        "id": "b",
        "text": "La cantidad exacta de horas hábiles que demanda la etapa de programación en el IDE."
      },
      {
        "id": "c",
        "text": "El plazo de vigencia legal y garantía comercial que la ley impone a las empresas de desarrollo."
      },
      {
        "id": "d",
        "text": "El tiempo que tarda el compilador en generar el archivo binario ejecutable."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "En ISO/IEC 12207 el ciclo de vida del software es el marco que contiene todos los procesos aplicables a un sistema o producto de software desde la definición de su necesidad inicial hasta su cese final de uso.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q62",
    "num": 62,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Comandos Git",
    "type": "single",
    "prompt": "En Git, para crear una rama llamada 'Branch1' y posicionarse inmediatamente en ella para comenzar a trabajar, ¿qué comando se debe ejecutar?",
    "options": [
      {
        "id": "a",
        "text": "git checkout -b Branch1 (o git switch -c Branch1)"
      },
      {
        "id": "b",
        "text": "git commit -m 'Branch1'"
      },
      {
        "id": "c",
        "text": "git merge Branch1"
      },
      {
        "id": "d",
        "text": "git push origin Branch1"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El comando 'git checkout -b <nombre>' (o modernamente 'git switch -c <nombre>') crea la rama a partir del commit actual y realiza el cambio de contexto a ella simultáneamente.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q63",
    "num": 63,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Versiones",
    "type": "single",
    "prompt": "Una versión de un producto de software es",
    "options": [
      {
        "id": "1",
        "text": "Una implementación para un contexto diferente de un elemento de configuración probado y aprobado."
      },
      {
        "id": "2",
        "text": "Es el software de compilación necesario para generar un ejecutable del producto."
      },
      {
        "id": "3",
        "text": "Un momento en la vida de un elemento de configuración cuyo estado ha sido probado y aprobado."
      },
      {
        "id": "4",
        "text": "Un momento en la vida de un sistema de software en el cual es puesto a disposición de los clientes."
      }
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "En GCSW, una versión de un producto de software es 'un momento en la vida de un elemento de configuración cuyo estado ha sido probado y aprobado' (opción 3). La variante es una implementación para un contexto diferente (1), y el release es la puesta a disposición de los clientes (4).",
    "diagram": null,
    "points": 1
  }
];
