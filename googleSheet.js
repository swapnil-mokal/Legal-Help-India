// Legal Helpdesk India — Google Sheet (Google Drive) कडे डेटा पाठवण्यासाठी मदत-फाईल.
// हे पूर्णपणे ऐच्छिक (optional) आहे: जर GOOGLE_SHEET_WEBHOOK_URL सेट केलेली नसेल,
// तर काहीही न करता शांतपणे परत जाते. यामुळे मुख्य फॉर्म सबमिशन कधीही अडकत नाही —
// jsonbin मध्ये सेव्ह होणे हे मुख्य (critical) आहे, Google Sheet मध्ये सेव्ह होणे
// हे जास्तीचे बॅकअप आहे. त्यामुळे इथे error आला तरी तो फक्त log केला जातो.

async function pushToGoogleSheet(type, payload) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) {
    return; // सेटअप केलेलं नसेल तर काहीही करू नका
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ type: type }, payload)),
      redirect: "follow",
      signal: controller.signal
    });
    clearTimeout(timer);
  } catch (err) {
    console.error("Google Sheet कडे डेटा पाठवताना अडचण (यामुळे मुख्य सबमिशन थांबणार नाही):", err.message);
  }
}

module.exports = { pushToGoogleSheet };
