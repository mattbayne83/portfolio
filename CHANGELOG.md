# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); this project is not yet versioned (pre-1.0).

## [Unreleased]

### Added
- **Maker's Mark footer** (`MakersMark.tsx`) — a flat bar pinned to the viewport bottom: a compact "Get in touch" CTA plus quiet links to LinkedIn, GitHub, and a résumé PDF. It auto-hides — visible on landing, hides on scroll-down, returns on scroll-up or at page bottom (`inert` while hidden). Links with an empty `href` are hidden; external links and the PDF open in a new tab.
- **Shared `ContactButton`** (`ContactButton.tsx`) — one source of truth for the gold mailto button and the `CONTACT_EMAIL` constant, used by both the footer and the SWIFT case-study CTA. A `size` prop (`'md'` hero / `'sm'` compact) keeps the footer CTA from dominating the bar.
- **Plain dual-labels on quest cards** — `subject` and `subtitle` fields on `ArtifactMeta`; cards now lead with the real subject (e.g. "SWIFT Product Turnaround") and demote the themed name ("Rags to Riches") to a small kicker.
- **Hero role line** — explicit "Senior Product Manager · Energy & Enterprise" under the "The Synthesizer" class line.
- **Closing CTA on the SWIFT case study** — "Want the full story behind these numbers?" → contact button.
- **Résumé PDF** — `public/Matt_Bayne_Resume.pdf`, linked from the footer.
- **`MetricGrid`** (`MetricGrid.tsx`) — shared result/stat callouts as gold gradient-border parchment cards with Cormorant numerals; used across all four content artifacts.
- **`ArtifactErrorBoundary`** (`ArtifactErrorBoundary.tsx`) — catches a failed lazy-artifact import and shows a "back to the board" recovery card instead of an infinite spinner.
- **Gold gradient tokens** — `--gradient-gold-edge` / `--gradient-gold-fill` in `index.css`; one source of truth replacing ~6 inline literals.
- **`prefers-reduced-motion` support** — global reduce block collapsing the coin spin, card-enter stagger, 3D flip, and hover motion.
- **Skill-card flip affordance** — persistent `RotateCw` glyph + `aria-pressed`/`aria-label` so the hidden back face is discoverable.
- **`Cormorant Fallback` @font-face** — metric-adjusted fallback to reduce hero-headline CLS on font swap (overrides approximate, tunable).
- **Design docs** — `.impeccable.md` (aesthetic intent / design context) and `design-system.md` (component + token catalog).

### Changed
- **Quest cards are now 5:7 portrait** — matching the skill-card silhouette, width-capped (`max-w-[280px]`, centered) so they stay proportional from mobile through a `lg:grid-cols-3` desktop grid instead of ballooning to column width. Card body is `flex flex-col` with the text block vertically centered, footer pinned to the bottom, and flavor text `line-clamp-5`.
- Quest card hierarchy reordered: kicker → subject → descriptor → flavor quote.
- Artifact result metrics now render via `MetricGrid` (parchment + gold) instead of flat `bg-bg-elevated` cards with accent stripes.
- De-glassed the `ArtifactShell` sticky header (removed `backdrop-blur`).
- Hero copy distilled — merged the two bio paragraphs into one proof-first line.
- `SlideViewer` floors the fit scale at 0.6 and pans/scrolls on phones instead of shrinking slide text away; resize listener rAF-throttled.
- Immersive close button moved top-left → top-right with an `aria-label` and focus ring.
- Tokenized flat `#1A1410` backgrounds to `var(--color-bg)`.

### Fixed
- **WCAG AA contrast** — darkened `--color-text-muted` (#8A7E6E → #6B5F4F) so muted text on parchment surfaces clears AA (≈5.2:1).
- **Defined the `.scrollbar-hide` utility** in `index.css` — it was referenced by the mobile skill carousel but never declared, so a raw scrollbar was showing.
- Regenerated `package-lock.json` to resolve an esbuild native-binary (darwin-arm64) mismatch that blocked the dev server.
- **A11y** — difficulty pips use shape (◆/◇) not color alone, with `role=img`/`aria-label`; filter pills and footer links enlarged to ~40px+ tap targets; slide-viewer arrows/dots got `aria-label`s and focus-visible rings; colophon and skill-card-rank contrast lifted.
- **Mobile skill-card flip** no longer clips inside the scroll carousel (new `flipScale` prop; mobile passes `1`).

### Removed

- **Pipeline Risk & Integrity quest** — the "Prophecy" immersive 8-slide deck and its registry entry, narrowing the board to the four strongest quests. The orphaned `--color-success` / `--color-error` tokens (its only consumers) are now unused.
- Stale `design-system.md` (the superseded "Bold Editorial" indigo direction) — replaced by `.impeccable.md` + a regenerated `design-system.md` catalog.
- `.badge-pill` hover glint/scale and the dead `glint` keyframe — implied clickability on static hero badges.
- Border-left/-top accent stripes on artifact metric cards (an AI-slop tell).

## Baseline

The "Gaming Table" portfolio prior to this session: character-sheet hero with 5 Clifton Strengths skill cards, a quest board of five artifacts (Pipeline Risk & Integrity, SWIFT Product Leadership, Shape Matters, Plyplan, Glimpse), immersive slide decks + shell-mode case studies, OG/Twitter meta tags, and GitHub Actions deploy to mattbayne.dev.
