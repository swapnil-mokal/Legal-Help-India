# Legal Helpdesk India — एकाच Repository मध्ये पूर्ण Deploy सूचना

## 1) GitHub Repository

एक repository वापरा. उदाहरण:

`legal-helpdesk-india`

या ZIP मधील **सर्व files repository च्या root मध्ये** upload करा.

महत्त्वाचे: `index.html` root मध्ये आणि `admin/index.html` admin folder मध्ये असले पाहिजे.

## 2) GitHub Pages

Repository → Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)` → Save.

User App:
`https://USERNAME.github.io/REPOSITORY/`

Admin App:
`https://USERNAME.github.io/REPOSITORY/admin/`

## 3) Google Sheet + Apps Script

एक Google Sheet तयार करा → Extensions → Apps Script.

`backend/Code.gs` मधील संपूर्ण code Apps Script मध्ये paste करा → Save.

Project Settings → Script properties:

- `ADMIN_PASSWORD` = तुमचा मजबूत admin password
- `GROQ_API_KEY` = तुमची Groq API key (AI हवी असल्यास)

Deploy → New deployment → Web app:
- Execute as: Me
- Who has access: Anyone

Web App URL copy करा.

## 4) API URL

`shared/config.js` मध्ये `apiUrl` आधीच भरलेला आहे. नवीन deployment बनवला तरच तो URL बदला (Code.gs बदलून **Manage deployments → Edit → New version** केलं तर URL तोच राहतो).

## 5) Form flow

User → Legal Help Form → Apps Script → Google Sheet → Email notification.

Notification inbox:
`sbm.group.legal.services@gmail.com`

WhatsApp:
`+91 98700 20674`

WhatsApp साठी pre-filled `wa.me` link तयार होतो. Automatic outgoing WhatsApp message साठी Business API/provider आवश्यक आहे.

## 6) Admin

`/admin/` उघडा → Admin Password → Dashboard.

Available:
- New
- Contacted
- In Progress
- Resolved
- Search
- Filters
- WhatsApp
- Call
- Email
- Notes backend support
- Reviews moderation
- Analytics
- Content management

## 7) PWA

Android Chrome मध्ये User URL उघडा → Install app / Add to Home Screen.

iPhone Safari मध्ये Share → Add to Home Screen.

## 8) Android / iOS native wrapper

`mobile/README.md` पहा. Capacitor project मध्ये web directory म्हणून या repository ची root files वापरा.

Android build साठी Android Studio आणि iOS build साठी macOS + Xcode आवश्यक आहे.

## 9) Test checklist

- [ ] User App loads
- [ ] Admin App loads
- [ ] PWA install prompt works
- [ ] Marathi/Hindi/English switch works
- [ ] Constitution/article search works
- [ ] AI works after GROQ key
- [ ] Help form saves to Sheet
- [ ] Email arrives at configured inbox
- [ ] WhatsApp prefilled link opens
- [ ] Request ID + mobile tracking works
- [ ] Admin status changes sync
- [ ] Reviews moderation sync
- [ ] Content changes appear on User App

## 10) Important

Secrets GitHub वर ठेवू नका. `config.js` मध्ये फक्त public API URL/contact configuration ठेवा.

## 11) मोबाईलवरून GitHub वर अपलोड (फोल्डरसह)

GitHub मोबाईलवर फोल्डर थेट अपलोड करत नाही. म्हणून प्रत्येक फोल्डरसाठी:
1. **Add file → Create new file** → नावात `admin/keep.txt` टाइप करा → Commit. (फोल्डर बनतो.)
2. `admin` फोल्डर उघडा → **Add file → Upload files** → `index.html, app.js, style.css, manifest.json, sw.js, logo.svg` निवडा → Commit.
3. `shared/`, `backend/`, `icons/`, `mobile/`, `previews/` साठीही असंच करा. (`mobile/` आणि `previews/` ऐच्छिक आहेत.)
4. Root वर: `index.html, manifest.json, sw.js, logo.svg, .nojekyll` (जुन्या `config.js`, `admin.html` फाईल्स डिलीट करा).
5. `backend/Code.gs` GitHub वर उघडा → वरती **Copy raw file** दाबा → Apps Script मध्ये सर्व जुना कोड काढून पेस्ट करा → Save → **Deploy → Manage deployments → Edit → New version → Deploy**.

## 12) ईमेल पत्ता तपासा
Notification `backend/Code.gs` मधल्या `inbox` पत्त्यावर जातो: `sbm.group.legal.services@gmail.com`. तुमचा खरा पत्ता वेगळा असेल (उदा. `legalservices` बिन-डॉट) तर Code.gs, `shared/config.js` आणि `index.html` मध्ये तो बदला.
