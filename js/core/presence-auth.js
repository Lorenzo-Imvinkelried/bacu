/**
 * Autenticación del Panel de Monitorización de Conexiones
 * Responsabilidad: Validar la clave de acceso mediante hash SHA-256 con sal
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { computeSha256Hex } from "./delete-auth.js";

const ADMIN_SALT = "bacu-admin-presence-v1:";
const EXPECTED_ADMIN_HASH = "0ab3c793b43a54094ac5b8f2bab8a6edc295eac62ee6113f47c62bc95c5a9340";

/**
 * Verificar si la contraseña ingresada autoriza el ingreso al panel en tiempo real
 * @param {string} password
 * @returns {Promise<boolean>}
 */
export async function verifyPresenceAdminPassword(password) {
  if (typeof password !== "string" || !password) return false;
  const digestHex = await computeSha256Hex(ADMIN_SALT + password);
  return digestHex === EXPECTED_ADMIN_HASH;
}
