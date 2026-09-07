# Lessons: TDD on the Card Game Kata (as performed by an AI agent)

This document records an honest post-mortem of the strict TDD run in this
repository: 7 tests, 7 red/green cycles, 1 refactor, 17 commits. It analyzes
whether TDD actually helped, and whether agents should use TDD or
write-then-test.

## What actually happened

The process caught two real mistakes, and the nature of those mistakes is the
most interesting finding.

**Catch 1: A spec bug in my own test.** I wrote the "overall tie" example as
`['A','7'] vs ['K','7']`, claiming it was a tie. It is not — that game is
1–0. Writing the test *before* the code forced me to state the expected
outcome precisely, and the failure made the error impossible to ignore. This
was a genuine requirements-level bug that exists independently of
implementation style.

**Catch 2: A bug I introduced *because of* TDD.** To keep each green step
minimal, I hardcoded result strings (`'Steve wins 1 to 0'`) across several
cycles. The final test then exposed my format-string error (`Josh wins 1 to
0` instead of `Josh wins 0 to 1`). Note the irony: a write-it-all-at-once
implementation would likely never have contained this bug. TDD created a bug
and then caught it.

## Did TDD help?

Partially, and in specific ways:

1. **The test list was the real win.** Committing the test list first turned
   vague requirements ("compare cards, higher wins") into an executable
   contract. The empty-deck case, the tie case, and face-card ordering were
   all decisions I had to make *before* writing any code. That upfront
   clarification is where most of the value lived.

2. **Failures were always isolated.** At every red, exactly one test failed
   for exactly one reason. There was never a debugging session — no "which
   of these ten things is broken?" This is the strongest argument for
   incremental verification, for agents and humans alike.

3. **The refactor was safe by construction.** Removing the empty-deck guard
   at the end cost one test run and zero risk, because the suite was the
   safety net.

But the costs were real:

1. **17 commits for 16 lines of production code.** The strict cadence
   (commit on red, commit on green) is heavy. Two commits had to be undone
   and redone because *I* got them wrong mid-cycle.

2. **The incrementalism was partly artificial.** An agent holding the whole
   design in context does not genuinely "discover" the design through the
   tests — I knew the final shape from the start. Faking it step by step
   (`return 'Tie'`) demonstrated the discipline, but it manufactured
   intermediate bugs that a single well-considered implementation would not
   have had.

## Is TDD worthwhile for agents?

**Yes, but not the strictest form.** The useful core, distilled:

- **Tests (or a test list) first, always.** For an agent, tests written
  first are a requirements clarification tool. The test-data bug would very
  likely have survived a code-first approach, where expectations get written
  to match whatever the code does.

- **Run tests frequently and stay near green.** The value is not the
  ceremony; it is never being more than one small change away from a
  passing suite. Big-bang "write everything, then debug the pile" is where
  agents (and humans) lose the most time.

- **Commit at stable points, not at every micro-step.** Commit on green and
  on meaningful refactor. Committing every red is kata discipline, not
  production discipline — it inflates history for little benefit when the
  whole design is already understood.

**When strict TDD is worth it even for agents:**
- Unclear or ambiguous requirements, where writing tests first forces the
  ambiguity into the open.
- High-risk changes to unfamiliar code, where small verified steps localize
  failures.
- When the "consumer" of the work wants visible evidence of reasoning per
  behavior — as this exercise did.

**When test-after is fine:**
- Small, well-understood, low-risk functions where the design is obvious
  and one clear pass beats seven cycles.
- Exploratory/spike code, where the tests would be thrown away anyway.

## Verdict

TDD helped here, but the decisive factor was not the red-green-refactor
ritual — it was **specifying behavior before implementing it** and
**verifying in small increments**. For agents, the pragmatic form is:
write the test list first as a contract, implement against it, run after
every change, commit on green. Reserve the strict one-test-at-a-time
cadence for when requirements are genuinely unclear or the work is a
deliberate kata.
