const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('empty decks result in a tie', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

});
