/**
 * Manejador de Eventos de Interfaz Multijugador
 * Responsabilidad: Procesar interacciones del usuario con modales, alternancia de pestañas y unión a salas
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Controladores, < 300 líneas)
 */

import { multiplayerService } from "../core/multiplayer-service.js";
import { state } from "../core/state.js";
import { QUESTION_BANK } from "../data/question-bank.js";
import { getQuizById, getQuestionsForQuiz } from "../data/vault-structure.js";
import { prepareQuizQuestions } from "../core/quiz-engine.js";

let activeModalTab = "create";

/**
 * Configurar manejadores de eventos multijugador en la raíz
 * @param {HTMLElement} root
 */
export function setupMultiplayerEvents(root) {
  root.addEventListener("click", handleMultiplayerClicks);
  checkUrlForRoomInvite();
}

/**
 * Procesar clics del sistema multijugador
 * @param {MouseEvent} e
 */
export function handleMultiplayerClicks(e) {
  // 1. Abrir Modal desde el Header o Barra Superior
  if (e.target.closest("#btn-multiplayer-header") || e.target.closest("#btn-mp-bar-manage")) {
    e.preventDefault();
    openMultiplayerModal();
    return;
  }

  // 2. Cerrar Modal
  if (
    e.target.closest("#btn-mp-modal-close") || 
    e.target.closest("#btn-mp-cancel") || 
    e.target.closest("#btn-mp-done-modal") ||
    e.target.id === "multiplayer-modal"
  ) {
    e.preventDefault();
    closeMultiplayerModal();
    return;
  }

  // 3. Cambiar de Pestaña (Crear / Unirse)
  const tabBtn = e.target.closest("[data-mp-tab]");
  if (tabBtn) {
    e.preventDefault();
    switchMultiplayerTab(tabBtn.dataset.mpTab);
    return;
  }

  // 4. Selección de Color de Cursor
  const colorSwatch = e.target.closest("[data-color]");
  if (colorSwatch) {
    e.preventDefault();
    const newColor = colorSwatch.dataset.color;
    multiplayerService.saveLocalUser({ color: newColor });
    document.querySelectorAll(".mp-color-swatch").forEach(el => {
      el.classList.toggle("active", el.dataset.color === newColor);
    });
    return;
  }

  // 5. Botón "Crear Sala de Estudio"
  if (e.target.closest("#btn-mp-create-room")) {
    e.preventDefault();
    handleCreateRoomAction();
    return;
  }

  // 6. Botón "Unirse a la Sala"
  if (e.target.closest("#btn-mp-join-room")) {
    e.preventDefault();
    handleJoinRoomAction();
    return;
  }

  // 7. Copiar Enlace Directo de Invitación
  if (e.target.closest("#btn-mp-copy-link") || e.target.closest("#btn-mp-bar-copy")) {
    e.preventDefault();
    handleCopyInviteLink();
    return;
  }

  // 8. Salir de la Sala
  if (e.target.closest("#btn-mp-leave-room") || e.target.closest("#btn-mp-bar-leave")) {
    e.preventDefault();
    if (confirm("¿Deseas salir de la sala de estudio colaborativo?")) {
      multiplayerService.leaveRoom();
      closeMultiplayerModal();
      state.notify();
    }
  }
}

/**
 * Alternar entre pestañas de Crear y Unirse en el modal
 * @param {"create" | "join"} tab
 */
export function switchMultiplayerTab(tab = "create") {
  activeModalTab = tab;
  const tabCreate = document.getElementById("mp-tab-btn-create");
  const tabJoin = document.getElementById("mp-tab-btn-join");
  const panelCreate = document.getElementById("mp-panel-create");
  const panelJoin = document.getElementById("mp-panel-join");
  const btnCreate = document.getElementById("btn-mp-create-room");
  const btnJoin = document.getElementById("btn-mp-join-room");

  if (tabCreate) tabCreate.classList.toggle("active", tab === "create");
  if (tabJoin) tabJoin.classList.toggle("active", tab === "join");

  if (panelCreate) panelCreate.classList.toggle("hidden", tab !== "create");
  if (panelJoin) panelJoin.classList.toggle("hidden", tab !== "join");

  if (btnCreate) btnCreate.classList.toggle("hidden", tab !== "create");
  if (btnJoin) btnJoin.classList.toggle("hidden", tab !== "join");

  if (tab === "join") {
    setTimeout(() => document.getElementById("mp-input-room-code")?.focus(), 50);
  }
}

/**
 * Abrir el modal de multijugador
 */
export function openMultiplayerModal(tab = null) {
  const modal = document.getElementById("multiplayer-modal");
  if (modal) {
    modal.classList.remove("hidden");
    const nameInput = document.getElementById("mp-input-name");
    if (nameInput) nameInput.value = multiplayerService.localUser.name || "";
    if (tab) {
      switchMultiplayerTab(tab);
    } else {
      switchMultiplayerTab(activeModalTab || "create");
    }
  }
}

/**
 * Cerrar el modal
 */
export function closeMultiplayerModal() {
  document.getElementById("multiplayer-modal")?.classList.add("hidden");
}

/**
 * Crear nueva sala con las preguntas y modo configurados
 */
async function handleCreateRoomAction() {
  const nameInput = document.getElementById("mp-input-name");
  const hostName = (nameInput?.value || "").trim() || "Anfitrión";
  multiplayerService.saveLocalUser({ name: hostName });

  const btnCreate = document.getElementById("btn-mp-create-room");
  const origText = btnCreate ? btnCreate.textContent : "Crear Sala de Estudio";
  if (btnCreate) {
    btnCreate.disabled = true;
    btnCreate.textContent = "Creando sala...";
  }

  const currentState = state.getState();
  const currentQuiz = getQuizById(currentState.activeSubjectId, currentState.activeUnitId, currentState.activeQuizId);
  const quizQuestions = getQuestionsForQuiz(currentQuiz, QUESTION_BANK);

  const shuffleQuestions = currentState.shuffleQuestions ?? true;
  const shuffleOptions = currentState.shuffleOptions ?? true;
  const prepared = prepareQuizQuestions(quizQuestions, { shuffleQuestions, shuffleOptions });

  const roomConfig = {
    subjectId: currentState.activeSubjectId,
    unitId: currentState.activeUnitId,
    quizId: currentState.activeQuizId,
    executionMode: currentState.executionMode || "batches",
    batchSize: currentState.batchSize || 10,
    randomCount: currentState.randomCount || 4,
    shuffleQuestions,
    shuffleOptions
  };

  try {
    await multiplayerService.createRoom(roomConfig, prepared);
    state.notify();
    openMultiplayerModal();
  } catch (err) {
    alert("No se pudo crear la sala. Intente nuevamente.");
    console.error(err);
  } finally {
    if (btnCreate) {
      btnCreate.disabled = false;
      btnCreate.textContent = origText;
    }
  }
}

/**
 * Unirse a sala existente mediante código
 */
async function handleJoinRoomAction() {
  const nameInput = document.getElementById("mp-input-name");
  const userName = (nameInput?.value || "").trim() || "Compañero";
  const codeInput = document.getElementById("mp-input-room-code");
  const code = (codeInput?.value || "").trim().toUpperCase();

  if (!code) {
    alert("Por favor ingresa un código de sala (ej: BACU-XXXX).");
    codeInput?.focus();
    return;
  }

  const joinBtn = document.getElementById("btn-mp-join-room");
  const origText = joinBtn ? joinBtn.textContent : "Unirse a la Sala";
  if (joinBtn) {
    joinBtn.disabled = true;
    joinBtn.textContent = "Conectando...";
  }

  try {
    await multiplayerService.joinRoom(code, userName);
    state.notify();
    openMultiplayerModal();
  } catch (err) {
    alert(err.message || "No se pudo conectar a la sala. Verificá que el código sea correcto.");
    console.error(err);
  } finally {
    if (joinBtn) {
      joinBtn.disabled = false;
      joinBtn.textContent = origText;
    }
  }
}

/**
 * Copiar enlace directo al portapapeles
 */
function handleCopyInviteLink() {
  const room = multiplayerService.getCurrentRoom();
  if (!room?.code) return;

  const url = new URL(window.location.href);
  url.searchParams.set("sala", room.code);
  const shareUrl = url.toString();

  const labelModal = document.getElementById("label-mp-copy-link");
  const labelBar = document.getElementById("label-mp-bar-copy");

  const setFeedback = (text) => {
    if (labelModal) labelModal.textContent = text;
    if (labelBar) labelBar.textContent = text;
    setTimeout(() => {
      if (labelModal) labelModal.textContent = "Copiar Enlace de Invitación";
      if (labelBar) labelBar.textContent = "Copiar Enlace";
    }, 2000);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(shareUrl).then(() => setFeedback("¡Enlace Copiado!")).catch(() => fallbackCopy(shareUrl, setFeedback));
  } else {
    fallbackCopy(shareUrl, setFeedback);
  }
}

function fallbackCopy(text, cb) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    cb("¡Enlace Copiado!");
  } catch (_) {
    alert("Enlace: " + text);
  }
  document.body.removeChild(textarea);
}

/**
 * Verificar URL para detectar enlace de sala entrante
 */
function checkUrlForRoomInvite() {
  const params = new URLSearchParams(window.location.search);
  const roomCode = params.get("sala") || params.get("room");
  if (roomCode) {
    setTimeout(() => {
      openMultiplayerModal("join");
      const input = document.getElementById("mp-input-room-code");
      if (input) input.value = roomCode.toUpperCase();
    }, 300);
  }
}
