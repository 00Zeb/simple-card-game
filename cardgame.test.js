const CardGame = require('./cardgame');

test('nothing', () => {
    let dealer = require('./dealer');
    let cardGame = new CardGame(dealer);
    let result = cardGame.gameResult();
    expect(result).toBe("draw");
});

