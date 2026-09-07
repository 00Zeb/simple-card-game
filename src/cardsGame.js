const RANKS = '23456789TJQKA';

function rankOf(card) {
  return RANKS.indexOf(card);
}

function scoreRounds(steve, josh) {
  return steve.reduce(
    (score, card, round) => {
      if (rankOf(card) > rankOf(josh[round])) {
        return { steve: score.steve + 1, josh: score.josh };
      }
      if (rankOf(josh[round]) > rankOf(card)) {
        return { steve: score.steve, josh: score.josh + 1 };
      }
      return score;
    },
    { steve: 0, josh: 0 }
  );
}

function formatResult(score) {
  if (score.steve > score.josh) {
    return `Steve wins ${score.steve} to ${score.josh}`;
  }
  if (score.josh > score.steve) {
    return `Josh wins ${score.josh} to ${score.steve}`;
  }
  return 'Tie';
}

function cardsGame(steve, josh) {
  return formatResult(scoreRounds(steve, josh));
}

module.exports = cardsGame;
