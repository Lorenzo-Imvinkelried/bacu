/**
 * Controlador del Panel Oculto de Conexiones en Tiempo Real
 * Responsabilidad: Detectar triple clic en el año del footer, validar clave y gestionar suscripción en vivo
 * Cumple con directivas en AGENTS.md (Capa de Controladores, < 300 líneas)
 */

import { verifyPresenceAdminPassword } from "../core/presence-auth.js";
import {
  subscribeToActiveSessions,
  filterActiveSessions,
  getLocalSessionId
} from "../core/presence-service.js";
import {
  renderPresenceAdminShell,
  renderPresenceDashboardContent,
  renderPresenceLoadingState
} from "../components/presence-admin-modal.js";

const TRIPLE_CLICK_WINDOW_MS = 900;
const UI_TICK_INTERVAL_MS = 5000;

let controllerInitialized = false;
let isAdminUnlocked = false;
let clickTimestamps = [];
let firestoreUnsub = null;
let uiTickTimer = null;
let rawSessionsCache = [];
let lastUpdatedAt = Date.now();
let lastErrorMessage = "";

/**
 * Inicializar el contenedor de modales y los eventos del acceso oculto
 * @param {HTMLElement} appRoot
 */
export function initPresenceAdminPanel(appRoot) {
  if (controllerInitialized || typeof document === "undefined") return;
  controllerInitialized = true;

  const container = ensureAdminRootContainer();
  container.innerHTML = renderPresenceAdminShell();

  if (appRoot) {
    appRoot.addEventListener("click", handleFooterSecretClick);
  }
  container.addEventListener("click", handleAdminModalClick);
  container.addEventListener("submit", handleAuthFormSubmit);
  window.addEventListener("keydown", handleEscapeKey);
}

function ensureAdminRootContainer() {
  let container = document.getElementById("presence-admin-root");
  if (!container) {
    container = document.createElement("div");
    container.id = "presence-admin-root";
    document.body.appendChild(container);
  }
  return container;
}

function handleFooterSecretClick(e) {
  const trigger = e.target.closest("#secret-footer-year");
  if (!trigger) return;

  const now = Date.now();
  clickTimestamps = clickTimestamps.filter((ts) => now - ts <= TRIPLE_CLICK_WINDOW_MS);
  clickTimestamps.push(now);

  if (clickTimestamps.length >= 3 || e.detail >= 3) {
    clickTimestamps = [];
    clearTextSelection();
    if (isAdminUnlocked) {
      openAdminDashboard();
    } else {
      openAuthModal();
    }
  }
}

function clearTextSelection() {
  try {
    window.getSelection?.()?.removeAllRanges();
  } catch (_) {}
}

function openAuthModal() {
  const modal = document.getElementById("presence-auth-modal");
  const input = document.getElementById("presence-auth-input");
  const errorEl = document.getElementById("presence-auth-error");
  if (!modal || !input) return;

  input.value = "";
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }
  modal.classList.remove("hidden");
  setTimeout(() => input.focus(), 20);
}

function closeAuthModal() {
  const modal = document.getElementById("presence-auth-modal");
  const input = document.getElementById("presence-auth-input");
  const errorEl = document.getElementById("presence-auth-error");

  modal?.classList.add("hidden");
  if (input) input.value = "";
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }
}

async function handleAuthFormSubmit(e) {
  const form = e.target.closest("#presence-auth-form");
  if (!form) return;
  e.preventDefault();

  const input = document.getElementById("presence-auth-input");
  const errorEl = document.getElementById("presence-auth-error");
  const submitBtn = document.getElementById("btn-presence-auth-submit");
  const value = input ? input.value : "";

  if (!value) {
    showAuthError(errorEl, input, "Ingresá la contraseña para continuar.");
    return;
  }

  if (submitBtn) submitBtn.disabled = true;
  const isValid = await verifyPresenceAdminPassword(value);
  if (submitBtn) submitBtn.disabled = false;

  if (!isValid) {
    showAuthError(errorEl, input, "Contraseña incorrecta.");
    return;
  }

  isAdminUnlocked = true;
  closeAuthModal();
  openAdminDashboard();
}

function showAuthError(errorEl, input, message) {
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  }
  if (input) {
    input.focus();
    input.select();
  }
}

async function openAdminDashboard() {
  const modal = document.getElementById("presence-admin-modal");
  const body = document.getElementById("presence-admin-body");
  if (!modal || !body) return;

  stopLiveSubscription();
  rawSessionsCache = [];
  lastErrorMessage = "";
  body.innerHTML = renderPresenceLoadingState();
  modal.classList.remove("hidden");
  updateLiveBadge(true);

  firestoreUnsub = await subscribeToActiveSessions(
    (docs) => {
      rawSessionsCache = docs;
      lastUpdatedAt = Date.now();
      lastErrorMessage = "";
      updateLiveBadge(true);
      refreshDashboardBody();
    },
    (err) => {
      lastErrorMessage = err?.message || "Error de conexión con Firestore.";
      updateLiveBadge(false);
      refreshDashboardBody();
    }
  );

  uiTickTimer = setInterval(() => {
    if (!lastErrorMessage) {
      refreshDashboardBody();
    }
  }, UI_TICK_INTERVAL_MS);
}

function closeAdminDashboard() {
  stopLiveSubscription();
  document.getElementById("presence-admin-modal")?.classList.add("hidden");
}

function stopLiveSubscription() {
  if (typeof firestoreUnsub === "function") {
    try { firestoreUnsub(); } catch (_) {}
    firestoreUnsub = null;
  }
  if (uiTickTimer) {
    clearInterval(uiTickTimer);
    uiTickTimer = null;
  }
}

function refreshDashboardBody() {
  const body = document.getElementById("presence-admin-body");
  if (!body) return;

  const activeSessions = filterActiveSessions(rawSessionsCache, Date.now());
  body.innerHTML = renderPresenceDashboardContent({
    sessions: activeSessions,
    localSessionId: getLocalSessionId(),
    lastUpdatedAt,
    errorMessage: lastErrorMessage
  });
}

function updateLiveBadge(isOnline) {
  const badge = document.getElementById("presence-live-badge");
  if (!badge) return;
  badge.classList.toggle("is-offline", !isOnline);
  const labelSpan = badge.querySelector("span:last-child");
  if (labelSpan) labelSpan.textContent = isOnline ? "En vivo" : "Sin conexión";
}

function handleAdminModalClick(e) {
  if (
    e.target.closest("#btn-presence-auth-cancel") ||
    e.target.closest("#btn-presence-auth-cancel-x") ||
    e.target.id === "presence-auth-modal"
  ) {
    e.preventDefault();
    closeAuthModal();
    return;
  }

  if (e.target.closest("#btn-presence-admin-lock")) {
    e.preventDefault();
    isAdminUnlocked = false;
    closeAdminDashboard();
    return;
  }

  if (
    e.target.closest("#btn-presence-admin-close") ||
    e.target.closest("#btn-presence-admin-close-x") ||
    e.target.id === "presence-admin-modal"
  ) {
    e.preventDefault();
    closeAdminDashboard();
  }
}

function handleEscapeKey(e) {
  if (e.key !== "Escape") return;
  const authModal = document.getElementById("presence-auth-modal");
  const adminModal = document.getElementById("presence-admin-modal");
  if (authModal && !authModal.classList.contains("hidden")) closeAuthModal();
  if (adminModal && !adminModal.classList.contains("hidden")) closeAdminDashboard();
}
