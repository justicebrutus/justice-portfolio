# UI Audit — Justice Brutus Portfolio

## Release decision

**Pass for local release and deployment.** The portfolio, Meridian case study, Carryover case study, résumé route, and deliberate 404 build successfully. Seven portfolio tests pass. Meridian separately passes 46 tests; Carryover separately passes 13 tests.

## Environments

- Chromium local browser at 1440×900, 1024×768, 768×1024, 390×844, and 320×568.
- TypeScript and Vite production builds.
- Vitest / Testing Library content and component suites.
- US Letter PDF render, visual PNG inspection, and selectable text extraction.

## Evidence and repairs

- Replaced the equal-weight project gallery with a recruiter reading path led by Meridian and supported by Carryover.
- Removed phone, portrait, LinkedIn, self-taught, unsupported seniority, and junior-signaling quantity claims.
- Added dedicated routed case studies, route metadata, 404 recovery, sitemap, robots, and current-domain canonical metadata.
- Replaced iframe-style live-project dependence with fixed-dimension product screenshots and optional media.
- Verified no horizontal overflow at all five target widths on all primary routes in Chromium.
- Reworked the résumé into one semantic, ATS-readable page; visually inspected the final render and confirmed selectable text.
- Verified the browser console is clean on portfolio and Carryover routes.

## Known release boundaries

- Firefox and WebKit are not available in the current local harness. Cross-browser certification should be repeated after deployment; this does not block the local release because standards-based HTML/CSS and Chromium validation pass, but it is recorded rather than silently claimed.
- The current canonical domain remains the verified Vercel URL until Justice purchases and connects a custom domain.
- Carryover has no public deployment URL yet; repository publication and deployment are external release actions.

Machine-readable evidence is in `.ui-audit.json`.
