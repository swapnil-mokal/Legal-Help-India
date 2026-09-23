// Legal Helpdesk India — बॅकएंड (Google Apps Script) जोडणी
// ▼ तुमचा Apps Script Web app URL (नवीन URL बनवला तर इथे बदला — README बघा)
const API_URL = "https://script.google.com/macros/s/AKfycbw3fCaaI4vqtclHyyXWPjFvLR2gSyxvPv1My_f2r5DauCbX9iojw-pvAvS8cV0QMlGO/exec";

// पूर्वीच्या fetch("/.netlify/functions/...") सारखाच वापरता येईल असा छोटा सहायक.
// Apps Script ला CORS preflight चालत नाही, म्हणून Content-Type: text/plain वापरला आहे.
async function apiFetch(path, opts) {
  opts = opts || {};
  const parts = path.split("?");
  const payload = { _fn: parts[0], _method: (opts.method || "GET").toUpperCase() };
  new URLSearchParams(parts[1] || "").forEach(function (v, k) { payload[k] = v; });
  if (opts.body) { try { Object.assign(payload, JSON.parse(opts.body)); } catch (e) {} }

  if (API_URL.indexOf("PASTE_") === 0) {
    return { ok: false, status: 500, json: async function () { return { error: "config.js मध्ये API_URL अजून टाकलेली नाही." }; } };
  }
  const r = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  const data = await r.json();
  const status = data._status || 200;
  return { ok: status < 400, status: status, json: async function () { return data; } };
}
