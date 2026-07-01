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
- Hash URL sync via `useHashSync` hook (`#/` ↔ `#/swift-leadership`)
- Artifact registry: data-driven array in `data/artifacts.ts` — add one entry + one component to add a quest
- One render mode: **Shell** (persistent nav) — an "illuminated manuscript" reading view: one centered `max-w-2xl` column on a warm "page" surface, with a metadata-driven chapter opener (kicker=`title`, H1=`subject`, italic `flavorText`, gem divider) rendered by `ArtifactShell` — artifacts supply only the body below it. (Immersive/SlideViewer mode was deleted 2026-07-01 as unused dead code; restore from git history if a real deck ships)
- **Quest-card → manuscript morph**: `openArtifact`/`closeArtifact` run inside `document.startViewTransition` (`utils/viewTransition.ts`); each QuestCard and its ArtifactShell `<article>` share `view-transition-name: quest-<id>`, so the card expands into the page and back. Scroll happens inside the snapshot window (top on open, quest board on close). Skipped under reduced motion / unsupported browsers
- 3D card flip on skill cards via CSS `perspective` + `rotateY(180deg)`

## Design System — "The Gaming Table"
- **Palette**: Dark walnut bg (#1A1410), parchment surface (#F2EAD9), burnished gold primary (#C8973E)
- **Skill colors**: Belief #8B2E3A, Communication #2E5A8B, Woo #2E6B4A, Ideation #5E3A8B, Maximizer #B8860B
- **Textures**: All CSS/SVG — wood grain (repeating-linear-gradient), parchment (linen weave), gold borders (linear-gradient)
- **Cards**: Gold gradient borders (2px padding trick), layered box-shadows, 5:7 aspect ratio
- **Gold gradients are tokens**: `--gradient-gold-edge` (5-stop, card edges) + `--gradient-gold-fill` (3-stop, solid gold buttons) in `index.css` — use them, don't paste literals
- **Design docs**: `.impeccable.md` = aesthetic *intent* (audience/brand/anti-references); `design-system.md` = component + token *catalog*

## Key Files
- `src/App.tsx` — Hub shell: LandingPage vs ArtifactShell
- `src/index.css` — Tailwind @theme tokens (palette, gradients, animations), `Cormorant Fallback` @font-face (CLS), and the global `prefers-reduced-motion` block
- `src/types/index.ts` — SkillCard, ArtifactMeta, QuestType, ArtifactCategory, DifficultyLevel
- `src/data/skills.ts` — 5 skill card objects; flavor text is FIRST-PERSON with one real receipt per strength (Belief=things that endure, Communication=SWIFT funding pitch, Woo=field-user adoption, Ideation=bin-packing→Plyplan, Maximizer=3rd→50th percentile) — don't regress to third-person Gallup paraphrase
- `src/data/artifacts.ts` — Artifact registry (quest metadata: subject, subtitle, difficulty, skillsUsed, flavorText)
- `src/store/useAppStore.ts` — activeArtifactId only (persisted); open/close actions wrap `withViewTransition`
- `src/utils/viewTransition.ts` — `withViewTransition(commit, afterCommit)`: flushSync inside `startViewTransition`, plain fallback for reduced-motion/unsupported
- `src/components/landing/MakersMark.tsx` — Flat, fixed bottom bar (contact CTA + LinkedIn/GitHub/Résumé). Auto-hides: visible on landing, hides on scroll-down, returns on scroll-up or at page bottom (`inert` while hidden). Edit the `LINKS` array to change destinations; empty `href` hides a link. LandingPage reserves a bottom spacer so it never covers the last quest
- `src/components/shared/ContactButton.tsx` — Shared gold mailto button + `CONTACT_EMAIL` constant. `size` prop: `'md'` (hero CTA, default) / `'sm'` (compact, used in the footer bar). Used by footer and the SWIFT article CTA
- `src/components/shared/MetricGrid.tsx` — Result/stat callouts as gold-border parchment cards (Cormorant numerals); use instead of flat metric grids
- `src/components/shared/ArtifactErrorBoundary.tsx` — Wraps lazy artifact Suspense; "back to the board" recovery card on chunk-load failure
- `src/components/shared/ProductShot.tsx` — Gold-framed screenshot figure for shell pages; live-product captures live in `src/assets/artifacts/`

## Directories
- `src/components/landing/` — CharacterSheet, QuestBoard, LandingPage, MakersMark
- `src/components/cards/` — SkillCard, SkillCardSpread, QuestCard, SkillBadge, DifficultyPips, CategoryBadge
- `src/components/shared/` — GoldBorder, GoldDivider, GoldFiligree, ContactButton, MetricGrid, ProductShot, ArtifactErrorBoundary
- `src/components/viewers/` — ArtifactShell
- `src/components/artifacts/` — Self-contained artifact content (one subfolder per artifact)
- `src/hooks/` — useHashSync, useCardFlip
- `src/data/` — skills, artifacts
- `src/utils/` — viewTransition

## Adding a New Artifact
1. Create `src/components/artifacts/<id>/index.tsx` (default export component)
2. Add one entry to `src/data/artifacts.ts` with quest metadata — including `subject` (plain scannable headline) and `subtitle` (one-line descriptor); `title` is the themed kicker
3. Done — no other files need to change

**Shell-mode artifacts:** don't render your own title/subtitle hero — `ArtifactShell` builds the illuminated opener from metadata. Start the body at the first section; add the `drop-cap` class to the opening paragraph; use `<h2>` for section headings (the opener owns the `<h1>`).

## Gotchas
- `portfolio-storage` localStorage key — don't change (backward compat)
- Skill card fan rotations hardcoded in `SkillCardSpread.tsx` — change `fanRotations` array for different spread
- Gold gradient border uses `padding` trick on wrapper div with `bg-surface` inner — NOT a CSS border
- 3D flip: `backface-visibility: hidden` required on BOTH faces, `transform-style: preserve-3d` on inner container
- **`overflow-x-auto` forces `overflow-y: auto`** (CSS spec) — scroll containers need extra padding to accommodate `scale()` transforms on children
- **No category filter** — deleted 2026-07-01 (filtering 4 quests hid work); corner CategoryBadges on cards are flavor only. Revisit only if the board grows past ~8 quests
- **`closeArtifact`/`openArtifact` must NOT be called during render** — they `flushSync` inside a View Transition; use an effect (see the unknown-hash fallback in `App.tsx`)
- **Suspense lives INSIDE ArtifactShell** — the article frame is the morph target and must commit synchronously; only the lazy body chunk may suspend
- QuestCard leads with `subject` (the real headline); `title` is a small gold kicker above it — don't swap them back
- **Quest cards are 5:7 portrait** (`aspect-[5/7]`), matching the skill-card silhouette. Width is capped (`max-w-[280px] mx-auto` on the grid item) and the main-quest grid is a centered 2×2 tableau (`sm:grid-cols-2 max-w-[600px] mx-auto`) — no 3-column orphan rows. Card body is `flex flex-col`: text block vertically centered, footer pinned bottom, flavor `line-clamp-5`
- **Quest Log scroll cue is a `<button>`, not an `<a href="#...">`** — a hash anchor would fight `useHashSync` for `location.hash` and break routing
- **`.gitignore` uses `/assets/` (root-anchored)** — the unanchored form silently ignores `src/assets/` and breaks the CI build on bundled images
- `.scrollbar-hide` is a custom utility defined in `index.css` (not a Tailwind default) — the mobile skill carousel depends on it
- lucide's brand icons (LinkedIn/GitHub) are deprecated; `MakersMark.tsx` uses inline SVG brand marks instead
- Muted-on-parchment text uses `--color-text-muted: #6B5F4F` (darkened to clear WCAG AA ≈5.2:1) — don't lighten it back
- **Reduced motion is honored globally** — `index.css` has a `prefers-reduced-motion: reduce` block that collapses all animation/transition; don't add motion that ignores it
- **Artifact stats use `MetricGrid`** — never hand-roll flat metric cards with colored `border-left/-top` stripes (an AI-slop tell the detector flags)
- **Skill-card flip** takes a `flipScale` prop; the mobile carousel passes `1` to avoid clipping inside `overflow-x-auto`
- `npx impeccable --json src` should stay at **0 findings** — it gates banned anti-patterns (accent stripes, gradient text, glassmorphism)
