# Voice critical review — Portfolio × `VOICE.md`

**Date:** 2026-07-12 (refreshed against merged VOICE.md)  
**Scope:** All user-facing strings (not code comments, not README)  
**Verdict:** Gold core, cracked veneer. The manuscripts and skill *backs* already *are* the doctrine. The card fronts, two quest blurbs, SWIFT Approach/CTA, and joint mechanics still fail the name-swap and wire tests.

---

## Overall scorecard

| Zone | Score | Pass core tests? | One-line judgment |
|------|-------|------------------|-------------------|
| Skill **backs** | **9/10** | Yes | Canon. Protect. Joints only. |
| Plyplan body | **9/10** | Yes | Gold standard case study. |
| Glimpse body | **9/10** | Yes | Gold. Aphorism-adjacent insight lands. |
| Shape Matters body | **8.5/10** | Yes | Strong honesty; card blurb betrays it. |
| Hero + Current Quest | **8.5/10** | Yes | Staccato identity is pure Matt. |
| Maker's Note | **7.5/10** | Mostly | On-voice; one "What if" slot used; slight slogan polish. |
| Chrome (footer, errors, CTAs demo) | **8/10** | Yes | "Have a problem worth solving?" is wire-adjacent. |
| SWIFT body | **7/10** | Mixed | Hard call strong; Approach résumé-lists; CTA sells. |
| Quest flavors + descriptions | **5/10** | No | Marketing + dual "What if" + "not just X". |
| Skill **taglines** (front) | **2/10** | **Fail** | Gallup horoscope. Worst failure on the site. |
| Meta description | **7.5/10** | Mostly | Facts good; em-dash joint. |

**Site-level risk:** A hiring manager flips a skill card and reads *you*. They never flip and only read the fronts → they meet a stranger writing Gallup paste. That is a doctrine failure at the first interaction.

---

## Against the three core tests

### 1. Every claim carries a receipt

| Pass | Fail |
|------|------|
| Skill backs (3rd %, lumberyard, field users) | Skill taglines (zero receipts) |
| Plyplan kerf, 30 tests, two optimizers | Shape/Glimpse `description` fields (abstractions) |
| Glimpse 7 tries, 409 lines, 0 server calls | SWIFT "unmet need in digital storage" (true but thin - no named who/when) |
| Shape 223 tests, 1,030,301 combos, 17% signal | |
| SWIFT 220+, 60%, 3rd→50th, 3% adoption IRR | |

### 2. Earned, not sold

| Pass | Fail |
|------|------|
| Foundations "our yardstick" | SWIFT CTA "Want the full story behind these numbers?" |
| Plyplan "No AI, no magic" | Shape description "exploring how… shapes institutional behavior" |
| Maximizer "that's the affliction" | Glimpse description "glimpse the truth in your data" (product brochure) |
| Hard Call tradeoff named | SWIFT flavor "not just how screens look" (tool rhythm) |

### 3. Would Matt type this on the wire?

| Sounds like hallway Matt | Does not |
|--------------------------|----------|
| "whoever shouted loudest got work" | "Fascinated by ideas and connections between disparate phenomena." |
| "Dark mode should have been trivial. It wasn't." | "Interactive research tool exploring how organizational depth drives…" |
| "Have a problem worth solving?" | "Puts thoughts into words that capture and hold attention." |
| "Curious if…" energy in hard calls | "Want the full story behind these numbers?" |

---

## DNA checklist (12 rules) — site diagnosis

| # | Rule | Site status |
|---|------|-------------|
| 1 | First person, builder | **Pass** on manuscripts/backs; **fail** on taglines |
| 2 | Problems through people | **Pass** Woo, Glimpse upload fear, SWIFT "whoever shouted"; **weak** Shape card description |
| 3 | Affirm situation before hard call | **Pass** SWIFT Hard Call, Plyplan Decision |
| 4 | Soft disagree / clear "I chose" | **Pass** manuscripts |
| 5 | Physical imagery | **Pass** Plyplan/Belief; SWIFT still office-abstract in Approach |
| 6 | One aphorism per piece | **Mixed** - embedded but rarely italicized as the pivot gift; Woo ends with a strong one; Plyplan accuracy bar is the best |
| 7 | Honest ledger | **Pass** Foundations, Shape delete param, Glimpse unused 3D |
| 8 | Story funds numbers | **Pass** demos; SWIFT Approach dumps outcomes in the same breath as the case |
| 9 | Staccato identity | **Pass** hero |
| 10 | Dry warmth | **Pass** Maximizer affliction; Maker's Note slightly too polished |
| 11 | Lessons as gifts (actable) | **Weak** - Shape/Glimpse teach; SWIFT doesn't hand the reader a play they can run |
| 12 | Team credit | **Partial** - "we triaged"; team size named; no explicit credit beat |

---

## Critical findings by surface

### P0 - Skill card fronts (`skills.ts` taglines)

These fail **name-swap**, **receipt**, and **never-write (third-person Gallup)** in one stroke. The backs are the product; the fronts currently *contradict* the backs.

| Card | Current (horoscope) | Why it fails | Proposed (≤12 words, from the back) |
|------|---------------------|--------------|-------------------------------------|
| Belief | Core values provide clarity and conviction. | Third person, no receipt | Will it hold up after I've moved on? |
| Communication | Puts thoughts into words that capture and hold attention. | Gallup paste | Numbers don't fund products - stories do. |
| Woo | Draws energy from meeting new people and winning them over. | Generic influencer | Show up, learn the workarounds, follow through. |
| Ideation | Fascinated by ideas and connections between disparate phenomena. | Academic brochure | Best ideas are trespassers from other fields. |
| Maximizer | Transforms what's strong into something superb. | Empty superlative | Past average and still filing refinements. |

**Do not** soft-edit these. Replace wholesale.

---

### P1 - Quest registry (`artifacts.ts`)

**Shape Matters description**  
- Now: *Interactive research tool exploring how organizational depth drives signal decay and shapes institutional behavior.*  
- Failures: "exploring how," abstract institutional language, zero receipts, name-swap pass.  
- Proposed: *Model your org's depth and watch signal die on the way up - 15 reference companies, 223 tests.*

**Glimpse description**  
- Now: *Privacy-first exploratory data analysis. Upload CSV… glimpse the truth…*  
- Failures: category jargon ("privacy-first EDA"), "glimpse the truth" sells.  
- Proposed: *CSV analysis in the browser - pandas via WebAssembly, zero server calls.*

**SWIFT description**  
- Mostly receipt-heavy; good. Em dash → ` - `. Slight résumé stack is OK for a one-liner.

**SWIFT flavor**  
- Now: *…not just how screens look.*  
- Failure: banned "not just X but Y" family.  
- Proposed: *From 3rd percentile to market standard - by fixing how work gets chosen.*

**Shape flavor**  
- *What if the shape of an organization…* — fine alone, but…

**Glimpse flavor**  
- Second *What if* on the board. Doctrine: max one rhetorical door per *page*, and never the default pattern across cards.  
- Proposed (declarative): *Analysis without the upload. Python stays on your machine.*  
- Keep Shape's "What if" **or** Maker's Note "Why a gaming table?" as the site's one open door - not three.

**Plyplan description + flavor**  
- **Leave.** Model for all other cards.

**Subtitles**  
- "Interactive research tool" / "enterprise product leadership" are fine as scannable types. Optional: Shape → `Research tool · org signal decay` if you want less generic.

---

### P1 - SWIFT manuscript

**Keep**
- Challenge setup (2022, team, $1.5B, shout-loudest intake)  
- Hard Call section title + tradeoff ("shipping theater")  
- Foundations honest-yardstick sentence  
- Metrics without 380%

**Fix**

| Spot | Issue | Proposed direction |
|------|--------|-------------------|
| Approach ¶1–2 | Deck cadence: identify → design → business case → secured funding (résumé stack) | Split: Foundations beat, then storage bet. Lead storage with *3% adoption underwrite*. Shorter sentences. |
| Approach ends with results | Numbers appear before Results section - story/metrics tangle | Move 3rd→50th / 2× into Results only; Approach stops at what you built |
| "The Approach" heading | Generic vs named hard-call style | e.g. *What We Built Next* or *Foundations, Then the Storage Bet* |
| CTA | Brochure sell | *Curious about the intake system - or the storage bet?* + `Let's talk` |
| Team credit | Size only | One clause: what the team owned vs what you owned |
| Actable lesson (DNA 11) | Missing | One short play, e.g. *When everything is a P0, rebuild intake before the next feature.* (italic at pivot) |
| Joints | Em dashes throughout | ` - ` / periods |

**People-in-problem (DNA 2):** Challenge mentions "users tolerated" - good. Could name *who* shouted (shippers? internal ops?) without breaking confidentiality - optional.

---

### P2 - Mechanics: joints site-wide

User-facing em dashes / `&mdash;` appear in:

- All five skill `flavorText`s  
- Hero Current Quest, skill caption  
- Maker's Note (tight `—` without spaces)  
- SWIFT / Plyplan / Glimpse / Shape bodies + captions  
- `index.html` title + meta (×3)  
- Artifact mailto subject  

**Rule from VOICE:** prefer ` - `; one pivot max per paragraph; don't upgrade for polish.

This is mechanical and should ride with content edits - not a separate personality change.

---

### P2 - Aphorism discipline (DNA 6)

Doctrine wants **one** earned, optionally italicized pivot gift per piece.

| Piece | Best candidate already in text | Action |
|-------|-------------------------------|--------|
| Plyplan | *if the optimizer says two sheets… tool is broken* | Optional: italicize as pivot |
| Glimpse | *don't read the DOM* / delete unused impressiveness | Optional: surface one line italic |
| Shape | *The model earns each mechanism or loses it.* | Optional: italicize |
| SWIFT | Missing clean gift | Add one after Hard Call |
| Belief back | *will it hold up after I've moved on?* | Already the tagline candidate |
| Woo back | *allies who haven't seen you follow through yet* | Strong; leave in prose |

Don't spray aphorisms. One per manuscript max.

---

### Landing & chrome

| Line | Verdict |
|------|---------|
| Hero bio staccato | **Keep** - identity canon |
| "The through-line: a product manager who builds the thing himself." | **Keep** - earned thesis |
| Current Quest proof | **Keep** facts; fix joint |
| Maker's Note | **Keep** content; fix joint; counts as one rhetorical "Why?" - if Glimpse/Shape keep "What if," cut one |
| "My top five of 34…" | **Keep** - clear, first person |
| Quest Log / Begin Quest | **Keep** - Register E |
| "Have a problem worth solving?" | **Keep** - best chrome line on the site |
| "Get in touch" | **Keep** (or "Email me" if plainer) |
| Error "This quest didn't load" | **Keep** |

---

### Demo manuscripts (Plyplan / Glimpse / Shape)

**Critical praise:** These already implement VOICE better than the doctrine file describes it. Do not "improve" them into softer marketing.

**Only nits:**
- Joints (`&mdash;` → ` - `)  
- Shape/Glimpse **card** copy (registry) lags the **page** copy - fix registry, not body  
- Shape CTA "Enter the Lab" is theme-forward (Register E) - acceptable; "Launch the model" is plainer if you ever tire of theme

---

## Priority queue (recommended edit order)

1. **P0** Replace 5 skill taglines  
2. **P1** Shape + Glimpse descriptions; SWIFT + Glimpse flavors; kill "not just"  
3. **P1** SWIFT Approach rewrite + CTA + one actable aphorism  
4. **P2** Global user-facing joint pass  
5. **P2** Optional italic pivots on Plyplan/Shape/Glimpse (light touch)  
6. Re-run pre-ship checklist aloud  

---

## What not to touch

- Skill back *content* (joints only)  
- Plyplan / Glimpse / Shape section narratives  
- Hero staccato + through-line  
- Dual-label structure (subject over theme)  
- Metric choices on SWIFT (post-380% cut)  
- Table theme labels (Rags to Riches, Scrying Glass, etc.)

---

## Bottom line

The portfolio does not need a new voice. It needs **the gold voice to win at every layer** - especially the skill card fronts and quest blurbs that still speak Gallup and product marketing. SWIFT is 70% there: finish the Approach so it reads like Plyplan's Decision, and replace the brochure CTA with hallway Matt.

**Ready to implement** when you say go (P0→P1 first, or full pass).
