# Legal Helpdesk India — Single Repository Production PWA

ही आवृत्ती **एकाच GitHub repository** मध्ये User PWA आणि Admin PWA देते.

## Repository structure

```text
/
├─ index.html                 # User App
├─ admin/                     # Admin App (same repository)
│  ├─ index.html
│  ├─ app.js
│  ├─ style.css
│  ├─ manifest.json
│  ├─ sw.js
│  └─ logo.svg
├─ shared/config.js           # public API URL + contact settings
├─ backend/Code.gs             # Google Apps Script backend
├─ icons/                      # PWA icons from the source project
├─ logo.svg                    # new master brand logo
├─ manifest.json
├─ sw.js
├─ mobile/                     # Capacitor Android/iOS wrapper setup
├─ previews/                   # UI preview images
├─ CLAUDE_PROMPT.md            # paste this into Claude with the repo
└─ DEPLOY-MARATHI.md           # complete Marathi deployment guide
```

## Live URLs after GitHub Pages

User:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

Admin:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin/`

दोन्ही **एकाच repository** मध्ये आहेत.

## Backend

Google Apps Script + Google Sheet हा source of truth आहे. User आणि Admin दोन्ही एकाच API ला जोडलेले आहेत.

Supported endpoints include:
- AI legal guide
- submit legal help
- request tracking
- public reviews
- admin request management
- review moderation
- admin notes
- live content/settings

## Contact

WhatsApp: +91 98700 20674
Email: sbm.group.legal.services@gmail.com

Legal-help form submit झाल्यावर Google Sheet मध्ये request save होते आणि configured inbox ला email notification जाते. User ला WhatsApp साठी pre-filled link मिळतो.

> टीप: WhatsApp वर server-side automatic message पाठवण्यासाठी WhatsApp Business Cloud API किंवा approved provider लागतो. साधा `wa.me` link user कडून chat उघडतो आणि message prefill करतो.

## Security

`ADMIN_PASSWORD` आणि `GROQ_API_KEY` कधीही GitHub मध्ये ठेवू नका. ते Apps Script → Project Settings → Script Properties मध्ये ठेवा.

## Legal disclaimer

AI/website माहिती ही सामान्य कायदेशीर माहितीसाठी आहे. ती वैयक्तिक कायदेशीर सल्ला किंवा वकिलाच्या सल्ल्याचा पर्याय नाही.
