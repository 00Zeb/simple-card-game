const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('reports a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });
});
