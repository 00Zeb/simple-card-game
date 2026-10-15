* title slide [0:00]
* whoami: 12 years teaching TDD, and I no longer think agents should do it the way I taught it [0:30–2:00]
* the old days [2:00–21:00]
    * TDD primer
        * test list → one test → red → green → refactor → repeat (Beck, "Canon TDD", 2023)
        * 1999 Extreme Programming Explained, 2002 TDD by Example
        * 2009 Growing Object-Oriented Software: the double loop (we come back to this)
    * the evidence for humans
        * Nagappan et al. 2008 (Microsoft, IBM): 40–90% fewer pre-release defects
        * the teams estimated 15–35% more development time
        * Fucci et al. 2017: short, steady cycles mattered more than writing the test first
        * Ghafari et al. 2020: studies disagree mostly because they're set up differently
    * why TDD works for humans: each practice answers a human limitation
        * limited working memory → one test at a time, the rest waits on the test list
        * fear of breaking things → small steps, run all the tests
        * premature design → fake it, triangulate, YAGNI
        * can't judge a design before using it → the test is the code's first client
        * forgetting why the code does what it does → tests as executable specification
        * which of these limitations does an agent actually have?
    * (optional) start the herdr race
        * same kata, two agents: one told to do TDD, one not
        * results later in the talk
    * live demo
        * the card game kata: Steve vs Josh, the higher card wins the round
        * "Steve wins x to y", "Josh wins x to y" or "Tie"
* the new ways [21:00–36:00]
    * which of TDD's benefits does an agent need?
        * an agent != human (different capabilities)
        * it doesn't have: fear, boredom, not knowing where the code is going
        * it has as badly as us, or worse: misreading the spec, claiming done when it isn't, blind spots in its own tests
        * GLM wrote the same misreading into its test and its code
    * the experiment
        * same kata: 9 agent runs told to do TDD, 1 told not to, plus my own run from 2016
        * judged by an acceptance suite the agents never saw, plus 9 planted bugs
        * every red and green replayed from the git history
        * n = 1 per setup, on a 20-line kata the models have seen many times
    * agentic TDD skills: it looks good, but it's a charade
        * 46% of tests passed as soon as they were written: the agent already knew the answer
        * GLM: 7 of 7 genuine reds, every commit labelled correctly, ships "Josh wins 1 to 2"
        * ten implementations, one design: a rank string, indexOf, two counters
        * reflections: one copied from another model, one cites commit hashes that don't exist
    * tiny steps aren't meaningful for an agent
        * TDD as if you meant it: tiny steps, the code grows inside the test (my 2016 run)
        * only my run grew a different design
        * fake it adds bugs on purpose: "TDD created a bug and then caught it" (GLM)
        * the most minimal steps gave the weakest frontier-model suite (Opus 5 caught 5 of 9 planted bugs)
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
    * (optional) the herdr race: results
        * TDD agent: time, cost, acceptance suite
        * no-TDD agent: time, cost, acceptance suite
* the way forward (for the coming year) [36:00–42:00]
    * leave behind
        * fake it and minimal green
        * a commit for every red, green and refactor
        * forcing the smallest step
        * a perfect process as proof of quality
    * move up a loop
        * the double loop from Growing Object-Oriented Software
        * outer loop, acceptance tests: the human
        * inner loop, red/green/refactor: the agent
        * isn't this just ATDD/BDD again? yes, and that's the point
    * planning
        * why? to not have to redo, and to make sure interpretations are correct
        * GLM's "Josh wins 1 to 2": no agent's TDD caught the "x to y" ambiguity
        * a human reading the test list would have caught it in seconds
        * a small step compared to spec-driven development (spec-kit, Kiro)
    * use acceptance-test-driven examples to specify desired behaviour
        * only the acceptance suite the agents never saw caught GLM's and Gemma's bugs
        * tests given with the task help LLMs (Mathews & Nagappan 2024)
        * tests written after faulty code catch fewer bugs: 14% vs 25% (Konstantinou et al. 2026)
        * Jain's harness is the same idea, tested at scale
        * examples are executable; a spec document isn't
    * vertical slicing
        * small diffs a human can actually review
        * from experience, not from this experiment
* test-first becomes spec-first: the human owns the examples, the agent does the cycles [42:00–44:00]
* questions

## notes (not slides)

- Timing assumes questions come after the 45 minutes, which leaves 1 minute of buffer. If questions are inside the 45, cut the live demo to 9 minutes.
- Live demo: hard stop at a checkpoint tag. It comes first and the new material comes last, so an overrun eats the part people came for.
- Plant three things on the demo's test list:
    - "Josh wins x to y": ask the room what x is (sets up GLM).
    - "A beats K" (sets up my 2016 run).
    - One obvious implementation (sets up probity forbidding it).
- herdr race: decide whether it's in or out. If it's in, starting it takes the 1-minute buffer and its results take 2 minutes of the new ways. If it's out, give those 2 minutes to the live demo.
- Check the history years before 2008 before they go on a slide; I only have them from memory.
- Say "n = 1 per setup" on the experiment slide, before anyone asks.
- Every number comes from PRESENTATION.md: §1 (experiment), §2.2 and §2.3 (charade), §2.4 (cost), §2.9 (probity). Jain's numbers are in PRESENTATION_PLAN.md §2.
