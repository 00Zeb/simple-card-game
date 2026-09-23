const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('returns the result from the README example', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });

  it('reports Steve and Josh scores in that order when Josh wins', () => {
    expect(cardsGame(['2', '2'], ['3', '2'])).toBe('Josh wins 0 to 1');
  });

  it('does not award a point for a tied round', () => {
    expect(cardsGame(['A', '5'], ['K', '5'])).toBe('Steve wins 1 to 0');
  });

  it('returns Tie when both players score equally', () => {
    expect(cardsGame(['A', '2'], ['K', '3'])).toBe('Tie');
  });

  it.each([
    ['3', '2'],
    ['4', '3'],
    ['5', '4'],
    ['6', '5'],
    ['7', '6'],
    ['8', '7'],
    ['9', '8'],
    ['T', '9'],
    ['J', 'T'],
    ['Q', 'J'],
    ['K', 'Q'],
    ['A', 'K'],
  ])('ranks %s above %s', (higher, lower) => {
    expect(cardsGame([higher], [lower])).toBe('Steve wins 1 to 0');
  });

  it('returns Tie for empty decks', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });
});
