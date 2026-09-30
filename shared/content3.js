/* Legal Help India — नवे विषय: पैसे/कर्ज, अपघात दावा */
(function(){
const D=window.LHI_DATA;if(!D)return;
const tr=(mr,hi,en)=>({mr:mr,hi:hi,en:en});
const H={laws:tr("मुख्य कायदे","मुख्य कानून","Key Laws"),rights:tr("तुमचे हक्क","आपके अधिकार","Your Rights"),todo:tr("काय करावे","क्या करें","What To Do")};

D.TOPICS.money={icon:"💰",color:"#0b3d91",title:tr("पैसे / कर्ज संबंधित हक्क","पैसे / ऋण संबंधी अधिकार","Money & Loan Rights"),
 sections:[
  {heading:H.laws,items:tr(["भारतीय करार कायदा, १८७२","महाराष्ट्र सावकारी (नियमन) कायदा, २०१४","नकारार्ह संलेख कायदा, १८८१ (धनादेश बाउन्सबाबत कलम १३८)","रिझर्व्ह बँक (RBI) चे कर्ज वसुली संबंधी मार्गदर्शक तत्त्वे","दिवाळखोरी व नादारी संहिता (IBC), २०१६"],
   ["भारतीय संविदा अधिनियम, 1872","महाराष्ट्र साहूकारी (विनियमन) अधिनियम, 2014","परक्राम्य लिखत अधिनियम, 1881 (चेक बाउंस पर धारा 138)","ऋण वसूली संबंधी RBI के दिशा-निर्देश","दिवाला और शोधन अक्षमता संहिता (IBC), 2016"],
   ["Indian Contract Act, 1872","Maharashtra Money-Lending (Regulation) Act, 2014","Negotiable Instruments Act, 1881 (Section 138 — cheque bounce)","RBI guidelines on loan recovery practices","Insolvency and Bankruptcy Code (IBC), 2016"])},
  {heading:H.rights,items:tr(["नोंदणीकृत परवानाधारक सावकाराकडूनच कर्ज घेण्याचा व व्याजदर आधीच जाणून घेण्याचा हक्क","कर्ज वसुलीसाठी धमकी, छळ किंवा जबरदस्ती होऊ नये असा हक्क (RBI मार्गदर्शक तत्त्वे)","कर्जाची कायदेशीर कागदपत्रे व पावती मिळण्याचा हक्क","चेक बाउंस झाल्यास व झाल्यावरही, नोटीस मिळाल्यावर उत्तर देण्याचा हक्क"],
   ["पंजीकृत लाइसेंसधारी साहूकार से ही ऋण लेने व ब्याज दर पहले से जानने का अधिकार","ऋण वसूली हेतु धमकी, उत्पीड़न या जबरदस्ती न होने का अधिकार (RBI दिशा-निर्देश)","ऋण के वैध दस्तावेज़ व रसीद पाने का अधिकार","चेक बाउंस होने पर भी नोटिस मिलने पर जवाब देने का अधिकार"],
   ["Right to borrow only from a registered licensed money-lender and know the interest rate upfront","Right against threats, harassment or coercion during loan recovery (per RBI guidelines)","Right to receive proper loan documents and receipts","Right to respond after receiving a legal notice even in a cheque-bounce case"])},
  {heading:H.todo,items:tr(["सावकाराने त्रास दिल्यास स्थानिक पोलीस स्टेशन किंवा सहकार/सावकारी नियंत्रक कार्यालयाकडे तक्रार करा","चेक बाउंस नोटीस आल्यास १५ दिवसांत रक्कम भरा किंवा वकिलाचा सल्ला घेऊन उत्तर द्या","अनधिकृत ऑनलाइन कर्ज ऍप्सपासून सावध राहा; RBI च्या यादीत नसलेल्या ऍप्सकडून कर्ज घेऊ नका","बँकेच्या वसुली एजंटकडून गैरवर्तन झाल्यास बँकेकडे व RBI च्या Banking Ombudsman कडे तक्रार करा"],
   ["साहूकार परेशान करे तो नज़दीकी पुलिस स्टेशन या सहकार/साहूकारी नियंत्रक कार्यालय में शिकायत करें","चेक बाउंस नोटिस मिलने पर 15 दिनों में राशि चुकाएँ या वकील की सलाह लेकर जवाब दें","अनधिकृत ऑनलाइन लोन ऐप्स से सावधान रहें; RBI की सूची में न होने वाले ऐप्स से ऋण न लें","बैंक के वसूली एजेंट द्वारा दुर्व्यवहार होने पर बैंक व RBI के Banking Ombudsman से शिकायत करें"],
   ["If a money-lender harasses you, complain to the local police or the Money-Lending Registrar's office","On a cheque-bounce notice, pay within 15 days or consult a lawyer and respond","Beware of unauthorised loan apps; avoid apps not listed/approved by the RBI","Report misconduct by a bank's recovery agent to the bank and the RBI Banking Ombudsman"])}
 ],
 related:["२१"],
 faqs:[
  {q:tr("कर्ज वसुलीसाठी घरी येऊन धमकावणे कायदेशीर आहे का?","ऋण वसूली हेतु घर आकर धमकाना कानूनी है क्या?","Is it legal for recovery agents to come home and threaten me?"),
   a:tr("नाही. RBI च्या मार्गदर्शक तत्त्वांनुसार वसुली सकाळी ७ ते संध्याकाळी ७ या वेळेतच व सभ्य भाषेत व्हावी. धमकी किंवा छळ झाल्यास पोलिसांत तक्रार करता येते.","नहीं। RBI के दिशा-निर्देशों के अनुसार वसूली सुबह 7 से शाम 7 के बीच व सभ्य भाषा में होनी चाहिए। धमकी या उत्पीड़न होने पर पुलिस में शिकायत की जा सकती है।","No. Per RBI guidelines, recovery calls/visits must be between 7am-7pm and in a civil manner. You can report threats or harassment to the police.")},
  {q:tr("चेक बाउंस झाल्यास किती शिक्षा होऊ शकते?","चेक बाउंस होने पर क्या सज़ा हो सकती है?","What is the penalty for a bounced cheque?"),
   a:tr("कलम १३८ अंतर्गत २ वर्षांपर्यंत तुरुंगवास किंवा चेकच्या रकमेच्या दुप्पट रकमेपर्यंत दंड, किंवा दोन्ही होऊ शकतात.","धारा 138 के तहत 2 वर्ष तक की कैद या चेक राशि के दोगुने तक जुर्माना, या दोनों हो सकते हैं।","Under Section 138, punishment can be imprisonment up to 2 years, a fine up to twice the cheque amount, or both.")}
 ]};

D.TOPICS.accident={icon:"🚑",color:"#0b3d91",title:tr("अपघात नुकसान भरपाई हक्क","दुर्घटना क्षतिपूर्ति अधिकार","Accident Compensation Rights"),
 sections:[
  {heading:H.laws,items:tr(["मोटार वाहन कायदा, १९८८ (सुधारित २०१९)","मोटार अपघात दावा न्यायाधिकरण (MACT)","कर्मचारी नुकसान भरपाई कायदा, १९२३ (कामाच्या ठिकाणी अपघात)","हिट अँड रन प्रकरणांसाठी सर्वसमावेशक विमा योजना"],
   ["मोटर वाहन अधिनियम, 1988 (संशोधित 2019)","मोटर दुर्घटना दावा अधिकरण (MACT)","कर्मचारी प्रतिकर अधिनियम, 1923 (कार्यस्थल दुर्घटना)","हिट एंड रन मामलों हेतु व्यापक बीमा योजना"],
   ["Motor Vehicles Act, 1988 (amended 2019)","Motor Accident Claims Tribunal (MACT)","Employees' Compensation Act, 1923 (workplace accidents)","Comprehensive insurance scheme for hit-and-run cases"])},
  {heading:H.rights,items:tr(["अपघातात जखमी किंवा मृत्यू झाल्यास नुकसान भरपाई मागण्याचा हक्क (चूक कोणाची हे सिद्ध करण्याची गरज नाही — No-Fault Liability)","विमा कंपनी किंवा वाहनमालकाकडून भरपाईचा हक्क","हिट अँड रन प्रकरणातही सरकारी भरपाई योजनेचा हक्क","अपघातानंतर तात्काळ वैद्यकीय मदत नाकारता येत नाही (Good Samaritan कायदा संरक्षण)","कामाच्या ठिकाणी अपघात झाल्यास नियोक्त्याकडून भरपाईचा हक्क"],
   ["दुर्घटना में घायल या मृत्यु होने पर क्षतिपूर्ति माँगने का अधिकार (गलती किसकी है यह सिद्ध करने की आवश्यकता नहीं — No-Fault Liability)","बीमा कंपनी या वाहन मालिक से क्षतिपूर्ति का अधिकार","हिट एंड रन मामलों में भी सरकारी क्षतिपूर्ति योजना का अधिकार","दुर्घटना के बाद तत्काल चिकित्सा सहायता से इनकार नहीं किया जा सकता (Good Samaritan कानून संरक्षण)","कार्यस्थल पर दुर्घटना होने पर नियोक्ता से क्षतिपूर्ति का अधिकार"],
   ["Right to compensation for injury or death in an accident (No-Fault Liability — fault need not be proven)","Right to compensation from the insurance company or vehicle owner","Right to government compensation even in hit-and-run cases","Immediate medical aid cannot be refused after an accident (Good Samaritan law protection)","Right to compensation from the employer for a workplace accident"])},
  {heading:H.todo,items:tr(["अपघातानंतर शक्य तितक्या लवकर जवळच्या पोलीस स्टेशनला FIR नोंदवा","वैद्यकीय कागदपत्रे, पंचनामा व FIR प्रत जपून ठेवा","MACT कडे नुकसान भरपाईचा दावा साधारणतः ६ महिन्यांच्या आत दाखल करावा (उशीर झाल्यासही दावा करता येऊ शकतो)","हिट अँड रन प्रकरणात जनरल इन्शुरन्स कौन्सिलच्या योजनेखाली अर्ज करा"],
   ["दुर्घटना के बाद जल्द से जल्द नज़दीकी पुलिस स्टेशन में FIR दर्ज करें","चिकित्सा दस्तावेज़, पंचनामा व FIR की प्रति सुरक्षित रखें","MACT में क्षतिपूर्ति का दावा सामान्यतः 6 महीने के भीतर दाखिल करें (देरी होने पर भी दावा किया जा सकता है)","हिट एंड रन मामले में जनरल इंश्योरेंस काउंसिल की योजना के तहत आवेदन करें"],
   ["File an FIR at the nearest police station as soon as possible after the accident","Keep medical records, the panchnama and a copy of the FIR safe","File the MACT compensation claim generally within 6 months (late claims may still be considered)","In hit-and-run cases, apply under the General Insurance Council's scheme"])}
 ],
 related:["२१"],
 faqs:[
  {q:tr("अपघातात चूक माझी असली तरी भरपाई मिळते का?","दुर्घटना में गलती मेरी हो तो भी क्षतिपूर्ति मिलती है क्या?","Can I get compensation even if the accident was my fault?"),
   a:tr("थर्ड पार्टी विमा असल्यास समोरच्या व्यक्तीला (थर्ड पार्टी) भरपाई मिळते. स्वतःच्या नुकसानीसाठी 'ओन डॅमेज' किंवा वैयक्तिक अपघात विमा असल्यास तोही लागू होऊ शकतो.","थर्ड पार्टी बीमा होने पर सामने वाले व्यक्ति (थर्ड पार्टी) को क्षतिपूर्ति मिलती है। स्वयं के नुकसान हेतु 'ओन डैमेज' या व्यक्तिगत दुर्घटना बीमा हो तो वह भी लागू हो सकता है।","Third-party insurance covers the other party. Your own damage may be covered under 'own damage' or personal accident insurance, if you have it.")},
  {q:tr("MACT कडे दावा दाखल करायला वकील लागतोच का?","MACT में दावा दाखिल करने के लिए वकील ज़रूरी है क्या?","Is a lawyer mandatory to file a claim with MACT?"),
   a:tr("कायद्याने बंधनकारक नाही, पण प्रक्रिया तांत्रिक असल्याने वकिलाची मदत घेणे उचित ठरते. काही राज्यांत कायदेशीर सेवा प्राधिकरणामार्फत मोफत मदतही मिळू शकते.","कानूनन ज़रूरी नहीं, पर प्रक्रिया तकनीकी होने से वकील की मदद लेना उचित रहता है। कुछ राज्यों में विधिक सेवा प्राधिकरण से मुफ्त सहायता भी मिल सकती है।","Not legally mandatory, but since the process is technical, a lawyer's help is advisable. Free assistance may be available via the Legal Services Authority in some states.")}
 ]};
})();
