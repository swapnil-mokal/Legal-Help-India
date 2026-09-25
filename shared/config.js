/* Legal Helpdesk India — shared public configuration. Never put secrets here. */
window.LHI_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbzoOa1-tZCWfhCNB_x8zy05xWgtf6YvuwtvRsQWm9apH6O7reTF3BZ5UCpJDYt-0GU2ow/exec",
  whatsappNumber: "919870020674",
  whatsappDisplay: "+91 98700 20674",
  email: "sbm.group.legal.services@gmail.com",
  brand: "Legal Helpdesk India",
  tagline: "भारतीय संविधान, नागरिक हक्क आणि कायदेशीर मार्गदर्शन"
};

async function apiFetch(path, opts) {
  opts = opts || {};
  const parts = path.split("?");
  const payload = { _fn: parts[0], _method: (opts.method || "GET").toUpperCase() };
  new URLSearchParams(parts[1] || "").forEach((v,k) => payload[k] = v);
  if (opts.body) { try { Object.assign(payload, JSON.parse(opts.body)); } catch(e) {} }
  const url = window.LHI_CONFIG.apiUrl;
  if (!url || url.indexOf("PASTE_") === 0) {
    return {ok:false,status:500,json:async()=>({error:"Google Apps Script API URL अजून सेट केलेला नाही."})};
  }
  const r = await fetch(url, {method:"POST", headers:{"Content-Type":"text/plain;charset=utf-8"}, body:JSON.stringify(payload)});
  const data = await r.json();
  const status = data._status || 200;
  return {ok:status < 400,status,json:async()=>data};
}
