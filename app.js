/* Legal Helpdesk India — User app */
(function(){
const C=window.LHI_CONFIG,D=window.LHI_DATA,$=s=>document.querySelector(s),$$=s=>[].slice.call(document.querySelectorAll(s));
const IDX={mr:0,hi:1,en:2};let L='mr';try{L=localStorage.getItem('lhi-lang')||'mr'}catch(e){}
const T={
tag:["कायदेशीर मार्गदर्शन","कानूनी मार्गदर्शन","Legal guidance"],
nav_home:["होम","होम","Home"],nav_ask:["AI प्रश्न","AI से पूछें","Ask AI"],nav_help:["मदत","मदद","Get Help"],nav_learn:["माहिती","जानकारी","Learn"],nav_rev:["अभिप्राय","समीक्षा","Reviews"],
hero_t:["तुमच्या हक्कांची माहिती, सोप्या भाषेत","अपने अधिकारों की जानकारी, सरल भाषा में","Know your rights, in simple language"],
hero_s:["कायदेशीर प्रश्न विचारा, तज्ज्ञांकडून मदत मागा आणि उपयुक्त मार्गदर्शन मिळवा.","कानूनी सवाल पूछें, विशेषज्ञ से मदद माँगें और उपयोगी मार्गदर्शन पाएँ।","Ask legal questions, request expert help and get practical guidance."],
cta_ask:["AI ला विचारा","AI से पूछें","Ask AI"],cta_help:["मदत मागा","मदद माँगें","Request Help"],
t_track:["विनंती ट्रॅक करा","अनुरोध ट्रैक करें","Track request"],t_topics:["कायदेशीर विषय","कानूनी विषय","Legal topics"],t_docs:["कागदपत्र नमुने","दस्तावेज़ नमूने","Document guides"],t_const:["संविधान","संविधान","Constitution"],
contact:["संपर्क","संपर्क","Contact us"],call:["कॉल","कॉल","Call"],email:["ईमेल","ईमेल","Email"],
ask_t:["कायदेशीर प्रश्न विचारा","कानूनी सवाल पूछें","Ask a legal question"],ask_ph:["तुमची समस्या येथे लिहा…","अपनी समस्या यहाँ लिखें…","Describe your problem here…"],
ask_btn:["उत्तर मिळवा","उत्तर पाएँ","Get answer"],ask_wait:["उत्तर तयार होत आहे…","उत्तर तैयार हो रहा है…","Preparing your answer…"],
ask_note:["ही सामान्य माहिती आहे, वकिलाचा सल्ला नाही.","यह सामान्य जानकारी है, वकील की सलाह नहीं।","General information only, not legal advice."],
ex1:["भाडेकरू घर रिकामे करत नाही, काय करावे?","किरायेदार घर खाली नहीं कर रहा, क्या करें?","My tenant won't vacate my house. What can I do?"],
ex2:["पोलीस तक्रार (FIR) कशी नोंदवायची?","पुलिस शिकायत (FIR) कैसे दर्ज करें?","How do I file an FIR?"],
ex3:["RTI अर्ज कसा करायचा?","RTI आवेदन कैसे करें?","How do I file an RTI application?"],
help_t:["कायदेशीर मदत मागा","कानूनी मदद माँगें","Request legal help"],help_s:["फॉर्म भरा, आमची टीम तुमच्याशी संपर्क करेल.","फ़ॉर्म भरें, हमारी टीम आपसे संपर्क करेगी।","Fill the form and our team will contact you."],
f_name:["पूर्ण नाव *","पूरा नाम *","Full name *"],f_mobile:["मोबाईल क्रमांक *","मोबाइल नंबर *","Mobile number *"],f_city:["शहर / गाव","शहर / गाँव","City / Village"],f_cat:["विषय","विषय","Topic"],
f_desc:["तुमची समस्या *","आपकी समस्या *","Your problem *"],f_time:["संपर्कासाठी सोयीची वेळ","संपर्क के लिए सुविधाजनक समय","Preferred contact time"],
tm0:["कधीही","कभी भी","Anytime"],tm1:["सकाळ","सुबह","Morning"],tm2:["दुपार","दोपहर","Afternoon"],tm3:["संध्याकाळ","शाम","Evening"],f_other:["इतर","अन्य","Other"],
f_send:["विनंती पाठवा","अनुरोध भेजें","Submit request"],
f_req:["कृपया नाव आणि समस्या लिहा.","कृपया नाम और समस्या लिखें।","Please enter your name and problem."],f_mob:["कृपया १० अंकी मोबाईल क्रमांक टाका.","कृपया 10 अंकों का मोबाइल नंबर डालें।","Please enter a 10-digit mobile number."],
f_ok:["विनंती नोंदवली गेली! तुमचा ID:","अनुरोध दर्ज हो गया! आपकी ID:","Request received! Your ID:"],f_ok2:["हा ID जपून ठेवा — स्थिती पाहण्यासाठी लागेल.","इस ID को सुरक्षित रखें — स्थिति देखने के लिए चाहिए।","Keep this ID — you need it to check status."],
err_net:["सेवा सध्या उपलब्ध नाही. कृपया थोड्या वेळाने प्रयत्न करा किंवा WhatsApp वर संपर्क करा.","सेवा अभी उपलब्ध नहीं है। कृपया कुछ देर बाद प्रयास करें या WhatsApp पर संपर्क करें।","Service is unavailable right now. Please try again later or contact us on WhatsApp."],
wa_send:["WhatsApp वर पाठवा","WhatsApp पर भेजें","Send on WhatsApp"],
tr_t:["विनंतीची स्थिती","अनुरोध की स्थिति","Track your request"],tr_id:["विनंती ID","अनुरोध ID","Request ID"],tr_btn:["स्थिती पहा","स्थिति देखें","Check status"],
tr_nf:["विनंती सापडली नाही. ID आणि मोबाईल तपासा.","अनुरोध नहीं मिला। ID और मोबाइल जाँचें।","Not found. Please check the ID and mobile number."],
s_New:["नोंदवली","दर्ज","Received"],s_Contacted:["संपर्क केला","संपर्क किया","Contacted"],"s_In Progress":["प्रगतीत","प्रगति में","In progress"],s_Resolved:["पूर्ण","पूर्ण","Resolved"],
l_topics:["विषय","विषय","Topics"],l_docs:["कागदपत्रे","दस्तावेज़","Documents"],l_const:["संविधान","संविधान","Constitution"],search_ph:["शोधा…","खोजें…","Search…"],
c_all:["सर्व","सभी","All"],c_rights:["मूलभूत हक्क","मौलिक अधिकार","Rights"],c_directive:["मार्गदर्शक तत्त्वे","नीति निदेशक","Directive"],c_duties:["कर्तव्ये","कर्तव्य","Duties"],c_judiciary:["न्यायपालिका","न्यायपालिका","Judiciary"],c_structure:["रचना","संरचना","Structure"],
r_t:["नागरिकांचे अभिप्राय","नागरिकों की समीक्षाएँ","Citizen reviews"],r_none:["अजून अभिप्राय नाहीत.","अभी कोई समीक्षा नहीं।","No reviews yet."],r_write:["तुमचा अभिप्राय द्या","अपनी समीक्षा दें","Share your feedback"],
r_name:["तुमचे नाव","आपका नाम","Your name"],r_msg:["तुमचा अनुभव लिहा","अपना अनुभव लिखें","Write your experience"],r_send:["अभिप्राय पाठवा","समीक्षा भेजें","Submit review"],
r_ok:["धन्यवाद! मंजुरीनंतर अभिप्राय दिसेल.","धन्यवाद! स्वीकृति के बाद समीक्षा दिखेगी।","Thank you! Your review will appear after approval."],r_req:["नाव आणि अभिप्राय आवश्यक आहे.","नाम और समीक्षा आवश्यक है।","Name and review are required."],
disc:["हे ऍप सामान्य कायदेशीर माहिती देते; ते वकिलाच्या सल्ल्याला पर्याय नाही.","यह ऐप सामान्य कानूनी जानकारी देता है; यह वकील की सलाह का विकल्प नहीं है।","This app gives general legal information and is not a substitute for a lawyer."],
sending:["पाठवत आहे…","भेज रहे हैं…","Sending…"],loading:["लोड होत आहे…","लोड हो रहा है…","Loading…"],
pdf_btn:["PDF फॉर्म भरा","PDF फॉर्म भरें","Fill PDF form"],pdf_dl:["PDF डाउनलोड करा","PDF डाउनलोड करें","Download PDF"],
pdf_making:["PDF तयार होत आहे…","PDF बन रही है…","Preparing PDF…"],pdf_err:["PDF बनवता आले नाही. पुन्हा प्रयत्न करा.","PDF नहीं बन सकी। पुनः प्रयास करें।","Could not create the PDF. Please try again."],
pdf_note:["हा सर्वसाधारण मसुदा आहे, अंतिम वापरापूर्वी वकिलाचा सल्ला घ्या.","यह एक सामान्य मसौदा है, अंतिम उपयोग से पहले वकील की सलाह लें।","This is a general draft — consult a lawyer before final use."],
pdf_mobile:["तुमचा मोबाईल क्रमांक (पडताळणीसाठी) *","आपका मोबाइल नंबर (सत्यापन हेतु) *","Your mobile number (for verification) *"],
pdf_missing:["कृपया खालील माहिती भरा:","कृपया निम्नलिखित जानकारी भरें:","Please fill in the following:"],
pdf_badmobile:["कृपया वैध १० अंकी मोबाईल क्रमांक टाका (उदा. ९८७६५४३२१०).","कृपया मान्य 10 अंकों का मोबाइल नंबर डालें (जैसे 9876543210)।","Please enter a valid 10-digit mobile number (e.g. 9876543210)."],
pdf_done:["PDF यशस्वीरित्या डाउनलोड झाला आणि तुमच्या तपशिलांची नोंद आमच्याकडे झाली आहे.","PDF सफलतापूर्वक डाउनलोड हो गई और आपका विवरण हमारे पास दर्ज हो गया है।","Your PDF has been downloaded and your details have been recorded with us."],
pdf_done2:["PDF डाउनलोड झाला, पण नोंद पाठवता आली नाही (इंटरनेट तपासा).","PDF डाउनलोड हो गई, पर विवरण नहीं भेजा जा सका (इंटरनेट जाँचें)।","PDF downloaded, but we couldn't record it (please check your internet)."],
topic_related:["संबंधित संविधान कलमे","संबंधित संविधान अनुच्छेद","Related Constitutional Articles"],
topic_faq:["सामान्य प्रश्न","सामान्य प्रश्न","Frequently Asked Questions"],
topic_ask_btn:["या विषयावर AI ला विचारा","इस विषय पर AI से पूछें","Ask AI about this topic"],
topic_pdf_btn:["या विषयाची PDF बनवा","इस विषय की PDF बनाएँ","Download this topic as PDF"],
topic_ask_prefill:["मला या विषयाबद्दल अधिक माहिती हवी आहे: ","मुझे इस विषय के बारे में अधिक जानकारी चाहिए: ","I would like more information about this topic: "],
topic_pdf_done:["या विषयाची PDF यशस्वीरित्या डाउनलोड झाली.","इस विषय की PDF सफलतापूर्वक डाउनलोड हो गई।","This topic's PDF has been downloaded successfully."],
share_btn:["शेअर करा","शेयर करें","Share"],share_copied:["मजकूर कॉपी झाला आहे, कुठेही पेस्ट करा.","पाठ कॉपी हो गया है, कहीं भी पेस्ट करें।","Text copied — paste it anywhere."],
share_app_btn:["हे ऍप इतरांना पाठवा","यह ऐप दूसरों को भेजें","Share this app"],
share_app_text:["Legal Helpdesk India — मोफत कायदेशीर माहिती व मदत या ऍपवर मिळवा:","Legal Helpdesk India — मुफ्त कानूनी जानकारी व मदद इस ऐप पर पाएँ:","Legal Helpdesk India — get free legal information and help on this app:"],
about_title:["आमच्याबद्दल","हमारे बारे में","About Us"],
about_bio:["श्री. स्वप्नील मोकळ (M.Sc. CS) — माजी अध्यक्ष, संस्कार फाउंडेशन. Legal Help India टीमचे कायदेशीर सल्लागार.","श्री स्वप्निल मोकल (M.Sc. CS) — पूर्व अध्यक्ष, संस्कार फाउंडेशन। Legal Help India टीम के कानूनी सलाहकार।","Mr. Swapnil Mokal (M.Sc. CS) — Ex-President, Sanskar Foundation. Legal Advisor, Legal Help India Team."],
about_bio2:["डॉ. प्रशांत आभंग — वकील, मुंबई उच्च न्यायालय. Legal Help India टीमचे कायदेशीर सल्लागार.","डॉ. प्रशांत आभंग — अधिवक्ता, मुंबई उच्च न्यायालय। Legal Help India टीम के कानूनी सलाहकार।","Dr. Prashant Abhang — Advocate, Bombay High Court. Legal Advisor, Legal Help India Team."]};
const t=k=>T[k]?T[k][IDX[L]]:k,esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let S={},cat='all',lastTrack=null,revLoaded=false,sub='topics';

function msg(el,cls,html){el.className='msg '+cls;el.innerHTML=html}
async function call(fn,body){const r=await apiFetch(fn,{method:'POST',body:JSON.stringify(body||{})}),d=await r.json();if(!r.ok)throw new Error(d.error||'error');return d}
function fail(el,e,extra){console.error(e);msg(el,'err',esc(t('err_net'))+'<br><small>'+esc(e&&e.message||'')+'</small>'+(extra||''))}
function waLink(text){return 'https://wa.me/'+C.whatsappNumber+'?text='+encodeURIComponent(text)}

function fillIcons(){$$('[data-ic]').forEach(e=>{if(!e.dataset.filled&&window.LHI_ICONS[e.dataset.ic]){e.innerHTML=window.LHI_ICONS[e.dataset.ic];e.dataset.filled='1'}})}
function applyText(){
  fillIcons();$$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
  $$('[data-ex]').forEach(b=>b.textContent=t(b.dataset.ex));$$('#lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));
  document.documentElement.lang=L;
  const cur=$('#fCat').value;$('#fCat').innerHTML=Object.values(D.TOPICS).map(x=>'<option value="'+esc(x.title.en)+'">'+esc(x.title[L])+'</option>').join('')+'<option value="Other">'+esc(t('f_other'))+'</option>';if(cur)$('#fCat').value=cur;
  if(S.welcome)$('#heroS').textContent=S.welcome;if(S.cta)$('#ctaHelp').textContent=S.cta;
  const n=$('#notice');if(S.update){n.classList.remove('hide');n.textContent=S.update}else n.classList.add('hide');
  $('#cWa').href=waLink('Namaste, mala kayadeshir madat pahije.');$('#cCall').href='tel:+'+C.whatsappNumber;$('#cMail').href='mailto:'+C.email;
  buildCats();renderLearn();if(revLoaded)renderReviews();showTrack();
}
function route(){
  const p=(location.hash||'#home').slice(1).split('-'),id=['home','ask','help','learn','reviews'].indexOf(p[0])>=0?p[0]:'home';
  $$('.view').forEach(e=>e.classList.toggle('hide',e.id!=='v-'+id));$$('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id));
  if(id==='learn'){sub=p[1]||sub;$$('#sub button').forEach(b=>b.classList.toggle('on',b.dataset.s===sub));['topics','docs','const'].forEach(x=>$('#l-'+x).classList.toggle('hide',x!==sub))}
  if(id==='reviews'&&!revLoaded)loadReviews();
  if(p[1]==='track')setTimeout(()=>$('#trackCard').scrollIntoView(),50);else window.scrollTo(0,0);
}
/* ---- Learn ---- */
function buildCats(){$('#cats').innerHTML=['all','rights','directive','duties','judiciary','structure'].map(c=>'<button data-c="'+c+'" class="'+(c===cat?'on':'')+'">'+esc(t('c_'+c))+'</button>').join('')}
function renderLearn(){
  $('#l-topics').innerHTML=Object.keys(D.TOPICS).map(k=>{const x=D.TOPICS[k];
    const rel=(x.related||[]).map(n=>D.ARTICLES.find(a=>a.num===n)).filter(Boolean);
    const relHtml=rel.length?'<h4>'+esc(t('topic_related'))+'</h4><ul>'+rel.map(a=>'<li><b>'+esc(a.title[L])+'</b> — '+esc(a.sum[L])+'</li>').join('')+'</ul>':'';
    const faqHtml=(x.faqs||[]).length?'<h4>'+esc(t('topic_faq'))+'</h4>'+x.faqs.map(f=>'<p style="margin-bottom:2px"><b>प्र.</b> '+esc(f.q[L])+'</p><p class="mut" style="margin-bottom:10px"><b>उ.</b> '+esc(f.a[L])+'</p>').join(''):'';
    return '<details class="card acc"><summary><span class="ic">'+(x.icon||'⚖️')+'</span>'+esc(x.title[L])+'</summary>'+
      x.sections.map(s=>'<h4>'+esc(s.heading[L])+'</h4><ul>'+s.items[L].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>').join('')+relHtml+faqHtml+
      '<div class="row" style="margin:6px 16px 16px"><button class="btn ghost sm" data-asktopic="'+k+'">'+esc(t('topic_ask_btn'))+'</button><button class="btn gold sm" data-pdftopic="'+k+'">'+esc(t('topic_pdf_btn'))+'</button></div>'+
    '</details>'}).join('');
  $('#l-docs').innerHTML=D.DOCS.map(d=>'<details class="card acc"><summary><span class="ic">'+d.icon+'</span>'+esc(d.title[L])+'</summary><p class="mut">'+esc(d.desc[L])+'</p><ul>'+d.points[L].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>'+(window.LHI_PDF&&window.LHI_PDF.FIELDS[d.key]?'<button class="btn gold sm" data-pdf="'+d.key+'" style="margin:4px 16px 16px">'+esc(t('pdf_btn'))+'</button>':'')+'</details>').join('');
  const q=$('#q').value.trim().toLowerCase(),list=D.ARTICLES.filter(a=>(cat==='all'||a.cat===cat)&&(!q||(a.num+' '+a.title.mr+' '+a.title.hi+' '+a.title.en+' '+a.sum[L]).toLowerCase().indexOf(q)>=0));
  $('#arts').innerHTML=list.length?list.map(a=>'<details class="card acc art"><summary>'+esc(a.title[L])+'</summary><p>'+esc(a.sum[L])+'</p></details>').join(''):'<p class="mut">—</p>';
}
/* ---- Ask AI ---- */
let lastAnswer='';
async function ask(){
  const p=$('#askQ').value.trim();if(!p)return;const out=$('#askOut'),b=$('#askBtn');b.disabled=true;msg(out,'info',esc(t('ask_wait')));
  try{const d=await call('ask',{problem:p,lang:L});if(!d.text)throw new Error('empty');lastAnswer=d.text;
    out.className='msg ok';out.innerHTML='<div class="pre">'+esc(d.text)+'</div><button class="btn ghost sm" id="shareAnsBtn" style="margin-top:10px">'+esc(t('share_btn'))+'</button>';
  }catch(e){fail(out,e)}b.disabled=false;
}
async function shareContent(text,url){
  const shareData={title:'Legal Helpdesk India',text:text};if(url)shareData.url=url;
  try{if(navigator.share){await navigator.share(shareData);return}}catch(e){if(e&&e.name==='AbortError')return}
  const waText=text+(url?'\n'+url:'');
  try{window.open(waLink(waText),'_blank')}
  catch(e){try{await navigator.clipboard.writeText(waText);alert(t('share_copied'))}catch(e2){}}
}
/* ---- Help form ---- */
async function submitHelp(){
  const g=id=>$(id).value.trim(),out=$('#fOut'),name=g('#fName'),mob=g('#fMobile').replace(/\D/g,'').slice(-10),desc=g('#fDesc');
  if(!name||!desc)return msg(out,'err',esc(t('f_req')));if(mob.length!==10)return msg(out,'err',esc(t('f_mob')));
  const body={name:name,mobile:mob,city:g('#fCity'),category:$('#fCat').value,description:desc,preferredTime:$('#fTime').value,lang:L},b=$('#fBtn');
  b.disabled=true;msg(out,'info',esc(t('sending')));
  try{const d=await call('submit-legal-help',body),id=d.requestId||'';try{localStorage.setItem('lhi-last',id)}catch(e){}
    msg(out,'ok',esc(t('f_ok'))+' <span class="copy">'+esc(id)+'</span><br><small>'+esc(t('f_ok2'))+'</small>');$('#trId').value=id;$('#trMob').value=mob;$('#fDesc').value=''}
  catch(e){fail(out,e,'<br><a class="btn ok sm" style="margin-top:8px" target="_blank" rel="noopener" href="'+waLink('Legal help request\nName: '+name+'\nMobile: '+mob+'\nTopic: '+body.category+'\n'+desc)+'">'+esc(t('wa_send'))+'</a>')}
  b.disabled=false;
}
/* ---- Track ---- */
async function track(){
  const id=$('#trId').value.trim(),mob=$('#trMob').value.replace(/\D/g,'').slice(-10),out=$('#trOut');if(!id||mob.length!==10)return msg(out,'err',esc(t('f_mob')));
  msg(out,'info',esc(t('loading')));
  try{lastTrack=(await call('track-request',{id:id,mobile:mob})).request;showTrack()}catch(e){lastTrack=null;msg(out,'err',esc(/not|सापडली|found|404/i.test(e.message)?t('tr_nf'):t('err_net')))}
}
function showTrack(){
  if(!lastTrack)return;const s=['New','Contacted','In Progress','Resolved'],i=Math.max(0,s.indexOf(lastTrack.status));
  msg($('#trOut'),'info','<b>'+esc(lastTrack.id)+'</b><div class="steps">'+s.map((x,n)=>'<span class="'+(n<=i?'on':'')+'">'+esc(t('s_'+x))+'</span>').join('')+'</div>');
}
/* ---- Reviews ---- */
async function loadReviews(){revLoaded=true;$('#revList').innerHTML='<p class="mut">'+esc(t('loading'))+'</p>';try{window._rv=(await call('reviews')).reviews||[]}catch(e){window._rv=[];revLoaded=false}renderReviews()}
function renderReviews(){const l=window._rv||[];$('#revList').innerHTML=l.length?l.map(r=>'<div class="card"><div class="stars">'+'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)+'</div><p>'+esc(r.message)+'</p><p class="mut">— '+esc(r.name)+'</p></div>').join(''):'<p class="mut" style="margin-bottom:12px">'+esc(t('r_none'))+'</p>'}
async function sendReview(){
  const out=$('#rOut'),name=$('#rName').value.trim(),m=$('#rMsg').value.trim();if(!name||!m)return msg(out,'err',esc(t('r_req')));
  $('#rBtn').disabled=true;try{await call('submit-review',{name:name,message:m,rating:$('#rRate').value,lang:L});msg(out,'ok',esc(t('r_ok')));$('#rMsg').value=''}catch(e){fail(out,e)}$('#rBtn').disabled=false;
}

/* ---- PDF फॉर्म ---- */
function openPdfForm(key){
  const fields=window.LHI_PDF.FIELDS[key];if(!fields)return;
  const html='<button class="modal-close" id="pdfClose">&times;</button><h3>'+esc(t('pdf_btn'))+'</h3><div class="pdf-disc">'+esc(t('pdf_note'))+'</div>'+
   fields.map(fd=>'<label>'+esc(fd.label[L])+(fd.opt?'':' *')+'</label>'+(fd.type==='ta'?'<textarea data-f="'+fd.id+'"></textarea>':'<input data-f="'+fd.id+'" type="'+(fd.type==='date'?'date':'text')+'">')).join('')+
   '<label>'+esc(t('pdf_mobile'))+'</label><input data-f="_mobile" type="tel" inputmode="numeric" maxlength="10">'+
   '<button class="btn" id="pdfGo" style="width:100%;margin-top:16px">'+esc(t('pdf_dl'))+'</button><div class="msg hide" id="pdfOut"></div>';
  $('#pdfSheet').innerHTML=html;$('#pdfSheet').dataset.key=key;$('#pdfModal').classList.remove('hide');
}
function closePdfForm(){$('#pdfModal').classList.add('hide');$('#pdfSheet').innerHTML=''}
function isValidMobile(m){return /^[6-9]\d{9}$/.test(m)}
async function generatePdf(){
  const key=$('#pdfSheet').dataset.key,fields=window.LHI_PDF.FIELDS[key],v={},out=$('#pdfOut'),b=$('#pdfGo');
  fields.forEach(fd=>v[fd.id]=$('#pdfSheet').querySelector('[data-f="'+fd.id+'"]').value.trim());
  const mobile=$('#pdfSheet').querySelector('[data-f="_mobile"]').value.trim().replace(/\D/g,'');
  const missing=fields.filter(fd=>!fd.opt&&!v[fd.id]).map(fd=>fd.label[L]);
  if(!mobile)missing.push(t('pdf_mobile').replace(' *',''));
  if(missing.length){alert(t('pdf_missing')+'\n\n• '+missing.join('\n• '));return}
  if(!isValidMobile(mobile)){alert(t('pdf_badmobile'));return}
  b.disabled=true;msg(out,'info',esc(t('pdf_making')));
  try{
    const doc=D.DOCS.find(d=>d.key===key),res=await window.LHI_PDF.download(key,v,L,fields);
    try{
      await call('log-pdf-download',{name:v[fields[0].id]||'—',mobile:mobile,docKey:key,docTitle:doc?doc.title[L]:key,filename:res.filename,pdfBase64:res.dataUri,lang:L});
      msg(out,'ok',esc(t('pdf_done')));alert(t('pdf_done'));
    }catch(logErr){console.error(logErr);msg(out,'info',esc(t('pdf_done2')));alert(t('pdf_done2'))}
  }catch(e){console.error(e);msg(out,'err',esc(t('pdf_err')))}
  b.disabled=false;
}
/* ---- wiring ---- */
$('#lang').onclick=e=>{const b=e.target.closest('button');if(!b)return;L=b.dataset.l;try{localStorage.setItem('lhi-lang',L)}catch(x){}applyText()};
$('#sub').onclick=e=>{const b=e.target.closest('button');if(b)location.hash='learn-'+b.dataset.s};
$('#cats').onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;buildCats();renderLearn()};
$('#q').oninput=renderLearn;$('#askBtn').onclick=ask;$('#fBtn').onclick=submitHelp;$('#trBtn').onclick=track;$('#rBtn').onclick=sendReview;
async function downloadTopicPdf(key){
  const topic=D.TOPICS[key];if(!topic||!window.LHI_PDF||!window.LHI_PDF.downloadTopic)return;
  try{await window.LHI_PDF.downloadTopic(key,topic,D.ARTICLES,L);alert(t('topic_pdf_done'))}
  catch(e){console.error(e);alert(t('pdf_err'))}
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-pdf]');if(b)openPdfForm(b.dataset.pdf);
  if(e.target.id==='pdfClose'||e.target.id==='pdfModal')closePdfForm();
  if(e.target.id==='pdfGo')generatePdf();
  const ab=e.target.closest('[data-asktopic]');
  if(ab){const topic=D.TOPICS[ab.dataset.asktopic];location.hash='#ask';$('#askQ').value=t('topic_ask_prefill')+(topic?topic.title[L]:'');setTimeout(()=>$('#askQ').focus(),50)}
  const pb=e.target.closest('[data-pdftopic]');if(pb)downloadTopicPdf(pb.dataset.pdftopic);
  if(e.target.id==='shareAnsBtn'&&lastAnswer)shareContent(lastAnswer);
  if(e.target.id==='shareAppBtn')shareContent(t('share_app_text'),location.origin+location.pathname.replace(/[^\/]*$/,''));
});
$$('[data-ex]').forEach(b=>b.onclick=()=>{$('#askQ').value=t(b.dataset.ex);$('#askQ').focus()});
window.addEventListener('hashchange',route);
try{const last=localStorage.getItem('lhi-last');if(last)$('#trId').value=last}catch(e){}
applyText();route();
apiFetch('public-settings',{method:'POST',body:'{}'}).then(r=>r.json()).then(d=>{S=d.settings||{};applyText()}).catch(()=>{});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
