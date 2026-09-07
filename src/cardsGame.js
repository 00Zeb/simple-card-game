const RANKS = '23456789TJQKA';

function rankOf(card) {
  return RANKS.indexOf(card);
}

function cardsGame(steve, josh) {
  let steveScore = 0;
  let joshScore = 0;

  for (let round = 0; round < steve.length; round++) {
    if (rankOf(steve[round]) > rankOf(josh[round])) {
      steveScore++;
    } else if (rankOf(josh[round]) > rankOf(steve[round])) {
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
