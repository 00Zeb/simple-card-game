function cardsGame(steve, josh) {
  let steveScore = 0;
  let joshScore = 0;

  for (let round = 0; round < steve.length; round++) {
    if (steve[round] > josh[round]) {
      steveScore++;
    } else if (josh[round] > steve[round]) {
      joshScore++;
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
