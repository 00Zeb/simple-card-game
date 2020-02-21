package application;

import cardgame.CardGame;
import cardgame.Dealer;

public class Main {

	public static void main(String[] args) {
		Dealer dealer = new Dealer(5);
		CardGame cardGame = new CardGame(dealer);
		String gameResult = cardGame.gameResult();
		System.out.println(gameResult);
	}
}
