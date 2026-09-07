describe('cardsGame', () => {
  let cardsGame;

  beforeEach(() => {
    cardsGame = require('./cardsGame');
  });

  it.skip('returns Tie for empty decks', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it.skip('awards Steve a point when his card is higher', () => {
    expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0');
  });

  it.skip('awards Josh a point when his card is higher', () => {
    expect(cardsGame(['K'], ['A'])).toBe('Josh wins 0 to 1');
  });

  it.skip('awards no points for tied cards', () => {
    expect(cardsGame(['7'], ['7'])).toBe('Tie');
  });

  it.skip('ranks face cards above number cards', () => {
    expect(cardsGame(['T'], ['9'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['J'], ['T'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['Q'], ['J'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['K'], ['Q'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['9'], ['T'])).toBe('Josh wins 0 to 1');
  });

  it.skip('plays multiple rounds and ties overall', () => {
    expect(cardsGame(['A', '7'], ['K', '7'])).toBe('Tie');
  });

  it.skip('plays the README example over three rounds', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });
});
