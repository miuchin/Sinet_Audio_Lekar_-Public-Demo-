# SINET Audio Lekar — Korisničko uputstvo (SR) v1.1

> **Važno (bezbednost):** SINET je **informativni** alat za organizaciju audio‑rutina, beleški i protokola. Ne postavlja dijagnozu i ne zamenjuje lekara. Ako imaš alarmantne simptome (jak bol, otežano disanje, gubitak svesti, iznenadna slabost jedne strane tela, itd.) — potraži hitnu medicinsku pomoć.

---

## 0) Jedna rečenica: šta je SINET?
SINET je **offline-first** aplikacija koja ti pomaže da:
- brzo nađeš terapiju (katalog),
- napraviš svoju listu (Queue),
- sačuvaš ono što ti prija (Favoriti),
- složiš **lične protokole** (loop + trajanje),
- vodiš **Anamnezu** uz MKB‑10 i generišeš “plan” (DS/Integrativni vodič),
- i da sve to možeš da izvezeš kao TXT/MD/HTML (Template v2).

---

## 1) Brzi start (60 sekundi)
1. Otvori **Početnu** i klikni **AKTIVIRAJ** (prvi put) da browser dozvoli zvuk.
2. Izaberi:
   - **⚡ Brzo** (prva pomoć / prečice), ili
   - **Katalog** (pretraga simptoma), ili
   - **🎵 Lista (Queue)** (tvoja plejlista).
3. U Player-u klikni **▶ Pokreni**.
4. Ako želiš “automatiku”: napravi **Moji protokoli** i uključi **Loop** (npr. 2–20 puta).
5. Povremeno uradi **Backup** (Podešavanja → Izvezi podatke).

---

## 2) Mentalni model (najvažnije da razumeš)

### 2.1 Katalog
**Katalog** je “biblioteka” stavki. Svaka stavka ima (u idealnom slučaju):
- naziv + opis,
- listu frekvencija,
- holističke blokove (psihosomatika, molitva/afirmacija, narodni lek),
- MKB‑10 (kad je primenljivo),
- i izvore.

### 2.2 Queue / Lista (🎵 Lista)
**Queue** je **privremena plejlista**: šta želiš da pustiš danas/sada.
- Dobra je kad hoćeš brzo da složiš redosled iz više stavki.
- Queue menjaš često.

### 2.3 Favoriti (⭐)
**Favoriti** su tvoja “kolekcija najboljeg”.
- Tu čuvaš stavke/protokole koje ti se stalno vraćaju.
- Favoriti su stabilni i služe kao “biblioteka za tebe”.

### 2.4 Moji simptomi (➕)
**Moji simptomi** su tvoj lični “mini-katalog”:
- kad želiš da definišeš stavku po svom (naziv, opis, sopstvene frekvencije),
- ili da sačuvaš nešto što nije u zvaničnom katalogu.

### 2.5 Moji protokoli (🧩)
**Moji protokoli** su “super-moć”: sastavljaš **više koraka** u jedan plan.
- Protokol može da koristi stavke iz kataloga, iz queue-a ili ručno dodate korake.
- Ima **Loop** i jasnu kontrolu trajanja.
- Protokol je najbolji kad želiš rutinu (npr. svako jutro isti plan).

### 2.6 ⚡ Brzo (Prva pomoć / prečice)
**⚡ Brzo** je skup prečica koje “uvek želiš na dohvat ruke” na vrhu.
- Možeš da biraš koja dugmad vidiš (Podešavanja → ⚡ Podesi dugmad).
- Ideja: manje kliktanja, više fokusa.

---

## 3) Kako da izabereš šta ti treba (brza odluka)

- **Ne znam šta da pustim** → Katalog (pretraga) → dodaj u Queue → pusti.
- **Znam šta mi prija i vraćam se** → Favoriti (⭐) → pusti.
- **Hoću rutinu 30–120 min bez razmišljanja** → Moji protokoli → Loop → ▶.
- **Hoću da složim plan od više stavki sada** → Queue → ▶.
- **Hoću svoje stavke** → Moji simptomi → napravi stavku.

---

## 4) Player (osnovne kontrole)
- **▶ Pokreni / ⏸ Pauza / ⏹ Stop** — standard.
- Ako praviš protokol: u protokolu podešavaš trajanja po koraku i Loop.
- Ako koristiš iOS: najstabilnije je da aplikacija bude u **foreground-u** (ekran uključen). Eksperimentalne opcije su u Podešavanjima.

---

## 5) Anamneza (korak po korak)

### 5.1 Tipičan tok
1. Otvori **Anamneza**.
2. Kreiraj pacijenta (ili izaberi postojećeg).
3. Popuni osnovna polja (što više, to bolje):
   - *Razlog dolaska / Glavne tegobe*
   - *Trajanje / učestalost*
   - *Terapije / dijagnoze (ako postoje)*
4. Desno koristi **MKB‑10 pretragu**:
   - upiši šifru ili naziv,
   - izaberi predlog,
   - pogledaj “Povezano u SINET” predloge.
5. Izaberi šta želiš:
   - **🎵 Ubaci u SINET** (kreira plan/queue), ili
   - **📦 SharePack** (za deljenje), ili
   - **🧾 Izveštaj** (Template v2: TXT/MD/HTML).

### 5.2 Polja (šta znači)
- **Pacijent / identifikator:** lokalno u browseru.
- **Anamneza tekst:** tvoje beleške.
- **MKB‑10 šifra:** medicinski indeks (kad je primenljiv). Za protokole i “brzu pomoć” koristi se NON_ICD.
- **Povezano u SINET:** predlozi iz kataloga i `dx_index`.

---

## 6) Integrativni vodič (generator)

1. Otvori **Integrativni vodič** (iz Anamneze ili menija).
2. Izaberi MKB‑10 šifru (ako radiš medicinski deo), ili ručno izaberi SINET stavke.
3. Čekiraj stavke koje želiš u plan.
4. Izvoz:
   - **TXT** (čist tekst),
   - **MD** (kopira u clipboard),
   - **HTML** (Template v2 — štampa/e-mail).

**Napomena:** HTML izvoz je standardizovan (Template v2), tako da svaki izveštaj izgleda isto.

---

## 7) DS‑Generator

### 7.1 Tok
1. Otvori **DS‑Generator**.
2. Popuni upitnik (polja po redu):
   - simptom/tema,
   - opis/napomena,
   - cilj,
   - dodatne okolnosti.
3. Klikni “Generiši vodič”.
4. Po potrebi napravi protokol za SINET (bridge dugme).
5. Izvezi (TXT/MD/HTML — Template v2).

### 7.2 Šta je “bridge”
Bridge je mehanizam koji prenosi rezultat iz DS‑Generatora u SINET (protokol / queue) bez ručnog kopiranja.

---

## 8) AI Upitnik (edukacija: AI nije bauk)

### 8.1 Kako radi (praktično)
1. Otvori **AI Upitnik**.
2. Upiši pitanje ili cilj.
3. Klikni **Pošalji**.
4. Rezultat možeš:
   - kopirati (tekst),
   - prikazati u modalu,
   - izvesti kao **AI izveštaj (HTML)** (Template v2).

### 8.2 Kako da pitaš AI (bez straha)
- Traži **konkretno**: “Napravi listu koraka”, “Napravi plan 40 min”, “Vrati samo JSON”.
- Ne traži dijagnozu; traži **organizaciju**, **predlog strukture**, **protokol**.
- Uvek zadrži kritičko razmišljanje: AI je partner za strukturu i ideje, ne sudija stvarnosti.

---

## 9) SINET Admin Tools (tool‑chain, bez izuzetka)
Ovo su alati za održavanje kataloga i indeksa. Svi imaju **🧾 Izveštaj (HTML)** u **Template v2**.

### 9.1 Catalog Converter (Old → STL)
**Cilj:** stari katalog pretvara u STL format.
1. Učitaj stari JSON.
2. Klikni **Convert to STL**.
3. Pregledaj “Warnings”.
4. Preuzmi STL JSON.
5. (Preporuka) Pokreni DeDuplikator → Linker → dx_index.

### 9.2 Items → STL Converter
**Cilj:** `items[]` format pretvara u STL.
1. Učitaj `items[]` ili `{items:[...]}`.
2. Klikni **Konvertuj**.
3. Preuzmi `SINET_STL_from_items.json`.

### 9.3 DeDuplikator (STL)
**Cilj:** spajanje duplikata.
1. Učitaj STL.
2. Klikni **Nađi duplikate**.
3. Za svaki par izaberi: keepA / keepB / merge.
4. Klikni **Primeni odluke + preuzmi čist STL**.
5. Izveštaj (HTML) čuva odluke + opcija “⬇️ Čist STL”.

### 9.4 MKB‑10 Linker
**Cilj:** popunjava `mkb10.sifra` + `mkb10.naziv` u STL katalogu.
1. Učitaj STL.
2. Učitaj MKB šifarnik.
3. Klikni **⚡ Auto‑link** (sigurni match).
4. Klikni **🟣 Bulk NON_ICD** (za protokole/duhovno/quick help).
5. Za ostatak koristi AI workflow (export → import).
6. Generiši `dx_index` i primeni local.

### 9.5 dx_index generator
**Cilj:** generiše indeks “MKB → SINET stavke” za Anamnezu.
1. Učitaj STL (sa popunjenim MKB poljima).
2. Klikni generate.
3. Preuzmi `sinet_dx_index.json`.

### 9.6 Inspektor (Universal Fix)
**Cilj:** ručna dopuna (MKB/uzrok/molitva/lek) za `items[]` format.
1. Učitaj fajl.
2. Filtriraj “Fali MKB” / “Fali Psihosomatika” / “Fali Molitva”.
3. Klikni stavku, popuni polja, **Sačuvaj**.
4. Preuzmi sređeni fajl.
5. Po potrebi dalje: Items→STL / Linker.

---

## 10) Speaker Clean + Test + Proof (Mobile)
Ovaj alat pomaže da proveriš i očistiš zvučnik (mehanički + audio test). Tipičan tok:
1. Pokreni CLEAN desno/levo.
2. Pokreni TEST (stereo + rattle).
3. Ako čuješ distorziju: uradi mehaničko čišćenje rešetke (četkica + blagi “tap” lepljivom masom), pa ponovi.

---

## 11) Backup / prenos (obavezno)
U **Podešavanja**:
- **Izvezi podatke** (backup)
- **Uvezi podatke** (restore)

Backup čuva: Favoriti, Queue, Moji protokoli, Anamneza, istoriju (gde je primenljivo) i podešavanja — lokalno.

---

## 12) Zašto je SINET drugačiji (poređenje sa “tipičnim aplikacijama”)
Bez imenovanja konkurencije (jer svaka ima svoje): SINET je dizajniran kao:
- **Offline-first** (radi i bez interneta),
- **transparentan** (JSON strukture + eksport),
- **AI‑friendly** (AI kao pomoćnik, ali ti kontrolišeš rezultat),
- **standardizovan izvoz** (Template v2: TXT/MD/HTML),
- **alatna traka (tool‑chain)** za održavanje kataloga (Converter/DeDupe/Linker/dx_index),
- **prenosiv** (PWA + backup).

---

## 13) Najčešći problemi
- **Ne čuje se zvuk:** klikni AKTIVIRAJ, proveri mute, proveri BT route, osveži i dozvoli autoplay.
- **PWA vuče staru verziju:** Unregister Service Worker → Clear site data → Ctrl+F5.
- **Popup blokiran (izveštaji):** dozvoli popups za taj sajt.

---

Kraj. 🙂
