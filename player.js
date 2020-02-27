module.exports = class Player {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    getCards() {
        return this.cards;
    }

    setCards(cards) {
        this.cards = cards;
    }

    getName() {
        return this.name;
    }
}
