const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('ties when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });
});
