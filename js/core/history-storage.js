/**
 * Servicio de Persistencia del Historial de Intentos
 * Responsabilidad: Almacenar y recuperar registros de intentos en localStorage
 * Cumple con directivas de arquitectura en AGENTS.md
 */

const STORAGE_KEY = "baul_cuestionarios_history";
const MAX_HISTORY_RECORDS = 50;

/**
 * Cargar historial de intentos guardado
 * @returns {Array<object>}
 */
export function loadAttemptHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Guardar nuevo intento en el historial
 * @param {Array<object>} historyList
 * @param {object} newRecord
 * @returns {Array<object>} Lista actualizada
 */
export function saveAttemptRecordToStorage(historyList, newRecord) {
  try {
    const updated = [newRecord, ...historyList];
    if (updated.length > MAX_HISTORY_RECORDS) {
      updated.splice(MAX_HISTORY_RECORDS);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
    return historyList;
  }
}
