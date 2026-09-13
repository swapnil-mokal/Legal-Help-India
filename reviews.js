// फक्त "approved" (मंजूर) झालेले रिव्ह्यू परत करते — हे वेबसाईटच्या सार्वजनिक पानावर दाखवण्यासाठी.

const { getReviews } = require("./lib/jsonbin");

exports.handler = async function () {
  try {
    const reviews = await getReviews();
    const approved = reviews
      .filter(function (r) { return r.status === "approved"; })
      .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); })
      .map(function (r) {
        return { name: r.name, rating: r.rating, message: r.message, lang: r.lang, createdAt: r.createdAt };
      });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: approved })
    };
  } catch (err) {
    console.error("reviews (public) error:", err.message);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: [], error: err.message })
    };
  }
};
