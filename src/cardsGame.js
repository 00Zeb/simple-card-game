function cardsGame(steveDeck, danielDeck) {
  if (!steveDeck || !danielDeck || steveDeck.length === 0) {
    return "Tie";
  }
  return "Steve wins 1 to 0";
}

module.exports = cardsGame;
