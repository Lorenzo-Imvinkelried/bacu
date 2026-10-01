/**
 * Índice de Cuestionario PDF 100 PÁGINAS - Administración de Sistemas (Parcial 3)
 * Unifica las partes modulares manteniendo separación de responsabilidades
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { questionsPart01 } from "./part-01.js";
import { questionsPart02 } from "./part-02.js";

export { questionsPart01 } from "./part-01.js";
export { questionsPart02 } from "./part-02.js";

export const ADMIN_SISTEMAS_PDF_100_PAGINAS_QUESTIONS = [
  ...questionsPart01,
  ...questionsPart02
];
