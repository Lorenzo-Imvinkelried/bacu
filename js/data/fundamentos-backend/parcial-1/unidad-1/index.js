/**
 * Índice de UNIDAD 1 - Fundamentos de Desarrollo Backend (42 preguntas)
 * Agrupa y centraliza las 4 partes modulares de preguntas (Diapositivas 3 a 16)
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { BACKEND_U1_PART_01_QUESTIONS } from "./part-01.js";
import { BACKEND_U1_PART_02_QUESTIONS } from "./part-02.js";
import { BACKEND_U1_PART_03_QUESTIONS } from "./part-03.js";
import { BACKEND_U1_PART_04_QUESTIONS } from "./part-04.js";

export { BACKEND_U1_PART_01_QUESTIONS } from "./part-01.js";
export { BACKEND_U1_PART_02_QUESTIONS } from "./part-02.js";
export { BACKEND_U1_PART_03_QUESTIONS } from "./part-03.js";
export { BACKEND_U1_PART_04_QUESTIONS } from "./part-04.js";

// Conjunto unificado de 42 preguntas oficiales de Unidad 1
export const BACKEND_UNIDAD_1_QUESTIONS = [
  ...BACKEND_U1_PART_01_QUESTIONS,
  ...BACKEND_U1_PART_02_QUESTIONS,
  ...BACKEND_U1_PART_03_QUESTIONS,
  ...BACKEND_U1_PART_04_QUESTIONS
];
