# SINET Model A — Opis frekvencija (održivo rešenje)

## Cilj
Da korisnik uvek vidi:
- **šta znači frekvencija**
- **čemu se tipično koristi (u okviru aplikacije)**
- **izvor informacije / nivo dokaza** (kada je dostupno)

…bez dupliranja teksta na hiljade mesta u katalogu.

## Rešenje (Model A)
U `SINET_STL.json` koristimo centralni rečnik:

`meta.freq_catalog = { "<hz_key>": { naziv, opis, izvor, evidence, tags } }`

UI render radi ovim redom:
1) Ako `frekvencije[i].opis` postoji → prikaži to (override).
2) Inače → pogledaj `meta.freq_catalog[hz]`.
3) Ako nema ničega → prikaži "Opis nije definisan" + opciju da korisnik vidi prazno polje (transparentno).

## Alat
U `tools/` su:
- `freq_catalog_seed.json` — početni “seed” (mali broj frekvencija)
- `inject_freq_catalog.py` — ubacuje/merguje seed u postojeći `SINET_STL.json` (bez promene imena fajla)

### Upotreba
```bash
python tools/inject_freq_catalog.py "/Sinet_Audio_Lekar_(Public Demo)/data/SINET_STL.json" tools/freq_catalog_seed.json
```

## UI patch
U `snippets/freq_catalog_ui_patch.js` je generički kod koji ubacuje fallback logiku u render.
