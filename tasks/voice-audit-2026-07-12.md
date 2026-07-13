# Voice audit — 2026-07-12

Against `VOICE.md` (work corpus + portfolio gold). **Report only** — no copy applied until approved.

Severity: **P0** blocks trust / fails name-swap · **P1** clear drift · **P2** mechanical / polish · **OK** leave alone

---

## Summary

| Zone | Grade | Notes |
|------|-------|--------|
| Skill card backs | A | Canon — protect |
| Plyplan / Glimpse / Shape bodies | A− | Strong; mostly em-dash mechanics |
| Hero bio + Current Quest | A− | Strong; minor joint polish |
| Maker's Note | B+ | On-voice; slight slogan polish + em dash |
| SWIFT body | B | Hard call good; Approach + CTA softer |
| Skill card taglines (front) | D | Gallup third-person — P0 |
| Quest `description`s | C | Marketing paste on Shape/Glimpse |
| Quest flavors | B | Two "What if" openers; SWIFT "not just X" |
| Meta / chrome CTAs | B− | Brochure CTA on SWIFT |

---

## Issues and proposed resolutions

### Skill cards (`src/data/skills.ts`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| S1 | **P0** | Third-person Gallup tagline | Belief: `"Core values provide clarity and conviction."` | First-person one-liner, e.g. `"Will it hold up after I've moved on?"` (pulls from the back) |
| S2 | **P0** | Third-person Gallup tagline | Communication: `"Puts thoughts into words that capture and hold attention."` | e.g. `"Numbers don't fund products - stories do."` |
| S3 | **P0** | Third-person Gallup tagline | Woo: `"Draws energy from meeting new people and winning them over."` | e.g. `"Show up, learn the workarounds, follow through."` |
| S4 | **P0** | Third-person Gallup tagline | Ideation: `"Fascinated by ideas and connections between disparate phenomena."` | e.g. `"Best ideas are trespassers from other fields."` |
| S5 | **P0** | Third-person Gallup tagline | Maximizer: `"Transforms what's strong into something superb."` | e.g. `"Past average and still filing refinements."` |
| S6 | P2 | Em dashes in skill backs | All five `flavorText` strings | Replace pivot em dashes with ` - ` (or period) per VOICE mechanics; keep content |
| S7 | OK | Skill backs content | All five | **No content change** — canon |

---

### Quest registry (`src/data/artifacts.ts`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| Q1 | P1 | Marketing / abstract description | Shape Matters: `"Interactive research tool exploring how organizational depth drives signal decay…"` | Plain: e.g. `"Model your org's depth and watch signal die on the way up - 15 reference companies, 223 tests."` |
| Q2 | P1 | Marketing / abstract description | Glimpse: `"Privacy-first exploratory data analysis. Upload CSV files and glimpse the truth…"` | Plain: e.g. `"CSV analysis in the browser - pandas via WebAssembly, zero server calls."` |
| Q3 | P2 | Em dash + density | SWIFT `description` | Keep facts; joint to ` - `; optional tighten "0→1" if too résumé |
| Q4 | P1 | "not just X, Y" tool rhythm | SWIFT flavor: `"…not just how screens look."` | e.g. `"From 3rd percentile to market standard - by fixing how work gets chosen."` (drop the "not just") |
| Q5 | P1 | "What if" as flavor default | Shape Matters flavor | Diversify: e.g. `"Most communication problems are geometry problems. I built a model to check."` |
| Q6 | P1 | Second "What if" flavor | Glimpse flavor | Keep one site-wide max; rewrite Glimpse to declarative: e.g. `"Analysis without the upload. Python stays on your machine."` |
| Q7 | OK | Plyplan description + flavor | Plyplan | **Leave** — plain, physical, on-voice |
| Q8 | OK | Dual labels (subject vs title) | All quests | **Leave structure** — already correct |

*Note: `description` may be lightly used in UI today; still fix for OG/future and consistency.*

---

### Landing — Character Sheet (`CharacterSheet.tsx`, `MakersNote.tsx`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| L1 | P2 | Em dash joints | Current Quest, skill caption (`&mdash;`) | ` - ` or rephrase with period |
| L2 | OK | Hero bio | "Started in the field…" | **Leave** — canon staccato |
| L3 | OK | Role line / Current Quest facts | | **Leave** facts |
| L4 | P2 | Maker's Note: em dash + slight slogan polish | `"…craft seriously—not a pitch deck in costume."` | `"…craft seriously - not a pitch deck in costume."` Content OK |
| L5 | OK | Maker's Note open + Tulsa + open invitation | | **Leave** structure |
| L6 | OK | "The Quest Log" / table chrome | | **Leave** — Register E |

---

### Maker's Mark / chrome (`MakersMark.tsx`, `ContactButton`, errors)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| C1 | OK | `"Have a problem worth solving?"` | Footer | **Leave** — on-voice, Register F |
| C2 | OK | `"Get in touch"` | Footer button | **Leave** (or `"Email me"` if you want plainer) |
| C3 | OK | Error: `"This quest didn't load"` / back to board | ArtifactErrorBoundary | **Leave** — theme + clear |

---

### SWIFT case study (`swift-leadership/index.tsx`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| W1 | P2 | Em dashes throughout body | Multiple | Mechanical pass to ` - ` / commas / periods |
| W2 | OK | Challenge: tenure, team, 3rd % | Setup | **Leave** facts; optional tighten "roughly 10–15" if you want firmer |
| W3 | OK | Hard Call section | Intake over features | **Leave** intent — strongest SWIFT section |
| W4 | P1 | Approach drifts toward deck cadence | Foundations + storage paragraphs | Break into shorter beats; lead storage with the 3% underwrite; keep honest-yardstick line |
| W5 | P1 | Brochure CTA | `"Want the full story behind these numbers?"` | Hallway voice: e.g. `"Curious about the intake system - or the storage bet?"` + button `"Let's talk"` |
| W6 | P2 | Mailto subject uses em dash | `SWIFT — let's talk` | `SWIFT - let's talk` |
| W7 | OK | Metrics set (no 380%) | MetricGrid | **Leave** set; labels already plain |

---

### Plyplan (`plyplan/index.tsx`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| P1 | P2 | Heavy `&mdash;` use | Body + caption | Mechanical joint pass only |
| P2 | OK | Problem + Decision content | | **Leave** — gold standard |
| P3 | OK | Accuracy bar / kerf honesty | | **Leave** |
| P4 | OK | Stats + Launch App | | **Leave** |

---

### Glimpse (`glimpse/index.tsx`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| G1 | P2 | `&mdash;` joints | Body + caption | Mechanical joint pass only |
| G2 | OK | Premise, seven tries, deletion | | **Leave** — gold |
| G3 | OK | Metrics (0 server, 409 lines, 7 attempts) | | **Leave** |

---

### Shape Matters (`shape-matters/index.tsx`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| M1 | P2 | `&mdash;` joints | Body + caption | Mechanical joint pass only |
| M2 | OK | Question / Model / Keeping It Honest | | **Leave** content |
| M3 | OK | Provenance + theorem honesty | | **Leave** |

---

### Meta (`index.html`)

| ID | Sev | Issue | Location | Proposed resolution |
|----|-----|--------|----------|---------------------|
| H1 | P2 | Title/description em dashes | `Matt Bayne — Portfolio`, meta description | `Matt Bayne - Portfolio`; description joint to ` - ` |
| H2 | OK | Meta facts | ships software / $1.5B / gaming table | **Leave** substance |

---

### Out of scope for this pass

- Code comments (not user-facing)  
- README / CHANGELOG engineering prose (optional later)  
- Visual theme labels (Rags to Riches, Scrying Glass) — Register E, intentional  

---

## Suggested implementation order

1. **P0** — Rewrite five skill taglines (S1–S5)  
2. **P1** — Quest descriptions + flavors (Q1–Q2, Q4–Q6)  
3. **P1** — SWIFT Approach tighten + CTA (W4–W5)  
4. **P2** — Global user-facing joint pass (em dash → ` - ` / period) on strings only  
5. Re-read aloud against `VOICE.md` checklist  

---

## Approval needed before edit

Please flag any row to **skip**, **rewrite yourself**, or **approve as proposed**. Default next step after your go: implement P0→P1 in one PR-sized pass, then P2 joints.
