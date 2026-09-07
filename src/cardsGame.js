function cardsGame(steve, josh) {
  if (steve[0] > josh[0]) {
    return 'Steve wins 1 to 0';
  }

  return 'Tie';
}

module.exports = cardsGame;
