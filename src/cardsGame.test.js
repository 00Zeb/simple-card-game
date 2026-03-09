const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('empty decks result in a tie', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('higher card wins for steve', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });

});
