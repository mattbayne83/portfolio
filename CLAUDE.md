# Portfolio — "The Gaming Table"

## Tech Stack
- React 19, TypeScript 5.9, Vite 7
- Tailwind CSS 4, Zustand 5 (persist), Lucide React
- Fonts: Cormorant Garamond (display, set in `@theme`), Inter (body/sans), Crimson Pro (flavor/serif), JetBrains Mono (stats), Cinzel (monogram seal only)

## Product
Premium tabletop game-inspired personal portfolio. Character sheet hero with 5 Clifton Strengths skill cards, quest board with portfolio artifacts as quests. Audience: external (employers/clients).

## Deployment
- **Live:** https://mattbayne.dev (GitHub Pages, custom domain)
- **CI/CD:** `.github/workflows/deploy.yml` — builds + deploys on push to `main`
- **Repo:** https://github.com/mattbayne83/portfolio

## Architecture
- State-driven routing: `activeArtifactId` null = landing, string = artifact view
- Hash URL sync via `useHashSync` hook (`#/` ↔ `#/pipeline-risk-integrity`)
- Artifact registry: data-driven array in `data/artifacts.ts` — add one entry + one component to add a quest
- Two render modes: **Immersive** (full-screen, Escape to close) for decks/demos, **Shell** (persistent nav) for articles/viz
- 3D card flip on skill cards via CSS `perspective` + `rotateY(180deg)`
- SlideViewer: fixed 960×540 design resolution, CSS `transform: scale()` to fit; floored at `MIN_SCALE` 0.6 so slides pan/scroll (not shrink to unreadable) on phones

## Design System — "The Gaming Table"
- **Palette**: Dark walnut bg (#1A1410), parchment surface (#F2EAD9), burnished gold primary (#C8973E)
- **Skill colors**: Belief #8B2E3A, Communication #2E5A8B, Woo #2E6B4A, Ideation #5E3A8B, Maximizer #B8860B
- **Textures**: All CSS/SVG — wood grain (repeating-linear-gradient), parchment (linen weave), gold borders (linear-gradient)
- **Cards**: Gold gradient borders (2px padding trick), layered box-shadows, 5:7 aspect ratio
- **Gold gradients are tokens**: `--gradient-gold-edge` (5-stop, card edges) + `--gradient-gold-fill` (3-stop, solid gold buttons) in `index.css` — use them, don't paste literals
- **Design docs**: `.impeccable.md` = aesthetic *intent* (audience/brand/anti-references); `design-system.md` = component + token *catalog*

## Key Files
- `src/App.tsx` — Hub shell: LandingPage vs ImmersiveWrapper vs ArtifactShell
- `src/index.css` — Tailwind @theme tokens (palette, gradients, animations), `Cormorant Fallback` @font-face (CLS), and the global `prefers-reduced-motion` block
- `src/types/index.ts` — SkillCard, ArtifactMeta, QuestType, ArtifactCategory, DifficultyLevel
- `src/data/skills.ts` — 5 skill card objects with flavor text from Clifton Strengths assessment
- `src/data/artifacts.ts` — Artifact registry (quest metadata: subject, subtitle, difficulty, skillsUsed, flavorText)
- `src/data/categories.ts` — Category config (lore/scroll/artifact/map)
- `src/store/useAppStore.ts` — activeArtifactId, filterCategory, currentSlide (partialize persists nav + slide only)
- `src/components/landing/MakersMark.tsx` — Footer: contact CTA + LinkedIn/GitHub/Résumé. Edit the `LINKS` array to change destinations; empty `href` hides a link
- `src/components/shared/ContactButton.tsx` — Shared gold mailto button + `CONTACT_EMAIL` constant (used by footer and the SWIFT article CTA)
- `src/components/shared/MetricGrid.tsx` — Result/stat callouts as gold-border parchment cards (Cormorant numerals); use instead of flat metric grids
- `src/components/shared/ArtifactErrorBoundary.tsx` — Wraps lazy artifact Suspense; "back to the board" recovery card on chunk-load failure

## Directories
- `src/components/landing/` — CharacterSheet, QuestBoard, LandingPage, MakersMark
- `src/components/cards/` — SkillCard, SkillCardSpread, QuestCard, SkillBadge, DifficultyPips, QuestTypeBadge, CategoryBadge
- `src/components/shared/` — GoldBorder, GoldDivider, GoldFiligree, ContactButton, MetricGrid, ArtifactErrorBoundary
- `src/components/viewers/` — SlideViewer, ImmersiveWrapper, ArtifactShell
- `src/components/artifacts/` — Self-contained artifact content (one subfolder per artifact)
- `src/hooks/` — useHashSync, useEscapeKey, useCardFlip
- `src/data/` — skills, artifacts, categories

## Adding a New Artifact
1. Create `src/components/artifacts/<id>/index.tsx` (default export component)
2. Add one entry to `src/data/artifacts.ts` with quest metadata — including `subject` (plain scannable headline) and `subtitle` (one-line descriptor); `title` is the themed kicker
3. Done — no other files need to change

## Gotchas
- `portfolio-storage` localStorage key — don't change (backward compat)
- Skill card fan rotations hardcoded in `SkillCardSpread.tsx` — change `fanRotations` array for different spread
- Slide components use their own internal colors (neutral-50/950) — not affected by theme tokens
- **Slides are designed at 960×540** — use fixed pixel sizes inside slides (NOT responsive Tailwind breakpoints). SlideViewer scales the entire slide with CSS transform.
- Gold gradient border uses `padding` trick on wrapper div with `bg-surface` inner — NOT a CSS border
- 3D flip: `backface-visibility: hidden` required on BOTH faces, `transform-style: preserve-3d` on inner container
- **`overflow-x-auto` forces `overflow-y: auto`** (CSS spec) — scroll containers need extra padding to accommodate `scale()` transforms on children
- Category filter bar only renders when `allCategories.length > 1`
- QuestCard leads with `subject` (the real headline); `title` is a small gold kicker above it — don't swap them back
- `.scrollbar-hide` is a custom utility defined in `index.css` (not a Tailwind default) — the mobile skill carousel depends on it
- lucide's brand icons (LinkedIn/GitHub) are deprecated; `MakersMark.tsx` uses inline SVG brand marks instead
- Muted-on-parchment text uses `--color-text-muted: #6B5F4F` (darkened to clear WCAG AA ≈5.2:1) — don't lighten it back
- **Reduced motion is honored globally** — `index.css` has a `prefers-reduced-motion: reduce` block that collapses all animation/transition; don't add motion that ignores it
- **Artifact stats use `MetricGrid`** — never hand-roll flat metric cards with colored `border-left/-top` stripes (an AI-slop tell the detector flags)
- **Skill-card flip** takes a `flipScale` prop; the mobile carousel passes `1` to avoid clipping inside `overflow-x-auto`
- `npx impeccable --json src` should stay at **0 findings** — it gates banned anti-patterns (accent stripes, gradient text, glassmorphism)
