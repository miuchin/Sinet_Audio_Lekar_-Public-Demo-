# SINET Audio Lekar — v15.7.1.3 (FINAL PATCH)

**Datum:** 2026-02-17  
**Autor:** miuchins (Svetozar Miuchin)  
**Ko-autor / inženjerski partner:** SINET AI  

Ovo izdanje isporučuje dogovorene stavke iz **"Nastavak — Novo Chat 5"** i uvodi stabilniji iOS PRO režim za duge sesije (segmentirano renderovanje), uz jasan UI za ponavljanje protokola.

---

## 0.1 Hotfix (stabilnost inicijalizacije)

Ovo izdanje uključuje i **kritične hotfix-eve** koji sprečavaju da aplikacija “stane” na učitavanju kataloga:

- ✅ Ispravljen nevažeći JS token u `_renderRepeatStatus()` (pogrešno escape-ovan default parametar).
- ✅ Uklonjen duplirani fragment `} catch (err) { ... }` koji je izazivao **`Unexpected token 'catch'`** i blokirao inicijalizaciju aplikacije.

Rezultat: `app.js` se sada parsira bez grešaka, `window.app` se kreira, i loader kataloga nastavlja normalno.

---


---

## 0.2 iPhone UI hotfix (Loop vidljiv + scroll stabilnost)

Ovaj hotfix rešava problem na iPhone/PWA gde korisnik ne vidi **🔁 Ponovi (Loop)** i gde “gornji deo” modala ume da bude van ekrana bez pouzdanog skrolovanja.

Promene:
- ✅ **Loop kontrole pomerene “gore”** u modal-u simptoma (odmah ispod Quick Start dugmadi) — bez skrolovanja.
- ✅ Na **Queue / Lista** strani, blok “Ponovi (Loop)” + “Pokreni listu” je premešten **iznad liste** (vidljiv odmah).
- ✅ iOS scroll stabilizacija: `-webkit-overflow-scrolling: touch` + `touch-action: pan-y` na `main` i modal.
- ✅ “Dock padding” dinamički: `main` dobija `padding-bottom` prema realnoj visini player dock-a (`--dock-h`), pa sadržaj nije “iza” plejera.
- ✅ Player dock dobija `safe-area` padding (`env(safe-area-inset-bottom)`).

Rezultat: na iPhone-u je UI funkcionalno isti kao na desktopu — loop se podešava jasno i odmah, a ekran normalno skroluje tokom plejbek-a.


## 0) G0 napomene (source-of-truth / bez skraćivanja)

- Nema skraćivanja funkcionalnosti ili uklanjanja tabova/opcija (“ZERO BREAK”).
- Patch je isporučen kao **FULL ZIP**, spreman za test.
- Krediti: **miuchins & SINET AI** su navedeni u UI/Docs.

---

## 1) Najvažnije novine (User-facing)

### 1.1 “Ponovi N puta” (vidljivo odmah) + oba moda (A/B)

Dodate su kontrole ponavljanja koje su odmah vidljive (bez dodatnih menija), dostupne na:
- **Queue / Lista** stranici
- **Modal-u simptoma** (Play panel)

Kontrole:
- **Ponovi:** `N` puta
- **∞ Loop dok ne zaustavim**
- **Opseg ponavljanja:**
  - **(A) Simptom/Protokol (lekarski)** — **DEFAULT**
  - **(B) Cela lista (Queue)**

**Tooltip + mikro-primer (SR):**
- Tooltip: *A = ponavlja aktivni simptom • B = ponavlja celu listu*
- Primer: *Ako Queue ima 5 stavki, opcija B pušta 1→5, pa opet 1→5 (ukupno N ciklusa).* 

### 1.2 “Preporuka” blok (vidljiv odmah)

Uveden je blok **📌 PREPORUKA** na:
- Modal-u simptoma
- Player dock panelu

Prikazuje:
1) trajanje po frekvenciji  
2) uzastopni loop count  
3) dnevna ponavljanja (broj dana)  
4) pauza između ciklusa (u danima)

### 1.3 Default segment loop = **40 min** (iOS PRO / rendered playback)

Za iOS PRO režim, dugačke terapije se izvode kroz segmente od **40 minuta** (default), čime se smanjuje rizik od RAM/AudioContext ograničenja.

### 1.4 UX zaštita: “⏳ PRIPREMAM…” + disable start

Tokom pripreme starta protokola:
- prikazuje se overlay **“⏳ PRIPREMAM…”**
- dugmad za start se privremeno disable-uju

Ovo je posebno bitno za starije korisnike koji često kliknu više puta.

---

## 2) Tehničke promene (Engine)

### 2.1 Repeat engine (A/B) — runtime ponašanje

U playback runtime-u uveden je repeat state:
- **Mode A (default):** ponavlja **aktivan simptom/protokol** N puta pre prelaska na sledeću stavku.
- **Mode B:** ponavlja **celu Queue listu** N ciklusa.
- **∞:** beskonačno ponavljanje (zaustavlja se ručno Stop dugmetom).

### 2.2 iOS PRO “rendered” segment chaining

Umesto renderovanja ogromnog WAV-a u jednom prolazu, protokol se renderuje u segmentima:
- segment ima **maks 40 min** (default)
- po završetku segmenta, automatski se renderuje sledeći segment i playback nastavlja

### 2.3 Rendered ticker — FULL timeline (segment-aware)

Ticker je usklađen da prikazuje:
- **elapsed** i **total** vreme u okviru **celog item-a / protokola**, a ne samo u okviru segmenta
- tačan “global index” frekvencije pri prelazu kroz segment

---

## 3) Verzije i cache (PWA)

### 3.1 Version string bump na 15.7.1.3

- `index.html` i `index-nosw.html`: title i UI label
- `js/app.js`: `SINET_APP_VERSION = "15.7.1.3"`

### 3.2 Service Worker cache bump

- `service-worker.js`: `CACHE_NAME` je promenjen na **sinet-audio-v15.7.1.3**
- `ASSETS_TO_CACHE` query stringovi su usklađeni na `?v=15.7.1.3`

Ovo sprečava da stari cache “zakuca” aplikaciju na prethodnu verziju.

---

## 4) Kompatibilnost

- Format kataloga (`/data/*.json`) nije menjanj.
- Preset JSON i postojeće liste nastavljaju da rade.
- Ako je Service Worker ranije instaliran, preporučuje se hard refresh / reinstall PWA nakon update-a.

---

## 5) Poznata ograničenja

- iOS Safari/PWA ima sistemska ograničenja za background audio; PRO/rendered putanja je stabilnija, ali i dalje zavisi od OS-a.
- Podsetnici / alarms su planirani za naredni release (nije deo v15.7.1.3).

---

## 6) QA — šta testirati (checklist)

### Repeat
- [ ] Mode **A**: jedan simptom/protokol se ponavlja tačno **N** puta pre prelaska dalje
- [ ] Mode **B**: cela Queue lista se ponavlja tačno **N** ciklusa
- [ ] **∞**: ponavljanje radi stabilno i Stop odmah prekida
- [ ] UI prikazuje trenutno stanje (ciklus / N)

### iOS PRO / Segments
- [ ] Segment 40 min radi bez rušenja
- [ ] Autonastavak na sledeći segment radi
- [ ] Ticker prikazuje **full timeline** (ne resetuje na 0 pri prelazu segmenata)

### UX
- [ ] “⏳ PRIPREMAM…” overlay se pojavljuje, start dugme je disable-ovano
- [ ] “Preporuka” blok se prikazuje u modalu i playeru

---

## 7) Fajlovi koji su ključni u ovom patch-u

- `index.html`
- `index-nosw.html`
- `service-worker.js`
- `css/main.css`
- `js/app.js`
- `js/audio/ios-rendered-track.js`
- `RELEASE_NOTES_v15.7.1.3.md` (ovaj fajl)
