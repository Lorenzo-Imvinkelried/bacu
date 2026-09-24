/**
 * Componente: Barra Superior, Breadcrumbs y Desplegables de Materia / Parcial
 * Estilo fiel a Campus Virtual UTN FRSF
 * Cumple con directivas en AGENTS.md (Capa de Componentes)
 */

import { VAULT_STRUCTURE } from "../data/vault-structure.js";

export function renderHeader(state, subject, unit, quiz) {
  const currentSubjectId = subject ? subject.id : "ing-calidad";
  const currentUnitId = unit ? unit.id : "parcial-1";
  const subjectName = subject ? subject.name : "Ingeniería y Calidad";
  const unitName = unit ? unit.name : "Parcial 1";
  const quizTitle = quiz ? quiz.title : "Cuestionario";

  // Opciones del desplegable de Materias
  const subjectsOptionsHtml = VAULT_STRUCTURE.subjects.map(s => `
    <option value="${s.id}" ${s.id === currentSubjectId ? "selected" : ""}>
      ${s.name} (${s.code})
    </option>
  `).join("");

  // Opciones del desplegable de Parciales de la materia activa
  const unitsOptionsHtml = (subject?.units || []).map(u => `
    <option value="${u.id}" ${u.id === currentUnitId ? "selected" : ""}>
      ${u.name} ${u.questionCount > 0 ? `(${u.questionCount} preguntas)` : "(Próximamente)"}
    </option>
  `).join("");

  // Opciones del desplegable de Cuestionarios de la unidad activa
  const quizzesOptionsHtml = (unit?.quizzes || []).map(q => `
    <option value="${q.id}" ${q.id === (quiz?.id || "") ? "selected" : ""}>
      ${q.title}
    </option>
  `).join("");

  return `
    <header class="cv-header">
      <div class="cv-header-main">
        <div class="cv-brand">
          <div class="cv-logo-badge">
            <svg class="cv-utn-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <circle cx="10" cy="8" r="2"/>
              <path d="M14 12v3"/>
              <path d="M10 15h4"/>
            </svg>
          </div>
          <div class="cv-brand-text">
            <span class="cv-title">BACU</span>
            <span class="cv-subtitle">baúl de cuestionarios</span>
          </div>
        </div>

        <div class="cv-header-actions">
          <button id="btn-export-questions-header" class="btn-export-header" title="Exportar todas las preguntas con opciones y respuestas correctas a TXT">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Exportar TXT</span>
          </button>

          <button id="btn-open-vault" class="btn-vault" title="Explorar materias y parciales en el baúl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
            <span>Baúl de Cuestionarios</span>
            <span class="vault-badge-pill">${unitName}</span>
          </button>

          <div class="cv-user-profile">
            <div class="cv-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span class="cv-username">Estudiante ISI</span>
          </div>
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

      <!-- Barra Desplegable de Selección: Materia y Parcial -->
      <div class="cv-dropdown-selector-bar">
        <div class="cv-selector-container">
          <div class="cv-selector-group">
            <label for="select-subject" class="cv-selector-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>Materia:</span>
            </label>
            <div class="cv-select-wrapper">
              <select id="select-subject" class="cv-select-control">
                ${subjectsOptionsHtml}
              </select>
            </div>
          </div>

          <div class="cv-selector-group">
            <label for="select-unit" class="cv-selector-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Parcial / Unidad:</span>
            </label>
            <div class="cv-select-wrapper">
              <select id="select-unit" class="cv-select-control">
                ${unitsOptionsHtml}
              </select>
            </div>
          </div>

          ${(unit?.quizzes && unit.quizzes.length > 0) ? `
            <div class="cv-selector-group">
              <label for="select-quiz" class="cv-selector-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>Cuestionario:</span>
              </label>
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
