/**
 * Servicio de Anotaciones Colaborativas (Firebase Firestore & Fallback Local)
 * Responsabilidad: Gestión de lectura, escritura, edición y eliminación de notas comunitarias por pregunta
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { FIREBASE_CONFIG, isFirebaseConfigured } from "./firebase-config.js";
import {
  getLocalAnnotationsForQuestion,
  getLocalAnnotationCounts,
  saveLocalAnnotation,
  updateLocalAnnotation,
  deleteLocalAnnotation,
  deleteLocalAnnotationsByQuestionIds
} from "./annotations-local.js";

const AUTHOR_STORAGE_KEY = "bacu_author_alias";

let firebaseDb = null;
let firebaseInitialized = false;

async function initFirestore() {
  if (firebaseInitialized) return firebaseDb;
  if (!isFirebaseConfigured()) return null;
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
    firebaseDb = getFirestore(initializeApp(FIREBASE_CONFIG));
    firebaseInitialized = true;
    return firebaseDb;
  } catch (err) {
    console.warn("No se pudo conectar a Firebase Firestore, usando almacenamiento local:", err);
    return null;
  }
}

export function getStoredAuthorName() {
  try { return localStorage.getItem(AUTHOR_STORAGE_KEY) || ""; } catch (_) { return ""; }
}

export function setStoredAuthorName(name) {
  try { if (name && name.trim()) localStorage.setItem(AUTHOR_STORAGE_KEY, name.trim()); } catch (_) {}
}

const countCache = new Map();

export function getCachedAnnotationCount(questionId) {
  return countCache.get(questionId) ?? 0;
}

export function setCachedAnnotationCount(questionId, count) {
  countCache.set(questionId, Math.max(0, count));
}

/**
 * Obtener conteos de anotaciones para un conjunto de preguntas
 * @param {Array<string>} questionIds
 * @returns {Promise<Record<string, number>>}
 */
export async function fetchAnnotationCounts(questionIds = []) {
  if (!questionIds.length) return {};
  const counts = {};
  const pendingIds = [];

  questionIds.forEach(id => {
    if (countCache.has(id)) {
      counts[id] = countCache.get(id);
    } else {
      pendingIds.push(id);
      counts[id] = 0;
    }
  });

  if (!pendingIds.length) return counts;

  const localCounts = getLocalAnnotationCounts(pendingIds);
  pendingIds.forEach(id => { counts[id] = localCounts[id] || 0; });

  const db = await initFirestore();
  if (db) {
    try {
      const { collection, query, where, getDocs } = await import(
        "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
      );
      for (let i = 0; i < pendingIds.length; i += 30) {
        const batch = pendingIds.slice(i, i + 30);
        const q = query(collection(db, "annotations"), where("questionId", "in", batch));
        const snap = await getDocs(q);
        const cloudMap = {};
        snap.forEach(doc => {
          const qId = doc.data().questionId;
          if (qId) cloudMap[qId] = (cloudMap[qId] || 0) + 1;
        });
        batch.forEach(id => {
          counts[id] = (cloudMap[id] || 0) + (localCounts[id] || 0);
        });
      }
    } catch (err) {
      console.warn("Fallo al consultar conteo de anotaciones en Firestore:", err);
    }
  }

  pendingIds.forEach(id => countCache.set(id, counts[id]));
  return counts;
}

/**
 * Leer anotaciones de una pregunta (desde Firestore o fallback local)
 * @param {string} questionId
 * @returns {Promise<Array<object>>}
 */
export async function fetchAnnotationsForQuestion(questionId) {
  const db = await initFirestore();

  if (db) {
    try {
      const { collection, query, where, getDocs } = await import(
        "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
      );
      const q = query(collection(db, "annotations"), where("questionId", "==", questionId));
      const querySnapshot = await getDocs(q);
      const list = [];
      querySnapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));

      const localList = getLocalAnnotationsForQuestion(questionId).filter(n => n.id?.startsWith("local_"));
      const combined = [...list, ...localList].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      setCachedAnnotationCount(questionId, combined.length);
      return combined;
    } catch (err) {
      console.error("Error al obtener notas desde Firestore:", err);
      const fallback = getLocalAnnotationsForQuestion(questionId);
      setCachedAnnotationCount(questionId, fallback.length);
      return fallback;
    }
  }

  const localList = getLocalAnnotationsForQuestion(questionId);
  setCachedAnnotationCount(questionId, localList.length);
  return localList;
}

/**
 * Agregar una nueva anotación
 * @param {string} questionId
 * @param {string} author
 * @param {string} text
 * @returns {Promise<{success: boolean, isCloud: boolean, annotation: object}>}
 */
export async function addAnnotationForQuestion(questionId, author, text) {
  const cleanAuthor = author?.trim() || "Estudiante anónimo";
  const cleanText = text?.trim();
  if (!cleanText) throw new Error("El texto de la anotación no puede estar vacío.");

  setStoredAuthorName(cleanAuthor);
  const newAnnotation = { questionId, author: cleanAuthor, text: cleanText, createdAt: new Date().toISOString() };
  const db = await initFirestore();
  let result = null;

  if (db) {
    try {
      const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
      const docRef = await addDoc(collection(db, "annotations"), newAnnotation);
      result = { success: true, isCloud: true, annotation: { id: docRef.id, ...newAnnotation } };
    } catch (err) {
      console.warn("Fallo al guardar en la nube, persistiendo en local:", err);
    }
  }

  if (!result) {
    result = { success: true, isCloud: false, annotation: saveLocalAnnotation(newAnnotation) };
  }

  setCachedAnnotationCount(questionId, getCachedAnnotationCount(questionId) + 1);
  return result;
}

/**
 * Editar una anotación existente
 * @param {string} annotationId
 * @param {string} newText
 * @returns {Promise<{success: boolean, isCloud: boolean}>}
 */
export async function updateAnnotation(annotationId, newText) {
  const cleanText = newText?.trim();
  if (!cleanText) throw new Error("El texto no puede estar vacío.");

  const isLocal = annotationId.startsWith("local_");
  const db = !isLocal ? await initFirestore() : null;

  if (db) {
    try {
      const { doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
      await updateDoc(doc(db, "annotations", annotationId), { text: cleanText, updatedAt: new Date().toISOString() });
      return { success: true, isCloud: true };
    } catch (err) {
      console.error("Error al actualizar nota en Firestore:", err);
      throw err;
    }
  }

  updateLocalAnnotation(annotationId, cleanText);
  return { success: true, isCloud: false };
}

/**
 * Eliminar una anotación
 * @param {string} annotationId
 * @param {string|null} questionId
 * @returns {Promise<{success: boolean, isCloud: boolean}>}
 */
export async function deleteAnnotation(annotationId, questionId = null) {
  const isLocal = annotationId.startsWith("local_");
  const db = !isLocal ? await initFirestore() : null;

  if (db) {
    try {
      const { doc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");
      await deleteDoc(doc(db, "annotations", annotationId));
    } catch (err) {
      console.error("Error al eliminar nota en Firestore:", err);
      throw err;
    }
  } else {
    deleteLocalAnnotation(annotationId);
  }

  if (questionId) {
    setCachedAnnotationCount(questionId, Math.max(0, getCachedAnnotationCount(questionId) - 1));
  }
  return { success: true, isCloud: !isLocal };
}

/**
 * Eliminar todas las anotaciones de un cuestionario (Firestore y local)
 * @param {Array<string>} questionIds
 * @returns {Promise<{totalDeleted: number, cloudDeleted: number, localDeleted: number}>}
 */
export async function deleteAllAnnotationsForQuiz(questionIds = []) {
  const uniqueIds = [...new Set((questionIds || []).filter(Boolean))];
  if (uniqueIds.length === 0) {
    return { totalDeleted: 0, cloudDeleted: 0, localDeleted: 0 };
  }

  let cloudDeleted = 0;
  const db = await initFirestore();
  if (db) {
    cloudDeleted = await deleteCloudAnnotationsByQuestionIds(db, uniqueIds);
  }

  const localDeleted = deleteLocalAnnotationsByQuestionIds(uniqueIds);
  uniqueIds.forEach(id => setCachedAnnotationCount(id, 0));

  return {
    totalDeleted: cloudDeleted + localDeleted,
    cloudDeleted,
    localDeleted
  };
}

async function deleteCloudAnnotationsByQuestionIds(db, questionIds) {
  const { collection, query, where, getDocs, writeBatch } = await import(
    "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
  );

  const queryPromises = [];
  for (let i = 0; i < questionIds.length; i += 30) {
    const chunk = questionIds.slice(i, i + 30);
    const q = query(collection(db, "annotations"), where("questionId", "in", chunk));
    queryPromises.push(getDocs(q));
  }

  const snapshots = await Promise.all(queryPromises);
  const docRefs = [];
  snapshots.forEach(snap => {
    snap.forEach(docSnap => docRefs.push(docSnap.ref));
  });

  for (let i = 0; i < docRefs.length; i += 400) {
    const batch = writeBatch(db);
    docRefs.slice(i, i + 400).forEach(ref => batch.delete(ref));
    await batch.commit();
  }

  return docRefs.length;
}
