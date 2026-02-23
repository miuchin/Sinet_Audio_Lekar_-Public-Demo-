# SINET Audio Lekar (Public Demo) — GitHub paket

Ovo je **GitHub-ready paket** za javnu objavu SINET Audio Lekar demo aplikacije (PWA / offline-first), sa dokumentacijom i osnovnim open-source fajlovima.

## ✅ Šta je u paketu
- Glavna aplikacija (`index.html`)
- Test režim bez Service Worker-a (`index-nosw.html`)
- Audio lekar (katalog, lista, favoriti, protokoli, ⚡ brzo)
- Anamneza + MKB alati
- SINET Admin Tools (converter, deduplicator, linker, dx_index generator, inspector)
- Tutor / Vodiči (HTML + MD)
- Korisničko uputstvo (SR, HTML + MD)
- Open-source priprema (LICENSE, CHANGELOG, CONTRIBUTING, SECURITY…)

## 🚀 Brz start (lokalno)
### Opcija A — direktno
Otvorite `index.html` u browseru.

### Opcija B — lokalni server (preporučeno zbog PWA/testiranja)
```bash
python3 -m http.server 8000
```
Zatim otvorite:
- `http://localhost:8000/index.html`
- ili `http://localhost:8000/index-nosw.html` (debug bez SW)

## 📚 Tutor / Vodiči (SR)
- Hub / indeks: `docs/protokoli/00_TUTOR_VODICI_INDEX_v1.0_SR.html`
- Quick Start (3 klika): `docs/protokoli/09_QUICK_START_3_KLIKA_v1.0_SR.html`
- AI Upitnik → Protokol: `docs/protokoli/17_USECASE_AI_UPITNIK_DO_PROTOKOLA_v1.0_SR.html`
- Backup / Restore: `docs/protokoli/14_USECASE_BACKUP_RESTORE_v1.0_SR.html`
- Moj protokol iz Queue: `docs/protokoli/15_USECASE_MOJ_PROTOKOL_IZ_QUEUE_v1.0_SR.html`
- MKB Linker → dx_index → Anamneza: `docs/protokoli/16_USECASE_MKB_LINKER_DXINDEX_ANAMNEZA_v1.0_SR.html`

## 🧩 Struktura projekta (glavno)
- `index.html` — glavna aplikacija
- `index-nosw.html` — test bez service worker-a
- `js/` — logika aplikacije
- `css/` — stilovi
- `data/` — katalog, STL, MKB, preset-i, pomoćni fajlovi
- `pages/` — posebni alati/stranice (antiparazitski, integrativni vodič, speaker clean…)
- `docs/` — dokumentacija i protokoli
- `service-worker.js` / `manifest.json` — PWA

## 🌐 GitHub + Netlify preporuka
Preporučen tok:
1. Push na GitHub (branch `main`)
2. Povezivanje repo-a sa Netlify
3. Auto deploy sa `main`
4. Preview deploy sa `dev` / `rc` branch-a

Detalji: `docs/NETLIFY_DEPLOY_SR_EN.md`

## ⚠️ Napomena
SINET Audio Lekar je informativno-edukativni alat. Nije zamena za lekara, dijagnozu ili terapiju.  
Pogledati: `DISCLAIMER_MEDICAL_SR_EN.md`

## 📄 Verzija
- Paket aplikacije: **v15.7.9.6**
- GitHub paket priprema: **v15.7.9.6-github**
