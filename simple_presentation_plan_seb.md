* TDD in the Agentic Era: What we keep, what we leave behind / Sebastian Larsson [0:00] ((cover))
* Sebastian Larsson: Developer / Trainer / Manager / 14 years teaching TDD / "I'm not a great programmer; I'm just a good programmer with great habits." Kent Beck [0:30–1:30] ((eyebrow "Who am I"; roles on the left, the quote in a box on the right))
* TDD is a habit. Agents don't have habits, they have instructions. / I no longer think agents should do TDD the way I taught it. [1:30–2:00] ((statement slide; second line in blue))
* The old days: What TDD is, and why it works for humans [2:00–21:00] ((section slide, eyebrow "Part 1"))
    * TDD myths
        * "TDD is writing the tests first" ((struck through in red))
        * "TDD is about testing" ((struck through in red))
        * ((top right: tilted, stacked crops of the original LinkedIn posts by Gorman, Laforgia and Ottinger; online they drop in one by one when presenting))
        * "You don't write 'the tests' first. You write a test first." Tim Ottinger ((three quote cards))
        * "TDD is not really about writing tests before code. It's about using tests in short-lived RGR cycles as a tool to design code." Andrea Laforgia
        * "The tests that drive our design often correspond to good regression tests, but certainly not always." Jason Gorman
    * Definition
        * A development technique
        * Breaking a problem into pieces
        * Rapid feedback
        * A design process
        * Design results: Dependencies are injected / A modular and extensible system / Frequent use of composed method ((highlighted box on the right))
    * Why TDD works for humans
        * Red: Consumption awareness: the test is the code's first client / Verify that the test is useful / Improves testability ((three cards with arrows between them; arrows back to Red from Green and from Refactor))
        * Green: Implement the change / Done, although maybe not / Prevents gold plating
        * Refactor: Refactoring ≠ redesign / As simple as possible for today's needs / Easier when backed by tests
        * Each step answers a human limitation.
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
    * Get it out of your head and onto the list. ((statement slide, eyebrow "Brain dumping ground"))
        * Limited working memory
            * Executable examples
    * FEAR ((huge, struck through in red; eyebrow "Merciless refactoring"))
        * The tests have your back.
            * Freedom to refactor
            * Safely make changes
    * The todo list
        * A dynamic buffer that keeps noise away
        * Examples of test cases
        * Test order has a huge impact on TDD flow ((in blue))
        * Todo: Equal cards: Tie / Steve wins 1 to 0 / Josh wins x to y / J beats T / A beats K ((checklist card on the right))
    * The evidence for humans
        * 40–90% / fewer pre-release defects in four industrial teams (Nagappan et al. 2008, Microsoft and IBM) ((big number))
        * 15–35% / more development time, as the teams themselves estimated it ((big number))
        * Fucci et al. 2017: short, steady cycles mattered more than writing the test first
        * Ghafari et al. 2020: studies disagree mostly because they're set up differently
        * Every step answers a human limitation. Which of them does an agent actually have? ((in blue, at the bottom))
    * The cards game ((demo background, "Live demo" label))
        * codewars.com/kata/53417de006654f4171000587 ((link))
        * Steve vs Josh: the higher card wins the round.
        * "Steve wins x to y", "Josh wins x to y" or "Tie"
        * Same kata, two agents: one told to do TDD, one not. Let's race. ((in a box))
        * RED / GREEN / REFACTOR ((traffic light on the right))
* The new ways: What happened when agents were told to do TDD [21:00–36:00] ((section slide, eyebrow "Part 2"))
    * Which of TDD's benefits does an agent need? ((eyebrow "The new ways · An agent ≠ a human"))
        * It doesn't have: Fear / Boredom / Discipline inconsistency / Context switching fatigue / Not knowing where the code is going ((card))
        * It has, as badly as us or worse: Misreading the spec / Claiming done when it isn't / Blind spots in its own tests / Gold plating: Beck warns about unrequested features ((highlighted card))
        * GLM wrote the same misreading into its test and its code.
    * The experiment
        * 9 + 1 / agent runs on the same kata: 9 told to do TDD, 1 told not to ((three big-number cards))
        * 2016 / my own run, live in front of an audience
        * 9 / planted bugs via mutation testing, plus an acceptance suite the agents never saw
        * Every red and green replayed from the git history
    * Agentic TDD skills: it looks good, but it's a charade
        * 46% / of tests passed as soon as they were written (26 of 57): the agent already knew the answer ((big number))
        * GLM: 7 of 7 genuine reds, every commit labelled correctly, and it ships "Josh wins 1 to 2"
        * Ten implementations, one design: a rank string, indexOf, two counters
        * On this kata, following TDD didn't change the agents' design. It only tidied it.
        * Reflections: one copied from another model, one cites commit hashes that don't exist
    * Did the design emerge? ((eyebrow "The new ways · My definition as the scorecard"))
        * Design result | What the agents did ((table))
        * Composed method | Yes, in the TDD runs' refactor steps. The no-TDD run is one function.
        * Dependencies injected | No. Only my 2016 run injected the ranking.
        * Opus, after its refactor steps: return formatResult(scoreRounds(steve, josh)); ((code))
    * Tiny steps aren't meaningful for an agent
        * Fake it | Lowers a human's risk. An agent can write the real code in one go, so the fake is a detour: "TDD created a bug and then caught it" (GLM) ((two columns: blue label, text))
        * Minimal steps | Lower a human's risk. For an agent, they picked tests that drive the code, not tests that protect it: Opus 5 caught 5 of 9 planted bugs
        * Gorman called it | The tests that drive the design aren't always good regression tests
        * "A test first, not the tests" | A human rule: GLM wrote all 7 tests up front as skipped tests, and for an agent that was fine
    * The cost: tokens, dollars and time
        * Run | Time | Cost | Planted bugs caught ((table))
        * No TDD · Opus 5.5 | 29 s | $0.27 | 7 of 9 ((highlighted row))
        * TDD by prompt · Opus 5, run 1 | 3 min 47 s | $2.07 | 8 of 9
        * TDD by prompt · Opus 5, run 2 | 4 min 18 s | $2.72 | 5 of 9
        * TDD enforced by probity · Opus 5.5 | 10 min 48 s | $3.54 | 6 of 9
        * 8–13× the cost and 8–22× the time, with no measurable quality gain. ((in blue))
    * What others found
        * Birgitta Böckeler · Aug 2026: TDD prompts gave no quality gain, for 3–8.5× the tokens. ((two cards))
        * Emily Bache · Sep 2026: That tested a prompt, not TDD. A test list and a harness are what's missing.
        * → So I ran it again with a harness. ((in blue))
    * Enforcing TDD with a harness: probity
        * 11 of 12 / tests genuinely red ((big number))
        * 4 / real refactors: the most faithful TDD in the repo ((big number))
        * The same result as no TDD, at 13× the cost and 22× the time
        * It dropped the tests that couldn't go red, so it caught fewer planted bugs: 6 of 9, against 7 of 9 without TDD
        * 9 of 13 blocks were false positives; resending the same edit usually got through
    * Are harnesses worth the cost? ((eyebrow "The new ways · Naresh Jain, Oct 2026"))
        * Model | Harness | Accepted | Time | Cost ((table))
        * Sol (frontier) | No | 10 of 10 | 6 min 51 s | ~$0.41
        * Sol (frontier) | Yes | 10 of 10 | 19 min 53 s | ~$2.68
        * Luna (cheap) | No | 3 of 10 | 15 min 56 s | ~$0.09
        * Luna (cheap) | Yes | 10 of 10 | 35 min | ~$0.27
        * His harness isn't TDD: human-written specs and examples, plus an independent acceptance gate
        * The ceremony buys nothing for a frontier model on a task it can already do. ((in blue))
    * The herdr race: results ((demo background, "Live demo" label))
        * TDD agent: Time [__ min] / Cost [$__] / Acceptance suite [_ of 8] ((two cards; fill in live))
        * No-TDD agent: Time [__ min] / Cost [$__] / Acceptance suite [_ of 8]
* The way forward: For the coming year [36:00–42:00] ((section slide, eyebrow "Part 3"))
    * Leave behind
        * Fake it and minimal green ((these four struck through in red))
        * Forcing the smallest step
        * A perfect process as proof of quality
        * Red as the proof that a test can fail
        * → Keep the proof, drop the ritual: mutation-test afterwards instead (Gorman, Böckeler) ((box at the bottom))
    * Move up a loop
        * ((diagram on the left: two nested loops, "Outer loop / The human" and "Inner loop / The agent"))
        * The double loop from Growing Object-Oriented Software (Freeman & Pryce, 2009)
        * Outer loop, acceptance tests: the human
        * Inner loop, red/green/refactor: the agent
        * Isn't this just ATDD/BDD again? Yes, and that's the point. ((in blue))
    * Planning
        * Why? To not have to redo, and to make sure interpretations are correct.
        * The ambiguity: GLM's "Josh wins 1 to 2": no agent's TDD caught the "x to y" ambiguity. / A human reading the test list would have caught it in seconds. ((two cards))
        * The order: The only reds that changed the code came from face cards after number cards (Opus 5: A beats K, Astra: J beats T). / The human picks and orders the examples.
        * A small step compared to spec-driven development (spec-kit, OpenSpec)
    * Use acceptance-test-driven examples to specify desired behaviour
        * This experiment: Only the acceptance suite the agents never saw caught GLM's and Gemma's bugs ((three cards))
        * Mathews & Nagappan 2024: Tests given with the task help LLMs
        * Konstantinou et al. 2026: 14% vs 25% / faults found by tests written after faulty code vs. independent tests
        * Jain's harness is the same idea, tested at scale
        * Examples are executable; a spec document isn't. ((in blue))
    * Vertical slicing
        * Small diffs a human can actually review
        * Fast incremental delivery at all layers
        * From experience, not from this experiment ((italic, grey))
        * UI / API / Domain / Data: One slice through every layer ((diagram on the right))
* Test-first becomes spec-first. / From Beck's TDD by Example to Adzic's Specification by Example. / The human owns the examples. The agent does the cycles. [42:00–44:00] ((blue statement slide))
* Questions? / Sebastian Larsson

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

- Timing assumes questions come after the 45 minutes, which leaves 1 minute of buffer, and starting the herdr race uses it. If questions are inside the 45, cut the live demo to 9 minutes.
- The old days have 11 slides in the 7 minutes before the demo. The Hello World, brain dumping ground and merciless refactoring slides are 10–20 seconds each; the myths, definition, cycle and three step slides carry the time.
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
    - design results (definition) → the scorecard;
    - test order (todo list) → planning.
- Say "n = 1 per setup" on the experiment slide, before anyone asks.
- Every number comes from PRESENTATION.md: §1 (experiment), §2.2 and §2.3 (charade), §2.4 (cost), §2.9 (probity). Jain's numbers are in PRESENTATION_PLAN.md §2. The composed-method example is `src/cardsGame.js` on `llm-claude-opus`; the one-function no-TDD version is on `llm-no-tdd-opus5.5`.
