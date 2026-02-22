# RELEASE NOTES — v15.7.6.7

Autor: miuchins (Svetozar Miuchin) • Ko-autor: SINET AI

## Novo
- 🧭 **dx_index generator (MKB → SINET)**: nova offline alat-stranica `sinet-dx-index-generator.html` koja automatski pravi `data/sinet_dx_index.json` iz popunjenog `SINET_STL.json` (`mkb10.sifra` / `mkb10.naziv`).
- 🛠️ **Admin**: dodat link ka dx_index generatoru.

## Offline / PWA
- Service Worker cache bump na `sinet-audio-v15.7.6.7` i dodato keširanje `sinet-dx-index-generator.html`.

## Tools (CLI)
- Dodato: `tools/generate_dx_index_from_catalog.py` + `.sh` (dx_index iz kataloga bez eksternih “symptoms” fajlova).

## Dijagnostika
- Anamneza SINET bridge: ako nema tačan match za ICD kod sa tačkom, radi fallback na parent kod (npr. `E00.0` → `E00`).
