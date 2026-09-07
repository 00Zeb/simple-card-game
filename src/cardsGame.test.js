const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('ties when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('awards Steve a point for the higher card', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });

  it('awards Josh a point and reports his score first', () => {
    expect(cardsGame(['2'], ['3'])).toBe('Josh wins 1 to 0');
  });

  it('ties when the cards are equal', () => {
    expect(cardsGame(['3'], ['3'])).toBe('Tie');
  });

  it('counts every round Steve wins', () => {
    expect(cardsGame(['3', '4'], ['2', '3'])).toBe('Steve wins 2 to 0');
  });

  it('counts every round Josh wins', () => {
    expect(cardsGame(['2', '3'], ['3', '4'])).toBe('Josh wins 2 to 0');
  });

  it('ties when each player wins a round', () => {
    expect(cardsGame(['3', '2'], ['2', '3'])).toBe('Tie');
  });

  it('reports both scores when Steve wins a mixed game', () => {
    expect(cardsGame(['4', '3', '2'], ['3', '2', '3'])).toBe('Steve wins 2 to 1');
  });

  it('reports both scores when Josh wins a mixed game', () => {
    expect(cardsGame(['3', '2', '3'], ['4', '3', '2'])).toBe('Josh wins 2 to 1');
  });

  it('does not add tied rounds to either score', () => {
    expect(cardsGame(['4', '3', '2'], ['3', '3', '2'])).toBe('Steve wins 1 to 0');
  });

  it('ranks Jack above Ten despite alphabetical order', () => {
    expect(cardsGame(['J'], ['T'])).toBe('Steve wins 1 to 0');
  });

  describe.each([
    ['2', '3'],
    ['3', '4'],
    ['4', '5'],
    ['5', '6'],
    ['6', '7'],
    ['7', '8'],
    ['8', '9'],
    ['9', 'T'],
    ['T', 'J'],
    ['J', 'Q'],
    ['Q', 'K'],
    ['K', 'A'],
  ])('%s ranks below %s', (lower, higher) => {
    it('awards Steve the point when he holds the higher rank', () => {
      expect(cardsGame([higher], [lower])).toBe('Steve wins 1 to 0');
    });

    it('awards Josh the point when he holds the higher rank', () => {
      expect(cardsGame([lower], [higher])).toBe('Josh wins 1 to 0');
    });
  });
});
