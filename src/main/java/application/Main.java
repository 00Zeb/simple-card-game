package application;

import cardgame.CardGame;
import cardgame.Dealer;

public class Main {

	public static void main(String[] args) {
		CardGame cardGame = new CardGame(new Dealer());
		String gameResult = cardGame.gameResult(5);
		System.out.println(gameResult);
	}
}
