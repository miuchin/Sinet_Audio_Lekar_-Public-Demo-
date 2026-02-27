# SINET — Model A (freq_catalog) drop-in

## Šta je ovo
Ovaj ZIP sadrži `SINET_STL.json` već dopunjen sa:
- `meta.freq_catalog` (početni set od 14 frekvencija sa naziv/opis/izvor/evidence)

## Gde ide (isto ime fajla, bez promena)
Zameni fajl:
`/Sinet_Audio_Lekar_(Public Demo)/data/SINET_STL.json`

## Kontrola integriteta
SHA256:
`530ae7fb82844ccb8d60948f708029a6a2d5afc161a9d2e48e822faaa9cc2937`

## VAŽNO
Da bi se opis frekvencije prikazivao u UI-u, potrebno je da UI koristi fallback:
- ako je `frekvencije[i].opis` prazno → koristi `meta.freq_catalog[hz].opis`

Minimalni JS primer je u:
`_docs/freq_catalog_ui_patch_min.js`
