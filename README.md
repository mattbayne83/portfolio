# The Gaming Table — Matt Bayne's Portfolio

A premium tabletop game-inspired personal portfolio where career artifacts are quests, Clifton Strengths are skill cards, and the whole experience invites you into a story.

## Live Demo

**[mattbayne.dev](https://mattbayne.dev)** — deployed via GitHub Actions on push to `main`.

## What Is This?

A single-page React app that presents Matt Bayne's professional work as an interactive quest board. Instead of a traditional resume site, visitors encounter:

- **Character Sheet** — name, role, class ("The Synthesizer"), monogram seal, a "Current Quest" proof line, Maker's Note colophon, and 5 skill cards fanned like a hand of cards
- **Skill Cards** — Clifton Strengths as flippable playing cards; **front taglines** and **back stories** are first-person with real receipts (never Gallup paraphrase). Receipts are diversified: release-comms, Williams risk, KB audit, furniture, Plyplan — not five retellings of the SWIFT turnaround. Back face is a quiet reverse (name + one italic story)
- **Quest Board** — portfolio artifacts as main quests with difficulty ratings and plain dual-labels (subject first, themed kicker second)
- **Artifact Pages** — quest cards morph into illuminated-manuscript reading pages (View Transitions API) with case-study narrative, live product screenshots, and verifiable metrics
- **Maker's Mark footer** — a flat bar pinned to the bottom: one primary contact action plus quiet LinkedIn, GitHub, and résumé links. Auto-hides on scroll-down; returns on scroll-up or at page bottom (signature, not a link hub)

Each quest card leads with the **plain subject** of the work (e.g. "SWIFT Product Turnaround"), with the themed name ("Rags to Riches") demoted to a small kicker. Cards are 5:7 portrait, echoing the skill-card silhouette.

## Current Quests

| Quest | Category | Type | Description |
|-------|----------|------|-------------|
| SWIFT Product Turnaround | Lore | Case Study | Senior PM since 2024; intake-first turnaround of a $1.5B platform (3rd → 50th percentile usability) |
| Shape Matters | Artifact | Project Showcase | Org depth and signal decay - 15 reference companies, 223 tests |
| Plyplan | Artifact | Project Showcase | Phone-first plywood cut optimizer (classic bin-packing - no AI) |
| Glimpse | Artifact | Project Showcase | Private browser EDA - Python via Pyodide/WASM, zero server calls |

## Design System

**"The Gaming Table"** — inspired by premium tabletop games like Brass Birmingham and Gloomhaven.

- **Palette**: Dark walnut background, parchment card surfaces, burnished gold accents
- **Typography**: Cormorant Garamond (display/headings), Inter (body), Crimson Pro (flavor text), JetBrains Mono (stats), Cinzel (monogram seal)
- **Textures**: All CSS/SVG - wood grain gradients, linen weave parchment, gold gradient borders
- **Cards**: 3D flip animations, gold gradient borders via padding trick, layered box-shadows
- **Docs**: `.impeccable.md` (aesthetic intent), `design-system.md` (tokens/components), **`VOICE.md`** (writing doctrine - required for all user-facing copy)

## Tech Stack

- React 19
- TypeScript 5.9
- Vite 7
- Tailwind CSS 4
- Zustand 5 (persist)
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Adding a New Quest

1. Create `src/components/artifacts/<id>/index.tsx` with a default export component
2. Add one entry to `src/data/artifacts.ts` with quest metadata (subject, subtitle, plain description with receipts)
3. Write the body to `VOICE.md` case-study grammar (setup → hard call → how → evidence → exit)
4. Done - routing, cards, and the card→page morph are derived from the data

## Project Structure

```
src/
  assets/
    artifacts/     Live product screenshots (bundled)
  components/
    landing/       Character sheet, Maker's Note, quest board, Maker's Mark
    cards/         Skill cards, quest cards, badges, pips
    shared/        Gold border, divider, filigree, contact button, product shot
    viewers/       Artifact shell (illuminated-manuscript reading view)
    artifacts/     One subfolder per quest (self-contained)
  data/            Skills, artifacts
  hooks/           Hash sync, card flip
  store/           Zustand app store
  types/           TypeScript interfaces
  utils/           View-transition helper
VOICE.md           Writing doctrine (single source of truth)
tasks/             Backlog + voice audit
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

## Roadmap

See `tasks/backlog.md`. Open items: technical polish (performance, copy-email fallback, analytics), optional Maker's note photo, Current Quest rotation, and future quests when content is public-safe (Conduit is the strongest documented candidate). Voice and skill-card receipts for the four quests are current.
