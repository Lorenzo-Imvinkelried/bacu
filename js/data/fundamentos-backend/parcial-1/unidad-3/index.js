/**
 * Índice de UNIDAD 3 - Spring Batch (53 preguntas)
 * Agrupa y centraliza las 5 partes modulares de preguntas (Diapositivas 2 a 16)
 * Temas: Manejo de grandes volúmenes de datos, Arquitectura General de Spring Batch,
 * JobRepository, JobLauncher, Job, Steps, Readers, Writers, Listeners, Ciclo de Ejecución,
 * Formas de ejecución, Consideraciones de Diseño, fillClientesJob y Sincronización entre Pods.
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { BACKEND_U3_PART_01_QUESTIONS } from "./part-01.js";
import { BACKEND_U3_PART_02_QUESTIONS } from "./part-02.js";
import { BACKEND_U3_PART_03_QUESTIONS } from "./part-03.js";
import { BACKEND_U3_PART_04_QUESTIONS } from "./part-04.js";
import { BACKEND_U3_PART_05_QUESTIONS } from "./part-05.js";

export { BACKEND_U3_PART_01_QUESTIONS } from "./part-01.js";
export { BACKEND_U3_PART_02_QUESTIONS } from "./part-02.js";
export { BACKEND_U3_PART_03_QUESTIONS } from "./part-03.js";
export { BACKEND_U3_PART_04_QUESTIONS } from "./part-04.js";
export { BACKEND_U3_PART_05_QUESTIONS } from "./part-05.js";

// Conjunto unificado de 53 preguntas oficiales de Unidad 3
export const BACKEND_UNIDAD_3_QUESTIONS = [
  ...BACKEND_U3_PART_01_QUESTIONS,
  ...BACKEND_U3_PART_02_QUESTIONS,
  ...BACKEND_U3_PART_03_QUESTIONS,
  ...BACKEND_U3_PART_04_QUESTIONS,
  ...BACKEND_U3_PART_05_QUESTIONS
];
