const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  const cardRankings = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

  it('should determine winner for a basic game with different cards', () => {
    const steveDeck = ['A','7','8'];
    const joshDeck = ['K','5','9'];
    expect(cardsGame.play(steveDeck, joshDeck)).toBe("Steve wins 2 to 1");
  });

  it('should determine a win for Josh', () => {
    const steveDeck = ['3','4','5'];
    const joshDeck = ['Q','J','K'];
    expect(cardsGame.play(steveDeck, joshDeck)).toBe("Josh wins 2 to 0");
  });

  it('should return Tie when scores are equal', () => {
    const steveDeck = ['Q','J'];
    const joshDeck = ['K','T'];
    expect(cardsGame.play(steveDeck, joshDeck)).toBe("Tie");
  });

  it('should handle exact same cards in a round as a tie', () => {
    const steveDeck = ['J','Q'];
    const joshDeck = ['J','Q'];
    expect(cardsGame.play(steveDeck, joshDeck)).toBe("Tie");
  });

  it('should handle cases where both decks have the same quantity of cards', () => {
    const steveDeck = ['9','9','A'];
    const joshDeck = ['8','8','K'];
    expect(cardsGame.play(steveDeck, joshDeck)).toBe("Steve wins 3 to 0");
  });
});
