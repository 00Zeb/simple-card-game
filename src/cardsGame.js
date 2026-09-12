const RANKS = '23456789TJQKA';

function cardsGame(steveDeck, joshDeck) {
  const steve = RANKS.indexOf(steveDeck[0]);
  const josh = RANKS.indexOf(joshDeck[0]);

  if (steve > josh) {
    return 'Steve wins 1 to 0';
  }

  if (josh > steve) {
    return 'Josh wins 1 to 0';
  }

  return 'Tie';
}

module.exports = cardsGame;
