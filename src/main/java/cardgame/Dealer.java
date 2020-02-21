package cardgame;

import java.util.Random;

public class Dealer {
	private final Random random;
	private final int cardsToDraw;

	public Dealer(int cardsToDraw) {
		this.random = new Random();
		this.cardsToDraw = cardsToDraw;
	}

	public void deal(Player player) {
		player.setCards(null);
		char[] cards = new char[cardsToDraw];
		for (int i = 0; i < cards.length; i++) {
			int randomPick = random.nextInt(100);
			cards[i] = CardDeck.get(randomPick);
		}
		player.setCards(cards);
	}
}
