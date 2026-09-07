# Test List — Simple Card Game

Living document. Each TDD cycle picks the next unchecked item, drives it red → green →
refactor, then ticks it off here. New items get added as they are discovered.

## Behaviour

- [ ] two empty decks → `"Tie"`
- [ ] one round, Steve's card higher → `"Steve wins 1 to 0"`
- [ ] one round, Josh's card higher → `"Josh wins 1 to 0"`
- [ ] one round, equal cards → `"Tie"`
- [ ] ranking is not lexicographic: `'T'` beats `'9'`
- [ ] `'A'` beats `'K'`, `'K'` beats `'Q'`
- [ ] README example: `['A','7','8']` vs `['K','5','9']` → `"Steve wins 2 to 1"`
- [ ] multi-round where Josh wins
- [ ] multi-round with ties interleaved — ties score nothing
- [ ] equal scores over several rounds → `"Tie"`
- [ ] full 13-card decks

## Discovered during the cycles

_(nothing yet)_
