# SINET Audio Lekar (Public Demo) — GitHub Package

This is a **GitHub-ready package** for publishing the SINET Audio Lekar public demo (PWA / offline-first), including documentation and open-source project files.

## ✅ What's included
- Main app (`index.html`)
- No-Service-Worker test mode (`index-nosw.html`)
- Audio doctor workflow (catalog, queue/list, favorites, protocols, ⚡ quick actions)
- Anamneza + MKB-related tools
- SINET Admin Tools (converter, deduplicator, linker, dx_index generator, inspector)
- Tutor / Guides (HTML + MD, Serbian)
- User manuals (Serbian, HTML + MD)
- Open-source prep files (LICENSE, CHANGELOG, CONTRIBUTING, SECURITY, etc.)

## 🚀 Quick start (local)
### Option A — direct
Open `index.html` in your browser.

### Option B — local server (recommended for PWA/testing)
```bash
python3 -m http.server 8000
```
Then open:
- `http://localhost:8000/index.html`
- or `http://localhost:8000/index-nosw.html` (debug without SW)

## 📚 Tutor / Guides (SR)
- Tutor hub: `docs/protokoli/00_TUTOR_VODICI_INDEX_v1.0_SR.html`
- Quick Start (3 clicks): `docs/protokoli/09_QUICK_START_3_KLIKA_v1.0_SR.html`
- AI Questionnaire → Protocol: `docs/protokoli/17_USECASE_AI_UPITNIK_DO_PROTOKOLA_v1.0_SR.html`
- Backup / Restore: `docs/protokoli/14_USECASE_BACKUP_RESTORE_v1.0_SR.html`
- My protocol from Queue: `docs/protokoli/15_USECASE_MOJ_PROTOKOL_IZ_QUEUE_v1.0_SR.html`
- MKB Linker → dx_index → Anamneza: `docs/protokoli/16_USECASE_MKB_LINKER_DXINDEX_ANAMNEZA_v1.0_SR.html`

## 🌐 GitHub + Netlify recommended workflow
1. Push to GitHub (`main`)
2. Connect repo to Netlify
3. Auto deploy from `main`
4. Use `dev` / `rc` for preview builds

Details: `docs/NETLIFY_DEPLOY_SR_EN.md`

## ⚠️ Important note
SINET Audio Lekar is an informational/educational tool and **not** a substitute for professional medical care.  
See: `DISCLAIMER_MEDICAL_SR_EN.md`

## 📄 Version
- App package: **v15.7.9.6**
- GitHub package prep: **v15.7.9.6-github**
