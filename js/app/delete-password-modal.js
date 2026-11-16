/**
 * Controlador del Modal de Contraseña para Borrado de Comentarios
 * Responsabilidad: Solicitar y validar la contraseña antes de ejecutar eliminaciones
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Controladores, < 300 líneas)
 */

import { verifyDeletePassword } from "../core/delete-auth.js";

let pendingResolve = null;

/**
 * Abrir el modal de contraseña y resolver true si se valida, false si se cancela
 * @param {string} message
 * @returns {Promise<boolean>}
 */
export function requestDeletePassword(message) {
  if (pendingResolve) {
    pendingResolve(false);
    pendingResolve = null;
  }

  const modal = document.getElementById("delete-password-modal");
  const msgEl = document.getElementById("delete-password-message");
  const input = document.getElementById("delete-password-input");
  const errorEl = document.getElementById("delete-password-error");

  if (!modal || !input) return Promise.resolve(false);

  if (msgEl) msgEl.textContent = message || "Confirmá el borrado ingresando la contraseña.";
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }
  input.value = "";
  modal.classList.remove("hidden");
  setTimeout(() => input.focus(), 20);

  return new Promise((resolve) => {
    pendingResolve = resolve;
  });
}

/**
 * Cerrar el modal y resolver la promesa pendiente como cancelada
 */
export function closeDeletePasswordModal() {
  const modal = document.getElementById("delete-password-modal");
  const input = document.getElementById("delete-password-input");
  const errorEl = document.getElementById("delete-password-error");

  modal?.classList.add("hidden");
  if (input) input.value = "";
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }

  if (pendingResolve) {
    const resolve = pendingResolve;
    pendingResolve = null;
    resolve(false);
  }
}

export function handleDeleteModalClick(e) {
  if (
    e.target.closest("#btn-delete-pwd-cancel") ||
    e.target.closest("#btn-delete-pwd-cancel-x") ||
    e.target.id === "delete-password-modal"
  ) {
    e.preventDefault();
    closeDeletePasswordModal();
  }
}

export async function handleDeleteModalSubmit(e) {
  const form = e.target.closest("#delete-password-form");
  if (!form) return;

  e.preventDefault();

  const input = document.getElementById("delete-password-input");
  const errorEl = document.getElementById("delete-password-error");
  const confirmBtn = document.getElementById("btn-delete-pwd-confirm");
  const value = input ? input.value : "";

  if (!value) {
    showDeleteAuthError(errorEl, input, "Ingresá la contraseña para continuar.");
    return;
  }

  if (confirmBtn) confirmBtn.disabled = true;
  const isValid = await verifyDeletePassword(value);
  if (confirmBtn) confirmBtn.disabled = false;

  if (!isValid) {
    showDeleteAuthError(errorEl, input, "Contraseña incorrecta.");
    return;
  }

  const resolve = pendingResolve;
  pendingResolve = null;
  document.getElementById("delete-password-modal")?.classList.add("hidden");
  if (input) input.value = "";
  if (errorEl) errorEl.classList.add("hidden");
  if (resolve) resolve(true);
}

function showDeleteAuthError(errorEl, input, text) {
  if (errorEl) {
    errorEl.textContent = text;
    errorEl.classList.remove("hidden");
  }
  if (input) {
    input.focus();
    input.select();
  }
}
