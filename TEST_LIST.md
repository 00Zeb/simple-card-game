# Test List — Simple Card Game

Living document. Each TDD cycle picks the next unchecked item, drives it
red → green → refactor, then ticks it off here. New items are added as they
are discovered.

## Behaviour

- [x] two empty decks → `"Tie"`
- [x] one round, Steve's card higher → `"Steve wins 1 to 0"`
- [ ] one round, Josh's card higher → `"Josh wins 1 to 0"`
- [ ] one round, equal cards → `"Tie"`
- [ ] ranking is not lexicographic: `'T'` beats `'9'`
- [ ] README example: `['A','7','8']` vs `['K','5','9']` → `"Steve wins 2 to 1"`
- [ ] multi-round where Josh wins
- [ ] equal scores over several rounds → `"Tie"`
- [ ] full 13-card deck comparison

## Notes

- Items that already pass when written (equal cards, the rank-order boundary)
  are kept as *confirming* tests: they pin behaviour that a later refactor
  could break. They are committed on green, since there is no red to commit.
