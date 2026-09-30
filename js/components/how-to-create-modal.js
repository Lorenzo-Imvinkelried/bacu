/**
 * Componente de Modal: ¿Cómo se crean los cuestionarios?
 * Responsabilidad: Explicar el proceso de generación con Gemini y proveer el prompt maestro
 * Cumple con directivas de arquitectura en AGENTS.md (SoC, < 300 líneas)
 */

export const CREATION_PROMPT = `Quiero que analices exhaustivamente el PDF que te voy a proporcionar y lo conviertas en un banco de preguntas de opción múltiple para estudiar y comprobar mi comprensión del contenido.

El objetivo es cubrir todos los conceptos importantes del material, sin dejar temas relevantes afuera y sin limitar artificialmente la cantidad de preguntas.

### 1. Análisis del material

* Analiza el PDF diapositiva por diapositiva, respetando el orden original.

* Identifica todos los conceptos, definiciones, principios, características, procedimientos, ejemplos, diferencias, relaciones y detalles técnicos relevantes.

* No generes preguntas sobre diapositivas que contengan únicamente títulos, separadores, índices o información sin contenido educativo.

* Si una diapositiva contiene varios conceptos importantes, genera tantas preguntas como sean necesarias para cubrirlos adecuadamente.

* No te limites a una pregunta por diapositiva. Una misma diapositiva puede requerir varias preguntas independientes.

* Si un concepto es demasiado amplio, divídelo en varias preguntas que evalúen distintos aspectos.

* No repitas preguntas que evalúen exactamente el mismo conocimiento, salvo que sea necesario para evaluar una dimensión diferente del concepto.

### 2. Generación de preguntas

Por cada concepto relevante, crea una o más preguntas de opción múltiple que permitan comprobar si realmente comprendí el material.

Cada pregunta debe cumplir con lo siguiente:

* Tener un enunciado claro, preciso y comprensible por sí solo, sin depender de la diapositiva original.

* Incluir 1 respuesta correcta y 3 respuestas incorrectas que sean plausibles y estén relacionadas con el tema.

* Evitar respuestas incorrectas demasiado obvias, absurdas o fáciles de descartar sin conocer el contenido.

* Construir distractores que representen confusiones razonables, diferencias sutiles entre conceptos o errores comunes de comprensión.

* Evitar pistas involuntarias, como que la respuesta correcta sea mucho más larga, específica o detallada que las demás.

* No utilizar preguntas ambiguas en las que varias respuestas puedan considerarse correctas, salvo cuando se indique expresamente que hay más de una respuesta válida.

* Priorizar la comprensión real del contenido por encima de la memorización literal.

### 3. Preguntas con múltiples respuestas correctas

Cuando el contenido lo justifique, incluye preguntas en las que haya más de una opción correcta.

* Utiliza este formato únicamente cuando sea útil para evaluar listas de características, combinaciones de condiciones, propiedades, clasificaciones o relaciones entre conceptos.

* Indica claramente en el enunciado que se deben seleccionar todas las opciones correctas.

* Mantén un total de 4 opciones por pregunta, con al menos una correcta y al menos una incorrecta.

* Indica exactamente cuáles son las respuestas correctas.

* No conviertas todas las preguntas en preguntas de selección múltiple. Utiliza este formato solo cuando aporte valor.

### 4. Cobertura y profundidad

La prioridad es lograr una cobertura completa del contenido educativo del PDF.

* No establezcas un límite fijo de preguntas por diapositiva, capítulo, unidad o documento.

* Si una diapositiva contiene mucha información, genera suficientes preguntas para cubrir sus distintos conceptos y detalles relevantes.

* Si un concepto importante aparece en varias diapositivas, intégralo de forma coherente y evita duplicaciones innecesarias.

* Incluye preguntas sobre diferencias entre conceptos similares, casos de uso, ventajas, limitaciones, condiciones de aplicación y consecuencias cuando estos aspectos aparezcan en el material.

* Si hay ejemplos prácticos, fragmentos de código, diagramas, tablas o esquemas relevantes, utilízalos para crear preguntas que evalúen su interpretación y aplicación.

* No inventes información que no esté respaldada por el PDF. Si necesitas conocimientos externos para aclarar algo, indícalo explícitamente y no lo presentes como contenido del documento.

### 5. Formato de salida

No generes JSON ni código. Quiero las preguntas en texto plano, organizadas y fáciles de copiar para luego pasárselas a otro agente que se encargará de convertirlas al formato correspondiente.

Utiliza el siguiente formato:

Pregunta 1: (Enunciado de la pregunta)

A) (Opción A)
B) (Opción B)
C) (Opción C)
D) (Opción D)

Respuesta correcta: (Letra o letras correctas).

Explicación: (Breve explicación de por qué la respuesta es correcta y, cuando aporte valor, por qué las otras opciones son incorrectas).

Diapositiva de origen: (Número de diapositiva).

Para las preguntas con múltiples respuestas correctas, indícalo claramente en el enunciado y señala todas las letras correctas.

### 6. Control de calidad antes de finalizar

Antes de entregar el resultado:

1. Comprueba que todas las diapositivas con contenido educativo relevante hayan sido analizadas.

2. Verifica que cada concepto importante esté cubierto por al menos una pregunta.

3. Revisa que cada pregunta tenga exactamente 4 opciones y que la cantidad de respuestas correctas sea la indicada.

4. Comprueba que las respuestas incorrectas sean plausibles y que no haya ambigüedades.

5. Elimina duplicaciones innecesarias y corrige cualquier error conceptual.

6. Verifica que las respuestas correctas coincidan con el contenido del PDF.

7. Si el documento es demasiado extenso para una sola respuesta, divídelo en partes consecutivas, manteniendo el orden de las diapositivas y sin omitir contenido.

Instrucción final: No busques generar una cantidad determinada de preguntas. Buscá que el banco de preguntas cubra de manera exhaustiva, precisa y útil todo el contenido educativo relevante del PDF. Es preferible generar más preguntas bien diseñadas que dejar conceptos importantes sin evaluar.`;

/**
 * Escapar caracteres HTML para inserción segura en el DOM
 * @param {string} str 
 * @returns {string}
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Renderizar modal explicativo de creación de cuestionarios
 * @returns {string} HTML del diálogo modal
 */
export function renderHowToCreateModal() {
  const escapedPrompt = escapeHtml(CREATION_PROMPT);

  return `
    <div id="how-to-create-modal" class="moodle-dialogue-base modal-backdrop-custom hidden" role="dialog" aria-modal="true" aria-labelledby="how-to-create-title">
      <div class="moodle-dialogue how-to-create-dialogue-wrap">
        <div class="moodle-dialogue-hd">
          <div class="how-to-create-hd-title">
            <span class="how-to-create-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </span>
            <h4 class="modal-title" id="how-to-create-title">¿Cómo se crean los cuestionarios?</h4>
          </div>
          <button type="button" class="btn-close-modal" id="btn-how-to-create-close-x" title="Cerrar ventana" aria-label="Cerrar">×</button>
        </div>

        <div class="moodle-dialogue-bd how-to-create-dialogue-bd">
          <div class="how-to-create-explanation">
            <div class="how-to-create-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              <span>Flujo de Creación con Google Gemini</span>
            </div>
            <p>
              Los cuestionarios de <strong>BACU</strong> se crean cargando los archivos <strong>PDF del material de estudio</strong> (diapositivas, apuntes o presentaciones de la cátedra) en <strong>Google Gemini</strong> junto con el siguiente prompt maestro.
            </p>
            <p class="how-to-create-steps">
              <strong>Paso a paso:</strong>
              <br>1. Abrí Google Gemini y adjuntá el PDF con el contenido educativo.
              <br>2. Copiá y pegá el prompt que figura abajo en el cuadro de mensaje.
              <br>3. Gemini generará el banco exhaustivo de preguntas en texto plano, listo para integrarse directamente a la plataforma.
            </p>
          </div>

          <div class="prompt-box-card">
            <div class="prompt-box-header">
              <span class="prompt-box-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Prompt maestro para Gemini (Texto Completo)
              </span>
              <button type="button" class="btn-copy-prompt" id="btn-copy-prompt" title="Copiar prompt completo al portapapeles">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>Copiar Prompt</span>
              </button>
            </div>
            <pre class="prompt-text-pre" id="prompt-text-display">${escapedPrompt}</pre>
          </div>
        </div>

        <div class="moodle-dialogue-ft how-to-create-dialogue-ft">
          <button type="button" id="btn-copy-prompt-footer" class="btn btn-secondary btn-copy-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copiar Prompt</span>
          </button>
          <button type="button" id="btn-how-to-create-close" class="btn btn-primary">Cerrar</button>
        </div>
      </div>
    </div>
  `;
}
