# Security Policy

## Reporting a vulnerability
Please do **not** post security-sensitive issues publicly first.

Send a private report with:
- affected file/page
- steps to reproduce
- impact
- screenshots/logs (if helpful)

If a private channel is not yet set up in the public repo, open a minimal issue titled:
`Security report request (private follow-up needed)`  
without disclosing exploit details.

## Scope
This is a static/PWA demo project. Security concerns may include:
- XSS in rendered/exported HTML
- unsafe dynamic content injection
- local storage / backup file exposure patterns
- service worker cache poisoning / stale assets issues
