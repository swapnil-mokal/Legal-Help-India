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
sending:["पाठवत आहे…","भेज रहे हैं…","Sending…"],loading:["लोड होत आहे…","लोड हो रहा है…","Loading…"]};
const t=k=>T[k]?T[k][IDX[L]]:k,esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let S={},cat='all',lastTrack=null,revLoaded=false,sub='topics';

function msg(el,cls,html){el.className='msg '+cls;el.innerHTML=html}
async function call(fn,body){const r=await apiFetch(fn,{method:'POST',body:JSON.stringify(body||{})}),d=await r.json();if(!r.ok)throw new Error(d.error||'error');return d}
function fail(el,e,extra){console.error(e);msg(el,'err',esc(t('err_net'))+'<br><small>'+esc(e&&e.message||'')+'</small>'+(extra||''))}
function waLink(text){return 'https://wa.me/'+C.whatsappNumber+'?text='+encodeURIComponent(text)}

function applyText(){
  $$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
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
  $('#l-topics').innerHTML=Object.keys(D.TOPICS).map(k=>{const x=D.TOPICS[k];return '<details class="card acc"><summary>'+esc(x.title[L])+'</summary>'+x.sections.map(s=>'<h4>'+esc(s.heading[L])+'</h4><ul>'+s.items[L].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>').join('')+'</details>'}).join('');
  $('#l-docs').innerHTML=D.DOCS.map(d=>'<details class="card acc"><summary><span class="ic">'+d.icon+'</span>'+esc(d.title[L])+'</summary><p class="mut">'+esc(d.desc[L])+'</p><ul>'+d.points[L].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul></details>').join('');
  const q=$('#q').value.trim().toLowerCase(),list=D.ARTICLES.filter(a=>(cat==='all'||a.cat===cat)&&(!q||(a.num+' '+a.title.mr+' '+a.title.hi+' '+a.title.en+' '+a.sum[L]).toLowerCase().indexOf(q)>=0));
  $('#arts').innerHTML=list.length?list.map(a=>'<details class="card acc art"><summary>'+esc(a.title[L])+'</summary><p>'+esc(a.sum[L])+'</p></details>').join(''):'<p class="mut">—</p>';
}
/* ---- Ask AI ---- */
async function ask(){
  const p=$('#askQ').value.trim();if(!p)return;const out=$('#askOut'),b=$('#askBtn');b.disabled=true;msg(out,'info',esc(t('ask_wait')));
  try{const d=await call('ask',{problem:p,lang:L});if(!d.text)throw new Error('empty');msg(out,'ok pre','');out.textContent=d.text}catch(e){fail(out,e)}b.disabled=false;
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
/* ---- wiring ---- */
$('#lang').onclick=e=>{const b=e.target.closest('button');if(!b)return;L=b.dataset.l;try{localStorage.setItem('lhi-lang',L)}catch(x){}applyText()};
$('#sub').onclick=e=>{const b=e.target.closest('button');if(b)location.hash='learn-'+b.dataset.s};
$('#cats').onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;buildCats();renderLearn()};
$('#q').oninput=renderLearn;$('#askBtn').onclick=ask;$('#fBtn').onclick=submitHelp;$('#trBtn').onclick=track;$('#rBtn').onclick=sendReview;
$$('[data-ex]').forEach(b=>b.onclick=()=>{$('#askQ').value=t(b.dataset.ex);$('#askQ').focus()});
window.addEventListener('hashchange',route);
try{const last=localStorage.getItem('lhi-last');if(last)$('#trId').value=last}catch(e){}
applyText();route();
apiFetch('public-settings',{method:'POST',body:'{}'}).then(r=>r.json()).then(d=>{S=d.settings||{};applyText()}).catch(()=>{});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
