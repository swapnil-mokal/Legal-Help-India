/**
 * Legal Helpdesk India — Google Sheet Auto-Save (Google Apps Script)
 * ------------------------------------------------------------------
 * हा कोड कशासाठी आहे?
 * नागरिकाने वेबसाईटवर "कायदेशीर मदत मागवा" फॉर्म भरला किंवा "पुनरावलोकन" (review)
 * दिलं, की ती माहिती आपोआप तुमच्या Google Drive मधील एका Google Sheet मध्ये
 * (Excel सारखी) एक नवीन ओळ (row) म्हणून सेव्ह होते. हे पूर्णपणे मोफत आहे
 * (Google Apps Script आणि Google Sheets कायमचे मोफत आहेत, कोणतेही बिल येत नाही).
 *
 * ===================== सेटअप करण्याच्या पायऱ्या =====================
 * 1) https://sheets.google.com वर जाऊन एक नवीन रिकामी Google Sheet तयार करा.
 *    उदा. नाव द्या: "Legal Helpdesk India - Data"
 * 2) त्या Sheet मध्ये वरती मेनूतून: Extensions (विस्तार) > Apps Script वर क्लिक करा.
 * 3) उघडलेल्या एडिटरमधला सगळा जुना कोड (Code.gs) डिलीट करून त्याजागी
 *    हा संपूर्ण फाईलमधला कोड कॉपी-पेस्ट करा.
 * 4) वरती Save (डिस्क आयकॉन) दाबा. प्रोजेक्टला नाव द्या, उदा. "LegalHelpdeskSync".
 * 5) वरती उजवीकडे "Deploy" > "New deployment" वर क्लिक करा.
 *    - "Select type" मध्ये gear आयकॉनवर क्लिक करून "Web app" निवडा.
 *    - "Execute as": Me (तुमचा ईमेल)
 *    - "Who has access": Anyone
 *    - "Deploy" बटण दाबा. गरज पडल्यास तुमच्या Google खात्याला परवानगी द्या
 *      (Authorize access > Advanced > Go to LegalHelpdeskSync (unsafe) > Allow).
 * 6) Deploy झाल्यावर एक "Web app URL" मिळेल — तो कॉपी करा.
 *    (हा दिसतो असा: https://script.google.com/macros/s/XXXXXXXX/exec)
 * 7) Netlify वर तुमच्या साईटच्या Site configuration > Environment variables मध्ये
 *    एक नवीन variable जोडा:
 *      Key:   GOOGLE_SHEET_WEBHOOK_URL
 *      Value: (वरचा Web app URL इथे पेस्ट करा)
 * 8) Netlify साईट पुन्हा Deploy करा (Trigger deploy > Clear cache and deploy site).
 *
 * झालं! आता प्रत्येक नवीन "कायदेशीर मदत विनंती" आणि "पुनरावलोकन" थेट या
 * Google Sheet मध्ये आपोआप जमा होत राहील — तुमच्या Google Drive मध्ये,
 * कायमचं मोफत, आणि केव्हाही Excel म्हणून Download करता येईल
 * (File > Download > Microsoft Excel).
 *
 * टीप: जर तुम्ही नंतर कधी deployment अपडेट केली (उदा. कोड बदलला), तर
 * "Deploy > Manage deployments > Edit (पेन्सिल आयकॉन) > Version: New version > Deploy"
 * असं करा, म्हणजे URL तोच राहतो.
 * ======================================================================
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const type = (data.type || "").toString();

    if (type === "legal") {
      appendLegalRequest(data);
    } else if (type === "review") {
      appendReview(data);
    } else {
      return jsonResponse({ ok: false, error: "Unknown type: " + type });
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
  return sheet;
}

function appendLegalRequest(d) {
  const headers = [
    "Submitted At", "Name", "Mobile", "Email", "City", "District",
    "Category", "Description", "Preferred Time", "Status", "Language", "Request ID"
  ];
  const sheet = getOrCreateSheet("Legal Help Requests", headers);
  sheet.appendRow([
    d.submittedAt || new Date().toISOString(),
    d.name || "",
    d.mobile || "",
    d.email || "",
    d.city || "",
    d.district || "",
    d.category || "",
    d.description || "",
    d.preferredTime || "",
    d.status || "New",
    d.lang || "",
    d.id || ""
  ]);
}

function appendReview(d) {
  const headers = ["Submitted At", "Name", "Rating", "Message", "Language", "Review ID"];
  const sheet = getOrCreateSheet("Reviews", headers);
  sheet.appendRow([
    d.submittedAt || new Date().toISOString(),
    d.name || "",
    d.rating || "",
    d.message || "",
    d.lang || "",
    d.id || ""
  ]);
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// टेस्ट करण्यासाठी (ऐच्छिक): Apps Script एडिटरमध्ये हे फंक्शन चालवून बघू शकता
function testAppend() {
  appendLegalRequest({
    submittedAt: new Date().toISOString(),
    name: "टेस्ट नाव",
    mobile: "9999999999",
    email: "test@example.com",
    city: "पुणे",
    district: "पुणे",
    category: "टेस्ट",
    description: "ही एक चाचणी नोंद आहे.",
    preferredTime: "सकाळी",
    status: "New",
    lang: "mr",
    id: "test-1"
  });
}
