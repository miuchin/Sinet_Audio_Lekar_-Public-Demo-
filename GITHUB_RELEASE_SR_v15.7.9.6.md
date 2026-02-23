# SINET Audio Lekar (Public Demo) — v15.7.9.6

Ovo izdanje donosi završni paket stabilizacije mobilnog interfejsa, unapređenja navigacije i tutor/vodič iskustva, uz pripremljenu open-source i publishing infrastrukturu za lakši javni release.

## ✅ Glavne novine

- **Stabilizovan mobile UI** (uključujući Huawei hotfixe)
  - grid prikaz stabilniji
  - menu scroll ispravljen
  - search autofocus ponašanje poboljšano
  - settings navigacija sređena
  - player kontrole vidljive i pouzdanije

- **Bolji rad audio sesije na iPhone uređajima**
  - fokus na in-app navigaciji bez prekida sesije

- **Uvedeni Tutor / Vodiči use-case HTML fajlovi**
  - Tutor/Vodiči index
  - Quick Start
  - AI Upitnik tutor

- **Dodati ulazi ka Tutor/Vodiči**
  - iz **Menija**
  - iz **Podešavanja**

- **Pripremljen GitHub OSS paket**
  - SR/EN dokumentacija
  - GitHub templates
  - Netlify konfiguracija / smernice

- **Pripremljen publishing kit**
  - GitHub release tekstovi
  - blog post materijali
  - Viber / Facebook / Telegram tekstovi

## 🛠️ Polish / Fixes

- Finalni polish Tutor/Help linkova (relativne putanje i fallback pristup)
- Poboljšan fallback tok preko `index-nosw.html`
- (Opcioni patch) usklađivanje verzije i cache ključeva na `v15.7.9.6`

## 📦 Preporučeno uz ovo izdanje

Ako ručno ažuriraš repo iz ZIP paketa:

1. primeni **Repo Patch Delta ZIP**
2. primeni **Version Sync Patch ZIP** (preporučeno)
3. uradi kratki smoke test (Tutor/Vodiči + fallback + audio/nav)

## 🧪 Kratki smoke test (preporuka)

- Meni → Tutor/Vodiči se otvara
- Quick Start radi
- AI Upitnik tutor radi
- Tutor link ka korisničkom uputstvu radi
- `index-nosw.html` fallback radi
- player kontrole ostaju vidljive pri navigaciji

## ⚠️ Napomena

Ovo je **Public Demo** izdanje. Projekat je namenjen demonstraciji funkcionalnosti i UX toka.  
Medicinski sadržaj je informativan i ne zamenjuje pregled, dijagnozu ili terapiju lekara.

## 🙏 Zahvalnost

Hvala svima koji testiraju mobilni UI, fallback tokove i tutor iskustvo — posebno za real-device povratne informacije (Huawei / iPhone), koje su pomogle da ovo izdanje bude stabilnije.
