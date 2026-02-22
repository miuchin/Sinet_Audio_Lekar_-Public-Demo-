# SINET Audio Lekar — Release Notes v15.7.6.9

Autor: **miuchins (Svetozar Miuchin) + SINET AI**

## Brzi linkovi (uočljivije)
- Dodata **⚡ Brzo** ikonica u gornjoj traci (skroluje do “Brzi linkovi” na početnoj).
- “⚡ Brzi linkovi (Prva pomoć)” sada su vidljivi **odmah** u meniju (ispod Kataloga), bez otvaranja “Više…”.
- Na Početnoj dodata kartica “⚡ Brzi linkovi (Prva pomoć)” sa velikim dugmadima.

## MKB Linker
- Popravljeno renderovanje dugmadi (prethodno su neka bila “nevidljiva” zbog pogrešnih escape znakova u HTML-u).
- Popravljen **Export AI (batch)** (`\n` join bug).
- Dodato dugme **🚀 Uradi sve**: Auto-link → Bulk NON_ICD → Export batch → Generate dx_index → Apply local (+ sačuva STL local).

## PWA
- Bumpovan Service Worker cache key da se izbegne “stara verzija” u kešu.
