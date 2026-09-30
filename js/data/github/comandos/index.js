/**
 * Índice de Comandos - GitHub
 * Agrupa y centraliza los cuestionarios correspondientes a la sección Comandos
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { GITHUB_COMANDOS_C1_QUESTIONS } from "./cuestionario-1/index.js";

// Re-exportación individual de cuestionarios
export { GITHUB_COMANDOS_C1_QUESTIONS } from "./cuestionario-1/index.js";

// Conjunto unificado de preguntas de Comandos
export const GITHUB_COMANDOS_QUESTIONS = [
  ...GITHUB_COMANDOS_C1_QUESTIONS
];
