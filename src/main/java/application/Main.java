package application;

import cardgame.Dealer;
import cardgame.SimpleCardGame;

public class Main {

	public static void main(String[] args) {
		Dealer dealer = new Dealer(5);
		SimpleCardGame cardGame = new SimpleCardGame(dealer);
		System.out.println(cardGame.play());
	}
}
