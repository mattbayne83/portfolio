# Voice Guidelines — Matt Bayne

Portable writing guidelines for any project that speaks in my voice: portfolio copy, case studies, READMEs, UI microcopy, marketing. Derived from shipped writing (portfolio, wins-gallery, blck-prty, project docs), not aspiration. When existing copy in a project conflicts with this file, the shipped copy that's working wins — update this file, don't fight it.

---

## The core test

**Every claim carries a receipt.** A specific number, a named artifact, a thing that happened. "3rd percentile to past the 50th." "592 lines gone in one commit." "849 routes." If a sentence would survive with anyone's name swapped in, it's horoscope — cut it or attach the receipt.

**Earned, not sold.** State results plainly and let the numbers carry the weight. The reader should feel the win was earned; the moment copy starts selling, trust drops. Confidence shows up as specificity, not adjectives.

---

## Voice DNA (all registers)

1. **First person, active, builder's stance.** "I built," "we shipped," "I chose the unglamorous path." Never third-person bio voice ("Matt is a results-driven leader…"). The through-line is *a person who builds the thing himself* — write like someone with sawdust on their hands, not a résumé.

2. **Problems are told through people, not systems.** Not "the KB had quality issues" but "users land on a duplicate page, get a contradictory answer, and quietly trust the KB a little less." Find the human stuck inside the system failure and open there.

3. **Physical, concrete imagery.** Lumberyard, saw, driveway, workbench, furniture joined properly. Ideas get described as objects and actions ("take straight to the saw," "pulls out of a flat-pack box"). Abstract nouns are a last resort.

4. **Compress lessons into aphorisms.** The best insight in a piece should be quotable in under ten words: *ship the behavior or delete the branch* · *delete before you build* · *slow down to speed up* · *measure before you improve* · *organize by what physically moves, not by who's looking.* One per piece, italicized at the pivot. Earn it with the story first.

5. **Honest ledger.** Name the tradeoff, the cost, and what's still unproven — in the same breath as the win. "The tradeoff was real: less visible shipping theater early on." "It is *our* yardstick, not a third-party benchmark." Naming what's still a goal increases trust in what's proven. Proven vs. Target is a feature, never a hedge.

6. **Rhetorical question as door, sparingly.** "What if data analysis didn't require sending your data to strangers?" "Why a gaming table?" One per piece maximum, and only when the answer is genuinely surprising. Never stack them.

7. **Staccato for identity, long for story.** Fragments establish who/what: "Started in the field. Built risk models. Now ships product." Then let narrative sentences breathe when telling what happened. The rhythm is short-short-short, then long.

8. **Dry warmth in small doses.** "That's the affliction." "Send help." "Tell the neighbors." One wink per piece — placed after credibility is established, never before. Self-deprecating beats self-congratulating every time.

9. **Lessons are gifts, not trophies.** Write takeaways so the next person can act, not admire: imperative mood, condition + move + why. "When the same fact lives in two files it will drift. Keep one authoritative source and fail loud on any mismatch."

10. **Story funds the numbers.** Narrative first, metrics as evidence. "Numbers don't fund products — the story around them does." Open with the person or tension; deploy the number where it lands hardest, not in the first line as a stat dump.

---

## Sentence mechanics

- **The pivot dash.** Setup — payoff is the signature move: "From 3rd percentile to market standard — by fixing how work gets chosen, not just how screens look." Cap at roughly one em-dash per paragraph; more reads as AI.
- **Numbers stay specific and honest.** 113 articles, not "over a hundred." 600+ people, ten minutes flat. Round numbers only when the source is round.
- **Verbs do the work.** Ships, drifts, gleams, compounds, funds, survives. If a sentence leans on an adjective to be interesting, rewrite around a stronger verb.
- **No throat-clearing.** Cut "In today's world," "It's important to note," "At its core." First sentence earns its place or dies.

## Banned

- Hype words: *revolutionary, game-changing, seamless, cutting-edge, robust, powerful, leverage, solution, empower, unlock* (as hype), *delve*.
- Résumé voice: *results-driven, proven track record, passionate about, dynamic*.
- AI tells: "not just X but Y" constructions, rule-of-three padding, hollow intensifiers (*incredibly, truly, deeply*), hedging (*arguably, perhaps somewhat*), stacked em-dashes.
- "Hi, I'm Matt 👋" energy — waving emoji, exclamation-point enthusiasm, gradient-text personality.
- Third-person self-description anywhere first-person is possible.
- Comprehension verbs as claims: users don't "understand" or "see" — they *do* something you can watch. If you can't observe it, don't claim it.

---

## Registers

Same DNA, different pressure. Pick one per artifact and hold it.

**Case study / portfolio prose (Signal).** Credible, specific, quietly confident. Full sentences, narrative arc: person stuck → unglamorous choice → what shipped → honest ledger → reusable play. Numbers in-line, italicized aphorism at the turning point. This is the default register.

**Marketing / hype (Blck Prty).** Punchy, lowercase-comfortable, physical. Count things: "Twelve boards. Four brackets. One ramp. Ten minutes flat." Microcopy can drop capitals and formality ("see you fri · check your inbox") but never drops specificity. Humor allowed at full strength here.

**Documentation / README.** Terse, imperative, front-loaded. What it is in one sentence, then how to use it. Bold the load-bearing terms. Opinionated notes welcome ("**Not an app.**"). No marketing language leaks in — a README that sells is lying about something.

**UI microcopy.** Verb-first buttons that say what happens ("Hold my ramp · $50," "Watch the 10-min build →"). Reassurance in lowercase asides ("fully refundable until shipping"). Every label answers "what do I get if I click."

**Decision logs / notes.** Compressed verdict + reason: "Four strong quests beat five when one deck is the weakest; tightens the board." Write for future-you skimming at speed.

---

## Pre-ship checklist

1. Does every claim have a receipt (number, artifact, or event)?
2. Would this survive the name-swap test, or is it horoscope?
3. Is the problem told through a person, not a system?
4. Is there one aphorism, earned by the story around it — and only one?
5. Did I name a tradeoff or an unproven goal? (If everything sounds won, something's hidden.)
6. Scan for banned words, "not just X but Y," and em-dash pileups.
7. Read aloud: does it sound like a builder talking, or a deck presenting?
8. Could the reader *act* on the takeaway, or only nod at it?

---

## Calibration examples (from shipped copy)

**Horoscope → receipt:**
- ✗ "A strategic communicator who influences stakeholders at all levels."
- ✓ "When I pitched the SWIFT turnaround, I didn't open with a roadmap; I told the story of a tool stuck in the 3rd usability percentile and the people stuck using it. Leadership retold that story up the chain. The retelling funded a new product."

**System → person:**
- ✗ "The knowledge base suffered from quality and consistency issues."
- ✓ "Users feel it before anyone measures it: they land on a duplicate state page, a contradictory answer, a broken preview link, and quietly trust the KB a little less."

**Sold → earned:**
- ✗ "A revolutionary privacy-first analytics solution."
- ✓ "Drop in a CSV and you get statistics, distributions, correlations, and quality checks — and not a single byte leaves your machine."

**Feature list → story:**
- ✗ "Plyplan offers advanced cut optimization using bin-packing algorithms."
- ✓ "Every project I build starts at the lumberyard with the same question: how many sheets do I need? I built Plyplan the weekend I realized that question is a bin-packing problem computer science solved decades ago."
