/**
 * Utilidades de Preguntas y Orden Compartido para Multijugador
 * Responsabilidad: Serializar, reconstruir y obtener banco común idéntico para todos los jugadores
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { QUESTION_BANK } from "../data/question-bank.js";
import { multiplayerService } from "./multiplayer-service.js";

/**
 * Reconstruir lista de preguntas respetando exactamente el orden de opciones y preguntas
 * @param {Array<{id: string, num: number, optionsOrder: string[]}>} serializedList
 * @returns {Array<object>}
 */
export function reconstructPreparedQuestions(serializedList) {
  if (!Array.isArray(serializedList)) return [];
  const bankMap = new Map(QUESTION_BANK.map(q => [q.id, q]));
  const result = [];

  for (const item of serializedList) {
    const orig = bankMap.get(item.id);
    if (!orig) continue;

    let orderedOptions = orig.options || [];
    if (item.optionsOrder?.length > 0) {
      const optMap = new Map(orig.options.map(o => [o.id, o]));
      orderedOptions = item.optionsOrder.map(optId => optMap.get(optId)).filter(Boolean);
    }
    result.push({ ...orig, options: orderedOptions });
  }
  return result;
}

/**
 * Serializar lista de preguntas para almacenamiento ligero y transmisión en red
 * @param {Array<object>} questions
 * @returns {Array<object>}
 */
export function serializeQuestionsForRoom(questions) {
  if (!Array.isArray(questions)) return [];
  return questions.map(q => ({
    id: q.id,
    num: q.num,
    optionsOrder: q.options?.map(o => o.id) || []
  }));
}

/**
 * Obtener las preguntas preparadas sincronizadas de la sala activa
 * @returns {Array<object>|null}
 */
export function getSharedMultiplayerQuestions() {
  if (!multiplayerService.isInRoom()) return null;
  const room = multiplayerService.getCurrentRoom();
  if (room?.preparedQuestions && room.preparedQuestions.length > 0) {
    return reconstructPreparedQuestions(room.preparedQuestions);
  }
  return null;
}
