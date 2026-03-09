const rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

function cardsGame(steveDeck, danielDeck) {
  if (!steveDeck || !danielDeck || steveDeck.length === 0) {
    return "Tie";
  }
  const s = rank.indexOf(steveDeck[0]);
  const d = rank.indexOf(danielDeck[0]);
  if (s === d) {
    return "Tie";
  }
  if (s > d) {
    return "Steve wins 1 to 0";
  }
  return "Josh wins 1 to 0";
}

module.exports = cardsGame;
