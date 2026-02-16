# SINET Audio Lekar — Release Notes v15.6.3

Datum: 2026-02-16  
Autor: miuchins • Ko-autor: SINET AI  

## Šta je novo (fokus: iPhone / iOS)

### ✅ iOS PRO: Render protokola u WAV (RAM-only)
iOS Safari često suspenduje **WebAudio (AudioContext + JS tajmeri)** kada aplikacija ode u pozadinu ili kada se ekran zaključa.  
U ovom izdanju postoji opcija:

- **„iOS PRO: Renderuj protokol u WAV (RAM)“**  
  - protokol (lista frekvencija + trajanja) se **pre-renderuje** u WAV u memoriji
  - potom se pusti preko **HTML `<audio>`** elementa kao jedna kontinuirana „muzika“
  - veća šansa da nastavi u pozadini / na zaključanom ekranu (web-only, bez garancije)

⚠️ Ograničenja:
- Render troši RAM: veličina zavisi od dužine protokola.
- Ako je protokol predugačak (procena > ~160 MB), aplikacija automatski gasi PRO i vraća standardni režim.

### iOS Eksperimentalno (postojeće)
- „Pusti zvuk u pozadini (eksperimentalno)“ (MediaStream → `<audio>`)
- i dalje postoji, ali se **automatski gasi** ako uključiš PRO (da ne dođe do konflikta/pulsiranja).

## Tehničke izmene
- dodat modul: `js/audio/ios-rendered-track.js`
- `service-worker.js` proširen za novi asset
- `js/app.js` proširen za iOS PRO režim (render + player + UI tick)

## Napomena (PWA na iOS)
Ako koristiš „Add to Home Screen“ (standalone), iOS ponekad ima probleme sa audio u PWA režimu.  
Za test stabilnosti, prvo probaj da pokreneš iz **Safari taba**.

