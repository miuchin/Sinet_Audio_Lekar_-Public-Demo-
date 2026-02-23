# Netlify Deploy Notes (SR / EN)

## SR
### Preporučeno
- Branch `main` = production deploy
- Branch `dev` ili `rc` = preview deploy

### Koraci
1. Push repo na GitHub
2. U Netlify: **Add new site → Import from Git**
3. Izaberi repo
4. Build command: *(prazno)*
5. Publish directory: `.`
6. Deploy

### Napomena za PWA/SW
Kad objaviš novu verziju:
- bump cache key u `service-worker.js`
- testiraj `index-nosw.html` ako nešto deluje “staro”

## EN
### Recommended
- `main` branch = production deploy
- `dev` / `rc` branch = preview deploy

### Steps
1. Push repo to GitHub
2. Netlify: **Add new site → Import from Git**
3. Select repository
4. Build command: *(empty)*
5. Publish directory: `.`
6. Deploy

### PWA/SW note
For each release:
- bump cache key in `service-worker.js`
- use `index-nosw.html` for debugging stale-cache issues
