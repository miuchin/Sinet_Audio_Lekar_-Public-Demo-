# SINET Audio Lekar — Release Notes v15.8.0.0

Datum: 2026-02-18

## Nova funkcija: INTEGRATIVNO (Vera) — FULL export
U *Modal detalji* dodat je blok **INTEGRATIVNO (Vera)** sa:
- 📋 Kopiraj TXT (plan koji je čitljiv i spreman za deljenje)
- 🧾 Kopiraj HTML
- 💾 Sačuvaj HTML (fajl)
- 🖨 Print / Save as PDF (otvara novi prozor, štampa ili čuva kao PDF)
- 🧠 AI Prompt (prompt za generisanje integrativnog plana u JSON formatu)

Export radi i kad integrativni sadržaj ne postoji — automatski sklapa plan iz postojećih polja (opis, MKB-10, holistika, frekvencije).

## STL adapter: extensions
`js/catalog/stl-adapter.js` sada mapira:
- `extensions.preporuka` → runtime `item.preporuka` (+ `trajanjePoFrekvencijiMin`)
- `extensions.integrativni` → runtime `item.integrativni`

## Novi alat: Items → STL Converter
Dodato: `sinet-items-to-stl.html` (offline), dostupan iz `admin.html`.

## Inspector: kompatibilnost
`sinet_inspector_v15.html` sada prepoznaje kataloške unose sa:
- `naziv` (umesto `simptom`)
- `mkb10_obj` / `mkb10` kao objekat (code/sifra)

---
Autor: miuchins & SINET AI
