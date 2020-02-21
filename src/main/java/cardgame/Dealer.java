package cardgame;

import java.util.Random;

public class Dealer {
	private final CardDeck cardDeck2;
	private final Random random;
	private final int cardsSize;

	public Dealer() {
		this.cardDeck2 = new CardDeck();
		this.cardsSize = cardDeck2.cardDeck.length;
		this.random = new Random();
	}

	public void deal(Player player, int cardsToDraw) {
		player.setCards(null);
		char[] cards = new char[cardsToDraw];
		for (int i = 0; i < cards.length; i++) {
			cards[i] = this.cardDeck2.cardDeck[ random.nextInt(cardsSize) % cardsSize ];
		}
		player.setCards(cards);
	}
}
