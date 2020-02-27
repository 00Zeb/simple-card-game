const Player = require('./player');
const CardDeck = require('./carddeck');

module.exports = class CardGame {

    constructor(dealer) {
        this.dealer = dealer;
        this.players = {
            p1: new Player("p1"),
            p2: new Player("p2"),
        }
    }

    gameResult() {
        for (const player in this.players) {
            this.dealer.deal(this.players[player]);
        }

        let p1Wins = 0;
        let p2Wins = 0;
        for (let index = 0; index < this.nrOfCards(); index++) {
            let p1Value = CardDeck.valueOf(this.cardOfPlayer("p1")[index]);
            let p2Value = CardDeck.valueOf(this.cardOfPlayer("p2")[index]);
            if (p1Value > p2Value)
                p1Wins++;
            if (p1Value < p2Value)
                p2Wins++;
        }
        return this.determineWinner(p1Wins, p2Wins);
    }

    nrOfCards() {
        return this.players["p1"].getCards().length;
    }

    determineWinner(p1Wins, p2Wins) {
        if (p1Wins > p2Wins)
            return "p1 wins " + p1Wins + " to " + p2Wins;
        if (p1Wins < p2Wins)
            return "p2 wins " + p2Wins + " to " + p1Wins;
        return "draw";
    }

    cardOfPlayer(playerName) {
        return this.players[playerName].getCards();
    }
}





