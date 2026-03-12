# The Gaming Table — Matt Bayne's Portfolio

A premium tabletop game-inspired personal portfolio where career artifacts are quests, Clifton Strengths are skill cards, and the whole experience invites you into a story.

## Live Demo

> *Deployment URL coming soon*

## What Is This?

A single-page React app that presents Matt Bayne's professional work as an interactive quest board. Instead of a traditional resume site, visitors encounter:

- **Character Sheet** — name, class ("The Synthesizer"), monogram seal, and 5 skill cards fanned like a hand of cards
- **Skill Cards** — Clifton Strengths (Belief, Communication, Woo, Ideation, Maximizer) as flippable playing cards with 3D CSS animations
- **Quest Board** — portfolio artifacts presented as main quests with difficulty ratings, skill badges, and flavor text
- **Artifact Pages** — each quest opens into either a full-screen immersive experience (slide decks) or a shell-mode page (case studies, project showcases)

## Current Quests

| Quest | Category | Type | Description |
|-------|----------|------|-------------|
| Pipeline Risk & Integrity | Lore | Immersive Deck | Executive presentation on the future of pipeline safety |
| SWIFT Product Leadership | Lore | Case Study | Transforming a $1.5B platform from 3rd to 50th percentile |
| Shape Matters | Artifact | Project Showcase | Interactive research tool: org depth and signal decay |
| Plyplan | Artifact | Project Showcase | AI-powered plywood cut optimizer for woodworkers |

## Design System

**"The Gaming Table"** — inspired by premium tabletop games like Brass Birmingham and Gloomhaven.

- **Palette**: Dark walnut background, parchment card surfaces, burnished gold accents
- **Typography**: Space Grotesk (headings), Inter (body), Crimson Pro (flavor text), JetBrains Mono (stats)
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
3. Done — routing, cards, and filtering are all derived from the data

## Project Structure

```
src/
  components/
    landing/       Character sheet, quest board, landing page
    cards/         Skill cards, quest cards, badges, pips
    shared/        Gold border, divider, filigree components
    viewers/       Slide viewer, immersive wrapper, artifact shell
    artifacts/     One subfolder per quest (self-contained)
  data/            Skills, artifacts, categories
  hooks/           Hash sync, escape key, card flip
  store/           Zustand app store
  types/           TypeScript interfaces
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |
