* title slide [0:00]
* whoami: developer, trainer, manager, 12 years teaching TDD; Beck: "I'm not a great programmer; I'm just a good programmer with great habits." [0:30–1:30]
* TDD is a habit. Agents don't have habits, they have instructions. I no longer think agents should do TDD the way I taught it [1:30–2:00]
* the old days [2:00–21:00]
    * TDD myths: "TDD is writing the tests first"
        * Ottinger: "You don't write 'the tests' first. You write a test first."
        * Laforgia: "TDD is not really about writing tests before code. It's about using tests in short-lived RGR cycles as a tool to design code."
        * Gorman: "The tests that drive our design often correspond to good regression tests, but certainly not always." He mutation-tests new code routinely.
    * definition
        * a development technique: breaking a problem into pieces, with rapid feedback
        * a design process
        * design results: dependencies are injected, decoupled components, a modular and extensible system, frequent use of composed method (we come back to this)
    * why TDD works for humans: red → green → refactor
        * red: consumption awareness (the test is the code's first client), verify that the test is useful, improves testability
        * green: implement the change; done, although maybe not; prevents gold plating
        * refactor: refactoring != redesign; as simple as possible for today's needs; easier when backed by tests
        * each step answers a human limitation
    * gold plating: "Hmm, I will probably need this functionality soon!"
        * Hello World with a strategy, an abstract factory and a singleton
    * brain dumping ground
        * limited working memory: get it out of your head and onto the list
    * merciless refactoring
        * no fear: the tests have your back
    * the todo list
        * a dynamic buffer that keeps noise away
        * examples of test cases
        * test order has a huge impact on TDD flow (we come back to this)
    * the evidence for humans
        * Nagappan et al. 2008 (Microsoft, IBM): 40–90% fewer pre-release defects
        * the teams estimated 15–35% more development time
        * Fucci et al. 2017: short, steady cycles mattered more than writing the test first
        * Ghafari et al. 2020: studies disagree mostly because they're set up differently
        * every step answers a human limitation: which of them does an agent actually have?
    * live demo: the cards game
        * https://www.codewars.com/kata/53417de006654f4171000587
        * Steve vs Josh, the higher card wins the round: "Steve wins x to y", "Josh wins x to y" or "Tie"
        * same kata, two agents: one told to do TDD, one not - let's race.
* the new ways [21:00–36:00]
    * which of TDD's benefits does an agent need?
        * an agent != human (different capabilities)
        * it doesn't have: fear, boredom, not knowing where the code is going
        * it has as badly as us, or worse: misreading the spec, claiming done when it isn't, blind spots in its own tests
        * GLM wrote the same misreading into its test and its code
        * gold plating carries over: Beck warns about unrequested features, and probity rejected two greens that went too far (no run gold-plated this kata)
    * the experiment
        * same kata: 9 agent runs told to do TDD, 1 told not to, plus my own run from 2016
        * judged by an acceptance suite the agents never saw, plus 9 planted bugs
        * every red and green replayed from the git history
        * n = 1 per setup, on a 20-line kata the models have seen many times
    * agentic TDD skills: it looks good, but it's a charade
        * 46% of tests passed as soon as they were written: the agent already knew the answer
        * GLM: 7 of 7 genuine reds, every commit labelled correctly, ships "Josh wins 1 to 2"
        * ten implementations, one design: a rank string, indexOf, two counters
        * by Laforgia's definition (tests as a tool to design code), the agents did test-first, not TDD
        * reflections: one copied from another model, one cites commit hashes that don't exist
    * did the design emerge? my own definition as the scorecard
        * composed method: yes, from the agents' refactor steps (Opus: cardsGame = formatResult(scoreRounds(...))); the no-TDD run is one function
        * dependencies injected: only in my 2016 run (the ranking)
        * decoupled, modular, extensible: can't tell on a 20-line kata
    * tiny steps aren't meaningful for an agent
        * TDD as if you meant it: tiny steps, the code grows inside the test (my 2016 run)
        * fake it adds bugs on purpose: "TDD created a bug and then caught it" (GLM)
        * the most minimal steps gave the weakest frontier-model suite (Opus 5 caught 5 of 9 planted bugs)
        * Gorman called it: the tests that drive the design aren't always good regression tests
        * "a test first, not the tests" is a human rule: GLM wrote all 7 tests up front as skipped tests, and for an agent that was fine
    * the cost: tokens, dollars and time
        * no TDD: 29 s, $0.27
        * TDD by prompt: about 4 min, $2.07–2.72 (8–10×)
        * TDD enforced by a harness: 11 min, $3.54 (13×)
        * no measurable quality gain: two runs of the same model caught 8 of 9 and 5 of 9
    * what others found
        * Böckeler (Aug 2026): TDD prompts gave no quality gain, for 3–8.5× the tokens
        * Bache: that tested a prompt, not TDD; a test list and a harness are what's missing
    * enforcing TDD with a harness: probity
        * the most faithful TDD in the repo: 11 of 12 tests genuinely red, 4 real refactors
        * the same result as no TDD, at 13× the cost and 22× the time
        * it dropped the tests that couldn't go red, so it caught fewer planted bugs (6 of 9 vs 7 of 9)
        * 9 of 13 blocks were false positives; resending the same edit usually got through
    * are harnesses worth the cost? (Jain, Oct 2026)
        * frontier model: 10/10 with and without; the harness cost ~7× and took ~3× as long
        * cheap model: 3/10 without the harness, 10/10 with it
        * his harness isn't TDD: human-written specs and examples, plus an independent acceptance gate
        * the ceremony buys nothing for a frontier model on a task it can already do
    * the herdr race: results
        * TDD agent: time, cost, acceptance suite
        * no-TDD agent: time, cost, acceptance suite
* the way forward (for the coming year) [36:00–42:00]
    * leave behind
        * fake it and minimal green
        * forcing the smallest step
        * a perfect process as proof of quality
        * red as the proof that a test can fail: mutation-test afterwards instead (Gorman, Böckeler)
    * move up a loop
        * the double loop from Growing Object-Oriented Software
        * outer loop, acceptance tests: the human
        * inner loop, red/green/refactor: the agent
        * isn't this just ATDD/BDD again? yes, and that's the point
    * planning
        * why? to not have to redo, and to make sure interpretations are correct
        * GLM's "Josh wins 1 to 2": no agent's TDD caught the "x to y" ambiguity
        * a human reading the test list would have caught it in seconds
        * test order matters: the only reds that changed the code came from face cards after number cards (Opus 5: A beats K, Astra: J beats T), so the human picks and orders the examples
        * a small step compared to spec-driven development (spec-kit, Openspec)
    * use acceptance-test-driven examples to specify desired behaviour
        * only the acceptance suite the agents never saw caught GLM's and Gemma's bugs
        * tests given with the task help LLMs (Mathews & Nagappan 2024)
        * tests written after faulty code catch fewer bugs: 14% vs 25% (Konstantinou et al. 2026)
        * Jain's harness is the same idea, tested at scale
        * examples are executable; a spec document isn't
    * vertical slicing
        * small diffs a human can actually review
        * fast incremental delivery at all layers 
        * from experience, not from this experiment
* test-first becomes spec-first: from Beck's TDD by Example to Specification by Example (Adzic 2011). The human owns the examples, the agent does the cycles [42:00–44:00]
* questions

## notes (not slides)

- Timing assumes questions come after the 45 minutes, which leaves 1 minute of buffer. If questions are inside the 45, cut the live demo to 9 minutes.
- The old days have 8 slides in the 7 minutes before the demo. The Hello World, brain dumping ground and merciless refactoring slides are 10–20 seconds each; the myths, definition and cycle slides carry the time.
- Live demo: hard stop at a checkpoint tag. It comes first and the new material comes last, so an overrun eats the part people came for.
- Plant three things on the demo's test list:
    - "Josh wins x to y": ask the room what x is (sets up GLM).
    - "A beats K" (sets up my 2016 run).
    - One obvious implementation (sets up probity forbidding it).
- Callbacks to rehearse:
    - habits (whoami) → the hook;
    - Ottinger → tiny steps (GLM's skipped tests);
    - Laforgia → the charade slide;
    - Gorman → tiny steps and mutation testing;
    - design results (definition) → the scorecard;
    - test order (todo list) → planning.
- Reusing old slides:
    - The calculator test on the old red slide, `assertThat(expected, is(expected))`, ignores `calculator.add(1,2)` and can never go red. If you show it, do it on purpose: "this test passes on write, like 46% of the agents' tests". Otherwise fix it.
    - Replace the dreamstime-watermarked images on brain dumping ground and merciless refactoring.
    - Myths: quote one line each with the author's name instead of the Swedish LinkedIn screenshots.
- Say "n = 1 per setup" on the experiment slide, before anyone asks.
- Every number comes from PRESENTATION.md: §1 (experiment), §2.2 and §2.3 (charade), §2.4 (cost), §2.9 (probity). Jain's numbers are in PRESENTATION_PLAN.md §2. The composed-method example is `src/cardsGame.js` on `llm-claude-opus`; the one-function no-TDD version is on `llm-no-tdd-opus5.5`.
