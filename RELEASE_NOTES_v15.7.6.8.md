# SINET Audio Lekar — Release Notes v15.7.6.8

## MKB-10 Linker (Katalog ↔ MKB)
- Dodato: **Export za AI u batch-evima** (više manjih JSONL fajlova) radi lakšeg rada sa modelima koji imaju limit (Gemini/DeepSeek).
- Dodato: **dx_index generator direktno u Linkeru** (⚙️ Generiši dx_index) + **Preuzmi** `sinet_dx_index.json`.
- Dodato: **Primeni dx_index (local)** — snima `SINET_DX_INDEX_OVERRIDE` u localStorage (Anamneza koristi override bez menjanja fajlova).
- Dodato: **Sačuvaj STL (local)** — snima `SINET_STL_OVERRIDE` u localStorage (opciono).
- Popravke UX: vidljivija dugmad + bolji kontrast.

## Anamneza
- Podržan `localStorage` override:
  - `SINET_DX_INDEX_OVERRIDE`
  - `SINET_STL_OVERRIDE`

## DS-Generator
- Podržan `?catalog=local` za učitavanje kataloga iz `localStorage` (`SINET_STL_OVERRIDE`).

## Offline
- Service Worker cache bump: `sinet-audio-v15.7.6.8`.
