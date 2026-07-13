# Design System — "The Gaming Table"

Component and token catalog for the Portfolio. This is the **inventory** (what
exists and how to reuse it); [.impeccable.md](.impeccable.md) is the **intent**
(who it's for, how it should feel). Tokens live in
[src/index.css](src/index.css) `@theme`; this doc documents them.

> When adding UI, reach for these primitives before writing new markup. If you
> find yourself re-pasting a gradient, a parchment card, or a gold rule, it
> already exists below.

---

## Design Tokens

All tokens are CSS custom properties in `src/index.css` `@theme`, exposed to
Tailwind as utilities (`bg-surface`, `text-primary`, `font-display`, …).

### Color

| Token | Hex | Role |
|-------|-----|------|
| `--color-bg` | `#1A1410` | Page background (dark walnut) |
| `--color-bg-elevated` | `#241E18` | Raised dark surfaces (artifact header) |
| `--color-surface` | `#F2EAD9` | Parchment card surface |
| `--color-surface-muted` | `#E4D9C4` | Secondary parchment |
| `--color-primary` | `#C8973E` | Burnished gold — accent, single primary CTA |
| `--color-primary-light` | `#DEB668` | Gold highlight (gradient stops, hovers) |
| `--color-primary-dark` | `#8B6914` | Gold shadow (gradient stops) |
| `--color-text-high` | `#2A2018` | Headings on parchment |
| `--color-text-body` | `#4A3F32` | Body on parchment |
| `--color-text-muted` | `#6B5F4F` | Muted on parchment — **AA ≈5.2:1, do not lighten** |
| `--color-text-on-dark` | `#D4C8B0` | Text on walnut |
| `--color-text-on-dark-muted` | `#9E9282` | Muted text on walnut |
| `--color-skill-*` | — | Five Clifton Strengths identity colors (belief/communication/woo/ideation/maximizer) |
| `--color-success` `--color-error` | `#4A8B5E` `#8B3A3A` | Currently unused — only consumer was the removed pipeline-risk deck. Safe to delete unless a future artifact needs status colors |

`--color-info` / `--color-warning` are defined but currently unused — left in
place as the obvious slots if a status/alert surface is ever needed.

### Typography

Five families, each with a job (loaded via Google Fonts in `index.html`):

| Token | Family | Use |
|-------|--------|-----|
| `--font-display` | Cormorant Garamond | Headings, hero, metric numerals |
| `--font-sans` | Inter | UI, labels, body-UI |
| `--font-serif` | Crimson Pro | Flavor/editorial prose, italic voice |
| `--font-mono` | JetBrains Mono | Stats, ranks, colophon |
| Cinzel | (inline) | Monogram seal letters **only** |

### Gradients — single source of truth

The gold treatments are tokenized; **do not re-paste the literal**.

| Token | Value | Use |
|-------|-------|-----|
| `--gradient-gold-edge` | 5-stop 135° (`C8973E→DEB668→C8973E→8B6914→C8973E`) | Card/border edges (via `GoldBorder`, `QuestCard`, `SkillCard`) |
| `--gradient-gold-fill` | 3-stop 135° (`DEB668→C8973E→8B6914`) | Solid gold buttons (`ContactButton`, error recovery) |

Bespoke single-use gradients (the coin faces and the `M` letter in
`CharacterSheet`, the SVG gradient in `GoldFiligree`) stay inline by design —
they're not duplicated, so they're not tokens.

### Motion

`--animate-fade-in` (0.4s) and `--animate-card-enter` (0.5s, staggered by
`index * 80ms`) are the two entrance animations. Navigation runs a
**quest-card → manuscript morph** via the View Transitions API
(`utils/viewTransition.ts`; group animation 480ms, exponential ease-out) —
each quest card shares a `view-transition-name` with its article page. A
global `@media (prefers-reduced-motion: reduce)` block collapses **all**
animation and transition to ~instant (including the view-transition
pseudo-elements), and `withViewTransition` skips the API entirely under
reduced motion — honor it; never add motion that ignores it.

---

## Signature pattern — the gold gradient-border

The brand's defining treatment is a **padding-trick border**, not a CSS
`border`: a wrapper with `padding: 1.5–2px` and `background: var(--gradient-gold-edge)`,
holding an inner `rounded-[10px] bg-surface` child. This yields a gradient edge
that a flat `border-color` can't. Use `GoldBorder` rather than re-implementing it.

---

## Component Catalog

Path: `src/components/shared/` and `src/components/cards/`. Usage counts as of
this writing.

### Foundational

- **`GoldBorder`** (shared) — the gradient-edge parchment wrapper. Props:
  `thickness?=2`, `opacity?=1`, `className?`. The base primitive most other
  gold surfaces compose from.
- **`GoldDivider`** (shared, ×7) — centered hairline rule with a gem glyph.
  Section separator. Props: `className?`.
- **`GoldFiligree`** (shared, ×3) — decorative corner SVG flourish; used on
  main quest cards. Props: `className?`.

### Content primitives

- **`MetricGrid`** (shared, ×4) — result/stat callouts as `GoldBorder` parchment
  cards with Cormorant numerals. The canonical way to show metrics inside an
  artifact. Props: `metrics: {value, label}[]`, `className?`. **Use this, not a
  flat metric grid** — bare metric cards with accent stripes are a banned tell.
- **`ContactButton`** (shared, ×2) — the page's single solid-gold action
  (`--gradient-gold-fill`). Props: `label`, `subject?`, `icon?`. Exports
  `CONTACT_EMAIL`. Keep it the *only* solid-gold button on a view.
- **`DifficultyPips`** (cards) — rating display; filled `◆` vs outline `◇`
  (shape, not color alone) with `role="img"` + `aria-label`. Props: `level`,
  `max?=5`.
- **`SkillBadge`** (cards, ×4) — skill name with its identity-color dot. Props:
  `skillId`.
- **`CategoryBadge`** (cards) — small icon+label metadata pill in the quest-card
  header (Lore/Artifact). Flavor only — there is no category filtering.
- **`ProductShot`** (shared, ×3) — gold-framed screenshot figure for shell
  pages; the canonical way to show a live product working. Props: `src`, `alt`,
  `caption?`, `maxWidth?` (cap for phone-format captures). Images live in
  `src/assets/artifacts/`.

### Composites

- **`SkillCard`** (cards) — flippable Clifton-Strength card (fixed 200×280;
  export `SKILL_CARD_WIDTH` / `SKILL_CARD_HEIGHT` for carousel math). 3D flip
  (`preserve-3d` + `backface-visibility`), `flipScale?=1.2` (mobile passes
  `1.06` to avoid carousel clipping). **Front:** icon, name, thematic title,
  domain badge, tagline, rank, `RotateCw` flip affordance. **Back:** quiet
  reverse only — small name + one italic flavor paragraph (~45–55 words);
  do not restack front chrome. Full keyboard + `aria-pressed`/`aria-label`.
- **`SkillCardSpread`** (cards) — desktop fan + mobile snap-carousel of
  `SkillCard`s; imports `SKILL_CARD_WIDTH` so pitch stays in sync.
- **`QuestCard`** (cards) — artifact entry card. Leads with `subject` (real
  headline); themed `title` is the small gold kicker — **never swap them**.
  Year sits in the header row; footer closes with an always-visible
  "Begin Quest →" affordance (touch has no hover). The card root carries
  `view-transition-name: quest-<id>`, shared with its article page for the
  open/close morph.

### Robustness

- **`ArtifactErrorBoundary`** (shared) — wraps lazy artifact `Suspense`; renders
  a parchment "back to the board" recovery card instead of an infinite spinner.
  Props: `onBack`, `children`.

---

## Conventions

- **Adding an artifact**: create `src/components/artifacts/<id>/index.tsx`
  (default export), add one entry to `src/data/artifacts.ts`. Use `MetricGrid`
  for stats, `GoldDivider` between sections, `SkillBadge` for skills-used,
  `ProductShot` for live-product evidence.
- **One render mode**: Shell (`ArtifactShell`, the illuminated-manuscript
  reading view). Artifacts supply only the body — gold small-caps `<h2>`
  kickers, `.drop-cap` on the opening paragraph, left-set prose. Don't invent
  per-page layouts. (Immersive/SlideViewer was deleted 2026-07-01 as unused.)
- **Metrics must be real** — `MetricGrid` values are verifiable numbers (test
  counts, percentiles, outcomes), never label-padding like "100% Browser-Based".

## Enforced anti-patterns

Per `.impeccable.md` and verified by `npx impeccable --json src` (currently 0
findings): **no** colored `border-left/right` accent stripes, **no** gradient
text in body/headings, **no** flat metric grids (use `MetricGrid`), **no**
glassmorphism reflexes on chrome. Keep the detector at zero.
