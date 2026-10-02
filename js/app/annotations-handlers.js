/**
 * Manejador de Eventos de Anotaciones
 * Responsabilidad: Procesar apertura/cierre, envío, edición y eliminación de notas colaborativas
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Controladores, < 300 líneas)
 */

import { 
  fetchAnnotationsForQuestion, 
  addAnnotationForQuestion,
  updateAnnotation,
  deleteAnnotation,
  fetchAnnotationCounts
} from "../core/annotations-service.js";
import { isFirebaseConfigured } from "../core/firebase-config.js";
import { renderAnnotationsContentHtml, updateAnnotationBadge } from "../components/annotations-component.js";
import { escapeHtml } from "../components/explanation-formatter.js";

/**
 * Escuchador delegado para eventos de clic en el bloque de anotaciones
 * @param {MouseEvent} e
 */
export async function handleAnnotationsClickEvent(e) {
  // 1. Alternar visualización del panel
  const toggleBtn = e.target.closest("[data-toggle-annotations-qid]");
  if (toggleBtn) {
    const qId = toggleBtn.getAttribute("data-toggle-annotations-qid");
    const panel = document.getElementById(`annotations-panel-${qId}`);
    if (!panel) return;

    const isCurrentlyHidden = panel.classList.contains("hidden");
    if (isCurrentlyHidden) {
      panel.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
      await loadAndDisplayAnnotations(qId);
    } else {
      panel.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
    return;
  }

  // 2. Eliminar nota
  const deleteBtn = e.target.closest("[data-action='delete-note']");
  if (deleteBtn) {
    const noteId = deleteBtn.getAttribute("data-note-id");
    const qId = deleteBtn.getAttribute("data-qid");
    if (!noteId || !qId) return;

    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este comentario?");
    if (!confirmDelete) return;

    deleteBtn.disabled = true;
    deleteBtn.textContent = "⏳";

    try {
      await deleteAnnotation(noteId, qId);
      await loadAndDisplayAnnotations(qId);
    } catch (err) {
      console.error("Error al eliminar anotación:", err);
      alert("Hubo un error al eliminar el comentario. Revisa tu conexión.");
      deleteBtn.disabled = false;
      deleteBtn.textContent = "🗑️";
    }
    return;
  }

  // 3. Activar modo edición
  const editBtn = e.target.closest("[data-action='edit-note']");
  if (editBtn) {
    const noteId = editBtn.getAttribute("data-note-id");
    const qId = editBtn.getAttribute("data-qid");
    const card = document.getElementById(`note-${noteId}`);
    const bodyEl = document.getElementById(`note-body-${noteId}`);
    if (!card || !bodyEl) return;

    const textView = bodyEl.querySelector(".annotation-text-view");
    const currentText = textView ? textView.textContent.trim() : "";
    card.dataset.originalText = currentText;

    bodyEl.innerHTML = `
      <div class="annotation-edit-container">
        <textarea class="textarea-annotation-edit" maxlength="600" rows="3">${escapeHtml(currentText)}</textarea>
        <div class="annotation-edit-actions">
          <button type="button" class="btn-annotation-action btn-cancel-edit" data-action="cancel-edit" data-note-id="${noteId}" data-qid="${qId}">
            Cancelar
          </button>
          <button type="button" class="btn-annotation-action btn-save-edit" data-action="save-edit" data-note-id="${noteId}" data-qid="${qId}">
            Guardar cambios
          </button>
        </div>
      </div>
    `;

    const editArea = bodyEl.querySelector(".textarea-annotation-edit");
    if (editArea) {
      editArea.focus();
      editArea.setSelectionRange(editArea.value.length, editArea.value.length);
    }
    return;
  }

  // 4. Cancelar edición
  const cancelBtn = e.target.closest("[data-action='cancel-edit']");
  if (cancelBtn) {
    const noteId = cancelBtn.getAttribute("data-note-id");
    const card = document.getElementById(`note-${noteId}`);
    const bodyEl = document.getElementById(`note-body-${noteId}`);
    if (!card || !bodyEl) return;

    const originalText = card.dataset.originalText || "";
    bodyEl.innerHTML = `<div class="annotation-text-view">${escapeHtml(originalText)}</div>`;
    return;
  }

  // 5. Guardar edición
  const saveBtn = e.target.closest("[data-action='save-edit']");
  if (saveBtn) {
    const noteId = saveBtn.getAttribute("data-note-id");
    const qId = saveBtn.getAttribute("data-qid");
    const bodyEl = document.getElementById(`note-body-${noteId}`);
    if (!bodyEl) return;

    const editArea = bodyEl.querySelector(".textarea-annotation-edit");
    const newText = editArea ? editArea.value.trim() : "";

    if (!newText) {
      alert("El comentario no puede estar vacío.");
      editArea?.focus();
      return;
    }

    saveBtn.disabled = true;
    saveBtn.textContent = "Guardando...";

    try {
      await updateAnnotation(noteId, newText);
      await loadAndDisplayAnnotations(qId);
    } catch (err) {
      console.error("Error al actualizar anotación:", err);
      alert("Hubo un error al guardar los cambios del comentario.");
      saveBtn.disabled = false;
      saveBtn.textContent = "Guardar cambios";
    }
    return;
  }
}

/**
 * Escuchador delegado para envíos de formularios de nuevas anotaciones
 * @param {SubmitEvent} e
 */
export async function handleAnnotationsSubmitEvent(e) {
  const form = e.target.closest(".form-add-annotation");
  if (!form) return;

  e.preventDefault();

  const qId = form.getAttribute("data-qid");
  if (!qId) return;

  const authorInput = document.getElementById(`annotation-author-${qId}`);
  const textInput = document.getElementById(`annotation-text-${qId}`);
  const submitBtn = form.querySelector(".btn-submit-annotation");

  const author = authorInput ? authorInput.value : "";
  const text = textInput ? textInput.value : "";

  if (!text || !text.trim()) {
    textInput?.focus();
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Publicando...";
  }

  try {
    await addAnnotationForQuestion(qId, author, text);
    if (textInput) textInput.value = "";
    await loadAndDisplayAnnotations(qId);
  } catch (err) {
    console.error("Error al publicar anotación:", err);
    alert("Hubo un error al publicar la anotación. Revisa la consola o tu conexión.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Publicar anotación";
    }
  }
}

/**
 * Cargar y renderizar las notas dentro del cuerpo del panel
 * @param {string} qId
 */
async function loadAndDisplayAnnotations(qId) {
  const loadingEl = document.getElementById(`annotations-loading-${qId}`);
  const bodyEl = document.getElementById(`annotations-body-${qId}`);
  if (!bodyEl) return;

  if (loadingEl) loadingEl.style.display = "flex";

  try {
    const isCloud = isFirebaseConfigured();
    const annotations = await fetchAnnotationsForQuestion(qId);
    updateAnnotationBadge(qId, annotations.length);
    bodyEl.innerHTML = renderAnnotationsContentHtml(qId, annotations, isCloud);
  } catch (err) {
    console.error("Error al cargar notas de pregunta:", qId, err);
    bodyEl.innerHTML = `
      <div class="annotations-empty-state">
        <p>No se pudieron cargar las anotaciones en este momento.</p>
        <small>${err.message || "Error de red"}</small>
      </div>
    `;
  } finally {
    if (loadingEl) loadingEl.style.display = "none";
  }
}

/**
 * Refrescar en segundo plano los contadores en las solapas de las preguntas dadas
 * @param {Array<object>} questions
 */
export async function refreshAnnotationCountsForQuestions(questions) {
  if (!questions || !questions.length) return;
  const qIds = questions.map(q => q.id).filter(Boolean);
  if (!qIds.length) return;

  try {
    const counts = await fetchAnnotationCounts(qIds);
    qIds.forEach(id => {
      updateAnnotationBadge(id, counts[id] || 0);
    });
  } catch (err) {
    console.warn("No se pudieron refrescar los contadores de anotaciones:", err);
  }
}
