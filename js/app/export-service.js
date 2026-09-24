/**
 * Servicio de Exportación del Banco de Preguntas
 * Responsabilidad: Generar y descargar el archivo TXT con las preguntas y respuestas oficiales
 * Cumple con directivas de arquitectura en AGENTS.md
 */

import { QUESTION_BANK } from "../data/question-bank.js";

/**
 * Exportar el banco de preguntas completo con opciones y respuestas correctas a un archivo TXT
 */
export function exportQuestionsToTxt() {
  const dateStr = new Date().toLocaleDateString("es-AR");
  let txt = `================================================================================\n`;
  txt += `BAÚL DE CUESTIONARIOS - BANCO COMPLETO DE PREGUNTAS Y RESPUESTAS OFICIALES\n`;
  txt += `Asignatura: Ingeniería y Calidad - Parcial 1\n`;
  txt += `Institución: Universidad Tecnológica Nacional - Facultad Regional Santa Fe (UTN FRSF)\n`;
  txt += `Total de preguntas: ${QUESTION_BANK.length}\n`;
  txt += `Fecha de exportación: ${dateStr}\n`;
  txt += `Alineado 100% con la Teoría de Cátedra (Unidades 1, 2, ISO/IEC 12207 y GCSW)\n`;
  txt += `================================================================================\n\n`;

  QUESTION_BANK.forEach(q => {
    const qtype = q.type === "multiple" ? "Selección Múltiple (una o más)" : "Selección Única";
    const topic = q.topic || "General";
    const points = (q.points || 1.0).toFixed(2);
    const correctAnswers = (q.correctAnswers || []).map(String);

    txt += `--------------------------------------------------------------------------------\n`;
    txt += `PREGUNTA ${q.num} (ID: ${q.id}) | Tipo: ${qtype} | Puntaje: ${points} ptos.\n`;
    txt += `Tópico / Unidad: ${topic}\n\n`;
    txt += `ENUNCIADO:\n${(q.prompt || "").trim()}\n\n`;

    txt += `OPCIONES:\n`;
    (q.options || []).forEach(opt => {
      const isCorrect = correctAnswers.includes(String(opt.id));
      const tag = isCorrect ? `  <--- [CORRECTA]` : ``;
      txt += `  [${opt.id}] ${(opt.text || "").trim()}${tag}\n`;
    });

    txt += `\nRESPUESTA(S) CORRECTA(S):\n`;
    const correctOpts = (q.options || []).filter(opt => correctAnswers.includes(String(opt.id)));
    if (correctOpts.length > 0) {
      correctOpts.forEach(opt => {
        txt += `  -> Opción [${opt.id}]: ${(opt.text || "").trim()}\n`;
      });
    } else {
      txt += `  -> ${correctAnswers.join(", ")}\n`;
    }

    if (q.explanation) {
      txt += `\nJUSTIFICACIÓN / EXPLICACIÓN DE CÁTEDRA:\n${q.explanation.trim()}\n`;
    }
    txt += `--------------------------------------------------------------------------------\n\n`;
  });

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "preguntas_y_respuestas_parcial1_ing_calidad.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
