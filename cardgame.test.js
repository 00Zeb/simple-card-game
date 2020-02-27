const CardGame = require('./cardgame');

test('nothing', () => {
    let cardGame = new CardGame();
    let result = cardGame.winner(['2'], ['2']);
    expect(result).toBe("Tie");
});