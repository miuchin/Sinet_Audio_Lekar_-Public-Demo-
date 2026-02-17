# SINET Audio Lekar — Patch Instructions v15.6.7 (iPhone FIX ✅)

Ovaj patch rešava **2 kritična iPhone problema**:

1) 🍏 **iPhone: Play se ne startuje u PRO (rendered) režimu**
   - iOS ume da “zaključa” `HTMLAudioElement.play()` **po-elementu**.
   - Ranije smo testirali zvuk na *drugom* audio elementu (beep), a **PRO player** je bio nov element → `play()` ume da bude blokiran.
   - v15.6.7 sada **primuje isti hidden audio element** koji se koristi za PRO playback (SILENT_WAV), pa `play()` radi i kada render završi (async).

2) 🧩 **Na iPhone-u klik na “STARIJI — NAJČEŠĆE” ponekad ne otvara ništa**
   - To se dešava kada katalog nije učitan (SW-cache /data problem) → preset ne može da se mapira na simptom.
   - v15.6.7 dodaje:
     - “🔄 Retry” dugme + `app.retryCatalog()`
     - iOS DIAG sada prikazuje `catalog=state:count` da odmah vidiš šta je problem.

---

## 1) Brzi test na iPhone-u (bez ikakvih podešavanja)

1. Otvori aplikaciju na iPhone-u.
2. Tapni **🍏 iPhone MODE**.
3. U dnu će se pojaviti **iOS DIAG** (tap to close) — proveri da piše:
   - `htmlAudio=OK`
   - `catalog=ok:<broj>`
   - `pro=1 primeR=1`

Ako `catalog=loading:0` — sačekaj par sekundi.  
Ako `catalog=err:0` — tapni **🔄 Retry** (u žutom loader-u) ili koristi **index-nosw** (sledeće poglavlje).

---

## 2) Ako Service Worker pravi problem (najčešći iOS problem)

✅ Na Netlify-u otvori **NO-SW** verziju:

- `https://TVOJ-SAJT.netlify.app/index-nosw.html`

Ovo potpuno preskače Service Worker i cache.

---

## 3) Ako želiš lokalni LAN test (Manjaro/Linux)

1. U folderu projekta pokreni:

```bash
./start-server.sh
```

2. Script će prikazati LAN URL tipa:

- `http://192.168.x.x:8000/index.html`
- `http://192.168.x.x:8000/index-nosw.html`

3. Na iPhone-u (Safari) otvori **LAN URL**.

Ako se LAN ne otvara:
- laptop + iPhone moraju biti na istoj Wi‑Fi mreži,
- router ne sme imati “Client isolation / AP isolation” uključeno,
- firewall može blokirati port 8000 (po potrebi otvori ga u firewall-u).

---

## 4) Šta mi pošaljiš ako i dalje ne radi

Pošalji screenshot **iOS DIAG** linije, naročito:
- `ctx=...`
- `webAudio=... htmlAudio=...`
- `catalog=...`
- `pro=... exp=... primeR=...`

To nam je “crna kutija” za iPhone bez Safari console. 🧰

Datum: 2026-02-17
