# SINET Audio Lekar — v15.7.1.6 (Dock Loop + iOS PRO list fix + Hotfix: parse error)

Datum: 2026-02-17

## 1) Šta je novo ✅

### 1.1 „FREKVENCIJE” lista radi i u iOS PRO (Render) režimu
- Ranije: u iOS PRO (render WAV segmenti), `audio.currentSequence` nije aktivan → panel „FREKVENCIJE” je izgledao kao *prazan (belo)*.
- Sada: lista se renderuje iz `this._rendered.fullSequence` i uvek prikazuje preostale frekvencije (sa označenom aktivnom).
- Napomena: u Render režimu lista je **pregled**; odčekiranje/preskakanje je ograničeno (primenjuje se najranije od sledećeg segmenta).

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

### 1.4 UX: lista se renderuje odmah pri otvaranju
- Kada tapneš „▾ FREKVENCIJE”, lista se odmah renderuje (korisno posebno u iOS PRO render modu).

## 2) Tehničke izmene 🧩

- `js/app.js`
  - `renderNowPlayingList()` podržava i iOS PRO (`this._rendered.fullSequence`).
  - Dock loop API: `toggleDockLoopPanel()`, `onDockRepeatChange()`, `_restoreRepeatFromStorage()`.
  - `toggleNowList()` sada poziva `renderNowPlayingList()` pri otvaranju panela.
  - `SINET_APP_VERSION = "15.7.1.6"`.

- `index.html` + `index-nosw.html`
  - Dock loop UI elementi: `btn-dock-loop`, `dock-loop-panel`, `p-repeat-*`.
  - Script query string bump na `?v=15.7.1.6`.

- `css/main.css`
  - Kontrastni stilovi za `.nowplaying-panel` + `.dock-tool-btn`.

- `service-worker.js`
  - `CACHE_NAME` bump na `sinet-audio-v15.7.1.6`
  - asset query stringovi usklađeni na `?v=15.7.1.6`
  - dodato `RELEASE_NOTES_v15.7.1.6.md`

## 3) Brzi test plan 🔎

1) **Desktop**: Start protokol → „▾ FREKVENCIJE” prikazuje listu → radi odčekiranje/skip.
2) **iPhone (iOS PRO)**: uključi 🍏 MODE → Start protokol → „▾ FREKVENCIJE” prikazuje listu (nije prazno).
3) **Dock Loop**: tokom rada otvori 🔁 LOOP → promeni N / ∞ / (A)/(B) → očekuj toast „Loop podešen…”.
4) Refresh + „OČISTI KEŠ I AŽURIRAJ” → SW učitava novu verziju.

## 4) Hotfix (kritično) 🧯

### 4.1 Fix: aplikacija se nije inicijalizovala (SyntaxError: Unexpected token '!')
- Uzrok: ostao je **stray** kod u telu klase (izvan bilo kog metoda): `if(!open) ...`, što je uzrokovalo **parse error** i stanje „APP not ready yet”.
- Rešenje:
  - uklonjen stray kod iz class body
  - logika je premeštena na pravo mesto: u `toggleNowList()` pri otvaranju panela.

