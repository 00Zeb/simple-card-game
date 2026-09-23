# Reflection — TDD for agentic development

## Was TDD useful here?

Yes, but not for the reason it is usually sold.

For a kata this small, an agent can emit the finished `cardsGame` in one shot,
and it would very likely be correct. TDD did not make the solution better. What
it produced instead is **evidence**: nineteen commits in which every behaviour
was observed failing before it was made to pass. That matters more for an agent
than for a human, because the characteristic failure mode of an agent is not bad
code, it is a confident report that the code works. A red-to-green transition in
the history is a falsifiable claim; "I implemented it and it looks right" is not.

Three things earned their keep concretely:

1. **The Ace-beats-King red.** Up to that point `steve[0] > josh[0]` passed every
   example, because all of them used digit cards. The failing test turned a
   latent bug into an observed one — `"Josh wins 1 to 0"` instead of
   `"Steve wins 1 to 0"` — rather than something I would have had to notice by
   inspection. A one-shot solution gets this right only if it happens to
   remember that `'A' < 'K'` in a string comparison.

2. **The test list as externalised state.** `TEST_LIST.md` is the part of this
   exercise that transfers directly to real agentic work. An agent's context gets
   compacted, truncated or lost; a committed list of what is done, what is next
   and what was ruled out survives that. It is the cheapest possible handoff
   artifact, and it doubles as the record of *why* the steps were ordered the way
   they were.

3. **Faking, then being forced out of it.** Returning a hardcoded
   `"Steve wins 1 to 0"` and then `"1 to 0"` after the loop existed felt silly
   while doing it, and it is exactly what stopped the implementation from running
   ahead of the tests. Without that discipline an agent writes the general
   solution at step two and the remaining tests are just test-after with extra
   commits.

## Where it did not pay

- **Overhead dominated.** Twenty-five lines of production code cost nineteen
  commits and about as much time in git as in thinking. That ratio is terrible
  at this size and improves as the problem grows; it is not an argument against
  TDD, but it is an honest reason agents drift away from it on small tasks.
- **The list outlived the design.** The last two examples (the full ranking, the
  README example) passed on arrival. The design had already converged. I labelled
  them `test:` rather than `red:` instead of contriving smaller steps to
  manufacture a failure — a fake red is worse than an honest regression test. I
  did check that the ranking test has teeth by swapping `'9'` and `'T'` in
  `RANKS` and watching it fail.
- **TDD does not check the requirements.** Every test here was derived from the
  README by the same agent that wrote the code. If I had misread the output
  format, nine green tests would have agreed with me. TDD verifies internal
  consistency, not that the right thing is being built.

## Verdict

For agentic development I would keep two of the three practices unconditionally:
the committed test list, and never writing production code for which no test has
been seen to fail. The strict red/green/refactor commit granularity is worth it
when the history is the deliverable — a review, an audit, an exercise like this
one — and is reasonable to relax to one commit per cycle otherwise.

## Cost

| | |
| --- | --- |
| First commit | 2026-09-23 17:55:47 +0200 (`chore: ignore node_modules …`) |
| Last commit | 2026-09-23 18:00:05 +0200 (this document) |
| Elapsed | **4 minutes 18 seconds** |
| Commits | 20 (1 chore, 1 docs, 7 red, 7 green, 1 refactor, 2 test, 1 reflection) |
| Production code | 28 lines, 100% statement/branch/function/line coverage |
| Tests | 9, all green |

Token and API cost: I cannot read my own usage counters, so I will not invent a
number. The work took roughly 25 assistant turns with a context that grew from
about 20k to about 40k tokens, which puts the input side in the low hundreds of
thousands of tokens once per-turn context is summed, and the output side in the
low tens of thousands. Run `/cost` in the same Claude Code session for the exact
figure; that is the only trustworthy source.
