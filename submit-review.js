// नागरिक इथून रिव्ह्यू पाठवतात — तो लगेच "pending" म्हणून साठवला जातो, वेबसाईटवर लगेच दिसत नाही.

const { getReviews, saveReviews } = require("./lib/jsonbin");
const { pushToGoogleSheet } = require("./lib/googleSheet");

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

  const name = (body.name || "").toString().trim().slice(0, 80);
  const message = (body.message || "").toString().trim().slice(0, 600);
  let rating = parseInt(body.rating, 10);
  if (isNaN(rating)) rating = 5;
  rating = Math.max(1, Math.min(5, rating));
  const lang = (body.lang || "mr").toString();

  if (!name || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "नाव आणि प्रतिक्रिया आवश्यक आहे." }) };
  }

  try {
    const reviews = await getReviews();
    const newReview = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name,
      rating: rating,
      message: message,
      lang: lang,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    reviews.push(newReview);
    await saveReviews(reviews);
    console.log("New review submitted, id:", newReview.id);

    // Google Drive मधील Google Sheet मध्ये बॅकअप म्हणून पाठवा (fire-and-forget, चूक झाली तरी थांबणार नाही)
    await pushToGoogleSheet("review", Object.assign({}, newReview, { submittedAt: newReview.createdAt }));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error("submit-review error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
