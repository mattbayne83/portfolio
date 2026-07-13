# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); this project is not yet versioned (pre-1.0).

## [Unreleased]

### Added
- **`VOICE.md`** — single writing doctrine merging ONEOK work corpus (Teams/email mechanics, anti-slop) with portfolio gold (receipts, hard calls, registers). `CLAUDE.md` and `README.md` point agents here before any user-facing copy. Audit: `tasks/voice-audit-2026-07-12.md`.
- **Maker's note** — ultra-short parchment card in the Character Sheet bio column (`MakersNote.tsx`): why a gaming table, Tulsa, open invitation. Text-only v1; theme as signature, not costume.
- **Deepened SWIFT case study** — tenure (**2024** Senior PM on SWIFT), team ~10–15, named hard call (intake over feature factory), Foundations honest yardstick, storage bet underwritten at 3% adoption; metrics include 220+ triaged and 2× key-feature adoption. Cut circular 380% maturity grid number.
- **Quest-card → manuscript morph** (`utils/viewTransition.ts`) — nav actions run inside `document.startViewTransition`; each quest card shares a `view-transition-name` with its article page. Suspense lives inside `ArtifactShell` so the morph target commits on first visit.
- **"Begin Quest →" affordance** on quest cards — always visible (touch has no hover), gold, arrow nudges on hover.
- **First-person skill cards with receipts** — backs rewritten from Gallup paraphrase; fronts later aligned (see Changed).
- **`ProductShot`** — shared gold-framed screenshot figure; Plyplan/Shape Matters/Glimpse show live products.
- **Current Quest proof line** — evidence over epithet badges.
- **Quest Log scroll cue** — button to `#quest-board` (not a hash anchor; won't fight `useHashSync`).
- **Maker's Mark footer** — auto-hiding fixed bar: contact CTA + LinkedIn/GitHub/Résumé.
- **Shared `ContactButton`**, **`MetricGrid`**, **`ArtifactErrorBoundary`**, gold gradient tokens, `prefers-reduced-motion` support, skill flip affordance, Cormorant fallback @font-face.
- **Design docs** — `.impeccable.md` + `design-system.md`.

### Changed
- **Voice alignment pass** — skill **taglines** first-person with receipts (no Gallup paste); Shape/Glimpse descriptions plain; Glimpse flavor declarative; SWIFT flavor drops "not just"; SWIFT section "Foundations, Then the Storage Bet"; hallway CTA (*Curious about the intake system - or the storage bet?*); user-facing em dashes → spaced hyphens; italic pivots on Plyplan/Glimpse/Shape gold lines.
- **Demo pages to case-study standard** — first-person, one real engineering decision each, verifiable metrics; shared manuscript grammar.
- **Hero hierarchy** — job title outranks "The Synthesizer"; bio ends with site thesis.
- **Quest board 2×2 tableau**, dual-label cards (subject first), 5:7 portrait cards, illuminated-manuscript shell pages.

### Fixed
- **SWIFT tenure** — Senior PM on SWIFT from **2024** (not 2022).
- **Communication skill receipt** — pitch retelling funded a **usability improvement effort**, not a new product.
- **Plyplan story** — plain nesting algorithm, not "AI-powered" (earlier correction retained in copy).
- **`.gitignore` anchored `/assets/`** — unanchored pattern would ignore `src/assets/` and break CI image bundling.
- Contrast (muted-on-parchment AA), `.scrollbar-hide`, mobile skill carousel fan, a11y on cards/pips.

### Removed
- Category filter bar; MAIN QUEST chip; Immersive/SlideViewer mode; Pipeline Risk quest; accent-stripe metric cards.

## Baseline

The "Gaming Table" portfolio prior to the 2026-07 content/voice sessions: character-sheet hero with 5 Clifton Strengths skill cards, a quest board of artifacts, shell-mode case studies, OG/Twitter meta tags, and GitHub Actions deploy to mattbayne.dev.
