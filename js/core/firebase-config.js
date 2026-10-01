/**
 * Configuración de Firebase para Baúl de Cuestionarios (BACU)
 * 
 * INSTRUCCIONES:
 * Reemplazá los valores que figuran abajo con las credenciales que te da Firebase
 * en: Consola de Firebase -> Configuración del Proyecto -> General -> Tus apps (Web app).
 * 
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAasr8nHHDXSYsK-liWzdBheeIycuwj51I",
  authDomain: "bacu-utn.firebaseapp.com",
  projectId: "bacu-utn",
  storageBucket: "bacu-utn.firebasestorage.app",
  messagingSenderId: "965130902172",
  appId: "1:965130902172:web:0676bfe31c4b1332fe2b59",
  measurementId: "G-9TV4655K2X"
};

/**
 * Validador para determinar si Firebase ya fue configurado con credenciales reales
 * @returns {boolean}
 */
export function isFirebaseConfigured() {
  return (
    Boolean(FIREBASE_CONFIG.apiKey) &&
    !FIREBASE_CONFIG.apiKey.startsWith("TU_") &&
    Boolean(FIREBASE_CONFIG.projectId) &&
    !FIREBASE_CONFIG.projectId.startsWith("TU_")
  );
}
