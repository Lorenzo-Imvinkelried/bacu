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
          <div class="notice-icon">📂</div>
          <h3>${unit ? unit.name : "Unidad"} - Próximamente</h3>
          <p>Esta unidad o materia aún no contiene preguntas cargadas en el baúl.</p>
          <p>Para practicar con las 92 preguntas de examen, seleccioná <strong>Ingeniería y Calidad &rarr; Parcial 1</strong> en el menú desplegable superior.</p>
          <button type="button" class="btn btn-primary" id="btn-switch-to-p1">
            Ir a Ingeniería y Calidad &rarr; Parcial 1
          </button>
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

  const attempts = currentState.history?.filter(h => h.quizId === quiz.id) || [];
  const latestAttempt = attempts[0];
  const displayTitle = getFormattedQuizTitle(quiz, currentState, totalQuestions);

  let startButtonText = "";
  if (isBatches) {
    startButtonText = `Comenzar tanda de ${batchSize} preguntas al azar 🔄`;
  } else if (isRandom) {
    startButtonText = `Comenzar prueba de ${randomCount} preguntas al azar 🎲`;
  } else {
    startButtonText = `Comenzar cuestionario completo (${totalQuestions} preguntas) 📚`;
  }

  return `
    <div class="quiz-intro-card">
      <div class="quiz-intro-header-banner">
        <div class="quiz-badge-header">
          <span class="quiz-badge-icon">📋</span>
          <span class="quiz-badge-name">${displayTitle}</span>
          <span class="vault-count-badge">${totalQuestions} preguntas</span>
        </div>
        <p class="quiz-intro-lead">${quiz.description}</p>
      </div>

      <div class="quiz-mode-selection-header">
        <h2 class="section-title">¿Cómo querés resolver este cuestionario?</h2>
        <p class="section-subtitle">Elegí la modalidad que mejor se adapte a tu objetivo de estudio:</p>
      </div>

      <div class="quiz-modes-grid">
        <button 
          type="button" 
          class="quiz-mode-card ${isBatches ? "active highlight-continuous" : ""}" 
          data-execution-mode="batches"
        >
          <div class="mode-card-header">
            <span class="mode-icon">🔄</span>
            <span class="mode-badge-pill continuous-pill">Repasar todas &bull; Sin repetir</span>
          </div>
          <h3 class="mode-card-title">Por Tandas (Repasar todas)</h3>
          <p class="mode-card-desc">Recorré todas las preguntas al azar en tandas de X en X sin repetir. Al terminar cada tanda ves tus resultados y avanzás a la siguiente hasta completar el 100%.</p>
          <div class="mode-card-footer">
            <span>🎯 De ${batchSize} en ${batchSize}</span>
            <span>🔄 100% del banco</span>
          </div>
        </button>

        <button 
          type="button" 
          class="quiz-mode-card ${isRandom ? "active highlight-random" : ""}" 
          data-execution-mode="random"
        >
          <div class="mode-card-header">
            <span class="mode-icon">🎲</span>
            <span class="mode-badge-pill random-pill">Simulacro Rápido</span>
          </div>
          <h3 class="mode-card-title">Muestra Aleatoria</h3>
          <p class="mode-card-desc">Elegí cuántas preguntas querés responder al azar (${randomCount} preguntas) para una práctica express o simulación rápida de examen.</p>
          <div class="mode-card-footer">
            <span>🎯 Elegís cuántas</span>
            <span>⏱️ Práctica rápida</span>
          </div>
        </button>

        <button 
          type="button" 
          class="quiz-mode-card ${isFull ? "active highlight-full" : ""}" 
          data-execution-mode="full"
        >
          <div class="mode-card-header">
            <span class="mode-icon">📚</span>
            <span class="mode-badge-pill pool-pill">Examen Completo</span>
          </div>
          <h3 class="mode-card-title">Cuestionario Completo</h3>
          <p class="mode-card-desc">Resolvé las ${totalQuestions} preguntas completas de corrido en una sola sesión intensiva para preparación exhaustiva.</p>
          <div class="mode-card-footer">
            <span>⏱️ ${quiz?.timeLimitMinutes || 120} minutos</span>
            <span>📝 ${totalQuestions} preguntas</span>
          </div>
        </button>
      </div>

      ${isBatches ? `
        <div class="batch-selector-box">
          <div class="batch-selector-title">
            <span class="batch-icon">🔄</span>
            <div>
              <strong>Tamaño de la tanda:</strong> ¿De a cuántas preguntas querés ir resolviendo?
              <p class="batch-sublabel">Irás respondiendo de a bloques al azar sin repetir ninguna hasta completar las ${totalQuestions} preguntas.</p>
            </div>
          </div>
          <div class="batch-presets-row">
            <button type="button" class="btn-batch-preset ${batchSize === 5 ? "active" : ""}" data-batch-size="5">5 en 5</button>
            <button type="button" class="btn-batch-preset ${batchSize === 10 ? "active" : ""}" data-batch-size="10">10 en 10 (Recomendado)</button>
            <button type="button" class="btn-batch-preset ${batchSize === 15 ? "active" : ""}" data-batch-size="15">15 en 15</button>
            <button type="button" class="btn-batch-preset ${batchSize === 20 ? "active" : ""}" data-batch-size="20">20 en 20</button>
            <div class="batch-custom-input-group">
              <label for="input-custom-batch">Personalizado:</label>
              <input type="number" id="input-custom-batch" min="1" max="${totalQuestions}" value="${batchSize}" class="input-batch-number" />
            </div>
          </div>
          <p class="batch-selector-help">
            💡 Resolverás una primera tanda de <strong>${batchSize}</strong> preguntas elegidas al azar. Al finalizarla, verás tus resultados explicados y un botón para avanzar automáticamente a las <strong>siguientes ${batchSize} preguntas sin repetir</strong> hasta agotar las ${totalQuestions} preguntas del cuestionario.
          </p>
        </div>
      ` : ""}

      ${isRandom ? `
        <div class="batch-selector-box random-selector-box">
          <div class="batch-selector-title">
            <span class="batch-icon">🎲</span>
            <div>
              <strong>Cantidad de preguntas al azar:</strong> ¿Cuántas querés resolver en este intento?
              <p class="batch-sublabel">Se seleccionará una muestra aleatoria entre las ${totalQuestions} preguntas disponibles de este cuestionario.</p>
            </div>
          </div>
          <div class="batch-presets-row">
            <button type="button" class="btn-random-preset ${randomCount === 4 ? "active" : ""}" data-random-count="4">4 preguntas (Simulacro UTN)</button>
            <button type="button" class="btn-random-preset ${randomCount === 10 ? "active" : ""}" data-random-count="10">10 preguntas</button>
            <button type="button" class="btn-random-preset ${randomCount === 15 ? "active" : ""}" data-random-count="15">15 preguntas</button>
            <button type="button" class="btn-random-preset ${randomCount === 20 ? "active" : ""}" data-random-count="20">20 preguntas</button>
            <div class="batch-custom-input-group">
              <label for="input-custom-random">Personalizado:</label>
              <input type="number" id="input-custom-random" min="1" max="${totalQuestions}" value="${randomCount}" class="input-batch-number" />
            </div>
          </div>
          <p class="batch-selector-help">
            💡 Se generará un intento puntual con <strong>${randomCount}</strong> preguntas al azar para evaluar rápidamente tus conocimientos.
          </p>
        </div>
      ` : ""}

      ${isFull ? `
        <div class="batch-selector-box full-info-box">
          <div class="batch-selector-title">
            <span class="batch-icon">📚</span>
            <div>
              <strong>Modo Completo:</strong> Resolverás las ${totalQuestions} preguntas de forma continua.
              <p class="batch-sublabel">Ideal para una simulación completa de examen con todas las preguntas juntas.</p>
            </div>
          </div>
          <p class="batch-selector-help">
            💡 Podrás navegar libremente entre las ${totalQuestions} preguntas en cualquier orden a través de la grilla de navegación y marcar preguntas para revisar.
          </p>
        </div>
      ` : ""}

      <div class="quiz-info-details-box">
        <table class="quiz-intro-meta-table">
          <tbody>
            <tr>
              <td>Cuestionario:</td>
              <td><strong>${displayTitle}</strong></td>
            </tr>
            <tr>
              <td>Modalidad activa:</td>
              <td><strong>${isBatches ? "Práctica por Tandas (Repasar todas)" : (isRandom ? `Muestra Aleatoria (${randomCount} preguntas)` : "Cuestionario Completo")}</strong></td>
            </tr>
            <tr>
              <td>Intentos permitidos:</td>
              <td>Sin límite</td>
            </tr>
            <tr>
              <td>Método de calificación:</td>
              <td>Calificación más alta</td>
            </tr>
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
          <button type="button" id="btn-export-questions-intro" class="btn btn-secondary btn-lg" title="Descargar todas las 92 preguntas con respuestas oficiales en un archivo TXT">
            📥 Exportar banco a TXT
          </button>
        </div>
      </div>
    </div>
  `;
}
