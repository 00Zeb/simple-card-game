package cardgame;

import java.util.LinkedHashMap;

public class CardGame {
	private final LinkedHashMap<String, Player> players;
	private final Dealer dealer;

	public CardGame(Dealer dealer) {
		this.dealer = dealer;
		this.players = createPlayers("p1", "p2");
	}

	public String gameResult() {
		players.forEach((name, player) -> dealer.deal(player));
		int p1Wins = 0;
		int p2Wins = 0;
		for (int index = 0; index < nrOfCards(); index++) {
			int p1Value = CardDeck.valueOf(cardOfPlayer("p1")[index]);
			int p2Value = CardDeck.valueOf(cardOfPlayer("p2")[index]);
			if (p1Value > p2Value)
				p1Wins++;
			if (p1Value < p2Value)
				p2Wins++;
		}
		return determineWinner(p1Wins, p2Wins);
	}

	private int nrOfCards() {
		return players.get("p1").getCards().length;
	}

	private String determineWinner(int p1Wins, int p2Wins) {
		if (p1Wins > p2Wins)
			return "p1 wins " + p1Wins + " to " + p2Wins;
		if (p1Wins < p2Wins)
			return "p2 wins " + p2Wins + " to " + p1Wins;
		return "draw";
	}

	private char[] cardOfPlayer(String playerName) {
		return players.get(playerName).getCards();
	}

	private LinkedHashMap<String, Player> createPlayers(String p1, String p2) {
		return new LinkedHashMap<String, Player>() {
			private static final long serialVersionUID = 2688523593799327103L;
			{
				put(p1, new Player(p1));
				put(p2, new Player(p2));
			}
		};
	}
}
