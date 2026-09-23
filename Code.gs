/**
 * Legal Helpdesk India — पूर्ण बॅकएंड (Google Apps Script)
 * ---------------------------------------------------------
 * Netlify functions आणि JSONBin यांची जागा हीच फाईल घेते. GitHub Pages फक्त स्टॅटिक
 * फाईल्स चालवतं, म्हणून AI कॉल, फॉर्म सेव्हिंग, रिव्ह्यू आणि Admin हे सर्व इथे चालतं.
 * डेटा तुमच्या Google Sheet मध्ये साठवला जातो (Excel म्हणून डाउनलोड करता येतो).
 *
 * गुप्त माहिती (Secrets) कोडमध्ये लिहू नका. Apps Script मध्ये:
 * Project Settings (⚙) > Script properties > Add script property
 *   GROQ_API_KEY    = तुमची Groq key
 *   ADMIN_PASSWORD  = Admin पॅनलचा पासवर्ड
 * सेटअपच्या पूर्ण पायऱ्या README-सेटअप-सूचना.md मध्ये आहेत.
 */

const SYS_PROMPTS = {
    mr: "तुम्ही भारतीय संविधान आणि सामान्य कायद्याची चांगली जाण असलेले एक मदतनीस आहात. वापरकर्त्याने विचारलेल्या समस्येला मराठी भाषेत, साध्या व स्पष्ट शब्दांत, प्रामाणिक आणि व्यावहारिक उत्तर द्या. शक्य असल्यास संबंधित घटनात्मक कलमे किंवा कायद्यांचा उल्लेख करा. उत्तराच्या शेवटी हे स्पष्ट करा की हे सामान्य माहितीसाठी आहे आणि गंभीर प्रकरणांसाठी वकिलाचा सल्ला घ्यावा.\n\nमहत्त्वाचे — फॉरमॅटिंगचे नियम: उत्तर साध्या मजकुरात (plain text) लिहा. मार्कडाऊन वापरू नका — म्हणजे ** (बोल्डसाठी), # (हेडिंगसाठी), | (टेबलसाठी), किंवा <br> सारखे HTML टॅग अजिबात वापरू नका. मुद्दे द्यायचे असल्यास प्रत्येक मुद्दा नवीन ओळीवर, सुरुवातीला फक्त एक डॅश (-) वापरून लिहा. परिच्छेदांमध्ये एक रिकामी ओळ सोडा. हे उत्तर मोबाईल फोनवर वाचलं जाईल, त्यामुळे साधं, स्वच्छ आणि सरळ लिहा.\n\nअत्यंत महत्त्वाचे — लांबीची मर्यादा: उत्तर जास्तीत जास्त ६-८ छोट्या मुद्द्यांत (बुलेट पॉईंट्स) मावेल इतकंच लिहा. उत्तर अर्धवट न सोडता नेहमी पूर्ण वाक्यात संपवा — मध्येच तुटलेलं उत्तर देऊ नका. सविस्तर स्पष्टीकरणाऐवजी थोडक्यात, नेमक्या व पूर्ण मुद्द्यांत उत्तर द्या.",
    hi: "आप भारतीय संविधान और सामान्य कानून की अच्छी समझ रखने वाले सहायक हैं। उपयोगकर्ता की समस्या का हिंदी भाषा में, सरल और स्पष्ट शब्दों में, ईमानदार और व्यावहारिक उत्तर दें। यदि संभव हो तो संबंधित संवैधानिक अनुच्छेदों या कानूनों का उल्लेख करें। उत्तर के अंत में यह स्पष्ट करें कि यह सामान्य जानकारी के लिए है और गंभीर मामलों में वकील से सलाह लेनी चाहिए।\n\nमहत्वपूर्ण — फॉर्मेटिंग नियम: उत्तर सादे टेक्स्ट में लिखें। मार्कडाउन का उपयोग न करें — यानी ** (बोल्ड के लिए), # (हेडिंग के लिए), | (टेबल के लिए), या <br> जैसे HTML टैग बिल्कुल न करें। बिंदु देने हों तो हर बिंदु नई लाइन पर, शुरुआत में केवल एक डैश (-) लगाकर लिखें। पैराग्राफ के बीच एक खाली लाइन छोड़ें। यह उत्तर मोबाइल फोन पर पढ़ा जाएगा, इसलिए सरल, स्वच्छ और सीधा लिखें।\n\nअत्यंत महत्वपूर्ण — लंबाई की सीमा: उत्तर अधिकतम 6-8 छोटे बिंदुओं में समाए, उतना ही लिखें। उत्तर अधूरा न छोड़ें — हमेशा पूरे वाक्य में समाप्त करें, बीच में टूटा हुआ उत्तर न दें। विस्तृत विवरण के बजाय संक्षिप्त, सटीक और पूर्ण बिंदुओं में उत्तर दें.",
    en: "You are an assistant with strong knowledge of the Indian Constitution and general law. Give an honest, practical answer in clear, simple English to the user's problem. Where relevant, mention applicable constitutional articles or laws. End by clarifying this is general information only and that a lawyer should be consulted for serious matters.\n\nImportant — formatting rules: Write the answer in plain text. Do not use markdown — no ** for bold, no # for headings, no | for tables, and no HTML tags like <br>. If you need to list points, put each point on its own new line starting with a single dash (-). Leave one blank line between paragraphs. This will be read on a mobile phone, so keep it clean and simple.\n\nVery important — length limit: Keep the answer to at most 6-8 short bullet points. Never leave the answer unfinished — always end on a complete sentence, never cut off mid-thought. Prefer being brief and precise over being exhaustive."
  };

const LEGAL_SHEET = "Legal Help Requests";
const LEGAL_COLS = ["submittedAt","name","mobile","email","city","district","category","description","preferredTime","status","lang","id"];
const LEGAL_HEADERS = ["Submitted At","Name","Mobile","Email","City","District","Category","Description","Preferred Time","Status","Language","Request ID"];
const REVIEW_SHEET = "Reviews";
const REVIEW_COLS = ["submittedAt","name","rating","message","lang","id","status"];
const REVIEW_HEADERS = ["Submitted At","Name","Rating","Message","Language","Review ID","Status"];

function doGet() { return out_({ ok: true, message: "Legal Helpdesk API चालू आहे" }); }

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    switch (d._fn) {
      case "ask": return out_(ask_(d));
      case "submit-legal-help": return out_(locked_(function () { return submitLegal_(d); }));
      case "submit-review": return out_(locked_(function () { return submitReview_(d); }));
      case "reviews": return out_(publicReviews_());
      case "admin-reviews":
        return out_(admin_(d, function () { return { reviews: read_(REVIEW_SHEET, REVIEW_COLS, REVIEW_HEADERS).sort(newest_) }; }));
      case "review-action": return out_(admin_(d, function () { return reviewAction_(d); }));
      case "admin-legal-requests":
        return out_(admin_(d, function () {
          if (d._method === "POST") return setStatus_(d);
          return { requests: read_(LEGAL_SHEET, LEGAL_COLS, LEGAL_HEADERS).sort(newest_) };
        }));
    }
    return out_({ error: "Unknown function", _status: 400 });
  } catch (err) {
    return out_({ error: err.message, _status: 500 });
  }
}

// ---------- सहायक ----------
function out_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function newest_(a, b) { return new Date(b.submittedAt) - new Date(a.submittedAt); }
function locked_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try { return fn(); } finally { lock.releaseLock(); }
}
function admin_(d, fn) {
  const pw = prop_("ADMIN_PASSWORD");
  if (!pw) return { error: "Script properties मध्ये ADMIN_PASSWORD सेट केलेली नाही.", _status: 500 };
  if ((d.password || "") !== pw) return { error: "चुकीचा पासवर्ड.", _status: 401 };
  return locked_(fn);
}
function sheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
  return sh;
}
// Sheet मध्ये "=" ने सुरू होणारा मजकूर formula म्हणून चालू नये म्हणून
function safe_(v) { return (typeof v === "string" && /^[=+\-@]/.test(v)) ? "'" + v : v; }
function read_(name, cols, headers) {
  const sh = sheet_(name, headers);
  const last = sh.getLastRow();
  if (last < 2) return [];
  return sh.getRange(2, 1, last - 1, cols.length).getValues().map(function (row) {
    const o = {};
    cols.forEach(function (c, i) {
      let v = row[i];
      if (v instanceof Date) v = v.toISOString();
      o[c] = c === "rating" ? (Number(v) || 5) : String(v === undefined || v === null ? "" : v);
    });
    if (name === REVIEW_SHEET && !o.status) o.status = "pending";
    return o;
  });
}
function rowOf_(sh, cols, id) {
  const last = sh.getLastRow();
  if (last < 2) return -1;
  const ids = sh.getRange(2, cols.indexOf("id") + 1, last - 1, 1).getValues().map(function (r) { return String(r[0]); });
  const i = ids.indexOf(String(id));
  return i < 0 ? -1 : i + 2;
}
function newId_() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function str_(v, n) { return (v || "").toString().trim().slice(0, n); }

// ---------- फॉर्म / रिव्ह्यू ----------
function submitLegal_(d) {
  const name = str_(d.name, 100);
  const mobile = (d.mobile || "").toString().replace(/\D/g, "");
  const description = str_(d.description, 1500);
  if (!name) return { error: "नाव आवश्यक आहे.", _status: 400 };
  if (mobile.length !== 10) return { error: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका.", _status: 400 };
  if (!description) return { error: "कृपया तुमची समस्या थोडक्यात लिहा.", _status: 400 };
  const r = {
    submittedAt: new Date().toISOString(), name: name, mobile: mobile, email: str_(d.email, 120),
    city: str_(d.city, 100), district: str_(d.district, 100), category: str_(d.category, 100),
    description: description, preferredTime: str_(d.preferredTime, 50), status: "New",
    lang: str_(d.lang || "mr", 5), id: newId_()
  };
  sheet_(LEGAL_SHEET, LEGAL_HEADERS).appendRow(LEGAL_COLS.map(function (c) { return safe_(r[c]); }));
  return { ok: true };
}

function submitReview_(d) {
  const name = str_(d.name, 80), message = str_(d.message, 600);
  let rating = parseInt(d.rating, 10);
  if (isNaN(rating)) rating = 5;
  rating = Math.max(1, Math.min(5, rating));
  if (!name || !message) return { error: "नाव आणि प्रतिक्रिया आवश्यक आहे.", _status: 400 };
  const r = { submittedAt: new Date().toISOString(), name: name, rating: rating, message: message,
              lang: str_(d.lang || "mr", 5), id: newId_(), status: "pending" };
  sheet_(REVIEW_SHEET, REVIEW_HEADERS).appendRow(REVIEW_COLS.map(function (c) { return safe_(r[c]); }));
  return { ok: true };
}

function publicReviews_() {
  const list = read_(REVIEW_SHEET, REVIEW_COLS, REVIEW_HEADERS)
    .filter(function (r) { return r.status === "approved"; })
    .sort(newest_)
    .map(function (r) { return { name: r.name, rating: r.rating, message: r.message, lang: r.lang, createdAt: r.submittedAt }; });
  return { reviews: list };
}

// ---------- Admin ----------
function reviewAction_(d) {
  if (!d.id || ["approve", "reject", "delete"].indexOf(d.action) === -1) return { error: "invalid id or action", _status: 400 };
  const sh = sheet_(REVIEW_SHEET, REVIEW_HEADERS);
  const row = rowOf_(sh, REVIEW_COLS, d.id);
  if (row < 0) return { error: "रिव्ह्यू सापडला नाही.", _status: 404 };
  if (d.action === "delete") sh.deleteRow(row);
  else sh.getRange(row, REVIEW_COLS.indexOf("status") + 1).setValue(d.action === "approve" ? "approved" : "rejected");
  return { ok: true };
}
function setStatus_(d) {
  if (!d.id || ["New", "Contacted", "Resolved"].indexOf(d.status) === -1) return { error: "invalid id or status", _status: 400 };
  const sh = sheet_(LEGAL_SHEET, LEGAL_HEADERS);
  const row = rowOf_(sh, LEGAL_COLS, d.id);
  if (row < 0) return { error: "विनंती सापडली नाही.", _status: 404 };
  sh.getRange(row, LEGAL_COLS.indexOf("status") + 1).setValue(d.status);
  return { ok: true };
}

// ---------- AI (Groq) ----------
function pickModel_(key) {
  const cache = CacheService.getScriptCache();
  const hit = cache.get("groqModel");
  if (hit) return hit;
  let chosen = "openai/gpt-oss-120b";
  try {
    const r = UrlFetchApp.fetch("https://api.groq.com/openai/v1/models", { headers: { Authorization: "Bearer " + key }, muteHttpExceptions: true });
    const ids = (JSON.parse(r.getContentText()).data || []).map(function (m) { return m.id; });
    const usable = ids.filter(function (id) { return !/whisper|orpheus|guard/i.test(id); });
    const pref = ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.8-27b", "qwen/qwen3.6-27b", "groq/compound",
                  "groq/compound-mini", "allam-2-7b", "llama-3.3-70b-versatile", "llama-3.1-70b-versatile", "llama-3.1-8b-instant"];
    chosen = pref.filter(function (m) { return usable.indexOf(m) >= 0; })[0]
      || usable.filter(function (id) { return /gpt|qwen|llama/i.test(id); })[0] || usable[0] || chosen;
    cache.put("groqModel", chosen, 21600);
  } catch (e) {}
  return chosen;
}

function ask_(d) {
  const problem = (d.problem || "").toString().trim().slice(0, 3000);
  if (!problem) return { error: "problem is required", _status: 400 };
  const key = prop_("GROQ_API_KEY");
  if (!key) return { error: "Script properties मध्ये GROQ_API_KEY सेट केलेली नाही.", _status: 500 };
  const lang = (d.lang || "mr").toString();
  const resp = UrlFetchApp.fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "post", contentType: "application/json", muteHttpExceptions: true,
    headers: { Authorization: "Bearer " + key },
    payload: JSON.stringify({
      model: pickModel_(key),
      messages: [{ role: "system", content: SYS_PROMPTS[lang] || SYS_PROMPTS.mr }, { role: "user", content: problem }],
      max_tokens: 900, temperature: 0.4
    })
  });
  const data = JSON.parse(resp.getContentText());
  if (resp.getResponseCode() >= 400) {
    return { error: (data.error && data.error.message) || "AI सेवेकडून उत्तर मिळाले नाही.", _status: 502 };
  }
  const c = data.choices && data.choices[0] && data.choices[0].message;
  return { text: (c && c.content) || "" };
}
