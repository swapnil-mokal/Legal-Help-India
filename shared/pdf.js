/* Legal Helpdesk India — कागदपत्र PDF जनरेटर (Marathi/Hindi/English, client-side, jsPDF+html2canvas) */
window.LHI_PDF=(function(){
function f(id,type,mr,hi,en,opt){return{id:id,type:type||'text',opt:!!opt,label:{mr:mr,hi:hi,en:en}}}
const FIELDS={
 police:[f('complainantName','text','तक्रारदाराचे नाव','शिकायतकर्ता का नाम','Complainant name'),
  f('complainantAddress','text','पत्ता','पता','Address'),f('complainantMobile','text','मोबाईल क्रमांक','मोबाइल नंबर','Mobile number'),
  f('policeStation','text','पोलीस स्टेशन','पुलिस स्टेशन','Police station'),f('incidentDate','date','घटनेची तारीख','घटना की तारीख','Date of incident'),
  f('incidentPlace','text','घटनेचे ठिकाण','घटना स्थान','Place of incident'),f('sections','text','लागू कलम (माहीत असल्यास)','लागू धाराएँ (यदि ज्ञात हों)','Applicable sections (if known)',true),f('complaintDetails','ta','तक्रारीचा तपशील','शिकायत का विवरण','Complaint details')],
 notice:[f('senderName','text','पाठवणाऱ्याचे नाव','भेजने वाले का नाम','Sender name'),f('senderAddress','text','पत्ता','पता','Address'),
  f('recipientName','text','ज्याला नोटीस पाठवायची त्याचे नाव','प्राप्तकर्ता का नाम','Recipient name'),f('recipientAddress','text','प्राप्तकर्त्याचा पत्ता','प्राप्तकर्ता का पता','Recipient address'),
  f('subject','text','विषय','विषय','Subject'),f('noticeBody','ta','तपशील','विवरण','Details')],
 marriage:[f('husbandName','text','वराचे नाव','वर का नाम',"Groom's name"),f('husbandAge','text','वराचे वय','वर की आयु',"Groom's age"),
  f('wifeName','text','वधूचे नाव','वधू का नाम',"Bride's name"),f('wifeAge','text','वधूचे वय','वधू की आयु',"Bride's age"),
  f('marriageDate','date','विवाहाची तारीख','विवाह की तारीख','Date of marriage'),f('marriagePlace','text','विवाहाचे ठिकाण','विवाह स्थान','Place of marriage'),
  f('applicantAddress','text','अर्जदाराचा पत्ता','आवेदक का पता',"Applicant's address")],
 rent:[f('landlordName','text','घरमालकाचे नाव','मकान मालिक का नाम',"Landlord's name"),f('landlordAddress','text','घरमालकाचा पत्ता','मकान मालिक का पता',"Landlord's address"),
  f('tenantName','text','भाडेकरूचे नाव','किरायेदार का नाम',"Tenant's name"),f('tenantAddress','text','भाडेकरूचा पत्ता','किरायेदार का पता',"Tenant's address"),
  f('propertyAddress','text','भाड्याच्या जागेचा पत्ता','किराए की संपत्ति का पता','Rented property address'),
  f('rentAmount','text','मासिक भाडे (₹)','मासिक किराया (₹)','Monthly rent (₹)'),f('deposit','text','डिपॉझिट रक्कम (₹)','जमा राशि (₹)','Security deposit (₹)'),
  f('startDate','date','सुरुवातीची तारीख','शुरुआत की तारीख','Start date'),f('duration','text','कालावधी (महिने/वर्षे)','अवधि (महीने/वर्ष)','Duration (months/years)'),
  f('rentDueDay','text','भाडे भरण्याची तारीख (महिन्याची)','किराया भुगतान की तारीख (माह की)','Rent due date (of month)'),
  f('noticePeriod','text','नोटीस कालावधी (महिने)','सूचना अवधि (महीने)','Notice period (months)'),
  f('maintenanceBy','text','देखभाल/दुरुस्ती जबाबदारी','रखरखाव की जिम्मेदारी','Maintenance responsibility',true)],
 affidavit:[f('deponentName','text','शपथ घेणाऱ्याचे नाव','शपथकर्ता का नाम',"Deponent's name"),f('fatherOrHusbandName','text','वडील/पतीचे नाव','पिता/पति का नाम',"Father's/Husband's name"),
  f('age','text','वय','आयु','Age'),f('address','text','पत्ता','पता','Address'),f('purpose','ta','प्रतिज्ञापत्राचा मजकूर / उद्देश','शपथ पत्र का उद्देश्य / विवरण','Affidavit content / purpose'),f('affPlace','text','ठिकाण (जिथे स्वाक्षरी होईल)','स्थान (जहाँ हस्ताक्षर होंगे)','Place of execution'),f('affDate','date','तारीख','तारीख','Date')],
 rti:[f('applicantName','text','अर्जदाराचे नाव','आवेदक का नाम',"Applicant's name"),f('applicantAddress','text','पत्ता','पता','Address'),
  f('pioOffice','text','कार्यालय / विभागाचे नाव','कार्यालय / विभाग का नाम','Office / department name'),f('applicantMobile','text','अर्जदाराचा मोबाईल क्रमांक','आवेदक का मोबाइल नंबर',"Applicant's mobile number"),f('informationSought','ta','मागितलेली माहिती','मांगी गई जानकारी','Information sought'),f('rtiDate','date','अर्जाची तारीख','आवेदन की तारीख','Date of application')],
 resignation:[f('employeeName','text','कर्मचाऱ्याचे नाव','कर्मचारी का नाम',"Employee's name"),f('designation','text','पदनाम','पदनाम','Designation'),
  f('employer','text','कंपनी / संस्थेचे नाव','कंपनी / संस्था का नाम','Company / organisation name'),f('lastWorkingDay','date','शेवटचा कामाचा दिवस','अंतिम कार्य दिवस','Last working day'),
  f('reason','ta','कारण (ऐच्छिक)','कारण (वैकल्पिक)','Reason (optional)',true)],
 maintenance:[f('applicantName','text','अर्जदाराचे नाव','आवेदक का नाम',"Applicant's name"),f('applicantAddress','text','पत्ता','पता','Address'),
  f('respondentName','text','प्रतिवादीचे नाव','प्रतिवादी का नाम',"Respondent's name"),f('respondentRelation','text','प्रतिवादीशी नाते','प्रतिवादी से संबंध','Relation with respondent'),
  f('amountSought','text','मागितलेली पोटगी रक्कम (₹/महिना)','मांगी गई भरण-पोषण राशि (₹/माह)','Maintenance amount sought (₹/month)'),f('reason','ta','कारण / तपशील','कारण / विवरण','Reason / details')]
};
function tr(a,b,c){return{mr:a,hi:b,en:c}}
const LETTER={
 police:{title:tr('पोलीस तक्रार अर्ज','पुलिस शिकायत पत्र','Police Complaint Application'),
  to:tr('प्रति,\nवरिष्ठ पोलीस निरीक्षक,\n{{policeStation}} पोलीस स्टेशन','सेवा में,\nवरिष्ठ पुलिस निरीक्षक,\n{{policeStation}} पुलिस स्टेशन','To,\nThe Senior Police Inspector,\n{{policeStation}} Police Station'),
  subject:tr('विषय: तक्रार नोंदविण्याबाबत','विषय: शिकायत दर्ज करने बाबत','Subject: Regarding registration of complaint'),
  open:tr('महोदय,\nमी खालील घटनेबाबत तक्रार नोंदवू इच्छितो/इच्छिते —','महोदय,\nमैं निम्नलिखित घटना के संबंध में शिकायत दर्ज करना चाहता/चाहती हूँ —','Sir/Madam,\nI wish to lodge a complaint regarding the following incident —'),
  close:tr('वरील घटनेसंदर्भात योग्य ते कलम लावून FIR नोंदवावी व कायदेशीर कारवाई करावी, ही नम्र विनंती.','उपरोक्त घटना के संबंध में उचित धाराओं के तहत FIR दर्ज कर कानूनी कार्रवाई करने का अनुरोध है।','You are requested to kindly register an FIR under the applicable sections regarding the above incident and initiate legal action.'),
  sign:tr('आपला विश्वासू,','आपका विश्वासी,','Yours faithfully,')},
 notice:{title:tr('कायदेशीर नोटीस','कानूनी नोटिस','Legal Notice'),
  to:tr('प्रति,\n{{recipientName}}\n{{recipientAddress}}','सेवा में,\n{{recipientName}}\n{{recipientAddress}}','To,\n{{recipientName}}\n{{recipientAddress}}'),
  subject:tr('विषय: {{subject}}','विषय: {{subject}}','Subject: {{subject}}'),
  open:tr('आपणास याद्वारे कळविण्यात येते की —','आपको इस पत्र के माध्यम से सूचित किया जाता है कि —','You are hereby notified through this letter that —'),
  close:tr('सदर नोटीस मिळाल्यापासून १५ दिवसांच्या आत योग्य ती कार्यवाही न झाल्यास, योग्य त्या कायदेशीर मार्गाने पुढील कारवाई करण्यात येईल (उदा. दिवाणी/फौजदारी न्यायालयात दाद मागणे), याची नोंद घ्यावी.','कृपया ध्यान दें कि इस नोटिस की प्राप्ति के 15 दिनों के भीतर उचित कार्रवाई न होने पर, उचित न्यायालय में आगे कानूनी कार्रवाई की जाएगी।','Please note that if appropriate action is not taken within 15 days of receipt of this notice, further legal action (civil/criminal, as applicable) shall be initiated before the appropriate court.'),
  sign:tr('आपला,','आपका,','Yours,')},
 marriage:{title:tr('विवाह नोंदणी अर्ज','विवाह पंजीकरण आवेदन','Marriage Registration Application'),
  to:tr('प्रति,\nविवाह नोंदणी अधिकारी','सेवा में,\nविवाह पंजीयक','To,\nThe Marriage Registrar'),
  subject:tr('विषय: विवाह नोंदणीसाठी अर्ज','विषय: विवाह पंजीकरण हेतु आवेदन','Subject: Application for marriage registration'),
  open:tr('महोदय,\nआम्ही खालील तपशिलानुसार आमच्या विवाहाची नोंदणी करू इच्छितो —','महोदय,\nहम निम्नलिखित विवरण के अनुसार अपने विवाह का पंजीकरण करवाना चाहते हैं —','Sir/Madam,\nWe wish to register our marriage as per the following details —'),
  close:tr('कृपया सदर अर्जाचा विचार करून विवाह नोंदणी प्रमाणपत्र देण्यात यावे.','कृपया उक्त आवेदन पर विचार कर विवाह पंजीकरण प्रमाण पत्र प्रदान करें।','You are requested to kindly consider this application and issue the marriage registration certificate.'),
  sign:tr('अर्जदार,','आवेदक,','Applicants,')},
 rent:{title:tr('भाडे करार','किराया अनुबंध','Rent Agreement'),to:null,subject:null,
  open:tr('हा भाडे करार खालील दोन पक्षांमध्ये खालील अटींनुसार करण्यात येत आहे —','यह किराया अनुबंध निम्नलिखित दो पक्षों के बीच निम्नलिखित शर्तों पर किया जा रहा है —','This Rent Agreement is made between the following two parties on the following terms —'),
  close:tr('भाडे दर महिन्याला {{rentDueDay}} तारखेपर्यंत द्यावे. यापैकी कोणत्याही पक्षाला करार संपुष्टात आणायचा असल्यास {{noticePeriod}} महिने आधी लेखी नोटीस द्यावी लागेल. वरील नमूद सर्व अटी व शर्ती दोन्ही पक्षांना मान्य आहेत.','किराया प्रत्येक माह की {{rentDueDay}} तारीख तक देय होगा। किसी भी पक्ष को अनुबंध समाप्त करना हो तो {{noticePeriod}} माह पूर्व लिखित सूचना देनी होगी। उपर्युक्त सभी नियम व शर्तें दोनों पक्षों को मान्य हैं।','Rent shall be payable by the {{rentDueDay}} of every month. Either party wishing to terminate this agreement shall give {{noticePeriod}} months\u2019 prior written notice. The above terms and conditions are agreed upon by both parties.'),
  sign2:tr(['घरमालकाची सही','भाडेकरूची सही'],['मकान मालिक के हस्ताक्षर','किरायेदार के हस्ताक्षर'],["Landlord's Signature","Tenant's Signature"])},
 affidavit:{title:tr('प्रतिज्ञापत्र','शपथ पत्र','Affidavit'),to:null,subject:null,
  open:tr('मी, खालील सही करणारा/करणारी, स्वतःची शपथ घेऊन खालीलप्रमाणे प्रामाणिकपणे जाहीर करतो/करते —','मैं, नीचे हस्ताक्षरकर्ता, अपनी शपथ पर निम्नलिखित ईमानदारी से घोषित करता/करती हूँ —','I, the undersigned, do hereby solemnly affirm and sincerely declare as follows —'),
  close:tr('पडताळणी: वर नमूद केलेला मजकूर माझ्या स्वतःच्या माहिती व विश्वासाप्रमाणे खरा व बरोबर आहे. यामध्ये काहीही खोटे लपवलेले नाही.','सत्यापन: उपरोक्त कथन मेरी अपनी जानकारी और विश्वास के अनुसार सत्य एवं सही है। इसमें कुछ भी असत्य नहीं छिपाया गया है।','VERIFICATION: The above statement is true and correct to the best of my own knowledge and belief, and nothing material has been concealed therein.'),
  sign:tr('शपथ घेणार,','शपथकर्ता,','Deponent,')},
 rti:{title:tr('माहितीचा अधिकार अर्ज (RTI)','सूचना का अधिकार आवेदन (RTI)','Right to Information (RTI) Application'),
  to:tr('प्रति,\nजन माहिती अधिकारी,\n{{pioOffice}}','सेवा में,\nजन सूचना अधिकारी,\n{{pioOffice}}','To,\nThe Public Information Officer,\n{{pioOffice}}'),
  subject:tr('विषय: माहितीचा अधिकार अधिनियम, २००५ अंतर्गत माहिती मागणी अर्ज','विषय: सूचना का अधिकार अधिनियम, 2005 के तहत जानकारी हेतु आवेदन','Subject: Application seeking information under the RTI Act, 2005'),
  open:tr('महोदय,\nमाहितीचा अधिकार अधिनियम २००५ च्या कलम ६ अन्वये मी खालील माहिती मागत आहे —','महोदय,\nसूचना का अधिकार अधिनियम 2005 की धारा 6 के तहत मैं निम्नलिखित जानकारी चाहता/चाहती हूँ —','Sir/Madam,\nUnder Section 6 of the Right to Information Act, 2005, I am seeking the following information —'),
  close:tr('विहित शुल्क रु.१०/- सोबत जोडले आहे (किंवा जोडण्यात येईल). कृपया कायद्यानुसार ३० दिवसांच्या आत माहिती पुरवावी. विहित मुदतीत माहिती न मिळाल्यास प्रथम अपिलीय अधिकाऱ्याकडे अपील करण्याचा अधिकार राखून ठेवत आहे.','निर्धारित शुल्क रु.10/- संलग्न है (या संलग्न किया जाएगा)। कृपया कानून के अनुसार 30 दिनों के भीतर जानकारी प्रदान करें। निर्धारित समय में जानकारी न मिलने पर प्रथम अपीलीय अधिकारी के समक्ष अपील करने का अधिकार सुरक्षित रखता/रखती हूँ।','The prescribed fee of Rs. 10/- is enclosed (or shall be paid as applicable). Kindly provide the information within 30 days as required by law. I reserve the right to file a first appeal before the Appellate Authority if information is not received within the stipulated time.'),
  sign:tr('अर्जदार,','आवेदक,','Applicant,')},
 resignation:{title:tr('राजीनामा पत्र','त्यागपत्र','Resignation Letter'),
  to:tr('प्रति,\nव्यवस्थापक,\n{{employer}}','सेवा में,\nप्रबंधक,\n{{employer}}','To,\nThe Manager,\n{{employer}}'),
  subject:tr('विषय: राजीनामा','विषय: त्यागपत्र','Subject: Resignation'),
  open:tr('महोदय,\nमी {{designation}} या पदावरून राजीनामा देत आहे —','महोदय,\nमैं {{designation}} पद से त्यागपत्र दे रहा/रही हूँ —','Sir/Madam,\nI hereby tender my resignation from the post of {{designation}} —'),
  close:tr('कृपया माझा राजीनामा स्वीकारून नोंद घ्यावी.','कृपया मेरा त्यागपत्र स्वीकार कर रिकॉर्ड में लें।','You are requested to kindly accept my resignation and take it on record.'),
  sign:tr('आपला विश्वासू,','आपका विश्वासी,','Yours sincerely,')},
 maintenance:{title:tr('पोटगीसाठी अर्ज','भरण-पोषण हेतु आवेदन','Maintenance Application'),
  to:tr('प्रति,\nमा. न्यायाधीश','सेवा में,\nमाननीय न्यायाधीश','To,\nThe Hon\u2019ble Judge'),
  subject:tr('विषय: पोटगीसाठी अर्ज (कलम १२५, फौजदारी प्रक्रिया संहिता)','विषय: भरण-पोषण हेतु आवेदन (धारा 125, दंड प्रक्रिया संहिता)','Subject: Application for maintenance (Section 125, CrPC)'),
  open:tr('महोदय,\nमी खालील कारणास्तव पोटगी मिळण्याची विनंती करत आहे —','महोदय,\nमैं निम्नलिखित आधार पर भरण-पोषण की मांग करता/करती हूँ —','Sir/Madam,\nI request maintenance on the following grounds —'),
  close:tr('कृपया माझी विनंती मान्य करून योग्य ती पोटगी मंजूर करावी.','कृपया मेरे अनुरोध पर विचार कर उचित भरण-पोषण स्वीकृत करें।','You are requested to kindly consider my request and grant appropriate maintenance.'),
  sign:tr('अर्जदार,','आवेदक,','Applicant,')}
};
const DISC=tr('टीप: हा एक सर्वसाधारण मसुदा आहे. अंतिम वापरापूर्वी कृपया वकिलाचा सल्ला घ्यावा.','नोट: यह एक सामान्य मसौदा है। अंतिम उपयोग से पहले कृपया वकील की सलाह लें।','Note: This is a general draft. Please consult a lawyer before final use.');
function fill(t,v){return t.replace(/\{\{(\w+)\}\}/g,(m,k)=>esc(v[k]||''))}
function esc(s){return String(s==null?'':s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])).replace(/\n/g,'<br>')}
function buildHTML(key,v,L,fields){
  const cfg=LETTER[key];
  let body='<div style="font-family:system-ui,-apple-system,\'Segoe UI\',Roboto,\'Noto Sans Devanagari\',\'Noto Sans\',Arial,sans-serif;font-size:13px;line-height:1.8;color:#111;width:680px;padding:36px;background:#fff">';
  body+='<div style="text-align:center;font-size:18px;font-weight:700;margin-bottom:18px;text-decoration:underline">'+esc(cfg.title[L])+'</div>';
  if(cfg.to){body+='<div style="white-space:pre-line;margin-bottom:12px">'+fill(cfg.to[L],v)+'</div>'}
  if(cfg.subject){body+='<div style="font-weight:600;margin-bottom:14px">'+fill(cfg.subject[L],v)+'</div>'}
  body+='<div style="white-space:pre-line;margin-bottom:14px">'+fill(cfg.open[L],v)+'</div>';
  body+='<table style="width:100%;border-collapse:collapse;margin-bottom:14px">'+fields.filter(fd=>fd.id!=='subject'&&fd.id!=='recipientName'&&fd.id!=='recipientAddress'&&fd.id!=='employer'&&fd.id!=='designation'&&fd.id!=='pioOffice'&&fd.id!=='policeStation').map(fd=>
    '<tr><td style="padding:4px 8px 4px 0;font-weight:600;vertical-align:top;width:38%">'+esc(fd.label[L])+'</td><td style="padding:4px 0;vertical-align:top">'+esc(v[fd.id]||'—')+'</td></tr>').join('')+'</table>';
  body+='<div style="margin-bottom:22px;white-space:pre-line">'+fill(cfg.close[L],v)+'</div>';
  if(cfg.sign2){body+='<table style="width:100%;margin-top:40px"><tr><td style="width:50%">________________<br>'+esc(cfg.sign2[L][0])+'</td><td style="width:50%">________________<br>'+esc(cfg.sign2[L][1])+'</td></tr></table>'}
  else{body+='<div style="margin-top:34px">'+esc(cfg.sign[L])+'<br><br>________________</div>'}
  body+=contactFooter(L)+'</div>';
  return body;
}
function contactFooter(L){
  const cfg=(window.LHI_CONFIG)||{};
  const phone=(cfg.whatsappNumber||'').replace(/^91/,'');
  const line=tr('सल्ल्यासाठी संपर्क करा:','सलाह के लिए संपर्क करें:','For advice, contact us:')[L];
  return '<div style="margin-top:26px;font-size:11px;color:#666">'+esc(DISC[L])+'<br><b>'+esc(line)+'</b> 📞 '+esc(phone||'—')+' &nbsp; ✉️ '+esc(cfg.email||'—')+'<br>Legal Helpdesk India — '+new Date().toLocaleDateString('en-IN')+'</div>';
}
function buildTopicHTML(key,topic,ARTICLES,L){
  const rel=(topic.related||[]).map(n=>ARTICLES.find(a=>a.num===n)).filter(Boolean);
  let body='<div style="font-family:system-ui,-apple-system,\'Segoe UI\',Roboto,\'Noto Sans Devanagari\',\'Noto Sans\',Arial,sans-serif;font-size:13px;line-height:1.8;color:#111;width:680px;padding:36px;background:#fff">';
  body+='<div style="text-align:center;font-size:19px;font-weight:700;margin-bottom:4px">'+esc((topic.icon||'')+' '+topic.title[L])+'</div>';
  body+='<div style="text-align:center;font-size:11px;color:#888;margin-bottom:18px">Legal Helpdesk India</div>';
  (topic.sections||[]).forEach(s=>{
    body+='<div style="font-weight:700;font-size:14px;margin:14px 0 4px;color:#0b3d91">'+esc(s.heading[L])+'</div><ul style="margin:0 0 6px 20px;padding:0">'+s.items[L].map(i=>'<li style="margin-bottom:3px">'+esc(i)+'</li>').join('')+'</ul>';
  });
  if(rel.length){
    const T=tr('संबंधित संविधान कलमे','संबंधित संविधान अनुच्छेद','Related Constitutional Articles')[L];
    body+='<div style="font-weight:700;font-size:14px;margin:14px 0 4px;color:#0b3d91">'+esc(T)+'</div><ul style="margin:0 0 6px 20px;padding:0">'+rel.map(a=>'<li style="margin-bottom:3px"><b>'+esc(a.title[L])+'</b> — '+esc(a.sum[L])+'</li>').join('')+'</ul>';
  }
  if((topic.faqs||[]).length){
    const T=tr('सामान्य प्रश्न','सामान्य प्रश्न','Frequently Asked Questions')[L];
    const QL=tr('प्र.','प्र.','Q.')[L],AL=tr('उ.','उ.','A.')[L];
    body+='<div style="font-weight:700;font-size:14px;margin:14px 0 4px;color:#0b3d91">'+esc(T)+'</div>'+topic.faqs.map(f=>'<p style="margin:0 0 2px"><b>'+QL+'</b> '+esc(f.q[L])+'</p><p style="margin:0 0 10px;color:#333"><b>'+AL+'</b> '+esc(f.a[L])+'</p>').join('');
  }
  body+=contactFooter(L)+'</div>';
  return body;
}
async function renderNodeToPdf(html,filenameBase){
  if(!(window.jspdf&&window.jspdf.jsPDF))throw new Error('pdf-lib-missing');
  if(!window.html2canvas)throw new Error('canvas-lib-missing');
  // महत्त्वाचे: html2canvas ला मोबाईल ब्राउझरमध्ये आतील भाग "पेंट" करता यावा म्हणून हा भाग
  // पडद्याबाहेर (-99999px) नेण्याऐवजी पडद्याच्या 0,0 वरच ठेवतो व 0x0 आकाराच्या
  // overflow:hidden चौकटीत लपवतो — त्यामुळे तो अदृश्य राहतो पण रेंडर मात्र होतो.
  const wrap=document.createElement('div');
  wrap.style.cssText='position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;z-index:-1;opacity:1';
  const host=document.createElement('div');host.style.cssText='background:#fff;width:680px';host.innerHTML=html;
  wrap.appendChild(host);document.body.appendChild(wrap);
  try{
    if(document.fonts&&document.fonts.ready){try{await document.fonts.ready}catch(e){}}
    await new Promise(r=>setTimeout(r,120));
    // jsPDF च्या स्वतःच्या .html() ऐवजी html2canvas वापरून थेट चित्र (image) बनवतो आणि तेच PDF मध्ये
    // बसवतो — यामुळे मराठी/हिंदी अक्षरांऐवजी चुकीची चिन्हे (mojibake) येण्याची समस्या टळते, कारण
    // ब्राउझरने आधीच व्यवस्थित रेंडर केलेल्या मजकुराचा हा हुबेहूब फोटो असतो, वेगळी अक्षर-एन्कोडिंग नाही.
    const canvas=await window.html2canvas(host,{scale:2,useCORS:true,backgroundColor:'#ffffff',windowWidth:680});
    const jsPDFLib=window.jspdf.jsPDF;
    const doc=new jsPDFLib({unit:'pt',format:'a4'});
    const pageW=doc.internal.pageSize.getWidth(),pageH=doc.internal.pageSize.getHeight();
    const marginX=36,marginY=24,contentW=pageW-2*marginX,contentH=pageH-2*marginY;
    const imgW=contentW,imgH=canvas.height*(imgW/canvas.width);
    if(imgH<=contentH){
      doc.addImage(canvas.toDataURL('image/png'),'PNG',marginX,marginY,imgW,imgH);
    }else{
      const pxPerPtY=canvas.width/imgW, sliceH=Math.floor(contentH*pxPerPtY);
      let y=0,first=true;
      while(y<canvas.height){
        const h=Math.min(sliceH,canvas.height-y);
        const c=document.createElement('canvas');c.width=canvas.width;c.height=h;
        c.getContext('2d').drawImage(canvas,0,y,canvas.width,h,0,0,canvas.width,h);
        if(!first)doc.addPage();first=false;
        doc.addImage(c.toDataURL('image/png'),'PNG',marginX,marginY,imgW,h/pxPerPtY);
        y+=h;
      }
    }
    const filename=filenameBase.replace(/[^a-zA-Z0-9\u0900-\u097F\-]+/g,'_').slice(0,60)+'.pdf';
    const dataUri=doc.output('datauristring');
    doc.save(filename);
    return {dataUri:dataUri,filename:filename};
  } finally { document.body.removeChild(wrap); }
}
async function download(key,v,L,fields){
  return await renderNodeToPdf(buildHTML(key,v,L,fields), key+'-'+(v[fields[0].id]||'form'));
}
async function downloadTopic(key,topic,ARTICLES,L){
  // टीप: ही विषय-माहितीची PDF आहे (कागदपत्र-फॉर्म नाही) — त्यामुळे ही कधीही ईमेलने
  // Admin कडे पाठवली जात नाही किंवा Sheet मध्ये नोंदवली जात नाही; फक्त वापरकर्त्याच्या फोनवर डाउनलोड होते.
  return await renderNodeToPdf(buildTopicHTML(key,topic,ARTICLES,L), 'topic-'+key);
}
return{FIELDS:FIELDS,download:download,downloadTopic:downloadTopic};
})();
