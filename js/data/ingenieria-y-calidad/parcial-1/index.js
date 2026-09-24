/**
 * Índice de Cuestionarios - Ingeniería y Calidad de Software -> Parcial 1
 * Agrupa y centraliza todas las unidades y cuestionarios correspondientes al Parcial 1
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { WORD_PARCIAL_1_QUESTIONS } from "./word-parcial-1/index.js";
import { CALIDAD_UNIDAD_1_QUESTIONS } from "./unidad-1.js";
import { CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS } from "./unidad-1-ciclos-de-vida.js";
import { CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS } from "./unidad-2-parte-1a.js";
import { CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS } from "./unidad-2-parte-1b.js";
import { CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS } from "./unidad-2-parte-1c.js";
import { CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS } from "./unidad-2-parte-2a.js";
import { CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS } from "./unidad-2-parte-2b.js";
import { CALIDAD_UNIDAD_3_QUESTIONS } from "./unidad-3/index.js";

// Re-exportación individual de cada cuestionario
export { WORD_PARCIAL_1_QUESTIONS } from "./word-parcial-1/index.js";
export { CALIDAD_UNIDAD_1_QUESTIONS } from "./unidad-1.js";
export { CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS } from "./unidad-1-ciclos-de-vida.js";
export { CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS } from "./unidad-2-parte-1a.js";
export { CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS } from "./unidad-2-parte-1b.js";
export { CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS } from "./unidad-2-parte-1c.js";
export { CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS } from "./unidad-2-parte-2a.js";
export { CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS } from "./unidad-2-parte-2b.js";
export { CALIDAD_UNIDAD_3_QUESTIONS } from "./unidad-3/index.js";

// Conjunto unificado de preguntas del Parcial 1
export const PARCIAL_1_QUESTIONS = [
  ...WORD_PARCIAL_1_QUESTIONS,
  ...CALIDAD_UNIDAD_1_QUESTIONS,
  ...CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS,
  ...CALIDAD_UNIDAD_3_QUESTIONS
];
