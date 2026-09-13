// नागरिक इथून कायदेशीर मदतीसाठी अर्ज पाठवतात. मोबाईल क्रमांक अनिवार्य आहे.

const { getLegalRequests, saveLegalRequests } = require("./lib/jsonbin");
const { pushToGoogleSheet } = require("./lib/googleSheet");

function isValidMobile(m) {
  const digits = (m || "").toString().replace(/\D/g, "");
  return digits.length === 10;
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const name = (body.name || "").toString().trim().slice(0, 100);
  const mobile = (body.mobile || "").toString().trim();
  const email = (body.email || "").toString().trim().slice(0, 120);
  const city = (body.city || "").toString().trim().slice(0, 100);
  const district = (body.district || "").toString().trim().slice(0, 100);
  const category = (body.category || "").toString().trim().slice(0, 100);
  const description = (body.description || "").toString().trim().slice(0, 1500);
  const preferredTime = (body.preferredTime || "").toString().trim().slice(0, 50);
  const lang = (body.lang || "mr").toString();

  if (!name) {
    return { statusCode: 400, body: JSON.stringify({ error: "नाव आवश्यक आहे." }) };
  }
  if (!isValidMobile(mobile)) {
    return { statusCode: 400, body: JSON.stringify({ error: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका." }) };
  }
  if (!description) {
    return { statusCode: 400, body: JSON.stringify({ error: "कृपया तुमची समस्या थोडक्यात लिहा." }) };
  }

  try {
    const requests = await getLegalRequests();
    const newRequest = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name,
      mobile: mobile.replace(/\D/g, ""),
      email: email,
      city: city,
      district: district,
      category: category,
      description: description,
      preferredTime: preferredTime,
      lang: lang,
      status: "New",
      submittedAt: new Date().toISOString()
    };
    requests.push(newRequest);
    await saveLegalRequests(requests);
    console.log("New legal help request submitted, id:", newRequest.id);

    // Google Drive मधील Google Sheet मध्ये बॅकअप म्हणून पाठवा (fire-and-forget, चूक झाली तरी थांबणार नाही)
    await pushToGoogleSheet("legal", newRequest);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error("submit-legal-help error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
