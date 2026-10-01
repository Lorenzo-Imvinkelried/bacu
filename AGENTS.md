# DIRECTIVAS DE ARQUITECTURA Y DESARROLLO - BAÚL DE CUESTIONARIOS

Este documento rige el desarrollo y mantenimiento del proyecto **Baúl de Cuestionarios**. Cualquier agente de IA o desarrollador debe seguir estas pautas estrictamente para asegurar un código profesional, mantenible, escalable y con responsabilidades claramente separadas.

---

## 1. Principio Fundamental: Separación Estricta de Responsabilidades (SoC)

Cada archivo debe tener **una única responsabilidad bien delimitada**. Está terminantemente prohibido crear archivos monolíticos donde se mezclen lógica de negocio, manipulación directa de DOM, estilos y datos.

La arquitectura se divide en capas desacopladas:

```
baul-de-cuestionarios/
├── AGENTS.md                  # Reglas de arquitectura y guía para agentes de desarrollo
├── index.html                 # Estructura semántica del HTML (sin CSS inline ni scripts inline)
├── css/                       # Capa de presentación y estilos visuales
│   ├── moodle-base.css        # Tokens de diseño, reset, variables de color y tipografía
│   ├── moodle-header.css      # Barra de navegación superior, breadcrumbs y perfil
│   ├── moodle-quiz.css        # Componente de preguntas (.que, .info, .formulation, .answer, .outcome)
│   ├── moodle-navblock.css    # Bloque de navegación del cuestionario (#mod_quiz_navblock, grilla .qnbutton)
│   ├── moodle-dark.css        # Tema de Modo Oscuro ergonómico y descansador para la vista
│   ├── annotations.css        # Estilos para anotaciones colaborativas de la comunidad
│   └── vault-explorer.css     # Explorador del baúl (árbol de materias, parciales, modales)
├── js/
│   ├── data/                  # Capa de datos y persistencia
│   │   ├── question-bank.js   # Re-exportador central del banco de preguntas
│   │   ├── vault-structure.js # Estructura taxonómica del baúl: Asignaturas -> Parciales -> Cuestionarios
│   │   ├── fundamentos-backend/ # Asignatura Fundamentos Backend
│   │   │   └── parcial-1/     # Parcial 1 modular
│   │   │       ├── index.js
│   │   │       ├── unidad-1/  # Cuestionario modular UNIDAD 1 (42 preguntas, 4 partes)
│   │   │       │   ├── index.js
│   │   │       │   └── part-01.js ... part-04.js
│   │   │       ├── unidad-2/  # Cuestionario modular UNIDAD 2 (53 preguntas, 5 partes)
│   │   │       │   ├── index.js
│   │   │       │   └── part-01.js ... part-05.js
│   │   │       └── unidad-3/  # Cuestionario modular UNIDAD 3 (53 preguntas, 5 partes)
│   │   │           ├── index.js
│   │   │           └── part-01.js ... part-05.js
│   │   ├── ingenieria-y-calidad/ # Asignatura organizada por parciales
│   │   │   └── parcial-1/     # Parcial 1 con sus cuestionarios modulares (< 300 líneas c/u)
│   │   │       ├── index.js   # Índice unificador del Parcial 1
│   │   │       ├── unidad-1/  # Cuestionarios modulares UNIDAD 1 (index.js, unidad-1.js, etc.)
│   │   │       ├── unidad-2/  # Cuestionarios modulares UNIDAD 2 (index.js, unidad-2-parte-1a.js ... 2b.js)
│   │   │       ├── unidad-3/  # Cuestionario modular UNIDAD 3 (51 preguntas, 5 partes)
│   │   │       │   ├── index.js
│   │   │       │   └── part-01.js ... part-05.js
│   │   │       └── word-parcial-1/ # Banco de examen WORD PARCIAL 1
│   │   │           ├── index.js
│   │   │           └── part-01.js ... part-14.js # Partes modulares de preguntas
│   │   └── github/            # Asignatura GitHub
│   │       ├── comandos/      # Sección / Parcial Comandos
│   │       │   ├── index.js   # Índice unificador de Comandos
│   │       │   └── cuestionario-1/ # Cuestionario 1 modular (25 preguntas, 2 partes)
│   │       │       ├── index.js
│   │       │       ├── part-01.js # Preguntas 1 a 13
│   │       │       └── part-02.js # Preguntas 14 a 25
│   │       └── ci-cd/         # Sección / Parcial CI/CD
│   │           ├── index.js   # Índice unificador de CI/CD
│   │           └── cuestionario-1/ # Cuestionario 1 modular (20 preguntas, 2 partes)
│   │               ├── index.js
│   │               ├── part-01.js # Preguntas 1 a 10
│   │               └── part-02.js # Preguntas 11 a 20
│   │   └── administracion-de-sistemas/ # Asignatura Administración de Sistemas
│   │       └── parcial-3/     # Parcial 3 modular
│   │           ├── index.js   # Índice unificador de Parcial 3
│   │           ├── pdf-100-paginas/ # Cuestionario modular PDF 100 PÁGINAS (17 preguntas, 2 partes)
│   │           │   ├── index.js
│   │           │   └── part-01.js ... part-02.js
│   │           ├── unidad-7/  # Cuestionario modular UNIDAD 7 (57 preguntas, 5 partes)
│   │           │   ├── index.js
│   │           │   └── part-01.js ... part-05.js
│   │           ├── unidad-8/  # Cuestionario modular UNIDAD 8 (38 preguntas, 3 partes)
│   │           │   ├── index.js
│   │           │   └── part-01.js ... part-03.js
│   │           ├── unidad-9/  # Cuestionario modular UNIDAD 9 (34 preguntas, 3 partes)
│   │           │   ├── index.js
│   │           │   └── part-01.js ... part-03.js
│   │           └── unidad-10/ # Cuestionario modular UNIDAD 10 (36 preguntas, 3 partes)
│   │               ├── index.js
│   │               └── part-01.js ... part-03.js
│   ├── core/                  # Capa de lógica de negocio y estado
│   │   ├── state.js           # Gestor reactivo de estado central (< 300 líneas)
│   │   ├── continuous-session.js # Dominio de práctica continua por tandas
│   │   ├── history-storage.js # Persistencia de intentos en localStorage
│   │   ├── quiz-engine.js     # Motor evaluador (cálculo de puntaje, validaciones, tiempo)
│   │   ├── firebase-config.js # Credenciales y estado de conexión con Firebase
│   │   └── annotations-service.js # Servicio de lectura/escritura de notas comunitarias
│   ├── components/            # Capa de componentes de interfaz (renderizado puro)
│   │   ├── header-component.js       # Renderiza encabezado y breadcrumbs estilo Campus Virtual UTN
│   │   ├── question-component.js     # Renderiza las tarjetas .que para intento y revisión
│   │   ├── navblock-component.js     # Renderiza la grilla de navegación interactiva y semáforos
│   │   ├── review-summary.js         # Renderiza tablas de resumen de intento y revisión final
│   │   ├── vault-drawer.js           # Renderiza el explorador del baúl de materias y parciales
│   │   ├── how-to-create-modal.js    # Modal con prompt maestro de creación con Gemini
│   │   └── annotations-component.js  # Renderiza lista de aportes y formulario de notas
│   ├── app/                   # Capa de vistas y controladores de la aplicación (< 300 líneas c/u)
│   │   ├── intro-view.js      # Vista de bienvenida y selección de modalidad
│   │   ├── attempt-view.js    # Vista del intento en curso y revisión
│   │   ├── quiz-title.js      # Formateador de títulos dinámicos con indicadores de tanda
│   │   ├── click-handlers.js  # Manejador de eventos de clic
│   │   ├── form-handlers.js   # Manejador de eventos de cambio e input
│   │   ├── event-handlers.js  # Orquestador de eventos delegados en el DOM
│   │   ├── annotations-handlers.js # Manejador de eventos de interacción de anotaciones
│   │   └── export-service.js  # Servicio de exportación de preguntas a archivo TXT
│   └── app.js                 # Punto de entrada / bootstrap orquestador (< 110 líneas)
└── Preguntas parcial 1 ING Y CALIDAD.txt # Archivo fuente original de preguntas
```

---

## 2. Pautas por Capa

### A. Capa de Datos (`js/data/`)
- **Inmutabilidad y validación**: Los datos de las preguntas deben estructurarse con esquemas uniformes:
  ```javascript
  {
    id: "ing-cal-p1-q1",
    num: 1,
    subject: "Ingeniería y Calidad",
    unit: "Parcial 1",
    topic: "Modelos de Proceso",
    type: "single" | "multiple" | "essay",
    prompt: "¿...?",
    options: [
      { id: "a", text: "..." },
      { id: "b", text: "..." }
    ],
    correctAnswers: ["a"], // Array para permitir selección única o múltiple
    explanation: "Justificación bibliográfica o técnica...",
    diagramSvg?: "<svg>...</svg>" // Opcional para preguntas con gráficos
  }
  ```
- No incluir lógica de manipulación de DOM ni llamadas directas de UI en esta capa.

### B. Capa de Lógica y Estado (`js/core/`)
- `state.js`: Mantiene el estado activo (ej. `currentQuiz`, `activeQuestionIndex`, `userAnswers: Map`, `flaggedQuestions: Set`, `quizStatus: 'intro'|'attempt'|'summary'|'review'`).
- Ofrece métodos pub/sub (`subscribe`, `setState`, `getState`) para notificar a los componentes visuales.
- `quiz-engine.js`: Funciones puras para evaluar respuestas, otorgar puntaje proporcional en preguntas de opción múltiple, formatear notas en escala 10,00 y persistir historial en `localStorage`.

### C. Capa de Componentes (`js/components/`)
- Cada componente es una función o clase responsable exclusivamente de generar su HTML y registrar manejadores de eventos específicos.
- Deben recibir los datos necesarios como parámetros y delegar cambios de estado a `state.js` o `app.js`.

### D. Capa de Estilos (`css/`)
- Basada en el estilo original del **Campus Virtual UTN FRSF (Tema Adaptable de Moodle)**.
- Colores institucionales:
  - Azul UTN / Primario: `#004b87` (o verde teal adaptable `#00796b`)
  - Acentos y estados: `#28a745` (Correcto), `#dc3545` (Incorrecto), `#ffc107` (Parcial/Bandera)
  - Fondo de formulación: `#e6f2f5` / `#f8f9fa`, borde `#b3d9e0`
  - Fondo de panel info: `#f8f9fa`, borde `#cad0d7`
- Prohibido el uso de estilos inline (`style="..."`) en elementos estáticos. Usar clases CSS semánticas.

---

## 3. Guía para Agregar Nuevas Asignaturas o Cuestionarios
1. Abrir `js/data/vault-structure.js` y registrar la nueva asignatura / unidad / parcial.
2. Agregar las preguntas en `js/data/question-bank.js` siguiendo el esquema oficial.
3. Asignar las preguntas a los cuestionarios correspondientes (por defecto en grupos de 4 preguntas o el tamaño configurado).
4. El sistema cargará automáticamente la nueva sección en el explorador del baúl sin necesidad de modificar el motor ni los componentes de la interfaz.

---

## 4. Reglas de Codificación
- Usar JavaScript moderno (ES6+), modular, sin dependencias externas innecesarias.
- Nombres de variables y funciones en camelCase, autoexplicativos y en español o inglés consistente.
- Mantener funciones cortas (< 40 líneas) orientadas a una sola tarea.
- Toda interacción de usuario debe ser accesible por teclado y tener retroalimentación visual clara.
- En la interfaz, títulos y selectores, **nunca** incluir códigos de materia tipo `(ISI-XXX)` o `(FB-XXX)`; las materias se identifican únicamente con su nombre limpio (ej. `Ingeniería y Calidad de Software`, `Fundamentos Backend`).
- No registrar parciales o unidades vacías con leyendas de "Próximamente"; registrar únicamente unidades con banco de preguntas cargado.
- **Control de Versiones y Git**: Está terminantemente prohibido ejecutar `git push` de forma automática. Solo se ejecutará `git push` cuando el usuario lo pida explícitamente.
