// Admin पेजसाठी — सर्व कायदेशीर मदत विनंत्या परत करते, फक्त बरोबर पासवर्ड असेल तरच.
// तसेच स्टेटस अपडेट करण्यासाठी (New/Contacted/Resolved) POST पण याच फंक्शनमध्ये हाताळले आहे.

const { getLegalRequests, saveLegalRequests } = require("./lib/jsonbin");

exports.handler = async function (event) {
  if (event.httpMethod === "GET") {
    const password = (event.queryStringParameters && event.queryStringParameters.password) || "";
    if (!process.env.ADMIN_PASSWORD) {
      return { statusCode: 500, body: JSON.stringify({ error: "सर्व्हरवर ADMIN_PASSWORD सेट केलेली नाही." }) };
    }
    if (password !== process.env.ADMIN_PASSWORD) {
      return { statusCode: 401, body: JSON.stringify({ error: "चुकीचा पासवर्ड." }) };
    }
    try {
      const requests = await getLegalRequests();
      requests.sort(function (a, b) { return new Date(b.submittedAt) - new Date(a.submittedAt); });
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requests: requests })
      };
    } catch (err) {
      console.error("admin-legal-requests GET error:", err.message);
      return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
  }

  if (event.httpMethod === "POST") {
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch (e) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
    }
    const password = body.password || "";
    if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
      return { statusCode: 401, body: JSON.stringify({ error: "चुकीचा पासवर्ड." }) };
    }
    const id = body.id;
    const status = body.status;
    if (!id || ["New", "Contacted", "Resolved"].indexOf(status) === -1) {
      return { statusCode: 400, body: JSON.stringify({ error: "invalid id or status" }) };
    }
    try {
      let requests = await getLegalRequests();
      requests = requests.map(function (r) {
        if (r.id === id) { r.status = status; }
        return r;
      });
      await saveLegalRequests(requests);
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    } catch (err) {
      console.error("admin-legal-requests POST error:", err.message);
      return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
  }

  return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
};
