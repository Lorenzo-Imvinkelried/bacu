/**
 * Vista de Inicio y Configuración de Modalidad de Cuestionario
 * Responsabilidad: Renderizar la pantalla de bienvenida, selección de modo (tandas, aleatorio, completo) y parámetros
 * Cumple con directivas de arquitectura en AGENTS.md
 */

import { QUESTION_BANK } from "../data/question-bank.js";
import { getQuestionsForQuiz } from "../data/vault-structure.js";
import { getFormattedQuizTitle } from "./quiz-title.js";

/**
 * Renderizar pantalla inicial de información del cuestionario y selección de modo
 * @param {object} quiz
 * @param {object} unit
 * @param {object} currentState
 * @returns {string} HTML
 */
export function renderIntroView(quiz, unit, currentState) {
  if (!unit || unit.questionCount === 0 || !quiz) {
    return `
      <div class="quiz-intro-card">
        <div class="empty-unit-notice">
          <h3>${unit ? unit.name : "Unidad"} - Próximamente</h3>
          <p>Esta unidad o materia aún no contiene preguntas cargadas en el baúl.</p>
          <p>Para practicar con las preguntas de examen, seleccioná <strong>Ingeniería y Calidad de Software &rarr; Parcial 1</strong> en el menú superior.</p>
          <button type="button" class="btn btn-primary" id="btn-switch-to-p1">Ir a Parcial 1</button>
        </div>
      </div>
    `;
  }

  const quizQuestions = getQuestionsForQuiz(quiz, QUESTION_BANK);
  const totalQuestions = quizQuestions.length || unit.questionCount || 92;
  const executionMode = currentState.executionMode || "batches";
  const batchSize = Math.min(totalQuestions, Math.max(1, currentState.batchSize || 10));
  const randomCount = Math.min(totalQuestions, Math.max(1, currentState.randomCount || 4));

  const isBatches = executionMode === "batches";
  const isRandom = executionMode === "random";
  const isFull = executionMode === "full";
  const isQuick = executionMode === "quick";

  const shuffleQuestions = currentState.shuffleQuestions ?? true;
  const shuffleOptions = currentState.shuffleOptions ?? true;

  const attempts = currentState.history?.filter(h => h.quizId === quiz.id) || [];
  const latestAttempt = attempts[0];
  const displayTitle = getFormattedQuizTitle(quiz, currentState, totalQuestions);

  let startButtonText = "";
  if (isBatches) {
    startButtonText = `Comenzar tanda de ${batchSize} preguntas ${shuffleQuestions ? "al azar" : ""}`;
  } else if (isRandom) {
    startButtonText = `Comenzar prueba de ${randomCount} preguntas al azar`;
  } else if (isQuick) {
    startButtonText = `Comenzar Repaso Rápido (${totalQuestions} preguntas)`;
  } else {
    startButtonText = `Comenzar cuestionario completo (${totalQuestions} preguntas${shuffleQuestions ? " al azar" : ""})`;
  }

  return `
    <div class="quiz-intro-card">
      <div class="quiz-mode-selection-header">
        <h2 class="section-title">¿Cómo querés resolver este cuestionario?</h2>
        <p class="section-subtitle">Elegí la modalidad que mejor se adapte a tu objetivo de estudio:</p>
      </div>

      ${(currentState.lastMissedQuestions && currentState.lastMissedQuestions.length > 0) ? `
        <div class="pending-retry-banner">
          <div class="pending-retry-info">
            <div class="pending-retry-text">
              <strong>¿Deseas repasar tus falladas del último intento?</strong>
              <p>Tienes <strong>${currentState.lastMissedQuestions.length}</strong> preguntas incorrectas o parciales pendientes de afianzar.</p>
            </div>
          </div>
          <button type="button" class="btn btn-warning btn-retry-missed-action" id="btn-retry-from-intro">
            Rehacerlas ahora (${currentState.lastMissedQuestions.length})
          </button>
        </div>
      ` : ""}

      <div class="quiz-modes-grid">
        <button 
          type="button" 
          class="quiz-mode-card ${isBatches ? "active highlight-continuous" : ""}" 
          data-execution-mode="batches"
        >
          <div class="mode-card-header">
            <span class="mode-badge-pill continuous-pill">Repasar todas &bull; Sin repetir</span>
          </div>
          <h3 class="mode-card-title">Por Tandas (Repasar todas)</h3>
          <p class="mode-card-desc">Recorré todas las preguntas al azar en tandas de X en X sin repetir. Al terminar cada tanda ves tus resultados y avanzás a la siguiente hasta completar el 100%.</p>
          <div class="mode-card-footer">
            <span>De ${batchSize} en ${batchSize}</span>
            <span>100% del banco</span>
          </div>
        </button>

        <button 
          type="button" 
          class="quiz-mode-card ${isRandom ? "active highlight-random" : ""}" 
          data-execution-mode="random"
        >
          <div class="mode-card-header">
            <span class="mode-badge-pill random-pill">Simulacro Rápido</span>
          </div>
          <h3 class="mode-card-title">Muestra Aleatoria</h3>
          <p class="mode-card-desc">Elegí cuántas preguntas querés responder al azar (${randomCount} preguntas) para una práctica express o simulación rápida de examen.</p>
          <div class="mode-card-footer">
            <span>Elegís cuántas</span>
            <span>Práctica rápida</span>
          </div>
        </button>

        <button 
          type="button" 
          class="quiz-mode-card ${isFull ? "active highlight-full" : ""}" 
          data-execution-mode="full"
        >
          <div class="mode-card-header">
            <span class="mode-badge-pill pool-pill">Examen Completo</span>
          </div>
          <h3 class="mode-card-title">Cuestionario Completo</h3>
          <p class="mode-card-desc">Resolvé las ${totalQuestions} preguntas completas de corrido en una sola sesión intensiva para preparación exhaustiva.</p>
          <div class="mode-card-footer">
            <span>${totalQuestions} preguntas</span>
            <span>Sin límite de tiempo</span>
          </div>
        </button>

        <button 
          type="button" 
          class="quiz-mode-card ${isQuick ? "active highlight-quick" : ""}" 
          data-execution-mode="quick"
        >
          <div class="mode-card-header">
            <span class="mode-badge-pill quick-pill">Feedback Inmediato</span>
          </div>
          <h3 class="mode-card-title">Repaso Rápido (1 a 1)</h3>
          <p class="mode-card-desc">Hacés un tap en tu opción y al instante te marca si es correcta o no con su explicación teórica para avanzar a la siguiente a máxima velocidad.</p>
          <div class="mode-card-footer">
            <span>Corrección al toque</span>
            <span>1 a 1</span>
          </div>
        </button>
      </div>

      ${isBatches ? `
        <div class="batch-selector-box">
          <div class="batch-selector-title">
            <div>
              <strong>Tamaño de la tanda:</strong> ¿De a cuántas preguntas querés ir resolviendo?
              <p class="batch-sublabel">Irás respondiendo de a bloques al azar sin repetir ninguna hasta completar las ${totalQuestions} preguntas.</p>
            </div>
          </div>
          <div class="batch-presets-row">
            ${[5, 10, 15, 20].map(s => `<button type="button" class="btn-batch-preset ${batchSize === s ? "active" : ""}" data-batch-size="${s}">${s} en ${s}${s === 10 ? " (Recomendado)" : ""}</button>`).join("")}
            <div class="batch-custom-input-group">
              <label for="input-custom-batch">Personalizado:</label>
              <input type="number" id="input-custom-batch" min="1" max="${totalQuestions}" value="${batchSize}" class="input-batch-number" />
            </div>
          </div>
          <p class="batch-selector-help">
            Resolverás una primera tanda de <strong>${batchSize}</strong> preguntas elegidas al azar. Al finalizarla, verás tus resultados explicados y un botón para avanzar automáticamente a las <strong>siguientes ${batchSize} preguntas sin repetir</strong> hasta agotar las ${totalQuestions} preguntas del cuestionario.
          </p>
        </div>
      ` : ""}

      ${isRandom ? `
        <div class="batch-selector-box random-selector-box">
          <div class="batch-selector-title">
            <div>
              <strong>Cantidad de preguntas al azar:</strong> ¿Cuántas querés resolver en este intento?
              <p class="batch-sublabel">Se seleccionará una muestra aleatoria entre las ${totalQuestions} preguntas disponibles de este cuestionario.</p>
            </div>
          </div>
          <div class="batch-presets-row">
            ${[4, 10, 15, 20].map(c => `<button type="button" class="btn-random-preset ${randomCount === c ? "active" : ""}" data-random-count="${c}">${c} preguntas</button>`).join("")}
            <div class="batch-custom-input-group">
              <label for="input-custom-random">Personalizado:</label>
              <input type="number" id="input-custom-random" min="1" max="${totalQuestions}" value="${randomCount}" class="input-batch-number" />
            </div>
          </div>
          <p class="batch-selector-help">
            Se generará un intento puntual con <strong>${randomCount}</strong> preguntas al azar para evaluar rápidamente tus conocimientos.
          </p>
        </div>
      ` : ""}

      ${isFull ? `
        <div class="batch-selector-box full-info-box">
          <div class="batch-selector-title">
            <div>
              <strong>Modo Completo:</strong> Resolverás las ${totalQuestions} preguntas de forma continua.
              <p class="batch-sublabel">Ideal para una simulación completa de examen con todas las preguntas juntas.</p>
            </div>
          </div>
          <p class="batch-selector-help">
            Podrás navegar libremente entre las ${totalQuestions} preguntas en cualquier orden a través de la grilla de navegación y marcar preguntas para revisar.
          </p>
        </div>
      ` : ""}

      ${isQuick ? `
        <div class="batch-selector-box quick-selector-box">
          <div class="batch-selector-title">
            <div>
              <strong>Modo Repaso Rápido:</strong> Vas respondiendo una a una con corrección al instante.
              <p class="batch-sublabel">Al tocar tu opción, el sistema te muestra en el acto si acertaste o no, la explicación teórica y el botón para pasar a la siguiente pregunta.</p>
            </div>
          </div>
          <p class="batch-selector-help">
            Ideal para fijar conceptos en pocos minutos antes del examen. La grilla lateral te irá marcando en tiempo real en verde o rojo tus aciertos.
          </p>
        </div>
      ` : ""}

      <!-- Opciones de Barajado y Aleatoriedad Estilo Moodle -->
      <div class="quiz-shuffle-settings-card">
        <div class="shuffle-settings-header">
          <div class="shuffle-title-group">
            <div>
              <h4 class="shuffle-title">Comportamiento del examen</h4>
              <p class="shuffle-subtitle">Configurá cómo se presentan las preguntas y respuestas antes de iniciar</p>
            </div>
          </div>
        </div>
        <div class="shuffle-toggles-grid">
          <label class="shuffle-toggle-card ${shuffleQuestions ? "active" : ""}" for="toggle-shuffle-questions">
            <div class="toggle-control-col">
              <input type="checkbox" id="toggle-shuffle-questions" class="shuffle-checkbox" ${shuffleQuestions ? "checked" : ""} />
            </div>
            <div class="toggle-info-col">
              <span class="toggle-headline">Orden al azar de las preguntas</span>
              <span class="toggle-details">${isFull ? "Las preguntas se presentarán en un orden aleatorio diferente en cada intento." : "Baraja la secuencia en que se presentan las preguntas para evitar memorización de orden."}</span>
            </div>
          </label>

          <label class="shuffle-toggle-card ${shuffleOptions ? "active" : ""}" for="toggle-shuffle-options">
            <div class="toggle-control-col">
              <input type="checkbox" id="toggle-shuffle-options" class="shuffle-checkbox" ${shuffleOptions ? "checked" : ""} />
            </div>
            <div class="toggle-info-col">
              <span class="toggle-headline">Barajar respuestas dentro de cada pregunta</span>
              <span class="toggle-details">Cambia la posición de las opciones (a, b, c, d) para razonar el concepto en vez de recordar la ubicación.</span>
            </div>
          </label>
        </div>
      </div>

      <div class="quiz-info-details-box">
        <table class="quiz-intro-meta-table">
          <tbody>
            <tr><td>Cuestionario:</td><td><strong>${displayTitle}</strong></td></tr>
            <tr><td>Modalidad activa:</td><td><strong>${isBatches ? "Práctica por Tandas (Repasar todas)" : (isRandom ? `Muestra Aleatoria (${randomCount} preguntas)` : (isQuick ? "Repaso Rápido (Feedback inmediato)" : "Cuestionario Completo"))}</strong></td></tr>
            <tr><td>Orden de preguntas:</td><td><strong>${shuffleQuestions ? "Aleatorio" : "Secuencial original"}</strong></td></tr>
            <tr><td>Barajar respuestas:</td><td><strong>${shuffleOptions ? "Sí (Posiciones cambiadas)" : "No (Posiciones fijas)"}</strong></td></tr>
            <tr><td>Intentos permitidos:</td><td>Sin límite</td></tr>
            <tr><td>Método de calificación:</td><td>Calificación más alta</td></tr>
          </tbody>
        </table>

        ${latestAttempt ? `
          <div class="vault-section-hint">
            <strong>Último intento registrado:</strong> Calificación de ${latestAttempt.score.toFixed(2).replace(".", ",")} sobre ${latestAttempt.maxScore.toFixed(2).replace(".", ",")} (${latestAttempt.percentage}%) el ${new Date(latestAttempt.date).toLocaleDateString()}.
          </div>
        ` : ""}

        <div class="quiz-intro-actions" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" id="btn-start-quiz" class="btn btn-primary btn-lg">
            ${startButtonText}
          </button>
          <button type="button" id="btn-export-questions-intro" class="btn btn-secondary btn-lg" title="Descargar las preguntas de este cuestionario con respuestas oficiales en un archivo TXT">
            Exportar cuestionario (TXT)
          </button>
        </div>
      </div>
    </div>
  `;
}
