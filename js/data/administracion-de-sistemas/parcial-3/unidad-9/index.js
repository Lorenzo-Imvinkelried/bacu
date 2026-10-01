/**
 * Índice de UNIDAD 9 - Administración de Sistemas
 * Unifica las partes modulares manteniendo separación de responsabilidades
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { questionsPart01 } from "./part-01.js";
import { questionsPart02 } from "./part-02.js";
import { questionsPart03 } from "./part-03.js";

export { questionsPart01 } from "./part-01.js";
export { questionsPart02 } from "./part-02.js";
export { questionsPart03 } from "./part-03.js";

export const ADMIN_SISTEMAS_UNIDAD_9_QUESTIONS = [
  ...questionsPart01,
  ...questionsPart02,
  ...questionsPart03
];
