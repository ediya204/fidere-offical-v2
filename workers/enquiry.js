const RECIPIENT = "info@fideretrust.com";
const SENDER = "website@mail.fideretrust.com";
const CLIENT_TYPES = new Set(["Private Client", "Family Office", "Corporate", "Professional Adviser", "Other"]);
const LOCALES = new Set(["en", "zh-hant", "ja", "ar"]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const attempts = new Map();

function json(body, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
    },
  });
}

function clean(value, maximum) {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n?/g, "\n").trim().slice(0, maximum);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character]);
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  try {
    const requestHost = new URL(request.url).hostname;
    const originHost = new URL(origin).hostname;
    if (originHost === requestHost) return true;
    return new Set([originHost, requestHost]).size === 2 &&
      [originHost, requestHost].every((host) => host === "fideretrust.com" || host === "www.fideretrust.com");
  } catch {
    return false;
  }
}

function isRateLimited(key) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 1000) {
    for (const [storedKey, times] of attempts) {
      if (!times.some((time) => now - time < RATE_WINDOW_MS)) attempts.delete(storedKey);
    }
  }
  return recent.length > RATE_LIMIT;
}

export async function handleRequest(request, env) {
  if (request.method !== "POST") return json({ ok: false }, 405);
  if (!isAllowedOrigin(request)) return json({ ok: false }, 403);
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) return json({ ok: false }, 415);
  if (Number(request.headers.get("Content-Length") ?? 0) > 16_384) return json({ ok: false }, 413);

  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  if (isRateLimited(ip)) return json({ ok: false }, 429);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false }, 400); }

  const website = clean(body.website, 200);
  const reference = `FT-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  if (website) return json({ ok: true, reference });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const clientType = clean(body.clientType, 40);
  const message = clean(body.message, 4000);
  const interest = clean(body.interest, 60);
  const locale = clean(body.locale, 10);
  const page = clean(body.page, 300);
  const startedAt = Number(body.startedAt);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!name || name.length < 2 || !emailPattern.test(email) || !CLIENT_TYPES.has(clientType) || message.length < 10 || !LOCALES.has(locale)) return json({ ok: false }, 400);
  if (interest && !/^[a-z][a-z0-9-]{0,59}$/.test(interest)) return json({ ok: false }, 400);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500 || Date.now() - startedAt > 24 * 60 * 60 * 1000) return json({ ok: false }, 400);
  if (!env.EMAIL || typeof env.EMAIL.send !== "function") return json({ ok: false }, 503);

  const submittedAt = new Date().toISOString();
  const country = request.cf?.country || "Not available";
  const details = [
    ["Reference", reference], ["Name", name], ["Email", email], ["Client type", clientType],
    ["Interest", interest || "General enquiry"], ["Language", locale], ["Page", page || "Not available"],
    ["Country", country], ["Submitted", submittedAt],
  ];
  const textBody = `${details.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${message}`;
  const htmlRows = details.map(([label, value]) => `<tr><th align="left" style="padding:6px 18px 6px 0;color:#53606a;font-weight:600">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`).join("");
  const htmlBody = `<div style="font-family:Arial,sans-serif;color:#102b3b;line-height:1.6"><h1 style="font-size:22px">New website enquiry</h1><table style="border-collapse:collapse">${htmlRows}</table><h2 style="font-size:16px;margin-top:28px">Message</h2><p style="white-space:pre-wrap">${escapeHtml(message)}</p></div>`;

  try {
    await env.EMAIL.send({
      from: { email: SENDER, name: "FIDERE TRUST Website" }, to: RECIPIENT, replyTo: email,
      subject: `[Website enquiry] ${clientType}${interest ? ` — ${interest}` : ""} — ${reference}`,
      text: textBody, html: htmlBody,
    });
    return json({ ok: true, reference });
  } catch (error) {
    console.error("Website enquiry delivery failed", error instanceof Error ? error.message : "Unknown email service error");
    return json({ ok: false }, 502);
  }
}

const worker = { fetch: handleRequest };
export default worker;
