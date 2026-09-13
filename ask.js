// Legal Helpdesk India — AI प्रश्नोत्तर सर्व्हर फंक्शन
// हे फंक्शन Groq च्या मोफत, वेगवान API ला सुरक्षितपणे कॉल करते.
// API key कधीही ब्राउझरला (frontend ला) दिसत नाही — ती फक्त इथे, सर्व्हरवर वापरली जाते.

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let problem, lang;
  try {
    const body = JSON.parse(event.body || "{}");
    problem = (body.problem || "").toString().trim();
    lang = (body.lang || "mr").toString();
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  if (!problem) {
    return { statusCode: 400, body: JSON.stringify({ error: "problem is required" }) };
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY is missing in environment variables.");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "सर्व्हरवर GROQ_API_KEY सेट केलेली नाही. कृपया Netlify Site configuration > Environment variables मध्ये ती जोडा आणि साईट पुन्हा deploy करा."
      })
    };
  }
  console.log("GROQ_API_KEY present, starts with:", apiKey.slice(0, 6) + "...", "length:", apiKey.length);

  const sysPrompts = {
    mr: "तुम्ही भारतीय संविधान आणि सामान्य कायद्याची चांगली जाण असलेले एक मदतनीस आहात. वापरकर्त्याने विचारलेल्या समस्येला मराठी भाषेत, साध्या व स्पष्ट शब्दांत, प्रामाणिक आणि व्यावहारिक उत्तर द्या. शक्य असल्यास संबंधित घटनात्मक कलमे किंवा कायद्यांचा उल्लेख करा. उत्तराच्या शेवटी हे स्पष्ट करा की हे सामान्य माहितीसाठी आहे आणि गंभीर प्रकरणांसाठी वकिलाचा सल्ला घ्यावा.\n\nमहत्त्वाचे — फॉरमॅटिंगचे नियम: उत्तर साध्या मजकुरात (plain text) लिहा. मार्कडाऊन वापरू नका — म्हणजे ** (बोल्डसाठी), # (हेडिंगसाठी), | (टेबलसाठी), किंवा <br> सारखे HTML टॅग अजिबात वापरू नका. मुद्दे द्यायचे असल्यास प्रत्येक मुद्दा नवीन ओळीवर, सुरुवातीला फक्त एक डॅश (-) वापरून लिहा. परिच्छेदांमध्ये एक रिकामी ओळ सोडा. हे उत्तर मोबाईल फोनवर वाचलं जाईल, त्यामुळे साधं, स्वच्छ आणि सरळ लिहा.\n\nअत्यंत महत्त्वाचे — लांबीची मर्यादा: उत्तर जास्तीत जास्त ६-८ छोट्या मुद्द्यांत (बुलेट पॉईंट्स) मावेल इतकंच लिहा. उत्तर अर्धवट न सोडता नेहमी पूर्ण वाक्यात संपवा — मध्येच तुटलेलं उत्तर देऊ नका. सविस्तर स्पष्टीकरणाऐवजी थोडक्यात, नेमक्या व पूर्ण मुद्द्यांत उत्तर द्या.",
    hi: "आप भारतीय संविधान और सामान्य कानून की अच्छी समझ रखने वाले सहायक हैं। उपयोगकर्ता की समस्या का हिंदी भाषा में, सरल और स्पष्ट शब्दों में, ईमानदार और व्यावहारिक उत्तर दें। यदि संभव हो तो संबंधित संवैधानिक अनुच्छेदों या कानूनों का उल्लेख करें। उत्तर के अंत में यह स्पष्ट करें कि यह सामान्य जानकारी के लिए है और गंभीर मामलों में वकील से सलाह लेनी चाहिए।\n\nमहत्वपूर्ण — फॉर्मेटिंग नियम: उत्तर सादे टेक्स्ट में लिखें। मार्कडाउन का उपयोग न करें — यानी ** (बोल्ड के लिए), # (हेडिंग के लिए), | (टेबल के लिए), या <br> जैसे HTML टैग बिल्कुल न करें। बिंदु देने हों तो हर बिंदु नई लाइन पर, शुरुआत में केवल एक डैश (-) लगाकर लिखें। पैराग्राफ के बीच एक खाली लाइन छोड़ें। यह उत्तर मोबाइल फोन पर पढ़ा जाएगा, इसलिए सरल, स्वच्छ और सीधा लिखें।\n\nअत्यंत महत्वपूर्ण — लंबाई की सीमा: उत्तर अधिकतम 6-8 छोटे बिंदुओं में समाए, उतना ही लिखें। उत्तर अधूरा न छोड़ें — हमेशा पूरे वाक्य में समाप्त करें, बीच में टूटा हुआ उत्तर न दें। विस्तृत विवरण के बजाय संक्षिप्त, सटीक और पूर्ण बिंदुओं में उत्तर दें.",
    en: "You are an assistant with strong knowledge of the Indian Constitution and general law. Give an honest, practical answer in clear, simple English to the user's problem. Where relevant, mention applicable constitutional articles or laws. End by clarifying this is general information only and that a lawyer should be consulted for serious matters.\n\nImportant — formatting rules: Write the answer in plain text. Do not use markdown — no ** for bold, no # for headings, no | for tables, and no HTML tags like <br>. If you need to list points, put each point on its own new line starting with a single dash (-). Leave one blank line between paragraphs. This will be read on a mobile phone, so keep it clean and simple.\n\nVery important — length limit: Keep the answer to at most 6-8 short bullet points. Never leave the answer unfinished — always end on a complete sentence, never cut off mid-thought. Prefer being brief and precise over being exhaustive."
  };
  const systemPrompt = sysPrompts[lang] || sysPrompts.mr;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);

  try {
    // सर्वप्रथम, Groq कडे आत्ता खरोखर कोणती मॉडेल्स उपलब्ध आहेत ते विचारून घ्या
    // (मॉडेलची नावं वेळोवेळी बदलतात, त्यामुळे एक निश्चित नाव hardcode न करता योग्य मॉडेल आपोआप निवडलं जाईल)
    let chosenModel = "openai/gpt-oss-120b"; // शेवटचा उपाय म्हणून हे राहील
    try {
      const modelsResp = await fetch("https://api.groq.com/openai/v1/models", {
        headers: { "Authorization": "Bearer " + apiKey }
      });
      const modelsData = await modelsResp.json();
      const ids = (modelsData && modelsData.data ? modelsData.data : []).map((m) => m.id);
      console.log("Available Groq models:", JSON.stringify(ids));

      const preferredOrder = [
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "qwen/qwen3.8-27b",
        "qwen/qwen3.6-27b",
        "groq/compound",
        "groq/compound-mini",
        "allam-2-7b",
        "llama-3.3-70b-versatile",
        "llama-3.1-70b-versatile",
        "llama-3.1-8b-instant",
        "llama3-70b-8192",
        "llama3-8b-8192",
        "mixtral-8x7b-32768",
        "gemma2-9b-it"
      ];
      // हे मॉडेल्स फक्त वर्गीकरण/भाषांतर/आवाजासाठी आहेत, सामान्य उत्तरं देण्यासाठी नाहीत — ती वगळा
      const excludePatterns = ["whisper", "orpheus", "prompt-guard", "guard", "safeguard"];
      const usableIds = ids.filter((id) => !excludePatterns.some((p) => id.toLowerCase().includes(p)));

      const matchFromPreferred = preferredOrder.find((m) => usableIds.includes(m));
      if (matchFromPreferred) {
        chosenModel = matchFromPreferred;
      } else {
        const anyGoodGuess = usableIds.find(
          (id) => id.toLowerCase().includes("gpt") || id.toLowerCase().includes("qwen") || id.toLowerCase().includes("llama")
        );
        chosenModel = anyGoodGuess || usableIds[0] || chosenModel;
      }
      console.log("Chosen Groq model:", chosenModel);
    } catch (modelListErr) {
      console.error("Could not fetch model list, falling back to default:", modelListErr.message);
    }

    console.log("Calling Groq | model:", chosenModel, "| problem length:", problem.length, "| lang:", lang);
    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: chosenModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: problem }
        ],
        max_tokens: 900,
        temperature: 0.4
      }),
      signal: controller.signal
    });

    const data = await resp.json();
    console.log("Groq response status:", resp.status);

    if (!resp.ok) {
      console.error("Groq API error body:", JSON.stringify(data));
      const msg = (data && data.error && data.error.message) || "AI सेवेकडून उत्तर मिळाले नाही.";
      return { statusCode: 502, body: JSON.stringify({ error: msg }) };
    }

    const text =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
        ? data.choices[0].message.content
        : "";

    if (!text) {
      console.error("No text extracted. Full Groq response:", JSON.stringify(data));
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text })
    };
  } catch (err) {
    if (err.name === "AbortError") {
      console.error("Groq request timed out.");
      return { statusCode: 504, body: JSON.stringify({ error: "AI कडून उत्तर यायला जास्त वेळ लागला. कृपया पुन्हा प्रयत्न करा." }) };
    }
    console.error("Function crashed:", err && err.stack ? err.stack : err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Server error" }) };
  } finally {
    clearTimeout(timer);
  }
};
