/**
 * Banco de Preguntas - UNIDAD 10 (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 12)
 * Temas: Seguridad en el Trabajo, Accidentes, Causalidad, Costos, Actos vs Condiciones Inseguras y Concepto de Riesgo.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-u10-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Objeto de la Seguridad en el Trabajo",
    type: "single",
    prompt: "¿Cuál es el objeto central de la Seguridad en el Trabajo según el material de la asignatura?",
    options: [
      { id: "a", text: "Aplicar medidas y desarrollar actividades necesarias para la prevención de accidentes en el ambiente laboral." },
      { id: "b", text: "Controlar de forma exclusiva el cumplimiento de los contratos de trabajo en la organización." },
      { id: "c", text: "Eliminar la totalidad de las enfermedades profesionales mediante tratamientos médicos preventivos." },
      { id: "d", text: "Reducir los costos fijos administrativos eliminando los controles de supervisión operativa." }
    ],
    correctAnswers: ["a"],
    explanation: "La Seguridad en el Trabajo tiene por objeto aplicar medidas y desarrollar las actividades necesarias para prevenir accidentes en un medioambiente de trabajo adecuado y justo. (Diapositiva 98)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Definición Técnica de Accidente",
    type: "single",
    prompt: "En el marco de la seguridad laboral, ¿cómo se define técnicamente un accidente?",
    options: [
      { id: "a", text: "Una enfermedad degenerativa causada por la exposición prolongada a contaminantes en el puesto." },
      { id: "b", text: "Un evento intencional derivado del incumplimiento deliberado de normas internas por el empleado." },
      { id: "c", text: "Una falla mecánica en la maquinaria que interrumpe el proceso sin generar probabilidad de lesión." },
      { id: "d", text: "Una transferencia indeseada de energía por falta de controles que resulta en lesión o probabilidad de lesión." }
    ],
    correctAnswers: ["d"],
    explanation: "Un accidente es un evento no planeado ni controlado que implica una transferencia indeseada de energía por falta de barreras o controles, generando lesiones, pérdidas de bienes o interrupción de procesos. (Diapositiva 99)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Accidente de Trabajo e In Itinere",
    type: "single",
    prompt: "¿Qué característica define específicamente a un \"accidente de trabajo\" según el texto?",
    options: [
      { id: "a", text: "Es una secuencia planeada para evaluar la capacidad de respuesta ante emergencias." },
      { id: "b", text: "Es un acontecimiento súbito y violento ocurrido por el hecho, en ocasión del trabajo o in itinere." },
      { id: "c", text: "Es un proceso patológico de evolución lenta derivado de las tareas cotidianas de oficina." },
      { id: "d", text: "Es una avería en la infraestructura tecnológica que no afecta la integridad física del personal." }
    ],
    correctAnswers: ["b"],
    explanation: "El accidente de trabajo se caracteriza por ser un acontecimiento súbito y violento producido por el hecho o en ocasión del trabajo, o en el trayecto entre el domicilio y el trabajo (in itinere). (Diapositiva 100)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Causalidad de los Accidentes",
    type: "single",
    prompt: "Respecto a la causalidad de los accidentes de trabajo, ¿cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { id: "a", text: "Tienen su origen en la coincidencia de factores asociados al Hombre, al Agente y al Medio." },
      { id: "b", text: "Se explican siempre como un proceso de ocurrencia estrictamente lineal de causa y efecto." },
      { id: "c", text: "Son el resultado directo del azar, la fatalidad o el destino ineludible de la actividad." },
      { id: "d", text: "Ocurren exclusivamente por fallas mecánicas e imprevistas en los agentes materiales de trabajo." }
    ],
    correctAnswers: ["a"],
    explanation: "Los accidentes no se deben al azar ni son lineales; son el producto de una serie de factores coincidentes que tienen su origen en tres ejes: Hombre, Agente y Medio. (Diapositiva 101)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Costos Directos vs Indirectos",
    type: "single",
    prompt: "En el análisis económico de los accidentes laborales, ¿qué relación existe entre los costos directos e indirectos?",
    options: [
      { id: "a", text: "Los costos directos equivalen únicamente al tiempo perdido por los trabajadores del sector." },
      { id: "b", text: "Los costos directos e indirectos representan siempre el mismo monto en la liquidación." },
      { id: "c", text: "Los costos directos son cuatro veces mayores que los costos indirectos de la empresa." },
      { id: "d", text: "Los costos indirectos de los accidentes son cuatro veces mayores que los costos directos." }
    ],
    correctAnswers: ["d"],
    explanation: "El documento establece expresamente que los costos indirectos de los accidentes (tiempo perdido, interferencias de producción, etc.) son cuatro veces mayores que los costos directos (médicos e indemnizaciones). (Diapositiva 102)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Costos Indirectos de Accidentes",
    type: "single",
    prompt: "¿Cuál de los siguientes elementos constituye un \"costo indirecto\" de un accidente de trabajo?",
    options: [
      { id: "a", text: "El pago de la indemnización legal correspondiente al trabajador lesionado." },
      { id: "b", text: "La cobertura de los gastos médicos directos derivados de la atención de urgencia." },
      { id: "c", text: "El tiempo perdido por otros empleados que deben suspender sus tareas tras el evento." },
      { id: "d", text: "El desembolso financiero destinado a la compra de medicamentos en el centro de salud." }
    ],
    correctAnswers: ["c"],
    explanation: "Los costos indirectos comprenden el tiempo perdido por el lesionado y otros trabajadores, la atención al accidentado y los costos incidentales por interferencia en la producción; las indemnizaciones y gastos médicos son costos directos. (Diapositiva 102)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Estadísticas de Causas: Actos vs Riesgos Materiales",
    type: "single",
    prompt: "Según las estadísticas presentadas sobre las causas de los accidentes, ¿qué porcentaje corresponde a actos inseguros y cuál a riesgos materiales?",
    options: [
      { id: "a", text: "50% por riesgos materiales y 50% por actos inseguros." },
      { id: "b", text: "85% por riesgos materiales y 15% por actos inseguros." },
      { id: "c", text: "30% por riesgos materiales y 70% por actos inseguros." },
      { id: "d", text: "15% por riesgos materiales y 85% por actos inseguros." }
    ],
    correctAnswers: ["d"],
    explanation: "La diapositiva 103 señala que los accidentes causados por riesgos materiales representan el 15%, mientras que los provocados por actos inseguros representan el 85%. (Diapositiva 103)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Condición Insegura vs Acto Inseguro",
    type: "single",
    prompt: "En el ejemplo del taller expuesto en la diapositiva 103 (Don Roberto y la escalera con el peldaño faltante), ¿cómo se clasifica la existencia del escalón roto?",
    options: [
      { id: "a", text: "Acto inseguro." },
      { id: "b", text: "Condición insegura." },
      { id: "c", text: "Factor personal inseguro." },
      { id: "d", text: "Tipo de accidente." }
    ],
    correctAnswers: ["b"],
    explanation: "En el desglose del ejemplo, el escalón roto corresponde a la condición insegura (el defecto en el equipo), mientras que emplear el equipo defectuoso representa el acto inseguro. (Diapositiva 103)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Principios de Prevención de Accidentes",
    type: "multiple",
    prompt: "Selecciona todas las opciones correctas. ¿Cuáles constituyen principios básicos para la prevención de accidentes?",
    options: [
      { id: "a", text: "Creación y mantenimiento del interés en seguridad." },
      { id: "b", text: "Búsqueda de las causas de los accidentes." },
      { id: "c", text: "Acción correctiva basada en los hechos causantes." },
      { id: "d", text: "Ocultamiento de la frecuencia para evitar sanciones legales." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "La prevención de accidentes se realiza mediante tres principios básicos: crear/mantener el interés de todos, buscar las causas reales del hecho y aplicar acciones correctivas basadas en los hechos causantes. (Diapositiva 104)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Distinción entre Peligro y Riesgo",
    type: "single",
    prompt: "¿Cuál es la distinción conceptual entre \"peligro\" y \"riesgo\" presentada en la unidad?",
    options: [
      { id: "a", text: "El peligro representa el costo financiero, mientras que el riesgo refiere a las sanciones normativas." },
      { id: "b", text: "El peligro aplica solo a factores biológicos, mientras que el riesgo se limita al uso de herramientas." },
      { id: "c", text: "El peligro es siempre voluntario para el sujeto, mientras que el riesgo es de carácter involuntario." },
      { id: "d", text: "El peligro es algo inminente que sucederá indefectiblemente, mientras que el riesgo refiere a probabilidad o impacto." }
    ],
    correctAnswers: ["d"],
    explanation: "El peligro es algo inminente que ocurrirá con certeza si se realiza o deja de hacer algo, mientras que el riesgo expresa la probabilidad de que algo suceda o la consecuencia/impacto del evento. (Diapositiva 105)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Clasificación de Riesgos: Individual y Voluntario",
    type: "single",
    prompt: "Con respecto a las personas, ¿cómo se clasifica un riesgo que afecta a un individuo en forma aislada y que este puede decidir aceptar o rechazar?",
    options: [
      { id: "a", text: "Riesgo social e involuntario." },
      { id: "b", text: "Riesgo inducido y social." },
      { id: "c", text: "Riesgo individual y voluntario." },
      { id: "d", text: "Riesgo individual e involuntario." }
    ],
    correctAnswers: ["c"],
    explanation: "Un riesgo es individual cuando afecta a una persona de forma aislada, y es voluntario cuando la persona tiene la opción de aceptarlo o rechazarlo (como el ejemplo de fumar). (Diapositiva 107)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u10-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-10",
    topic: "Clasificación de Riesgos según Consecuencias",
    type: "single",
    prompt: "¿De qué manera se expresan generalmente los riesgos al clasificarlos según sus consecuencias?",
    options: [
      { id: "a", text: "En base a los costos financieros requeridos para la adquisición de herramientas." },
      { id: "b", text: "En base a impactos como muerte, lesiones, días de trabajo perdidos o daños materiales." },
      { id: "c", text: "En base al tipo de mecanismo natural o geológico que los desencadena en el entorno." },
      { id: "d", text: "En base al nivel de libertad de decisión que poseen los trabajadores involucrados." }
    ],
    correctAnswers: ["b"],
    explanation: "Los riesgos expresados con respecto a sus consecuencias se miden en función de muerte, lesiones, días de trabajo perdidos, daños materiales a bienes o reducción de la esperanza de vida. (Diapositiva 108)",
    diagram: null,
    points: 1
  }
];
