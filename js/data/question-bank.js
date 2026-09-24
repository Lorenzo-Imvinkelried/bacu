/**
 * Banco Maestro de Preguntas - Re-exportador Central
 * Integra los bancos de preguntas organizados por Materia y Parcial
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { 
  PARCIAL_1_QUESTIONS,
  WORD_PARCIAL_1_QUESTIONS,
  CALIDAD_UNIDAD_1_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS,
  CALIDAD_UNIDAD_3_QUESTIONS
} from "./ingenieria-y-calidad/parcial-1/index.js";

// Re-exportaciones individuales y por parcial
export { 
  PARCIAL_1_QUESTIONS,
  WORD_PARCIAL_1_QUESTIONS,
  CALIDAD_UNIDAD_1_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS,
  CALIDAD_UNIDAD_3_QUESTIONS
} from "./ingenieria-y-calidad/parcial-1/index.js";

// Banco global de preguntas de la aplicación
export const QUESTION_BANK = [
  ...PARCIAL_1_QUESTIONS
];

/**
 * Buscar una pregunta por su ID único en todo el banco maestro
 * @param {string} id
 * @returns {object|undefined}
 */
export function getQuestionById(id) {
  return QUESTION_BANK.find(q => q.id === id);
}
