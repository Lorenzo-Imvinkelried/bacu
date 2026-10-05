/**
 * Índice de Cuestionario Oficial PARCIAL 1 - Fundamentos Backend (20 preguntas)
 * Agrupa y centraliza las partes modulares del examen
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { questionsPart01 } from "./part-01.js";
import { questionsPart02 } from "./part-02.js";

export { questionsPart01 } from "./part-01.js";
export { questionsPart02 } from "./part-02.js";

// Conjunto unificado de 20 preguntas del Parcial 1 Oficial
export const BACKEND_PARCIAL_1_OFICIAL_QUESTIONS = [
  ...questionsPart01,
  ...questionsPart02
];
