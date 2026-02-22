# SINET Audio Lekar — Release Notes v15.7.6.1

## Fixes
- **MKB-10 Linker**: automatsko učitavanje `data/mkb10_sr.json` + jasniji log; `Preuzmi STL (linked)` radi čim je STL učitan.
- **Backup/Restore**: import sada vraća i **Moje protokole** (IndexedDB `protocols`) + backup uključuje sve relevantne `localStorage` ključeve (`sinet_*`, `SINET_*`, `anamneza_*`, `ANAMNEZA_*`, `sinetNotes`, `sinetHistory`).

## Data
- `data/sinet_dx_index.json` proširen za:
  - **K29** (Gastritis i duodenitis)
  - **R52** (Bol, nespecificiran)

## Service Worker
- Cache bump: `sinet-audio-v15.7.6.1`.
