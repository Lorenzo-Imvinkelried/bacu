/**
 * Índice de UNIDAD 2 - Fundamentos de Desarrollo Backend (53 preguntas)
 * Agrupa y centraliza las 5 partes modulares de preguntas (Diapositivas 2 a 24)
 * Temas: Arquitecturas y Comunicación, REST APIs y diseño, Convenciones, Métodos, Búsqueda,
 * Códigos HTTP, Manejo de errores, Genéricos, Spring Boot REST, Jackson, Postman y Comunicación Asincrónica.
 * Cumple estrictamente con directivas en AGENTS.md (SoC, < 300 líneas)
 */

import { BACKEND_U2_PART_01_QUESTIONS } from "./part-01.js";
import { BACKEND_U2_PART_02_QUESTIONS } from "./part-02.js";
import { BACKEND_U2_PART_03_QUESTIONS } from "./part-03.js";
import { BACKEND_U2_PART_04_QUESTIONS } from "./part-04.js";
import { BACKEND_U2_PART_05_QUESTIONS } from "./part-05.js";

export { BACKEND_U2_PART_01_QUESTIONS } from "./part-01.js";
export { BACKEND_U2_PART_02_QUESTIONS } from "./part-02.js";
export { BACKEND_U2_PART_03_QUESTIONS } from "./part-03.js";
export { BACKEND_U2_PART_04_QUESTIONS } from "./part-04.js";
export { BACKEND_U2_PART_05_QUESTIONS } from "./part-05.js";

// Conjunto unificado de 53 preguntas oficiales de Unidad 2
export const BACKEND_UNIDAD_2_QUESTIONS = [
  ...BACKEND_U2_PART_01_QUESTIONS,
  ...BACKEND_U2_PART_02_QUESTIONS,
  ...BACKEND_U2_PART_03_QUESTIONS,
  ...BACKEND_U2_PART_04_QUESTIONS,
  ...BACKEND_U2_PART_05_QUESTIONS
];
