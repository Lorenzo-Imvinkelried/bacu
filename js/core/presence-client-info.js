/**
 * Utilidades de Cliente para Presencia (IP pública, dispositivo e identificador)
 * Responsabilidad: Resolver la dirección IP del cliente y parsear información del navegador/SO
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

const IP_CACHE_KEY = "bacu_presence_ip_cache";
const IP_CACHE_TTL_MS = 10 * 60 * 1000;

/**
 * Generar identificador aleatorio único
 * @param {string} prefix
 * @returns {string}
 */
export function generateUniqueId(prefix = "id") {
  const rand = typeof crypto?.randomUUID === "function"
    ? crypto.randomUUID().replace(/-/g, "").slice(0, 16)
    : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}_${rand}`;
}

/**
 * Leer o crear un identificador persistido en Storage
 * @param {Storage} storage
 * @param {string} key
 * @param {string} prefix
 * @returns {string}
 */
export function getOrCreateStoredId(storage, key, prefix) {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;
  } catch (_) {}

  const id = generateUniqueId(prefix);
  try { storage.setItem(key, id); } catch (_) {}
  return id;
}

/**
 * Resolver la IP pública del cliente usando /api/ip (Vercel) con fallback a ipify
 * @returns {Promise<string>}
 */
export async function resolveClientIp() {
  const cached = readCachedIp();
  if (cached) return cached;

  const endpoints = [
    "/api/ip",
    "https://api.ipify.org?format=json",
    "https://api64.ipify.org?format=json"
  ];

  for (const url of endpoints) {
    const ip = await fetchIpFromEndpoint(url);
    if (ip && !isLoopbackIp(ip)) {
      cacheIp(ip);
      return ip;
    }
  }
  return "No disponible";
}

async function fetchIpFromEndpoint(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3500);
  try {
    const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;
    const data = await res.json();
    const candidate = typeof data?.ip === "string" ? data.ip.trim() : "";
    return /^[0-9a-fA-F:.]{3,45}$/.test(candidate) ? candidate : null;
  } catch (_) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function isLoopbackIp(ip) {
  return ip === "127.0.0.1" || ip === "::1" || ip === "0.0.0.0";
}

function readCachedIp() {
  try {
    const raw = window.sessionStorage.getItem(IP_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.ip && (Date.now() - (parsed.savedAt || 0)) < IP_CACHE_TTL_MS) {
      return parsed.ip;
    }
  } catch (_) {}
  return null;
}

function cacheIp(ip) {
  try {
    window.sessionStorage.setItem(IP_CACHE_KEY, JSON.stringify({ ip, savedAt: Date.now() }));
  } catch (_) {}
}

/**
 * Parsear navegador, sistema operativo y tipo de dispositivo desde el User-Agent
 * @param {string} ua
 * @returns {{browser: string, os: string, deviceType: string, label: string}}
 */
export function detectDeviceInfo(ua = "") {
  let browser = "Navegador";
  if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/OPR\/|Opera/i.test(ua)) browser = "Opera";
  else if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Chrome\/|CriOS\//i.test(ua)) browser = "Chrome";
  else if (/Safari\//i.test(ua)) browser = "Safari";

  let os = "Otro SO";
  if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Windows/i.test(ua)) os = "Windows";
  else if (/Mac OS X|Macintosh/i.test(ua)) os = "macOS";
  else if (/CrOS/i.test(ua)) os = "ChromeOS";
  else if (/Linux/i.test(ua)) os = "Linux";

  let deviceType = "Escritorio";
  if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) deviceType = "Tablet";
  else if (/Mobi|Android|iPhone|iPod/i.test(ua)) deviceType = "Móvil";

  return { browser, os, deviceType, label: `${browser} · ${os}` };
}
