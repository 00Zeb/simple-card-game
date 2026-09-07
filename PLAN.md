# Simple Card Game: documented TDD with commit history

## Save the plan first

Commit this plan and TASK_INSTRUCTIONS.md before implementation. Install npm
dependencies, ignore node_modules/, and commit setup and the lockfile separately.

## TDD and commit workflow

For each numbered step, run `npm test -- --runInBand` and commit each checkpoint:

1. Red: add the test and confirm the expected failure. Commit as
   `test: step NN red - <behavior>`.
2. Green: make the smallest change that passes the full suite. Commit as
   `feat: step NN green - <behavior>`.
3. Refactor: improve code where useful, rerun the suite, and commit as
   `refactor: step NN - <change>`.

Record test results in commit bodies. Red commits intentionally fail. If a new
test already passes, label the first checkpoint `coverage`, document that no red
failure occurred, and do not manufacture a failure. Use explicitly labeled empty
green/refactor checkpoint commits when no change is needed. Keep commits local.

## Ordered test list

Decks below are arrays of rank strings.

| Step | Steve | Josh | Expected | Purpose |
| --- | --- | --- | --- | --- |
| 1 | `[]` | `[]` | `Tie` | Create module; zero rounds. |
| 2 | `['3']` | `['2']` | `Steve wins 1 to 0` | Steve wins a round. |
| 3 | `['2']` | `['3']` | `Josh wins 1 to 0` | Josh wins; winner's score first. |
| 4 | `['3']` | `['3']` | `Tie` | Equal cards award no points. |
| 5 | `['3','4']` | `['2','3']` | `Steve wins 2 to 0` | Accumulate Steve's points. |
| 6 | `['2','3']` | `['3','4']` | `Josh wins 2 to 0` | Accumulate Josh's points. |
| 7 | `['3','2']` | `['2','3']` | `Tie` | Equal nonzero scores tie. |
| 8 | `['4','3','2']` | `['3','2','3']` | `Steve wins 2 to 1` | Both scores for Steve victory. |
| 9 | `['3','2','3']` | `['4','3','2']` | `Josh wins 2 to 1` | Both scores for Josh victory. |
| 10 | `['4','3','2']` | `['3','3','2']` | `Steve wins 1 to 0` | Ignore tied rounds. |
| 11 | `['J']` | `['T']` | `Steve wins 1 to 0` | Explicit rank ordering. |
| 12 | Every adjacent rank pair | Both directions | Higher card wins 1 to 0 | Full ordering: 23456789TJQKA. |
| 13 | Every rank | Same rank | `Tie` | Equality across all ranks. |
| 14 | `['A','7','8']` | `['K','5','9']` | `Steve wins 2 to 1` | README example. |

Steps 12 and 13 each add one parameterized group with three checkpoints.

## Implementation and acceptance

Implement `cardsGame(steve, josh)` in `src/cardsGame.js`, exported with CommonJS,
driven by `src/cardsGame.test.js`. The final code uses an explicit rank order,
two counters, and one pass through matching indexes. Return the exact required
string without modifying either deck.

Acceptance: all tests pass; both documents are committed; working tree is clean;
history contains each checkpoint. Report tests and already-passing/empty stages.

Assume valid uppercase ranks and equal-sized decks. Empty decks return `Tie`.
Input validation, Java implementation, and a user interface are outside scope.
