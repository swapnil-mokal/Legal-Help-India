/* Legal Help India — User app (मॉकअपनुसार रचना) */
(function(){
const C=window.LHI_CONFIG,D=window.LHI_DATA,$=s=>document.querySelector(s),$$=s=>[].slice.call(document.querySelectorAll(s));
const IDX={mr:0,hi:1,en:2};let L='mr';try{L=localStorage.getItem('lhi-lang')||'mr'}catch(e){}
if(!IDX.hasOwnProperty(L))L='mr';

/* ---- अतिरिक्त आयकॉन्स (line style) ---- */
const svg=p=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
const ICONS=window.LHI_ICONS=Object.assign({
 info:svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
 back:svg('<path d="M15 5l-7 7 7 7"/>'),chev:svg('<path d="M9 5l7 7-7 7"/>'),
 send:svg('<path d="M21 3L3 10.5l7 2.5 2.5 7L21 3z"/><path d="M10 13l4-4"/>'),
 phone:svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
 mail:svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
 share:svg('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6"/>'),
 whatsapp:svg('<path d="M4 20l1.4-4.2A8.5 8.5 0 1 1 8.3 18.7L4 20z"/><path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1.2-1.2-1.8-1-.8.6a3 3 0 0 1-1.5-1.5l.6-.8-1-1.8L9 9.5z"/>'),
 download:svg('<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'),
 eye:svg('<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
 install:svg('<rect x="6" y="3" width="12" height="18" rx="2.5"/><path d="M12 8v6M9.5 12l2.5 2.5 2.5-2.5"/>'),
 power:svg('<path d="M12 3v8"/><path d="M6.5 6.5a8 8 0 1 0 11 0"/>'),
 chakra:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="28"/><circle cx="32" cy="32" r="4" fill="currentColor"/>'+Array.from({length:24},(_,i)=>{const a=i*Math.PI/12;return '<line x1="'+(32+7*Math.cos(a)).toFixed(1)+'" y1="'+(32+7*Math.sin(a)).toFixed(1)+'" x2="'+(32+27*Math.cos(a)).toFixed(1)+'" y2="'+(32+27*Math.sin(a)).toFixed(1)+'"/>'}).join('')+'</svg>'
},window.LHI_ICONS||{});
const ic=n=>'<i class="ic-i">'+(ICONS[n]||'')+'</i>';

/* ---- मजकूर (मराठी / हिंदी / English) ---- */
const T={
tag:["कायद्याची माहिती • सोप्या भाषेत मार्गदर्शन","कानून की जानकारी • सरल भाषा में मार्गदर्शन","Legal information • Simple guidance"],
nav_home:["होम","होम","Home"],nav_ask:["AI प्रश्न","AI प्रश्न","AI Ask"],nav_help:["कायदेशीर मदत","कानूनी मदद","Legal Help"],nav_info:["माहिती","जानकारी","Info"],
pg_search:["कायदा शोधा","कानून खोजें","Search Law"],pg_const:["संविधान","संविधान","Constitution"],pg_rights:["माझे हक्क","मेरे अधिकार","My Rights"],pg_forms:["नमुना अर्ज","नमूना आवेदन","Sample Forms"],
pg_ask:["AI कायदेशीर मार्गदर्शक","AI कानूनी मार्गदर्शक","AI Legal Guide"],pg_help:["कायदेशीर मदत मागा","कानूनी मदद माँगें","Request Legal Help"],pg_status:["माझी विनंती","मेरा अनुरोध","My Request"],
pg_info:["माहिती","जानकारी","Information"],pg_contact:["मदत केंद्र","सहायता केंद्र","Help Center"],pg_reviews:["अभिप्राय","समीक्षाएँ","Reviews"],pg_about:["आमच्याबद्दल","हमारे बारे में","About Us"],pg_team:["आमची टीम","हमारी टीम","Our Team"],
hero_t:["तुमच्या हक्कांची माहिती, सोप्या भाषेत","अपने अधिकारों की जानकारी, सरल भाषा में","Know your rights, in simple language"],
hero_s:["कायदेशीर प्रश्न विचारा, योग्य माहिती मिळवा आणि आवश्यक असल्यास कायदेशीर मदत मागा.","कानूनी सवाल पूछें, सही जानकारी पाएँ और ज़रूरत हो तो कानूनी मदद माँगें।","Ask legal questions, get the right information and request legal help if needed."],
cta_ask:["AI ला विचारा","AI से पूछें","Ask AI"],cta_help:["कायदेशीर मदत मागा","कानूनी मदद माँगें","Request Legal Help"],
quick_t:["त्वरित कृती","त्वरित कार्य","Quick Actions"],
qa_search:["कायदा शोधा","कानून खोजें","Search Law"],qa_const:["संविधान","संविधान","Constitution"],qa_rights:["माझे हक्क","मेरे अधिकार","My Rights"],qa_docs:["नमुना अर्ज","नमूना आवेदन","Sample Forms"],qa_helpreq:["मदत मागा","मदद माँगें","Get Help"],qa_status:["माझी विनंती","मेरा अनुरोध","My Request"],
disc:["ही माहिती सर्वसाधारण मार्गदर्शनासाठी आहे. हा वैयक्तिक कायदेशीर सल्ला नाही; गंभीर प्रकरणांसाठी वकिलाचा सल्ला घ्यावा.","यह जानकारी सामान्य मार्गदर्शन हेतु है। यह व्यक्तिगत कानूनी सलाह नहीं है; गंभीर मामलों में वकील से सलाह लें।","This information is general guidance only, not personal legal advice; consult a lawyer for serious matters."],
disc_short:["ही माहिती सर्वसाधारण मार्गदर्शनासाठी आहे. हा वैयक्तिक कायदेशीर सल्ला नाही.","यह जानकारी सामान्य मार्गदर्शन हेतु है। यह व्यक्तिगत कानूनी सलाह नहीं है।","This information is for general guidance only. It is not personal legal advice."],
/* शोध */
search_ph:["कायदा, कलम किंवा विषय शोधा...","कानून, अनुच्छेद या विषय खोजें...","Search law, section or topic..."],
sc_all:["सर्व","सभी","All"],sc_act:["Act","Act","Act"],sc_section:["Section","Section","Section"],sc_topic:["विषय","विषय","Topic"],sc_kw:["कीवर्ड","कीवर्ड","Keyword"],
cat_t:["कायदा श्रेणी","कानून श्रेणी","Law Categories"],
lc_const:["संविधान","संविधान","Constitution"],lc_fund:["मूलभूत हक्क","मौलिक अधिकार","Fundamental Rights"],lc_women:["महिला हक्क","महिला अधिकार","Women's Rights"],lc_family:["कौटुंबिक कायदा","पारिवारिक कानून","Family Law"],lc_property:["मालमत्ता","संपत्ति","Property"],lc_police:["पोलीस / FIR","पुलिस / FIR","Police / FIR"],lc_labour:["कामगार","श्रमिक","Labour"],lc_consumer:["ग्राहक","उपभोक्ता","Consumer"],lc_senior:["वरिष्ठ नागरिक","वरिष्ठ नागरिक","Senior Citizens"],lc_other:["इतर","अन्य","Other"],
rt_article:["संविधान कलम","संविधान अनुच्छेद","CONSTITUTION ARTICLE"],rt_topic:["माझे हक्क / विषय","मेरे अधिकार / विषय","RIGHTS / TOPIC"],rt_doc:["नमुना अर्ज","नमूना आवेदन","SAMPLE FORM"],
no_results:["काहीही सापडले नाही. दुसरा शब्द वापरून पहा किंवा AI ला विचारा.","कुछ नहीं मिला। दूसरा शब्द आज़माएँ या AI से पूछें।","Nothing found. Try another word or ask the AI."],
/* संविधान */
cb_title:["भारतीय संविधान","भारतीय संविधान","Constitution of India"],
cb_sub:["आपला अधिकार • आपला अभिमान","हमारा अधिकार • हमारा गौरव","Our Right • Our Pride"],
cc_preamble:["प्रस्तावना","उद्देशिका","Preamble"],cc_rights:["मूलभूत हक्क","मौलिक अधिकार","Fundamental Rights"],cc_directive:["राज्याच्या धोरणांची तत्त्वे","राज्य के नीति निदेशक तत्व","Directive Principles"],cc_duties:["मूलभूत कर्तव्ये","मौलिक कर्तव्य","Fundamental Duties"],cc_important:["महत्त्वाची कलमे","महत्वपूर्ण अनुच्छेद","Key Articles"],cc_judiciary:["न्यायव्यवस्था","न्यायपालिका","Judiciary"],
art_search:["कलमे शोधा","अनुच्छेद खोजें","Search Articles"],art_search_ph:["कलम क्रमांक किंवा विषय शोधा...","अनुच्छेद संख्या या विषय खोजें...","Search article number or topic..."],art_all:["सर्व कलमे दाखवा","सभी अनुच्छेद दिखाएँ","Show all articles"],
art_ask:["या कलमाबद्दल AI ला विचारा","इस अनुच्छेद के बारे में AI से पूछें","Ask AI about this article"],
/* हक्क */
rd_citizens:["मूलभूत अधिकार आणि नागरिकांचे हक्क","मौलिक अधिकार और नागरिकों के अधिकार","Fundamental rights and citizens' rights"],rd_women:["सुरक्षा, समानता आणि संरक्षण","सुरक्षा, समानता और संरक्षण","Safety, equality and protection"],rd_children:["शिक्षण, आरोग्य आणि सुरक्षितता","शिक्षा, स्वास्थ्य और सुरक्षा","Education, health and safety"],rd_consumer:["फसवणूक, सेवा आणि तक्रार निवारण","धोखाधड़ी, सेवा और शिकायत निवारण","Fraud, service and grievance redressal"],rd_labour:["नोकरी, वेतन आणि कामाचे हक्क","नौकरी, वेतन और कार्य अधिकार","Job, wages and work rights"],rd_police:["अटक, जामीन आणि कायदेशीर प्रक्रिया","गिरफ्तारी, जमानत और कानूनी प्रक्रिया","Arrest, bail and legal process"],rd_property:["जमीन, घर आणि मालमत्ता संबंधित हक्क","ज़मीन, घर और संपत्ति संबंधी अधिकार","Land, home and property rights"],rd_senior:["आरोग्य, पेन्शन आणि सन्मान","स्वास्थ्य, पेंशन और सम्मान","Health, pension and dignity"],rd_education:["शिक्षणाचे अधिकार आणि संधी","शिक्षा के अधिकार और अवसर","Education rights and opportunities"],
rd_family:["विवाह, घटस्फोट, पोटगी आणि वारसा","विवाह, तलाक, भरण-पोषण और उत्तराधिकार","Marriage, divorce, maintenance and inheritance"],rd_cyber:["ऑनलाइन फसवणूक आणि सायबर सुरक्षा","ऑनलाइन धोखाधड़ी और साइबर सुरक्षा","Online fraud and cyber safety"],
more_topics:["आणखी विषय","और विषय","More Topics"],
topic_related:["संबंधित संविधान कलमे","संबंधित संविधान अनुच्छेद","Related Constitutional Articles"],topic_faq:["सामान्य प्रश्न","सामान्य प्रश्न","Frequently Asked Questions"],
topic_ask_btn:["या विषयावर AI ला विचारा","इस विषय पर AI से पूछें","Ask AI about this topic"],topic_pdf_btn:["या विषयाची PDF बनवा","इस विषय की PDF बनाएँ","Download this topic as PDF"],
topic_ask_prefill:["मला या विषयाबद्दल अधिक माहिती हवी आहे: ","मुझे इस विषय के बारे में अधिक जानकारी चाहिए: ","I would like more information about this topic: "],
topic_pdf_done:["या विषयाची PDF यशस्वीरित्या डाउनलोड झाली.","इस विषय की PDF सफलतापूर्वक डाउनलोड हो गई।","This topic's PDF has been downloaded successfully."],
/* नमुना अर्ज */
fc_all:["सर्व","सभी","All"],fc_apply:["अर्ज","आवेदन","Application"],fc_complaint:["तक्रार","शिकायत","Complaint"],fc_notice:["नोटीस","नोटिस","Notice"],fc_other:["इतर","अन्य","Other"],
view_btn:["पहा","देखें","View"],dl_btn:["डाउनलोड","डाउनलोड","Download"],form_use:["हा नमुना भरून तुमचा PDF तयार करा.","यह नमूना भरकर अपना PDF बनाएँ।","Fill this template to generate your PDF."],
/* AI */
ask_sub:["तुमचा प्रश्न साध्या भाषेत विचारा.","अपना सवाल सरल भाषा में पूछें।","Ask your question in simple language."],
ask_ph:["तुमची कायदेशीर समस्या येथे लिहा...","अपनी कानूनी समस्या यहाँ लिखें...","Write your legal problem here..."],
ask_btn:["उत्तर मिळवा","उत्तर पाएँ","Get Answer"],ask_wait:["उत्तर तयार होत आहे…","उत्तर तैयार हो रहा है…","Preparing your answer…"],
ex_t:["उदाहरण प्रश्न","उदाहरण प्रश्न","Example Questions"],
ex1:["FIR नोंदवली नाही तर काय करावे?","FIR दर्ज नहीं हुई तो क्या करें?","What if my FIR is not registered?"],ex2:["माझे मूलभूत हक्क कोणते?","मेरे मौलिक अधिकार क्या हैं?","What are my fundamental rights?"],ex3:["मालमत्तेचा वाद असल्यास काय करावे?","संपत्ति विवाद हो तो क्या करें?","What to do in a property dispute?"],ex4:["नोटीस मिळाल्यास काय करावे?","नोटिस मिले तो क्या करें?","What to do on receiving a notice?"],
share_btn:["शेअर करा","शेयर करें","Share"],share_copied:["मजकूर कॉपी झाला आहे, कुठेही पेस्ट करा.","पाठ कॉपी हो गया है, कहीं भी पेस्ट करें।","Text copied — paste it anywhere."],
/* मदत मागा (wizard) */
sl1:["मूलभूत माहिती","मूल जानकारी","Basic Info"],sl2:["समस्या प्रकार","समस्या प्रकार","Problem Type"],sl3:["वर्णन","विवरण","Details"],sl4:["वेळ","समय","Time"],sl5:["पडताळणी","सत्यापन","Review"],
f_name:["नाव *","नाम *","Name *"],f_mobile:["मोबाईल क्रमांक *","मोबाइल नंबर *","Mobile Number *"],f_email:["ईमेल (ऐच्छिक)","ईमेल (वैकल्पिक)","Email (optional)"],f_city:["शहर / गाव *","शहर / गाँव *","City / Village *"],f_district:["जिल्हा *","ज़िला *","District *"],
ph_name:["पूर्ण नाव","पूरा नाम","Full name"],ph_mobile:["मोबाईल क्रमांक","मोबाइल नंबर","Mobile number"],ph_email:["ईमेल आयडी","ईमेल आईडी","Email ID"],ph_city:["शहर किंवा गाव","शहर या गाँव","City or village"],ph_district:["जिल्हा निवडा किंवा लिहा","ज़िला चुनें या लिखें","Select or type district"],ph_desc:["तुमची समस्या थोडक्यात लिहा...","अपनी समस्या संक्षेप में लिखें...","Describe your problem briefly..."],ph_reqid:["उदा. abc123xyz","जैसे abc123xyz","e.g. abc123xyz"],
f_cat:["समस्येचा प्रकार","समस्या का प्रकार","Problem Category"],f_desc:["तुमची समस्या *","आपकी समस्या *","Your Problem *"],f_time:["संपर्कासाठी सोयीची वेळ","संपर्क के लिए सुविधाजनक समय","Preferred Contact Time"],
tm0:["कधीही","कभी भी","Anytime"],tm1:["सकाळ","सुबह","Morning"],tm2:["दुपार","दोपहर","Afternoon"],tm3:["संध्याकाळ","शाम","Evening"],f_other:["इतर","अन्य","Other"],
f_send:["विनंती पाठवा","अनुरोध भेजें","Submit Request"],wiz_next:["पुढे जा","आगे बढ़ें","Next"],wiz_back:["मागे","पीछे","Back"],wiz_review:["तपासून पहा व पाठवा","जाँचें और भेजें","Review & Submit"],
f_req:["कृपया नाव भरा.","कृपया नाम भरें।","Please enter your name."],f_req2:["कृपया तुमची समस्या लिहा.","कृपया अपनी समस्या लिखें।","Please describe your problem."],f_req3:["कृपया शहर आणि जिल्हा भरा.","कृपया शहर और ज़िला भरें।","Please enter city and district."],
f_mob:["कृपया वैध १० अंकी मोबाईल क्रमांक टाका.","कृपया मान्य 10 अंकों का मोबाइल नंबर डालें।","Please enter a valid 10-digit mobile number."],f_email_bad:["कृपया वैध ईमेल टाका किंवा रिकामा ठेवा.","कृपया मान्य ईमेल डालें या खाली छोड़ें।","Please enter a valid email or leave it empty."],
f_ok:["तुमची विनंती प्राप्त झाली आहे. तुमचा क्रमांक:","आपका अनुरोध प्राप्त हो गया है। आपका क्रमांक:","Your request has been received. Your ID:"],f_ok2:["हा क्रमांक जपून ठेवा — स्थिती पाहण्यासाठी लागेल.","इस क्रमांक को सुरक्षित रखें — स्थिति देखने के लिए चाहिए।","Keep this ID — you need it to check status."],
err_net:["सेवा सध्या उपलब्ध नाही. कृपया थोड्या वेळाने प्रयत्न करा किंवा WhatsApp वर संपर्क करा.","सेवा अभी उपलब्ध नहीं है। कृपया कुछ देर बाद प्रयास करें या WhatsApp पर संपर्क करें।","Service is unavailable right now. Please try again later or contact us on WhatsApp."],
wa_send:["WhatsApp वर पाठवा","WhatsApp पर भेजें","Send on WhatsApp"],sending:["पाठवत आहे…","भेज रहे हैं…","Sending…"],loading:["लोड होत आहे…","लोड हो रहा है…","Loading…"],
/* स्थिती */
st_id:["विनंती क्रमांक","अनुरोध क्रमांक","Request ID"],st_mob:["मोबाईल क्रमांक","मोबाइल नंबर","Mobile Number"],st_hint:["विनंती क्रमांक व नोंदवलेला मोबाईल क्रमांक टाकून स्थिती पहा.","अनुरोध क्रमांक और दर्ज मोबाइल नंबर डालकर स्थिति देखें।","Enter your request ID and registered mobile number to see the status."],
st_t:["विनंती स्थिती","अनुरोध स्थिति","Request Status"],tl0:["विनंती प्राप्त झाली","अनुरोध प्राप्त हुआ","Request received"],tl1:["पडताळणी सुरू आहे","सत्यापन जारी है","Under review"],tl2:["प्रक्रियेत आहे","प्रक्रिया में है","In progress"],tl3:["निराकरण झाले","समाधान हो गया","Resolved"],
tr_nf:["विनंती सापडली नाही. क्रमांक आणि मोबाईल तपासा.","अनुरोध नहीं मिला। क्रमांक और मोबाइल जाँचें।","Not found. Please check the ID and mobile number."],tr_need:["कृपया विनंती क्रमांक आणि १० अंकी मोबाईल टाका.","कृपया अनुरोध क्रमांक और 10 अंकों का मोबाइल डालें।","Please enter the request ID and a 10-digit mobile number."],
/* माहिती हब */
ih_contact:["मदत केंद्र","सहायता केंद्र","Help Center"],ih_contact_d:["WhatsApp, फोन आणि ईमेलने संपर्क","WhatsApp, फ़ोन और ईमेल से संपर्क","Contact via WhatsApp, phone and email"],
ih_reviews:["अभिप्राय","समीक्षाएँ","Reviews"],ih_reviews_d:["नागरिकांचे अनुभव वाचा व तुमचा सांगा","नागरिकों के अनुभव पढ़ें और अपना बताएँ","Read citizens' experiences and share yours"],
ih_about:["आमच्याबद्दल","हमारे बारे में","About Us"],ih_about_d:["आमचे ध्येय व आम्ही काय देतो","हमारा उद्देश्य और हम क्या देते हैं","Our mission and what we provide"],
ih_team:["आमची टीम","हमारी टीम","Our Team"],ih_team_d:["कायदेशीर सल्लागार व संपर्क माहिती","कानूनी सलाहकार और संपर्क जानकारी","Legal advisors and contact details"],
ih_install:["ऍप इन्स्टॉल करा","ऐप इंस्टॉल करें","Install App"],ih_install_d:["फोनच्या होम स्क्रीनवर ऍप जोडा","फ़ोन की होम स्क्रीन पर ऐप जोड़ें","Add the app to your home screen"],
exit_app:["ऍप बंद करा","ऐप बंद करें","Exit App"],exit_d:["ऍप बंद करण्याचा प्रयत्न करा","ऐप बंद करने का प्रयास करें","Try to close the app"],
exit_hint:["ब्राउझर सुरक्षेमुळे ऍप्स स्वतःहून पूर्ण बंद करता येत नाहीत. कृपया फोनच्या Back बटणाने किंवा Recent Apps मधून हे ऍप बंद करा.","ब्राउज़र सुरक्षा के कारण ऐप्स खुद को पूरी तरह बंद नहीं कर सकते। कृपया फोन के Back बटन या Recent Apps से इसे बंद करें।","For browser-security reasons, an app can't fully close itself. Please close it using your phone's Back button or Recent Apps."],
/* मदत केंद्र */
hc_wa:["WhatsApp","WhatsApp","WhatsApp"],hc_wa_d:["तत्काळ सल्ला व मार्गदर्शन","तुरंत सलाह व मार्गदर्शन","Instant advice and guidance"],hc_call:["फोन करा","फ़ोन करें","Call Us"],hc_call_d:["तत्काळ संपर्क","तुरंत संपर्क","Immediate contact"],hc_mail:["ईमेल करा","ईमेल करें","Email Us"],hc_mail_d:["आपला प्रश्न पाठवा","अपना प्रश्न भेजें","Send us your question"],
hc_share:["ही ऍप इतरांना पाठवा","यह ऐप दूसरों को भेजें","Share this app"],hc_share_d:["इतरांशी शेअर करा","दूसरों के साथ साझा करें","Share with others"],
share_app_text:["Legal Help India — मोफत कायदेशीर माहिती व मदत या ऍपवर मिळवा:","Legal Help India — मुफ्त कानूनी जानकारी व मदद इस ऐप पर पाएँ:","Legal Help India — get free legal information and help on this app:"],
/* अभिप्राय */
r_count:["समीक्षा","समीक्षाएँ","reviews"],r_none:["अजून अभिप्राय नाहीत.","अभी कोई समीक्षा नहीं।","No reviews yet."],r_btn:["तुमचा अनुभव सांगा","अपना अनुभव बताएँ","Share Your Experience"],r_write:["तुमचा अभिप्राय द्या","अपनी समीक्षा दें","Share your feedback"],
r_name:["तुमचे नाव","आपका नाम","Your name"],r_msg:["तुमचा अनुभव लिहा","अपना अनुभव लिखें","Write your experience"],r_send:["अभिप्राय पाठवा","समीक्षा भेजें","Submit review"],
r_ok:["धन्यवाद! मंजुरीनंतर अभिप्राय दिसेल.","धन्यवाद! स्वीकृति के बाद समीक्षा दिखेगी।","Thank you! Your review will appear after approval."],r_req:["नाव आणि अभिप्राय आवश्यक आहे.","नाम और समीक्षा आवश्यक है।","Name and review are required."],
/* आमच्याबद्दल / टीम */
about_lead:["कायद्याची माहिती • सोप्या भाषेत मार्गदर्शन","कानून की जानकारी • सरल भाषा में मार्गदर्शन","Legal information • Simple guidance"],
about_mission_h:["आमचे ध्येय","हमारा उद्देश्य","Our Mission"],
about_mission:["सर्वसामान्य नागरिकांना सोप्या भाषेत कायदेशीर माहिती व मार्गदर्शन मोफत उपलब्ध करून देणे, जेणेकरून प्रत्येकाला आपल्या हक्कांची जाणीव होईल.","आम नागरिकों को सरल भाषा में मुफ्त कानूनी जानकारी व मार्गदर्शन उपलब्ध कराना, ताकि हर किसी को अपने अधिकारों की जानकारी हो।","To provide free legal information and guidance in simple language to ordinary citizens, so everyone understands their rights."],
about_provide_h:["आम्ही काय देतो","हम क्या देते हैं","What We Provide"],
about_provide:[["कायदेशीर माहिती (सोप्या भाषेत)","नमुना अर्ज व तक्रार नमुने (PDF)","AI आधारित मार्गदर्शन","कायदेशीर मदत मिळवण्यास सहाय्य"],["कानूनी जानकारी (सरल भाषा में)","नमूना आवेदन व शिकायत प्रारूप (PDF)","AI आधारित मार्गदर्शन","कानूनी मदद पाने में सहायता"],["Legal information (in simple language)","Sample forms and complaint templates (PDF)","AI-based guidance","Support in getting legal help"]],
about_team_btn:["आमची टीम पहा","हमारी टीम देखें","Meet Our Team"],
team_contact:["संपर्क माहिती","संपर्क जानकारी","Contact Information"],
about_bio:["श्री. स्वप्निल मोकळ (M.Sc. CS) — माजी अध्यक्ष, संस्कार फाउंडेशन","श्री स्वप्निल मोकल (M.Sc. CS) — पूर्व अध्यक्ष, संस्कार फाउंडेशन","Mr. Swapnil Mokal (M.Sc. CS) — Ex-President, Sanskar Foundation"],
about_bio2:["डॉ. प्रशांत अभंग — वकील, मुंबई उच्च न्यायालय","डॉ. प्रशांत अभंग — अधिवक्ता, मुंबई उच्च न्यायालय","Dr. Prashant Abhang — Advocate, Bombay High Court"],
role_adv:["कायदेशीर सल्लागार, Legal Help India टीम","कानूनी सलाहकार, Legal Help India टीम","Legal Advisor, Legal Help India Team"],
about_owner:["ऍप मालक व डेव्हलपर: स्वप्निल मोकळ","ऐप मालिक व डेवलपर: स्वप्निल मोकल","App Owner & Developer: Swapnil Mokal"],
copyright:["© 2026 Legal Help India. सर्व हक्क राखीव.","© 2026 Legal Help India. सर्वाधिकार सुरक्षित।","© 2026 Legal Help India. All rights reserved."],
offline_mode:["Offline mode","Offline mode","Offline mode"],
/* PDF */
pdf_btn:["PDF फॉर्म भरा","PDF फॉर्म भरें","Fill PDF form"],pdf_dl:["PDF डाउनलोड करा","PDF डाउनलोड करें","Download PDF"],
pdf_making:["PDF तयार होत आहे…","PDF बन रही है…","Preparing PDF…"],pdf_err:["PDF बनवता आले नाही. पुन्हा प्रयत्न करा.","PDF नहीं बन सकी। पुनः प्रयास करें।","Could not create the PDF. Please try again."],
pdf_note:["हा सर्वसाधारण मसुदा आहे, अंतिम वापरापूर्वी वकिलाचा सल्ला घ्या.","यह एक सामान्य मसौदा है, अंतिम उपयोग से पहले वकील की सलाह लें।","This is a general draft — consult a lawyer before final use."],
pdf_mobile:["तुमचा मोबाईल क्रमांक (पडताळणीसाठी) *","आपका मोबाइल नंबर (सत्यापन हेतु) *","Your mobile number (for verification) *"],
pdf_missing:["कृपया खालील माहिती भरा:","कृपया निम्नलिखित जानकारी भरें:","Please fill in the following:"],
pdf_badmobile:["कृपया वैध १० अंकी मोबाईल क्रमांक टाका (उदा. ९८७६५४३२१०).","कृपया मान्य 10 अंकों का मोबाइल नंबर डालें (जैसे 9876543210)।","Please enter a valid 10-digit mobile number (e.g. 9876543210)."],
pdf_done:["PDF यशस्वीरित्या डाउनलोड झाला आणि तुमच्या तपशिलांची नोंद आमच्याकडे झाली आहे.","PDF सफलतापूर्वक डाउनलोड हो गई और आपका विवरण हमारे पास दर्ज हो गया है।","Your PDF has been downloaded and your details have been recorded with us."],
pdf_done2:["PDF डाउनलोड झाला, पण नोंद पाठवता आली नाही (इंटरनेट तपासा).","PDF डाउनलोड हो गई, पर विवरण नहीं भेजा जा सका (इंटरनेट जाँचें)।","PDF downloaded, but we couldn't record it (please check your internet)."]};
const t=k=>T[k]?T[k][IDX[L]]:k,esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const txt=o=>o?(o[L]||o.mr||''):'';

/* ---- स्थिती ---- */
let S={},lastAnswer='',lastTrack=null,wizStep=1,curRoute={name:'home',arg:''},stack=[],sFilter='all',cFilter='all',fCat='all',deferredPrompt=null;
window._rv=null;

/* ---- मार्ग (routes) ---- */
const R={home:{nav:'home'},search:{nav:'home',t:'pg_search'},const:{nav:'home',t:'pg_const'},rights:{nav:'home',t:'pg_rights'},topic:{nav:'home'},forms:{nav:'home',t:'pg_forms'},
 ask:{nav:'ask',t:'pg_ask'},help:{nav:'help',t:'pg_help'},status:{nav:'home',t:'pg_status'},info:{nav:'info',t:'pg_info'},contact:{nav:'info',t:'pg_contact'},reviews:{nav:'info',t:'pg_reviews'},about:{nav:'info',t:'pg_about'},team:{nav:'info',t:'pg_team'}};
function parseHash(){const h=(location.hash||'#home').replace(/^#/,''),i=h.indexOf('-'),n=i<0?h:h.slice(0,i),a=i<0?'':h.slice(i+1);return{name:R.hasOwnProperty(n)?n:'home',arg:a}}

/* ---- सहायक ---- */
function msg(el,cls,html){el.className='msg '+cls;el.innerHTML=html}
async function call(fn,body){const r=await apiFetch(fn,{method:'POST',body:JSON.stringify(body||{})}),d=await r.json();if(!r.ok)throw new Error(d.error||'error');return d}
function fail(el,e,extra){console.error(e);msg(el,'err',esc(t('err_net'))+'<br><small>'+esc(e&&e.message||'')+'</small>'+(extra||''))}
function waLink(text){return 'https://wa.me/'+C.whatsappNumber+'?text='+encodeURIComponent(text)}
function fillIcons(root){(root?[].slice.call(root.querySelectorAll('[data-ic]')):$$('[data-ic]')).forEach(e=>{if(ICONS[e.dataset.ic])e.innerHTML=ICONS[e.dataset.ic]})}
function norm(s){return String(s||'').replace(/[०-९]/g,c=>String('०१२३४५६७८९'.indexOf(c))).toLowerCase()}
function topicKeys(){return Object.keys(D.TOPICS)}
function openSheet(html){$('#sheetBody').innerHTML='<button class="modal-close" data-close="1" aria-label="Close">&times;</button>'+html;$('#sheetModal').classList.remove('hide');fillIcons($('#sheetBody'))}
function closeSheet(){$('#sheetModal').classList.add('hide');$('#sheetBody').innerHTML=''}
async function shareContent(text,url){
  const data={title:'Legal Help India',text:text};if(url)data.url=url;
  try{if(navigator.share){await navigator.share(data);return}}catch(e){if(e&&e.name==='AbortError')return}
  const w=text+(url?'\n'+url:'');
  try{await navigator.clipboard.writeText(w);alert(t('share_copied'))}catch(e){window.open(waLink(w),'_blank')}
}
function appUrl(){return location.origin+location.pathname.replace(/[^\/]*$/,'')}

/* ---- हेडर ---- */
function setHeader(){
  const home=curRoute.name==='home',def=R[curRoute.name];
  $('#backBtn').classList.toggle('hide',home);$('#hdrLogo').classList.toggle('hide',!home);
  const h=$('#hdrTitle');h.classList.toggle('home',home);
  if(home)h.innerHTML='Legal Help India<small>'+esc(t('tag'))+'</small>';
  else if(curRoute.name==='topic'){const k=D.TOPICS[curRoute.arg];h.textContent=k?txt(k.title):t('pg_rights')}
  else h.textContent=t(def.t);
}
function goBack(){if(stack.length>1){history.back()}else location.hash='#home'}

/* ---- होम ---- */
function renderHome(){
  if(S.welcome)$('#heroS').textContent=S.welcome;
  if(S.cta)$('#ctaHelpTxt').textContent=S.cta;
  const n=$('#notice');if(S.update){n.classList.remove('hide');n.textContent=S.update}else n.classList.add('hide');
}

/* ---- कायदा शोधा ---- */
const LAW_CATS=[
 {k:'const',icon:'constitution',go:'#const'},{k:'fund',icon:'rights',go:'#const-rights'},{k:'women',em:'👩',go:'#topic-women'},
 {k:'family',em:'👨‍👩‍👧',go:'#topic-family'},{k:'property',em:'🏠',go:'#topic-property'},{k:'police',em:'🚔',go:'#topic-police'},
 {k:'labour',em:'👷',go:'#topic-labour'},{k:'consumer',em:'🛒',go:'#topic-consumer'},{k:'senior',em:'🧓',go:'#topic-senior'},{k:'other',icon:'laws',go:'#rights'}];
function buildIndex(){
  const items=[];
  D.ARTICLES.forEach(a=>items.push({type:'article',id:a.num,title:txt(a.title),snip:txt(a.sum),sec:norm(a.num+' '+a.title.mr+' '+a.title.hi+' '+a.title.en),all:norm(a.num+' '+a.title.mr+' '+a.title.hi+' '+a.title.en+' '+a.sum.mr+' '+a.sum.hi+' '+a.sum.en)}));
  topicKeys().forEach(k=>{const p=D.TOPICS[k];
    const secs=p.sections.map(s=>['mr','hi','en'].map(l=>(s.items[l]||[]).join(' ')).join(' ')).join(' ');
    const acts=p.sections[0]?['mr','hi','en'].map(l=>(p.sections[0].items[l]||[]).join(' ')).join(' '):'';
    const faqs=(p.faqs||[]).map(f=>['mr','hi','en'].map(l=>txt2(f.q,l)+' '+txt2(f.a,l)).join(' ')).join(' ');
    const ttl=['mr','hi','en'].map(l=>txt2(p.title,l)).join(' ');
    items.push({type:'topic',id:k,title:txt(p.title),snip:(p.sections[0]?(p.sections[0].items[L]||[]).slice(0,2).join(' • '):''),act:norm(acts),ttl:norm(ttl),all:norm(ttl+' '+secs),kw:norm(ttl+' '+secs+' '+faqs)});
  });
  D.DOCS.forEach(d=>{const ttl=['mr','hi','en'].map(l=>txt2(d.title,l)).join(' ');items.push({type:'doc',id:d.key,title:txt(d.title),snip:txt(d.desc),ttl:norm(ttl),all:norm(ttl+' '+['mr','hi','en'].map(l=>txt2(d.desc,l)).join(' '))})});
  return items;
}
function txt2(o,l){return o&&o[l]?o[l]:''}
function searchMatch(it,q,f){
  if(f==='all')return it.all.indexOf(q)>=0;
  if(f==='section')return it.type==='article'&&it.sec.indexOf(q)>=0;
  if(f==='act')return (it.type==='topic'&&it.act.indexOf(q)>=0)||(it.type==='doc'&&it.ttl.indexOf(q)>=0);
  if(f==='topic')return (it.type==='topic'||it.type==='doc')&&it.ttl.indexOf(q)>=0;
  if(f==='kw')return (it.kw||it.all).indexOf(q)>=0;
  return false;
}
function renderSearch(){
  $('#sChips').innerHTML=['all','act','section','topic','kw'].map(c=>'<button data-sf="'+c+'" class="'+(c===sFilter?'on':'')+'">'+esc(t('sc_'+c))+'</button>').join('');
  const q=norm($('#sq').value.trim());$('#sqClear').classList.toggle('hide',!q);
  const body=$('#sBody');
  if(!q){
    body.innerHTML='<h2 class="sec-title">'+esc(t('cat_t'))+'</h2><div class="cgrid">'+LAW_CATS.map(c=>'<button class="cat" data-go="'+c.go+'">'+(c.icon?ic(c.icon):'<span class="em">'+c.em+'</span>')+'<span>'+esc(t('lc_'+c.k))+'</span></button>').join('')+'</div>';
    return;
  }
  const res=buildIndex().filter(it=>searchMatch(it,q,sFilter)).slice(0,40);
  if(!res.length){body.innerHTML='<div class="empty">'+esc(t('no_results'))+'<br><br><button class="btn" data-asknow="1">'+esc(t('cta_ask'))+'</button></div>';return}
  body.innerHTML=res.map(it=>{
    const tag=it.type==='article'?t('rt_article'):it.type==='topic'?t('rt_topic'):t('rt_doc');
    return '<button class="lrow" data-res="'+it.type+':'+esc(it.id)+'"><div class="lt"><span class="rtype">'+esc(tag)+'</span><b>'+esc(it.title)+'</b><small>'+esc((it.snip||'').slice(0,110))+'</small></div><i class="ic-i chev">'+ICONS.chev+'</i></button>';
  }).join('');
}
function openResult(v){
  const i=v.indexOf(':'),type=v.slice(0,i),id=v.slice(i+1);
  if(type==='article')openArticle(id);else if(type==='topic')location.hash='#topic-'+id;else if(type==='doc')openDoc(id);
}

/* ---- संविधान ---- */
const IMPORTANT=['१४','१५','१६','१९','२०','२१','२१अ','२२','३२','२२६'];
const CONST_CARDS=[{k:'preamble',em:'📜'},{k:'rights',ic:'rights'},{k:'directive',ic:'laws'},{k:'duties',ic:'profile'},{k:'important',ic:'notifications'},{k:'judiciary',ic:'constitution'}];
function constList(){
  const q=norm($('#cq').value.trim());
  return D.ARTICLES.filter(a=>{
    if(cFilter==='rights'&&a.cat!=='rights')return false;if(cFilter==='directive'&&a.cat!=='directive')return false;if(cFilter==='duties'&&a.cat!=='duties')return false;if(cFilter==='judiciary'&&a.cat!=='judiciary')return false;
    if(cFilter==='important'&&IMPORTANT.indexOf(a.num)<0)return false;
    return !q||norm(a.num+' '+a.title.mr+' '+a.title.hi+' '+a.title.en+' '+a.sum[L]).indexOf(q)>=0;
  });
}
function renderConst(){
  $('#cBanner').innerHTML='<div class="cbanner">'+ICONS.chakra+'<h2>'+esc(t('cb_title')||'')+'</h2><p>'+esc(t('cb_sub'))+'</p></div>'+
    '<div class="ccards">'+CONST_CARDS.map(c=>'<button class="cat'+(cFilter===c.k?' on':'')+'" data-cf="'+c.k+'">'+(c.ic?ic(c.ic):'<span class="em">'+c.em+'</span>')+'<span>'+esc(t('cc_'+c.k))+'</span></button>').join('')+'</div>';
  $('#cqClear').classList.toggle('hide',!$('#cq').value);
  const b=$('#cBody');
  if(cFilter==='preamble'){
    const p=D.PREAMBLE;
    b.innerHTML=(p?'<div class="pre-card"><h3>'+esc(txt(p.title))+'</h3><p>'+esc(txt(p.text))+'</p><p class="mut" style="font-size:.8rem;margin-top:10px">'+esc(txt(p.note))+'</p></div>':'')+'<button class="btn ghost wide" data-cf="all">'+esc(t('art_all'))+'</button>';return;
  }
  const list=constList();
  b.innerHTML=(cFilter!=='all'?'<button class="btn ghost sm" style="margin-bottom:10px" data-cf="all">'+esc(t('art_all'))+'</button>':'')+
    (list.length?list.map(a=>'<button class="lrow" data-art="'+esc(a.num)+'"><span class="itile t0">'+ic('documents')+'</span><div class="lt"><b>'+esc(txt(a.title))+'</b></div><i class="ic-i chev">'+ICONS.chev+'</i></button>').join(''):'<div class="empty">'+esc(t('no_results'))+'</div>');
}
function openArticle(num){
  const a=D.ARTICLES.find(x=>x.num===num);if(!a)return;
  openSheet('<h3 style="margin-bottom:8px">'+esc(txt(a.title))+'</h3><p style="line-height:1.7">'+esc(txt(a.sum))+'</p><div class="row" style="margin-top:14px"><button class="btn wide" data-askart="'+esc(num)+'">'+esc(t('art_ask'))+'</button></div>');
}

/* ---- माझे हक्क ---- */
const RIGHTS_MAIN=[['citizens','t0'],['women','t1'],['children','t2'],['consumer','t3'],['labour','t4'],['police','t5'],['property','t6'],['senior','t7'],['education','t8']];
const RIGHTS_MORE=[['family','t0'],['cyber','t5']];
function rightsRow(k,tint){const p=D.TOPICS[k];if(!p)return '';return '<button class="lrow" data-topic="'+k+'"><span class="itile '+tint+'">'+(p.icon&&p.icon.indexOf('<svg')!==0?p.icon:ic('rights'))+'</span><div class="lt"><b>'+esc(txt(p.title))+'</b><small>'+esc(t('rd_'+k))+'</small></div><i class="ic-i chev">'+ICONS.chev+'</i></button>'}
function renderRights(){
  $('#rBody').innerHTML=RIGHTS_MAIN.map(r=>rightsRow(r[0],r[1])).join('')+'<h2 class="sec-title">'+esc(t('more_topics'))+'</h2>'+RIGHTS_MORE.map(r=>rightsRow(r[0],r[1])).join('');
}
function renderTopic(key){
  const p=D.TOPICS[key];
  if(!p){$('#tBody').innerHTML='<div class="empty">'+esc(t('no_results'))+'</div>';return}
  const rel=(p.related||[]).map(n=>D.ARTICLES.find(a=>a.num===n)).filter(Boolean);
  const icon=p.icon&&p.icon.indexOf('<svg')!==0?p.icon:ic('rights');
  $('#tBody').innerHTML='<div class="about-head"><span class="itile t0" style="width:56px;height:56px;font-size:1.8rem">'+icon+'</span><div><b>'+esc(txt(p.title))+'</b><small>'+esc(t('rd_'+key)||'')+'</small></div></div>'+
   p.sections.map(s=>'<div class="acard"><h3>'+esc(txt(s.heading))+'</h3><ul>'+(s.items[L]||[]).map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul></div>').join('')+
   (rel.length?'<div class="acard"><h3>'+esc(t('topic_related'))+'</h3>'+rel.map(a=>'<button class="lrow" data-art="'+esc(a.num)+'" style="box-shadow:none;background:#f4f7fb"><div class="lt"><b>'+esc(txt(a.title))+'</b></div><i class="ic-i chev">'+ICONS.chev+'</i></button>').join('')+'</div>':'')+
   ((p.faqs||[]).length?'<h2 class="sec-title">'+esc(t('topic_faq'))+'</h2>'+p.faqs.map(f=>'<details class="card acc faq"><summary>'+esc(txt(f.q))+'</summary><p style="margin:0 16px 14px">'+esc(txt(f.a))+'</p></details>').join(''):'')+
   '<div class="row" style="margin-top:6px"><button class="btn wide" data-asktopic="'+esc(key)+'">'+ic('ai-guide')+esc(t('topic_ask_btn'))+'</button><button class="btn gold wide" data-pdftopic="'+esc(key)+'">'+ic('download')+esc(t('topic_pdf_btn'))+'</button></div>';
}

/* ---- नमुना अर्ज ---- */
const DOC_CAT={police:'complaint',notice:'notice',marriage:'apply',rent:'other',affidavit:'apply',rti:'apply',resignation:'apply',maintenance:'apply'};
function renderForms(){
  $('#fChips').innerHTML=['all','apply','complaint','notice','other'].map(c=>'<button data-fc="'+c+'" class="'+(c===fCat?'on':'')+'">'+esc(t('fc_'+c))+'</button>').join('');
  const list=D.DOCS.filter(d=>fCat==='all'||DOC_CAT[d.key]===fCat);
  $('#fBody').innerHTML=list.length?list.map((d,i)=>'<div class="fcard"><div class="top2"><span class="itile t'+(i%9)+'">'+d.icon+'</span><div><b>'+esc(txt(d.title))+'</b><small>'+esc(txt(d.desc))+'</small></div></div><div class="row"><button class="btn ghost sm" data-viewdoc="'+d.key+'">'+ic('eye')+esc(t('view_btn'))+'</button><button class="btn sm" data-pdf="'+d.key+'">'+ic('download')+esc(t('dl_btn'))+'</button></div></div>').join(''):'<div class="empty">'+esc(t('no_results'))+'</div>';
}
function openDoc(key){
  const d=D.DOCS.find(x=>x.key===key);if(!d)return;
  openSheet('<h3 style="margin-bottom:6px">'+d.icon+' '+esc(txt(d.title))+'</h3><p class="mut">'+esc(txt(d.desc))+'</p><ul>'+(d.points[L]||[]).map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul><div class="pdf-disc">'+esc(t('pdf_note'))+'</div><div class="row"><button class="btn wide" data-pdf="'+d.key+'">'+ic('download')+esc(t('pdf_btn'))+'</button></div>');
}

/* ---- AI ---- */
function renderAsk(){
  $('#exList').innerHTML=['ex1','ex2','ex3','ex4'].map(k=>'<button class="lrow" data-ex="'+k+'"><span class="itile t0" style="width:38px;height:38px">'+ic('help')+'</span><div class="lt"><b style="font-weight:600;color:var(--ink)">'+esc(t(k))+'</b></div></button>').join('');
}
async function ask(){
  const p=$('#askQ').value.trim();if(!p)return;const out=$('#askOut'),b=$('#askBtn');b.disabled=true;msg(out,'info',esc(t('ask_wait')));
  try{const d=await call('ask',{problem:p,lang:L});if(!d.text)throw new Error('empty');lastAnswer=d.text;
    out.className='msg ok';out.innerHTML='<div class="pre">'+esc(d.text)+'</div><button class="btn ghost sm" id="shareAnsBtn" style="margin-top:10px">'+ic('share')+esc(t('share_btn'))+'</button>';
  }catch(e){fail(out,e)}b.disabled=false;
}

/* ---- मदत मागा (wizard) ---- */
function renderWiz(){
  $('#wizSteps').innerHTML=[1,2,3,4,5].map(n=>'<div class="st'+(n<=wizStep?' on':'')+(n<wizStep?' done':'')+'"><i>'+n+'</i>'+esc(t('sl'+n))+'</div>').join('');
  $$('.wiz-step').forEach(el=>el.classList.toggle('hide',Number(el.dataset.step)!==wizStep));
  $('#wizBack').classList.toggle('hide',wizStep===1);$('#wizNext').classList.toggle('hide',wizStep===5);$('#fBtn').classList.toggle('hide',wizStep!==5);
  if(wizStep===5)buildSummary();
}
function buildSummary(){
  const g=id=>$(id).value.trim(),so=$('#fCat').selectedOptions&&$('#fCat').selectedOptions[0],to=$('#fTime').selectedOptions&&$('#fTime').selectedOptions[0];
  const rows=[[t('f_name'),g('#fName')],[t('f_mobile'),g('#fMobile')],[t('f_email'),g('#fEmail')||'—'],[t('f_city'),g('#fCity')],[t('f_district'),g('#fDistrict')],[t('f_cat'),so?so.textContent:''],[t('f_desc'),g('#fDesc')],[t('f_time'),to?to.textContent:'']];
  $('#wizSummary').innerHTML=rows.map(r=>'<p><b>'+esc(String(r[0]).replace(' *',''))+':</b> '+esc(r[1])+'</p>').join('');
}
function validEmail(e){return !e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
function wizValidate(step){
  const out=$('#fOut');
  if(step===1){
    const mob=$('#fMobile').value.replace(/\D/g,'').slice(-10);
    if(!$('#fName').value.trim()){msg(out,'err',esc(t('f_req')));return false}
    if(!/^[6-9]\d{9}$/.test(mob)){msg(out,'err',esc(t('f_mob')));return false}
    if(!validEmail($('#fEmail').value.trim())){msg(out,'err',esc(t('f_email_bad')));return false}
    if(!$('#fCity').value.trim()||!$('#fDistrict').value.trim()){msg(out,'err',esc(t('f_req3')));return false}
  }
  if(step===3&&!$('#fDesc').value.trim()){msg(out,'err',esc(t('f_req2')));return false}
  out.className='msg hide';return true;
}
function wizNext(){if(!wizValidate(wizStep))return;wizStep=Math.min(5,wizStep+1);renderWiz();window.scrollTo(0,0)}
function wizBack(){wizStep=Math.max(1,wizStep-1);renderWiz();window.scrollTo(0,0)}
async function submitHelp(){
  for(let s=1;s<=3;s++){if(!wizValidate(s)){wizStep=s;renderWiz();return}}
  const g=id=>$(id).value.trim(),out=$('#fOut'),mob=g('#fMobile').replace(/\D/g,'').slice(-10);
  const body={name:g('#fName'),mobile:mob,email:g('#fEmail'),city:g('#fCity'),district:g('#fDistrict'),category:$('#fCat').value,description:g('#fDesc'),preferredTime:$('#fTime').value,lang:L},b=$('#fBtn');
  b.disabled=true;msg(out,'info',esc(t('sending')));
  try{const d=await call('submit-legal-help',body),id=d.requestId||'';
    msg(out,'ok',esc(t('f_ok'))+' <b>'+esc(id)+'</b><br><small>'+esc(t('f_ok2'))+'</small>');
    $('#trId').value=id;$('#trMob').value=mob;$('#fDesc').value='';wizStep=1;renderWiz();
    setTimeout(()=>{location.hash='#status'},1600);}
  catch(e){fail(out,e,'<br><a class="btn ok sm" style="margin-top:8px" target="_blank" rel="noopener" href="'+waLink('Legal help request\nName: '+body.name+'\nMobile: '+mob+'\nTopic: '+body.category+'\n'+body.description)+'">'+esc(t('wa_send'))+'</a>')}
  b.disabled=false;
}

/* ---- माझी विनंती ---- */
async function track(){
  const id=$('#trId').value.trim(),mob=$('#trMob').value.replace(/\D/g,'').slice(-10),out=$('#trOut');
  if(!id||mob.length!==10){msg(out,'err',esc(t('tr_need')));return}
  msg(out,'info',esc(t('loading')));
  try{lastTrack=(await call('track-request',{id:id,mobile:mob})).request;showTrack()}
  catch(e){lastTrack=null;msg(out,'err',esc(/not|सापडली|found|404/i.test(e.message)?t('tr_nf'):t('err_net')))}
}
function showTrack(){
  const out=$('#trOut');if(!lastTrack){if(out.className.indexOf('msg')<0)out.innerHTML='';return}
  const order=['New','Contacted','In Progress','Resolved'],cur=Math.max(0,order.indexOf(lastTrack.status));
  const d=lastTrack.submittedAt?new Date(lastTrack.submittedAt):null,ds=d&&!isNaN(d)?d.toLocaleString(({mr:'mr-IN',hi:'hi-IN',en:'en-IN'})[L],{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'';
  out.className='';out.innerHTML='<div class="tl"><div class="tl-id">'+esc(lastTrack.id)+'</div>'+order.map((s,n)=>'<div class="tl-item '+(n<=cur?'c'+n:'pending')+'"><span class="tl-dot"></span><div><b>'+esc(t('tl'+n))+'</b><small>'+(n===0?esc(ds||'—'):'—')+'</small></div></div>').join('')+'</div>';
}

/* ---- माहिती हब ---- */
function isStandalone(){return (window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true}
function infoRow(go,icon,tint,title,desc,attr){return '<button class="lrow" '+(go?'data-go="'+go+'"':attr)+'><span class="itile '+tint+'">'+ic(icon)+'</span><div class="lt"><b>'+esc(title)+'</b><small>'+esc(desc)+'</small></div><i class="ic-i chev">'+ICONS.chev+'</i></button>'}
function renderInfo(){
  $('#iBody').innerHTML=infoRow('#contact','phone','t2',t('ih_contact'),t('ih_contact_d'))+infoRow('#reviews','messages','t6',t('ih_reviews'),t('ih_reviews_d'))+infoRow('#about','info','t0',t('ih_about'),t('ih_about_d'))+infoRow('#team','profile','t4',t('ih_team'),t('ih_team_d'))+
   ((deferredPrompt&&!isStandalone())?infoRow('','install','t5',t('ih_install'),t('ih_install_d'),'data-install="1"'):'')+
   infoRow('','power','t1',t('exit_app'),t('exit_d'),'data-exit="1"')+'<p class="foot">'+esc(t('copyright'))+'</p>';
}
function renderContact(){
  $('#hBody').innerHTML='<a class="hbtn wa" target="_blank" rel="noopener" href="'+esc(waLink('Namaste, mala kayadeshir madat pahije.'))+'">'+ic('whatsapp')+'<div><b>'+esc(t('hc_wa'))+'</b><small>'+esc(t('hc_wa_d'))+'</small></div></a>'+
   '<a class="hbtn call" href="tel:+'+esc(C.whatsappNumber)+'">'+ic('phone')+'<div><b>'+esc(t('hc_call'))+'</b><small>'+esc(t('hc_call_d'))+'</small></div></a>'+
   '<a class="hbtn mail" href="mailto:'+esc(C.email)+'">'+ic('mail')+'<div><b>'+esc(t('hc_mail'))+'</b><small>'+esc(t('hc_mail_d'))+'</small></div></a>'+
   '<button class="hbtn share" id="shareAppBtn">'+ic('share')+'<div><b>'+esc(t('hc_share'))+'</b><small>'+esc(t('hc_share_d'))+'</small></div></button>';
}

/* ---- अभिप्राय ---- */
function renderReviews(){
  const l=window._rv;const b=$('#rvBody');
  if(l===null){b.innerHTML='<p class="mut">'+esc(t('loading'))+'</p>';return}
  const n=l.length,avg=n?(l.reduce((s,r)=>s+(Number(r.rating)||0),0)/n):0,full=Math.round(avg);
  b.innerHTML='<div class="rsum">'+(n?'<div><div class="big2">'+avg.toFixed(1)+'<small>/5</small></div><div class="stars">'+'★'.repeat(full)+'☆'.repeat(5-full)+'</div><small class="mut">('+n+' '+esc(t('r_count'))+')</small></div>':'<div class="mut">'+esc(t('r_none'))+'</div>')+'<button class="btn sm" id="rvWrite">'+esc(t('r_btn'))+'</button></div>'+
   l.map(r=>{const d=r.createdAt?new Date(r.createdAt):null,ds=d&&!isNaN(d)?d.toLocaleDateString(({mr:'mr-IN',hi:'hi-IN',en:'en-IN'})[L],{day:'numeric',month:'short',year:'numeric'}):'',rt=Math.max(0,Math.min(5,Number(r.rating)||0));
    return '<div class="rcard"><div class="rh"><span class="av">'+esc(String(r.name||'?').trim().charAt(0).toUpperCase())+'</span><div><b>'+esc(r.name)+'</b><small>'+esc(ds)+'</small></div></div><div class="stars">'+'★'.repeat(rt)+'☆'.repeat(5-rt)+'</div><p>'+esc(r.message)+'</p></div>'}).join('');
}
async function loadReviews(){
  try{window._rv=(await call('reviews')).reviews||[]}catch(e){window._rv=[]}
  if(curRoute.name==='reviews')renderReviews();
}
async function sendReview(){
  const out=$('#rOut'),name=$('#rName').value.trim(),m=$('#rMsg').value.trim();if(!name||!m)return msg(out,'err',esc(t('r_req')));
  $('#rBtn').disabled=true;try{await call('submit-review',{name:name,message:m,rating:$('#rRate').value,lang:L});msg(out,'ok',esc(t('r_ok')));$('#rMsg').value=''}catch(e){fail(out,e)}$('#rBtn').disabled=false;
}

/* ---- आमच्याबद्दल / टीम ---- */
function renderAbout(){
  $('#aBody').innerHTML='<div class="about-head"><img src="icons/icon-192.png" alt=""><div><b>Legal Help India</b><small>'+esc(t('about_lead'))+'</small></div></div>'+
   '<div class="acard"><h3>'+esc(t('about_mission_h'))+'</h3><p>'+esc(t('about_mission'))+'</p></div>'+
   '<div class="acard"><h3>'+esc(t('about_provide_h'))+'</h3><ul class="checks">'+T.about_provide[IDX[L]].map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul></div>'+
   '<div class="note">'+esc(t('disc'))+'</div>'+
   '<button class="btn wide" data-go="#team">'+esc(t('about_team_btn'))+'</button>';
}
function renderTeam(){
  $('#tmBody').innerHTML='<div class="tcard"><img src="about-swapnil-mokal.jpg" alt="Swapnil Mokal" loading="lazy"><div><b>'+esc(t('about_bio'))+'</b><small>'+esc(t('role_adv'))+'</small></div></div>'+
   '<div class="tcard"><img src="about-prashant-abhang.jpg" alt="Dr. Prashant Abhang" loading="lazy"><div><b>'+esc(t('about_bio2'))+'</b><small>'+esc(t('role_adv'))+'</small></div></div>'+
   '<p class="mut" style="font-size:.84rem;margin:-2px 2px 14px">'+esc(t('about_owner'))+'</p>'+
   '<h2 class="sec-title">'+esc(t('team_contact'))+'</h2>'+
   '<a class="crow" target="_blank" rel="noopener" href="'+esc(waLink('Namaste'))+'">'+ic('whatsapp')+'<span>WhatsApp: '+esc((C.whatsappNumber||'').replace(/^91/,''))+'</span></a>'+
   '<a class="crow" href="mailto:'+esc(C.email)+'">'+ic('mail')+'<span>Email: '+esc(C.email)+'</span></a>'+
   '<p class="foot">'+esc(t('copyright'))+'</p>';
}

/* ---- PDF फॉर्म (भरून PDF) ---- */
function openPdfForm(key){
  const fields=window.LHI_PDF&&window.LHI_PDF.FIELDS[key];if(!fields)return;
  closeSheet();
  const html='<button class="modal-close" id="pdfClose" aria-label="Close">&times;</button><h3>'+esc(t('pdf_btn'))+'</h3><div class="pdf-disc">'+esc(t('pdf_note'))+'</div>'+
   fields.map(fd=>'<label>'+esc(fd.label[L])+(fd.opt?'':' *')+'</label>'+(fd.type==='ta'?'<textarea data-f="'+fd.id+'"></textarea>':'<input data-f="'+fd.id+'" type="'+(fd.type==='date'?'date':'text')+'">')).join('')+
   '<label>'+esc(t('pdf_mobile'))+'</label><input data-f="_mobile" type="tel" inputmode="numeric" maxlength="10">'+
   '<button class="btn wide" id="pdfGo" style="margin-top:16px">'+esc(t('pdf_dl'))+'</button><div class="msg hide" id="pdfOut"></div>';
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
      await call('log-pdf-download',{name:v[fields[0].id]||'—',mobile:mobile,docKey:key,docTitle:doc?txt(doc.title):key,filename:res.filename,pdfBase64:res.dataUri,lang:L});
      msg(out,'ok',esc(t('pdf_done')));alert(t('pdf_done'));
    }catch(logErr){console.error(logErr);msg(out,'info',esc(t('pdf_done2')));alert(t('pdf_done2'))}
  }catch(e){console.error(e);msg(out,'err',esc(t('pdf_err')))}
  b.disabled=false;
}
async function downloadTopicPdf(key){
  const topic=D.TOPICS[key];if(!topic||!window.LHI_PDF||!window.LHI_PDF.downloadTopic)return;
  try{await window.LHI_PDF.downloadTopic(key,topic,D.ARTICLES,L);alert(t('topic_pdf_done'))}
  catch(e){console.error(e);alert(t('pdf_err'))}
}
function exitApp(){try{window.close()}catch(e){}setTimeout(()=>{if(!document.hidden)alert(t('exit_hint'))},250)}

/* ---- रूट व्यवस्थापन ---- */
function renderCurrent(){
  const n=curRoute.name;
  setHeader();
  if(n==='home')renderHome();
  else if(n==='search')renderSearch();
  else if(n==='const')renderConst();
  else if(n==='rights')renderRights();
  else if(n==='topic')renderTopic(curRoute.arg);
  else if(n==='forms')renderForms();
  else if(n==='ask')renderAsk();
  else if(n==='help')renderWiz();
  else if(n==='status')showTrack();
  else if(n==='info')renderInfo();
  else if(n==='contact')renderContact();
  else if(n==='reviews')renderReviews();
  else if(n==='about')renderAbout();
  else if(n==='team')renderTeam();
  fillIcons();
}
function applyText(){
  fillIcons();
  $$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
  $$('#lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));document.documentElement.lang=L;
  const cur=$('#fCat').value;$('#fCat').innerHTML=Object.keys(D.TOPICS).map(k=>'<option value="'+esc(D.TOPICS[k].title.en)+'">'+esc(txt(D.TOPICS[k].title))+'</option>').join('')+'<option value="Other">'+esc(t('f_other'))+'</option>';if(cur)$('#fCat').value=cur;
  $('#backBtn').innerHTML=ICONS.back;
  const dl=$('#districtList');if(dl&&!dl.children.length)dl.innerHTML=DISTRICTS.map(d=>'<option value="'+esc(d)+'">').join('');
  renderCurrent();
}
function route(){
  curRoute=parseHash();const nm=curRoute.name,def=R[nm],cur=location.hash||'#home';
  if(stack.length>1&&stack[stack.length-2]===cur)stack.pop();else if(stack[stack.length-1]!==cur)stack.push(cur);
  $$('.view').forEach(e=>e.classList.toggle('hide',e.id!=='v-'+nm));
  $$('#nav a').forEach(a=>{const on=a.dataset.r===def.nav;a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  if(nm==='const')cFilter=(['rights','directive','duties','judiciary','important','preamble'].indexOf(curRoute.arg)>=0)?curRoute.arg:'all';
  if(nm==='reviews'){$('#revForm').classList.add('hide');if(window._rv===null)loadReviews()}
  renderCurrent();
  window.scrollTo(0,0);
}
const DISTRICTS=["अहिल्यानगर (अहमदनगर)","अकोला","अमरावती","छत्रपती संभाजीनगर (औरंगाबाद)","बीड","भंडारा","बुलढाणा","चंद्रपूर","धुळे","गडचिरोली","गोंदिया","हिंगोली","जळगाव","जालना","कोल्हापूर","लातूर","मुंबई शहर","मुंबई उपनगर","नागपूर","नांदेड","नंदुरबार","नाशिक","धाराशिव (उस्मानाबाद)","पालघर","परभणी","पुणे","रायगड","रत्नागिरी","सांगली","सातारा","सिंधुदुर्ग","सोलापूर","ठाणे","वर्धा","वाशिम","यवतमाळ"];

/* ---- इव्हेंट्स ---- */
document.addEventListener('click',e=>{
  const g=s=>e.target.closest(s);let b;
  if(b=g('[data-go]')){e.preventDefault();location.hash=b.dataset.go;return}
  if(b=g('[data-res]')){openResult(b.dataset.res);return}
  if(b=g('[data-sf]')){sFilter=b.dataset.sf;renderSearch();return}
  if(b=g('[data-cf]')){cFilter=b.dataset.cf;renderConst();return}
  if(b=g('[data-fc]')){fCat=b.dataset.fc;renderForms();return}
  if(b=g('[data-art]')){openArticle(b.dataset.art);return}
  if(b=g('[data-topic]')){location.hash='#topic-'+b.dataset.topic;return}
  if(b=g('[data-viewdoc]')){openDoc(b.dataset.viewdoc);return}
  if(b=g('[data-pdf]')){openPdfForm(b.dataset.pdf);return}
  if(b=g('[data-askart]')){const a=D.ARTICLES.find(x=>x.num===b.dataset.askart);closeSheet();location.hash='#ask';$('#askQ').value=t('topic_ask_prefill')+(a?txt(a.title):'');$('#askCount').textContent=$('#askQ').value.length;return}
  if(b=g('[data-asktopic]')){const p=D.TOPICS[b.dataset.asktopic];location.hash='#ask';$('#askQ').value=t('topic_ask_prefill')+(p?txt(p.title):'');$('#askCount').textContent=$('#askQ').value.length;return}
  if(b=g('[data-pdftopic]')){downloadTopicPdf(b.dataset.pdftopic);return}
  if(b=g('[data-ex]')){$('#askQ').value=t(b.dataset.ex);$('#askCount').textContent=$('#askQ').value.length;$('#askQ').focus();return}
  if(g('[data-asknow]')){location.hash='#ask';return}
  if(g('[data-exit]')){exitApp();return}
  if(g('[data-install]')){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.then(()=>{deferredPrompt=null;renderCurrent()}).catch(()=>{})}return}
  if(g('[data-close]')){closeSheet();return}
  if(e.target.id==='sheetModal'){closeSheet();return}
  if(e.target.id==='pdfClose'||e.target.id==='pdfModal'){closePdfForm();return}
  if(e.target.id==='pdfGo'){generatePdf();return}
  if(g('#shareAnsBtn')&&lastAnswer){shareContent(lastAnswer);return}
  if(g('#shareAppBtn')){shareContent(t('share_app_text'),appUrl());return}
  if(g('#rvWrite')){const f=$('#revForm');f.classList.remove('hide');f.scrollIntoView();return}
});
$('#lang').onclick=e=>{const b=e.target.closest('button');if(!b)return;L=b.dataset.l;try{localStorage.setItem('lhi-lang',L)}catch(x){}applyText()};
$('#backBtn').onclick=goBack;
$('#sq').oninput=renderSearch;$('#sqClear').onclick=()=>{$('#sq').value='';renderSearch();$('#sq').focus()};
$('#cq').oninput=renderConst;$('#cqClear').onclick=()=>{$('#cq').value='';renderConst()};
$('#askBtn').onclick=ask;$('#askQ').oninput=()=>{$('#askCount').textContent=$('#askQ').value.length};
$('#wizNext').onclick=wizNext;$('#wizBack').onclick=wizBack;$('#fBtn').onclick=submitHelp;$('#trBtn').onclick=track;$('#rBtn').onclick=sendReview;
window.addEventListener('hashchange',route);
window.addEventListener('online',()=>$('#offlinePill').classList.add('hide'));window.addEventListener('offline',()=>$('#offlinePill').classList.remove('hide'));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;if(curRoute.name==='info')renderInfo()});
window.addEventListener('appinstalled',()=>{deferredPrompt=null;if(curRoute.name==='info')renderInfo()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();closePdfForm()}});

$('#offlinePill').classList.toggle('hide',navigator.onLine!==false);
applyText();route();
apiFetch('public-settings',{method:'POST',body:'{}'}).then(r=>r.json()).then(d=>{S=d.settings||{};if(curRoute.name==='home')renderHome()}).catch(()=>{});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
