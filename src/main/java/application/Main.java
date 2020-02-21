package application;

import cardgame.Dealer;
import cardgame.SimpleCardGame;

public class Main {

	public static void main(String[] args) {
		SimpleCardGame cardGame = new SimpleCardGame(new Dealer());
		String gameResult = cardGame.play();
		System.out.println(gameResult);
	}
}
