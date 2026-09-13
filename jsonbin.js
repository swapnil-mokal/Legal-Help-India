// Legal Helpdesk India — विविध प्रकारचा डेटा (reviews, legal help requests) साठवण्यासाठी
// सामायिक मदत-फाईल (JSONBin.io वापरून). एकाच Bin मध्ये अनेक collections सुरक्षितपणे ठेवतो.

const BASE = "https://api.jsonbin.io/v3/b";

function checkEnv() {
  const binId = process.env.JSONBIN_BIN_ID;
  const key = process.env.JSONBIN_API_KEY;
  if (!binId || !key) {
    throw new Error("JSONBIN_BIN_ID किंवा JSONBIN_API_KEY सेट केलेली नाही.");
  }
  return { binId: binId, key: key };
}

// संपूर्ण bin चा रेकॉर्ड मिळवते (सर्व collections सह)
async function getRecord() {
  const env = checkEnv();
  const resp = await fetch(BASE + "/" + env.binId + "/latest", {
    headers: { "X-Master-Key": env.key }
  });
  const data = await resp.json();
  if (!resp.ok) {
    throw new Error((data && data.message) || "JSONBin कडून डेटा मिळाला नाही (GET failed).");
  }
  return data.record && typeof data.record === "object" ? data.record : {};
}

// फक्त दिलेल्या key चा भाग अपडेट करून बाकी सर्व collections जशाच्या तशा ठेवते
async function saveRecordKey(key, value) {
  const env = checkEnv();
  const current = await getRecord();
  current[key] = value;
  const resp = await fetch(BASE + "/" + env.binId, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "X-Master-Key": env.key },
    body: JSON.stringify(current)
  });
  const data = await resp.json();
  if (!resp.ok) {
    throw new Error((data && data.message) || "JSONBin मध्ये डेटा सेव्ह झाला नाही (PUT failed).");
  }
  return data;
}

async function getReviews() {
  const record = await getRecord();
  return Array.isArray(record.reviews) ? record.reviews : [];
}

async function saveReviews(reviews) {
  return saveRecordKey("reviews", reviews);
}

async function getLegalRequests() {
  const record = await getRecord();
  return Array.isArray(record.legalRequests) ? record.legalRequests : [];
}

async function saveLegalRequests(requests) {
  return saveRecordKey("legalRequests", requests);
}

module.exports = { getReviews, saveReviews, getLegalRequests, saveLegalRequests };
