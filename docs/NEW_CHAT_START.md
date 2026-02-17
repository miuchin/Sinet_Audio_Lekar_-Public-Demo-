# NEW_CHAT_START.md — SINET Audio Lekar (Continuation)

## Šta da uploaduješ u NOVI chat (minimum)
1) **Ovaj ZIP** (Continuation Pack)  
2) `docs/SINET_Prompt_v7_2.md` (ako ZIP nije dovoljan, ali ovde je već uključen)  
3) `docs/Nastavak_Novo_Chat_5.md` (uključen)  
4) (Ako postoji) screenshot / konzol log kad bug nastane

## Pravila (kratko)
- FULL FILE / ZIP isporuka, ZERO BREAK, autor kredit, komentari START/END, bez localStorage za kritične podatke.

## Gde smo stali
- Stabilna baza: **v15.6.9** (iPhone Play panel fix)
- Sledeći patch: **v15.7.0** — 40min segment loop + “Ponovi N puta” odmah + “Preporuka” panel + “PRIPREMAM…” overlay.

## Minimalni komandni set (Manjaro/Linux)
```bash
python3 -m http.server 8000 --bind 0.0.0.0
```
Testiraj prvo: `index-nosw.html` (bez SW cache).
