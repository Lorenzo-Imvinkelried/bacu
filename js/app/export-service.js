/**
 * Servicio de Exportación del Banco de Preguntas
 * Responsabilidad: Generar y descargar el archivo TXT con las preguntas y respuestas oficiales del cuestionario activo
 * Cumple con directivas de arquitectura en AGENTS.md
 */

import { QUESTION_BANK } from "../data/question-bank.js";
import { getSubjectById, getUnitById, getQuizById, getQuestionsForQuiz } from "../data/vault-structure.js";
import { state } from "../core/state.js";

/**
 * Exportar únicamente las preguntas del cuestionario actualmente seleccionado a un archivo TXT
 * @param {object} [currentState] - Estado opcional de la aplicación
 */
export function exportQuestionsToTxt(currentState = null) {
  const current = currentState || state.getState();
  const activeSub = getSubjectById(current.activeSubjectId);
  const activeUnit = getUnitById(current.activeSubjectId, current.activeUnitId);
  const activeQuiz = getQuizById(current.activeSubjectId, current.activeUnitId, current.activeQuizId);

  const quizQuestions = getQuestionsForQuiz(activeQuiz, QUESTION_BANK);
  const questionsToExport = quizQuestions.length > 0 ? quizQuestions : QUESTION_BANK;

  const quizTitle = activeQuiz?.title || "Cuestionario";
  const subjectName = activeSub?.name || "Ingeniería y Calidad de Software";
  const unitName = activeUnit?.name || "Parcial 1";
  const dateStr = new Date().toLocaleDateString("es-AR");

  let txt = `================================================================================\n`;
  txt += `BAÚL DE CUESTIONARIOS - PREGUNTAS Y RESPUESTAS OFICIALES\n`;
  txt += `Cuestionario: ${quizTitle}\n`;
  txt += `Asignatura: ${subjectName}\n`;
  txt += `Unidad / Parcial: ${unitName}\n`;
  txt += `Institución: Universidad Tecnológica Nacional - Facultad Regional Santa Fe (UTN FRSF)\n`;
  txt += `Total de preguntas en este cuestionario: ${questionsToExport.length}\n`;
  txt += `Fecha de exportación: ${dateStr}\n`;
  txt += `================================================================================\n\n`;

  questionsToExport.forEach((q, idx) => {
    const qtype = q.type === "multiple" ? "Selección Múltiple (una o más)" : "Selección Única";
    const topic = q.topic || "General";
    const points = (q.points || 1.0).toFixed(2);
    const correctAnswers = (q.correctAnswers || []).map(String);

    txt += `--------------------------------------------------------------------------------\n`;
    txt += `PREGUNTA ${idx + 1} (ID: ${q.id}) | Tipo: ${qtype} | Puntaje: ${points} ptos.\n`;
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

  const safeSlug = (activeQuiz?.id || "cuestionario")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "_");

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `preguntas_${safeSlug}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
