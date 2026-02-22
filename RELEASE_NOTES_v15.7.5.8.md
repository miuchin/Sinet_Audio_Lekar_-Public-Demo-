# SINET Audio Lekar — Release Notes v15.7.5.8

**miuchins (Svetozar Miuchin) + SINET AI**

## Novo ✨
- **Integrativni vodič (generator)**: nova stranica `pages/integrativni_vodic.html` koja generiše *čitljiv*, obiman vodič na osnovu **MKB-10** + (opciono) poslednje izabrane **anamneze** + odabranih **SINET kataloških stavki**.
- U vodiču: **Kopiraj kompletan plan**, **Štampa**, **Preuzmi SharePack**, **Ubaci u SINET** (DS bridge).

## Unapređenja ✅
- Anamneza pamti poslednje izabranog pacijenta u `localStorage` (`ANAMNEZA_LAST_PATIENT`) radi personalizacije vodiča.
- Dugme **“🧾 Pregled vodiča”** u Anamnezi sada otvara integrativni generator sa prosleđenom MKB šifrom i izborom stavki.

## Offline / PWA 🔌
- Bump Service Worker cache key na `sinet-audio-v15.7.5.8`.
- Dodato keširanje generator stranice.

