/**
 * Utilidad de Formateo de Justificaciones Teóricas y Retroalimentación
 * Responsabilidad: Parsear markdown básico, tablas, listas, encabezados y código Java
 * Cumple con directivas de arquitectura en AGENTS.md (SoC, funciones puras < 40 líneas)
 */

export function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Resaltador de sintaxis Java ligero y seguro basado en tokenización de una sola pasada
 */
function highlightJava(rawCode) {
  const escaped = escapeHtml(rawCode);

  const TOKEN_REGEX = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(@\w+)|(\b(?:package|import|public|private|protected|class|interface|return|void|final|static|new|extends|implements)\b)|(\b(?:String|Double|Long|List|Producto|Usuario|MensajeService|SaludoController|DemoApplication|ApplicationContext|ConfigurableApplicationContext|SpringApplication|System|ProductoRepository|UsuarioRepository|CatalogoService|ResponseEntity)\b)/g;

  return escaped.replace(TOKEN_REGEX, (match, comment, str, annotation, keyword, cls) => {
    if (comment) return `<span class="syntax-comment">${comment}</span>`;
    if (str) return `<span class="syntax-string">${str}</span>`;
    if (annotation) return `<span class="syntax-annotation">${annotation}</span>`;
    if (keyword) return `<span class="syntax-keyword">${keyword}</span>`;
    if (cls) return `<span class="syntax-class">${cls}</span>`;
    return match;
  });
}

/**
 * Parsea un bloque de tabla Markdown (| col | col |) a estructura HTML <table>
 */
function parseTableBlock(block) {
  const lines = block.split(/\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length < 2 || !lines[0].startsWith("|")) return null;

  const parseCells = line => line.replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());
  const headerCells = parseCells(lines[0]);
  const dataLines = lines.slice(1).filter(l => !/^\|?\s*[-:]+[-| :]*\|?$/.test(l));

  const thHtml = headerCells.map(c => `<th>${c}</th>`).join("");
  const trHtml = dataLines.map(l => {
    const cells = parseCells(l);
    return `<tr>${cells.map(c => `<td>${c}</td>`).join("")}</tr>`;
  }).join("");

  return `
    <div class="explanation-table-wrapper">
      <table class="explanation-table">
        <thead><tr>${thHtml}</tr></thead>
        <tbody>${trHtml}</tbody>
      </table>
    </div>
  `;
}

/**
 * Parsea un bloque de viñetas Markdown (* item o - item) a <ul><li>
 */
function parseListBlock(block) {
  const lines = block.split(/\n/).map(l => l.trim()).filter(Boolean);
  const isList = lines.every(l => l.startsWith("* ") || l.startsWith("- "));
  if (!isList) return null;

  const items = lines.map(l => `<li>${l.substring(2).trim()}</li>`).join("");
  return `<ul class="explanation-ul">${items}</ul>`;
}

/**
 * Convierte una justificación con soporte de Markdown a HTML enriquecido
 * @param {string} text - Contenido en markdown o texto plano
 * @returns {string} HTML seguro y formateado
 */
export function formatExplanation(text) {
  if (!text) return "";

  // 1. Extraer bloques de código delimitados por ```...```
  const codeBlocks = [];
  let processed = text.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const placeholder = `@@CODEBLOCK_${codeBlocks.length}@@`;
    codeBlocks.push({ lang: (lang || "text").toLowerCase(), code: code.trim() });
    return placeholder;
  });

  // 2. Escapar caracteres HTML en el texto restante
  processed = escapeHtml(processed);

  // 3. Transformaciones semánticas de Markdown
  processed = processed.replace(/^#### (.*?)$/gm, '<h5 class="explanation-h4">$1</h5>');
  processed = processed.replace(/^### (.*?)$/gm, '<h4 class="explanation-h3">$1</h4>');
  processed = processed.replace(/^---$/gm, '<hr class="explanation-hr" />');
  processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  processed = processed.replace(/`([^`]+)`/g, '<code class="explanation-inline-code">$1</code>');

  // 4. Dividir por párrafos preservando encabezados, tablas, listas y bloques especiales
  const rawParagraphs = processed.split(/\n\s*\n/);
  const formattedBlocks = rawParagraphs.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("<h4") ||
      trimmed.startsWith("<h5") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("@@CODEBLOCK_")
    ) {
      return trimmed;
    }

    const tableHtml = parseTableBlock(trimmed);
    if (tableHtml) return tableHtml;

    const listHtml = parseListBlock(trimmed);
    if (listHtml) return listHtml;

    return `<p class="explanation-p">${trimmed.replace(/\n/g, "<br/>")}</p>`;
  });

  let htmlResult = formattedBlocks.filter(Boolean).join("\n");

  // 5. Reinsertar los bloques de código con el resaltado correspondiente
  codeBlocks.forEach((item, index) => {
    const formattedCode = item.lang === "java" ? highlightJava(item.code) : escapeHtml(item.code);
    const codeBlockHtml = `
      <div class="explanation-code-container">
        <div class="explanation-code-header">
          <span class="code-lang-tag">${item.lang.toUpperCase()}</span>
          <span class="code-copy-hint">Ejemplo de código</span>
        </div>
        <pre class="explanation-code-block"><code class="language-${item.lang}">${formattedCode}</code></pre>
      </div>
    `;
    htmlResult = htmlResult.replace(`@@CODEBLOCK_${index}@@`, codeBlockHtml);
  });

  return htmlResult;
}
