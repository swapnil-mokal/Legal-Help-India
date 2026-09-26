/* Legal Helpdesk India — Admin app */
(function(){
const I={"logout": {"mr": "बाहेर पडा", "hi": "लॉगआउट", "en": "Logout"}, "login_title": {"mr": "अ‍ॅडमिन पोर्टल", "hi": "एडमिन पोर्टल", "en": "Admin Portal"}, "login_sub": {"mr": "कायदेशीर मदत विनंत्या, रिव्ह्यू आणि मजकूर व्यवस्थापित करा.", "hi": "कानूनी मदद अनुरोध, समीक्षाएँ और सामग्री प्रबंधित करें।", "en": "Manage legal-help requests, reviews and content."}, "pw_label": {"mr": "अ‍ॅडमिन पासवर्ड", "hi": "एडमिन पासवर्ड", "en": "Admin Password"}, "pw_ph": {"mr": "पासवर्ड", "hi": "पासवर्ड", "en": "Password"}, "login_btn": {"mr": "सुरक्षित लॉगिन", "hi": "सुरक्षित लॉगिन", "en": "Secure Login"}, "eyebrow": {"mr": "लाईव्ह अ‍ॅडमिन", "hi": "लाइव एडमिन", "en": "LIVE ADMIN"}, "hero_h1": {"mr": "नागरिकांच्या मदतीचे <span>एकत्रित नियंत्रण केंद्र</span>", "hi": "नागरिकों की मदद का <span>एकीकृत नियंत्रण केंद्र</span>", "en": "One control centre for <span>citizen legal help</span>"}, "hero_p": {"mr": "यूजर ऍप आणि अ‍ॅडमिन ऍप एकाच बॅकएंडशी जोडलेले आहेत.", "hi": "यूज़र ऐप और एडमिन ऐप एक ही बैकएंड से जुड़े हैं।", "en": "The user app and admin app share one backend."}, "tab_req": {"mr": "विनंत्या", "hi": "अनुरोध", "en": "Requests"}, "tab_rev": {"mr": "रिव्ह्यू", "hi": "समीक्षाएँ", "en": "Reviews"}, "tab_ana": {"mr": "विश्लेषण", "hi": "विश्लेषण", "en": "Analytics"}, "tab_con": {"mr": "मजकूर", "hi": "सामग्री", "en": "Content"}, "tab_set": {"mr": "सेटिंग्ज", "hi": "सेटिंग्स", "en": "Settings"}, "req_h": {"mr": "कायदेशीर मदत विनंत्या", "hi": "कानूनी मदद अनुरोध", "en": "Legal Help Requests"}, "req_p": {"mr": "नवीन → संपर्क केला → प्रगतीत → निराकरण", "hi": "नया → संपर्क किया → प्रगति में → हल", "en": "New → Contacted → In Progress → Resolved"}, "search_ph": {"mr": "नाव, मोबाईल, समस्या शोधा", "hi": "नाम, मोबाइल, समस्या खोजें", "en": "Search name, mobile, issue"}, "all_status": {"mr": "सर्व स्थिती", "hi": "सभी स्थिति", "en": "All Status"}, "s_New": {"mr": "नवीन", "hi": "नया", "en": "New"}, "s_Contacted": {"mr": "संपर्क केला", "hi": "संपर्क किया", "en": "Contacted"}, "s_In Progress": {"mr": "प्रगतीत", "hi": "प्रगति में", "en": "In Progress"}, "s_Resolved": {"mr": "निराकरण झाले", "hi": "हल हुआ", "en": "Resolved"}, "refresh": {"mr": "रिफ्रेश", "hi": "रीफ्रेश", "en": "Refresh"}, "rev_h": {"mr": "रिव्ह्यू मॉडरेशन", "hi": "समीक्षा मॉडरेशन", "en": "Reviews Moderation"}, "rev_p": {"mr": "मंजूर करा, नाकारा किंवा डिलीट करा.", "hi": "स्वीकृत करें, अस्वीकार करें या हटाएँ।", "en": "Approve, reject or delete."}, "ana_h": {"mr": "विश्लेषण", "hi": "विश्लेषण", "en": "Analytics"}, "ana_p": {"mr": "बॅकएंडमधील लाईव्ह डेटावर आधारित.", "hi": "बैकएंड के लाइव डेटा पर आधारित।", "en": "Based on live backend data."}, "con_h": {"mr": "मजकूर व्यवस्थापन", "hi": "सामग्री प्रबंधन", "en": "Content Management"}, "con_p": {"mr": "स्वागत संदेश आणि महत्त्वाची अपडेट लाईव्ह बदला.", "hi": "स्वागत संदेश और महत्वपूर्ण अपडेट लाइव बदलें।", "en": "Edit the welcome message and important update live."}, "save_content": {"mr": "मजकूर सेव्ह करा", "hi": "सामग्री सहेजें", "en": "Save Content"}, "lbl_welcome": {"mr": "स्वागत संदेश", "hi": "स्वागत संदेश", "en": "Welcome Message"}, "lbl_update": {"mr": "महत्त्वाची कायदेशीर अपडेट", "hi": "महत्वपूर्ण कानूनी अपडेट", "en": "Important Legal Update"}, "lbl_cta": {"mr": "होम पेज CTA मजकूर", "hi": "होम पेज CTA टेक्स्ट", "en": "Home CTA Text"}, "set_h": {"mr": "प्रॉडक्शन चेकलिस्ट", "hi": "प्रोडक्शन चेकलिस्ट", "en": "Production Checklist"}, "wa": {"mr": "WhatsApp", "hi": "WhatsApp", "en": "WhatsApp"}, "call": {"mr": "कॉल", "hi": "कॉल", "en": "Call"}, "email": {"mr": "ईमेल", "hi": "ईमेल", "en": "Email"}, "pref": {"mr": "सोयीची वेळ", "hi": "सुविधाजनक समय", "en": "Preferred"}, "note_ph": {"mr": "अंतर्गत नोंद", "hi": "आंतरिक नोट", "en": "Internal note"}, "save_note": {"mr": "नोंद सेव्ह करा", "hi": "नोट सहेजें", "en": "Save Note"}, "none": {"mr": "कोणत्याही विनंत्या नाहीत.", "hi": "कोई अनुरोध नहीं मिला।", "en": "No requests found."}, "none_rev": {"mr": "कोणतेही रिव्ह्यू नाहीत.", "hi": "कोई समीक्षा नहीं मिली।", "en": "No reviews found."}, "approve": {"mr": "मंजूर", "hi": "स्वीकृत", "en": "Approve"}, "reject": {"mr": "नाकारा", "hi": "अस्वीकार", "en": "Reject"}, "delete": {"mr": "डिलीट", "hi": "हटाएँ", "en": "Delete"}, "pending": {"mr": "प्रलंबित", "hi": "लंबित", "en": "Pending"}, "reviews": {"mr": "रिव्ह्यू", "hi": "समीक्षाएँ", "en": "Reviews"}, "saved": {"mr": "यशस्वीरित्या सेव्ह झालं.", "hi": "सफलतापूर्वक सहेजा गया।", "en": "Saved successfully."}, "tab_dash": {"mr": "डॅशबोर्ड", "hi": "डैशबोर्ड", "en": "Dashboard"}, "d_new": {"mr": "नवीन विनंत्या", "hi": "नए अनुरोध", "en": "New requests"}, "d_prog": {"mr": "प्रक्रियेत", "hi": "प्रक्रिया में", "en": "In process"}, "d_done": {"mr": "पूर्ण", "hi": "पूर्ण", "en": "Resolved"}, "d_rev": {"mr": "प्रलंबित रिव्ह्यू", "hi": "लंबित समीक्षाएँ", "en": "Pending reviews"}, "d_recent": {"mr": "अलीकडील विनंत्या", "hi": "हाल के अनुरोध", "en": "Recent requests"}, "rv_pending": {"mr": "प्रलंबित", "hi": "लंबित", "en": "Pending"}, "rv_approved": {"mr": "मंजूर", "hi": "स्वीकृत", "en": "Approved"}, "rv_all": {"mr": "सर्व", "hi": "सभी", "en": "All"}, "bad_pw": {"mr": "चुकीचा पासवर्ड.", "hi": "गलत पासवर्ड।", "en": "Incorrect password."}, "err_net": {"mr": "सर्व्हरशी संपर्क होत नाही. Apps Script URL आणि Deploy तपासा.", "hi": "सर्वर से संपर्क नहीं हो रहा। Apps Script URL और Deploy जाँचें।", "en": "Cannot reach the server. Check the Apps Script URL and deployment."}, "note_saved": {"mr": "नोंद सेव्ह झाली.", "hi": "नोट सहेजा गया।", "en": "Note saved."}, "confirm_del": {"mr": "हा रिव्ह्यू कायमचा डिलीट करायचा?", "hi": "यह समीक्षा हमेशा के लिए हटाएँ?", "en": "Delete this review permanently?"}, "lbl_status": {"mr": "स्थिती बदला", "hi": "स्थिति बदलें", "en": "Change status"}, "con_hint": {"mr": "येथे बदललेला मजकूर User ऍपच्या होमपेजवर लगेच दिसतो.", "hi": "यहाँ बदला गया पाठ यूज़र ऐप के होमपेज पर तुरंत दिखता है।", "en": "Changes appear on the user app's home page immediately."}, "empty_hint": {"mr": "(रिकामे ठेवल्यास मूळ मजकूर दिसेल)", "hi": "(खाली छोड़ने पर मूल पाठ दिखेगा)", "en": "(leave empty to use the default)"}, "open_sheet": {"mr": "Google Sheet उघडा", "hi": "Google Sheet खोलें", "en": "Open Google Sheet"}, "sheet_not_set": {"mr": "shared/config.js मध्ये अजून Google Sheet लिंक टाकलेली नाही.", "hi": "shared/config.js में अभी तक Google Sheet लिंक नहीं डाली गई है।", "en": "The Google Sheet link hasn't been added to shared/config.js yet."}, "share_user_app": {"mr": "User ऍप शेअर करा", "hi": "यूज़र ऐप शेयर करें", "en": "Share User App"}, "share_user_app_text": {"mr": "Legal Helpdesk India — मोफत कायदेशीर माहिती व मदत या ऍपवर मिळवा:", "hi": "Legal Helpdesk India — मुफ्त कानूनी जानकारी व मदद इस ऐप पर पाएँ:", "en": "Legal Helpdesk India — get free legal information and help on this app:"}, "link_copied": {"mr": "लिंक कॉपी झाली आहे, कुठेही पेस्ट करा.", "hi": "लिंक कॉपी हो गई है, कहीं भी पेस्ट करें।", "en": "Link copied — paste it anywhere."}};
const $=s=>document.querySelector(s),$$=s=>[].slice.call(document.querySelectorAll(s));
let L='mr';try{L=localStorage.getItem('lhi-admin-lang')||'mr'}catch(e){}
let PW='',R=[],V=[],S={},tab='dash',fs='all',fr='pending',q='',openId='';
const t=k=>I[k]?I[k][L]:k,tS=s=>I['s_'+s]?I['s_'+s][L]:s,esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ST=['New','Contacted','In Progress','Resolved'],LOC={mr:'mr-IN',hi:'hi-IN',en:'en-IN'};
const fmt=d=>{const x=new Date(d);return isNaN(x)?'':x.toLocaleDateString(LOC[L],{day:'numeric',month:'short'})};
function toast(m){const e=$('#toast');e.textContent=m;e.classList.remove('hide');clearTimeout(toast.h);toast.h=setTimeout(()=>e.classList.add('hide'),2400)}
async function api(fn,b,m){const r=await apiFetch(fn,{method:m||'POST',body:JSON.stringify(Object.assign({password:PW},b||{}))});return{ok:r.ok,status:r.status,d:await r.json()}}
async function loadAll(){
  const a=await api('admin-legal-requests',{},'GET');if(!a.ok){const e=new Error(a.d.error||'error');e.status=a.status;throw e}
  R=a.d.requests||[];V=(await api('admin-reviews')).d.reviews||[];S=(await api('public-settings')).d.settings||{};
}
function fillIcons(){$$('[data-ic]').forEach(e=>{if(!e.dataset.filled&&window.LHI_ICONS&&window.LHI_ICONS[e.dataset.ic]){e.innerHTML=window.LHI_ICONS[e.dataset.ic];e.dataset.filled='1'}})}
function applyL(){
  fillIcons();
  document.documentElement.lang=L;$$('[data-i]').forEach(e=>{const k=e.dataset.i;if(I[k])e.textContent=I[k][L]});$$('[data-ip]').forEach(e=>{if(I[e.dataset.ip])e.placeholder=I[e.dataset.ip][L]});
  $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));if(PW)render();
}
/* ---- login ---- */
async function login(pw,silent){
  PW=pw;const b=$('#loginBtn'),m=$('#loginMsg');b.disabled=true;
  try{await loadAll();try{sessionStorage.setItem('lhi-adm',pw)}catch(e){}$('#login').classList.add('hide');$('#app').classList.remove('hide');render()}
  catch(e){PW='';try{sessionStorage.removeItem('lhi-adm')}catch(x){}if(!silent){m.className='msg err';m.textContent=e.status===401?t('bad_pw'):t('err_net')+' ('+(e.message||'')+')'}}
  b.disabled=false;
}
/* ---- render ---- */
function render(){
  $$('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));const m=$('#main');
  if(tab==='dash')return dash(m);
  if(tab==='req'){m.innerHTML='<input id="q" value="'+esc(q)+'" placeholder="'+esc(t('search_ph'))+'" style="margin-bottom:10px"><div class="chips" id="fsC"></div><div id="list"></div>';return fillReq()}
  if(tab==='rev'){m.innerHTML='<div class="chips" id="frC"></div><div id="list"></div>';return fillRev()}
  m.innerHTML='<div class="card"><h2>'+esc(t('tab_con'))+'</h2><p class="mut">'+esc(t('con_hint'))+' '+esc(t('empty_hint'))+'</p>'+
   [['welcome','lbl_welcome'],['update','lbl_update'],['cta','lbl_cta']].map(x=>'<label>'+esc(t(x[1]))+'</label><textarea id="c_'+x[0]+'" style="min-height:80px">'+esc(S[x[0]]||'')+'</textarea>').join('')+
   '<button class="btn" id="saveC" style="width:100%;margin-top:16px">'+esc(t('save_content'))+'</button></div>';
}
function dash(m){
  const c={};ST.forEach(s=>c[s]=R.filter(r=>r.status===s).length);const pend=V.filter(v=>v.status==='pending').length,tot=R.length||1,col={New:'#1e4fa3',Contacted:'#e0a020','In Progress':'#8a55c7',Resolved:'#1f8a4d'};
  const sheetUrl=(window.LHI_CONFIG&&window.LHI_CONFIG.sheetUrl)||'';
  const sheetHref=(sheetUrl&&sheetUrl.indexOf('PASTE_')!==0)?sheetUrl:'#';
  m.innerHTML='<div class="row" style="margin-bottom:14px">'+
    '<a class="btn ghost sm" id="sheetBtn" href="'+esc(sheetHref)+'" target="_blank" rel="noopener">'+esc(t('open_sheet'))+'</a>'+
    '<button class="btn ghost sm" id="shareUserApp">'+esc(t('share_user_app'))+'</button></div>'+
  '<div class="grid2">'+[[c.New,'d_new'],[c.Contacted+c['In Progress'],'d_prog'],[c.Resolved,'d_done'],[pend,'d_rev']].map(x=>'<div class="tile"><span class="big">'+x[0]+'</span><span class="mut">'+esc(t(x[1]))+'</span></div>').join('')+'</div>'+
  '<div class="card"><div class="bar">'+ST.map(s=>'<span style="width:'+(c[s]/tot*100)+'%;background:'+col[s]+'"></span>').join('')+'</div></div>'+
  '<div class="card"><h3>'+esc(t('d_recent'))+'</h3>'+(R.slice(0,6).map(r=>'<div class="mrow"><div><b>'+esc(r.name)+'</b><div class="mut">'+esc(r.category)+' · '+fmt(r.submittedAt)+'</div></div><span class="pill s-'+esc(r.status)+'">'+esc(tS(r.status))+'</span></div>').join('')||'<p class="mut">'+esc(t('none'))+'</p>')+'</div>';
}
function fillReq(){
  $('#fsC').innerHTML=['all'].concat(ST).map(s=>'<button data-fs="'+s+'" class="'+(s===fs?'on':'')+'">'+esc(s==='all'?t('all_status'):tS(s))+'</button>').join('');
  const k=q.toLowerCase(),l=R.filter(r=>(fs==='all'||r.status===fs)&&(!k||(r.name+' '+r.mobile+' '+r.description+' '+r.city+' '+r.category+' '+r.id).toLowerCase().indexOf(k)>=0));
  $('#list').innerHTML=l.length?l.map(r=>'<details class="card acc" data-id="'+esc(r.id)+'"'+(r.id===openId?' open':'')+'><summary><div style="flex:1"><b>'+esc(r.name)+'</b><div class="mut">'+esc(r.category)+' · '+fmt(r.submittedAt)+'</div></div><span class="pill s-'+esc(r.status)+'">'+esc(tS(r.status))+'</span></summary><div class="body">'+
   '<p style="white-space:pre-wrap">'+esc(r.description)+'</p><p class="mut">📞 '+esc(r.mobile)+(r.city?' · 📍 '+esc(r.city):'')+(r.preferredTime?' · 🕒 '+esc(r.preferredTime):'')+'</p>'+
   '<div class="row"><a class="btn ok sm" target="_blank" rel="noopener" href="https://wa.me/91'+esc(r.mobile)+'">'+esc(t('wa'))+'</a><a class="btn ghost sm" href="tel:+91'+esc(r.mobile)+'">'+esc(t('call'))+'</a>'+(r.email?'<a class="btn ghost sm" href="mailto:'+esc(r.email)+'">'+esc(t('email'))+'</a>':'')+'</div>'+
   '<label>'+esc(t('lbl_status'))+'</label><div class="chips">'+ST.map(s=>'<button data-st="'+s+'" data-id="'+esc(r.id)+'" class="'+(s===r.status?'on':'')+'">'+esc(tS(s))+'</button>').join('')+'</div>'+
   '<textarea id="n_'+esc(r.id)+'" style="min-height:70px" placeholder="'+esc(t('note_ph'))+'">'+esc(r.notes||'')+'</textarea><button class="btn ghost sm" data-note="'+esc(r.id)+'" style="margin-top:8px">'+esc(t('save_note'))+'</button></div></details>').join(''):'<p class="mut">'+esc(t('none'))+'</p>';
}
function fillRev(){
  $('#frC').innerHTML=['pending','approved','all'].map(s=>'<button data-fr="'+s+'" class="'+(s===fr?'on':'')+'">'+esc(t('rv_'+s))+'</button>').join('');
  const l=V.filter(v=>fr==='all'||v.status===fr);
  $('#list').innerHTML=l.length?l.map(v=>'<div class="card"><div style="display:flex;justify-content:space-between;gap:8px"><b>'+esc(v.name)+'</b><span class="pill s-'+esc(v.status)+'">'+esc(v.status)+'</span></div><div class="stars">'+'★'.repeat(v.rating)+'☆'.repeat(5-v.rating)+'</div><p>'+esc(v.message)+'</p><div class="row" style="margin-top:8px">'+
   (v.status!=='approved'?'<button class="btn ok sm" data-ra="approve" data-id="'+esc(v.id)+'">'+esc(t('approve'))+'</button>':'')+(v.status!=='rejected'?'<button class="btn ghost sm" data-ra="reject" data-id="'+esc(v.id)+'">'+esc(t('reject'))+'</button>':'')+'<button class="btn bad sm" data-ra="delete" data-id="'+esc(v.id)+'">'+esc(t('delete'))+'</button></div></div>').join(''):'<p class="mut">'+esc(t('none_rev'))+'</p>';
}
/* ---- actions ---- */
async function act(fn,body,ok){try{const r=await api(fn,body);if(!r.ok)throw new Error(r.d.error||'error');ok&&ok();return true}catch(e){toast(t('err_net'));return false}}
document.addEventListener('click',async e=>{
  const g=s=>e.target.closest(s);let b;
  if(b=g('.lang button')){L=b.dataset.l;try{localStorage.setItem('lhi-admin-lang',L)}catch(x){}return applyL()}
  if(b=g('#nav button')){tab=b.dataset.tab;return render()}
  if(b=g('[data-fs]')){fs=b.dataset.fs;return fillReq()}
  if(b=g('[data-fr]')){fr=b.dataset.fr;return fillRev()}
  if(b=g('summary')){const d=b.parentNode;if(d.dataset.id)openId=d.open?'':d.dataset.id;return}
  if(b=g('[data-st]')){const id=b.dataset.id,st=b.dataset.st;return act('admin-legal-requests',{id:id,status:st},()=>{R.find(x=>x.id===id).status=st;openId=id;fillReq();toast(t('saved'))})}
  if(b=g('[data-note]')){const id=b.dataset.note,n=$('#n_'+id).value;return act('admin-legal-requests',{id:id,action:'note',notes:n},()=>{R.find(x=>x.id===id).notes=n;toast(t('note_saved'))})}
  if(b=g('[data-ra]')){const id=b.dataset.id,a=b.dataset.ra;if(a==='delete'&&!confirm(t('confirm_del')))return;return act('review-action',{id:id,action:a},()=>{if(a==='delete')V=V.filter(x=>x.id!==id);else V.find(x=>x.id===id).status=a==='approve'?'approved':'rejected';fillRev()})}
  if(g('#saveC')){const body={welcome:$('#c_welcome').value,update:$('#c_update').value,cta:$('#c_cta').value};return act('save-settings',body,()=>{Object.assign(S,body);toast(t('saved'))})}
  if(g('#logout')){PW='';try{sessionStorage.removeItem('lhi-adm')}catch(x){}$('#app').classList.add('hide');$('#login').classList.remove('hide');$('#pw').value=''}
  if(g('#loginBtn'))login($('#pw').value);
  if(g('#shareUserApp'))shareUserAppLink();
  if(g('#sheetBtn')&&$('#sheetBtn').getAttribute('href')==='#'){e.preventDefault();alert(t('sheet_not_set'))}
});
document.addEventListener('input',e=>{if(e.target.id==='q'){q=e.target.value;fillReq()}});
$('#pw').addEventListener('keydown',e=>{if(e.key==='Enter')login($('#pw').value)});
async function shareUserAppLink(){
  const userUrl=new URL('../',location.href).href, text=t('share_user_app_text');
  try{if(navigator.share){await navigator.share({title:'Legal Helpdesk India',text:text,url:userUrl});return}}catch(e){if(e&&e.name==='AbortError')return}
  try{await navigator.clipboard.writeText(text+'\n'+userUrl);alert(t('link_copied'))}catch(e){prompt(t('link_copied'),userUrl)}
}
/* ---- User व Admin दोघेही एकाच Sheet शी जोडलेले असल्याने, थोड्या थोड्या वेळाने आपोआप ताजा डेटा घेतो ---- */
setInterval(()=>{ if(PW && document.visibilityState==='visible'){ loadAll().then(()=>render()).catch(()=>{}) } }, 45000);

applyL();
let saved='';try{saved=sessionStorage.getItem('lhi-adm')||''}catch(e){}if(saved)login(saved,true);
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
