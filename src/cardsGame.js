const RANKS = '23456789TJQKA';

function cardsGame(steveDeck, joshDeck) {
  if (RANKS.indexOf(steveDeck[0]) > RANKS.indexOf(joshDeck[0])) {
    return 'Steve wins 1 to 0';
  }

  return 'Tie';
}

module.exports = cardsGame;
