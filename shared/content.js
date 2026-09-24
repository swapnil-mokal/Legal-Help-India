/* Legal Helpdesk India — कायदेशीर माहिती (मराठी / हिंदी / English). */
window.LHI_DATA=(function(){
const ARTICLES = [
  {num:"१", cat:"structure", title:{mr:"कलम १ — भारताचे नाव व राज्यक्षेत्र",hi:"अनुच्छेद १ — भारत का नाम और राज्यक्षेत्र",en:"Article 1 — Name and Territory of India"}, sum:{mr:"भारत हा 'राज्यांचा संघ' आहे असे हे कलम सांगते. यामुळे भारताचे संघराज्यीय स्वरूप स्पष्ट होते.",hi:"यह अनुच्छेद बताता है कि भारत 'राज्यों का संघ' है। इससे भारत के संघीय स्वरूप की पुष्टि होती है।",en:"Declares India as a 'Union of States', establishing the federal character of the country."}},
  {num:"१४", cat:"rights", title:{mr:"कलम १४ — कायद्यासमोर समानता",hi:"अनुच्छेद १४ — कानून के समक्ष समानता",en:"Article 14 — Equality Before Law"}, sum:{mr:"प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्याचे समान संरक्षण मिळण्याचा हक्क आहे. सरकार कोणाशीही भेदभाव करू शकत नाही.",hi:"हर व्यक्ति को कानून के समक्ष समानता और कानून के समान संरक्षण का अधिकार है। राज्य किसी के साथ भेदभाव नहीं कर सकता।",en:"Guarantees every person equality before the law and equal protection of the laws within India."}},
  {num:"१५", cat:"rights", title:{mr:"कलम १५ — भेदभावास मनाई",hi:"अनुच्छेद १५ — भेदभाव का निषेध",en:"Article 15 — Prohibition of Discrimination"}, sum:{mr:"धर्म, वंश, जात, लिंग किंवा जन्मस्थान या आधारावर राज्य कोणत्याही नागरिकाशी भेदभाव करू शकत नाही.",hi:"धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर राज्य किसी नागरिक से भेदभाव नहीं कर सकता।",en:"Prohibits the State from discriminating against any citizen on grounds of religion, race, caste, sex or place of birth."}},
  {num:"१६", cat:"rights", title:{mr:"कलम १६ — सार्वजनिक नोकरीत समान संधी",hi:"अनुच्छेद १६ — लोक नियोजन में अवसर की समानता",en:"Article 16 — Equality of Opportunity in Public Employment"}, sum:{mr:"सरकारी नोकरीच्या बाबतीत सर्व नागरिकांना समान संधी मिळण्याचा हक्क देते.",hi:"सरकारी नौकरियों में सभी नागरिकों को समान अवसर देने का अधिकार।",en:"Ensures equal opportunity for all citizens in matters of public employment."}},
  {num:"१७", cat:"rights", title:{mr:"कलम १७ — अस्पृश्यता निर्मूलन",hi:"अनुच्छेद १७ — अस्पृश्यता का उन्मूलन",en:"Article 17 — Abolition of Untouchability"}, sum:{mr:"अस्पृश्यता कायद्याने नष्ट केली आहे व तिचे कोणत्याही स्वरूपातील आचरण हा दंडनीय अपराध आहे.",hi:"अस्पृश्यता का अंत किया गया है और इसका किसी भी रूप में आचरण दंडनीय अपराध है।",en:"Abolishes untouchability in any form; its practice is a punishable offence."}},
  {num:"१८", cat:"rights", title:{mr:"कलम १८ — पदव्यांची समाप्ती",hi:"अनुच्छेद १८ — उपाधियों का अंत",en:"Article 18 — Abolition of Titles"}, sum:{mr:"लष्करी व शैक्षणिक पदव्या वगळता इतर कोणतीही पदवी राज्य देऊ शकत नाही.",hi:"सैन्य और शैक्षणिक उपाधियों को छोड़कर राज्य कोई उपाधि प्रदान नहीं कर सकता।",en:"Prohibits the State from conferring titles, except military or academic distinctions."}},
  {num:"१९", cat:"rights", title:{mr:"कलम १९ — स्वातंत्र्याचे हक्क",hi:"अनुच्छेद १९ — स्वतंत्रता का अधिकार",en:"Article 19 — Right to Freedom"}, sum:{mr:"भाषण, अभिव्यक्ती, संघटना, संचार, निवासस्थान आणि व्यवसाय निवडण्याचे स्वातंत्र्य देते (योग्य बंधनांसह).",hi:"भाषण, अभिव्यक्ति, संगठन, आवागमन, निवास और व्यवसाय चुनने की स्वतंत्रता देता है (उचित प्रतिबंधों के साथ)।",en:"Guarantees freedoms of speech, expression, assembly, association, movement, residence and profession, subject to reasonable restrictions."}},
  {num:"२०", cat:"rights", title:{mr:"कलम २० — अपराधांबाबत संरक्षण",hi:"अनुच्छेद २० — अपराधों में दोषसिद्धि से संरक्षण",en:"Article 20 — Protection in Respect of Conviction"}, sum:{mr:"एकाच अपराधासाठी दुहेरी शिक्षा नाही, पूर्वलक्षी कायदा नाही आणि स्वतःविरुद्ध साक्ष देण्याची सक्ती नाही, याची हमी देते.",hi:"एक ही अपराध के लिए दोहरी सजा नहीं, पूर्वव्यापी कानून नहीं, और स्वयं के विरुद्ध गवाही देने की मजबूरी नहीं।",en:"Protects against double jeopardy, ex-post-facto laws, and self-incrimination."}},
  {num:"२१", cat:"rights", title:{mr:"कलम २१ — जीवन व वैयक्तिक स्वातंत्र्याचा हक्क",hi:"अनुच्छेद २१ — जीवन और व्यक्तिगत स्वतंत्रता का अधिकार",en:"Article 21 — Right to Life and Personal Liberty"}, sum:{mr:"कायद्याने ठरवलेल्या पद्धतीशिवाय कोणाचेही जीवन किंवा वैयक्तिक स्वातंत्र्य हिरावून घेतले जाऊ शकत नाही. यात सन्मानाने जगण्याचा हक्क समाविष्ट आहे.",hi:"कानून द्वारा स्थापित प्रक्रिया के बिना किसी के जीवन या व्यक्तिगत स्वतंत्रता को नहीं छीना जा सकता। इसमें सम्मान से जीने का अधिकार शामिल है।",en:"No person shall be deprived of life or personal liberty except according to procedure established by law; interpreted to include the right to live with dignity."}},
  {num:"२१अ", cat:"rights", title:{mr:"कलम २१अ — शिक्षणाचा हक्क",hi:"अनुच्छेद २१क — शिक्षा का अधिकार",en:"Article 21A — Right to Education"}, sum:{mr:"६ ते १४ वयोगटातील सर्व मुलांना मोफत व सक्तीच्या शिक्षणाचा हक्क देते.",hi:"६ से १४ वर्ष के सभी बच्चों को मुफ्त और अनिवार्य शिक्षा का अधिकार।",en:"Guarantees free and compulsory education to all children aged 6 to 14 years."}},
  {num:"२२", cat:"rights", title:{mr:"कलम २२ — अटकेपासून संरक्षण",hi:"अनुच्छेद २२ — गिरफ्तारी से संरक्षण",en:"Article 22 — Protection Against Arrest"}, sum:{mr:"अटक झालेल्या व्यक्तीला अटकेचे कारण कळण्याचा, वकिलाचा सल्ला घेण्याचा आणि २४ तासांत मॅजिस्ट्रेटसमोर हजर करण्याचा हक्क देते.",hi:"गिरफ्तार व्यक्ति को गिरफ्तारी का कारण जानने, वकील से सलाह लेने और २४ घंटे में मजिस्ट्रेट के सामने पेश किए जाने का अधिकार।",en:"Gives an arrested person the right to be informed of the grounds of arrest, consult a lawyer, and be produced before a magistrate within 24 hours."}},
  {num:"२३", cat:"rights", title:{mr:"कलम २३ — मानवी तस्करीस मनाई",hi:"अनुच्छेद २३ — मानव तस्करी का निषेध",en:"Article 23 — Prohibition of Human Trafficking"}, sum:{mr:"मानवी तस्करी आणि वेठबिगारी यांना बेकायदेशीर ठरवते.",hi:"मानव तस्करी और बेगार (बलात श्रम) को अवैध घोषित करता है।",en:"Prohibits human trafficking and forced labour (begar)."}},
  {num:"२४", cat:"rights", title:{mr:"कलम २४ — बालमजुरीस मनाई",hi:"अनुच्छेद २४ — बाल श्रम का निषेध",en:"Article 24 — Prohibition of Child Labour"}, sum:{mr:"१४ वर्षांखालील मुलांना कारखाने, खाणी किंवा धोकादायक कामांमध्ये कामाला लावण्यास बंदी घालते.",hi:"१४ वर्ष से कम आयु के बच्चों को कारखानों, खदानों या खतरनाक कार्यों में लगाने पर रोक।",en:"Prohibits employment of children below 14 years in factories, mines, or hazardous occupations."}},
  {num:"२५", cat:"rights", title:{mr:"कलम २५ — धार्मिक स्वातंत्र्य",hi:"अनुच्छेद २५ — धार्मिक स्वतंत्रता",en:"Article 25 — Freedom of Religion"}, sum:{mr:"सद्सद्विवेकबुद्धीचे स्वातंत्र्य आणि कोणताही धर्म मानण्याचा, आचरण्याचा व प्रसार करण्याचा हक्क देते.",hi:"अंतःकरण की स्वतंत्रता और किसी भी धर्म को मानने, आचरण करने व प्रचार करने का अधिकार।",en:"Guarantees freedom of conscience and the right to freely profess, practise and propagate religion."}},
  {num:"२९", cat:"rights", title:{mr:"कलम २९ — अल्पसंख्याकांच्या हितसंबंधांचे संरक्षण",hi:"अनुच्छेद २९ — अल्पसंख्यकों के हितों का संरक्षण",en:"Article 29 — Protection of Interests of Minorities"}, sum:{mr:"कोणत्याही वर्गाला स्वतःची भाषा, लिपी व संस्कृती जपण्याचा हक्क देते.",hi:"किसी भी वर्ग को अपनी भाषा, लिपि और संस्कृति बनाए रखने का अधिकार।",en:"Gives any section of citizens the right to conserve its distinct language, script, or culture."}},
  {num:"३०", cat:"rights", title:{mr:"कलम ३० — शैक्षणिक संस्था स्थापण्याचा हक्क",hi:"अनुच्छेद ३० — शिक्षण संस्थाएं स्थापित करने का अधिकार",en:"Article 30 — Right to Establish Educational Institutions"}, sum:{mr:"अल्पसंख्याकांना स्वतःच्या पसंतीच्या शैक्षणिक संस्था स्थापन करण्याचा व त्यांचे व्यवस्थापन करण्याचा हक्क देते.",hi:"अल्पसंख्यकों को अपनी पसंद की शिक्षण संस्थाएं स्थापित करने और उनका प्रबंधन करने का अधिकार।",en:"Allows minorities to establish and administer educational institutions of their choice."}},
  {num:"३२", cat:"rights", title:{mr:"कलम ३२ — घटनात्मक उपायांचा हक्क",hi:"अनुच्छेद ३२ — संवैधानिक उपचारों का अधिकार",en:"Article 32 — Right to Constitutional Remedies"}, sum:{mr:"मूलभूत हक्कांच्या अंमलबजावणीसाठी थेट सर्वोच्च न्यायालयात जाण्याचा हक्क देते. डॉ. आंबेडकरांनी याला 'संविधानाचा आत्मा' म्हटले आहे.",hi:"मौलिक अधिकारों को लागू करवाने के लिए सीधे सर्वोच्च न्यायालय जाने का अधिकार। डॉ. आंबेडकर ने इसे 'संविधान की आत्मा' कहा था।",en:"Allows a person to move the Supreme Court directly for enforcement of fundamental rights; called the 'heart and soul' of the Constitution by Dr. Ambedkar."}},
  {num:"४४", cat:"directive", title:{mr:"कलम ४४ — समान नागरी संहिता",hi:"अनुच्छेद ४४ — समान नागरिक संहिता",en:"Article 44 — Uniform Civil Code"}, sum:{mr:"देशभरातील सर्व नागरिकांसाठी समान नागरी कायदा तयार करण्याचा प्रयत्न करावा असे राज्याला सांगणारे मार्गदर्शक तत्त्व.",hi:"राज्य को नागरिकों के लिए एक समान नागरिक संहिता बनाने का प्रयास करने का निर्देशक सिद्धांत।",en:"A Directive Principle urging the State to work towards a Uniform Civil Code for all citizens."}},
  {num:"५१अ", cat:"duties", title:{mr:"कलम ५१अ — मूलभूत कर्तव्ये",hi:"अनुच्छेद ५१क — मौलिक कर्तव्य",en:"Article 51A — Fundamental Duties"}, sum:{mr:"संविधानाचा आदर करणे, राष्ट्रध्वजाचा सन्मान राखणे, पर्यावरणाचे रक्षण करणे यांसारखी नागरिकांची १० मूलभूत कर्तव्ये सांगते.",hi:"संविधान का सम्मान करना, राष्ट्रध्वज का आदर रखना, पर्यावरण की रक्षा करना जैसे नागरिकों के १० मौलिक कर्तव्य बताता है।",en:"Lists 10 fundamental duties of citizens, including respecting the Constitution, the national flag, and protecting the environment."}},
  {num:"१२४", cat:"judiciary", title:{mr:"कलम १२४ — सर्वोच्च न्यायालयाची स्थापना",hi:"अनुच्छेद १२४ — सर्वोच्च न्यायालय की स्थापना",en:"Article 124 — Establishment of the Supreme Court"}, sum:{mr:"भारताच्या सर्वोच्च न्यायालयाची स्थापना, न्यायाधीशांची नियुक्ती आणि पात्रता याबद्दल तरतूद करते.",hi:"भारत के सर्वोच्च न्यायालय की स्थापना, न्यायाधीशों की नियुक्ति और योग्यता के बारे में प्रावधान।",en:"Provides for the establishment of the Supreme Court of India and the appointment and qualifications of its judges."}},
  {num:"२२६", cat:"judiciary", title:{mr:"कलम २२६ — उच्च न्यायालयाचे अधिकार",hi:"अनुच्छेद २२६ — उच्च न्यायालय की शक्तियाँ",en:"Article 226 — Powers of High Courts"}, sum:{mr:"मूलभूत हक्कांसह इतर कोणत्याही हक्कांच्या अंमलबजावणीसाठी उच्च न्यायालयाला रिट जारी करण्याचा अधिकार देते.",hi:"मौलिक अधिकारों सहित अन्य अधिकारों के प्रवर्तन के लिए उच्च न्यायालय को रिट जारी करने की शक्ति देता है।",en:"Empowers High Courts to issue writs for enforcement of fundamental rights and other legal rights."}},
  {num:"३५२", cat:"structure", title:{mr:"कलम ३५२ — राष्ट्रीय आणीबाणी",hi:"अनुच्छेद ३५२ — राष्ट्रीय आपातकाल",en:"Article 352 — National Emergency"}, sum:{mr:"युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंड यामुळे राष्ट्रपतींना राष्ट्रीय आणीबाणी घोषित करण्याचा अधिकार देते.",hi:"युद्ध, बाहरी आक्रमण या सशस्त्र विद्रोह की स्थिति में राष्ट्रपति को राष्ट्रीय आपातकाल घोषित करने की शक्ति।",en:"Empowers the President to declare a national emergency in case of war, external aggression, or armed rebellion."}},
  {num:"३५६", cat:"structure", title:{mr:"कलम ३५६ — राष्ट्रपती राजवट",hi:"अनुच्छेद ३५६ — राष्ट्रपति शासन",en:"Article 356 — President's Rule"}, sum:{mr:"राज्यातील घटनात्मक यंत्रणा कोलमडल्यास त्या राज्यात राष्ट्रपती राजवट लागू करण्याची तरतूद.",hi:"किसी राज्य में संवैधानिक तंत्र विफल होने पर वहाँ राष्ट्रपति शासन लागू करने का प्रावधान।",en:"Provides for imposition of President's Rule in a State if its constitutional machinery fails."}},
  {num:"३६८", cat:"structure", title:{mr:"कलम ३६८ — घटनादुरुस्तीचा अधिकार",hi:"अनुच्छेद ३६८ — संविधान संशोधन की शक्ति",en:"Article 368 — Power to Amend the Constitution"}, sum:{mr:"संसदेला संविधानात दुरुस्ती करण्याचा अधिकार व त्यासाठीची प्रक्रिया सांगते.",hi:"संसद को संविधान में संशोधन करने की शक्ति और उसकी प्रक्रिया बताता है।",en:"Gives Parliament the power to amend the Constitution and lays down the procedure for doing so."}}
];
const TOPICS = {
  family: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="8" r="2.3"/><circle cx="17" cy="8" r="2.3"/><circle cx="12" cy="6" r="1.8"/><path d="M2 20v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1"/><path d="M12 20v-1.5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3V20"/></svg>',
    color: 'c-maroon',
    title: {mr:"कौटुंबिक कायदा",hi:"पारिवारिक कानून",en:"Family Law"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["हिंदू विवाह कायदा, १९५५","विशेष विवाह कायदा, १९५४","हिंदू दत्तक व निर्वाह कायदा","कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, २००५"],
          hi:["हिंदू विवाह अधिनियम, 1955","विशेष विवाह अधिनियम, 1954","हिंदू दत्तक और भरण-पोषण अधिनियम","घरेलू हिंसा से महिला संरक्षण अधिनियम, 2005"],
          en:["Hindu Marriage Act, 1955","Special Marriage Act, 1954","Hindu Adoption & Maintenance Act","Protection of Women from Domestic Violence Act, 2005"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["घटस्फोटानंतर पोटगीचा हक्क","मुलांच्या ताब्याचा हक्क","मुली व मुलगे यांना समान वारसा हक्क","कौटुंबिक हिंसेपासून संरक्षण मिळण्याचा हक्क"],
          hi:["तलाक के बाद गुजारा भत्ता पाने का अधिकार","बच्चों की कस्टडी का अधिकार","बेटियों और बेटों को समान विरासत अधिकार","घरेलू हिंसा से सुरक्षा पाने का अधिकार"],
          en:["Right to alimony after divorce","Right to child custody","Equal inheritance rights for daughters and sons","Right to protection from domestic violence"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["जवळच्या कौटुंबिक न्यायालयात अर्ज करा","आधी मध्यस्थी (mediation) केंद्राचा सल्ला घ्या","गरज असल्यास महिला हेल्पलाइन १८१ वर संपर्क करा","नोंदणीकृत वकिलाचा सल्ला घ्या"],
          hi:["नज़दीकी परिवार न्यायालय में आवेदन करें","पहले मध्यस्थता (mediation) केंद्र से सलाह लें","ज़रूरत हो तो महिला हेल्पलाइन 181 पर संपर्क करें","पंजीकृत वकील से सलाह लें"],
          en:["File an application at your nearest Family Court","First consult a mediation centre","If needed, contact the Women's Helpline 181","Consult a registered lawyer"]
        }
      }
    ]
  },
  property: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9 21v-6h6v6"/></svg>',
    color: 'c-green',
    title: {mr:"मालमत्ता हक्क",hi:"संपत्ति अधिकार",en:"Property Rights"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["नोंदणी कायदा, १९०८","मालमत्ता हस्तांतरण कायदा, १८८२","रिअल इस्टेट (नियमन) कायदा (RERA), २०१६","राज्याचे भूमी अभिलेख कायदे"],
          hi:["पंजीकरण अधिनियम, 1908","संपत्ति हस्तांतरण अधिनियम, 1882","रियल एस्टेट (विनियमन) अधिनियम (RERA), 2016","राज्य के भूमि अभिलेख कानून"],
          en:["Registration Act, 1908","Transfer of Property Act, 1882","Real Estate (Regulation) Act (RERA), 2016","State land records laws"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["मालकी हक्काची अधिकृत नोंदणी करण्याचा हक्क","वारसा हक्काने मालमत्ता मिळण्याचा हक्क","फसवणुकीविरुद्ध दाद मागण्याचा हक्क","बिल्डरकडून विलंब झाल्यास RERA मध्ये तक्रार करण्याचा हक्क"],
          hi:["स्वामित्व का आधिकारिक पंजीकरण कराने का अधिकार","विरासत में संपत्ति पाने का अधिकार","धोखाधड़ी के विरुद्ध शिकायत करने का अधिकार","बिल्डर की देरी पर RERA में शिकायत का अधिकार"],
          en:["Right to officially register ownership","Right to inherited property","Right to seek redressal against fraud","Right to file a complaint with RERA against builder delays"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["खरेदीपूर्वी ७/१२ उतारा व टायटल तपासा","दस्त नोंदणी उपनिबंधक कार्यालयात करा","वाद असल्यास दिवाणी न्यायालयात दाद मागा","गरज पडल्यास RERA कडे तक्रार करा"],
          hi:["खरीदने से पहले 7/12 उतारा और टाइटल जांचें","दस्तावेज़ पंजीकरण उप-निबंधक कार्यालय में करें","विवाद होने पर दीवानी न्यायालय में जाएं","ज़रूरत हो तो RERA में शिकायत करें"],
          en:["Check land records and title before buying","Register documents at the Sub-Registrar's office","Approach civil court in case of disputes","File a complaint with RERA if needed"]
        }
      }
    ]
  },
  women: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><line x1="12" y1="14" x2="12" y2="21"/><line x1="9" y1="18" x2="15" y2="18"/></svg>',
    color: 'c-blue',
    title: {mr:"महिला हक्क",hi:"महिला अधिकार",en:"Women's Rights"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["कौटुंबिक हिंसाचार कायदा, २००५","कामाच्या ठिकाणी लैंगिक छळ प्रतिबंधक कायदा (POSH), २०१३","हुंडाबंदी कायदा, १९६१","बलात्कार व लैंगिक अत्याचारविरोधी फौजदारी कायदे"],
          hi:["घरेलू हिंसा अधिनियम, 2005","कार्यस्थल पर यौन उत्पीड़न रोकथाम अधिनियम (POSH), 2013","दहेज प्रतिषेध अधिनियम, 1961","बलात्कार व यौन उत्पीड़न विरोधी दंड कानून"],
          en:["Domestic Violence Act, 2005","Prevention of Sexual Harassment at Workplace Act (POSH), 2013","Dowry Prohibition Act, 1961","Criminal laws against rape and sexual assault"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["सुरक्षित कामाच्या ठिकाणाचा हक्क","घरगुती हिंसेपासून संरक्षण आदेश मिळण्याचा हक्क","ओळख गोपनीय ठेवण्याचा हक्क","मोफत कायदेशीर मदत मिळण्याचा हक्क"],
          hi:["सुरक्षित कार्यस्थल का अधिकार","घरेलू हिंसा से संरक्षण आदेश पाने का अधिकार","पहचान गोपनीय रखने का अधिकार","मुफ्त कानूनी सहायता पाने का अधिकार"],
          en:["Right to a safe workplace","Right to a protection order from domestic violence","Right to confidentiality of identity","Right to free legal aid"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["जवळच्या पोलीस स्टेशनला FIR नोंदवा","महिला हेल्पलाइन १०९१ / १८१ वर संपर्क करा","कामाच्या ठिकाणी असल्यास अंतर्गत तक्रार समितीकडे (ICC) तक्रार करा","राष्ट्रीय/राज्य महिला आयोगाकडे तक्रार करा"],
          hi:["नज़दीकी पुलिस स्टेशन में FIR दर्ज करें","महिला हेल्पलाइन 1091 / 181 पर संपर्क करें","कार्यस्थल पर हो तो आंतरिक शिकायत समिति (ICC) से शिकायत करें","राष्ट्रीय/राज्य महिला आयोग में शिकायत करें"],
          en:["File an FIR at your nearest police station","Contact Women's Helpline 1091 / 181","If at workplace, complain to the Internal Complaints Committee (ICC)","File a complaint with the National/State Women's Commission"]
        }
      }
    ]
  },
  police: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 20 5.5V11c0 5.2-3.4 9-8 11-4.6-2-8-5.8-8-11V5.5Z"/><path d="M12 8.5l1.1 2.2 2.4.35-1.75 1.7.4 2.4L12 14l-2.15 1.15.4-2.4-1.75-1.7 2.4-.35Z"/></svg>',
    color: 'c-gold',
    title: {mr:"पोलीस आणि नागरिक",hi:"पुलिस और नागरिक",en:"Police & Citizens"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["भारतीय नागरिक सुरक्षा संहिता (BNSS)","संविधानाचे कलम २०, २१, २२ (अटक व फौजदारी प्रक्रियेसंबंधी संरक्षण)"],
          hi:["भारतीय नागरिक सुरक्षा संहिता (BNSS)","संविधान के अनुच्छेद 20, 21, 22 (गिरफ्तारी व दांडिक प्रक्रिया से संरक्षण)"],
          en:["Bharatiya Nagarik Suraksha Sanhita (BNSS)","Articles 20, 21, 22 of the Constitution (protection related to arrest and criminal procedure)"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["अटकेचे कारण जाणून घेण्याचा हक्क","वकिलाला भेटण्याचा हक्क","२४ तासांत मॅजिस्ट्रेटसमोर हजर करण्याचा हक्क","विनाकारण छळ न होण्याचा हक्क"],
          hi:["गिरफ्तारी का कारण जानने का अधिकार","वकील से मिलने का अधिकार","24 घंटे में मजिस्ट्रेट के सामने पेश होने का अधिकार","बिना कारण उत्पीड़न न होने का अधिकार"],
          en:["Right to know the grounds of arrest","Right to consult a lawyer","Right to be produced before a magistrate within 24 hours","Right against harassment without cause"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["पोलिसांनी FIR नोंदवण्यास नकार दिल्यास वरिष्ठ अधिकारी/SP कडे तक्रार करा","ऑनलाइन FIR सुविधा वापरा","गरज असल्यास न्यायालयात खासगी तक्रार (private complaint) दाखल करा"],
          hi:["पुलिस FIR दर्ज करने से मना करे तो वरिष्ठ अधिकारी/SP से शिकायत करें","ऑनलाइन FIR सुविधा का उपयोग करें","ज़रूरत हो तो न्यायालय में निजी शिकायत (private complaint) दर्ज करें"],
          en:["If police refuse to file an FIR, complain to a senior officer/SP","Use the online FIR facility","If needed, file a private complaint in court"]
        }
      }
    ]
  },
  education: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9 12 4l10 5-10 5Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
    color: 'c-navy',
    title: {mr:"शिक्षण आणि नोकरी",hi:"शिक्षा और रोज़गार",en:"Education & Employment"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["शिक्षण हक्क कायदा (RTE), २००९","किमान वेतन कायदा","कामगार संहिता (Code on Wages)"],
          hi:["शिक्षा का अधिकार अधिनियम (RTE), 2009","न्यूनतम मज़दूरी अधिनियम","श्रम संहिता (Code on Wages)"],
          en:["Right to Education Act (RTE), 2009","Minimum Wages Act","Code on Wages"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["६ ते १४ वयोगटातील मोफत व सक्तीच्या शिक्षणाचा हक्क","समान कामासाठी समान वेतनाचा हक्क","कामाच्या ठिकाणी सुरक्षिततेचा हक्क","EPF व ग्रॅच्युईटीचा हक्क"],
          hi:["6 से 14 वर्ष तक मुफ्त और अनिवार्य शिक्षा का अधिकार","समान कार्य के लिए समान वेतन का अधिकार","कार्यस्थल पर सुरक्षा का अधिकार","EPF और ग्रेच्युटी का अधिकार"],
          en:["Right to free and compulsory education for ages 6–14","Right to equal pay for equal work","Right to workplace safety","Right to EPF and gratuity"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["शाळेने प्रवेश नाकारल्यास शिक्षण अधिकाऱ्याकडे तक्रार करा","पगार थकल्यास कामगार आयुक्त कार्यालयात तक्रार करा","कामगार न्यायालयात दाद मागता येते"],
          hi:["स्कूल प्रवेश देने से मना करे तो शिक्षा अधिकारी से शिकायत करें","वेतन बकाया हो तो श्रम आयुक्त कार्यालय में शिकायत करें","श्रम न्यायालय में भी शिकायत की जा सकती है"],
          en:["If a school refuses admission, complain to the education officer","If wages are pending, complain to the Labour Commissioner's office","You can also approach the labour court"]
        }
      }
    ]
  },
  senior: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0 4.4-8.8 10.4-8.8 10.4S3.2 13 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9Z"/><line x1="12" y1="7.5" x2="12" y2="12.5"/><line x1="9.5" y1="10" x2="14.5" y2="10"/></svg>',
    color: 'c-maroon',
    title: {mr:"वयोवृद्धांचे हक्क",hi:"वरिष्ठ नागरिकों के अधिकार",en:"Senior Citizens' Rights"},
    sections: [
      {
        heading:{mr:"मुख्य कायदे",hi:"मुख्य कानून",en:"Key Laws"},
        items:{
          mr:["पालक व ज्येष्ठ नागरिकांचे निर्वाह व कल्याण कायदा, २००७"],
          hi:["माता-पिता और वरिष्ठ नागरिक भरण-पोषण व कल्याण अधिनियम, 2007"],
          en:["Maintenance and Welfare of Parents and Senior Citizens Act, 2007"]
        }
      },
      {
        heading:{mr:"तुमचे हक्क",hi:"आपके अधिकार",en:"Your Rights"},
        items:{
          mr:["मुलांकडून निर्वाह (maintenance) मिळण्याचा हक्क","स्वतःच्या मालमत्तेच्या संरक्षणाचा हक्क","ज्येष्ठ नागरिक न्यायाधिकरणात तक्रार करण्याचा हक्क"],
          hi:["बच्चों से भरण-पोषण पाने का अधिकार","स्वयं की संपत्ति के संरक्षण का अधिकार","वरिष्ठ नागरिक न्यायाधिकरण में शिकायत करने का अधिकार"],
          en:["Right to receive maintenance from children","Right to protection of one's own property","Right to complain before the Senior Citizens' Tribunal"]
        }
      },
      {
        heading:{mr:"काय करावे",hi:"क्या करें",en:"What To Do"},
        items:{
          mr:["उपविभागीय अधिकारी / Maintenance Tribunal कडे अर्ज करा","ज्येष्ठ नागरिक हेल्पलाइन १४५६७ वर संपर्क करा","गरज असल्यास स्थानिक पोलिसांची मदत घ्या"],
          hi:["उपविभागीय अधिकारी / Maintenance Tribunal में आवेदन करें","वरिष्ठ नागरिक हेल्पलाइन 14567 पर संपर्क करें","ज़रूरत हो तो स्थानीय पुलिस की मदद लें"],
          en:["Apply to the Sub-Divisional Officer / Maintenance Tribunal","Contact the Senior Citizens' Helpline 14567","If needed, seek help from local police"]
        }
      }
    ]
  }
};
const DOCS = [
  {key:"police", icon:"📝", color:"c-maroon",
    title:{mr:"पोलीस तक्रार",hi:"पुलिस शिकायत",en:"Police Complaint"},
    desc:{mr:"पोलीस स्टेशनमध्ये देण्यासाठी लेखी तक्रारीचा नमुना.",hi:"पुलिस स्टेशन में देने के लिए लिखित शिकायत का नमूना।",en:"A written complaint format to submit at a police station."},
    points:{
      mr:["तक्रारदाराचे पूर्ण नाव, पत्ता व संपर्क क्रमांक","घटनेची तारीख, वेळ व नेमके ठिकाण","घडलेल्या घटनेचे सविस्तर वर्णन","साक्षीदार असल्यास त्यांची माहिती","तक्रारदाराची स्वाक्षरी व तारीख"],
      hi:["शिकायतकर्ता का पूरा नाम, पता व संपर्क नंबर","घटना की तारीख, समय व सही स्थान","घटना का विस्तृत विवरण","गवाह हों तो उनकी जानकारी","शिकायतकर्ता के हस्ताक्षर व तारीख"],
      en:["Complainant's full name, address, and contact number","Date, time, and exact location of the incident","Detailed description of what happened","Witness details, if any","Complainant's signature and date"]
    }},
  {key:"notice", icon:"📄", color:"c-navy",
    title:{mr:"कायदेशीर नोटीस",hi:"कानूनी नोटिस",en:"Legal Notice"},
    desc:{mr:"वादाबाबत औपचारिक पूर्वसूचना देण्यासाठी वापरला जाणारा नमुना.",hi:"विवाद की औपचारिक पूर्व-सूचना देने हेतु उपयोगी नमूना।",en:"A format used to give formal advance notice about a dispute."},
    points:{
      mr:["पाठवणारा व मिळणारा यांचे संपूर्ण तपशील","वादाचे कारण व घटनाक्रम","स्पष्ट मागणी (उदा. रक्कम परत, कारवाई थांबवणे)","प्रतिसादासाठी वाजवी मुदत (उदा. १५ दिवस)","वकिलाची स्वाक्षरी व शिक्का"],
      hi:["भेजने वाले व प्राप्तकर्ता का पूरा विवरण","विवाद का कारण व घटनाक्रम","स्पष्ट मांग (जैसे राशि वापसी, कार्रवाई रोकना)","उत्तर हेतु उचित समय-सीमा (जैसे 15 दिन)","वकील के हस्ताक्षर व मुहर"],
      en:["Full details of sender and recipient","Cause and sequence of the dispute","Clear demand (e.g. refund, stop an action)","Reasonable deadline to respond (e.g. 15 days)","Lawyer's signature and stamp"]
    }},
  {key:"marriage", icon:"💍", color:"c-gold",
    title:{mr:"विवाह नोंदणी अर्ज",hi:"विवाह पंजीकरण आवेदन",en:"Marriage Registration Application"},
    desc:{mr:"विवाह नोंदणी कार्यालयात सादर करण्यासाठीचा अर्ज.",hi:"विवाह पंजीकरण कार्यालय में जमा करने हेतु आवेदन।",en:"Application to submit at the marriage registration office."},
    points:{
      mr:["दोन्ही पक्षांचे ओळखपत्र व वयाचा पुरावा","विवाहाचा फोटो/निमंत्रण पत्रिका","दोन साक्षीदारांची ओळखपत्रे","रहिवासी पुरावा","विहित नमुन्यातील भरलेला अर्ज"],
      hi:["दोनों पक्षों के पहचान पत्र व आयु प्रमाण","विवाह की फोटो/निमंत्रण पत्रिका","दो गवाहों के पहचान पत्र","निवास प्रमाण","निर्धारित प्रारूप में भरा हुआ आवेदन"],
      en:["ID and age proof of both parties","Wedding photo/invitation card","ID proof of two witnesses","Residence proof","Completed application in the prescribed format"]
    }},
  {key:"rent", icon:"🏠", color:"c-green",
    title:{mr:"भाडेकरार",hi:"किराया समझौता",en:"Rent Agreement"},
    desc:{mr:"मालक व भाडेकरू यांच्यातील अटी नमूद करणारा करार.",hi:"मालिक व किरायेदार के बीच शर्तें दर्शाने वाला अनुबंध।",en:"An agreement stating terms between landlord and tenant."},
    points:{
      mr:["मालक व भाडेकरू यांचे संपूर्ण तपशील","मासिक भाडे व अनामत रक्कम (Deposit)","कराराचा कालावधी (उदा. ११ महिने)","देखभाल व वीज-पाणी बिलाची जबाबदारी","दोन्ही पक्षांची व साक्षीदारांची स्वाक्षरी"],
      hi:["मालिक व किरायेदार का पूरा विवरण","मासिक किराया व जमा राशि (Deposit)","अनुबंध की अवधि (जैसे 11 महीने)","रखरखाव व बिजली-पानी बिल की जिम्मेदारी","दोनों पक्षों व गवाहों के हस्ताक्षर"],
      en:["Full details of landlord and tenant","Monthly rent and deposit amount","Duration of agreement (e.g. 11 months)","Responsibility for maintenance and utility bills","Signatures of both parties and witnesses"]
    }},
  {key:"affidavit", icon:"✍️", color:"c-blue",
    title:{mr:"प्रतिज्ञापत्र (Affidavit)",hi:"शपथ पत्र (Affidavit)",en:"Affidavit"},
    desc:{mr:"एखादी गोष्ट खरी असल्याची शपथपूर्वक लेखी हमी.",hi:"किसी बात के सत्य होने की शपथपूर्वक लिखित गारंटी।",en:"A sworn written statement that something is true."},
    points:{
      mr:["प्रतिज्ञा करणाऱ्याचे नाव, वय व पत्ता","विधानांची क्रमांकित यादी","सत्यतेची हमी देणारे वाक्य","नोटरी/शपथ आयुक्तांसमोर स्वाक्षरी","योग्य किमतीच्या स्टॅम्प पेपरवर तयार करणे आवश्यक"],
      hi:["शपथकर्ता का नाम, आयु व पता","विधानों की क्रमांकित सूची","सत्यता की गारंटी देने वाला वाक्य","नोटरी/शपथ आयुक्त के समक्ष हस्ताक्षर","उचित मूल्य के स्टाम्प पेपर पर बनाना आवश्यक"],
      en:["Deponent's name, age, and address","Numbered list of statements","A sentence affirming truthfulness","Signature before a Notary/Oath Commissioner","Must be prepared on an appropriately valued stamp paper"]
    }},
  {key:"rti", icon:"📬", color:"c-maroon",
    title:{mr:"माहिती अधिकार अर्ज (RTI)",hi:"सूचना का अधिकार आवेदन (RTI)",en:"RTI Application"},
    desc:{mr:"सरकारी विभागाकडून माहिती मागवण्यासाठीचा अर्ज.",hi:"सरकारी विभाग से जानकारी माँगने हेतु आवेदन।",en:"An application to request information from a government department."},
    points:{
      mr:["संबंधित सरकारी विभाग/कार्यालयाचे नाव","मागितलेली माहिती स्पष्टपणे नमूद करा","अर्जदाराचा पत्ता व संपर्क","विहित शुल्क भरणे आवश्यक","सर्वसाधारणपणे ३० दिवसांत उत्तर अपेक्षित"],
      hi:["संबंधित सरकारी विभाग/कार्यालय का नाम","मांगी गई जानकारी स्पष्ट रूप से लिखें","आवेदक का पता व संपर्क","निर्धारित शुल्क भरना आवश्यक","सामान्यतः 30 दिनों में उत्तर अपेक्षित"],
      en:["Name of the concerned government department/office","Clearly state the information requested","Applicant's address and contact","Prescribed fee must be paid","A response is generally expected within 30 days"]
    }},
  {key:"resignation", icon:"💼", color:"c-navy",
    title:{mr:"राजीनामा पत्र",hi:"त्यागपत्र",en:"Resignation Letter"},
    desc:{mr:"नोकरीचा राजीनामा देण्यासाठीचे औपचारिक पत्र.",hi:"नौकरी से इस्तीफा देने हेतु औपचारिक पत्र।",en:"A formal letter to resign from a job."},
    points:{
      mr:["तारीख व प्राप्तकर्त्याचे तपशील","राजीनाम्याचे स्पष्ट विधान","शेवटचा कामाचा दिवस (नोटीस पिरियडनुसार)","आभार व्यक्त करणारी सौजन्यपूर्ण भाषा","स्वाक्षरी"],
      hi:["तारीख व प्राप्तकर्ता का विवरण","इस्तीफे का स्पष्ट विधान","अंतिम कार्यदिवस (नोटिस अवधि अनुसार)","आभार प्रकट करने वाली सौम्य भाषा","हस्ताक्षर"],
      en:["Date and recipient's details","Clear statement of resignation","Last working day (as per notice period)","Courteous language expressing thanks","Signature"]
    }},
  {key:"maintenance", icon:"👨‍👩‍👧", color:"c-green",
    title:{mr:"पोटगी / देखभाल अर्ज",hi:"भरण-पोषण आवेदन",en:"Maintenance Application"},
    desc:{mr:"आर्थिक निर्वाहासाठी पोटगी मागण्याचा अर्ज.",hi:"आर्थिक निर्वाह हेतु भरण-पोषण मांगने का आवेदन।",en:"An application to request maintenance for financial support."},
    points:{
      mr:["अर्जदार व प्रतिवादी यांचे तपशील","नात्याचा तपशील व देखभाल न मिळाल्याचे कारण","उत्पन्न व गरजांचा तपशील","मागितली जाणारी मासिक रक्कम","आवश्यक कागदपत्रे जोडणे"],
      hi:["आवेदक व प्रतिवादी का विवरण","रिश्ते का विवरण व भरण-पोषण न मिलने का कारण","आय व आवश्यकताओं का विवरण","मांगी जाने वाली मासिक राशि","आवश्यक दस्तावेज़ संलग्न करना"],
      en:["Applicant's and respondent's details","Nature of relationship and reason maintenance is not being paid","Details of income and needs","Monthly amount being requested","Attach necessary supporting documents"]
    }}
];
return {ARTICLES:ARTICLES,TOPICS:TOPICS,DOCS:DOCS};
})();
