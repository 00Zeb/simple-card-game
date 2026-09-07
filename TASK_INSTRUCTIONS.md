# User-visible task instructions

## Requests and decisions

- Solve the problem in README.md using iterative test-driven development.
- Start with an ordered test list and follow red, green, refactor cycles.
- Target JavaScript/Jest, as selected by the user.
- Save the agreed plan to a file before implementation.
- Commit each red, green, and refactor checkpoint so the progression can be reviewed.
- Save the user-visible requests and agreed workflow to this file.
- The user approved the plan and requested its implementation.

This is a task brief, not a transcript of hidden system or developer instructions.
The detailed test list and checkpoint conventions are in PLAN.md.

## Game requirements

Compare Steve's and Josh's equal-sized decks at matching indexes. Each round's
higher card earns one point; equal cards earn neither player a point.
Ranks from lowest to highest are `2 3 4 5 6 7 8 9 T J Q K A`.

Return `Steve wins x to y` or `Josh wins x to y`, with the winner's score first,
or exactly `Tie` for equal scores. The README example must return
`Steve wins 2 to 1` for Steve `['A','7','8']` and Josh `['K','5','9']`.

## Agreed implementation constraints

- Export `cardsGame(steve, josh)` from `src/cardsGame.js` using CommonJS.
- Use the existing Jest setup and `npm test -- --runInBand`.
- Assume valid uppercase ranks and equal-length arrays; empty decks tie.
- Read decks without modifying them.
- Keep Java, input validation, and UI work outside scope.
- Save and commit documentation before dependency setup and implementation.
- Record test outcomes in commit bodies; failing red commits are intentional.
- Label already-passing new tests as coverage rather than inventing failures.
- Use labeled empty checkpoints for green/refactor stages needing no changes.
- Keep all commits local; do not push.
- Finish with a passing suite and clean working tree.
