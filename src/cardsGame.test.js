const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('empty decks result in a tie', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('higher card wins for steve', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });

  it('higher card wins for josh', () => {
    expect(cardsGame(['2'], ['3'])).toBe('Josh wins 1 to 0');
  });

  it('equal cards result in a tie', () => {
    expect(cardsGame(['3'], ['3'])).toBe('Tie');
  });

});
