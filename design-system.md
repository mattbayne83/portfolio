# Design System — Portfolio

Generated: 2026-03-11
Mood: Bold editorial confidence — strong typographic contrast, decisive color, generous whitespace that lets the work breathe.

---

## Color Palette

### Primary Colors
| Role | Name | Hex | Tailwind Token | Usage |
|------|------|-----|----------------|-------|
| Primary | Electric Indigo | #4F46E5 | `--color-primary` | CTAs, primary buttons, active states, key accents |
| Primary Light | Soft Indigo | #818CF8 | `--color-primary-light` | Hover states, selected backgrounds, secondary accents |
| Primary Dark | Deep Indigo | #3730A3 | `--color-primary-dark` | Active/pressed states, emphasis, focus rings |

### Accent Colors
| Role | Name | Hex | Tailwind Token | Usage |
|------|------|-----|----------------|-------|
| Accent | Coral | #F43F5E | `--color-accent` | Type badges, attention-grabbers, interactive highlights |
| Accent Warm | Amber | #F59E0B | `--color-accent-warm` | Featured project badges, star ratings, warmth pops |

### Neutral Scale
| Step | Hex | Usage |
|------|-----|-------|
| 50 | #FAFAFA | Page background, subtle fills |
| 100 | #F5F5F4 | Card backgrounds, alternating rows |
| 200 | #E7E5E4 | Borders, dividers |
| 300 | #D6D3D1 | Disabled states, placeholder text |
| 400 | #A8A29E | Muted text, icons |
| 500 | #78716C | Secondary text, captions |
| 600 | #57534E | Body text |
| 700 | #44403C | Subheadings, emphasis |
| 800 | #292524 | Headings, high-contrast text |
| 900 | #1C1917 | Maximum contrast, hero text |
| 950 | #0C0A09 | Near-black, dark sections |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | #10B981 | Confirmations, live/deployed indicators |
| Warning | #F59E0B | Caution states, draft indicators |
| Error | #EF4444 | Validation errors, broken link indicators |
| Info | #3B82F6 | Informational callouts, tooltips |

### Palette Rationale
Electric Indigo is assertive without being aggressive — it says "I know what I'm doing" while remaining approachable. The warm stone neutral scale prevents the sterile feel of pure grays, adding subtle warmth that makes a portfolio feel human. Coral and Amber accents create a split-complementary relationship with Indigo, providing high-energy contrast for badges and interactive moments without competing with project thumbnails.

### Accessibility Notes
- Primary (#4F46E5) on white (#FAFAFA): 5.5:1 — passes WCAG AA and AAA for large text
- Body text (#57534E) on white (#FAFAFA): 6.8:1 — passes WCAG AA
- Heading text (#1C1917) on white (#FAFAFA): 16.7:1 — passes WCAG AAA
- Coral accent (#F43F5E) on white: 4.6:1 — passes WCAG AA; use semibold weight at small sizes

---

## Typography

### Font Pairing
| Role | Font | Weight(s) | Import |
|------|------|-----------|--------|
| Headings | Space Grotesk | 500, 700 | `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap')` |
| Body | Inter | 400, 500 | Already imported |
| Mono/Code | JetBrains Mono | 400 | `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap')` |

### Why This Pairing Works
Space Grotesk has the geometric boldness of a display face with enough quirk (the distinctive 'g', the slightly squared 'o') to signal creative confidence. Paired with Inter's neutral clarity for body text, the contrast is immediate: headings grab, body text gets out of the way. JetBrains Mono for any code snippets or technical labels adds a developer-literate touch.

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing | Tailwind |
|---------|------|--------|-------------|----------------|----------|
| Display | 3.75rem / 60px | 700 | 1.05 | -0.03em | `text-6xl font-bold leading-none tracking-tighter` |
| H1 | 2.25rem / 36px | 700 | 1.15 | -0.02em | `text-4xl font-bold leading-tight tracking-tight` |
| H2 | 1.875rem / 30px | 700 | 1.2 | -0.01em | `text-3xl font-bold` |
| H3 | 1.5rem / 24px | 500 | 1.3 | 0 | `text-2xl font-medium` |
| H4 | 1.25rem / 20px | 500 | 1.4 | 0 | `text-xl font-medium` |
| Body | 1rem / 16px | 400 | 1.65 | 0 | `text-base` |
| Body Small | 0.875rem / 14px | 400 | 1.5 | 0 | `text-sm` |
| Caption | 0.75rem / 12px | 500 | 1.4 | 0.05em | `text-xs font-medium tracking-widest uppercase` |

### Alternative Pairings
1. **Sora + Inter** — Sora is rounder, more playful than Space Grotesk. Better if the portfolio leans more "creative director" than "engineer who designs."
2. **Outfit + Source Serif 4** — Outfit's clean geometry + a serif body creates an editorial magazine feel. Best for long-form case studies alongside project cards.

---

## Spacing & Layout

### Spacing Scale
Base unit: 4px. Use Tailwind's default scale:
| Token | Value | Common Usage |
|-------|-------|-------------|
| 1 | 4px | Tight icon gaps |
| 2 | 8px | Inline element spacing, badge padding |
| 3 | 12px | Compact card padding, list gaps |
| 4 | 16px | Standard padding, form field spacing |
| 6 | 24px | Card padding, component gaps |
| 8 | 32px | Section padding on mobile |
| 12 | 48px | Section gaps |
| 16 | 64px | Major section breaks |
| 24 | 96px | Hero vertical padding |
| 32 | 128px | Full section vertical rhythm |

### Container
- Max width: `max-w-6xl` (1152px) centered with `mx-auto px-6`
- Project grid: 3-column on desktop, 2-column on tablet, 1-column on mobile

### Border Radius
| Element | Radius | Tailwind |
|---------|--------|----------|
| Buttons | 8px | `rounded-lg` |
| Cards | 12px | `rounded-xl` |
| Inputs | 8px | `rounded-lg` |
| Badges/Pills | 9999px | `rounded-full` |
| Images/Thumbnails | 12px | `rounded-xl` |

### Shadows
| Level | CSS | Tailwind | Usage |
|-------|-----|----------|-------|
| Subtle | `0 1px 2px rgba(28, 25, 23, 0.05)` | `shadow-sm` | Cards at rest |
| Default | `0 1px 3px rgba(28, 25, 23, 0.1), 0 1px 2px rgba(28, 25, 23, 0.06)` | `shadow` | Dropdowns |
| Medium | `0 4px 6px -1px rgba(28, 25, 23, 0.1), 0 2px 4px rgba(28, 25, 23, 0.06)` | `shadow-md` | Cards on hover |
| Large | `0 20px 25px -5px rgba(28, 25, 23, 0.1), 0 8px 10px rgba(28, 25, 23, 0.04)` | `shadow-lg` | Modals, feature cards |
| Glow | `0 0 0 4px rgba(79, 70, 229, 0.15)` | `ring-4 ring-primary/15` | Focus states, featured items |

---

## Component Styles

### Buttons
```
Primary:     bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-primary-dark active:scale-[0.98] transition-all
Secondary:   bg-transparent border border-neutral-200 text-neutral-800 font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-100 transition-colors
Ghost:       bg-transparent text-primary font-medium px-5 py-2.5 rounded-lg hover:bg-primary/5 transition-colors
Pill Badge:  bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full
```

### Cards
```
Project:     bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer
Featured:    bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-primary/10
Flat:        bg-neutral-100 rounded-xl p-6
```

### Inputs
```
Default:     border border-neutral-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all
```

### Navigation
```
Nav Link:    text-neutral-500 font-medium text-sm hover:text-neutral-900 transition-colors
Active Link: text-neutral-900 font-medium text-sm
```

---

## Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease-out | Button hover, icon swap, toggle |
| Standard | 250ms | ease-in-out | Card hover lift, filter change, tab switch |
| Emphasis | 350ms | cubic-bezier(0.16, 1, 0.3, 1) | Modal enter, project detail expand |
| Stagger | 50ms per item | ease-out | Grid items appearing on load |
| Exit | 200ms | ease-in | Closing modals, dismissing filters |

### Transitions to Use
- **Card hover**: `transition-all duration-250` (shadow + transform + border)
- **Button hover**: `transition-all duration-150` (color + scale)
- **Page sections on scroll**: `animate-[fade-up_0.5s_ease-out]` with stagger
- **Filter transitions**: `transition-opacity duration-250` for grid item show/hide

### Signature Interaction
Project cards lift on hover (`-translate-y-0.5 shadow-md`). This subtle lift says "this is interactive, click me" without being bouncy or gimmicky.

---

## Tailwind Theme Extension

Add to `src/index.css` inside `@theme`:
```css
@theme {
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --color-primary: #4F46E5;
  --color-primary-light: #818CF8;
  --color-primary-dark: #3730A3;
  --color-accent: #F43F5E;
  --color-accent-warm: #F59E0B;

  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F4;
  --color-neutral-200: #E7E5E4;
  --color-neutral-300: #D6D3D1;
  --color-neutral-400: #A8A29E;
  --color-neutral-500: #78716C;
  --color-neutral-600: #57534E;
  --color-neutral-700: #44403C;
  --color-neutral-800: #292524;
  --color-neutral-900: #1C1917;
  --color-neutral-950: #0C0A09;

  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

---

## Anti-Patterns — Do NOT

1. **Don't use pure black (#000000) for text.** Use `neutral-900` (#1C1917) for max contrast — pure black is harsh against warm neutrals.
2. **Don't mix border-radius languages.** Cards and images get `rounded-xl`, buttons and inputs get `rounded-lg`, badges get `rounded-full`. No exceptions.
3. **Don't compete with project thumbnails.** The design system serves the work, not itself. Keep chrome minimal so screenshots and project images are the loudest thing on screen.
4. **Don't use more than 2 colors simultaneously** (beyond neutrals). Primary + one accent per section max.
5. **Don't add both a border AND a shadow to the same card at rest.** Pick one. Borders at rest, shadows on hover.
6. **Don't center-align body text.** Headings can center on hero sections; everything else is left-aligned.
7. **Don't use Inter for headings.** Always use Space Grotesk (`font-display`) for H1-H4 and display text. Inter is body only.
8. **Don't animate transforms without `will-change-transform`** on elements that animate frequently (grid cards). Prevents paint jank.
