SINET DS Generator (Vera format) — FIX v15.7.1.8

SADRŽAJ ZIP-a:
- DS-Generator.html  (ispravljena verzija)

ZAŠTO JE ISPRAVKA POTREBNA:
- U prethodnoj verziji se u generisanom HTML-u pojavljuje literal '</script>' unutar <script> bloka,
  što browser interpretira kao kraj skripte i prekida izvršavanje (SyntaxError / kod se ispiše na dnu).
- Ova verzija koristi '<\/script>' u generisanom HTML-u (bezbedno).

KAKO POKRENUTI:
1) Preporuka: pokreni lokalni server iz root-a projekta:
   python3 -m http.server 8080
2) Otvori u browseru:
   http://localhost:8080/.../DS-Generator.html

AKO JE KATALOG NA DRUGOJ PUTANJI:
- Dodaj parametar:
  ?catalog=../data/SINET_CATALOG.json

miuchins & SINET AI
