# RELEASE_NOTES_v15.7.1.md

**Project:** SINET Audio Lekar — Public Demo  
**Release:** v15.7.1 — Repeat A/B + Segment 40 min + UX “PRIPREMAM”  
**Date:** 2026-02-17  
**Author:** miuchins (Svetozar Miuchin)  
**Co-author:** SINET AI (GPT Co-author / Engineering Partner)  

---

## 1) Šta je novo

### 1.1 “Ponovi N puta” — oba moda (A/B)
Dodate su jasne kontrole ponavljanja (vidljive odmah, bez “naprednih” menija):

- **Ponovi:** `N` puta (npr. 3×)
- **∞ Loop dok ne zaustavim**
- **Opseg ponavljanja (radio/segmented):**
  - **(A) Simptom/Protokol (lekarski)** — *DEFAULT* ✅
  - **(B) Cela lista (Queue)**

**Tooltip + mikro‑primer:**
- Tooltip: *“A = ponavlja aktivni simptom • B = ponavlja celu listu”*
- Primer: *Ako Queue ima 5 stavki, opcija B pušta 1→5, pa opet 1→5 (ukupno N ciklusa).* 

### 1.2 Default segment loop = 40 min (iOS PRO / rendered path)
U PRO/workaround putanji za iOS, playback se organizuje kao **segmenti od 40 minuta** (default), sa nastavkom (chaining) na sledeći segment.

### 1.3 “Preporuka” blok (vidljiv odmah)
Uveden je blok **📌 PREPORUKA** koji prikazuje:
1) trajanje po frekvenciji  
2) uzastopni loop count  
3) dnevna ponavljanja (broj dana)  
4) pauza između ciklusa (u danima)

### 1.4 UX zaštita za starije korisnike: “⏳ PRIPREMAM…”
Tokom pripreme starta/protokola:
- prikazuje se overlay **“⏳ PRIPREMAM…”**
- **start dugme se disable‑uje** dok priprema traje
- smanjuje se rizik od “3× klik” / duplog starta

---

## 2) Promene i ponašanje (definisani default‑i)

- Default opseg ponavljanja: **(A) Simptom/Protokol (lekarski)**
- Default segment: **40 min**

---

## 3) Kompatibilnost

- Nema promene formata kataloga (`data/*.json`) — aplikacija nastavlja da koristi eksterni JSON.
- UI izmene su kompatibilne sa postojećim preset-ima i queue logikom.

---

## 4) Poznata ograničenja

- iOS web/PWA ima sistemska ograničenja za background audio; PRO/workaround putanja ostaje preporučena za duge sesije.
- Alarmi/podsetnici su planirani za naredni release (nije deo v15.7.1).

---

## 5) Šta testirati (quick QA)

- [ ] (A) ponavljanje: aktivan simptom/protokol se ponavlja tačno **N** puta
- [ ] (B) ponavljanje: cela Queue lista se ponavlja tačno **N** puta
- [ ] ∞ loop: radi stabilno i može da se zaustavi
- [ ] iOS PRO: segment 40 min nastavlja na sledeći segment bez rušenja
- [ ] Overlay “PRIPREMAM…” sprečava dupli start
- [ ] “Preporuka” prikazuje korektne vrednosti

