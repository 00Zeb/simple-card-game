# Test List — Simple Card Game

Living document. Each TDD cycle picks the next unchecked item, drives it red → green →
refactor, then ticks it off here. New items get added as they are discovered.

## Behaviour

- [x] two empty decks → `"Tie"`
- [x] one round, Steve's card higher → `"Steve wins 1 to 0"`
- [x] one round, Josh's card higher → `"Josh wins 1 to 0"`
- [x] one round, equal cards → `"Tie"`
- [x] ranking is not lexicographic: `'T'` beats `'9'`
- [x] `'A'` beats `'K'`, `'K'` beats `'Q'`
- [ ] README example: `['A','7','8']` vs `['K','5','9']` → `"Steve wins 2 to 1"`
- [ ] multi-round where Josh wins
- [ ] multi-round with ties interleaved — ties score nothing
- [ ] equal scores over several rounds → `"Tie"`
- [ ] full 13-card decks

## Discovered during the cycles

- Some list items pass the moment they are written (equal cards, the rank-order
  items). They are kept as *confirming* tests — they pin behaviour the next
  refactor could break — and committed in one step, since there is no red to commit.
