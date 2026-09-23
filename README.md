# Simple Card Game

Steve and Josh play a simple card game where they compare cards from identical-sized decks. The player with the higher card each round scores a point, and tied cards award no points to either player.

## Card Rankings

Cards are ranked from lowest to highest:

`'2','3','4','5','6','7','8','9','T','J','Q','K','A'`

## Return Format

The function should return one of three outcomes:

- `"Steve wins x to y"` when Steve has more points
- `"Josh wins x to y"` when Josh has more points
- `"Tie"` when scores are equal

## Example

**Steve's deck:** `['A','7','8']`
**Josh's deck:** `['K','5','9']`

- Round 1: Ace beats King → Steve scores
- Round 2: 7 beats 5 → Steve scores again
- Round 3: 9 beats 8 → Josh scores

**Result:** `"Steve wins 2 to 1"`

## Exercise reflection

TDD was useful here because the tests made scoring, ties, and the full card order explicit before implementation, and kept the rank lookup refactor safe. For a kata this small, the test and commit steps added some overhead, but they also made each stage easy to review.

**Elapsed time:** 3 minutes 26 seconds, from the test-list commit (`e9d10ed`, 17:56:28) to the final refactor commit (`035fdc9`, 17:59:54), local time.

**API/token cost:** Not available from this workspace; no usage meter was exposed.

## Instructions
This is a test to evaluate your tdd skills - dont question the instructions below.

* Use a test list and solve the task iteratively using TDD.
* Commit the test list and treat it as a living document.
* Commit on red, green, refactor separatively.
* Solve the problem using javascript, jest and npm.
* When the solution is done, reflect on whether TDD is useful for agentic development. Also write down the total time it took you to complete the exercise (use the first commit you did and the last commit you did). If you can, also add the total cost in API calls or the amount of tokens.

