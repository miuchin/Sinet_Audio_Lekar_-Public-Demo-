# 00_manifest_projekta_v15.6.9_CONTINUATION.md

**Project:** SINET Audio Lekar — Public Demo  
**Base Version:** v15.6.9 (iPhone PLAY PANEL FIX)  
**Package Type:** Continuation Pack (project + prompt + handoff docs)  
**Date:** 2026-02-17  
**Author:** miuchins (Svetozar Miuchin)  
**Co-author:** SINET AI (GPT Co-author / Engineering Partner)  
**Concept:** SINET — Sinergija čoveka i AI za dobrobit svih

---

## 1) Šta je u paketu

### 1.1 Aplikacija (web/PWA)
- `index.html` / `index-nosw.html`
- `js/` (app + audio engine + catalog engine)
- `css/`
- `data/` (katalog + STL + presets + media)
- `service-worker.js` + `manifest.json`
- alati: `admin.html`, `sinet_inspector_v15.html`, `sinet-catalog-converter.html`, `sinet-deduplicator.html`, `sinet-nutri-studio_v1.html`

### 1.2 Dokumentacija (dodato u ovom paketu)
- `docs/SINET_Prompt_v7_2.md`  (G0 pravila i standard isporuke)
- `docs/Nastavak_Novo_Chat_5.md` (trenutni roadmap: 40min segment, loop, preporuke, UX overlay)
- `docs/NEW_CHAT_START.md` (kratko uputstvo šta uploadovati u novi chat)

---

## 2) Kako da pokreneš lokalno (Manjaro/Linux)

```bash
cd SINET_CONTINUATION_PACK_v15.6.9
python3 -m http.server 8000 --bind 0.0.0.0
```

U browseru otvori:
- `http://localhost:8000/index-nosw.html` (preporuka za test — bez ServiceWorker cache)
- `http://localhost:8000/index.html` (PWA/SW varijanta)

---

## 3) Kratki test checklist (v15.6.9)
- [ ] Katalog se učita (lista simptoma/frekvencija vidljiva)
- [ ] “HITNO” → “PUSTI” → “POKRENI LISTU” otvara Play panel na iPhone
- [ ] Pause/Resume/Stop rade
- [ ] Export/Import (ako je prisutno u UI-u) radi na desktop i iOS (Share/Save)

---

## 4) Sledeći razvojni koraci (iz Nastavak_Novo_Chat_5.md)
- Default segment loop = **40 min**
- “Ponovi N puta” mora biti vidljivo odmah
- “Preporuka” blok: trajanje po frekvenciji, loop count, dnevna ponavljanja (broj dana), pauza između ciklusa (u danima)
- UX: “⏳ PRIPREMAM…” overlay + disable start dugmeta tokom pripreme

---

## 5) Poznate napomene
- iOS web/PWA background audio ima sistemska ograničenja; PRO/workaround putanja koristi renderovani track.

---

## 6) Release Notes (ciljni patch)
Ako praviš **finalni patch ZIP** na osnovu `docs/Nastavak_Novo_Chat_5.md`, koristi sledeći fajl:

- `docs/RELEASE_NOTES_v15.7.1.md` (Repeat A/B + default 40min segment + UX overlay + Preporuka)

