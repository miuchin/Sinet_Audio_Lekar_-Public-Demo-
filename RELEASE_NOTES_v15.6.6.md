# SINET Audio Lekar — Release Notes v15.6.6

## Fokus (🍏 iPhone)
- ✅ **PRO play unlock fix**: primovanje *istog* hidden `<audio>` elementa koji se koristi za iOS PRO playback (SILENT_WAV) → manje `NotAllowedError` / “nema zvuka”.
- ✅ **Loader Retry**: dugme **🔄 Pokušaj ponovo** + `app.retryCatalog(true)` kada iOS/SW-cache “pojede” `/data` fajlove.
- ✅ **iOS DIAG upgrade**: sada prikazuje:
  - `catalog=state:count`
  - `pro/exp` režim
  - `primeR/primeM` status (da vidimo da li je audio element primovan)

## UX
- Loader sada ima `loader-text`, `loader-detail` i retry dugme (vidljivo samo kad treba).
- “STARIJI — NAJČEŠĆE” preset klik sada daje poruku ako katalog nije spreman (umesto “ništa se ne desi”).

## Napomena
- iOS background playback u browser-u ostaje **best-effort** (web-only ograničenja).
- Za debug na iPhone-u koristimo **iOS DIAG** (bez potrebe za Safari console).

Datum: 2026-02-17
