/**
 * Componente: Anotaciones de la Comunidad (.annotations-panel)
 * Responsabilidad: Renderizado puro del botón, panel de comentarios y formulario
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

import { isFirebaseConfigured } from "../core/firebase-config.js";
import { getStoredAuthorName } from "../core/annotations-service.js";
import { escapeHtml } from "./explanation-formatter.js";

/**
 * Renderizar el contenedor principal de anotaciones para una pregunta
 * @param {string} questionId
 * @returns {string} HTML
 */
export function renderAnnotationsSection(questionId) {
  const isCloud = isFirebaseConfigured();
  const statusBadge = isCloud 
    ? `<span class="badge-cloud-status cloud-on" title="Conectado a Firebase Firestore">☁️ Comunitario</span>`
    : `<span class="badge-cloud-status cloud-off" title="Guardado local. Conecta Firebase para compartir con todos.">💾 Local</span>`;

  return `
    <div class="question-annotations-container" data-annotations-qid="${questionId}">
      <div class="annotations-header-bar">
        <button 
          type="button" 
          class="btn-toggle-annotations" 
          data-toggle-annotations-qid="${questionId}"
          aria-expanded="false"
          aria-controls="annotations-panel-${questionId}"
        >
          <span class="annotations-icon" aria-hidden="true">💬</span>
          <span class="annotations-title">Anotaciones y Aportes</span>
          ${statusBadge}
          <span class="annotations-chevron">▼</span>
        </button>
      </div>

      <div class="annotations-panel hidden" id="annotations-panel-${questionId}">
        <div class="annotations-loading" id="annotations-loading-${questionId}">
          <span class="annotations-spinner"></span> Cargando notas de la comunidad...
        </div>
        <div class="annotations-content-body" id="annotations-body-${questionId}">
          <!-- Se inyecta dinámicamente al abrir o enviar nota -->
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderizar la lista de anotaciones dentro del panel
 * @param {string} questionId
 * @param {Array<object>} annotations
 * @param {boolean} isCloud
 * @returns {string} HTML
 */
export function renderAnnotationsContentHtml(questionId, annotations = [], isCloud = true) {
  const savedAuthor = getStoredAuthorName() || "";

  const notesListHtml = annotations.length > 0
    ? annotations.map(note => {
        const dateStr = formatDate(note.createdAt);
        const authorInitial = (note.author || "A").trim().charAt(0).toUpperCase();
        const noteBadge = note.id?.startsWith("local_")
          ? `<span class="note-type-badge local" title="Guardada en tu navegador">Local</span>`
          : `<span class="note-type-badge cloud" title="Sincronizada en Firebase">Comunidad</span>`;

        return `
          <div class="annotation-card" id="note-${note.id}">
            <div class="annotation-card-header">
              <div class="annotation-avatar">${authorInitial}</div>
              <div class="annotation-meta">
                <span class="annotation-author">${escapeHtml(note.author || "Estudiante anónimo")}</span>
                <span class="annotation-date">${dateStr}</span>
              </div>
              ${noteBadge}
            </div>
            <div class="annotation-card-body">
              ${escapeHtml(note.text)}
            </div>
          </div>
        `;
      }).join("")
    : `
      <div class="annotations-empty-state">
        <span class="empty-icon">📝</span>
        <p>Todavía no hay anotaciones para esta pregunta.</p>
        <small>¡Sé el primero en compartir una justificación, mnemotecnia o aclaración de clase!</small>
      </div>
    `;

  const bannerNotice = !isCloud
    ? `
      <div class="annotations-config-notice">
        <span class="notice-icon">💡</span>
        <span>
          <strong>Modo local activo:</strong> Las notas que escribas se guardan en tu navegador. 
          Para que se sincronicen en <code>bacu.vercel.app</code> para todos, pegá tus credenciales en <code>firebase-config.js</code>.
        </span>
      </div>
    `
    : "";

  return `
    ${bannerNotice}
    <div class="annotations-list">
      ${notesListHtml}
    </div>

    <form class="form-add-annotation" data-qid="${questionId}">
      <div class="form-annotation-row">
        <label for="annotation-author-${questionId}" class="annotation-form-label">Tu nombre o apodo:</label>
        <input 
          type="text" 
          id="annotation-author-${questionId}" 
          class="input-annotation-author" 
          placeholder="Ej: Lorenzo, Martín..." 
          value="${escapeHtml(savedAuthor)}"
          maxlength="40"
        />
      </div>

      <div class="form-annotation-row">
        <label for="annotation-text-${questionId}" class="annotation-form-label">Aporte, nota o tip para esta pregunta:</label>
        <textarea 
          id="annotation-text-${questionId}" 
          class="textarea-annotation-text" 
          rows="2" 
          placeholder="Escribí aquí una aclaración, tip o apunte sobre esta pregunta..."
          required
          maxlength="600"
        ></textarea>
      </div>

      <div class="form-annotation-actions">
        <button type="submit" class="btn btn-primary btn-sm btn-submit-annotation" data-qid="${questionId}">
          Publicar anotación
        </button>
      </div>
    </form>
  `;
}

/**
 * Formatear fecha para mostrar en las tarjetas
 */
function formatDate(dateInput) {
  if (!dateInput) return "Recientemente";
  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return "Recientemente";
    return d.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch (_) {
    return "Recientemente";
  }
}
