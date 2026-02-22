# SINET Audio Lekar — Release notes (v15.7.6.3)

Autor: **miuchins (Svetozar Miuchin)** + **SINET AI**

## Popravke i novosti

### 1) ✅ Meni: skrol ide u meni (ne u pozadinu)
- Kada je meni otvoren, pozadina se više ne skroluje.
- Meni panel je scrollable i radi prirodno na mobilnom.

### 2) 💾 “STANDARD” iz modala (izvoz u STL)
- U detaljima terapije/simptoma postoji novo dugme **💾 STANDARD**.
- Preuzima se STL JSON za tu stavku (korisno za ubacivanje u kanonski katalog).

### 3) ⬇️ Izvoz “Moji simptomi” u STL
- Na stranici **➕ Moji simptomi** postoji dugme: **⬇️ IZVEZI 'MOJI SIMPTOMI' (STL)**.
- Dobijaš fajl spreman za merge u SINET_STL.json (Converter/DeDuplikator/Linker).

### 4) 🧬 MKB-10 Linker — vidljiva dugmad + verzija
- Linker prikazuje verziju u naslovu (lakše debugovanje keša).
- Dugmad **Export/Import AI** i **NON_ICD** su jasno vidljiva (po potrebi disabled dok nema podataka).

---

## Napomena za PWA / Service Worker
Ako ne vidiš promene odmah:
- DevTools → Application → Service Workers → **Unregister**
- Application → Storage → **Clear site data**
- Reload (Ctrl+F5)
