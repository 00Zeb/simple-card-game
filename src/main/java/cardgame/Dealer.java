package cardgame;

import java.util.Random;

public class Dealer {
	private final Random random;

	public Dealer() {
		this.random = new Random();
	}

	public void deal(Player player, int cardsToDraw) {
		player.setCards(null);
		char[] cards = new char[cardsToDraw];
		for (int i = 0; i < cards.length; i++) {
			int randomPick = random.nextInt(100);
			cards[i] = CardDeck.get(randomPick);
		}
		player.setCards(cards);
	}
}
