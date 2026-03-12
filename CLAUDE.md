# Portfolio — "The Gaming Table"

## Tech Stack
- React 19, TypeScript 5.9, Vite 7
- Tailwind CSS 4, Zustand 5 (persist), Lucide React
- Fonts: Space Grotesk (display), Inter (body), Crimson Pro (flavor/serif), JetBrains Mono (stats)

## Product
Premium tabletop game-inspired personal portfolio. Character sheet hero with 5 Clifton Strengths skill cards, quest board with portfolio artifacts as quests. Audience: external (employers/clients).

## Architecture
- State-driven routing: `activeArtifactId` null = landing, string = artifact view
- Hash URL sync via `useHashSync` hook (`#/` ↔ `#/pipeline-risk-integrity`)
- Artifact registry: data-driven array in `data/artifacts.ts` — add one entry + one component to add a quest
- Two render modes: **Immersive** (full-screen, Escape to close) for decks/demos, **Shell** (persistent nav) for articles/viz
- 3D card flip on skill cards via CSS `perspective` + `rotateY(180deg)`

## Design System — "The Gaming Table"
- **Palette**: Dark walnut bg (#1A1410), parchment surface (#F2EAD9), burnished gold primary (#C8973E)
- **Skill colors**: Belief #8B2E3A, Communication #2E5A8B, Woo #2E6B4A, Ideation #5E3A8B, Maximizer #B8860B
- **Textures**: All CSS/SVG — wood grain (repeating-linear-gradient), parchment (linen weave), gold borders (linear-gradient)
- **Cards**: Gold gradient borders (2px padding trick), layered box-shadows, 5:7 aspect ratio

## Key Files
- `src/App.tsx` — Hub shell: LandingPage vs ImmersiveWrapper vs ArtifactShell
- `src/index.css` — Tailwind @theme tokens (full palette + animations)
- `src/types/index.ts` — SkillCard, ArtifactMeta, QuestType, ArtifactCategory, DifficultyLevel
- `src/data/skills.ts` — 5 skill card objects with flavor text from Clifton Strengths assessment
- `src/data/artifacts.ts` — Artifact registry (quest metadata: difficulty, skillsUsed, flavorText)
- `src/data/categories.ts` — Category config (lore/scroll/artifact/map)
- `src/store/useAppStore.ts` — activeArtifactId, filterCategory, currentSlide (partialize persists nav + slide only)

## Directories
- `src/components/landing/` — CharacterSheet, QuestBoard, LandingPage
- `src/components/cards/` — SkillCard, SkillCardSpread, QuestCard, SkillBadge, DifficultyPips, QuestTypeBadge, CategoryBadge
- `src/components/shared/` — GoldBorder, GoldDivider, GoldFiligree
- `src/components/viewers/` — SlideViewer, ImmersiveWrapper, ArtifactShell
- `src/components/artifacts/` — Self-contained artifact content (one subfolder per artifact)
- `src/hooks/` — useHashSync, useEscapeKey, useCardFlip
- `src/data/` — skills, artifacts, categories

## Adding a New Artifact
1. Create `src/components/artifacts/<id>/index.tsx` (default export component)
2. Add one entry to `src/data/artifacts.ts` with quest metadata
3. Done — no other files need to change

## Gotchas
- `portfolio-storage` localStorage key — don't change (backward compat)
- Skill card fan rotations hardcoded in `SkillCardSpread.tsx` — change `fanRotations` array for different spread
- Slide components use their own internal colors (neutral-50/950) — not affected by theme tokens
- Gold gradient border uses `padding` trick on wrapper div with `bg-surface` inner — NOT a CSS border
- 3D flip: `backface-visibility: hidden` required on BOTH faces, `transform-style: preserve-3d` on inner container
- Category filter bar only renders when `allCategories.length > 1`
