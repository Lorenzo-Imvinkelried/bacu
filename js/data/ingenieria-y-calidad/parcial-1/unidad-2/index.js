/**
 * Índice de UNIDAD 2 - Procesos, Modelos y Estándares (Ingeniería y Calidad - Parcial 1)
 * Agrupa los cuestionarios de la Unidad 2 manteniendo orden interno y separación de responsabilidades
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS } from "./unidad-2-parte-1a.js";
import { CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS } from "./unidad-2-parte-1b.js";
import { CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS } from "./unidad-2-parte-1c.js";
import { CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS } from "./unidad-2-parte-2a.js";
import { CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS } from "./unidad-2-parte-2b.js";

export { CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS } from "./unidad-2-parte-1a.js";
export { CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS } from "./unidad-2-parte-1b.js";
export { CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS } from "./unidad-2-parte-1c.js";
export { CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS } from "./unidad-2-parte-2a.js";
export { CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS } from "./unidad-2-parte-2b.js";

export const UNIDAD_2_ALL_QUESTIONS = [
  ...CALIDAD_UNIDAD_2_PARTE_1A_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_1B_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_1C_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_2A_QUESTIONS,
  ...CALIDAD_UNIDAD_2_PARTE_2B_QUESTIONS
];
