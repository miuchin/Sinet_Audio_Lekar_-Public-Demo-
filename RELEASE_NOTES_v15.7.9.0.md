# SINET Audio Lekar — Release Notes v15.7.9.0

## iPhone / PWA: slušanje + korišćenje aplikacije u isto vreme ✅

### ✅ Brzi linkovi više ne prekidaju plejlistu
Na iPhone (posebno u PWA/standalone modu), otvaranje stranica preko `window.open()` često zameni trenutni prozor i time prekine zvuk + resetuje Queue.

Sada:
- Dok zvuk svira (ili kad si u iOS standalone), klik na:
  - 🦠 Antiparazitski (Prva pomoć)
  - 🔊 Čišćenje zvučnika
  - 🧩 Integrativni vodič – RA šake
  - 🧾 Integrativni vodič (generator)
  - 🩺 Anamneza
  otvara alat unutar aplikacije (doc modal / iframe), bez prekida zvuka i bez gubitka liste.

### ✅ Quickbar linkovi (gore) poštuju playback
Dok zvuk svira, Quickbar dugmad za "quick pages" (anti/spk/ra/guide) se otvaraju u modalu umesto da menjaju stranicu.

## Offline
`openQuickPage()` više ne radi HEAD-proveru za lokalne stranice, tako da radi i offline.

## PWA
Bumpovan SW cache key: `sinet-audio-v15.7.9.0`.
