# SINET_TEMPLATE_v2 — Jedinstveni obrazac (Template v2)

Autor: **miuchins (Svetozar Miučin) & SINET AI**

Template v2 je **kanonski UI/Export obrazac** za sve “izveštaje / vodiče / anamnezu” u SINET-u.

Cilj: isti prikaz i isti UX svuda:
- čitljivo za čoveka (seniori, mobilno)
- jednostavan export (TXT/MD/HTML/JSON)
- jedan **copy button** koji kopira i **HTML i plain text**
- “Nazad u SINET” radi preko `?back=...`
- ko-autorstvo i verzionisanje vidljivo

---

## 1) Kanonski formati (redosled)

1) **Markdown (.md)** — kanonski format za deljenje (chat/e-mail/GitHub)
2) **TXT** — najjednostavniji
3) **HTML (Template v2)** — lep prikaz + štampa + copy (HTML+tekst)
4) **JSON** — samo kada je logično (Anamneza zapis, SharePack, protokol)

---

## 2) Obavezna struktura HTML (Template v2)

### A) Topbar (sticky)
Dugmad (standardni set):
- ← Nazad u SINET
- TXT
- 📋 Kopiraj (.md)
- HTML
- 🖨️ Štampaj
- ✉️ E-mail
- (opciono) 🧾 JSON / ⬇️ JSON

Badge-ovi (desno):
- `Template: SINET_TEMPLATE_v2`
- `Ko-autorstvo: miuchins (Svetozar Miučin) + SINET AI`
- (opciono) MKB, broj frekvencija, broj stavki, itd.

### B) “Kopiraj kompletan plan”
Jedno dugme koje kopira:
- `text/html` (za paste u Word/Docs)
- `text/plain` (fallback)

### C) `#contentToCopy`
SAV sadržaj izveštaja mora biti unutar ovog bloka da:
- copy radi kako treba
- export TXT/MD radi konzistentno

### D) Upozorenja / bezbednost
Ako izveštaj govori o zdravlju:
- obavezno “informativno, ne dijagnoza”
- obavezne “crvene zastavice” kad je smisleno
- oprez kod interakcija (npr. NSAID)

### E) JSON blok (opciono)
Template v2 podržava prikaz RAW JSON-a kao prilog:

- `payloadJson` → generički JSON prilog (npr. `sinet_dx_index.json`, “linked” STL, itd.)
- `payloadSectionTitle` / `payloadHelpText` → naslov i kratko uputstvo
- `payloadFilename` → ime fajla za dugme “⬇️ JSON”

Backward-compat:
- `anamnezaJson` i dalje radi i automatski pravi sekciju “Import u SINET Anamnezu (JSON)”.

---

## 3) Implementacija u projektu

Centralni wrapper:
- `js/sinet-template-v2.js` → `window.SINET_TemplateV2.buildDoc({...})`

Gde se koristi:
- `pages/integrativni_vodic.html` (export HTML koristi Template v2)
- `anamneza.html` (export HTML koristi Template v2)
- “Brzi vodiči” stranice mogu zadržati isti izgled, ali badge treba da bude v2.

---

## 4) Ko-autorstvo (obavezno)

U svakom Template v2 HTML izveštaju mora stajati:
- `Ko-autorstvo: miuchins (Svetozar Miučin) + SINET AI`

U footeru i u topbar badge-u.

---

## 5) Napomena o verziji

Kad god menjamo Template v2:
- bump verzije aplikacije
- bump Service Worker cache key
- ažurirati release notes

