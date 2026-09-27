/**
 * Índice de CI/CD - GitHub
 * Agrupa y centraliza los cuestionarios correspondientes a la sección CI/CD
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { GITHUB_CICD_C1_QUESTIONS } from "./cuestionario-1/index.js";

// Re-exportación individual de cuestionarios
export { GITHUB_CICD_C1_QUESTIONS } from "./cuestionario-1/index.js";

// Conjunto unificado de preguntas de CI/CD
export const GITHUB_CICD_QUESTIONS = [
  ...GITHUB_CICD_C1_QUESTIONS
];
