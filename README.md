# The Gaming Table — Matt Bayne's Portfolio

A premium tabletop game-inspired personal portfolio where career artifacts are quests, Clifton Strengths are skill cards, and the whole experience invites you into a story.

## Live Demo

**[mattbayne.dev](https://mattbayne.dev)** — deployed via GitHub Actions on push to `main`.

## What Is This?

A single-page React app that presents Matt Bayne's professional work as an interactive quest board. Instead of a traditional resume site, visitors encounter:

- **Character Sheet** — name, class ("The Synthesizer"), monogram seal, a "Current Quest" proof line, and 5 skill cards fanned like a hand of cards
- **Skill Cards** — Clifton Strengths (Belief, Communication, Woo, Ideation, Maximizer) as flippable playing cards with 3D CSS animations; each back carries a first-person story with a real receipt
- **Quest Board** — portfolio artifacts presented as main quests with difficulty ratings, skill badges, and flavor text
- **Artifact Pages** — clicking a quest card morphs it into an illuminated-manuscript reading page (View Transitions API) with case-study narrative, live product screenshots, and real metrics
- **Maker's Mark footer** — a flat bar pinned to the bottom edge: one primary contact action plus quiet links to LinkedIn, GitHub, and résumé. It's visible on landing, slides away as you read down, and returns when you scroll back up or reach the foot of the page (deliberately a signature, not a link hub)

Each quest card leads with the **plain subject** of the work (e.g. "SWIFT Product Turnaround"), with the themed name ("Rags to Riches") demoted to a small kicker — so the work is scannable in seconds while the theme stays as flavor. Cards are 5:7 portrait, echoing the skill-card silhouette.

## Current Quests

| Quest | Category | Type | Description |
|-------|----------|------|-------------|
| SWIFT Product Leadership | Lore | Case Study | Transforming a $1.5B platform from 3rd to 50th percentile |
| Shape Matters | Artifact | Project Showcase | Interactive research tool: org depth and signal decay |
| Plyplan | Artifact | Project Showcase | AI-powered plywood cut optimizer for woodworkers |
| Glimpse | Artifact | Project Showcase | Privacy-first EDA — Python in the browser via Pyodide/WASM |

## Design System

**"The Gaming Table"** — inspired by premium tabletop games like Brass Birmingham and Gloomhaven.

- **Palette**: Dark walnut background, parchment card surfaces, burnished gold accents
- **Typography**: Cormorant Garamond (display/headings), Inter (body), Crimson Pro (flavor text), JetBrains Mono (stats), Cinzel (monogram seal)
- **Textures**: All CSS/SVG — wood grain gradients, linen weave parchment, gold gradient borders
- **Cards**: 3D flip animations, gold gradient borders via padding trick, layered box-shadows

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
2. Add one entry to `src/data/artifacts.ts` with quest metadata
3. Done — routing, cards, and the card→page morph are all derived from the data

## Project Structure

```
src/
  assets/
    artifacts/     Live product screenshots (bundled)
  components/
    landing/       Character sheet, quest board, landing page
    cards/         Skill cards, quest cards, badges, pips
    shared/        Gold border, divider, filigree, contact button, product shot
    viewers/       Artifact shell (illuminated-manuscript reading view)
    artifacts/     One subfolder per quest (self-contained)
  data/            Skills, artifacts
  hooks/           Hash sync, card flip
  store/           Zustand app store
  types/           TypeScript interfaces
  utils/           View-transition helper
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |
