/**
 * Orquestador de Eventos del DOM
 * Responsabilidad: Registrar los escuchadores delegados en el elemento raíz
 * Cumple con directivas de arquitectura en AGENTS.md (< 300 líneas)
 */

import { handleClickEvent } from "./click-handlers.js";
import { handleFormChangeEvent, handleRealtimeInputEvent } from "./form-handlers.js";

/**
 * Registrar y delegar todos los eventos de la interfaz
 * @param {HTMLElement} root
 */
export function setupEventListeners(root) {
  root.addEventListener("click", handleClickEvent);
  root.addEventListener("change", handleFormChangeEvent);
  root.addEventListener("input", handleRealtimeInputEvent);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("how-to-create-modal")?.classList.add("hidden");
      document.getElementById("moodle-confirm-modal")?.classList.add("hidden");
    }
  });
}
