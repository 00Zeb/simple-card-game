function cardsGame(steveDeck, danielDeck) {
  if (!steveDeck || !danielDeck || steveDeck.length === 0) {
    return "Tie";
  }
  if (Number(steveDeck[0]) > Number(danielDeck[0])) {
    return "Steve wins 1 to 0";
  }
  return "Josh wins 1 to 0";
}

module.exports = cardsGame;
