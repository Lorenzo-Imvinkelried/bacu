/**
 * Banco de Preguntas - UNIDAD 7 (Administración de Sistemas - Parcial 3)
 * Parte 03 (Preguntas 24 a 35)
 * Temas: Grupos de Procesos (Seguimiento, Control y Cierre) y Áreas de Conocimiento del PMBOK.
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart03 = [
  {
    id: "as-p3-u7-q24",
    num: 24,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos - Seguimiento y Control",
    type: "single",
    prompt: "¿Cuál es la función del Grupo del Proceso de Seguimiento y Control?",
    options: [
      { id: "a", text: "Definir la visión estratégica y el alcance inicial de los subproyectos." },
      { id: "b", text: "Realizar seguimiento, analizar el desempeño e iniciar los cambios requeridos." },
      { id: "c", text: "Asignar directamente las tareas diarias a los desarrolladores del sistema." },
      { id: "d", text: "Documentar la finalización formal de los paquetes de trabajo." }
    ],
    correctAnswers: ["b"],
    explanation: "Este grupo se encarga de dar seguimiento, analizar y regular el progreso y desempeño del proyecto, identificando e iniciando los cambios necesarios. (Diapositiva 22)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q25",
    num: 25,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Grupos de Procesos - Cierre",
    type: "single",
    prompt: "¿Qué objetivo persigue el Grupo del Proceso de Cierre?",
    options: [
      { id: "a", text: "Auditar la calidad de los componentes de código entregados en cada iteración." },
      { id: "b", text: "Reordenar las prioridades del cronograma para prevenir futuros retrasos." },
      { id: "c", text: "Finalizar formalmente todas las actividades en los grupos de procesos." },
      { id: "d", text: "Estimar la duración de los recursos humanos requeridos para el soporte." }
    ],
    correctAnswers: ["c"],
    explanation: "El grupo de cierre abarca la finalización formal de todas las actividades a través de todos los grupos de procesos para cerrar el proyecto o una fase. (Diapositiva 23)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q26",
    num: 26,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Integración",
    type: "single",
    prompt: "En la gestión de proyectos, el Área de Conocimiento de Gestión de la Integración implica:",
    options: [
      { id: "a", text: "Adquirir software privativo para unificar los servidores de producción." },
      { id: "b", text: "Unificar, combinar y articular adecuadamente los procesos del proyecto." },
      { id: "c", text: "Establecer canales de comunicación entre los programadores y clientes." },
      { id: "d", text: "Evaluar la viabilidad comercial del producto frente a la competencia." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de la integración abarca los procesos necesarios para identificar, definir, combinar, unificar y coordinar los diversos procesos y actividades de dirección. (Diapositiva 26)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q27",
    num: 27,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Alcance",
    type: "single",
    prompt: "¿Cuál es el propósito del Área de Conocimiento de Gestión del Alcance?",
    options: [
      { id: "a", text: "Garantizar que se incluya todo y solo el trabajo requerido para el proyecto." },
      { id: "b", text: "Asegurar que el presupuesto no supere los límites financieros fijados." },
      { id: "c", text: "Programar la fecha de finalización dentro del plazo estipulado con el cliente." },
      { id: "d", text: "Seleccionar a los profesionales informáticos con mayores habilidades técnicas." }
    ],
    correctAnswers: ["a"],
    explanation: "La gestión del alcance busca garantizar que el proyecto incluya todo el trabajo requerido (y únicamente ese trabajo) para completar el proyecto con éxito. (Diapositiva 27)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q28",
    num: 28,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Tiempo",
    type: "single",
    prompt: "El Área de Conocimiento de Gestión del Tiempo persigue:",
    options: [
      { id: "a", text: "Optimizar la cantidad de líneas de código generadas por cada programador." },
      { id: "b", text: "Asegurar la finalización del proyecto dentro del plazo acordado." },
      { id: "c", text: "Controlar que los costos por horas extra no excedan el fondo de reserva." },
      { id: "d", text: "Auditar que los entregables cumplan con los requerimientos de diseño." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión del tiempo se centra en administrar los procesos requeridos para garantizar que el proyecto se concluya dentro del plazo temporal previsto. (Diapositiva 28)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q29",
    num: 29,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Costos",
    type: "single",
    prompt: "¿Cuál es la finalidad del Área de Conocimiento de Gestión de los Costos?",
    options: [
      { id: "a", text: "Negociar los salarios de los empleados permanentes de la organización." },
      { id: "b", text: "Administrar los costos para completar el proyecto dentro del presupuesto aprobado." },
      { id: "c", text: "Determinar el precio de venta final del software en el mercado corporativo." },
      { id: "d", text: "Reemplazar las estimaciones temporales por indicadores monetarios." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de costos se ocupa de planificar, estimar, presupuestar y controlar los costos para que el proyecto finalice dentro del presupuesto aprobado. (Diapositiva 29)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q30",
    num: 30,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Calidad",
    type: "single",
    prompt: "¿Qué objetivo tiene el Área de Conocimiento de Gestión de la Calidad?",
    options: [
      { id: "a", text: "Reducir la duración de las fases de prueba para acelerar la entrega." },
      { id: "b", text: "Administrar el proyecto para que satisfaga los fines para los que fue emprendido." },
      { id: "c", text: "Contratar auditores externos para revisar la estructura contable de la empresa." },
      { id: "d", text: "Exigir que todas las tareas del proyecto utilicen metodologías ágiles." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de la calidad asegura que el proyecto satisfaga las necesidades y fines por los cuales fue asumido, asegurando el cumplimiento de requerimientos. (Diapositiva 30)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q31",
    num: 31,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Recursos Humanos",
    type: "single",
    prompt: "El Área de Conocimiento de Gestión de los Recursos Humanos se encarga de:",
    options: [
      { id: "a", text: "Organizar, gestionar y conducir el equipo del proyecto." },
      { id: "b", text: "Seleccionar la infraestructura de hardware adecuada para la empresa." },
      { id: "c", text: "Elaborar el acta de constitución y el plan de control de cambios." },
      { id: "d", text: "Negociar las compras de equipamiento informático con los proveedores." }
    ],
    correctAnswers: ["a"],
    explanation: "Esta área abarca los procesos que organizan, gestionan y conducen al equipo de personas asignadas al proyecto. (Diapositiva 31)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q32",
    num: 32,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Comunicaciones",
    type: "single",
    prompt: "¿Cuál es la función del Área de Conocimiento de Gestión de las Comunicaciones?",
    options: [
      { id: "a", text: "Comprar licencias de redes y telefonía corporativa para la empresa." },
      { id: "b", text: "Garantizar el movimiento adecuado y oportuno de la información del proyecto." },
      { id: "c", text: "Entrevistar a los usuarios para definir la interfaz gráfica del sistema." },
      { id: "d", text: "Documentar los códigos de error encontrados durante las pruebas de software." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de las comunicaciones asegura la generación, recopilación, distribución, almacenamiento y disposición final de la información del proyecto a tiempo. (Diapositiva 32)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q33",
    num: 33,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Riesgos",
    type: "single",
    prompt: "El Área de Conocimiento de Gestión de los Riesgos se enfoca en:",
    options: [
      { id: "a", text: "Prevenir cualquier modificación en el alcance original del producto." },
      { id: "b", text: "Identificar y administrar eventos potenciales, considerando impactos y ocurrencia." },
      { id: "c", text: "Transferir la responsabilidad técnica del software a los clientes finales." },
      { id: "d", text: "Cancelar los proyectos que presenten desviaciones en el cronograma." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de riesgos busca identificar, analizar y responder a los eventos potenciales que pueden afectar de forma positiva o negativa al proyecto. (Diapositiva 33)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q34",
    num: 34,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Adquisiciones",
    type: "single",
    prompt: "¿En qué consiste el Área de Conocimiento de Gestión de las Adquisiciones?",
    options: [
      { id: "a", text: "La venta de licencias de software desarrolladas por la organización a terceros." },
      { id: "b", text: "La compra o adquisición de productos, servicios o resultados necesarios." },
      { id: "c", text: "La asignación de presupuestos internos entre los departamentos de la empresa." },
      { id: "d", text: "La selección de las metodologías de estimación de esfuerzo de desarrollo." }
    ],
    correctAnswers: ["b"],
    explanation: "La gestión de adquisiciones abarca los procesos de compra o adquisición de bienes, servicios o resultados externos requeridos para el proyecto. (Diapositiva 34)",
    diagram: null,
    points: 1
  },
  {
    id: "as-p3-u7-q35",
    num: 35,
    subject: "Administración de Sistemas",
    unit: "Parcial 3",
    quizId: "quiz-as-p3-unidad-7",
    topic: "Áreas de Conocimiento - Interesados",
    type: "single",
    prompt: "El Área de Conocimiento de Gestión de los Interesados tiene como meta:",
    options: [
      { id: "a", text: "Transmitir el código fuente a los auditores externos del sistema." },
      { id: "b", text: "Identificar y administrar las expectativas de personas u organizaciones vinculadas." },
      { id: "c", text: "Definir la jerarquía funcional del departamento de tecnologías de la información." },
      { id: "d", text: "Controlar que los programadores no alteren el diseño de arquitectura." }
    ],
    correctAnswers: ["b"],
    explanation: "Esta área se orienta a identificar a las personas, grupos u organizaciones impactadas o con impacto en el proyecto, analizando sus expectativas y gestionando su participación. (Diapositiva 35)",
    diagram: null,
    points: 1
  }
];
