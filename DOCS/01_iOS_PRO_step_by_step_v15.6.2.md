# 01 — iOS PRO (WAV u RAM-u) — Step-by-step — v15.6.3

## A) Lokalno pokretanje na Linux (Manjaro)
1. Raspakuj ZIP.
2. Uđi u folder: `Sinet_Audio_Lekar_(Public Demo)`
3. Pokreni lokalni server (jedna opcija):
   - Python:
     - `python -m http.server 8000`
4. Otvori u browseru:
   - `http://<tvoj-IP>:8000/`

> Napomena: iPhone mora biti na istoj Wi‑Fi mreži.

## B) iPhone test (Safari)
1. Na iPhone-u otvori gore navedeni URL u **Safari** (ne odmah PWA).
2. Otvori neki simptom / protokol.
3. Uđi u **Settings** i uključi:
   - ✅ **iOS PRO: Renderuj protokol u WAV (RAM)**
4. Pritisni **Play** (mora prvi put uz user gesture).
5. Zaključaj ekran (power dugme).
6. Proveri lock-screen: trebalo bi da čuješ kontinuiran zvuk.

## C) Ako čuješ „pulsiranje“ ili čudan zvuk
- Isključi **iOS eksperimentalno** (PRO ga već gasi, ali proveri).
- Restartuj tab (refresh) i probaj ponovo.

## D) Ako i dalje prekida u pozadini
- Isključi **Low Power Mode**
- Ne koristi „Add to Home Screen“ dok ne potvrdiš stabilnost u Safari tabu
- Ne prebacuj agresivno app-ove (iOS može ubiti audio)

## E) Koliko RAM-a troši?
Procena (22.05kHz mono 16-bit):
- ≈ **2.6 MB po minuti**
Primer:
- 10 min ≈ 26 MB
- 20 min ≈ 52 MB

Ako je protokol predugačak, aplikacija sama gasi PRO i vraća standardni režim.

