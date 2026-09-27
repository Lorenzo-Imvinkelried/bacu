/**
 * Índice de Cuestionario 1 - GitHub -> Comandos (25 preguntas)
 * Agrupa y centraliza las 2 partes modulares de preguntas
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { GITHUB_CMD_C1_PART_01_QUESTIONS } from "./part-01.js";
import { GITHUB_CMD_C1_PART_02_QUESTIONS } from "./part-02.js";

export { GITHUB_CMD_C1_PART_01_QUESTIONS } from "./part-01.js";
export { GITHUB_CMD_C1_PART_02_QUESTIONS } from "./part-02.js";

// Conjunto unificado de 25 preguntas de Cuestionario 1
export const GITHUB_COMANDOS_C1_QUESTIONS = [
  ...GITHUB_CMD_C1_PART_01_QUESTIONS,
  ...GITHUB_CMD_C1_PART_02_QUESTIONS
];
