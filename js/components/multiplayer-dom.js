/**
 * Utilidades DOM para Modo Multijugador
 * Responsabilidad: Captura de mouse local throttled y pintado de etiquetas/halos de selección ajena
 * Cumple con directivas en AGENTS.md (Capa de Componentes, < 300 líneas)
 */

let throttleCursorTimer = null;
let lastCursorCoords = null;

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

export function getPeerSelectionInfo(qId, optId, peerSelectionsMap) {
  let user = peerSelectionsMap?.get(qId)?.[optId];
  if (!user && typeof window !== "undefined" && window._bacuCurrentRoom?.quizState?.selections) {
    const qSels = window._bacuCurrentRoom.quizState.selections[qId] || {};
    for (const [uId, sel] of Object.entries(qSels)) {
      if (sel && sel.optionId === optId && uId !== window._bacuLocalUserId) {
        user = { id: uId, name: sel.userName || "Compañero", color: sel.userColor || "#0070f3" };
        break;
      }
    }
  }
  if (!user) return null;
  return {
    isSelected: true,
    user,
    badgeHtml: `
      <span class="peer-selection-tag peer-tag-${user.id}" style="background-color: ${user.color || '#0070f3'}">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <span>${escapeHtml(user.name)}</span>
      </span>
    `
  };
}

export function renderPeerSelectionBadges(peerSelectionsMap) {
  document.querySelectorAll(".peer-selection-tag").forEach(el => el.remove());
  document.querySelectorAll(".peer-selected").forEach(el => {
    el.classList.remove("peer-selected");
    el.style.boxShadow = "";
  });

  if (!peerSelectionsMap) return;
  for (const [qId, optionsMap] of peerSelectionsMap.entries()) {
    if (!optionsMap) continue;
    for (const [optId, user] of Object.entries(optionsMap)) {
      if (!user) continue;
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

export function renderWaitingPartnerNotice(question, state) {
  if (!state?.isMultiplayer || state?.executionMode !== "quick") return "";
  const qId = question?.id;
  const userSelected = (state?.userAnswers && state.userAnswers[qId]) || [];
  const isEvaluated = state?.quickEvaluatedQuestions && typeof state.quickEvaluatedQuestions.has === "function" && state.quickEvaluatedQuestions.has(qId);

  if (userSelected.length > 0 && !isEvaluated) {
    return `
      <div class="mp-waiting-notice">
        <span class="mp-waiting-pulse"></span>
        <span>Respuesta registrada. Esperando a que tu compañero seleccione su opción para evaluar...</span>
      </div>
    `;
  }
  return "";
}

export function renderDuelSummary(question, state) {
  if (!state?.isMultiplayer || state?.executionMode !== "quick") return "";
  const room = (typeof window !== "undefined" && window._bacuCurrentRoom) || null;
  const selections = room?.quizState?.selections?.[question?.id] || {};
  const participants = Object.values(room?.participants || {});
  if (!participants.length) return "";

  const chips = participants.map(p => {
    let sel = selections[p.id];
    if (!sel && typeof window !== "undefined" && p.id === window._bacuLocalUserId && state?.userAnswers?.[question?.id]?.length) {
      sel = { optionId: state.userAnswers[question.id][0], userName: p.name, userColor: p.color };
    }
    if (!sel || !sel.optionId) return `<span class="mp-duel-chip"><strong>${escapeHtml(p.name)}</strong>: sin responder</span>`;
    const isCorrect = (question?.correctAnswers || []).includes(sel.optionId);
    return `
      <span class="mp-duel-chip ${isCorrect ? "is-correct" : "is-incorrect"}">
        ${isCorrect ? "✓" : "✗"} <strong>${escapeHtml(p.name)}</strong> eligió ${sel.optionId.toUpperCase()} (${isCorrect ? "Correcto" : "Incorrecto"})
      </span>
    `;
  }).join("");

  return `
    <div class="mp-duel-card">
      <div class="mp-duel-title">Resultados del Duelo (1 a 1):</div>
      <div class="mp-duel-chips-row">${chips}</div>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
