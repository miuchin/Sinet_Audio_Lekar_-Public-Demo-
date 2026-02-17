# SINET Audio Lekar — v15.7.1.4 (Dock Loop + iOS PRO list fix)

Datum: 2026-02-17

## 1) Šta je novo ✅

### 1.1 „FREKVENCIJE” lista radi i u iOS PRO (Render) režimu
- Ranije: u iOS PRO (render WAV segmenti), `audio.currentSequence` nije aktivan → panel „FREKVENCIJE” je izgledao kao *prazan (belo)*.
- Sada: lista se renderuje iz `this._rendered.fullSequence` i uvek prikazuje preostale frekvencije (sa označenom aktivnom). 
- Napomena: u Render režimu lista je **pregled**, a preskakanje/odčekiranje je ograničeno (primenjuje se najranije od sledećeg segmenta). 

### 1.2 Loop kontrola dodata u Player Dock (uvek pri ruci)
- U dock-u postoji dugme **🔁 LOOP (Ponavljanje)** koje otvara mini-panel.
- Panel sadrži:
  - `N` (1–20)
  - `∞ Loop`
  - Opseg: **(A) Jedan simptom** (default) / **(B) Cela Queue**
- Promena se primenjuje odmah (najkasnije od sledećeg ciklusa) i sinhronizuje se sa Playlist/Modal kontrolama.
- Podešavanje se pamti u `localStorage` (ključ: `sinet_repeat_settings`).

### 1.3 UX: bolja vidljivost „FREKVENCIJE” panela
- Dodata je tamnija pozadina/border na `.nowplaying-panel` da panel ne izgleda kao „prazan beli” prostor na iPhone-u.

## 2) Tehničke izmene 🧩

- `js/app.js`
  - `renderNowPlayingList()` podržava i iOS PRO (`this._rendered.fullSequence`).
  - Dock loop API: `toggleDockLoopPanel()`, `onDockRepeatChange()`, `_restoreRepeatFromStorage()`.
  - `SINET_APP_VERSION = "15.7.1.4"`.

- `index.html` + `index-nosw.html`
  - Dodati dock loop UI elementi: `btn-dock-loop`, `dock-loop-panel`, `p-repeat-*`.
  - `nowplaying-hint` dobija `id` radi dinamičke poruke.

- `css/main.css`
  - Kontrastni stilovi za `.nowplaying-panel` + `.dock-tool-btn`.

- `service-worker.js`
  - `CACHE_NAME` bump na `sinet-audio-v15.7.1.4`
  - query stringovi usklađeni na `?v=15.7.1.4`
  - dodato `RELEASE_NOTES_v15.7.1.4.md`

## 3) Brzi test plan 🔎

1) **Desktop**: Start protokol → „▾ FREKVENCIJE” prikazuje listu → radi odčekiranje/skip.
2) **iPhone (iOS PRO)**: uključi 🍏 MODE → Start protokol → „▾ FREKVENCIJE” prikazuje listu (nije prazno).
3) **Dock Loop**: tokom rada otvori 🔁 LOOP → promeni N / ∞ / (A)/(B) → očekuj toast „Loop podešen…”.
4) Refresh (CTRL+F5) + „OČISTI KEŠ I AŽURIRAJ” → SW učitava novu verziju.
