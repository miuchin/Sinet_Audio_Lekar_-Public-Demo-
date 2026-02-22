# SINET_TEMPLATE_v1 — Jedinstveni obrazac (Template)

Autor: **miuchins (Svetozar Miuchin) & SINET AI**

Ovaj dokument definiše **jedinstveni format** prikaza i exporta za:
- **Anamneza**
- **SINET Integrativni vodič (generator)**
- **DS-Generator** (sledeća faza: 1:1 usklađivanje)

## 1) Kanonski format za deljenje
**Primarni (kanonski) format**: **Markdown (.md)**

Razlog: najprenosiviji je (chat, e-mail, GitHub, mobilni), čitljiv za čoveka i lako se pretvara u PDF/HTML.

Sekundarni formati:
- **TXT** (plain)
- **HTML** (za štampu i lep prikaz)
- **JSON** (SharePack — samo kada postoji validan audio protokol)

## 2) Obavezne sekcije (Vodič)
Svaki vodič treba da sadrži ove sekcije (redosled je fiksan):

1. **Upozorenje / Disclaimer** (hitna stanja)
2. **Identifikacija** (MKB-10 šifra + naziv + poglavlje)
3. **Personalizovani sažetak** (ako postoji pacijent iz anamneze)
4. **Preporučene pretrage**
5. **Standardna medicina (orijentacija)** (bez doziranja i recepata)
6. **Psihosomatika / stres**
7. **Ishrana / navike / suplementi (opciono)**
8. **SINET zvučna terapija (protokol)**
9. **Duhovna podrška**
10. **Footer** (offline napomena + gde se širi sadržaj)

## 3) SINET zvučna terapija — minimalni “valid” protokol
Da bi SharePack / “Ubaci u SINET” bio validan, protokol mora imati:
- `steps.length >= 1`
- svaki korak: `minutes > 0` i `freq.value (Hz) > 0`

Ako nema odabranih frekvencija, aplikacija treba da:
- **ne nudi** “Ubaci u SINET” i **ne exportuje** SharePack
- ali dozvoljava MD/TXT/HTML export vodiča

## 4) SharePack format (SINET_SHAREPACK_v1)
SharePack nosi:
- `protocol` (za import u “Moji protokoli”)
- `_guideHtml` (embedded vodič)
- `_guideMd` (kanonski tekst za deljenje)
- `_meta` (mkb10, dxLabel, template)

## 5) Konvencija dugmadi (UI)
Cilj: korisnik uvek zna gde je šta.

- **JSON** → SharePack (kada ima audio)
- **TXT** → plain export
- **📋 Kopiraj (.md)** → kopira markdown
- **HTML** → download html (štampa)
- **🖨️ Štampaj** → print/PDF
- **✉️ E-mail** → mailto sa TXT telom
- **← Nazad u SINET** → vraća se na `back=` ili `index.html`

---

> Napomena: Ovo je “v1”. Sledeći upgrade je DS-Generator 1:1 usklađivanje i jedinstveni “toolbar” modul u zajedničkom JS fajlu.
