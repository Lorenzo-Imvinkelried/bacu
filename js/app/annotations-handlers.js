/**
 * Manejador de Eventos de Anotaciones
 * Responsabilidad: Procesar clics de apertura/cierre y envío de notas colaborativas
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Controladores, < 300 líneas)
 */

import { 
  fetchAnnotationsForQuestion, 
  addAnnotationForQuestion 
} from "../core/annotations-service.js";
import { isFirebaseConfigured } from "../core/firebase-config.js";
import { renderAnnotationsContentHtml } from "../components/annotations-component.js";

/**
 * Escuchador delegado para eventos de clic en el bloque de anotaciones
 * @param {MouseEvent} e
 */
export async function handleAnnotationsClickEvent(e) {
  const toggleBtn = e.target.closest("[data-toggle-annotations-qid]");
  if (!toggleBtn) return;

  const qId = toggleBtn.getAttribute("data-toggle-annotations-qid");
  const panel = document.getElementById(`annotations-panel-${qId}`);
  if (!panel) return;

  const isCurrentlyHidden = panel.classList.contains("hidden");

  if (isCurrentlyHidden) {
    // Abrir panel
    panel.classList.remove("hidden");
    toggleBtn.setAttribute("aria-expanded", "true");
    await loadAndDisplayAnnotations(qId);
  } else {
    // Cerrar panel
    panel.classList.add("hidden");
    toggleBtn.setAttribute("aria-expanded", "false");
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

  // Estado de carga en el botón
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Publicando...";
  }

  try {
    await addAnnotationForQuestion(qId, author, text);
    // Limpiar textarea y refrescar lista
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
