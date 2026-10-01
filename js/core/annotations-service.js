/**
 * Servicio de Anotaciones Colaborativas (Firebase Firestore & Fallback Local)
 * Responsabilidad: Gestión de lectura y escritura de notas comunitarias por pregunta
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { FIREBASE_CONFIG, isFirebaseConfigured } from "./firebase-config.js";

const LOCAL_STORAGE_KEY = "bacu_local_annotations";
const AUTHOR_STORAGE_KEY = "bacu_author_alias";

let firebaseDb = null;
let firebaseInitialized = false;

/**
 * Inicializar Firebase Firestore de forma asíncrona y diferida
 */
async function initFirestore() {
  if (firebaseInitialized) return firebaseDb;
  if (!isFirebaseConfigured()) return null;

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js");

    const app = initializeApp(FIREBASE_CONFIG);
    firebaseDb = getFirestore(app);
    firebaseInitialized = true;
    return firebaseDb;
  } catch (err) {
    console.warn("No se pudo conectar a Firebase Firestore, usando almacenamiento local:", err);
    return null;
  }
}

/**
 * Obtener el alias guardado del usuario en su navegador
 * @returns {string}
 */
export function getStoredAuthorName() {
  try {
    return localStorage.getItem(AUTHOR_STORAGE_KEY) || "";
  } catch (_) {
    return "";
  }
}

/**
 * Guardar el alias del usuario para no solicitarlo en cada anotación
 * @param {string} name
 */
export function setStoredAuthorName(name) {
  try {
    if (name && name.trim()) {
      localStorage.setItem(AUTHOR_STORAGE_KEY, name.trim());
    }
  } catch (_) {}
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
      querySnapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });

      // Ordenar cronológicamente (más recientes primero)
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      return list;
    } catch (err) {
      console.error("Error al obtener notas desde Firestore:", err);
      // Fallback a local ante errores de red o cuota
      return getLocalAnnotationsForQuestion(questionId);
    }
  }

  return getLocalAnnotationsForQuestion(questionId);
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

  if (!cleanText) {
    throw new Error("El texto de la anotación no puede estar vacío.");
  }

  setStoredAuthorName(cleanAuthor);

  const newAnnotation = {
    questionId,
    author: cleanAuthor,
    text: cleanText,
    createdAt: new Date().toISOString()
  };

  const db = await initFirestore();

  if (db) {
    try {
      const { collection, addDoc } = await import(
        "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
      );

      const docRef = await addDoc(collection(db, "annotations"), newAnnotation);
      return {
        success: true,
        isCloud: true,
        annotation: { id: docRef.id, ...newAnnotation }
      };
    } catch (err) {
      console.warn("Fallo al guardar en la nube, persistiendo en almacenamiento local:", err);
    }
  }

  // Guardar en local como fallback
  const localAnnotation = saveLocalAnnotation(newAnnotation);
  return {
    success: true,
    isCloud: false,
    annotation: localAnnotation
  };
}

/**
 * Auxiliar: Obtener notas del almacenamiento local
 */
function getLocalAnnotationsForQuestion(questionId) {
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

/**
 * Auxiliar: Guardar nota en almacenamiento local
 */
function saveLocalAnnotation(annotation) {
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
