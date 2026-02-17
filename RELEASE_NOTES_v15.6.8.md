# RELEASE NOTES — v15.6.8 (iPhone Playback Gesture Fix)

**Date:** 2026-02-17

## ✅ Fixes

### 1) iPhone/Safari/Chrome-iOS: Playback start stays inside the user gesture
- Removed `Promise.resolve(...play...)` wrappers for **Start Protocol** and **Play from Modal**.
- iOS Safari can block audio if playback begins after an async boundary (even a microtask).
- Now playback is triggered **synchronously** in the tap/click handler, and errors show the real error name/message.

### 2) Better retry UX on iPhone
- Toast now includes a **▶ retry button** when playback fails.

## Notes
- If you have an older Service Worker cached build, use **index-nosw.html** once (or clear site data) to force refresh.
