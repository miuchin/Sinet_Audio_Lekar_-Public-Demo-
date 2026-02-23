# SINET Audio Lekar — Public Demo (SR)

SINET Audio Lekar je edukativno-informativna web/PWA aplikacija za:
- rad sa simptomima i protokolima,
- organizaciju reprodukcije kroz Queue / Liste / Favorite / Moje protokole,
- tutor vodiče (korak-po-korak),
- izveštaje i export (TXT/MD/HTML/JSON).

## Demo i projekat
- **GitHub:** https://github.com/miuchin/Sinet_Audio_Lekar_-Public-Demo-/tree/main
- **Netlify demo:** https://sinet-audio-lekar-nutri-pro-demo.netlify.app/

## Šta je novo u poslednjem talasu izmena (v15.7.9.x)
- Mobile UI hotfix-evi (Huawei / manji ekrani)
- Stabilniji meni, skrol i raspored kartica
- iPhone/iOS poboljšanja za reprodukciju i ponašanje tokom navigacije
- Tutor / Vodiči HUB + Use-case tutor stranice
- Quick Start tutor (3 klika do reprodukcije)
- AI Upitnik → Moji simptomi → Queue → Protokol tutor tok

## Struktura (ukratko)
- `index.html` — glavna aplikacija
- `index-nosw.html` — verzija za test bez service worker-a
- `service-worker.js` — offline/PWA cache
- `docs/` — priručnici, release, deploy napomene
- `docs/protokoli/` — Tutor / Vodiči i use-case protokoli

## Open Source napomena
Preporučen start: **MIT** licenca (brza i jednostavna adopcija). Ako želiš strožu OSS strukturu, može se preći na Apache-2.0.

## Bezbednosne i pravne napomene
Pogledaj:
- `DISCLAIMER_MEDICAL_SR_EN.md`
- `PRIVACY_LOCAL_STORAGE_SR_EN.md`

## Brzi start (korisnik)
1. Otvori demo link
2. Klikni **⚡ Brzi linkovi** ili pretraži katalog
3. Klikni **▶ PUSTI**
4. Po potrebi sačuvaj u Favorite / Moj protokol
5. Za detalje koristi **🎓 Tutor / Vodiči**

## Za develop/test (preporuka)
Ako ne vidiš promene zbog cache-a:
1. Unregister Service Worker
2. Clear site data
3. Hard refresh
4. Testiraj `index-nosw.html`
