# SINET — PROTOKOL: Anamneza (v1.0, SR)

**Uloga Anamneze:** da od MKB-10 šifre (ili simptoma/pojma) dođeš do praktičnih SINET predloga, i da sve možeš da izvezeš u čitljiv izveštaj (Template v2).

> ⚠️ **Napomena:** Anamneza ne postavlja dijagnozu. Koristi se kao organizacioni i edukativni vodič.

---

## 1) Pre početka (što treba da postoji)

1. U folderu `data/` treba da postoje:
   - `mkb10_sr.json` (MKB-10 šifarnik)
   - `sinet_dx_index.json` (veza MKB → SINET)
2. Ako dx_index nije dobar → koristi **Admin Tools → MKB Linker → dx_index generator**.

---

## 2) Koraci: kreiranje anamneze (step-by-step)

### 2.1 Napravi pacijenta / zapis
1. Otvori **Anamneza**
2. Klikni **+ Nova anamneza** (ili izaberi postojećeg pacijenta)
3. Unesi osnovne podatke (ako su polja dostupna): ime/oznaka, napomena
4. Klikni **Sačuvaj** (ako postoji)

### 2.2 Pretraga MKB-10
1. U polje pretrage upiši:
   - šifru (npr. `I10`) ili
   - naziv (npr. “hipertenzija”) ili
   - deo reči
2. Klikni rezultat u listi

### 2.3 “Povezano u SINET”
1. Nakon izbora MKB šifre, panel **Povezano u SINET** prikazuje predloge
2. Odaberi stavke koje želiš
3. Opcije:
   - **🎵 Ubaci u SINET** (doda u Listu/Queue ili protokol, zavisi od modula)
   - **📦 SharePack** (podela paketa)
   - **🧾 Pregled vodiča** (Integrativni vodič)

---

## 3) Polje-po-polje (najčešće stvari)

### A) Polje: MKB-10 pretraga
- **Šta unosiš:** šifra ili naziv
- **Saveti:**
  - koristi kratke pojmove (“sinus”, “stres”, “bol”)
  - probaj i latinicu i ćirilicu (zavisi od šifarnika)

### B) Panel: Povezano u SINET
- **Odakle dolazi:** `data/sinet_dx_index.json` + katalog
- **Šta znači redosled:** prvo najrelevantnije (više referenci / bolji score)

### C) Dugmad: Ubaci u SINET / SharePack
- **Ubaci u SINET:** praktično “pošalji u terapiju” (da korisnik odmah može ▶)
- **SharePack:** napravi paket (za deljenje ili arhivu)

---

## 4) Izvoz (Template v2) — uvek isto

U Anamnezi postoji izvoz u:
- **TXT** (za brzo čitanje)
- **MD** (za dokumentaciju)
- **HTML (Template v2)** (najčitljivije + štampa + email)

**Tip:** koristi dugme **📋 Kopiraj kompletan plan** u Template v2 izveštaju.

---

## 5) Tipični protokoli (praktika)

### Protokol 1: “Imam MKB šifru, treba mi plan”
1) Pretraga šifre → 2) Povezano u SINET → 3) čekiraj stavke → 4) Ubaci u SINET → 5) ▶ Pokreni

### Protokol 2: “Hoću izveštaj za štampu”
1) Popuni izbor → 2) Export **HTML** → 3) Štampa (ili Email)

---

## 6) Troubleshooting

- **Ne vidim “Povezano u SINET”** → proveri da `sinet_dx_index.json` postoji i nije prazan
- **Predlozi su loši** → pokreni Linker + dx_index generator ponovo
- **Ne pamti pacijente** → proveri da browser ne briše site data (PWA / privacy settings)
