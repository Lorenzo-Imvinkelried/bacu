/**
 * Componente: Barra Superior de Sala Multijugador Activa
 * Responsabilidad: Mostrar el estado de sincronización en vivo, código de sala y compañeros conectados
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

import { multiplayerService } from "../core/multiplayer-service.js";

/**
 * Renderizar barra persistente de sesión colaborativa
 * @returns {string} HTML
 */
export function renderMultiplayerBar() {
  if (!multiplayerService.isInRoom()) return "";

  const room = multiplayerService.getCurrentRoom();
  const user = multiplayerService.localUser;
  const participants = Object.values(room.participants || {});

  return `
    <div class="mp-session-bar" id="mp-active-session-bar">
      <div class="mp-bar-left">
        <span class="mp-live-pill">
          <span class="mp-live-pulse-dot"></span>
          <span>En Vivo</span>
        </span>
        <span class="mp-room-code-tag" title="Código de sala compartida">${room.code}</span>
        <div class="mp-bar-participants">
          ${participants.map(p => `
            <span 
              class="mp-user-chip ${p.id === user.id ? "is-self" : ""}" 
              style="background-color: ${p.color || "#0070f3"};"
              title="${escapeHtml(p.name)} (${p.isHost ? "Anfitrión" : "Conectado"})"
            >
              ${escapeHtml(p.name)}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="mp-bar-actions">
        <button type="button" class="btn-mp-action" id="btn-mp-bar-copy" title="Copiar enlace directo de invitación a la sala">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span id="label-mp-bar-copy">Copiar Enlace</span>
        </button>
        <button type="button" class="btn-mp-action" id="btn-mp-bar-manage" title="Ver detalles y participantes de la sala">
          👥 Sala
        </button>
        <button type="button" class="btn-mp-action btn-mp-leave" id="btn-mp-bar-leave" title="Abandonar sesión colaborativa">
          Salir
        </button>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
