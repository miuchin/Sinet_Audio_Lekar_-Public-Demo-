# SINET Audio Lekar — Release Notes v15.7.5.9

Autor: **miuchins (Svetozar Miuchin) & SINET AI**

## ✅ Šta je novo

### 1) Jedinstveni obrazac (Template v1)
- Uveden **SINET_TEMPLATE_v1** kao kanonski format exporta.
- U generatoru vodiča primarni “copy” je sada **Markdown (.md)**, uz TXT/HTML/JSON.

### 2) Integrativni vodič (generator) — stabilan export
- Dodata **unificirana toolbar traka**: JSON, TXT, 📋 Kopiraj (.md), HTML, Štampaj, E-mail, Ubaci u SINET.
- Dugmad **JSON/Ubaci u SINET su onemogućena** ako nema nijedne frekvencije (da ne nastaje prazan protokol).
- SharePack sada uključuje `_guideHtml` i `_guideMd`.

### 3) Bolji izbor SINET stavki za MKB-10
- Ako `sinet_dx_index.json` nema mapiranje, kandidati se sada traže iz **naziva dijagnoze** (MKB-10 baza) + label.
- Dodata pretraga **„Dodaj iz SINET kataloga“** (fallback) sa ručnim dodavanjem stavki.

### 4) RA vodič (static)
- Dodato dugme **← Nazad u SINET** (uzima `?back=`), plus top toolbar.

## Napomena
Ako koristiš PWA/ServiceWorker:
- DevTools → Application → Service Workers → **Unregister**
- Application → Storage → **Clear site data**
- Reload (Ctrl+F5)
