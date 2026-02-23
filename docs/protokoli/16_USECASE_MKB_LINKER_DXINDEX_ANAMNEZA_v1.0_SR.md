# 🩺 Use‑case tutor #3: MKB Linker → dx_index → Anamneza (ceo tok, korak-po-korak)

> **Cilj:** da katalog dobije kvalitetne MKB veze + brz indeks (`dx_index`) kako bi **Anamneza** davala brže i smislenije predloge.

---

## 0) 1‑min decision tree (brza odluka)

**Menjao si STL katalog (novi simptomi, patch, import)?**  
➡️ **DA** → pokreni pipeline: **MKB Linker → dx_index → Apply local / data file → test u Anamnezi**

**Ima mnogo stavki bez MKB?**  
➡️ koristi **Auto-link**, zatim ručnu proveru i (opciono) AI batch mapiranje.

**Stavka nije dijagnoza (duhovno/protokol/podrška)?**  
➡️ označi **NON_ICD** (ne forsirati ICD).

---

## 1) Šta je šta (da korisnik/admin zna ulogu svakog koraka)

### STL (katalog stavki)
Glavni sadržaj sistema: simptomi, opisi, kandidati, frekvencije, metapodaci.

### MKB Linker
Alat koji pomaže da stavke dobiju:
- MKB/ICD šifru
- naziv veze
- tip (`DX`, `SYMPTOM`, `INJURY`, `FACTOR`, `NON_ICD`)
- confidence / napomenu

### `dx_index`
Brzi pomoćni indeks (derivat STL/MKB veza) koji Anamneza koristi za pretragu i predloge.

### Anamneza
Korisnički modul koji koristi rezultat pipeline-a da nudi bolja poklapanja i predloge.

> **Suština:** Linker uređuje semantiku, `dx_index` ubrzava rad, Anamneza koristi oba rezultata.

---

## 2) Pre uslova (pre nego što kreneš)

Pripremi:

- ulazni STL fajl (glavni ili patch)
- po mogućstvu backup pre izmene
- jasnu odluku šta je dijagnoza/simptom, a šta **NON_ICD**
- vreme za proveru “low confidence” stavki (tu se pravi kvalitet)

---

## 3) Glavni pipeline (tačan redosled)

## A) Učitaj STL u MKB Linker
1. Otvori **🛠️ Admin alati → MKB Linker**.
2. Klikni **Učitaj / Load STL**.
3. Izaberi odgovarajući fajl (`SINET_STL...json`, patch STL ili drugi ulaz).
4. Sačekaj da Linker prikaže broj stavki / status učitavanja.

### Provera uspeha
- vidiš ukupan broj stavki ✅
- nema greške u parsiranju JSON-a ✅

---

## B) Auto-link (prvi prolaz)
5. Klikni **⚡ Auto-link**.
6. Linker pokušava da mapira sigurne/slabije veze na osnovu pravila/kandidata.
7. Pregledaj rezultate po grupama (zavisno od UI-a):
   - mapirano
   - bez MKB
   - low confidence
   - konflikt / više kandidata

### Šta ovde NE treba raditi na brzinu
- Ne prihvataj slepo sve “slično zvuči” rezultate.
- Ne guraj ICD šifru u stavke koje su očigledno protokoli/podrška/duhovne stavke.

---

## C) Ručna korekcija + NON_ICD (najvažniji kvalitetni korak)
8. Otvori listu problematičnih stavki.
9. Za svaku proveri značenje naziva/opisa.
10. Ako stavka **nije** dijagnoza/simptom u ICD smislu:
    - označi **NON_ICD**
11. Ako jeste simptom/dijagnoza/povreda/faktor:
    - koriguj vrstu (`DX`, `SYMPTOM`, `INJURY`, `FACTOR`) i šifru
12. Sačuvaj / potvrdi izmene u Linker-u.

### Pravilo za tim/korisnika
**Bolje NON_ICD nego pogrešan ICD.** ✅

---

## D) (Opcionalno) AI batch mapiranje za missing stavke
Koristi kada ima mnogo nepopunjenih stavki.

13. Klikni **Export missing (batch)** ili slično dugme.
14. Dobijeni batch pošalji AI workflow-u (po vašim pravilima JSONL razmene).
15. Dobiješ JSONL rezultate mapiranja.
16. U Linker-u klikni **Import AI results**.
17. Pregledaj rezultate — posebno stavke sa manjim confidence.

### Kontrola kvaliteta posle AI importa
- pregledaj “granične” slučajeve
- proveri da AI nije mapirao podršku/protokole kao ICD dijagnoze
- po potrebi prebaci u **NON_ICD**

---

## E) Generisanje `dx_index`
18. Klikni **⚙️ Generiši dx_index**.
19. Alat pravi indeks koji Anamneza koristi za brža poklapanja.
20. Sačuvaj izlaz (ako radiš ručno) kao:
   - `data/sinet_dx_index.json` *(ili naziv koji vaš build očekuje)*

### Provera uspeha
- fajl je generisan ✅
- nije prazan ✅
- broj unosa deluje realno ✅

---

## F) Primena i test u Anamnezi
21. Ako postoji dugme **Apply local / Primeni local override** — koristi ga za instant test.
22. Otvori **🩺 Anamneza**.
23. Unesi nekoliko poznatih primera (dijagnoze/simptomi) koje si menjao.
24. Proveri da predlozi izgledaju bolje / preciznije.
25. Ako nije dobro:
   - vrati se u Linker
   - koriguj problematične stavke
   - regeneriši `dx_index`
   - ponovo testiraj

> Ovo je normalan iterativni proces. Kvalitet raste kroz 2–3 kruga provere.

---

## 4) Polje-po-polje (praktični pogled u Linker logiku)

> UI može imati različit raspored, ali ova polja/logika su suština.

### Naziv stavke
- Iz STL kataloga
- Glavni signal za mapiranje
- Greška: gledati samo naziv bez opisa

### Opis
- Dodatni kontekst (simptom, podrška, protokol, akutno stanje…)
- Često presudan za razlikovanje DX vs NON_ICD

### Kandidati (code/title/score)
- Predlozi mapiranja koje alat/AI vidi
- `score` pomaže, ali **nije presuda**
- Visok score ≠ automatski tačno

### Vrsta (`kind`)
- `DX` → dijagnoza
- `SYMPTOM` → simptom (često R-kodovi)
- `INJURY` → povreda/akutno (S/T)
- `FACTOR` → faktori stanja
- `NON_ICD` → stavka van ICD domena

### Confidence
- Koliko veruješ mapiranju
- Koristi ga kao signal prioriteta za ručnu proveru

### Note / napomena
- Zašto je nešto označeno kao NON_ICD
- Zašto je promenjena šifra
- Korisno za budući audit rada

---

## 5) Tipične greške (i kako da ih izbegneš)

### ❌ “Sve sam auto-linkovao i gotovo”
**Problem:** u praksi ostaju pogrešne veze.  
**Rešenje:** obavezno pregledaj low confidence + non-obvious stavke.

### ❌ “Duhovna/podrška stavka dobila ICD šifru”
**Problem:** kvari semantiku Anamneze i indeks.  
**Rešenje:** prebaci u **NON_ICD**.

### ❌ “dx_index je generisan, ali Anamneza se ne menja”
**Uzrok:** stari cache / pogrešna putanja / nije primenjen local override.  
**Rešenje:** proveri fajl putanju, Apply local, refresh/PWA cache reset po potrebi.

### ❌ “Previše ručnog rada”
**Rešenje:** koristi AI batch za missing stavke, ali uvek radi finalnu proveru.

---

## 6) Brzi QA checklist (pre nego što kažeš ‘spremno’)

- [ ] Učitavanje STL prošlo bez greške
- [ ] Auto-link odrađen
- [ ] Low confidence pregledan
- [ ] NON_ICD korekcije urađene
- [ ] (Opcionalno) AI import pregledan
- [ ] `dx_index` generisan
- [ ] Testirano u Anamnezi na realnim primerima
- [ ] Rezultat deluje smisleno i stabilno ✅

---

## 7) Kratka verzija (za operativni rad)

**Kad menjaš katalog:**  
`MKB Linker → (Auto-link + ručna provera + NON_ICD) → dx_index → test u Anamnezi` ✅

To je standardni SINET admin pipeline za kvalitet i brzinu rada.
