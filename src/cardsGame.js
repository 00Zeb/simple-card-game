function cardsGame(steve, josh) {
  if (steve.length === 0) {
    return 'Tie';
  }

  if (steve[0] > josh[0]) {
    return 'Steve wins 1 to 0';
  }

  if (josh[0] > steve[0]) {
    return 'Josh wins 1 to 0';
  }

  return 'Tie';
}

module.exports = cardsGame;
