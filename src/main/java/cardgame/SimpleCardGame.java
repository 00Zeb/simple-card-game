package cardgame;

import java.util.HashMap;
import java.util.LinkedHashMap;

public class SimpleCardGame {
	private final Dealer dealer;
	private final CardGame cardGame;
	private final HashMap<String, Player> players;

	public SimpleCardGame(Dealer dealer) {
		this.dealer = dealer;
		this.cardGame = new CardGame();
		this.players = createPlayers("p1", "p2");
	}

	public String play() {
		players.forEach((name, player) -> dealer.deal(player));
		return cardGame.gameResult(cardsOfPlayer("p1"), cardsOfPlayer("p2"));
	}

	private char[] cardsOfPlayer(String playerName) {
		return players.get(playerName).getCards();
	}

	private HashMap<String, Player> createPlayers(String p1, String p2) {
		return new LinkedHashMap<String, Player>() {
			private static final long serialVersionUID = 2688523593799327103L;
			{
				put(p1, new Player(p1));
				put(p2, new Player(p2));
			}
		};
	}
}
