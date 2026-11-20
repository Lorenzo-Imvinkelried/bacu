/**
 * Componente: Modales de Acceso y Monitor de Conexiones en Tiempo Real
 * Responsabilidad: Renderizado puro del diálogo de contraseña y panel administrativo de sesiones
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas, sin emojis ni estilos inline)
 */

import { escapeHtml } from "./explanation-formatter.js";

/**
 * Renderizar el contenedor de modales ocultos (contraseña + panel en tiempo real)
 * @returns {string} HTML
 */
export function renderPresenceAdminShell() {
  return `
    ${renderPresenceAuthModal()}
    ${renderPresenceDashboardModal()}
  `;
}

function renderPresenceAuthModal() {
  return `
    <div id="presence-auth-modal" class="moodle-dialogue-base modal-backdrop-custom hidden">
      <div class="moodle-dialogue" role="dialog" aria-modal="true" aria-labelledby="presence-auth-title">
        <div class="moodle-dialogue-wrap">
          <div class="moodle-dialogue-hd">
            <h4 id="presence-auth-title" class="modal-title presence-hd-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Acceso de administración</span>
            </h4>
            <button type="button" class="btn-close-modal" id="btn-presence-auth-cancel-x" aria-label="Cerrar">&times;</button>
          </div>
          <form id="presence-auth-form">
            <div class="moodle-dialogue-bd">
              <p class="presence-auth-message">
                Ingresá la contraseña para abrir el panel de conexiones en tiempo real.
              </p>
              <label for="presence-auth-input" class="annotation-form-label">Contraseña:</label>
              <input
                type="password"
                id="presence-auth-input"
                class="input-annotation-author presence-auth-input"
                placeholder="Ingresá la contraseña..."
                autocomplete="current-password"
                required
              />
              <p id="presence-auth-error" class="presence-auth-error hidden" role="alert"></p>
            </div>
            <div class="moodle-dialogue-ft">
              <button type="button" id="btn-presence-auth-cancel" class="btn btn-secondary">Cancelar</button>
              <button type="submit" id="btn-presence-auth-submit" class="btn btn-primary">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

function renderPresenceDashboardModal() {
  return `
    <div id="presence-admin-modal" class="moodle-dialogue-base modal-backdrop-custom hidden">
      <div class="moodle-dialogue presence-admin-dialogue" role="dialog" aria-modal="true" aria-labelledby="presence-admin-title">
        <div class="moodle-dialogue-wrap presence-admin-wrap">
          <div class="moodle-dialogue-hd">
            <div class="presence-hd-title-group">
              <h4 id="presence-admin-title" class="modal-title presence-hd-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>Conexiones en Tiempo Real</span>
              </h4>
              <span id="presence-live-badge" class="presence-live-badge">
                <span class="presence-live-dot" aria-hidden="true"></span>
                <span>En vivo</span>
              </span>
            </div>
            <button type="button" class="btn-close-modal" id="btn-presence-admin-close-x" aria-label="Cerrar">&times;</button>
          </div>

          <div id="presence-admin-body" class="moodle-dialogue-bd presence-admin-body">
            ${renderPresenceLoadingState()}
          </div>

          <div class="moodle-dialogue-ft presence-admin-ft">
            <span class="presence-ft-hint">Se muestran sesiones con actividad en los últimos 95 segundos.</span>
            <div class="presence-ft-actions">
              <button type="button" id="btn-presence-admin-lock" class="btn btn-outline">Bloquear acceso</button>
              <button type="button" id="btn-presence-admin-close" class="btn btn-secondary">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderPresenceLoadingState() {
  return `
    <div class="presence-state-box">
      <span class="presence-spinner" aria-hidden="true"></span>
      <p>Conectando al monitor de sesiones activas...</p>
    </div>
  `;
}

/**
 * Renderizar el contenido dinámico del panel de usuarios conectados
 * @param {object} params
 * @returns {string} HTML
 */
export function renderPresenceDashboardContent({ sessions = [], localSessionId = "", lastUpdatedAt = Date.now(), errorMessage = "" }) {
  if (errorMessage) {
    return renderPresenceErrorState(errorMessage);
  }

  const now = Date.now();
  const uniqueIps = countUniqueIps(sessions);
  const uniqueClients = new Set(sessions.map((s) => s.clientId || s.sessionId)).size;
  const updatedTimeStr = formatClockTime(lastUpdatedAt);

  return `
    <div class="presence-kpi-grid">
      <div class="presence-kpi-card presence-kpi-primary">
        <span class="presence-kpi-label">Sesiones conectadas</span>
        <strong class="presence-kpi-value">${sessions.length}</strong>
        <span class="presence-kpi-sub">${uniqueClients} ${uniqueClients === 1 ? "dispositivo único" : "dispositivos únicos"}</span>
      </div>
      <div class="presence-kpi-card">
        <span class="presence-kpi-label">IPs distintas</span>
        <strong class="presence-kpi-value">${uniqueIps}</strong>
        <span class="presence-kpi-sub">Direcciones públicas detectadas</span>
      </div>
      <div class="presence-kpi-card">
        <span class="presence-kpi-label">Última actualización</span>
        <strong class="presence-kpi-value presence-kpi-clock">${updatedTimeStr}</strong>
        <span class="presence-kpi-sub">Sincronizado vía Firestore</span>
      </div>
    </div>

    ${sessions.length > 0 ? renderSessionsTable(sessions, localSessionId, now) : renderEmptySessionsState()}
  `;
}

function renderSessionsTable(sessions, localSessionId, now) {
  const rowsHtml = sessions.map((s) => renderSessionRow(s, localSessionId, now)).join("");
  return `
    <div class="presence-table-wrap">
      <table class="presence-table">
        <thead>
          <tr>
            <th>Dirección IP</th>
            <th>Actividad actual</th>
            <th>Dispositivo</th>
            <th>Tiempo conectado</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

function renderSessionRow(session, localSessionId, now) {
  const isSelf = session.sessionId === localSessionId;
  const ipText = escapeHtml(session.ip || "No disponible");
  const subjectText = escapeHtml(session.subjectName || "Sin asignatura");
  const quizText = escapeHtml(session.quizTitle || "Cuestionario");
  const unitSuffix = session.unitName ? ` · ${escapeHtml(session.unitName)}` : "";
  const statusLabel = escapeHtml(session.statusLabel || "Activo");
  const statusClass = getStatusPillClass(session.status);
  const deviceLabel = escapeHtml(session.deviceLabel || "Navegador web");
  const deviceType = escapeHtml(session.deviceType || "Escritorio");
  const isHiddenTab = session.visibility === "hidden";
  const connectedDuration = formatDuration(now - (session.connectedAt || session.lastSeen || now));
  const lastSeenAgo = formatSecondsAgo(now - (session.lastSeen || now));

  return `
    <tr class="${isSelf ? "presence-row-self" : ""}">
      <td>
        <div class="presence-ip-cell">
          <code class="presence-ip-chip">${ipText}</code>
          ${isSelf ? `<span class="presence-self-tag">Tu sesión</span>` : ""}
        </div>
      </td>
      <td>
        <div class="presence-activity-cell">
          <span class="presence-activity-title">${subjectText}${unitSuffix}</span>
          <span class="presence-activity-quiz">${quizText}</span>
          <div class="presence-badges-row">
            <span class="presence-status-pill ${statusClass}">${statusLabel}</span>
            ${session.isMultiplayer ? `<span class="presence-status-pill status-multi">Sala en vivo</span>` : ""}
          </div>
        </div>
      </td>
      <td>
        <div class="presence-device-cell">
          <span class="presence-device-main">${deviceLabel}</span>
          <span class="presence-device-sub">${deviceType} · ${isHiddenTab ? "Pestaña en segundo plano" : "Pestaña activa"}</span>
        </div>
      </td>
      <td>
        <div class="presence-time-cell">
          <span class="presence-time-main">${connectedDuration}</span>
          <span class="presence-time-sub">Latido ${lastSeenAgo}</span>
        </div>
      </td>
    </tr>
  `;
}

function renderEmptySessionsState() {
  return `
    <div class="presence-state-box">
      <p>No hay sesiones activas registradas en este momento.</p>
      <small>Si acabás de abrir la aplicación, aguardá unos segundos a que se registre el primer latido.</small>
    </div>
  `;
}

function renderPresenceErrorState(errorMessage) {
  return `
    <div class="presence-error-box" role="alert">
      <strong>No se pudo leer la colección de sesiones activas en Firestore.</strong>
      <p>${escapeHtml(errorMessage)}</p>
      <small>Verificá que las reglas de Firestore del proyecto permitan lectura y escritura en la colección <code>active_sessions</code>.</small>
    </div>
  `;
}

function countUniqueIps(sessions) {
  const validIps = new Set();
  for (const s of sessions) {
    if (s.ip && s.ip !== "No disponible") validIps.add(s.ip);
  }
  return validIps.size;
}

function getStatusPillClass(status) {
  if (status === "attempt") return "status-attempt";
  if (status === "review") return "status-review";
  if (status === "summary") return "status-summary";
  return "status-intro";
}

function formatClockTime(timestamp) {
  try {
    return new Date(timestamp).toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  } catch (_) {
    return "--:--:--";
  }
}

function formatDuration(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  if (totalSec < 60) return `${totalSec} s`;
  const mins = Math.floor(totalSec / 60);
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return `${hours} h ${String(remMins).padStart(2, "0")} min`;
}

function formatSecondsAgo(ms) {
  const sec = Math.max(0, Math.floor(ms / 1000));
  if (sec <= 2) return "recién";
  return `hace ${sec} s`;
}
