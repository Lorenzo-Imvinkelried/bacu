/**
 * Banco de Preguntas - UNIDAD 9 (Administración de Sistemas - Parcial 3)
 * Parte 01 (Preguntas 1 a 12)
 * Temas: Justificación, Enfoques, Causas Disparadoras, Auditoría General vs Informática, Objetivos vs Beneficios y Perfil del Auditor.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "as-p3-u9-q01",
    num: 1,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Justificación de la Auditoría Informática",
    type: "single",
    prompt: "Dentro del hilo conductor que justifica la auditoría informática, ¿cuál es el factor clave que genera la necesidad de realizar una verificación independiente en la organización?",
    options: [
      { id: "a", text: "La necesidad de eliminar la administración técnica interna." },
      { id: "b", text: "El reemplazo continuo de la infraestructura de red corporativa." },
      { id: "c", text: "La alta dependencia de los sistemas como soporte vital del negocio." },
      { id: "d", text: "La automatización exclusiva de los procesos contables y financieros." }
    ],
    correctAnswers: ["c"],
    explanation: "La alta dependencia tecnológica convierte a los sistemas de información en el soporte vital del negocio, lo que exige contar con una verificación independiente a través de la auditoría de TI. (Diapositiva 2)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q02",
    num: 2,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Enfoque Tecnológico",
    type: "single",
    prompt: "¿Qué aspecto evalúa específicamente el \"Enfoque Tecnológico\" dentro de la definición de Auditoría Informática?",
    options: [
      { id: "a", text: "El modelo organizativo y la alineación estratégica con la dirección." },
      { id: "b", text: "La seguridad, precisión y confiabilidad de los datos en la infraestructura." },
      { id: "c", text: "El análisis de duplicidades de procesos y costos operativos del personal." },
      { id: "d", text: "El cumplimiento de contratos laborales del equipo de desarrollo." }
    ],
    correctAnswers: ["b"],
    explanation: "El enfoque tecnológico evalúa la seguridad, precisión y confiabilidad de los datos, identificando riesgos y vulnerabilidades en la infraestructura tecnológica. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q03",
    num: 3,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Análisis de Flujos",
    type: "single",
    prompt: "En el análisis de flujos dentro de la evaluación sistemática de un sistema de información, ¿cuál es el objetivo principal que se persigue?",
    options: [
      { id: "a", text: "Detectar información crítica, necesidades, duplicidades y costos innecesarios." },
      { id: "b", text: "Determinar el nivel de salarios del equipo técnico de desarrollo de sistemas." },
      { id: "c", text: "Verificar el cumplimiento estricto de las normas contables internacionales." },
      { id: "d", text: "Reemplazar las auditorías financieras tradicionales por controles de red." }
    ],
    correctAnswers: ["a"],
    explanation: "El análisis de flujos detecta la información crítica e identifica necesidades, duplicidades, costos innecesarios y barreras operativas dentro de la organización. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q04",
    num: 4,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Causas Disparadoras - Desorganización",
    type: "single",
    prompt: "Una organización detecta que existen múltiples bases de datos con información redundante e inconsistencias operativas entre áreas. ¿A qué causa disparadora de auditoría corresponde este escenario?",
    options: [
      { id: "a", text: "Debilidad financiera." },
      { id: "b", text: "Insatisfacción de usuarios." },
      { id: "c", text: "Inseguridad de los SI." },
      { id: "d", text: "Desorganización." }
    ],
    correctAnswers: ["d"],
    explanation: "La desorganización se manifiesta en la empresa mediante la duplicidad de información y la inconsistencia en los procesos operativos. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q05",
    num: 5,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Causas Disparadoras - Inseguridad de los SI",
    type: "single",
    prompt: "¿Qué situación representa una causa disparadora de auditoría fundamentada en la \"Inseguridad de los SI\"?",
    options: [
      { id: "a", text: "Las desviaciones presupuestarias significativas en la compra de licencias." },
      { id: "b", text: "La falta de contratos de desarrollo de software con proveedores externos." },
      { id: "c", text: "La ausencia de protección física y lógica en las instalaciones e información." },
      { id: "d", text: "El soporte técnico deficiente que genera reclamos continuos en los usuarios." }
    ],
    correctAnswers: ["c"],
    explanation: "La inseguridad de los sistemas de información se origina directamente por la falta de mecanismos de protección física y lógica sobre la infraestructura e información. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q06",
    num: 6,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Causas Disparadoras - Cumplimiento Legal",
    type: "single",
    prompt: "¿Qué causa disparadora de auditoría se relaciona con la falta de contratos formalizados y el incumplimiento de la regulación sobre protección de datos?",
    options: [
      { id: "a", text: "Cumplimiento legal." },
      { id: "b", text: "Debilidad financiera." },
      { id: "c", text: "Desorganización." },
      { id: "d", text: "Insatisfacción de usuarios." }
    ],
    correctAnswers: ["a"],
    explanation: "El cumplimiento legal abarca las exigencias normativas sobre protección de datos personales y la adecuada formalización de contratos con terceros. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q07",
    num: 7,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Auditoría General vs Auditoría Informática",
    type: "single",
    prompt: "Respecto a la relación entre la Auditoría General (género) y la Auditoría Informática (especie), ¿cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      { id: "a", text: "La auditoría informática reemplaza totalmente a la auditoría general en empresas digitalizadas." },
      { id: "b", text: "La auditoría informática complementa a las otras auditorías apoyándose en el análisis de sistemas." },
      { id: "c", text: "La auditoría general se encarga exclusivamente del monitoreo técnico de la ciberdefensa." },
      { id: "d", text: "La auditoría informática prescinde de evaluar la precisión y confiabilidad de los datos." }
    ],
    correctAnswers: ["b"],
    explanation: "La auditoría informática no sustituye a la auditoría general o financiera, sino que la complementa o se apoya en ella debido a que la mayoría de los procesos actuales se ejecutan sobre sistemas. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q08",
    num: 8,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Ámbito de la Auditoría Informática",
    type: "single",
    prompt: "¿Cuál de las siguientes responsabilidades corresponde específicamente a la Auditoría Informática como \"Especie\"?",
    options: [
      { id: "a", text: "La verificación del cumplimiento normativo contable e impositivo." },
      { id: "b", text: "El control de los procesos operativos tradicionales de producción." },
      { id: "c", La: "La gestión financiera de los activos fijos inmuebles de la empresa.", text: "La gestión financiera de los activos fijos inmuebles de la empresa." },
      { id: "d", text: "La evaluación de la ciberdefensa y la infraestructura tecnológica." }
    ],
    correctAnswers: ["d"],
    explanation: "La auditoría informática enfoca su ámbito de especialidad en la seguridad y ciberdefensa, precisión y confiabilidad de los datos, infraestructura tecnológica y ciclo de vida del software. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q09",
    num: 9,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Objetivos del Auditor vs Beneficios",
    type: "single",
    prompt: "¿Cuál de las siguientes alternativas constituye un \"Objetivo\" (meta del auditor) y NO un \"Beneficio\" para la organización?",
    options: [
      { id: "a", text: "Controlar la función informática de la empresa." },
      { id: "b", text: "Lograr una mayor confianza de los usuarios." },
      { id: "c", text: "Obtener una mitigación efectiva de los riesgos." },
      { id: "d", text: "Mejorar la imagen pública ante los clientes." }
    ],
    correctAnswers: ["a"],
    explanation: "Controlar la función informática es una meta directa del auditor (Objetivo); los demás aspectos corresponden a los resultados positivos recibidos por la empresa (Beneficios). (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q10",
    num: 10,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Beneficios de la Auditoría Informática",
    type: "single",
    prompt: "Dentro de la distinción entre Objetivos y Beneficios, ¿cuál de los siguientes elementos representa un \"Beneficio\" para la organización?",
    options: [
      { id: "a", text: "Verificar el cumplimiento normativo aplicable." },
      { id: "b", text: "Asegurar la rentabilidad de las inversiones de TI." },
      { id: "c", text: "Reducir los costos ocasionados por la mala calidad." },
      { id: "d", text: "Mejorar la eficiencia operativa del centro de cómputos." }
    ],
    correctAnswers: ["c"],
    explanation: "La reducción de costos por mala calidad es un beneficio resultante para la organización; verificar cumplimiento, asegurar rentabilidad y mejorar eficiencia son objetivos fijados por el auditor. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q11",
    num: 11,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Perfil del Auditor - Ética Profesional",
    type: "single",
    prompt: "En la dimensión de Ética Profesional del perfil del auditor informático, ¿cuál es el principio de actuación requerido?",
    options: [
      { id: "a", text: "Emitir diagnósticos basados en suposiciones técnicas justificables." },
      { id: "b", text: "Elaborar diagnósticos basados en evidencia y formular recomendaciones." },
      { id: "c", text: "Imponer obligatoriamente las correcciones decididas por el auditor." },
      { id: "d", text: "Asumir auditorías en áreas técnicas sin contar con preparación previa." }
    ],
    correctAnswers: ["b"],
    explanation: "La ética profesional exige que el diagnóstico esté fundado rigurosamente en evidencias (cero suposiciones) y que el auditor actúe recomendando mejoras sin imponerlas. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u9-q12",
    num: 12,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-9",
    topic: "Perfil del Auditor - Habilidades Blandas",
    type: "single",
    prompt: "¿Cuáles de las siguientes competencias pertenecen a la dimensión de \"Habilidades Blandas\" en el perfil del auditor?",
    options: [
      { id: "a", text: "Dominio de sistemas, redes y arquitecturas de seguridad." },
      { id: "b", text: "Evaluación técnica de código fuente y bases de datos." },
      { id: "c", text: "Configuración de cortafuegos y análisis de vulnerabilidades." },
      { id: "d", text: "Comunicación asertiva, discreción profesional y negociación." }
    ],
    correctAnswers: ["d"],
    explanation: "Las habilidades blandas comprenden aspectos de interacción e integridad como la comunicación asertiva, la discreción profesional y la capacidad de negociación. (Diapositiva 7)",
    diagram: null,
    points: 1
  }
];
