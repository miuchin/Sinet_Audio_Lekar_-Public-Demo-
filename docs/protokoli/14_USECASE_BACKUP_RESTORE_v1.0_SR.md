# 💾 Use‑case tutor #1: Backup / Restore (šta se čuva, gde, kako vratiti)

> **Cilj:** da korisnik bez stresa sačuva svoje lične podatke iz SINET-a i vrati ih na istom ili drugom uređaju (telefon, tablet, laptop) bez gubitka rada.

---

## 0) 1‑min decision tree (brza odluka)

**Pitanje 1:** Menjaš uređaj / radiš reinstall / čist cache?  
➡️ **DA** → prvo **Backup**, tek onda promene.

**Pitanje 2:** Već si izgubio nešto (Favoriti, Lista, Moji simptomi)?  
➡️ **DA** → idi na **Restore** iz poslednjeg backup fajla.

**Pitanje 3:** Samo želiš sigurnost?  
➡️ **DA** → radi **rutinski Backup 1× nedeljno** + pre većih izmena.

---

## 1) Mentalni model (vrlo važno)

SINET u browser/PWA režimu većinu korisničkih podataka čuva **lokalno na uređaju** (local storage / IndexedDB, zavisno od modula).  
To znači:

- ✅ radi brzo i offline
- ✅ privatno je (ostaje kod korisnika)
- ⚠️ može nestati ako se uradi **Clear site data**, reset browsera ili promena uređaja

Zato je **Backup** obavezan deo protokola rada.

---

## 2) Šta se tipično čuva u Backup-u (šta korisnik dobija)

Backup fajl (JSON) je namenjen da sačuva **korisnički sloj** rada, npr:

- ⭐ **Moji favoriti**
- 🎵 **Queue / Lista** (trenutno složene stavke)
- 🧩 **Moji protokoli**
- ➕ **Moji simptomi** (lične/ručno kreirane stavke)
- ⚙️ deo **podešavanja** (toggle, trajanja, preference)
- lokalne SINET/Anamneza ključeve (npr. `sinet_*`, `SINET_*`, `anamneza_*`, `ANAMNEZA_*`)

### Šta se obično NE čuva

- osnovni katalog koji dolazi uz aplikaciju (`data/...`) — to je deo aplikacije
- programski fajlovi / update aplikacije
- remote sadržaj van browser memorije

> **Napomena:** tačan skup ključeva može rasti kroz verzije; zato je dobro raditi backup posle važnog rada, a ne samo povremeno.

---

## 3) Backup — korak po korak (tačan redosled)

### Protokol A: Ručni backup pre izmene / update-a

1. Otvori **☰ Meni** → **⚙️ Podešavanja**.
2. Nađi sekciju **Backup / Restore**.
3. Tapni **💾 Backup / Izvezi**.
4. Sačekaj preuzimanje JSON fajla (npr. `SINET_BACKUP_2026-02-23.json`).
5. **Odmah proveri** gde je fajl završio:
   - **iPhone (Safari):** Files / Downloads ili iCloud Drive
   - **Android:** Downloads folder (ili browser download manager)
   - **Laptop/PC:** Downloads
6. Premesti kopiju na sigurnu lokaciju:
   - iCloud Drive / Google Drive / Dropbox / USB / drugi folder
7. (Opcionalno, ali preporučeno) napravi **duplu kopiju** sa datumom.

### Provera uspeha (30 sekundi)

- Fajl postoji ✅
- Fajl nije 0 KB ✅
- Naziv ima datum/verziju ✅

---

## 4) Restore — korak po korak (tačan redosled)

### Protokol B: Povrat podataka posle brisanja / novog uređaja

1. Otvori SINET.
2. Idi na **☰ Meni** → **⚙️ Podešavanja**.
3. Nađi **Backup / Restore**.
4. Tapni **📥 Restore / Uvezi**.
5. Izaberi odgovarajući `SINET_BACKUP_...json` fajl.
6. Sačekaj poruku o uspehu (uvoz završen ✅).
7. Ako aplikacija traži reload/refresh — uradi ga.
8. Proveri ključne sekcije:
   - ⭐ Favoriti
   - 🎵 Lista / Queue
   - 🧩 Moji protokoli
   - ➕ Moji simptomi
   - (po potrebi) Anamneza / ostali moduli

### Provera uspeha (1 minut)

Ako su se vratili **najmanje Favoriti + Moji protokoli**, restore je praktično uspeo. ✅

---

## 5) “Šta tačno da uradim?” — realni scenariji

### Scenario 1: Menjam telefon
- Uradi Backup na starom telefonu
- Pošalji backup sebi (Drive / mail / kabl)
- Otvori SINET na novom telefonu
- Restore iz tog fajla
- Provera: Favoriti + Protokoli + Moji simptomi

### Scenario 2: Očistio sam cache / obrisao PWA podatke
- Ne paniči
- Restore iz poslednjeg backup-a
- Reload aplikacije
- Provera sekcija

### Scenario 3: Pre velikog importa / rada u Admin alatima
- Prvo Backup
- Tek onda import/linker/dedup/dx_index operacije
- Ako nešto pođe loše → Restore

---

## 6) Tipične greške (i rešenja)

### ❌ “Ne vidim backup fajl”
**Uzrok:** browser ga je smestio u Downloads/Files gde korisnik ne gleda.  
**Rešenje:** otvori Files / Downloads i pretraži `SINET_BACKUP`.

### ❌ “Restore ne vraća ništa”
**Uzrok:** pogrešan/stari fajl ili oštećen JSON.  
**Rešenje:** probaj noviji backup; proveri da li fajl ima realnu veličinu.

### ❌ “Restore uspeo, ali ekran izgleda isto/prazno”
**Uzrok:** UI nije osvežen ili PWA cache je zadržao staro stanje.  
**Rešenje:** refresh stranice / zatvori pa otvori tab; po potrebi clean reload.

### ❌ “Imam više backup fajlova i ne znam koji je pravi”
**Rešenje:** koristi poslednji po datumu, ili onaj napravljen neposredno pre problema.

---

## 7) Bezbednosne i praktične preporuke

- Backup fajl sadrži **lične radne podatke** → čuvaj ga pažljivo.
- Ne šalji javno u grupama.
- Ako radiš testiranje sa više verzija, čuvaj backup-e po šemi:
  - `SINET_BACKUP_pre_update_v15.7.9.x.json`
  - `SINET_BACKUP_posle_importa_YYYY-MM-DD.json`

---

## 8) Mini checklist (za Help / podršku)

Ako korisnik prijavi problem, pitaj/redom proveri:

- [ ] Da li postoji backup fajl?
- [ ] Da li je restore urađen iz tačnog fajla?
- [ ] Da li je urađen reload posle restore?
- [ ] Da li su provereni Favoriti / Lista / Moji protokoli?

---

## 9) Kratka verzija (za korisnika početnika)

**Pre svake veće izmene uradi Backup. Ako nešto nestane — Restore.**  
To je najvažniji sigurnosni protokol u SINET-u. ✅
