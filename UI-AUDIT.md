# UI Audit — Justice Brutus Portfolio

## Release decision

**Pass for local release and deployment.** The recruiter overview, Meridian case study, résumé route, and deliberate 404 build successfully. Four portfolio content tests pass; Meridian separately passes 46 tests.

## Environments

- Chromium local browser at 1440×900, 1024×768, 768×1024, 390×844, and 320×568.
- TypeScript and Vite production builds.
- Vitest / Testing Library content and component suites.
- US Letter PDF render, visual PNG inspection, and selectable text extraction.

## Evidence and repairs

- Replaced the marketing-site sequence with a recruiter reading path: role and proof first, Meridian delivery evidence second, then experience and focused technical range.
- Rebuilt the overview as a bounded 1120px digital dossier with résumé-scale typography, ruled records, adjacent claim-and-evidence composition, and no homepage marketing footer.
- Removed Carryover from public navigation, routing, metadata, sitemap, and résumé until its release is approved.
- Replaced the cropped 723×891 Meridian asset with a verified 1440×900 console capture and `object-fit: contain` presentation.
- Removed phone, portrait, LinkedIn, self-taught, unsupported seniority, and junior-signaling quantity claims.
- Added dedicated routed case studies, route metadata, 404 recovery, sitemap, robots, and current-domain canonical metadata.
- Replaced decorative media framing with fixed-dimension, captioned product evidence.
- Verified no horizontal overflow at all five target widths on all primary routes in Chromium.
- Verified the refreshed dossier at 1440×900, 1024×768, 768×1024, 390×844, and 320×568; the desktop opening view includes profile and Meridian, while mobile preserves direct reading order.
- Reworked the résumé into one semantic, ATS-readable page; visually inspected the final render and confirmed selectable text.
- Verified the browser console is clean on the revised portfolio route.
- Regenerated the downloadable résumé from the canonical page; verified one US Letter page and visually inspected the rendered output.

## Known release boundaries

- Firefox and WebKit are not available in the current local harness. Cross-browser certification should be repeated after deployment; this does not block the local release because standards-based HTML/CSS and Chromium validation pass, but it is recorded rather than silently claimed.
- The current canonical domain remains the verified Vercel URL until Justice purchases and connects a custom domain.
- Carryover remains intentionally unpublished in this portfolio until its product and case-study release are approved.

Machine-readable evidence is in `.ui-audit.json`.
