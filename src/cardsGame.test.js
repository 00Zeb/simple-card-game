const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('is a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('Steve wins the round when his card is higher', () => {
    expect(cardsGame(['5'], ['3'])).toBe('Steve wins 1 to 0');
  });

  it('Josh wins the round when his card is higher', () => {
    expect(cardsGame(['3'], ['5'])).toBe('Josh wins 1 to 0');
  });

  it('is a tie when the two cards are equal', () => {
    expect(cardsGame(['5'], ['5'])).toBe('Tie');
  });

  it('ranks T above 9, not by string order', () => {
    expect(cardsGame(['T'], ['9'])).toBe('Steve wins 1 to 0');
  });

  it('ranks the face cards A > K > Q', () => {
    expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['Q'], ['K'])).toBe('Josh wins 1 to 0');
  });

  it('scores every round of the README example', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });

  it('lets Josh win a multi-round game', () => {
    expect(cardsGame(['2', '9', '5'], ['3', 'T', '4'])).toBe('Josh wins 2 to 1');
  });

  it('scores nothing for the tied rounds in between', () => {
    expect(cardsGame(['5', 'K', '7'], ['5', 'Q', '7'])).toBe('Steve wins 1 to 0');
  });

  it('is a tie when both players win the same number of rounds', () => {
    const ascending = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const descending = [...ascending].reverse();

    expect(cardsGame(ascending, descending)).toBe('Tie');
  });

  it('handles a full thirteen-card deck', () => {
    const steve = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const josh = ['3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A', '2'];

    expect(cardsGame(steve, josh)).toBe('Josh wins 12 to 1');
  });

});
