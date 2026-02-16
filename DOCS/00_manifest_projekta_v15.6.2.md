# 00 — MANIFEST PROJEKTA (SINET Audio Lekar) — v15.6.3

Autor: miuchins  
Ko-autor: SINET AI  

## Cilj ove verzije
**iPhone / iOS:** povećati verovatnoću da zvuk nastavi da svira kada:
- aplikacija ode u background
- ekran se zaključa (lock screen)

## Šta je dodato
### 1) iOS PRO režim (WAV u RAM-u)
Nova opcija u Settings:
- **„iOS PRO: Renderuj protokol u WAV (RAM)“**

Mehanizam:
- protokol (sekvenca frekvencija + trajanja) se pre-renderuje u **WAV** u memoriji (Blob)
- pusti se kroz **HTML `<audio>`** element kao jedna kontinuirana audio traka
- time se izbegava oslanjanje na JS tajmere i WebAudio scheduling u pozadini

Ograničenja:
- koristi RAM proporcionalno dužini protokola
- ako je procena iznad ~160 MB, PRO se automatski gasi i pada nazad na standardni režim

### 2) Konflikt-zaštita sa iOS Eksperimentalnim režimom
- ako uključiš PRO, **gasi se** „iOS eksperimentalno“ (MediaStream → `<audio>`)
- ako uključiš eksperimentalno, **gasi se** PRO

## Izmenjeni / novi fajlovi
- **NOVO:** `js/audio/ios-rendered-track.js`
- **IZMENA:** `js/app.js`
- **IZMENA:** `service-worker.js`
- **IZMENA:** `index.html`, `index-nosw.html` (Settings toggle)

## Poznati rizici / napomene (web-only realnost)
- iOS može da suspenduje tab ili ubije audio u nekim uslovima (Low Power Mode, agresivno prebacivanje app-ova, PWA standalone).
- za test stabilnosti: prvo probaj iz **Safari taba**, pa tek onda PWA.

## Sledeći koraci (predlog)
1. Dodati izbor kvaliteta (sample rate 16k / 22.05k) za PRO režim.
2. Dodati „procenu veličine“ u UI pre renderovanja.
3. Opcija: „render samo narednih N minuta“ (ako se pokaže da stabilno radi u pozadini).

## Izveštaj o resursima (ograničenje)
U ovom okruženju ne mogu pouzdano da izmerim CPU/RAM potrošnju na tvom telefonu.  
Mogu da procenim veličinu rendera:
- 22.05kHz mono 16-bit ≈ **2.6 MB/min**  
  (npr. 20 min ≈ 52 MB RAM)

