* TDD in the Agentic Era: What we keep, what we leave behind / Sebastian Larsson [0:00] ((cover))
* Sebastian Larsson: Developer / Trainer / Manager / Certifying developers in TDD since 2014 / "I'm not a great programmer; I'm just a good programmer with great habits." Kent Beck [0:30–1:30] ((eyebrow "Who am I"; roles on the left, the quote in a box on the right))
* TDD is a habit. Agents don't have habits, they have instructions. / I no longer think agents should do TDD the way I taught it. [1:30–2:00] ((statement slide; second line in blue))
* Agenda: 1 The old days / What TDD is, why it works for humans, and a live demo / 2 The new ways / What happened when agents were told to do TDD / 3 The way forward / What to leave behind, and what to do instead [2:00–2:15] ((eyebrow "Today"; three numbered rows))
* The old days: What TDD is, and why it works for humans [2:00–21:00] ((section slide, eyebrow "Part 1"))
    * TDD myths
        * "TDD is about testing" ((struck through in red))
        * "TDD is writing the tests first" ((struck through in red))
        * ((top right: tilted, stacked crops of the original LinkedIn posts by Gorman, Laforgia and Ottinger; online they drop in one by one when presenting))
        * "You don't write 'the tests' first. You write a test first." Tim Ottinger ((three quote cards))
        * "TDD is not really about writing tests before code. It's about using tests in short-lived RGR cycles as a tool to design code." Andrea Laforgia
        * "The tests that drive our design often correspond to good regression tests, but certainly not always." Jason Gorman
    * Definition
        * A development technique
        * Breaking a problem into pieces
        * Rapid feedback
        * A design process
    * Why TDD works for humans
        * Red: Consumption awareness: the test is the code's first client / Verify that the test is useful / Improves testability ((three cards with arrows between them; arrows back to Red from Green and from Refactor))
        * Green: Implement the change / Done, although maybe not / Prevents gold plating
        * Refactor: Refactoring ≠ redesign / As simple as possible for today's needs / Easier when backed by tests
        * A cycle built around human limitations
    * Red: create a failing test ((miniature of the overview top right, Red highlighted; same on the next steps))
        * Consumption awareness / Verify that the test is useful / Improves testability ((red-outlined chips))
        * ((code: the calculator test, fixed so it can go red: assertThat(actual, is(expected))))
        * ((code: the minesweeper test with the mine placer injected; method name typo fixed to constructMineField))
    * Green: make the test pass
        * Implement the change
        * Means done, although maybe not
        * Prevents gold plating
        * ((the cartoon: "Hmm, I will probably need this functionality soon!"))
    * Gold plating
        * ((the 46-line Hello World screenshot))
        * 46 / lines of Java to print "Hello World!", with a strategy, an abstract factory and a singleton ((big number))
    * Refactor as needed
        * Refactoring ≠ redesign
        * As simple an implementation as possible for today's needs
        * Easier when backed by tests
        * ((code: printing a person, before and after extracting print(person)))
    * Get it out of your head and into the code. ((statement slide, eyebrow "Brain dumping ground"))
        * Less cognitive load (context)
        * Executable examples
        * Sharper focus
    * FEAR ((huge, struck through in red; eyebrow "Merciless refactoring"))
        * The tests have your back.
            * Freedom to refactor and experiment
            * Safely make changes
    * The todo list
        * A dynamic buffer that keeps noise away
        * Examples of test cases
        * Test order has a huge impact on TDD flow ((in blue))
        * Todo: Equal cards: Tie / Steve wins 1 to 0 / Josh wins x to y / J beats T / A beats K ((checklist card on the right))
    * The cards game ((demo background, "Live demo" label))
        * codewars.com/kata/53417de006654f4171000587 ((link))
        * Steve vs Josh: the higher card wins the round.
        * "Steve wins x to y", "Josh wins x to y" or "Tie"
        * RED / GREEN / REFACTOR ((traffic light on the right))
    * The evidence for humans
        * 40–90% / fewer defects in four industrial teams (Nagappan et al. 2008, Microsoft and IBM) ((big number; "fewer defects" highlighted in green))
        * 15–35% / more development time, as the teams themselves estimated it ((big number; "more development time" highlighted in red))
        * Fucci et al. 2017: short, steady cycles mattered more than writing the test first
        * Ghafari et al. 2020: studies disagree mostly because they're set up differently
        * Every step answers a human limitation. Which of them does an agent actually have? ((in blue, at the bottom))
* The new ways: What happened when agents were told to do TDD [21:00–36:00] ((section slide, eyebrow "Part 2"))
    * Which of TDD's benefits does an agent need? ((eyebrow "The new ways · An agent ≠ a human"))
        * It doesn't have: Fear / Boredom / Context switching fatigue / Not knowing where the code is going ((card))
        * It has, as badly as us or worse: Misreading the spec / Claiming done when it isn't / Blind spots in its own tests / Gold plating / Discipline inconsistency ((highlighted card))
        * In my experiment, one agent wrote the same misreading into its test and its code.
    * What others found
        * Birgitta Böckeler · Aug 2026: TDD prompts gave no quality gain, for 3–8.5× the tokens. ((two cards))
        * Emily Bache · Sep 2026: That tested a prompt, not TDD. A test list and a harness are what's missing.
        * → So I tested both: TDD by prompt, and TDD enforced by a harness. ((in blue))
    * The experiment
        * Setup | Runs ((table on the left))
        * No TDD | Opus 5.5 ((highlighted row))
        * TDD by prompt | Opus 5 (twice), DeepSeek 4.1 Flash, GLM 5.3 Flash, one unrecorded agent
        * TDD by prompt, local | Qwen, Gemma 4
        * TDD by prompt, plan agreed first | Astra
        * TDD enforced by a harness | Opus 5.5 with probity
        * TDD by hand, live | Me, 2016, in front of an audience
        * Every red and green replayed and analyzed from the git history ((under the table))
        * 9 + 1 / agent runs on the same kata: 9 told to do TDD, 1 told not to ((two big-number cards on the right))
        * 9 / planted bugs via mutation testing, plus an acceptance suite the agents never saw
    * Agentic TDD skills: it looks good, but it's a charade
        * 46% / of tests passed as soon as they were written (26 of 57): the agent already knew the answer ((big number))
        * GLM: 7 of 7 genuine reds, every commit labelled correctly, and it ships "Josh wins 1 to 2"
        * Ten implementations, one design: a rank string, indexOf, two counters
        * On this kata, following TDD didn't change the agents' design. It only tidied it.
    * Tiny steps are less meaningful for an agent
        * Fake it | Increases cycle speed for humans. An agent doesn't need this detour. ((two columns: blue label, text))
        * Minimal steps | Lower a human's risk. An agent doesn't need to play it this safe.
        * Gorman called it | The tests that drive the design aren't always good regression tests
        * "A test first, not the tests" | A human rule against overinvesting up front: GLM wrote all 7 tests first, as skipped tests. For an agent, that investment is cheap.
    * Enforcing TDD with a harness: probity
        * 11 of 12 / tests genuinely red ((big number))
        * 4 / real refactors: the most faithful TDD in the repo ((big number))
        * The same result as no TDD, at 13× the cost and 22× the time
        * It dropped the tests that couldn't go red, so it caught fewer planted bugs: 6 of 9, against 7 of 9 without TDD
        * 9 of 13 blocks were false positives; resending the same edit usually got through
    * The cost: tokens, dollars and time
        * Run | Time | Cost | Planted bugs caught ((table))
        * No TDD · Opus 5.5 | 29 s | $0.27 | 7 of 9 ((highlighted row))
        * TDD by prompt · Opus 5, run 1 | 3 min 47 s | $2.07 | 8 of 9
        * TDD by prompt · Opus 5, run 2 | 4 min 18 s | $2.72 | 5 of 9
        * TDD enforced by probity · Opus 5.5 | 10 min 48 s | $3.54 | 6 of 9
        * Small experiment: one run per setup, on an easy 20-line kata ((dashed box, like a sign))
        * 8–13× the cost and 8–22× the time, with no measurable quality gain. ((in blue))
    * Are harnesses worth the cost? ((eyebrow "The new ways · Naresh Jain, Oct 2026"))
        * Model | Harness | Accepted | Time | Cost ((table))
        * Sol (frontier) | No | 10 of 10 | 6 min 51 s | ~$0.41
        * Sol (frontier) | Yes | 10 of 10 | 19 min 53 s | ~$2.68
        * Luna (cheap) | No | 3 of 10 | 15 min 56 s | ~$0.09
        * Luna (cheap) | Yes | 10 of 10 | 35 min | ~$0.27
        * His harness isn't TDD: human-written specs and examples, plus an independent acceptance gate
        * Frontier model: one independent check at the end. Cheap model: checks throughout. ((in blue))
* The way forward: For the coming year [36:00–42:00] ((section slide, eyebrow "Part 3"))
    * What we keep, what we leave behind ((eyebrow "The way forward · For the agent"))
        * Keep: Examples agreed before any code / A check the agent didn't write / A failing test first for every bug / Refactoring on green ((highlighted card, green ticks))
        * Leave behind: Fake it and minimal green / Forcing the smallest step / A perfect process as proof of quality / Red as the proof that a test can fail ((card, struck through in red))
        * → Keep the proof, drop the ritual: mutation-test afterwards instead (Gorman, Böckeler) ((at the bottom))
    * Planning
        * This talk was planned first: ~76% / of the planned slides' text is still the first generated version ((box top right; measured 2026-10-17 when the deck was final))
        * Why? To prevent rework, and to make sure interpretations are correct.
        * The ambiguity: GLM's "Josh wins 1 to 2": no agent's TDD caught the "x to y" ambiguity. / One agreed example, "Josh wins 2 to 1", would have caught it in seconds. ((two cards))
        * The expectations: Agreed with the team before the agent starts. / Astra's were agreed with me first, and it's the only TDD suite that pins the "x to y" reading. / The agent turns them into its own test list.
        * A small step compared to spec-driven development (spec-kit, OpenSpec)
    * Vertical slicing
        * Small diffs a human can actually review
        * Fast incremental delivery at all layers
        * From experience, not from this experiment ((italic, grey))
        * "On anything non-trivial, the spec is never right. … Adapting to feedback is the real requirements discipline." Jason Gorman ((quote box))
        * UI / API / Domain / Data: One slice through every layer ((diagram on the right))
    * Move up a loop
        * ((diagram on the left: two nested loops, "Outer loop / The human" and "Inner loop / The agent"))
        * The double loop from Growing Object-Oriented Software (Freeman & Pryce, 2009)
        * Outer loop, acceptance tests: the human
        * Inner loop, agent decides
        * "A human still owns what ships but now they're reviewing evidence and not just diffs." Addy Osmani ((quote box))
        * Just ATDD/BDD again? Yes. But the examples stay with you. ((in blue))
    * Use acceptance-test-driven examples to specify desired behaviour
        * This experiment: Only tests the same agent didn't write caught GLM's and Gemma's bugs ((three cards))
        * Mathews & Nagappan 2024: Tests given with the task help LLMs
        * Konstantinou et al. 2026: 14% vs 25% / faults found by tests written after faulty code vs. independent tests
        * Jain's harness is the same idea, tested at scale
        * Examples are executable; a spec document isn't. ((in blue))
    * Expectation-Driven Development ((eyebrow "The way forward · Andrea Laforgia, Mar 2026"))
        * Write the expectations in plain text, before any code ((numbered 1–3 on the left))
        * The agent proves each one with executed evidence, not a story about it
        * "The fox can guard the henhouse if there's a different fox checking the first fox's work." Andrea Laforgia ((quote box on the right))
        * Critical paths become automated tests
        * His own caveat: not battle-tested yet ((dashed box, like a sign))
* Test-first becomes example-first. / From Beck's TDD by Example to Adzic's Specification by Example. / Write the expectations as BDD-style examples before any code. / Let the agent decide everything below them. / Have something the agent didn't write check the result. / Questions? / Sebastian Larsson [42:00–44:00] ((blue statement slide; Questions? and my name at the bottom; stays up during Q&A))
* References: Beck (2002) Test-Driven Development: By Example · book / Nagappan et al. (2008) Realizing quality improvement through test driven development · microsoft.com/en-us/research (PDF) / Fucci et al. (2017) A dissection of the test-driven development process · arxiv.org/abs/1611.05994 / Ghafari et al. (2020) Why research on test-driven development is inconclusive · arxiv.org/abs/2007.09863 / Böckeler (2026) TDD inside the agent loop · martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html / Bache (2026) Response video, Modern Software Engineering · youtube.com/watch?v=wK5WgbqtI50 / Selander probity: TDD hooks for coding agents · github.com/nizos/probity / Jain (2026) Are harnesses worth the cost? · martinfowler.com/articles/are-harnesses-worth-the-cost.html / Freeman & Pryce (2009) Growing Object-Oriented Software, Guided by Tests · book / Gorman (2026) The spec is never right (LinkedIn) · lnkd.in/p/d3ZyQ4hs / Osmani (2026) Agentic verification · addyo.substack.com/p/agentic-verification / Mathews & Nagappan (2024) Test-driven development for code generation · arxiv.org/abs/2402.13521 / Konstantinou, Tambon & Papadakis (2026) On the risk of coding before testing · arxiv.org/abs/2607.05139 / Laforgia (2026) Expectation-Driven Development · a4al6a.substack.com/p/expectation-driven-development-a / Adzic (2011) Specification by Example · book / This experiment all runs, branches and analysis · github.com/00Zeb/simple-card-game ((eyebrow "Links"; one line per source, links clickable))

## how to edit (not slides)

- Indentation: first level is a main slide, second level a subslide, third level one item of text on that slide, fourth level a smaller sub-point under the item above it.
- The first letter of each line on a slide is capitalised.
- Text outside double parentheses goes on the slide word for word.
- On a main-slide line, the title comes first, then after ":" the rest of the slide's text.
- " / " separates lines within one item.
- " | " separates table cells; the first row is the header.
- `((...))` holds notes, questions and layout hints for Claude. It never appears on a slide.
- `[m:ss]` is timing. It never appears on a slide.
- The small blue label above each title is the section name ("The old days", "The new ways", "The way forward") unless a `((eyebrow ...))` note says otherwise.
- Straight quotes and apostrophes become typographic ones on the slides.
- Speaker notes live in the deck, not here. Ask for changes with a `((notes: ...))` comment.

## notes (not slides)

- Timing assumes questions come after the 45 minutes, which leaves about 3 minutes of buffer now that the herdr race is out. If questions are inside the 45, cut the live demo to 9 minutes.
- The old days have 10 slides in the 7 minutes before the demo, and the evidence slide after it. The Hello World, brain dumping ground and merciless refactoring slides are 10–20 seconds each; the myths, definition, cycle and three step slides carry the time.
- Live demo: hard stop at a checkpoint tag. It comes first and the new material comes last, so an overrun eats the part people came for.
- Plant three things on the demo's test list:
    - "Josh wins x to y": ask the room what x is (sets up GLM).
    - "A beats K" (sets up my 2016 run).
    - One obvious implementation (sets up probity forbidding it).
- Callbacks to rehearse:
    - habits (whoami) → the hook;
    - Ottinger → tiny steps (GLM's skipped tests);
    - Laforgia → the charade slide (say it: by his definition, design untouched by the tests isn't TDD);
    - Gorman → tiny steps and mutation testing;
    - "a design process" (definition) → the charade slide (on this kata, TDD didn't change the agents' design);
    - the todo list → planning (for a human the list is working memory; for an agent the team agrees the expectations and the agent keeps its own test list);
    - Laforgia (myths) → Expectation-Driven Development;
    - the close's three lines → examples, move up a loop, and Laforgia's different fox (only tests GLM and Gemma didn't write caught their bugs).
- Say "n = 1 per setup" on the experiment slide, before anyone asks.
- The planning slide's ~76% was measured 2026-10-17 after the review round (86% before it; 55% with the new-requirement slides included). If slides change, re-measure with `python3 presentation/deck/measure-changes.py --exclude step-red,step-green,step-refactor,edd,agenda,references` (baseline: commit 70571dd, the first generated deck; new-requirement slides excluded) and update the number.
- Every number comes from PRESENTATION.md: §1 (experiment), §2.2 and §2.3 (charade), §2.4 (cost), §2.9 (probity). Jain's numbers are in PRESENTATION_PLAN.md §2. The composed-method example is `src/cardsGame.js` on `llm-claude-opus`; the one-function no-TDD version is on `llm-no-tdd-opus5.5`.
- Sources added 2026-10-16 (quotes on the vertical slicing and move-up-a-loop slides):
    - Jason Gorman, LinkedIn, Oct 2026, "the spec is never right": https://lnkd.in/p/d3ZyQ4hs ("Adapting to feedback is the real requirements discipline.") A counterweight for planning/EDD; supports vertical slicing.
    - Addy Osmani, "Agentic verification", 14 Oct 2026: https://addyo.substack.com/p/agentic-verification ("A human still owns what ships but now they're reviewing evidence and not just diffs." "Example tests say what should happen; properties say what must not.") Backs the way forward; our acceptance suite's 1000 random games against a reference implementation is his differential testing.

## parked for later (not slides)

From the review on 2026-10-17 (`deck_review_2026-10-17.md`):

- F5: Jain's "independent acceptance gate". His 178 acceptance tests judged all four setups, with and without the harness, so the gate wasn't part of the harness. Affects the Jain slide, "Jain's harness is the same idea, tested at scale" on the examples slide, and "Böckeler's and Jain's larger studies" in the experiment notes.
- F6: the cost slide's 8× compares Opus 5 prices with Opus 5.5 prices (about 6× like for like). Fixes itself if all the models are re-run.
- C8: the planning slide's % box (now ~76%). Part 1 comes from my 2013 deck, and I give the talk: I can't present what I can't talk about, which is why planning matters.
- I3: Kent Beck's "Augmented Coding: Beyond the Vibes" (June 2025), maybe in "What others found".
- Plain-language pass (klarspråk; ISO 24495-1, Plain Writing Act) over the whole deck, once the edits are done: a file with the wordiest lines, shorter versions and word counts, to pick from here.

