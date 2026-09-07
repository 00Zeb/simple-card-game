const RANKS = '23456789TJQKA';

function cardsGame(steve, josh) {
  if (steve.length > 0 && RANKS.indexOf(steve[0]) > RANKS.indexOf(josh[0])) {
    return 'Steve wins 1 to 0';
  }
  return 'Tie';
}

module.exports = cardsGame;
