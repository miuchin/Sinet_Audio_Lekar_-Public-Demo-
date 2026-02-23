# SINET Audio Lekar — Public Demo (EN)

SINET Audio Lekar is an educational/informational web/PWA app for:
- symptom-oriented audio routines,
- organizing playback via Queue / Favorites / My Protocols,
- guided Tutor / Guide workflows,
- report/export flows (TXT/MD/HTML/JSON).

## Project links
- **GitHub:** https://github.com/miuchin/Sinet_Audio_Lekar_-Public-Demo-/tree/main
- **Netlify demo:** https://sinet-audio-lekar-nutri-pro-demo.netlify.app/

## Recent highlights (v15.7.9.x)
- Mobile UI hotfixes (Huawei / smaller screens)
- More stable menu, scrolling, and card layout
- iPhone/iOS playback/navigation behavior improvements
- Tutor / Guides hub + use-case tutor pages
- Quick Start tutor (3 clicks to playback)
- AI Questionnaire → My Symptoms → Queue → Protocol tutor workflow

## Project structure (short)
- `index.html` — main app
- `index-nosw.html` — no-service-worker test page
- `service-worker.js` — offline/PWA caching
- `docs/` — manuals, release and deploy notes
- `docs/protokoli/` — Tutor/Guides and use-case protocols

## Open Source note
Recommended starting point: **MIT** license (simple adoption). Can be changed to Apache-2.0 later.

## Safety / legal notes
See:
- `DISCLAIMER_MEDICAL_SR_EN.md`
- `PRIVACY_LOCAL_STORAGE_SR_EN.md`

## Quick user start
1. Open the demo
2. Use **⚡ Quick links** or catalog search
3. Press **▶ PLAY**
4. Optionally save to Favorites / My Protocol
5. Use **🎓 Tutor / Guides** for step-by-step help

## Dev/test recommendation
If changes are not visible due to cache:
1. Unregister Service Worker
2. Clear site data
3. Hard refresh
4. Test `index-nosw.html`
