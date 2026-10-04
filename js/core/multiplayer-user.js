/**
 * Perfil y Utilidades de Usuario Multijugador
 * Responsabilidad: Gestión del alias local, paleta de colores y generación de códigos de sala
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

export const MP_USER_KEY = "bacu_mp_user_profile";

export const COLOR_PALETTE = [
  "#0070f3", "#10b981", "#8b5cf6", "#f59e0b",
  "#ec4899", "#06b6d4", "#ef4444", "#14b8a6"
];

/**
 * Obtener o generar perfil del usuario local único por pestaña/dispositivo
 * @returns {{ id: string, name: string, color: string }}
 */
export function initLocalUser() {
  let storedSession = null;
  try {
    const raw = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("bacu_mp_tab_user") : null;
    if (raw) storedSession = JSON.parse(raw);
  } catch (_) {}

  if (storedSession?.id) return storedSession;

  let storedName = "";
  let storedColor = "";
  try {
    if (typeof localStorage !== "undefined") {
      const local = localStorage.getItem(MP_USER_KEY);
      if (local) {
        const parsed = JSON.parse(local);
        storedName = parsed.name || "";
        storedColor = parsed.color || "";
      }
      if (!storedName) storedName = localStorage.getItem("bacu_author_alias") || "";
    }
  } catch (_) {}

  const randomColor = storedColor || COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
  const user = {
    id: "usr_" + Math.random().toString(36).substring(2, 9) + "_" + Math.floor(Math.random() * 1000),
    name: storedName || "Estudiante " + Math.floor(100 + Math.random() * 900),
    color: randomColor
  };

  try {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("bacu_mp_tab_user", JSON.stringify(user));
    }
  } catch (_) {}

  return user;
}

/**
 * Persistir perfil en almacenamiento local y de sesión
 * @param {object} updates
 * @param {object} currentUser
 * @returns {object}
 */
export function saveLocalUser(updates, currentUser = null) {
  const merged = { ...(currentUser || {}), ...updates };
  try {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("bacu_mp_tab_user", JSON.stringify(merged));
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(MP_USER_KEY, JSON.stringify(merged));
      if (updates?.name) localStorage.setItem("bacu_author_alias", updates.name);
    }
  } catch (_) {}
  return merged;
}

/**
 * Generar un código de sala amigable tipo BACU-XXXX
 * @returns {string}
 */
export function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "BACU-";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
