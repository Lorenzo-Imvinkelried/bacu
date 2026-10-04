/**
 * Componente: Modal de Sala de Estudio Multijugador
 * Responsabilidad: Renderizar interfaz para crear, unirse y gestionar salas colaborativas en tiempo real
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

import { multiplayerService } from "../core/multiplayer-service.js";

const PALETTE = [
  "#0070f3", "#10b981", "#8b5cf6", "#f59e0b",
  "#ec4899", "#06b6d4", "#ef4444", "#14b8a6"
];

/**
 * Renderizar modal multijugador completo
 * @param {object} currentState
 * @returns {string} HTML
 */
export function renderMultiplayerModal(currentState) {
  const isInRoom = multiplayerService.isInRoom();
  const room = multiplayerService.getCurrentRoom();
  const user = multiplayerService.localUser;

  const colorSwatchesHtml = PALETTE.map(color => `
    <button 
      type="button" 
      class="mp-color-swatch ${user.color === color ? "active" : ""}" 
      style="background-color: ${color};" 
      data-color="${color}" 
      title="Elegir color ${color}"
    ></button>
  `).join("");

  let contentHtml = "";

  if (isInRoom && room) {
    const participantsList = Object.values(room.participants || {});

    contentHtml = `
      <div class="mp-room-info-card">
        <div class="mp-room-info-title">Código de Sala Activa</div>
        <div class="mp-room-code-display" id="mp-display-code">${room.code}</div>
        <div style="text-align: center; margin-top: 0.5rem;">
          <button type="button" class="btn btn-outline btn-sm" id="btn-mp-copy-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span id="label-mp-copy-link">Copiar Enlace de Invitación</span>
          </button>
        </div>
      </div>

      <div class="mp-form-group">
        <label class="mp-form-label">Compañeros en la Sala (${participantsList.length}):</label>
        <div class="mp-participants-list" id="mp-participants-container">
          ${participantsList.map(p => `
            <div class="mp-participant-row">
              <div class="mp-participant-info">
                <span class="mp-user-dot" style="background-color: ${p.color || "#0070f3"};"></span>
                <strong>${escapeHtml(p.name)}</strong>
                ${p.id === user.id ? `<span class="mp-user-chip is-self" style="background: none; color: inherit; padding: 0;"></span>` : ""}
              </div>
              <span class="mp-badge-role ${p.isHost ? "is-host" : ""}">
                ${p.isHost ? "Anfitrión" : "Compañero"}
              </span>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="margin-top: 1rem; font-size: 0.82rem; color: #64748b; line-height: 1.4;">
        <p>✨ <strong>¡Todo sincronizado en vivo!</strong> Verán los cursores de cada uno, las opciones que van seleccionando y avanzarán a la par por las preguntas.</p>
      </div>
    `;
  } else {
    contentHtml = `
      <div class="mp-modal-tabs">
        <button type="button" class="mp-modal-tab active" data-mp-tab="create" id="mp-tab-btn-create">
          Crear Nueva Sala
        </button>
        <button type="button" class="mp-modal-tab" data-mp-tab="join" id="mp-tab-btn-join">
          Unirse con Código
        </button>
      </div>

      <div class="mp-modal-body">
        <div class="mp-form-group">
          <label for="mp-input-name" class="mp-form-label">Tu Nombre o Alias:</label>
          <input 
            type="text" 
            id="mp-input-name" 
            class="mp-form-input" 
            value="${escapeHtml(user.name)}" 
            placeholder="Ej: Lorenzo" 
            maxlength="25"
          />
        </div>

        <div class="mp-form-group">
          <label class="mp-form-label">Tu Color de Cursor:</label>
          <div class="mp-color-picker-row">
            ${colorSwatchesHtml}
          </div>
        </div>

        <!-- Panel Crear Sala -->
        <div id="mp-panel-create" class="mp-tab-panel">
          <div class="mp-room-info-card" style="margin-top: 1rem;">
            <div class="mp-room-info-title">Configuración del Cuestionario</div>
            <p style="margin: 0.3rem 0; font-size: 0.88rem; color: #1e293b;">
              <strong>Modalidad:</strong> ${formatModeName(currentState.executionMode || "batches")}
            </p>
            <p style="margin: 0; font-size: 0.8rem; color: #64748b;">
              Se generará una sala vinculada a las preguntas de este parcial para que ambos resuelvan juntos a la par.
            </p>
          </div>
        </div>

        <!-- Panel Unirse a Sala -->
        <div id="mp-panel-join" class="mp-tab-panel hidden">
          <div class="mp-form-group" style="margin-top: 1rem;">
            <label for="mp-input-room-code" class="mp-form-label">Código de Sala (ej: BACU-842):</label>
            <input 
              type="text" 
              id="mp-input-room-code" 
              class="mp-form-input mp-code-input" 
              placeholder="BACU-XXXX" 
              maxlength="10"
              autocomplete="off"
            />
            <p style="margin: 0.4rem 0 0 0; font-size: 0.8rem; color: #64748b;">
              Pegá el código de 4 a 6 letras que te compartió tu compañero o anfitrión.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div id="multiplayer-modal" class="mp-modal-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="mp-modal-title">
      <div class="mp-modal-container">
        <div class="mp-modal-header">
          <h3 id="mp-modal-title" class="mp-modal-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>${isInRoom ? "Sala de Estudio en Vivo" : "Estudio Colaborativo (En Vivo)"}</span>
          </h3>
          <button type="button" class="mp-modal-close" id="btn-mp-modal-close" aria-label="Cerrar ventana">&times;</button>
        </div>

        <div id="mp-modal-content-area">
          ${contentHtml}
        </div>

        <div class="mp-modal-footer">
          ${isInRoom ? `
            <button type="button" class="btn btn-danger" id="btn-mp-leave-room">Salir de la Sala</button>
            <button type="button" class="btn btn-primary" id="btn-mp-done-modal">Entendido / Continuar</button>
          ` : `
            <button type="button" class="btn btn-outline" id="btn-mp-cancel">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btn-mp-create-room">Crear Sala de Estudio</button>
            <button type="button" class="btn btn-primary hidden" id="btn-mp-join-room">Unirse a la Sala</button>
          `}
        </div>
      </div>
    </div>
  `;
}

function formatModeName(mode) {
  switch (mode) {
    case "batches": return "Por Tandas (Repasar todas)";
    case "random": return "Muestra Aleatoria";
    case "full": return "Cuestionario Completo";
    case "quick": return "Repaso Rápido (1 a 1)";
    default: return "Por Tandas";
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
