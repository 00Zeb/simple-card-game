const RANKS = '23456789TJQKA';

function rankOf(card) {
  return RANKS.indexOf(card);
}

function cardsGame(steve, josh) {
  if (steve.length > 0) {
    if (rankOf(steve[0]) > rankOf(josh[0])) {
      return 'Steve wins 1 to 0';
    }
    if (rankOf(josh[0]) > rankOf(steve[0])) {
      return 'Josh wins 1 to 0';
    }
  }
  return 'Tie';
}

module.exports = cardsGame;
