/**
 * Endpoint Serverless de Vercel para obtener la IP real del cliente
 * Responsabilidad: Leer la dirección IP desde los encabezados HTTP del proxy de Vercel
 */

export default function handler(req, res) {
  const forwarded = req.headers["x-forwarded-for"];
  const rawIp =
    (typeof forwarded === "string" && forwarded.split(",")[0].trim()) ||
    req.headers["x-real-ip"] ||
    req.headers["x-vercel-forwarded-for"] ||
    req.socket?.remoteAddress ||
    "";

  const cleanIp = String(rawIp).replace(/^::ffff:/, "").trim();

  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({ ip: cleanIp || null });
}
