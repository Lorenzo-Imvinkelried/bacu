/**
 * Componente: Explorador del Baúl de Cuestionarios
 * Permite explorar y seleccionar materias, unidades y cuestionarios
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

import { VAULT_STRUCTURE } from "../data/vault-structure.js";

export function renderVaultDrawer(state) {
  const currentSubjectId = state.activeSubjectId;
  const currentUnitId = state.activeUnitId;
  const currentQuizId = state.activeQuizId;
  const isOpen = state.vaultOpen;

  const subjectsHtml = VAULT_STRUCTURE.subjects.map(subject => {
    const isSubjectActive = subject.id === currentSubjectId;

    const unitsHtml = subject.units.map(unit => {
      const isUnitActive = isSubjectActive && unit.id === currentUnitId;

      const quizzesHtml = unit.quizzes.map(quiz => {
        const isQuizActive = isUnitActive && quiz.id === currentQuizId;
        const attempts = state.history?.filter(h => h.quizId === quiz.id) || [];
        const bestAttempt = attempts.length > 0 
          ? Math.max(...attempts.map(a => a.grade10 || a.score || 0))
          : null;

        return `
          <li class="vault-quiz-item ${isQuizActive ? "active" : ""}">
            <button 
              type="button" 
              class="btn-select-quiz"
              data-subject-id="${subject.id}"
              data-unit-id="${unit.id}"
              data-quiz-id="${quiz.id}"
            >
              <div class="quiz-item-info">
                <span class="quiz-item-title">${quiz.title}</span>
                <span class="quiz-item-desc">${quiz.description}</span>
              </div>
              <span class="vault-count-badge">${quiz.questionCount} preg.</span>
              ${bestAttempt !== null ? `
                <span class="quiz-best-badge" title="Mejor calificación">
                  Nota: ${bestAttempt.toFixed(1).replace(".", ",")}
                </span>
              ` : ""}
            </button>
          </li>
        `;
      }).join("");

      return `
        <div class="vault-unit-block">
          <div class="vault-unit-header">
            <span class="vault-unit-title">${unit.name}</span>
            <span class="vault-count-badge">${unit.questionCount} preguntas</span>
          </div>
          <p class="vault-unit-desc">${unit.description}</p>
          <ul class="vault-quiz-list">
            ${quizzesHtml}
          </ul>
        </div>
      `;
    }).join("");

    return `
      <div class="vault-subject-block ${isSubjectActive ? "expanded" : ""}">
        <div class="vault-subject-header">
          <div class="vault-subject-title-wrap">
            <h3 class="vault-subject-title">${subject.name}</h3>
            <span class="vault-subject-code">${subject.department}</span>
          </div>
        </div>
        <div class="vault-subject-content">
          ${unitsHtml}
        </div>
      </div>
    `;
  }).join("");

  return `
    <div id="vault-drawer-overlay" class="vault-overlay ${isOpen ? "open" : "hidden"}">
      <div class="vault-drawer" role="dialog" aria-modal="true" aria-label="Baúl de Cuestionarios">
        <div class="vault-drawer-header">
          <div class="vault-drawer-title-group">
            <div>
              <h2 class="vault-drawer-title">Baúl de Cuestionarios</h2>
              <p class="vault-drawer-subtitle">Repositorio de parciales viejos y cuestionarios por unidad</p>
            </div>
          </div>
          <button type="button" id="btn-close-vault" class="btn-vault-close" title="Cerrar baúl">✕</button>
        </div>

        <div class="vault-drawer-body">
          <div class="vault-section-hint">
            <strong>Sección activa:</strong> Ingeniería y Calidad &rarr; Parcial 1. Selecciona un cuestionario de 4 preguntas o un simulacro para practicar en la interfaz de Campus Virtual.
          </div>
          <div class="vault-tree-container">
            ${subjectsHtml}
          </div>
        </div>

        <div class="vault-drawer-footer">
          <span class="vault-footer-text">UTN FRSF - Ingeniería en Sistemas de Información</span>
        </div>
      </div>
    </div>
  `;
}
