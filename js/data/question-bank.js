/**
 * Banco Maestro de Preguntas - Re-exportador Central
 * Integra los bancos de preguntas organizados por Materia y Parcial
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { 
  PARCIAL_1_QUESTIONS,
  WORD_PARCIAL_1_QUESTIONS,
  CALIDAD_UNIDAD_1_QUESTIONS,
  CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS,
  CALIDAD_UNIDAD_3_QUESTIONS
} from "./ingenieria-y-calidad/parcial-1/index.js";

import { 
  BACKEND_PARCIAL_1_QUESTIONS,
  BACKEND_UNIDAD_1_QUESTIONS,
  BACKEND_UNIDAD_2_QUESTIONS,
  BACKEND_UNIDAD_3_QUESTIONS 
} from "./fundamentos-backend/parcial-1/index.js";

import {
  GITHUB_COMANDOS_QUESTIONS,
  GITHUB_COMANDOS_C1_QUESTIONS
} from "./github/comandos/index.js";

import {
  GITHUB_CICD_QUESTIONS,
  GITHUB_CICD_C1_QUESTIONS
} from "./github/ci-cd/index.js";

import {
  ADMIN_SISTEMAS_PARCIAL_3_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_7_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_8_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_10_QUESTIONS
} from "./administracion-de-sistemas/parcial-3/index.js";

// Re-exportaciones individuales y por parcial
export { 
  PARCIAL_1_QUESTIONS,
  WORD_PARCIAL_1_QUESTIONS,
  CALIDAD_UNIDAD_1_QUESTIONS,
  CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS,
  CALIDAD_UNIDAD_3_QUESTIONS
} from "./ingenieria-y-calidad/parcial-1/index.js";

export { 
  BACKEND_PARCIAL_1_QUESTIONS,
  BACKEND_UNIDAD_1_QUESTIONS,
  BACKEND_UNIDAD_2_QUESTIONS,
  BACKEND_UNIDAD_3_QUESTIONS 
} from "./fundamentos-backend/parcial-1/index.js";

export {
  GITHUB_COMANDOS_QUESTIONS,
  GITHUB_COMANDOS_C1_QUESTIONS
} from "./github/comandos/index.js";

export {
  GITHUB_CICD_QUESTIONS,
  GITHUB_CICD_C1_QUESTIONS
} from "./github/ci-cd/index.js";

export {
  ADMIN_SISTEMAS_PARCIAL_3_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_7_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_8_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_10_QUESTIONS
} from "./administracion-de-sistemas/parcial-3/index.js";

// Banco global de preguntas de la aplicación
export const QUESTION_BANK = [
  ...PARCIAL_1_QUESTIONS,
  ...BACKEND_PARCIAL_1_QUESTIONS,
  ...GITHUB_COMANDOS_QUESTIONS,
  ...GITHUB_CICD_QUESTIONS,
  ...ADMIN_SISTEMAS_PARCIAL_3_QUESTIONS
];

/**
 * Buscar una pregunta por su ID único en todo el banco maestro
 * @param {string} id
 * @returns {object|undefined}
 */
export function getQuestionById(id) {
  return QUESTION_BANK.find(q => q.id === id);
}
