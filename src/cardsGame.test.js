const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('Steve wins the README example', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });

  it('Josh wins', () => {
    expect(cardsGame(['T'], ['J'])).toBe('Josh wins 1 to 0');
  });

  it('Josh wins with the higher score first', () => {
    expect(cardsGame(['2', 'Q', '3'], ['4', 'K', '2'])).toBe('Josh wins 2 to 1');
  });

  it('equal scores are a tie', () => {
    expect(cardsGame(['A', '2'], ['2', 'A'])).toBe('Tie');
  });

  it('identical cards award no points', () => {
    expect(cardsGame(['5', 'K'], ['5', 'K'])).toBe('Tie');
  });

  it('empty decks are a tie', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('ranks face cards above numbers', () => {
    expect(cardsGame(['9', 'T', 'J', 'Q', 'K'], ['T', 'J', 'Q', 'K', 'A'])).toBe('Josh wins 5 to 0');
  });
});
