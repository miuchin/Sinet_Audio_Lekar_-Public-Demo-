/*
    SINET Audio Lekar — Service Worker
    Offline Mode & PWA
    Author: miuchins & SINET AI
*/

// v15.7.9.6 — cache key bump (prevents stale SW cache)
const CACHE_NAME = 'sinet-audio-v15.7.9.6-all1176';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index-nosw.html',
  './anamneza.html',
  './DS-Generator.html',
  './admin.html',
  './sinet_inspector_v15.html',
  './sinet-catalog-converter.html',
  './sinet-deduplicator.html',
  './sinet-items-to-stl.html',
  './sinet-mkb-linker.html',
  './sinet-dx-index-generator.html',

  './pages/antiparazitski.html',
  './pages/speaker_clean_proof.html',
  './pages/integrativni_vodic_RA_sake.html',
  './pages/integrativni_vodic.html',

  './css/main.css',
  './css/sinet-quickbar.css',

  // Core JS
  './js/app.js',
  './js/sinet-quickbar.js',
  './js/sinet-template-v2.js',
  './js/anamneza-sinet-bridge.js',
  './js/catalog/stl-adapter.js',
  './js/audio/audio-engine.js',
  './js/audio/ios-rendered-track.js',
  './js/db/indexed-db.js',

  // Data
  './data/SINET_CATALOG.json',
  './data/SINET_STL.json',
  './data/sinet_dx_index.json',
  './data/mkb10_sr.json',
  './data/presets/senior_presets.json',
  './data/media/acupressure/registry.json',

  './manifest.json',
  './favicon.ico',
  './SINET_User_Manual_v1.1_SR.md',
  './SINET_User_Manual_v1.1_SR.html',
  './SINET_User_Manual_v1.0_SR.md',
  './SINET_User_Manual_v1.0_SR.html',
  './docs/SINET_TEMPLATE_v1.md',
  './docs/SINET_TEMPLATE_v2.md',
  './docs/protokoli/00_DECISION_TREE_i_POJMOVI_v1.0_SR.md',
  './docs/protokoli/01_QUEUE_FAVORITI_PROTOKOLI_MOJI_SIMPTOMI_v1.0_SR.md',
  './docs/protokoli/02_ANAMNEZA_v1.0_SR.md',
  './docs/protokoli/03_INTEGRATIVNI_VODIC_v1.0_SR.md',
  './docs/protokoli/04_DS_GENERATOR_v1.0_SR.md',
  './docs/protokoli/05_AI_UPITNIK_v1.0_SR.md',
  './docs/protokoli/06_ADMIN_TOOLS_v1.0_SR.md',
  './docs/protokoli/07_SPEAKER_CLEAN_TEST_PROOF_v1.0_SR.md',
  './docs/protokoli/00_DECISION_TREE_i_POJMOVI_v1.0_SR.html',
  './docs/protokoli/01_QUEUE_FAVORITI_PROTOKOLI_MOJI_SIMPTOMI_v1.0_SR.html',
  './docs/protokoli/02_ANAMNEZA_v1.0_SR.html',
  './docs/protokoli/03_INTEGRATIVNI_VODIC_v1.0_SR.html',
  './docs/protokoli/04_DS_GENERATOR_v1.0_SR.html',
  './docs/protokoli/05_AI_UPITNIK_v1.0_SR.html',
  './docs/protokoli/06_ADMIN_TOOLS_v1.0_SR.html',
  './docs/protokoli/07_SPEAKER_CLEAN_TEST_PROOF_v1.0_SR.html',
  './docs/protokoli/10_USECASE_PLAN_ZA_DANAS_v1.0_SR.html',
  './docs/protokoli/10_USECASE_PLAN_ZA_DANAS_v1.0_SR.md',
  './docs/protokoli/11_USECASE_RUTINA_40MIN_xN_v1.0_SR.html',
  './docs/protokoli/11_USECASE_RUTINA_40MIN_xN_v1.0_SR.md',
  './docs/protokoli/12_USECASE_AI_DO_MOJIH_SIMPTOMA_v1.0_SR.html',
  './docs/protokoli/12_USECASE_AI_DO_MOJIH_SIMPTOMA_v1.0_SR.md',
  './docs/protokoli/13_USECASE_IPHONE_POZADINA_BT_PRO_v1.0_SR.html',
  './docs/protokoli/13_USECASE_IPHONE_POZADINA_BT_PRO_v1.0_SR.md',
  './docs/protokoli/14_USECASE_BACKUP_RESTORE_v1.0_SR.html',
  './docs/protokoli/14_USECASE_BACKUP_RESTORE_v1.0_SR.md',
  './docs/protokoli/15_USECASE_MOJ_PROTOKOL_IZ_QUEUE_v1.0_SR.html',
  './docs/protokoli/15_USECASE_MOJ_PROTOKOL_IZ_QUEUE_v1.0_SR.md',
  './docs/protokoli/16_USECASE_MKB_LINKER_DXINDEX_ANAMNEZA_v1.0_SR.html',
  './docs/protokoli/16_USECASE_MKB_LINKER_DXINDEX_ANAMNEZA_v1.0_SR.md',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(ASSETS_TO_CACHE.map(async (asset) => {
      try { await cache.add(asset); } catch (e) { /* skip missing assets */ }
    }));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())));
    await self.clients.claim();
  })());
});

// Network-first for critical (JS/CSS/JSON/HTML) to avoid being stuck on old versions.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  const path = url.pathname || '';
  const isCritical =
    path.endsWith('.js') ||
    path.endsWith('.css') ||
    path.endsWith('.json') ||
    path.endsWith('.html') ||
    path.endsWith('/');

  if (isCritical) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        const cached = await caches.match(req, { ignoreSearch: true });
        return cached || caches.match('./index.html');
      }
    })());
    return;
  }

  // Cache-first for non-critical
  event.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    const fresh = await fetch(req);
    const cache = await caches.open(CACHE_NAME);
    cache.put(req, fresh.clone());
    return fresh;
  })());
});
