# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); this project is not yet versioned (pre-1.0).

## [Unreleased]

### Added
- **Maker's Mark footer** (`MakersMark.tsx`) — a signature seal closing the landing page: a single primary "Get in touch" contact CTA plus quiet links to LinkedIn, GitHub, and a résumé PDF. Links with an empty `href` are hidden; external links and the PDF open in a new tab.
- **Shared `ContactButton`** (`ContactButton.tsx`) — one source of truth for the gold mailto button and the `CONTACT_EMAIL` constant, used by both the footer and the SWIFT case-study CTA.
- **Plain dual-labels on quest cards** — `subject` and `subtitle` fields on `ArtifactMeta`; cards now lead with the real subject (e.g. "Pipeline Risk & Integrity") and demote the themed name ("The Prophecy") to a small kicker.
- **Hero role line** — explicit "Senior Product Manager · Energy & Enterprise" under the "The Synthesizer" class line.
- **Closing CTA on the SWIFT case study** — "Want the full story behind these numbers?" → contact button.
- **Résumé PDF** — `public/Matt_Bayne_Resume.pdf`, linked from the footer.

### Changed
- Quest card hierarchy reordered: kicker → subject → descriptor → flavor quote.

### Fixed
- **WCAG AA contrast** — darkened `--color-text-muted` (#8A7E6E → #6B5F4F) so muted text on parchment surfaces clears AA (≈5.2:1).
- **Defined the `.scrollbar-hide` utility** in `index.css` — it was referenced by the mobile skill carousel but never declared, so a raw scrollbar was showing.
- Regenerated `package-lock.json` to resolve an esbuild native-binary (darwin-arm64) mismatch that blocked the dev server.

## Baseline

The "Gaming Table" portfolio prior to this session: character-sheet hero with 5 Clifton Strengths skill cards, a quest board of five artifacts (Pipeline Risk & Integrity, SWIFT Product Leadership, Shape Matters, Plyplan, Glimpse), immersive slide decks + shell-mode case studies, OG/Twitter meta tags, and GitHub Actions deploy to mattbayne.dev.
