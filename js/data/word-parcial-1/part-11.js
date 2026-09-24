/**
 * Banco de Preguntas - WORD PARCIAL 1
 * Parte 11 (Preguntas 71 a 77)
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

export const questionsPart11 = [
  {
    "id": "ing-cal-p1-q71",
    "num": 71,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Entregas (Releases)",
    "type": "single",
    "prompt": "Un problema a resolver cuando se libera un release es que:",
    "options": [
      {
        "id": "a",
        "text": "Necesitan que el cliente tenga la release anterior instalada."
      },
      {
        "id": "b",
        "text": "No necesitan que el cliente tenga la release anterior instalada."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Al liberar un release debe gestionarse la dependencia y compatibilidad respecto a las instalaciones previas del cliente.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q72",
    "num": 72,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Modelo Cascada",
    "type": "multiple",
    "prompt": "El modelo de proceso prescriptivo “Clásico o En cascada”, sigue aplicándose porque",
    "options": [
      {
        "id": "a",
        "text": "Existe mucha formación y experiencia al respecto."
      },
      {
        "id": "b",
        "text": "Refleja en forma directa las actividades del proceso genérico de desarrollo de software."
      },
      {
        "id": "c",
        "text": "Permiten desarrollar versiones cada vez más completas del software."
      },
      {
        "id": "d",
        "text": "Promueven la reutilización de software"
      }
    ],
    "correctAnswers": [
      "a",
      "b"
    ],
    "explanation": "El modelo en cascada sigue utilizándose porque refleja de forma directa y secuencial las actividades genéricas y existe vasta experiencia y formación en su aplicación.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q73",
    "num": 73,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "En relación con el Estándar 12207, indique qué grupo de procesos es el que considera el rol de las organizaciones como proveedoras y como usuarias de sistemas de software.",
    "options": [
      {
        "id": "a",
        "text": "Procesos que habilitan proyectos organizacionales."
      },
      {
        "id": "b",
        "text": "Procesos Técnicos."
      },
      {
        "id": "c",
        "text": "Procesos de acuerdo."
      },
      {
        "id": "d",
        "text": "Procesos de gestión técnica."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Los Procesos de Acuerdo (Agreement Processes) regulan los roles de la organización como proveedora y como compradora/usuaria de software.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q74",
    "num": 74,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Versionado Semántico y Ramas",
    "type": "single",
    "prompt": "En un proyecto se mantienen activas las versiones 1.y.z para bugfixes mientras que las 2.y.z agregan nuevas funcionalidades incompatibles. ¿Por qué es posible trabajar en ambas en paralelo?",
    "options": [
      {
        "id": "a",
        "text": "Porque las ramas 1.y.z y 2.y.z están aisladas en el control de versiones y el número de versión MAJOR explicita la incompatibilidad entre ambas líneas de evolución."
      },
      {
        "id": "b",
        "text": "Porque Git fusiona automáticamente todos los cambios incompatibles sin intervención de los desarrolladores."
      },
      {
        "id": "c",
        "text": "Porque SemVer prohíbe tener más de una versión en producción simultáneamente."
      },
      {
        "id": "d",
        "text": "Porque las versiones 1.y.z se convierten en hardware físico y ya no usan el repositorio."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Las ramas de mantenimiento permiten que el equipo de soporte continúe aplicando parches a la versión 1 sin alterar ni depender de los cambios mayores e incompatibles de la versión 2.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q75",
    "num": 75,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Estándar ISO/IEC 12207",
    "type": "single",
    "prompt": "En relación con el Estándar 12207, indique qué grupo de procesos es el que permite gestionar y controlar los recursos necesarios para que los proyectos se ejecuten exitosamente.",
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
    "explanation": "En el Estándar ISO/IEC 12207, los 'Procesos que habilitan proyectos organizacionales' tienen por objetivo gestionar y controlar los recursos necesarios para que los proyectos se ejecuten exitosamente y definen los modelos de ciclo de vida que pueden ser utilizados por los proyectos.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q76",
    "num": 76,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Gestión de Flujos de Trabajo SCM",
    "type": "single",
    "prompt": "Al comenzar un proyecto de gran escala con múltiples equipos internos y externos, ¿por qué es altamente recomendable adoptar un flujo de trabajo formal como GitFlow?",
    "options": [
      {
        "id": "a",
        "text": "Porque establece convenciones claras sobre el ciclo de vida de las ramas (features, develop, release, hotfix, master), minimizando conflictos y asegurando estabilidad en producción."
      },
      {
        "id": "b",
        "text": "Porque reemplaza completamente la necesidad de escribir código y automatiza el diseño de software."
      },
      {
        "id": "c",
        "text": "Porque impide que personas externas puedan leer la documentación del proyecto."
      },
      {
        "id": "d",
        "text": "Porque hace innecesaria la realización de pruebas de software."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "En proyectos grandes con muchos desarrolladores, GitFlow brinda orden, predictibilidad y control sobre las entregas al separar estrictamente el código en desarrollo del código en producción.",
    "diagram": null,
    "points": 1
  },
  {
    "id": "ing-cal-p1-q77",
    "num": 77,
    "subject": "Ingeniería y Calidad",
    "unit": "Parcial 1",
    "topic": "Desarrollo Basado en Componentes",
    "type": "single",
    "prompt": "Al aplicar un modelo de desarrollo basado en componentes en un proyecto empresarial, ¿cuál de los siguientes es un beneficio clave frente a un desarrollo tradicional desde cero?",
    "options": [
      {
        "id": "a",
        "text": "Reduce significativamente el tiempo del ciclo de desarrollo, disminuye costos y minimiza riesgos al apoyarse en componentes previamente probados y aprobados."
      },
      {
        "id": "b",
        "text": "Elimina la necesidad de definir requerimientos y especificaciones funcionales."
      },
      {
        "id": "c",
        "text": "Asegura que el software funcione sin importar si la computadora tiene memoria RAM suficiente."
      },
      {
        "id": "d",
        "text": "Garantiza que ningún componente requerirá mantenimiento en el futuro."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "El ensamblaje y reutilización de componentes de software certificados acorta los tiempos de entrega ('time to market') y reduce los riesgos técnicos respecto a programar todo desde cero.",
    "diagram": null,
    "points": 1
  }
];
