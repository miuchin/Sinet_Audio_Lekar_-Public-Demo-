# SINET Audio Lekar — Release Notes v15.7.6.0

Autorstvo: **miuchins (Svetozar Miuchin)** + **SINET AI**.

## Novo

### 🧬 MKB-10 Linker (Admin alat)
- Dodat novi offline alat **`sinet-mkb-linker.html`**.
- Učitava **`data/SINET_STL.json`** + **`data/mkb10_sr.json`** i:
  - predlaže MKB-10 šifru po stavci (top kandidati)
  - opcija **Auto-link** upisuje samo “sigurne” match-eve (threshold + gap)
  - ručno potvrđivanje/izmena po stavci
  - eksport: **`SINET_STL.linked.json`** sa audit zapisom.

### 🆘 Brza pomoć u Anamnezi
- U Anamneza UI dodat panel **Brza pomoć (Hitno + SOS + Akutno)**.
- Automatski povlači stavke iz SINET kataloga prema ID šemi:
  - `*-sos`, `sys-hitno-*`, `akutne-povrede-*`
- Klik **Izaberi** (pripremi za import) ili **🎵 Ubaci** (instant import u SINET).

### 🧠 Dx index (početni “full power”)
- `data/sinet_dx_index.json` sada sadrži inicijalne mape:
  - **I10** (hipertenzija)
  - **M05.9** (reumatoidni artritis)

## Tehnički
- Service Worker cache bump: `sinet-audio-v15.7.6.0`.
- `js/anamneza-sinet-bridge.js` bump na `v15.7.6.0`.
