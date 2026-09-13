// Admin पेजसाठी — सगळे रिव्ह्यू (pending/approved/rejected) परत करते, फक्त बरोबर पासवर्ड असेल तरच.

const { getReviews } = require("./lib/jsonbin");

exports.handler = async function (event) {
  const password = (event.queryStringParameters && event.queryStringParameters.password) || "";

  if (!process.env.ADMIN_PASSWORD) {
    return { statusCode: 500, body: JSON.stringify({ error: "सर्व्हरवर ADMIN_PASSWORD सेट केलेली नाही." }) };
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return { statusCode: 401, body: JSON.stringify({ error: "चुकीचा पासवर्ड." }) };
  }

  try {
    const reviews = await getReviews();
    reviews.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: reviews })
    };
  } catch (err) {
    console.error("admin-reviews error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
