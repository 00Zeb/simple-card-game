const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

function cardsGame(steve, josh) {
  let steveScore = 0;
  let joshScore = 0;

  for (let round = 0; round < steve.length; round++) {
    const steveRank = RANKS.indexOf(steve[round]);
    const joshRank = RANKS.indexOf(josh[round]);

    if (steveRank > joshRank) {
      steveScore++;
    } else if (joshRank > steveRank) {
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
