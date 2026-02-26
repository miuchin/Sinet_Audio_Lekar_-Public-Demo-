# PATCH_MANIFEST — iOS PRO: FREKVENCIJE modal + preskakanje (v15.7.9.7)

## Problem
Na iPhone Safari, u **🍏 iPhone MODE / PRO (Render)** režimu, FREKVENCIJE lista u donjem dock panelu često ne može da se koristi (ne vidi se ceo sadržaj ili checkbox-i nisu interaktivni). Istovremeno, isključivanje PRO moda često prekida pozadinski rad zvuka.

## Rešenje (SAFE)
1) U iOS PRO Render modu, klik na **FREKVENCIJE** otvara poseban **modal sheet** (preko ekrana) sa listom frekvencija.
2) Checkbox-i su interaktivni: odčekirane frekvencije se u narednom render segmentu renderuju kao **tišina** (value=0), pa se efektivno preskaču.
3) Pozadinski audio ostaje PRO (Render) — ne gasimo ga.

## Izmenjeni fajlovi (DELTA)
- `index.html` — dodat `#freq-modal`
- `index-nosw.html` — dodat `#freq-modal`
- `js/app.js`
  - `toggleNowList()` preusmerava na modal kada je iOS PRO Render aktivan
  - dodate funkcije: `openFreqModal()`, `closeFreqModal()`, `renderFreqModalList()`, `toggleRenderedFreqEnabled()`
  - dodata primena disabled-map u `_startRenderedSegment()` (render kao tišina)

## Kako radi preskakanje u iOS PRO
- Promene važe **od sledećeg segmenta** (jer se trenutni segment već renderuje u WAV).
- Aplikacija prikazuje toast: "Preskakanje važi od sledećeg segmenta".

## Test (iPhone)
1) Uključi **🍏 iPhone MODE / PRO (Render)**
2) Pusti Queue/Listu
3) Klikni **FREKVENCIJE** → otvara se modal sheet
4) Odčekiraj 1–2 frekvencije
5) Sačekaj da pređe na sledeći segment → te frekvencije će biti "tišina" (preskočene)

## Rollback
Vrati originalne fajlove iz prethodne verzije:
- `index.html`, `index-nosw.html`, `js/app.js`
