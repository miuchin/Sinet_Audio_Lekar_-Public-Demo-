# SINET Audio Lekar — Korisničko uputstvo (SR) v1.0
**Verzija aplikacije:** 15.5.1.1  
**Autor:** miuchins (Svetozar Miuchin) • **Koautor:** SINET AI  
**Tip:** Public demo (offline‑friendly / PWA)

> ⚠️ **Napomena / Odricanje odgovornosti:** Aplikacija je edukativna i informativna. Ne daje dijagnozu niti zamenjuje lekara.

---

## 0) Osnovni pojmovi (da se ne meša)
- **Katalog** = spisak simptoma/terapija (svaka ima svoju listu frekvencija).
- **Frekvencija** = pojedinačna Hz vrednost + opis + izvor (kada postoji).
- **⭐ Favoriti** = markirane terapije iz kataloga (brz pristup).
- **🎵 Queue / Lista** = red čekanja terapija (playlist) koji se pušta jednu po jednu.
- **🧩 Moji protokoli** = tvoje sopstvene sekvence frekvencija (koraci), sa minutažom po koraku + **Loop protokola**.

---

## 1) Prvi start (najbrži “radi odmah” postupak)
1. Otvori `index.html` (ili `index-nosw.html` za test bez offline keša).
2. Klikni **AKTIVIRAJ** (gore levo).  
   - Ovo “otključava” audio u browseru (obavezno na iOS-u).
3. Klikni **OTVORI KOMPLETAN KATALOG**.
4. Izaberi terapiju → otvori detalje → klikni **➕ U LISTU**.
5. Idi na **🎵 Lista** → klikni **▶ POKRENI LISTU**.

---

## 2) Katalog (simptomi/terapije)
### 2.1 Otvaranje detalja terapije
1. Uđi u **Katalog**.
2. Klikni na željeni simptom/terapiju.
3. Otvara se prozor sa:
   - opisom
   - MKB-10 (kad postoji)
   - frekvencijama
   - holističkim panelima (psihosomatika, afirmacija, molitva, narodni lek — gde je popunjeno)

### 2.2 Podešavanje trajanja po frekvenciji (slider)
1. U detaljima terapije pronađi slider za trajanje (min).
2. Pomeri slider → odmah se ažurira procena ukupnog vremena.

### 2.3 Uključivanje/isključivanje pojedinačnih frekvencija
U listi frekvencija postoji checkbox uz svaku frekvenciju:
- uključi/isključi frekvenciju iz izvođenja (korisno ako želiš da skratiš terapiju).

---

## 3) ⭐ Favoriti
### 3.1 Dodavanje u favorite
- U detaljima terapije klikni **⭐ FAVORIT**.
- Ili na listama koristi brzi “Favorit” taster (ako je prisutan).

### 3.2 Strana “Moji Favoriti”
1. Otvori **⭐ Favoriti**.
2. Klikni na terapiju za detalje ili je dodaj u **🎵 Listu**.

---

## 4) 🎵 Queue / Lista (playlist)
### 4.1 Dodavanje terapije u listu
- Iz kataloga ili favorita klikni **➕ U listu**.

### 4.2 Menjanje minutaže po terapiji (u listi)
U listi možeš podesiti:
- minutažu po frekvenciji za tu terapiju (kada je omogućeno UI-jem)

### 4.3 Puštanje liste
1. Otvori **🎵 Lista**.
2. Klikni **▶ POKRENI LISTU**.
3. Player prelazi automatski sa terapije na terapiju.

### 4.4 Panel “Frekvencije” (tokom puštanja)
Klikni na “FREKVENCIJE” da vidiš checklistu:
- koja frekvencija je završena
- koja je trenutno aktivna

---

## 5) 🧩 Moji protokoli (Generator)
Ovo je “najmoćniji” deo: praviš svoje sekvence, kombinuješ module i lične dodatke.

### 5.1 Kreiranje novog protokola
1. Otvori **🧩 Moji protokoli**.
2. Klikni **➕ Novi**.
3. Unesi **Naziv** protokola.

### 5.2 Loop protokola (ponavljanje)
U editoru postoji sekcija **Loop protokola**:
1. Uključi checkbox **Uključi**.
2. Unesi broj ponavljanja (npr. 2, 3, 5…).
- Loop 1× = bez ponavljanja (normalno).

> Savet: kreni sa 2× ili 3×, pa povećaj po osećaju.

### 5.3 Dodavanje koraka ručno
1. U sekciji **➕ Dodaj ručno** upiši:
   - Hz (npr. 7.83)
   - minute (npr. 5)
   - opis (opciono: “fokus”, “smirenje”…)
2. Klikni **Dodaj**.

### 5.4 Dodavanje iz kataloga (simptom ili pojedinačna frekvencija)
1. U sekciji **🔎 Dodaj iz kataloga** upiši:
   - naziv simptoma ili
   - Hz broj ili
   - deo opisa
2. Klikni **Traži**.
3. Klikni **➕** da dodaš:
   - ceo modul (sve frekvencije iz simptoma) ili
   - samo jednu frekvenciju (u zavisnosti od rezultata)

### 5.5 Generisanje protokola “na klik”
- **⭐ Iz Favorita**: napravi protokol od svih favorita (redom).
- **🎵 Iz Liste**: napravi protokol od trenutne Queue liste.

### 5.6 Kombinovanje “modul + lični dodatak”
Najčešći workflow:
1. Napravi protokol iz Favorita (ili Liste).
2. Dodaj ručno 1–3 lična koraka (npr. “brainwaves za učenje”).
3. Uključi Loop (npr. 2×) ako želiš dužu sesiju.
4. Sačuvaj.

### 5.7 Čuvanje protokola
Klikni **💾 Sačuvaj**.  
Protokol se pojavi u listi sa akcijama:
- **▶ Pusti** (odmah)
- **✏️ Izmeni**
- **⬆ Export**
- **🗑 Obriši**

---

## 6) Export/Import protokola (JSON)
### 6.1 Export svih protokola
1. **🧩 Moji protokoli** → klik **⬆ Export**
2. Sačuvaj `.json` fajl (backup protokola)

### 6.2 Import protokola
1. **🧩 Moji protokoli** → klik **⬇ Import**
2. Izaberi `.json`
3. Sistem radi:
   - validaciju
   - merge (ne briše postojeće)
   - rešava ID konflikt (ako je potrebno)

---

## 7) Backup / Restore (da se sačuva sve korisničko)
Backup treba da sačuva:
- ⭐ Favoriti
- 🎵 Lista (Queue)
- 🧩 Moji protokoli
- Moji simptomi / overrides (ako ih koristiš)
- Podešavanja (koliko je primenljivo)

**Preporuka:** uradi backup pre većih izmena ili pre prebacivanja na drugi uređaj.

---

## 8) Offline mode / Instalacija aplikacije (PWA)
Ako klikneš **INSTALIRAJ SADA**:
- Browser može instalirati aplikaciju kao PWA (ikonica na početnom ekranu).
- Aplikacija može raditi i bez interneta (kada je offline keš pravilno povučen).

> Offline mode = aplikacija i katalog se učitavaju bez interneta.  
> Offline mode **ne znači** da iOS dozvoljava pouzdan background audio u browseru.

---

## 9) iPhone / iOS — važno ograničenje
Na iOS browserima (Safari/Chrome) zvuk iz WebAudio/oscillator-a **nije pouzdano podržan u background-u**.
- Stabilno ponašanje: aplikacija radi najbolje kada je **u foreground-u**.
- Eksperimentalni background može izazvati artefakte (“pulsiranje”) ili prekid posle par sekundi.

**Ako je cilj:** “radi i sa ugašenim ekranom” (kao Spotify/Zapper) → potrebno je native wrapper rešenje (Capacitor i slično).

---

## 10) Brzi “scenariji” (primeri)
### Primer A: Terapija + lični dodatak
1. Dodaj terapiju u Queue.
2. Uđi u **Moji protokoli** → **🎵 Iz Liste**.
3. Dodaj ručno “fokus/brainwaves” frekvencije.
4. Loop 2×.
5. ▶ Pusti.

### Primer B: Samo iz Favorita
1. Obeleži 5 terapija kao favorite.
2. **Moji protokoli** → **⭐ Iz Favorita**.
3. Sačuvaj, pa ▶ Pusti.

---

## 11) Rešavanje problema (najčešće)
- **Nema zvuka:** klikni **AKTIVIRAJ** pa tek onda ▶.
- **Katalog se ne učitava:** proveri konzolu (F12). Ako postoji greška u `app.js` — prepiši najnoviji ZIP.
- **PWA čudno kešira:** koristi `index-nosw.html` za test ili obriši site data / unregister service worker.

---
