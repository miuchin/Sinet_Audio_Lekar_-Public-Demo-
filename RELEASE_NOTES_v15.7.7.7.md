# RELEASE NOTES — v15.7.7.7

Datum: 2026-02-22

## ✅ Šta je novo

### 1) DS-Generator — HTML export sada 100% Template v2
- DS-Generator vodič je sada upakovan kroz `SINET_TEMPLATE_v2` (topbar: Nazad/TXT/MD/HTML/Štampa/E-mail + „📋 Kopiraj kompletan plan“).
- Zadržan je postojeći sadržaj vodiča (sekcije + frekvencije), ali je wrapper standardizovan kao i u Anamnezi/Vodiču.

### 2) AI Upitnik — „Prikaži AI odgovor“ + „AI izveštaj (HTML)“
- Implementirani su nedostajući UI handler-i:
  - `📋 KOPIRAJ AI ODGOVOR`
  - `🪟 PRIKAŽI AI ODGOVOR` (modal)
  - `📄 AI izveštaj (HTML)` → otvara čitljiv izveštaj u Template v2 formatu (sa RAW JSON u dnu).

### 3) Help dugme radi svuda (Quickbar + linkovi)
- Quickbar `❓ Help` sada vodi na `index.html?nav=help`.
- `index.html` prepoznaje `?nav=` i `#hash` i automatski otvara traženu stranicu (npr. help) i kada dolaziš iz drugih prozora.

### 4) Home — češće korišćeno vidljivije
- Dodata kartica: **⭐ Često korišćeno** (Moji favoriti / Moji simptomi / AI Upitnik) na početnoj strani.

## 🔄 Offline / PWA
- Service Worker cache bump: `sinet-audio-v15.7.7.7`

