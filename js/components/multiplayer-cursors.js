/**
 * Componente: Renderizado de Cursores Multijugador en Tiempo Real
 * Responsabilidad: Manejar la capa flotante de cursores remotos con aceleración por hardware y animación suave
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

const IDLE_TIMEOUT_MS = 3500;
const peerCursors = new Map();
let cursorsLayer = null;

/**
 * Obtener o inicializar la capa contenedora de cursores
 * @returns {HTMLElement}
 */
export function getOrCreateCursorsLayer() {
  if (cursorsLayer && document.body.contains(cursorsLayer)) {
    return cursorsLayer;
  }
  let layer = document.getElementById("multiplayer-cursors-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.id = "multiplayer-cursors-layer";
    document.body.appendChild(layer);
  }
  cursorsLayer = layer;
  return cursorsLayer;
}

/**
 * Generar el elemento DOM del cursor remoto
 * @param {string} userId
 * @param {string} name
 * @param {string} color
 * @returns {HTMLElement}
 */
function createCursorElement(userId, name, color) {
  const el = document.createElement("div");
  el.className = "mp-remote-cursor";
  el.id = `mp-cursor-${userId}`;
  el.setAttribute("aria-hidden", "true");

  el.innerHTML = `
    <svg class="mp-cursor-svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 3L11.5 21L14.5 13.5L22 10.5L4 3Z" fill="${color}" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>
    <div class="mp-cursor-badge" style="background-color: ${color};">
      <span>${escapeHtml(name)}</span>
    </div>
  `;

  return el;
}

/**
 * Actualizar o crear la posición de un cursor remoto
 * @param {string} userId
 * @param {string} name
 * @param {string} color
 * @param {object} coords - { pageX, pageY, pageXRatio, pageYRatio }
 */
export function updatePeerCursor(userId, name, color, coords) {
  if (!userId || !coords) return;

  const layer = getOrCreateCursorsLayer();
  let peer = peerCursors.get(userId);

  if (!peer) {
    const element = createCursorElement(userId, name || "Compañero", color || "#0070f3");
    layer.appendChild(element);
    peer = { element, timer: null, name, color };
    peerCursors.set(userId, peer);
  }

  // Calcular posición absoluta en la página
  let x = coords.pageX;
  let y = coords.pageY;

  // Si se enviaron proporciones normalizadas de pantalla
  if (coords.pageXRatio !== undefined) {
    const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    x = coords.pageXRatio * docWidth;
  }
  if (coords.pageYRatio !== undefined) {
    const docHeight = Math.max(document.documentElement.scrollHeight, 1000);
    y = coords.pageYRatio * docHeight;
  }

  // Aplicar posición con transformación GPU suave
  peer.element.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
  peer.element.classList.remove("is-idle", "is-hidden");

  // Temporizador para atenuar o ocultar cuando esté inactivo
  if (peer.timer) clearTimeout(peer.timer);
  peer.timer = setTimeout(() => {
    peer.element.classList.add("is-idle");
  }, IDLE_TIMEOUT_MS);
}

/**
 * Eliminar el cursor de un usuario desconectado
 * @param {string} userId
 */
export function removePeerCursor(userId) {
  const peer = peerCursors.get(userId);
  if (peer) {
    if (peer.timer) clearTimeout(peer.timer);
    peer.element.remove();
    peerCursors.delete(userId);
  }
}

/**
 * Limpiar todos los cursores de la pantalla
 */
export function clearAllCursors() {
  peerCursors.forEach((peer) => {
    if (peer.timer) clearTimeout(peer.timer);
    peer.element.remove();
  });
  peerCursors.clear();
  if (cursorsLayer) {
    cursorsLayer.innerHTML = "";
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
