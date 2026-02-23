# 🧩 Use‑case tutor #2: Kreiranje “Moj protokol” iz Queue (40 min × N dana)

> **Cilj:** da korisnik od trenutne 🎵 Liste (Queue) napravi trajni, ponovljiv plan rada koji se pokreće jednim klikom i može da se koristi danima.

---

## 0) 1‑min decision tree (brza odluka)

**Imaš već složene stavke u 🎵 Listi?**  
➡️ **DA** → idi na **Moji protokoli → Novi → Iz Liste (Queue)**

**Hoćeš dnevnu rutinu sa stabilnim trajanjem?**  
➡️ koristi **40 min** po segmentu (default/preporuka)

**Hoćeš da se ponavlja više dana?**  
➡️ koristi **Ponovi N puta** (npr. 7, 14, 21)

**Nisi siguran šta prvo:**  
➡️ prvo napravi Queue, tek onda protokol.

---

## 1) Razlika između pojmova (da se korisnik ne zbuni)

### 🎵 Queue / Lista
Privremena radna lista “šta puštam sada”.  
Dobra za eksperimentisanje i slaganje redosleda.

### ⭐ Favoriti
Brzi pristup pojedinačnim stavkama.  
Nije isto što i plan/protokol.

### ➕ Moji simptomi
Korisnikove lične stavke (ručno dodate / AI generisane).  
Služi za proširenje baze.

### 🧩 Moji protokoli
Trajni, sačuvani **redosled + logika ponavljanja**.  
Ovo je pravi alat za dnevne rutine.

> **Pravilo:** Ako često puštaš istu kombinaciju — prebaci je iz Queue u **Moj protokol**.

---

## 2) Priprema (pre kreiranja protokola)

Pre nego što kreneš:

- proveri da Queue nije prazna
- složi stavke u željenom redosledu
- po potrebi ukloni višak iz Liste
- testiraj kratko ▶ da vidiš da li redosled “ima smisla”

---

## 3) Glavni protokol: “Moj protokol iz Queue” (korak-po-korak)

### Korak A — Napravi/sredi Queue
1. Otvori **📚 Katalog**.
2. Dodaj stavke u **🎵 Lista** (dugme “+ U listu”).
3. Idi na **🎵 Lista** i proveri redosled.
4. Ako treba, preuredi/rediguj listu.

### Korak B — Kreiraj protokol iz Queue
5. Otvori **🧩 Moji protokoli**.
6. Tapni **➕ Novi**.
7. Izaberi **🎵 Iz Liste (Queue)**.
8. Aplikacija kopira stavke iz trenutne Liste u novi protokol.

### Korak C — Naziv i osnovna podešavanja
9. Upiši naziv (primeri):
   - `Jutarnja rutina 40 min`
   - `Veče – smirenje i san`
   - `Fokus + energija (7 dana)`
10. (Opcionalno) dodaj kratak opis ili napomenu ako polje postoji.

### Korak D — Loop / ponavljanje (ključni deo)
11. Podesi **trajanje po segmentu**:
   - preporuka: **40 min** (default u vašem sistemu)
12. Uključi / podesi **Ponovi N puta**.
13. Unesi **N** (broj ponavljanja / ciklusa / dana po planu, zavisi kako koristiš modul).
14. Izaberi scope ponavljanja:
   - **(A) Ponovi stavku/simptom/protokol segment** *(default, “lekarski” režim)*
   - **(B) Ponovi celu Queue listu** *(kad želiš isti ceo ciklus ispočetka)*
15. Sačuvaj (**💾 Sačuvaj**).

### Korak E — Pokretanje i provera
16. U listi **Moji protokoli** pronađi novi protokol.
17. Tapni **▶ Pokreni**.
18. Proveri da prikaz pokazuje očekivano trajanje / stavke / loop logiku.

---

## 4) Polje-po-polje (praktično objašnjenje)

> Nazivi mogu blago da variraju po verziji, ali logika ostaje ista.

### Naziv protokola
- **Šta znači:** ime tvog plana
- **Dobra praksa:** ime + namena + trajanje (npr. “San 40 min – 14 dana”)
- **Greška:** generičko ime tipa “proba1” (kasnije se ne zna šta je)

### Izvor: “Iz Liste (Queue)”
- **Šta radi:** prepisuje trenutnu Queue u protokol
- **Bitno:** ako Queue menjaš kasnije, već sačuvan protokol ostaje svoj entitet (zavisno od implementacije; tretiraj ga kao snapshot)

### Trajanje po segmentu (npr. 40 min)
- **Šta znači:** koliko traje jedna frekvencija/segment u protokolu
- **Prednost 40 min:** stabilna rutina, lako planiranje dana
- **Greška:** predugo trajanje odmah na početku (korisnik odustane)

### Ponovi N puta
- **Šta znači:** koliko puta se ciklus ponavlja
- **Primeri:**
  - 7 = jedna nedelja
  - 14 = dve nedelje
  - 21 = navika/rutina period

### Scope (A/B)
- **A (stavka/protokol segment):** ponavljanje fokusirano, često korisno za “ciljani rad”
- **B (cela Queue):** kompletan ciklus se vrti u krug, korisno za set rutine

---

## 5) Preporučeni use-case scenariji

### Scenario 1 — “Plan za danas” (jednostavno)
- Složi 3–6 stavki u Queue
- Napravi protokol iz Queue
- 40 min po segmentu
- N = 1 (ili bez dodatnog ponavljanja)
- Pokreni ▶

### Scenario 2 — “Rutina 40 min × 7 dana”
- Složi standardnu listu
- Moji protokoli → Iz Liste
- 40 min
- N = 7
- Sačuvaj pod jasnim nazivom (npr. `Jutro 40×7`)

### Scenario 3 — “Lekarski / ciljani režim”
- 1–2 ciljane stavke u Queue
- Scope = **A** (ponavljanje stavke)
- N po planu koji korisnik prati

---

## 6) Tipične greške i rešenja

### ❌ “Napravio sam protokol, ali je prazan”
**Uzrok:** Queue je bila prazna.  
**Rešenje:** prvo dodaj stavke u 🎵 Lista, pa ponovi kreiranje.

### ❌ “Sve traje predugo”
**Uzrok:** previše stavki × dugo trajanje × veliki N.  
**Rešenje:** smanji broj stavki ili N; zadrži 40 min kao standard i skrati listu.

### ❌ “Ne znam da li da biram A ili B”
**Rešenje:** kreni od **A (default)**; B koristi tek kad želiš kompletan loop cele liste.

### ❌ “Na mobilnom mi je konfuzno gde je šta”
**Rešenje:** prvo složi Queue → tek onda otvori Moji protokoli. Ne radi sve odjednom.

---

## 7) Kako znati da je protokol dobro napravljen (kontrola kvaliteta)

- [ ] Naziv je jasan
- [ ] Queue je imala pravi redosled
- [ ] Trajanje po segmentu je smisleno (npr. 40 min)
- [ ] N nije prevelik za početak
- [ ] Scope (A/B) je svesno izabran
- [ ] Protokol se pokreće jednim klikom i radi očekivano ✅

---

## 8) Kratka verzija (za korisnika početnika)

**Queue = probna lista. Moj protokol = sačuvana rutina.**  
Kad nešto koristiš često, prebaci to u **Moji protokoli** i sačuvaj kao 40 min × N dana. ✅
