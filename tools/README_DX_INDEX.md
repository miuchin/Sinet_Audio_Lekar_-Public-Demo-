# SINET dx_index generator (lokalno)

Ovaj alat pravi fajl:

- `data/sinet_dx_index.json`

To je *most* između **MKB-10** i **SINET_STL** kataloga (bez menjanja kataloga).

## Pokretanje

```bash
python3 tools/generate_dx_index.py   --symptoms-dir "/putanja/do/velikog/foldera_sa_simptomima"   --catalog "data/SINET_STL.json"   --out "data/sinet_dx_index.json"
```

## Dry-run (bez pisanja fajla)

```bash
python3 tools/generate_dx_index.py --symptoms-dir "/..." --dry-run
```


## Novi režim (preporučeno): iz popunjenog kataloga

Ako si već popunio `mkb10.sifra` / `mkb10.naziv` polja u `data/SINET_STL.json` (preko MKB-10 Linkera),
onda je najlakše:

```bash
python3 tools/generate_dx_index_from_catalog.py --add-parent
```

Ili:

```bash
bash tools/generate_dx_index_from_catalog.sh
```

Ovaj režim **ne zahteva** nikakav eksterni folder sa “simptom” fajlovima — koristi samo katalog + MKB listu.
