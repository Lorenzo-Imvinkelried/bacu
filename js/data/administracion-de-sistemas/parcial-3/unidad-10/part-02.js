/**
 * Banco de Preguntas - UNIDAD 10 (Administración de Sistemas - Parcial 3)
 * Parte 02 (Preguntas 13 a 24)
 * Temas: Teletrabajo (Definición, Beneficios, Desventajas, Salud Física/Psíquica, Tareas Aptas) y Ergonomía.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "as-p3-u10-q13",
    num: 13,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Riesgos Naturales vs Inducidos",
    type: "single",
    prompt: "¿Cómo se clasifican los riesgos originados por terremotos o fenómenos atmosféricos en comparación con los causados por la acción humana?",
    options: [
      { id: "a", text: "Son riesgos naturales (geológicos o climáticos), a diferencia de los riesgos inducidos." },
      { id: "b", text: "Son riesgos inducidos directos, a diferencia de los riesgos atmosféricos secundarios." },
      { id: "c", text: "Son riesgos voluntarios sociales, a diferencia de los riesgos individuales de origen laboral." },
      { id: "d", text: "Son riesgos tecnológicos mixtos, a diferencia de los riesgos climáticos comunitarios." }
    ],
    correctAnswers: ["a"],
    explanation: "Los riesgos por origen se dividen en naturales (debidos a mecanismos naturales geológicos o climáticos) e inducidos (causados por la acción directa del hombre). (Diapositiva 109)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q14",
    num: 14,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Definición de Teletrabajo",
    type: "single",
    prompt: "¿Qué elemento define fundamentalmente al teletrabajo según las definiciones del material?",
    options: [
      { id: "a", text: "La obligación contractual de trasladarse a sedes externas del cliente para prestar servicios." },
      { id: "b", text: "La organización del trabajo a distancia mediante el uso de TIC fuera del establecimiento del empleador." },
      { id: "c", text: "El uso exclusivo de herramientas analógicas en la jornada laboral domiciliaria." },
      { id: "d", text: "La realización de tareas comerciales mediante viajes de representación constantes." }
    ],
    correctAnswers: ["b"],
    explanation: "El teletrabajo es una forma de organizar el trabajo a distancia utilizando las Tecnologías de la Información y Comunicación (TIC) en el domicilio del trabajador o en otro lugar ajeno al empleador. (Diapositiva 110)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q15",
    num: 15,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Beneficios del Teletrabajo para el Trabajador",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas. ¿Cuáles representan beneficios del teletrabajo para el trabajador indicados en el documento?",
    options: [
      { id: "a", text: "Ahorro de dinero y tiempo de traslado." },
      { id: "b", text: "Facilitación de la inserción de grupos vulnerables." },
      { id: "c", text: "Opción para acompañar la lactancia o el cuidado de hijos pequeños." },
      { id: "d", text: "Eliminación completa de la necesidad de autodisciplina operativa." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "El teletrabajo mejora la calidad de vida, ahorra tiempo/dinero de traslado, facilita la inserción de grupos vulnerables y ayuda en la lactancia o cuidado de hijos; la autodisciplina es una exigencia/desventaja si se carece de ella. (Diapositiva 111)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q16",
    num: 16,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Desventajas del Teletrabajo para el Empleado",
    type: "single",
    prompt: "¿Cuál de los siguientes aspectos constituye una DESVENTAJA del teletrabajo para el empleado?",
    options: [
      { id: "a", text: "La disminución en la probabilidad de sufrir accidentes in-itinere." },
      { id: "b", text: "El ahorro en los costos personales de transporte hacia la oficina." },
      { id: "c", text: "La sensación de aislamiento y la pérdida del sentido de pertenencia." },
      { id: "d", text: "La posibilidad de organizar con mayor flexibilidad los horarios diarios." }
    ],
    correctAnswers: ["c"],
    explanation: "Entre las desventajas para el teletrabajador se señalan la dependencia de la autodisciplina, el aislamiento, la pérdida del sentido de pertenencia, el trabajo con menos contexto y la exigencia de tecnología. (Diapositiva 112)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q17",
    num: 17,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Acondicionamiento Ambiental en Teletrabajo",
    type: "single",
    prompt: "Entre los requerimientos del teletrabajador, ¿cuáles corresponden al acondicionamiento ambiental del espacio físico?",
    options: [
      { id: "a", text: "La adquisición de software comercial privativo." },
      { id: "b", text: "El tipo de contrato de locación de servicios suscripto." },
      { id: "c", text: "El establecimiento de planes salariales por comisión." },
      { id: "d", text: "La regulación de temperatura, iluminación y nivel de ruido." }
    ],
    correctAnswers: ["d"],
    explanation: "El acondicionamiento del ambiente en el puesto de teletrabajo comprende el control de factores como la temperatura, la iluminación y el bajo ruido. (Diapositiva 113)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q18",
    num: 18,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Gestión de Riesgos y Privacidad en Teletrabajo",
    type: "single",
    prompt: "¿Por qué la gestión de riesgos en el teletrabajo presenta un desafío particular en la relación con el trabajador?",
    options: [
      { id: "a", text: "Porque los riesgos tecnológicos son totalmente inexistentes en el domicilio." },
      { id: "b", text: "Porque la evaluación de riesgos puede ser percibida como una invasión de espacios propios." },
      { id: "c", text: "Porque las normativas internacionales prohíben auditar los factores psíquicos." },
      { id: "d", text: "Porque el teletrabajador se encuentra exento de sufrir riesgos de salud física." }
    ],
    correctAnswers: ["b"],
    explanation: "El material destaca que la relación debe manejarse con discreción y privacidad porque la gestión de riesgos puede ser vista por el teletrabajador como una invasión a sus espacios propios. (Diapositiva 114)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q19",
    num: 19,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Riesgos Físicos en Teletrabajo",
    type: "single",
    prompt: "¿Cuál de las siguientes condiciones se clasifica como un riesgo para la SALUD FÍSICA en el teletrabajo?",
    options: [
      { id: "a", text: "La pérdida del aprendizaje por imitación entre colegas de área." },
      { id: "b", text: "Las interferencias constantes entre la vida laboral y la vida familiar." },
      { id: "c", text: "Las posturas inadecuadas, pausas insuficientes y fatiga muscular." },
      { id: "d", text: "La adicción al trabajo y la incapacidad para lograr la desconexión." }
    ],
    correctAnswers: ["c"],
    explanation: "Los riesgos para la salud física en teletrabajo incluyen instalaciones o mobiliario inadecuados, posturas incorrectas, pausas insuficientes, fatiga muscular, trauma acústico y estrés. (Diapositiva 115)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q20",
    num: 20,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Riesgos Psíquicos en Teletrabajo",
    type: "single",
    prompt: "¿Cuál de las siguientes situaciones corresponde a un riesgo para la SALUD PSÍQUICA del teletrabajador?",
    options: [
      { id: "a", text: "Las protecciones eléctricas deficientes en las tomas del domicilio." },
      { id: "b", text: "La mala iluminación en la mesa o superficie de trabajo." },
      { id: "c", text: "La configuración incorrecta de la altura del asiento de oficina." },
      { id: "d", text: "La adicción al trabajo y la falta de desconexión de las tareas." }
    ],
    correctAnswers: ["d"],
    explanation: "La adicción al trabajo, la falta de desconexión, la sobreexigencia, el aislamiento y las presiones psicológicas forman parte de los riesgos para la salud psíquica. (Diapositiva 116)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q21",
    num: 21,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Tareas Aptas para Teletrabajo",
    type: "single",
    prompt: "Según las recomendaciones de gestión de riesgos, ¿qué característica deben cumplir las tareas seleccionadas para la modalidad de teletrabajo?",
    options: [
      { id: "a", text: "Ser factibles de ser desempeñadas de manera eficiente mediante TIC." },
      { id: "b", text: "Ser estrictamente dependientes del cumplimiento de un horario fijo de oficina." },
      { id: "c", text: "Requerir la toma de decisiones inmediata y presencial por parte de terceros." },
      { id: "d", text: "Exigir supervisión física permanente de cada paso operativo por un superior." }
    ],
    correctAnswers: ["a"],
    explanation: "Las tareas aptas para teletrabajo deben ser no estrictamente dependientes del horario, no estrictamente dependientes de la toma de decisiones por el trabajador y factibles de desempeñarse mediante TIC. (Diapositiva 117)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q22",
    num: 22,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Mitigación del Aislamiento en Teletrabajo",
    type: "single",
    prompt: "¿Qué medida de gestión interna se recomienda para mitigar el aislamiento de los teletrabajadores?",
    options: [
      { id: "a", text: "Suprimir la reversibilidad del modo de trabajo en el contrato formal." },
      { id: "b", text: "Prohibir el uso de canales informales de comunicación como chats de equipo." },
      { id: "c", text: "Definir la realización de encuentros periódicos de carácter presencial." },
      { id: "d", text: "Exigir el cumplimiento estricto de horarios sin evaluar los resultados alcanzados." }
    ],
    correctAnswers: ["c"],
    explanation: "Para mantener la integración y combatir el aislamiento, la gestión de riesgos en teletrabajo sugiere definir encuentros periódicos presenciales entre el personal. (Diapositiva 117)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q23",
    num: 23,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Beneficios del Teletrabajo para la Organización",
    type: "single",
    prompt: "¿De qué manera beneficia la implementación eficiente del teletrabajo a la organización?",
    options: [
      { id: "a", text: "Permite la ampliación de operaciones con gastos de infraestructura reducidos." },
      { id: "b", text: "Duplica los costos fijos corporativos al requerir dos sedes administrativas." },
      { id: "c", text: "Exige el despido de personal experimentado para lograr descentralizar tareas." },
      { id: "d", text: "Dificulta la dirección por objetivos al eliminar el control directo de horas." }
    ],
    correctAnswers: ["a"],
    explanation: "Para la empresa, el teletrabajo permite ampliar operaciones reduciendo infraestructura, bajar gastos fijos, fomentar la gestión por objetivos y aumentar la productividad. (Diapositiva 118)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q24",
    num: 24,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Definición y Etimología de Ergonomía",
    type: "single",
    prompt: "¿Qué estudia la ergonomía según la definición y etimología expuestas en la unidad?",
    options: [
      { id: "a", text: "El cuerpo de conocimientos sobre habilidades y limitaciones humanas para el diseño de puestos." },
      { id: "b", text: "El comportamiento psicológico individual sin considerar las herramientas de trabajo." },
      { id: "c", text: "El funcionamiento mecánico aislado de las máquinas en las plantas de producción." },
      { id: "d", text: "Las reglas comerciales que regulan la adquisición de mobiliario para oficinas." }
    ],
    correctAnswers: ["a"],
    explanation: "La ergonomía (ERGOS = Trabajo, NOMOS = Estudio/Leyes) es el cuerpo de conocimientos sobre las habilidades, limitaciones y características humanas relevantes para el diseño de puestos de trabajo. (Diapositiva 119)",
    diagram: null,
    points: 1
  }
];
