/**
 * Banco Maestro de Preguntas - Re-exportador Central
 * Asignatura: Ingeniería y Calidad -> Parcial 1
 * - WORD PARCIAL 1 (92 preguntas de examen)
 * - UNIDAD 1 (10 preguntas de repaso conceptual)
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { WORD_PARCIAL_1_QUESTIONS } from "./word-parcial-1/index.js";
import { CALIDAD_UNIDAD_1_QUESTIONS } from "./calidad-unidad-1.js";

export { WORD_PARCIAL_1_QUESTIONS } from "./word-parcial-1/index.js";
export { CALIDAD_UNIDAD_1_QUESTIONS } from "./calidad-unidad-1.js";

export const QUESTION_BANK = [
  ...WORD_PARCIAL_1_QUESTIONS,
  ...CALIDAD_UNIDAD_1_QUESTIONS
];

/**
 * Buscar una pregunta por su ID único en todo el banco maestro
 * @param {string} id
 * @returns {object|undefined}
 */
export function getQuestionById(id) {
  return QUESTION_BANK.find(q => q.id === id);
}
