// Admin पेजवरून रिव्ह्यू approve/reject/delete करण्यासाठी — फक्त बरोबर पासवर्ड असेल तरच काम करते.

const { getReviews, saveReviews } = require("./lib/jsonbin");

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

  const id = body.id;
  const action = body.action;
  const password = body.password || "";

  if (!process.env.ADMIN_PASSWORD) {
    return { statusCode: 500, body: JSON.stringify({ error: "सर्व्हरवर ADMIN_PASSWORD सेट केलेली नाही." }) };
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return { statusCode: 401, body: JSON.stringify({ error: "चुकीचा पासवर्ड." }) };
  }
  if (!id || ["approve", "reject", "delete"].indexOf(action) === -1) {
    return { statusCode: 400, body: JSON.stringify({ error: "invalid id or action" }) };
  }

  try {
    let reviews = await getReviews();
    if (action === "delete") {
      reviews = reviews.filter(function (r) { return r.id !== id; });
    } else {
      const newStatus = action === "approve" ? "approved" : "rejected";
      reviews = reviews.map(function (r) {
        if (r.id === id) { r.status = newStatus; }
        return r;
      });
    }
    await saveReviews(reviews);
    console.log("Review action applied:", action, "on id:", id);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error("review-action error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
