/**
 * Índice de Cuestionarios - Fundamentos Backend -> Parcial 1
 * Agrupa y centraliza todas las unidades y cuestionarios correspondientes al Parcial 1
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { BACKEND_UNIDAD_1_QUESTIONS } from "./unidad-1/index.js";
import { BACKEND_UNIDAD_2_QUESTIONS } from "./unidad-2/index.js";
import { BACKEND_UNIDAD_3_QUESTIONS } from "./unidad-3/index.js";

// Re-exportación individual de cuestionarios y unidades
export { BACKEND_UNIDAD_1_QUESTIONS } from "./unidad-1/index.js";
export { BACKEND_UNIDAD_2_QUESTIONS } from "./unidad-2/index.js";
export { BACKEND_UNIDAD_3_QUESTIONS } from "./unidad-3/index.js";

// Conjunto unificado de preguntas del Parcial 1 de Fundamentos Backend
export const BACKEND_PARCIAL_1_QUESTIONS = [
  ...BACKEND_UNIDAD_1_QUESTIONS,
  ...BACKEND_UNIDAD_2_QUESTIONS,
  ...BACKEND_UNIDAD_3_QUESTIONS
];
