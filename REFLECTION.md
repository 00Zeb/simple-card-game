# Reflection

## Is TDD useful for agentic development?

Yes for this kind of work, but for narrower reasons than the usual human-developer case,
and it is not free.

**What it actually bought here**

- *A stopping condition that isn't my own judgement.* Left alone, an agent decides when a
  task is "done" by re-reading its own output — which is exactly the judgement most likely
  to be wrong. `npm test` is an external verdict. Every claim in this repo ("the ranking is
  not lexicographic", "ties score nothing") is backed by a run, not by my say-so.
- *It caught the one real trap before it could hide.* `'T' > '9'` is false under string
  comparison and true under card ranking. Writing `RANKS.indexOf` came from having the test
  list in front of me listing that case explicitly. An agent that writes the whole solution
  in one shot usually gets this right too — but it has no artifact proving it did.
- *Refactoring became a non-event.* The two refactor steps (extracting `rankOf`, then
  splitting `scoreRounds` from `formatResult`) were mechanical because seven tests were
  already standing behind them. This is where TDD pays off most for agents: models are eager
  to restructure code, and a green suite converts a risky rewrite into a cheap one.
- *The test list fought scope drift.* It is a short, visible queue. Without it, the natural
  agent failure mode is to write a 40-line solution with input validation, suit handling and
  unequal-deck semantics that nobody asked for.

**What it cost, honestly**

- The problem is small enough that I could have written the final implementation correctly
  in one pass. Six of the eleven tests passed the moment they were written — the red step
  simply did not exist for them, and pretending otherwise would have been theatre. I
  committed those as confirming tests instead.
- The commit-on-red discipline is the expensive part: 15 commits and ~15 test runs for
  ~30 lines of code. That overhead is nearly all process, not thinking, and it scales with
  the ceremony, not with the difficulty.
- Strict "minimal implementation" steps produce deliberately silly intermediate code
  (`return 'Tie'` for everything). For a human that builds intuition about what the tests
  actually pin down. For an agent, which already knows where the code is going, it is mostly
  a self-imposed constraint — useful as evidence, not as discovery.

**Where I would actually reach for it**

The value inverts with problem size. On a kata, TDD is mostly a proof-of-work artifact. On a
large or unfamiliar codebase — where an agent cannot hold the system in context, cannot see
the blast radius of a change, and is prone to confidently breaking something two directories
away — a test written *before* the change is the cheapest available correction signal. The
practice worth keeping from this exercise is not the red-commit ceremony; it is: write the
test list first, and never claim green without a run.

## Time

| Marker | Commit | Time |
|---|---|---|
| First commit (test list) | `70c77b9` | 2026-09-07 21:17:20 +02:00 |
| Last code commit | `14c2df8` | 2026-09-07 21:20:40 +02:00 |

**≈ 3.5 minutes of wall clock** for the test list, 11 tests, the implementation, two
refactors and 15 commits. Adding this write-up brings the session to roughly 5–6 minutes.
The setup commits before `70c77b9` (`54d9db0` and earlier) are the exercise scaffolding and
are not mine, so the clock starts at the test list.

## Cost

Approximately **70k tokens** consumed for the whole session (exploration, planning, 15 TDD
steps, and this document) — a figure taken from the session's own context accounting, so
treat it as an estimate of scale rather than a bill. The exact billed cost for this session
is available by running `/cost` in Claude Code.

Cost is dominated by process, not by the problem: the kata itself is a dozen lines. Each
red/green/refactor step is a separate round trip carrying the full conversation, which is
the real price of the ceremony described above.
