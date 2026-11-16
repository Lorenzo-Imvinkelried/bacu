/**
 * Almacenamiento Local para Anotaciones (Fallback sin Firestore)
 * Responsabilidad: Operaciones CRUD en localStorage para notas comunitarias
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

const LOCAL_STORAGE_KEY = "bacu_local_annotations";

export function getLocalAnnotationsForQuestion(questionId) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    return all
      .filter(item => item.questionId === questionId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (_) {
    return [];
  }
}

export function getLocalAnnotationCounts(questionIds) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    const idSet = new Set(questionIds);
    const counts = {};
    all.forEach(item => {
      if (item.questionId && idSet.has(item.questionId) && item.id?.startsWith("local_")) {
        counts[item.questionId] = (counts[item.questionId] || 0) + 1;
      }
    });
    return counts;
  } catch (_) {
    return {};
  }
}

export function saveLocalAnnotation(annotation) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    const itemWithId = { id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`, ...annotation };
    all.push(itemWithId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(all));
    return itemWithId;
  } catch (_) {
    return { id: `local_${Date.now()}`, ...annotation };
  }
}

export function updateLocalAnnotation(annotationId, newText) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    const idx = all.findIndex(item => item.id === annotationId);
    if (idx !== -1) {
      all[idx].text = newText;
      all[idx].updatedAt = new Date().toISOString();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(all));
    }
  } catch (_) {}
}

export function deleteLocalAnnotation(annotationId) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(all.filter(item => item.id !== annotationId)));
  } catch (_) {}
}

export function deleteLocalAnnotationsByQuestionIds(questionIds = []) {
  try {
    const idSet = new Set(questionIds);
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];
    const remaining = all.filter(item => !idSet.has(item.questionId));
    const removedCount = all.length - remaining.length;
    if (removedCount > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(remaining));
    }
    return removedCount;
  } catch (_) {
    return 0;
  }
}
