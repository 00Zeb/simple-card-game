function cardsGame(steve, josh) {
  let steveScore = 0;
  let joshScore = 0;

  for (let i = 0; i < steve.length; i += 1) {
    if (steve[i] > josh[i]) {
      steveScore += 1;
    } else if (steve[i] < josh[i]) {
      joshScore += 1;
    }
  }

  if (steveScore > joshScore) {
    return `Steve wins ${steveScore} to ${joshScore}`;
  }

  if (joshScore > steveScore) {
    return `Josh wins ${joshScore} to ${steveScore}`;
  }

  return 'Tie';
}

module.exports = cardsGame;
