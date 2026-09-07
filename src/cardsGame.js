function cardsGame(steve, josh) {
  const CARD_RANKS = '23456789TJQKA';
  let steveScore = 0;
  let joshScore = 0;

  for (let i = 0; i < steve.length; i += 1) {
    const steveRank = CARD_RANKS.indexOf(steve[i]);
    const joshRank = CARD_RANKS.indexOf(josh[i]);

    if (steveRank > joshRank) {
      steveScore += 1;
    } else if (steveRank < joshRank) {
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
