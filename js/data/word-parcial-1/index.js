/**
 * Índice Central de Preguntas - WORD PARCIAL 1 (92 preguntas)
 * Unifica las partes modulares manteniendo separación de responsabilidades
 * Cumple con directivas en AGENTS.md (< 300 líneas)
 */

import { questionsPart01 } from "./part-01.js";
import { questionsPart02 } from "./part-02.js";
import { questionsPart03 } from "./part-03.js";
import { questionsPart04 } from "./part-04.js";
import { questionsPart05 } from "./part-05.js";
import { questionsPart06 } from "./part-06.js";
import { questionsPart07 } from "./part-07.js";
import { questionsPart08 } from "./part-08.js";
import { questionsPart09 } from "./part-09.js";
import { questionsPart10 } from "./part-10.js";
import { questionsPart11 } from "./part-11.js";
import { questionsPart12 } from "./part-12.js";
import { questionsPart13 } from "./part-13.js";
import { questionsPart14 } from "./part-14.js";

export const WORD_PARCIAL_1_QUESTIONS = [
  ...questionsPart01,
  ...questionsPart02,
  ...questionsPart03,
  ...questionsPart04,
  ...questionsPart05,
  ...questionsPart06,
  ...questionsPart07,
  ...questionsPart08,
  ...questionsPart09,
  ...questionsPart10,
  ...questionsPart11,
  ...questionsPart12,
  ...questionsPart13,
  ...questionsPart14
];

export const QUESTION_BANK = WORD_PARCIAL_1_QUESTIONS;

export function getQuestionById(id) {
  return WORD_PARCIAL_1_QUESTIONS.find(q => q.id === id);
}
