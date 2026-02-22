# SINET Audio Lekar – Release Notes (v15.7.6.6)

## Popravke
- **MKB-10 Linker – Import AI mapiranja** sada pravilno podržava **JSONL** (više linija) i tolerantno ignoriše “chatter” linije koje AI modeli ponekad dodaju.
  - Fix za grešku: `Unexpected non-whitespace character after JSON ...` prilikom import-a JSONL fajlova.
- UI: bolji kontrast i jasnije poruke o formatu za import/export.

## Napomena
Ako koristiš PWA/Service Worker, uradi **Unregister + Clear site data** ili koristi `index-nosw.html` da bi povukao novu verziju.
