/**
 * Componente: Barra Superior, Breadcrumbs y Desplegables de Materia / Parcial
 * Estilo fiel a Campus Virtual UTN FRSF
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

import { VAULT_STRUCTURE } from "../data/vault-structure.js";

export function renderHeader(state, subject, unit, quiz) {
  const currentSubjectId = subject ? subject.id : "ing-calidad";
  const currentUnitId = unit ? unit.id : "parcial-1";
  const subjectName = subject ? subject.name : "Ingeniería y Calidad de Software";
  const unitName = unit ? unit.name : "Parcial 1";
  const quizTitle = quiz ? quiz.title : "Cuestionario";

  // Opciones del desplegable de Materias
  const subjectsOptionsHtml = VAULT_STRUCTURE.subjects.map(s => `
    <option value="${s.id}" ${s.id === currentSubjectId ? "selected" : ""}>
      ${s.name}
    </option>
  `).join("");

  // Opciones del desplegable de Parciales de la materia activa
  const unitsOptionsHtml = (subject?.units || []).map(u => `
    <option value="${u.id}" ${u.id === currentUnitId ? "selected" : ""}>
      ${u.name} (${u.questionCount} preg.)
    </option>
  `).join("");

  // Opciones del desplegable de Cuestionarios de la unidad activa
  const quizzesOptionsHtml = (unit?.quizzes || []).map(q => `
    <option value="${q.id}" ${q.id === (quiz?.id || "") ? "selected" : ""}>
      ${q.title}
    </option>
  `).join("");

  const isDark = state?.theme === "dark" || state?.state?.theme === "dark";
  const themeIconSvg = isDark
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  return `
    <header class="cv-header">
      <div class="cv-header-main">
        <div class="cv-brand">
          <div class="cv-brand-text">
            <span class="cv-title">BACU</span>
            <span class="cv-subtitle">Baúl de Cuestionarios</span>
          </div>
        </div>

        <div class="cv-header-actions">
          <button type="button" id="btn-theme-toggle" class="btn-theme-toggle" title="Cambiar a ${isDark ? "Modo Claro" : "Modo Oscuro"}" aria-label="Cambiar tema visual">
            <span class="theme-icon">${themeIconSvg}</span>
            <span class="theme-label">${isDark ? "Modo Claro" : "Modo Oscuro"}</span>
          </button>
          <button type="button" id="btn-how-to-create" class="btn-how-to-create" title="¿Cómo se crean los cuestionarios?" aria-label="¿Cómo se crean los cuestionarios?">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </span>
            <span class="btn-label">¿Cómo se crean los cuestionarios?</span>
          </button>
        </div>
      </div>

      <!-- Barra de Breadcrumbs estilo Moodle Adaptable -->
      <nav class="cv-breadcrumbs-bar" aria-label="Miga de pan">
        <ol class="cv-breadcrumbs">
          <li class="cv-breadcrumb-item">
            <a href="#" class="cv-crumb-link" data-nav="home">Área personal</a>
          </li>
          <li class="cv-breadcrumb-separator">/</li>
          <li class="cv-breadcrumb-item">
            <a href="#" class="cv-crumb-link" data-nav="courses">Mis cursos</a>
          </li>
          <li class="cv-breadcrumb-separator">/</li>
          <li class="cv-breadcrumb-item">
            <a href="#" class="cv-crumb-link" data-nav="subject">${subjectName}</a>
          </li>
          <li class="cv-breadcrumb-separator">/</li>
          <li class="cv-breadcrumb-item">
            <a href="#" class="cv-crumb-link" data-nav="unit">${unitName}</a>
          </li>
          <li class="cv-breadcrumb-separator">/</li>
          <li class="cv-breadcrumb-item active" aria-current="page">
            ${quizTitle}
          </li>
        </ol>
      </nav>

      <!-- Barra Desplegable de Selección: Materia, Parcial y Cuestionario -->
      <div class="cv-dropdown-selector-bar">
        <div class="cv-selector-container">
          <div class="cv-selector-group">
            <label for="select-subject" class="cv-selector-label">Materia:</label>
            <div class="cv-select-wrapper">
              <select id="select-subject" class="cv-select-control">
                ${subjectsOptionsHtml}
              </select>
            </div>
          </div>

          <div class="cv-selector-group">
            <label for="select-unit" class="cv-selector-label">Parcial:</label>
            <div class="cv-select-wrapper">
              <select id="select-unit" class="cv-select-control">
                ${unitsOptionsHtml}
              </select>
            </div>
          </div>

          ${(unit?.quizzes && unit.quizzes.length > 0) ? `
            <div class="cv-selector-group">
              <label for="select-quiz" class="cv-selector-label">Cuestionario:</label>
              <div class="cv-select-wrapper">
                <select id="select-quiz" class="cv-select-control">
                  ${quizzesOptionsHtml}
                </select>
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    </header>
  `;
}
