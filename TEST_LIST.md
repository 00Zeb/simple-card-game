# Test list — Simple Card Game

Living document. Items are added as they are discovered and ticked as they go
green. Order is "simplest valuable example first", then triangulate.

## To do

_All listed examples are green._


## Done

- [x] Both decks empty -> "Tie"
- [x] One round, Steve's card is higher -> "Steve wins 1 to 0"
- [x] One round, Josh's card is higher -> "Josh wins 1 to 0"
- [x] One round, identical cards -> "Tie"
- [x] Two rounds, one win each -> "Tie" (scores decide, not the first round)
- [x] Two rounds, Steve wins both -> "Steve wins 2 to 0" (score is counted, not hardcoded)
- [x] Ace beats King -> "Steve wins 1 to 0" (rank order, not alphabetical order)
- [x] The full ranking 2..A orders every card correctly (passed on arrival)
- [x] Worked example from the README -> "Steve wins 2 to 1" (passed on arrival)

## Open questions / out of scope

- Decks are stated to be identical in size; unequal or malformed decks are not
  part of the kata and are deliberately not specified here.
