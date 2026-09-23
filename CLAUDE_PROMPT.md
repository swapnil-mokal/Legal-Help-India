# CLAUDE AI — Production Build Prompt

You are a senior full-stack PWA architect, UI/UX designer, security engineer and mobile app engineer.

You are given the **Legal Helpdesk India** repository. Build/refine it without destroying the original Indian Constitution/legal content already present in `index.html`.

## Non-negotiable architecture

1. Keep User PWA and Admin PWA in the SAME GitHub repository.
2. User app must be `/index.html`.
3. Admin app must be `/admin/index.html`.
4. Both must use the same Google Apps Script API and Google Sheet source of truth.
5. Never expose `ADMIN_PASSWORD` or `GROQ_API_KEY` in frontend files.
6. Preserve GitHub Pages compatibility: no required Node server at runtime.
7. Keep PWA manifests/service workers valid for both apps.
8. Make the UI mobile-first, premium, fast and accessible.

## Brand direction

Brand: Legal Helpdesk India
Tagline: भारतीय संविधान, नागरिक हक्क आणि कायदेशीर मार्गदर्शन
Theme: deep navy + antique gold + warm paper + restrained maroon/green accents.
Use the supplied `logo.svg` as the master mark.
Tone: trustworthy, calm, civic, professional, Indian legal-service aesthetic. Avoid a generic template look.
Welcome message should communicate: “न्यायाची माहिती, हक्कांची जाणीव आणि योग्य दिशादर्शन — Legal Helpdesk India सोबत.”

## User features

- Legal/constitution search
- Constitution articles
- Legal Rights sections
- Legal Help Form
- WhatsApp consultation to +91 98700 20674
- AI Legal Guide through backend only
- Request Tracking using Request ID + mobile
- Reviews
- Marathi / Hindi / English
- Important legal updates controlled by Admin
- PWA install
- offline shell/cache
- one-tap call to +91 98700 20674
- share app via Web Share API with fallback
- legal disclaimer
- accessible form validation and error states

## Admin features

- secure login against backend
- dashboard KPI cards
- New requests
- Contacted
- In Progress
- Resolved
- global search
- status filters
- WhatsApp
- Call
- Email
- notes
- status management
- review moderation
- analytics
- content management
- welcome message editor
- important update editor
- CTA editor
- refresh/live sync indicator
- responsive mobile admin UI

## Backend requirements

Google Apps Script + Google Sheets.
Sheets should auto-create:
- Legal Help Requests
- Reviews
- Settings

Request fields:
submittedAt, name, mobile, email, city, district, category, description, preferredTime, status, lang, id, notes.

Status values:
New, Contacted, In Progress, Resolved.

Endpoints:
ask
submit-legal-help
track-request
reviews
submit-review
admin-reviews
review-action
admin-legal-requests
admin-settings
save-settings
public-settings

On a new legal-help request:
1. Save to Sheet.
2. Send an email notification to `sbm.group.legal.services@gmail.com`.
3. Return a request ID.
4. Provide a WhatsApp prefilled link to +91 98700 20674.

Do NOT claim that `wa.me` automatically sends a WhatsApp message. For server-side automatic sending, document the WhatsApp Business API requirement.

## AI safety

The AI is a general legal-information assistant, not a lawyer. Do not fabricate case law, citations, deadlines, or legal certainty. Encourage professional legal advice for serious/urgent matters. Keep answers concise and readable on mobile.

## PWA requirements

- valid manifest
- service worker
- install prompt where supported
- offline app shell
- cache busting/versioning
- no secrets in cache
- standalone display
- correct icons

## Native packaging

Keep `mobile/` ready for Capacitor. Android and iOS should use the same web app source. Do not duplicate business logic.

## Quality bar

Before finishing:
- audit every broken relative path
- verify `/admin/` paths work on GitHub Pages project URLs
- verify forms and API error handling
- verify all three languages do not break layout
- verify mobile 360px width
- verify keyboard/focus accessibility
- verify PWA service worker scope
- verify no secrets are committed
- provide exact deployment/test instructions
- preserve original legal/constitution content

Return production-ready files, not pseudocode.
