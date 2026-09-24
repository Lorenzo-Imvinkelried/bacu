/**
 * Banco de Preguntas - UNIDAD 1 (Ingeniería y Calidad - Parcial 1)
 * Temas: Conceptos de Software, Mitos, Características vs Hardware, Pilares ISW,
 * Herramientas CASE, Programación vs ISW, No Silver Bullet, SWEBOK y reflexiones.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const CALIDAD_UNIDAD_1_QUESTIONS = [
  {
    id: "ing-cal-p1-u1-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Conceptos de Software",
    type: "single",
    prompt: "Según la IEEE, ¿qué elementos componen el Software?",
    options: [
      {
        id: "a",
        text: "Únicamente las líneas de código fuente."
      },
      {
        id: "b",
        text: "Los programas, las estructuras de datos y la documentación."
      },
      {
        id: "c",
        text: "El código ejecutable y el hardware que lo soporta."
      },
      {
        id: "d",
        text: "Los componentes físicos y los manuales de usuario."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "Según la definición estándar de la IEEE y autores clásicos como Pressman y Sommerville, el software comprende: 1) Los programas (instrucciones que al ejecutarse proporcionan la función deseada), 2) Las estructuras de datos que permiten manipular adecuadamente la información, y 3) Los documentos descriptivos de la operación y el uso del sistema.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q2",
    num: 2,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Mitos del Software",
    type: "single",
    prompt: "¿Cuál de las siguientes afirmaciones corresponde a un 'Mito del Administrador'?",
    options: [
      {
        id: "a",
        text: "Creer que agregar programadores a un proyecto atrasado lo acelera."
      },
      {
        id: "b",
        text: "Pensar que una idea general alcanza para empezar a programar."
      },
      {
        id: "c",
        text: "Creer que la calidad solo se evalúa ejecutando el programa."
      },
      {
        id: "d",
        text: "Asumir que los cambios son fáciles de implementar en cualquier etapa."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Creer que agregar personal a un proyecto que ya está atrasado acelerará los plazos es el clásico mito del administrador (formalizado en la Ley de Brooks). En la realidad suele retrasarlo aún más por los costos de comunicación y aprendizaje. Creer que una idea general alcanza o que los cambios son fáciles son mitos del cliente; evaluar la calidad solo ejecutando es un mito del profesional.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q3",
    num: 3,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Naturaleza del Software vs Hardware",
    type: "single",
    prompt: "A diferencia del hardware, ¿cuál es una característica fundamental del software?",
    options: [
      {
        id: "a",
        text: "Se fabrica en serie y se desgasta con el uso constante."
      },
      {
        id: "b",
        text: "Es un proceso puramente artesanal sin reglas fijas."
      },
      {
        id: "c",
        text: "Se desarrolla, no se desgasta físicamente, pero se deteriora por los cambios continuos."
      },
      {
        id: "d",
        text: "Tiene una vida útil corta debido a la fricción de sus componentes."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El software se desarrolla o construye por ingeniería, no se manufactura en el sentido industrial ni sufre desgaste físico por fricción o envejecimiento de materiales. No obstante, se deteriora y degrada con el tiempo debido a las modificaciones continuas y al mantenimiento evolutivo que introducen efectos colaterales y aumentan la complejidad.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q4",
    num: 4,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Pilares de la Ingeniería de Software",
    type: "single",
    prompt: "¿Cuáles son los 3 pilares fundamentales de la Ingeniería de Software?",
    options: [
      {
        id: "a",
        text: "Planificación, Codificación y Testing."
      },
      {
        id: "b",
        text: "Procesos, Métodos y Herramientas."
      },
      {
        id: "c",
        text: "Hardware, Software y Usuarios."
      },
      {
        id: "d",
        text: "Análisis, Diseño y Mantenimiento."
      }
    ],
    correctAnswers: [
      "b"
    ],
    explanation: "La Ingeniería de Software es una tecnología multicapa cimentada en el compromiso organizacional con la calidad y sostenida por tres pilares: Procesos (marco de trabajo y actividades clave), Métodos (técnicas de cómo modelar, diseñar y probar) y Herramientas (soporte automatizado o semi-automatizado).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q5",
    num: 5,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Herramientas CASE",
    type: "single",
    prompt: "Dentro de las herramientas CASE, ¿para qué se utilizan las 'Upper CASE'?",
    options: [
      {
        id: "a",
        text: "Para la programación de bajo nivel y ejecución de pruebas."
      },
      {
        id: "b",
        text: "Para reparar el hardware deteriorado de los servidores."
      },
      {
        id: "c",
        text: "Para automatizar la entrega del producto final al cliente."
      },
      {
        id: "d",
        text: "Para el análisis del problema y diseño de alto nivel (ej. diagramas y modelos)."
      }
    ],
    correctAnswers: [
      "d"
    ],
    explanation: "Las herramientas Upper CASE (o CASE de nivel superior) apoyan las fases tempranas del ciclo de vida del software: planificación de proyectos, captura y análisis de requerimientos, y diseño de alto nivel o arquitectónico mediante herramientas de diagramación y modelado.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q6",
    num: 6,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Programación vs Ingeniería de Software",
    type: "single",
    prompt: "¿Cuál es la principal diferencia entre Programación e Ingeniería de Software (ISW)?",
    options: [
      {
        id: "a",
        text: "La programación es individual y a corto plazo; la ISW es una disciplina grupal para sistemas complejos."
      },
      {
        id: "b",
        text: "La programación se enfoca en teoría; la ISW solo en la práctica."
      },
      {
        id: "c",
        text: "La programación incluye hardware; la ISW es exclusivamente software."
      },
      {
        id: "d",
        text: "La programación es sistemática; la ISW es un enfoque más artesanal."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La programación convencional se enfoca generalmente en la solución algorítmica puntual y suele ser una actividad individual acotada. En contraposición, la Ingeniería de Software es una disciplina formal, sistemática y de equipo orientada a gestionar el ciclo de vida completo, la mantenibilidad, calidad y evolución de sistemas a gran escala.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q7",
    num: 7,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "No Silver Bullet (Fred Brooks)",
    type: "single",
    prompt: "¿Qué plantea Fred Brooks en su artículo 'No Silver Bullet' (1987)?",
    options: [
      {
        id: "a",
        text: "Que el modelo en cascada es la solución mágica para cualquier proyecto."
      },
      {
        id: "b",
        text: "Que el software no tiene solución y su desarrollo siempre será un fracaso."
      },
      {
        id: "c",
        text: "Que no existe una solución mágica debido a las dificultades esenciales y accidentales del software."
      },
      {
        id: "d",
        text: "Que la tercerización del código elimina todos los problemas de calidad."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "Fred Brooks sostiene que no existe una única técnica, método o avance tecnológico ('bala de plata') que prometa por sí solo una mejora de un orden de magnitud en productividad o confiabilidad en el desarrollo de software. Esto se debe a las dificultades inherentes a la esencia misma del software (complejidad, conformidad, variabilidad e invisibilidad).",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q8",
    num: 8,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Dificultad del Software",
    type: "single",
    prompt: "Según el texto, ¿por qué es tan difícil hacer software hoy en día?",
    options: [
      {
        id: "a",
        text: "Porque la tecnología crece rapidísimo, pero la teoría base está 'verde' y no da abasto."
      },
      {
        id: "b",
        text: "Porque las computadoras actuales no tienen suficiente memoria."
      },
      {
        id: "c",
        text: "Porque todos los desarrolladores se niegan a utilizar lenguajes modernos."
      },
      {
        id: "d",
        text: "Porque ya no existen clientes dispuestos a pagar por calidad."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "La vertiginosa evolución de la tecnología, las plataformas y las exigencias de los usuarios avanza a un ritmo mucho más acelerado que la maduración y consolidación de las teorías y metodologías formales para gestionarla de manera controlada y predecible.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q9",
    num: 9,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "SWEBOK",
    type: "single",
    prompt: "¿Cuál es el propósito del SWEBOK (Guide to the Software Engineering Body of Knowledge)?",
    options: [
      {
        id: "a",
        text: "Enseñar a programar desde cero a personas sin experiencia."
      },
      {
        id: "b",
        text: "Reemplazar completamente al ciclo de vida en cascada."
      },
      {
        id: "c",
        text: "Estandarizar todo el cuerpo de conocimiento que un ingeniero de software debe saber."
      },
      {
        id: "d",
        text: "Establecer los precios internacionales para la venta de software."
      }
    ],
    correctAnswers: [
      "c"
    ],
    explanation: "El propósito central del SWEBOK (publicado y respaldado por la IEEE Computer Society) es proporcionar una visión consensuada a nivel global sobre los límites y áreas de conocimiento de la disciplina de la Ingeniería de Software, estandarizando sus conceptos nucleares.",
    diagram: null,
    points: 1
  },
  {
    id: "ing-cal-p1-u1-q10",
    num: 10,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    quizId: "quiz-p1-unidad-1",
    topic: "Reflexión sobre el Desarrollo",
    type: "single",
    prompt: "¿A qué se refiere la reflexión final de Boria sobre el desarrollo de software?",
    options: [
      {
        id: "a",
        text: "Hacer software sería perfecto si no existieran ni hardware, ni usuarios."
      },
      {
        id: "b",
        text: "El código puro siempre es el principal causante de los fracasos."
      },
      {
        id: "c",
        text: "El problema principal radica en la falta de herramientas CASE gratuitas."
      },
      {
        id: "d",
        text: "Sin usuarios, es imposible escribir código fuente."
      }
    ],
    correctAnswers: [
      "a"
    ],
    explanation: "Se refiere a una célebre reflexión irónica sobre la complejidad inherente al mundo real: en el plano puramente abstracto de la teoría y la lógica todo funciona sin fallos, pero en la práctica el software siempre debe interactuar con las limitaciones y desperfectos físicos del hardware y con las demandas volátiles e impredecibles de los usuarios.",
    diagram: null,
    points: 1
  }
];
