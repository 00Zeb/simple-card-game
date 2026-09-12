const RANKS = '23456789TJQKA';

function rankOf(card) {
  return RANKS.indexOf(card);
}

function scoreRounds(steveDeck, joshDeck) {
  let steve = 0;
  let josh = 0;

  for (let i = 0; i < steveDeck.length; i++) {
    const steveCard = rankOf(steveDeck[i]);
    const joshCard = rankOf(joshDeck[i]);

    if (steveCard > joshCard) {
      steve++;
    } else if (joshCard > steveCard) {
      josh++;
    }
  }

  return { steve, josh };
}

function formatResult(steve, josh) {
  if (steve > josh) {
    return `Steve wins ${steve} to ${josh}`;
  }

  if (josh > steve) {
    return `Josh wins ${josh} to ${steve}`;
  }

  return 'Tie';
}

function cardsGame(steveDeck, joshDeck) {
  const { steve, josh } = scoreRounds(steveDeck, joshDeck);
  return formatResult(steve, josh);
}

module.exports = cardsGame;
