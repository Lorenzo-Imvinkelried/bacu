/**
 * Utilidades DOM para Modo Multijugador
 * Responsabilidad: Captura de mouse local throttled y pintado de etiquetas/halos de selección ajena
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

let throttleCursorTimer = null;
let lastCursorCoords = null;

/**
 * Escuchar movimientos locales del cursor y emitirlos con throttle de 35ms
 * @param {Function} onCursorMove
 */
export function setupLocalCursorTracking(onCursorMove) {
  document.addEventListener("pointermove", (e) => {
    const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 1);
    const docHeight = Math.max(document.documentElement.scrollHeight, 1000);

    lastCursorCoords = {
      pageX: e.pageX,
      pageY: e.pageY,
      pageXRatio: parseFloat((e.pageX / docWidth).toFixed(4)),
      pageYRatio: parseFloat((e.pageY / docHeight).toFixed(4))
    };

    if (!throttleCursorTimer) {
      throttleCursorTimer = setTimeout(() => {
        if (lastCursorCoords) onCursorMove(lastCursorCoords);
        throttleCursorTimer = null;
      }, 35);
    }
  }, { passive: true });
}

/**
 * Actualizar etiquetas de compañeros en las opciones de preguntas en el DOM
 * @param {Map<string, Record<string, object>>} peerSelectionsMap
 */
export function renderPeerSelectionBadges(peerSelectionsMap) {
  document.querySelectorAll(".peer-selection-tag").forEach(el => el.remove());
  document.querySelectorAll(".peer-selected").forEach(el => {
    el.classList.remove("peer-selected");
    el.style.boxShadow = "";
  });

  for (const [qId, optionsMap] of peerSelectionsMap.entries()) {
    for (const [optId, user] of Object.entries(optionsMap)) {
      const inputEl = document.querySelector(`.option-input[data-question-id="${qId}"][data-option-id="${optId}"]`);
      if (inputEl) {
        const row = inputEl.closest(".r0, .r1");
        if (row) {
          row.classList.add("peer-selected");
          row.style.boxShadow = `inset 3px 0 0 ${user.color || "#0070f3"}, 0 0 8px rgba(0, 112, 243, 0.15)`;

          const label = row.querySelector(".option-label");
          if (label && !row.querySelector(`.peer-tag-${user.id}`)) {
            const badge = document.createElement("span");
            badge.className = `peer-selection-tag peer-tag-${user.id}`;
            badge.style.backgroundColor = user.color || "#0070f3";
            badge.innerHTML = `
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span>${escapeHtml(user.name)}</span>
            `;
            label.appendChild(badge);
          }
        }
      }
    }
  }
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
