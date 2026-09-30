/**
 * Índice de UNIDAD 1 - Conceptos e ISW y Ciclos de Vida (Ingeniería y Calidad - Parcial 1)
 * Agrupa los cuestionarios de la Unidad 1 manteniendo orden interno y separación de responsabilidades
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { CALIDAD_UNIDAD_1_QUESTIONS } from "./unidad-1.js";
import { CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS } from "./unidad-1-ciclos-de-vida.js";

export { CALIDAD_UNIDAD_1_QUESTIONS } from "./unidad-1.js";
export { CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS } from "./unidad-1-ciclos-de-vida.js";

export const UNIDAD_1_ALL_QUESTIONS = [
  ...CALIDAD_UNIDAD_1_QUESTIONS,
  ...CALIDAD_UNIDAD_1_CICLOS_DE_VIDA_QUESTIONS
];
