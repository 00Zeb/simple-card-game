# Reflection — TDD and agentic development

## Total time

First commit `7d12284` (`chore: ignore node_modules...`, 2026-09-12 23:11:53)
to last code commit `1ec0c4a` (`refactor: extract rankOf...`, 2026-09-12 23:20:34):

**8 minutes 41 seconds** across 13 commits.

## Token / API cost

Not measurable from inside the agent — the harness does not expose token counts
or API cost to me, so any figure here would be invented. The exercise was one
continuous session: roughly 30 tool calls (writes, edits, `npm test`, git
commits) and the prompts/outputs that go with them. If the harness records a
per-session total, that number should be used instead of this estimate.

## Is TDD useful for agentic development?

Yes, but for narrower reasons than for a human, and it is not free.

**What it bought**

- *An external stopping condition.* An agent decides a task is "done" by
  re-reading its own output — the judgement most likely to be wrong. `npm test`
  is a verdict that does not come from me. Each claim in this repo ("ties score
  nothing", "T beats 9") is backed by a run.
- *The test list fought scope drift.* Without a short visible queue, the natural
  agent failure is to add input validation, suit handling and unequal-deck
  semantics nobody asked for. The list kept the change to exactly the stated
  scope.
- *Refactoring became cheap.* Splitting `rankOf`, `scoreRounds` and
  `formatResult` was mechanical because nine tests stood behind it. Models like
  to restructure; a green suite turns a risky rewrite into a cheap one.
- *One test forced the real behaviour early.* The first single-round test used
  `'A'` vs `'K'`, which string comparison gets **wrong** (`'A' < 'K'`). That red
  forced the rank map on the very first green, instead of letting a
  lexicographic shortcut survive until a later boundary test. The later
  `'T'` vs `'9'` test then only confirmed it.

**What it cost, honestly**

- The problem is tiny. I could have written the final ~35 lines correctly in one
  pass. Several tests passed the moment they were written — the red step simply
  did not exist for them, and pretending otherwise would be theatre. They are
  committed as *confirming* tests, labelled as such, rather than dressed up as
  red–green cycles.
- Commit-on-red discipline is the expensive part: 13 commits and ~10 test runs
  for ~35 lines. That overhead is process, not thinking, and it scales with
  ceremony, not difficulty.
- Strict "minimal green" produces deliberately silly intermediates (`return
  'Tie'` for everything). For a human that builds intuition about what the tests
  actually pin down. For an agent that already knows the target, it is mostly a
  self-imposed constraint: useful as *evidence*, not as discovery.

**Where I would reach for it**

Green-field logic with subtle rules (this kata's non-lexicographic ranking),
where a wrong assumption is cheap to bake in and expensive to notice later.
I would not spend the ceremony on boilerplate, wiring, or code whose correctness
is obvious from the diff.

## Verdict on this run

The committed history shows genuine red-before-green for the three behaviours
that actually changed the code (empty decks, Steve's win, Josh's win, then the
multi-round loop), and labelled direct-green confirmations for the rest. That is
the honest shape of this task under TDD: a handful of real cycles surrounded by
tests that were never red.
