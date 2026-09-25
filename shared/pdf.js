/* Legal Helpdesk India — कागदपत्र PDF जनरेटर (Marathi/Hindi/English, client-side, jsPDF+html2canvas) */
window.LHI_PDF=(function(){
function f(id,type,mr,hi,en){return{id:id,type:type||'text',label:{mr:mr,hi:hi,en:en}}}
const FIELDS={
 police:[f('complainantName','text','तक्रारदाराचे नाव','शिकायतकर्ता का नाम','Complainant name'),
  f('complainantAddress','text','पत्ता','पता','Address'),f('complainantMobile','text','मोबाईल क्रमांक','मोबाइल नंबर','Mobile number'),
  f('policeStation','text','पोलीस स्टेशन','पुलिस स्टेशन','Police station'),f('incidentDate','date','घटनेची तारीख','घटना की तारीख','Date of incident'),
  f('incidentPlace','text','घटनेचे ठिकाण','घटना स्थान','Place of incident'),f('complaintDetails','ta','तक्रारीचा तपशील','शिकायत का विवरण','Complaint details')],
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
  f('startDate','date','सुरुवातीची तारीख','शुरुआत की तारीख','Start date'),f('duration','text','कालावधी (महिने/वर्षे)','अवधि (महीने/वर्ष)','Duration (months/years)')],
 affidavit:[f('deponentName','text','शपथ घेणाऱ्याचे नाव','शपथकर्ता का नाम',"Deponent's name"),f('fatherOrHusbandName','text','वडील/पतीचे नाव','पिता/पति का नाम',"Father's/Husband's name"),
  f('age','text','वय','आयु','Age'),f('address','text','पत्ता','पता','Address'),f('purpose','ta','प्रतिज्ञापत्राचा मजकूर / उद्देश','शपथ पत्र का उद्देश्य / विवरण','Affidavit content / purpose')],
 rti:[f('applicantName','text','अर्जदाराचे नाव','आवेदक का नाम',"Applicant's name"),f('applicantAddress','text','पत्ता','पता','Address'),
  f('pioOffice','text','कार्यालय / विभागाचे नाव','कार्यालय / विभाग का नाम','Office / department name'),f('informationSought','ta','मागितलेली माहिती','मांगी गई जानकारी','Information sought')],
 resignation:[f('employeeName','text','कर्मचाऱ्याचे नाव','कर्मचारी का नाम',"Employee's name"),f('designation','text','पदनाम','पदनाम','Designation'),
  f('employer','text','कंपनी / संस्थेचे नाव','कंपनी / संस्था का नाम','Company / organisation name'),f('lastWorkingDay','date','शेवटचा कामाचा दिवस','अंतिम कार्य दिवस','Last working day'),
  f('reason','ta','कारण (ऐच्छिक)','कारण (वैकल्पिक)','Reason (optional)')],
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
  close:tr('कृपया सदर तक्रारीची नोंद घेऊन योग्य ती कायदेशीर कारवाई करावी, ही विनंती.','कृपया उक्त शिकायत दर्ज कर उचित कानूनी कार्रवाई करने का कष्ट करें।','You are requested to kindly register this complaint and initiate appropriate legal action.'),
  sign:tr('आपला विश्वासू,','आपका विश्वासी,','Yours faithfully,')},
 notice:{title:tr('कायदेशीर नोटीस','कानूनी नोटिस','Legal Notice'),
  to:tr('प्रति,\n{{recipientName}}\n{{recipientAddress}}','सेवा में,\n{{recipientName}}\n{{recipientAddress}}','To,\n{{recipientName}}\n{{recipientAddress}}'),
  subject:tr('विषय: {{subject}}','विषय: {{subject}}','Subject: {{subject}}'),
  open:tr('आपणास याद्वारे कळविण्यात येते की —','आपको इस पत्र के माध्यम से सूचित किया जाता है कि —','You are hereby notified through this letter that —'),
  close:tr('सदर नोटीस मिळाल्यापासून १५ दिवसांच्या आत योग्य ती कार्यवाही न झाल्यास, योग्य त्या कायदेशीर मार्गाने पुढील कारवाई करण्यात येईल, याची नोंद घ्यावी.','कृपया ध्यान दें कि इस नोटिस की प्राप्ति के 15 दिनों के भीतर उचित कार्रवाई न होने पर, आगे उचित कानूनी कार्रवाई की जाएगी।','Please note that if appropriate action is not taken within 15 days of receipt of this notice, further legal action shall be initiated as deemed necessary.'),
  sign:tr('आपला,','आपका,','Yours,')},
 marriage:{title:tr('विवाह नोंदणी अर्ज','विवाह पंजीकरण आवेदन','Marriage Registration Application'),
  to:tr('प्रति,\nविवाह नोंदणी अधिकारी','सेवा में,\nविवाह पंजीयक','To,\nThe Marriage Registrar'),
  subject:tr('विषय: विवाह नोंदणीसाठी अर्ज','विषय: विवाह पंजीकरण हेतु आवेदन','Subject: Application for marriage registration'),
  open:tr('महोदय,\nआम्ही खालील तपशिलानुसार आमच्या विवाहाची नोंदणी करू इच्छितो —','महोदय,\nहम निम्नलिखित विवरण के अनुसार अपने विवाह का पंजीकरण करवाना चाहते हैं —','Sir/Madam,\nWe wish to register our marriage as per the following details —'),
  close:tr('कृपया सदर अर्जाचा विचार करून विवाह नोंदणी प्रमाणपत्र देण्यात यावे.','कृपया उक्त आवेदन पर विचार कर विवाह पंजीकरण प्रमाण पत्र प्रदान करें।','You are requested to kindly consider this application and issue the marriage registration certificate.'),
  sign:tr('अर्जदार,','आवेदक,','Applicants,')},
 rent:{title:tr('भाडे करार','किराया अनुबंध','Rent Agreement'),to:null,subject:null,
  open:tr('हा भाडे करार खालील दोन पक्षांमध्ये खालील अटींनुसार करण्यात येत आहे —','यह किराया अनुबंध निम्नलिखित दो पक्षों के बीच निम्नलिखित शर्तों पर किया जा रहा है —','This Rent Agreement is made between the following two parties on the following terms —'),
  close:tr('वरील नमूद अटी व शर्ती दोन्ही पक्षांना मान्य आहेत.','उपर्युक्त नियम व शर्तें दोनों पक्षों को मान्य हैं।','The above terms and conditions are agreed upon by both parties.'),
  sign2:tr(['घरमालकाची सही','भाडेकरूची सही'],['मकान मालिक के हस्ताक्षर','किरायेदार के हस्ताक्षर'],["Landlord's Signature","Tenant's Signature"])},
 affidavit:{title:tr('प्रतिज्ञापत्र','शपथ पत्र','Affidavit'),to:null,subject:null,
  open:tr('मी, खालील सही करणारा/करणारी, शपथेवर खालीलप्रमाणे जाहीर करतो/करते —','मैं, नीचे हस्ताक्षरकर्ता, शपथपूर्वक निम्नलिखित घोषणा करता/करती हूँ —','I, the undersigned, do hereby solemnly affirm and declare as follows —'),
  close:tr('वरील मजकूर माझ्या माहिती व विश्वासाप्रमाणे खरा आहे.','उपरोक्त कथन मेरी जानकारी और विश्वास के अनुसार सत्य है।','The above statement is true to the best of my knowledge and belief.'),
  sign:tr('शपथ घेणार,','शपथकर्ता,','Deponent,')},
 rti:{title:tr('माहितीचा अधिकार अर्ज (RTI)','सूचना का अधिकार आवेदन (RTI)','Right to Information (RTI) Application'),
  to:tr('प्रति,\nजन माहिती अधिकारी,\n{{pioOffice}}','सेवा में,\nजन सूचना अधिकारी,\n{{pioOffice}}','To,\nThe Public Information Officer,\n{{pioOffice}}'),
  subject:tr('विषय: माहितीचा अधिकार अधिनियम, २००५ अंतर्गत माहिती मागणी अर्ज','विषय: सूचना का अधिकार अधिनियम, 2005 के तहत जानकारी हेतु आवेदन','Subject: Application seeking information under the RTI Act, 2005'),
  open:tr('महोदय,\nमाहितीचा अधिकार अधिनियम २००५ च्या कलम ६ अन्वये मी खालील माहिती मागत आहे —','महोदय,\nसूचना का अधिकार अधिनियम 2005 की धारा 6 के तहत मैं निम्नलिखित जानकारी चाहता/चाहती हूँ —','Sir/Madam,\nUnder Section 6 of the Right to Information Act, 2005, I am seeking the following information —'),
  close:tr('विहित शुल्क सोबत जोडले आहे. कृपया विहित मुदतीत माहिती पुरवावी.','निर्धारित शुल्क संलग्न है। कृपया निर्धारित समय-सीमा में जानकारी प्रदान करें।','The prescribed fee is enclosed. Kindly provide the information within the stipulated time.'),
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
  let body='<div style="font-family:\'Noto Sans Devanagari\',Arial,sans-serif;font-size:13px;line-height:1.8;color:#111;width:680px;padding:36px">';
  body+='<div style="text-align:center;font-size:18px;font-weight:700;margin-bottom:18px;text-decoration:underline">'+esc(cfg.title[L])+'</div>';
  if(cfg.to){body+='<div style="white-space:pre-line;margin-bottom:12px">'+fill(cfg.to[L],v)+'</div>'}
  if(cfg.subject){body+='<div style="font-weight:600;margin-bottom:14px">'+fill(cfg.subject[L],v)+'</div>'}
  body+='<div style="white-space:pre-line;margin-bottom:14px">'+fill(cfg.open[L],v)+'</div>';
  body+='<table style="width:100%;border-collapse:collapse;margin-bottom:14px">'+fields.filter(fd=>fd.id!=='subject'&&fd.id!=='recipientName'&&fd.id!=='recipientAddress'&&fd.id!=='employer'&&fd.id!=='designation'&&fd.id!=='pioOffice'&&fd.id!=='policeStation').map(fd=>
    '<tr><td style="padding:4px 8px 4px 0;font-weight:600;vertical-align:top;width:38%">'+esc(fd.label[L])+'</td><td style="padding:4px 0;vertical-align:top">'+esc(v[fd.id]||'—')+'</td></tr>').join('')+'</table>';
  body+='<div style="margin-bottom:22px">'+esc(cfg.close[L])+'</div>';
  if(cfg.sign2){body+='<table style="width:100%;margin-top:40px"><tr><td style="width:50%">________________<br>'+esc(cfg.sign2[L][0])+'</td><td style="width:50%">________________<br>'+esc(cfg.sign2[L][1])+'</td></tr></table>'}
  else{body+='<div style="margin-top:34px">'+esc(cfg.sign[L])+'<br><br>________________</div>'}
  body+='<div style="margin-top:26px;font-size:11px;color:#666">'+esc(DISC[L])+'<br>Legal Helpdesk India — '+new Date().toLocaleDateString('en-IN')+'</div></div>';
  return body;
}
async function download(key,v,L,fields){
  const host=document.createElement('div');host.style.cssText='position:fixed;left:-99999px;top:0;background:#fff';host.innerHTML=buildHTML(key,v,L,fields);
  document.body.appendChild(host);
  if(document.fonts&&document.fonts.ready){try{await document.fonts.ready}catch(e){}}
  await new Promise(r=>setTimeout(r,60));
  const jsPDFLib=window.jspdf&&window.jspdf.jsPDF;
  if(!jsPDFLib){document.body.removeChild(host);throw new Error('pdf-lib-missing')}
  const doc=new jsPDFLib({unit:'pt',format:'a4'});
  await new Promise((resolve,reject)=>{
    doc.html(host,{x:36,y:24,width:523,windowWidth:680,
      callback:function(d){try{d.save((key+'-'+(v[Object.keys(v)[0]]||'form')).replace(/[^a-zA-Z0-9\-]+/g,'_').slice(0,60)+'.pdf');resolve()}catch(e){reject(e)}}
    }).catch(reject);
  });
  document.body.removeChild(host);
}
return{FIELDS:FIELDS,download:download};
})();
