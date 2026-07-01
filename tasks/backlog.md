# Portfolio Backlog

## Completed

- [x] **Quest-card → manuscript morph** — View Transitions API; card expands into its article page and back (2026-07-01)
- [x] **First-person skill cards with receipts** — all 5 flavor texts rewritten in Matt's voice, one verifiable story each (2026-07-01)
- [x] **Artifact page screenshots** — live-product captures on Plyplan/Shape Matters/Glimpse via shared `ProductShot` (2026-07-01)
- [x] **Demo pages to case-study standard** — first-person, one real engineering decision each, verifiable metrics (2026-07-01)
- [x] **Skill card back text reviewed** — tone, length, and voice unified (first-person receipts) (2026-07-01)
- [x] **Above-the-fold credibility** — Current Quest proof line, title over epithet, Quest Log scroll cue (2026-07-01)
- [x] **Removed category filter bar** — filtering 4 quests hid work; badges stay as flavor (2026-07-01)
- [x] **Removed Immersive mode** — unused dead code (SlideViewer, ImmersiveWrapper, currentSlide) (2026-07-01)
- [x] **Quest cards simplified** — MAIN QUEST chip removed, year in header, "Begin Quest →" affordance (2026-07-01)
- [x] **Contrast fixes** — flip icon + unfilled pips to full AA muted token (2026-07-01)
- [x] **Keyboard/ARIA on cards** — skill-card flip keyboard + aria-pressed; quest cards are buttons (verified 2026-07-01)
- [x] **Illuminated-manuscript shell pages** — centered reading column + warm page surface + metadata-driven chapter opener + drop caps, across SWIFT/Shape Matters/Plyplan (2026-06-28)
- [x] **Portrait quest cards** — 5:7 aspect matching skill cards, width-capped for proportional sizing on mobile + desktop (2026-06-28)
- [x] **Auto-hiding flat footer** — Maker's Mark restyled as a flat fixed bar that hides on scroll-down and returns on scroll-up / at page bottom (2026-06-28)
- [x] **Removed Pipeline Risk quest** — narrowed the board to the four strongest quests (2026-06-28)
- [x] **Maker's Mark footer** — contact CTA + LinkedIn/GitHub/Résumé links; signature, not a link hub (2026-06-28)
- [x] **Quest card dual-labels** — lead with plain subject, themed name as kicker, plain descriptor line (2026-06-28)
- [x] **Hero role line** — "Senior Product Manager · Energy & Enterprise" for instant role clarity (2026-06-28)
- [x] **WCAG AA contrast pass** — darkened muted-on-parchment text token to ≈5.2:1 (2026-06-28)
- [x] **SWIFT case-study closing CTA** — "Want the full story?" contact prompt (2026-06-28)
- [x] **Glimpse** — "The Scrying Glass" privacy-first EDA artifact (Pyodide/WASM)
- [x] **Gaming Table foundation** — palette revolution, skill cards, quest board, character sheet
- [x] **Shape Matters** — shell-mode project showcase, "Enter the Lab" CTA to live app
- [x] **Plyplan** — shell-mode project showcase, "Launch App" CTA to live app
- [x] **SWIFT Product Leadership** — case study with metrics grid (Challenge/Approach/Results)
- [x] **Character sheet enrichment** — experience line, flavor badges (Podcast Host, Woodworker, F3 Tulsa, BS Mech. Engineering)
- [x] **Quest board cleanup** — removed "Coming Soon" placeholders, fixed grid for 4 main quests
- [x] **Deploy to GitHub Pages** — GitHub Actions workflow, custom domain mattbayne.dev
- [x] **Mobile responsive fixes** — skill card scale clipping (py-8 padding), slide deck scaling (960×540 design resolution + CSS transform)
- [x] **Woo card icon** — swapped Users → Magnet to match "The Magnetist" theme
- [x] **Character sheet pills** — simplified from 5 to 3: Builder, Engineer, Storyteller

---

## P1 — Polish & Deploy ✓

- [x] **Responsive audit** — all 4 artifact pages verified with sm:/lg: breakpoints
- [x] **Entrance animations** — staggered card-enter on quest cards + skill cards, fade-in on artifact pages
- [x] **OG meta tags** — og:title, og:description, og:image + Twitter Card tags (awaiting og-image.png in public/)
- [x] **Favicon** — custom "B" monogram SVG favicon

## P2 — Content Refinement

- [ ] **Deepen the SWIFT case study** — add tenure dates, team/scope, one named hard decision; footnote or cut the circular "380% maturity gain" metric (measured against Matt's own model — a sharp reader will notice)
- [ ] **Maker's note** — short block: why a gaming table, photo or workshop shot, location, what Matt is open to. Turns the theme from costume into signature (top remaining authenticity gap from the 2026-07-01 review)

## P3 — New Quests (Future)

- [ ] **F3 Podcast deep dive** — if enough content warrants a standalone Scroll artifact (episode highlights, audio player)
- [ ] **Woodworking gallery** — if photo-ready projects accumulate, create a Map artifact with project cards
- [ ] **Career timeline visualization** — interactive "Adventurer's Path" if the character sheet needs more depth
- [ ] **Side quests** — once there are 2+ smaller artifacts, re-enable the Main/Side quest distinction on the board

## P4 — Technical

- [ ] **Performance** — audit Lighthouse score; five Google Font families is a heavy first paint for the "several tabs open" visit (subset or trim)
- [ ] **Copy-email fallback** — `mailto:` fails silently on machines with no mail client; add a copy-to-clipboard affordance on the contact button
- [ ] **Analytics** — add privacy-friendly analytics (Plausible or similar) to track which quests get clicked
- [ ] **Print stylesheet** — ensure the character sheet prints cleanly as a one-page resume alternative

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-01 | Skill-card copy is first-person with one receipt each | Third-person Gallup paraphrase was horoscope — swap-any-name-in generic; receipts make the centerpiece hiring-manager-usable |
| 2026-07-01 | Demo pages lead with live-product screenshots + one real decision | The audience's core skepticism is "does he ship?" — shipped software was hidden behind blog-stub interstitials |
| 2026-07-01 | Deleted category filter | Filtering 4 quests hid work ("Lore" = one card); revisit past ~8 quests |
| 2026-07-01 | Deleted Immersive mode | No artifact used it in production; delete before you build — restore from git history with real deck content |
| 2026-07-01 | Card→page navigation is a View Transitions morph | The parchment card expanding into the manuscript page IS the theme; falls back cleanly (reduced motion, unsupported browsers) |
| 2026-07-01 | Quest grid is a centered 2×2 tableau | 4 cards in 3 columns left an orphan row; 2×2 reads as cards dealt on a table |
| 2026-06-28 | Illuminated-manuscript shell pages, opener driven by metadata | Three competing left-aligned widths read as "wonky"; one centered column + a single metadata opener fixes consistency and de-duplicates per-artifact heroes — and makes case studies read like a story |
| 2026-06-28 | Quest cards → 5:7 portrait, width-capped | Echo the skill-card silhouette for a cohesive "hand of cards" feel; cap width so they don't balloon to column width on mobile |
| 2026-06-28 | Footer auto-hides (flat fixed bar) | Keeps the contact CTA reachable without a tall static footer stealing vertical space; present on landing + when wanted, out of the way while reading |
| 2026-06-28 | Removed Pipeline Risk quest | /elon: four strong quests beat five when one deck is the weakest; tightens the board |
| 2026-06-28 | Dual-label quest cards (subject + kicker) | Themed names buried what the work *is*; recruiters scan for substance in seconds |
| 2026-06-28 | Footer is a signature, not a link hub | One primary contact CTA + quiet LinkedIn/GitHub/Résumé; the site is the proof, links are the escape hatch |
| 2026-06-28 | Darken muted text token globally | Single-token fix lifts all muted-on-parchment text past WCAG AA at once |
| 2026-03-11 | 4 main quests, no side quests | /elon analysis: 4 strong > 8 thin. Side quests when real content exists |
| 2026-03-11 | F3 + woodworking as character sheet badges | Not enough standalone content for dedicated artifacts yet |
| 2026-03-11 | All artifacts are Main Quest | No side quests until category variety warrants the split |
| 2026-03-11 | Removed "Coming Soon" placeholders | Board feels confident with 4 real quests vs. empty promises |
| 2026-03-11 | Removed col-span-2 on main quest cards | 4 cards all spanning 2 cols broke the 3-col grid |
| 2026-03-11 | SlideViewer uses fixed 960×540 + CSS scale | Responsive font breakpoints don't work inside aspect-ratio containers — scale transform preserves layout at any viewport |
| 2026-03-11 | Deploy via GitHub Actions (not gh-pages branch) | Modern approach, builds on push to main |
