# SINET Audio Lekar (Public Demo) — v15.7.9.6

This release delivers a final round of mobile UI stabilization, navigation improvements, and Tutor/Guide UX polish, along with a ready-to-publish open-source and release communication package.

## ✅ Highlights

- **Stabilized mobile UI** (including Huawei-focused hotfixes)
  - more stable grid layout
  - fixed menu scrolling
  - improved search autofocus behavior
  - cleaner settings navigation
  - visible and more reliable player controls

- **Improved iPhone background audio behavior**
  - focus on uninterrupted in-app navigation sessions

- **Introduced Tutor / Guides use-case HTML tutorials**
  - Tutor/Guides index
  - Quick Start
  - AI Questionnaire tutorial

- **Added entry points to Tutor / Guides**
  - from the **Menu**
  - from **Settings**

- **Prepared GitHub OSS package**
  - SR/EN documentation
  - GitHub templates
  - Netlify config / guidance

- **Prepared publishing kit**
  - GitHub release copy
  - blog post materials
  - Viber / Facebook / Telegram post text

## 🛠️ Polish / Fixes

- Final Tutor/Help link polish (relative paths and fallback access)
- Improved fallback flow via `index-nosw.html`
- (Optional patch) version and cache key sync to `v15.7.9.6`

## 📦 Recommended with this release

If you are updating the repo manually from ZIP packages:

1. apply the **Repo Patch Delta ZIP**
2. apply the **Version Sync Patch ZIP** (recommended)
3. run a short smoke test (Tutor/Guides + fallback + audio/nav)

## 🧪 Quick smoke test (recommended)

- Menu → Tutor/Guides opens correctly
- Quick Start opens
- AI Questionnaire tutorial opens
- Tutor link to User Manual works
- `index-nosw.html` fallback works
- player controls remain visible during navigation

## ⚠️ Note

This is a **Public Demo** release. It is intended to demonstrate functionality and UX flow.  
Medical-related content is informational and does not replace professional medical diagnosis, treatment, or advice.

## 🙏 Thanks

Thanks to everyone testing the mobile UI, fallback flows, and tutorial experience — especially real-device feedback (Huawei / iPhone), which helped make this release more stable.
