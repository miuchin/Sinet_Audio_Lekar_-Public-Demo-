# MKB-10 (ICD-10) база — локална генерација

Ovaj projekat **ne mora** da nosi ceo MKB-10 PDF u aplikaciji. Umesto toga, koristi se kompaktan JSON fajl koji aplikacija *automatski učitava* ako postoji:

- `data/mkb10_sr.json`

Ako fajl **ne postoji**, Anamneza i dalje radi sa mini (demo) MKB listom.

## 1) Generisanje JSON iz PDF-a

> Potreban je alat `pdftotext` (paket *poppler* / *poppler-utils*).

### Linux (primer)

```bash
sudo apt-get install -y poppler-utils
python3 tools/extract_mkb10_from_pdf.py --pdf /putanja/do/mkb10.pdf --out data/mkb10_sr.json
```

Ili wrapper:

```bash
tools/extract_mkb10_from_pdf.sh /putanja/do/mkb10.pdf data/mkb10_sr.json
```

## 2) Kako se koristi u Anamnezi

- Otvori `anamneza.html`
- Ako je `data/mkb10_sr.json` prisutan, Anamneza će prikazati:
  - poglavlja (A00–B99, C00–D48, …)
  - pretragu preko kompletne baze

Klik na šifru (badge) ➜ aktivira SINET bridge i predlog protokola.

## 3) Napomena o autorskim pravima

Prevod MKB-10 na srpski (i slični materijali) mogu biti **zaštićeni autorskim pravom**.

✅ Preporuka:
- Drži PDF i generisani `mkb10_sr.json` **lokalno** (ili privatni repo)
- Ne ubacuj ih u javni GitHub, osim ako imaš prava za redistribuciju
