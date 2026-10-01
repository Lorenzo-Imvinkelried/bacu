/**
 * Índice Unificador - Parcial 3 de Administración de Sistemas
 * Re-exporta los bancos temáticos modulares de la asignatura
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { ADMIN_SISTEMAS_UNIDAD_7_QUESTIONS } from "./unidad-7/index.js";
import { ADMIN_SISTEMAS_UNIDAD_8_QUESTIONS } from "./unidad-8/index.js";
import { ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS } from "./unidad-9/index.js";
import { ADMIN_SISTEMAS_UNIDAD_10_QUESTIONS } from "./unidad-10/index.js";
import { ADMIN_SISTEMAS_PDF_100_PAGINAS_QUESTIONS } from "./pdf-100-paginas/index.js";

export { 
  ADMIN_SISTEMAS_UNIDAD_7_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_8_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS,
  ADMIN_SISTEMAS_UNIDAD_10_QUESTIONS,
  ADMIN_SISTEMAS_PDF_100_PAGINAS_QUESTIONS
};

export const ADMIN_SISTEMAS_PARCIAL_3_QUESTIONS = [
  ...ADMIN_SISTEMAS_UNIDAD_7_QUESTIONS,
  ...ADMIN_SISTEMAS_UNIDAD_8_QUESTIONS,
  ...ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS,
  ...ADMIN_SISTEMAS_UNIDAD_10_QUESTIONS,
  ...ADMIN_SISTEMAS_PDF_100_PAGINAS_QUESTIONS
];
