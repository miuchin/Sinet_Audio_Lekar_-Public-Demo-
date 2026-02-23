# SINET — PROTOKOL: Admin Tools (Converter / DeDupe / Linker / dx_index / Inspektor) (v1.0, SR)

**Uloga:** održavanje kataloga tako da Anamneza i svi vodiči rade precizno.

> ⚠️ Ovaj deo je za “admin režim” (ti ili osoba koja održava katalog).

---

## 1) Zlatni tool-chain (redom, bez preskakanja)

1) **Catalog Converter** (ako krećeš iz starog formata)  
2) **DeDuplikator** (spajanje duplikata)  
3) **MKB Linker** (mapiranje na MKB-10 / NON_ICD)  
4) **dx_index generator** (MKB → SINET indeks)  
5) **Inspektor v15** (kontrola kvaliteta, prazna polja)

Svaki alat ima isti export UX: **🧾 Izveštaj (HTML)** (Template v2) + **⬇️ JSON**.

---

## 2) Catalog Converter (Old → STL)

### Koraci
1. Otvori **sinet-catalog-converter.html**
2. Učitaj ulazni fajl (stari katalog)
3. Klikni **Convert**
4. Otvori **🧾 Izveštaj (HTML)**
5. Preuzmi JSON (iz topbar-a) → sačuvaj kao npr. `SINET_STL_converted.json`

### Šta proveravaš
- da su `id`, `naziv`, `frekvencije` popunjeni

---

## 3) DeDuplikator

### Koraci
1. Otvori **sinet-deduplicator.html**
2. Učitaj STL
3. Klikni **DeDupe**
4. Otvori **🧾 Izveštaj (HTML)**
5. Preuzmi **⬇️ Čist STL** (ili JSON)

### Pravilo
- duplikati se spajaju “unijom frekvencija” (ne gubi se sadržaj)

---

## 4) MKB Linker

### Koraci
1. Otvori **sinet-mkb-linker.html**
2. Učitaj STL
3. Pokreni auto-link (sigurno)
4. Ručno dotegni sporne stavke (po potrebi)
5. Označi NON_ICD gde treba
6. **Generiši dx_index** (ako dugme postoji)
7. Otvori **🧾 Izveštaj (HTML)**
8. Preuzmi:
   - `SINET_STL_linked.json`
   - `sinet_dx_index.json` (ako je generisan)

---

## 5) dx_index generator

### Koraci
1. Otvori **sinet-dx-index-generator.html**
2. Učitaj “linked STL”
3. Klikni **Generate dx_index**
4. Otvori **🧾 Izveštaj (HTML)**
5. Preuzmi `sinet_dx_index.json`

### Gde ide fajl
- u aplikaciji: `data/sinet_dx_index.json`

---

## 6) Inspektor v15

### Koraci
1. Otvori **sinet_inspector_v15.html**
2. Učitaj STL
3. Prođi kroz upozorenja (prazna polja, loši unosi)
4. Popravi i sačuvaj
5. Izveštaj: **🧾 Izveštaj (HTML)**

---

## 7) Najčešće greške

- mešanje više verzija fajlova (uvek radi na jednom “izvoru istine”)
- zaboravljen update `data/sinet_dx_index.json`
- duplikati ostavljeni pre Linkera
- ručno editovanje bez Inspektora (uvek proveri)
