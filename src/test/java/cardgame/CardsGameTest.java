package cardgame;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

public class CardsGameTest {

	private CardGame game;
	
	@Before
	public void createGame() {
		game = new CardGame(CardGameValues.CARDS);
	}
	
	@Test
	public void testName() throws Exception {
		CardGame stub = Mockito.mock(CardGame.class);
		Mockito.when(stub.gameResult(null, null)).thenReturn("hello");
		
		assertEquals("hellok", stub.gameResult(null, null));
	}
	
	@Test
	public void testP1Victory() {
		
		
		//arange
		char[] p1Cards = { 'A' };
		char[] p2Cards = { 'K' };
		
		//act
		String gameResult = game.gameResult(p1Cards, p2Cards);
		
		//assert
		String expected = "p1 wins 1 to 0";
		assertEquals(expected, gameResult);
	}

	@Test
	public void testDraw() {
		char[] p1Cards = { '2' };
		char[] p2Cards = { '2' };
		String gameResult = game.gameResult(p1Cards, p2Cards);
		String expected = "draw";
		assertEquals(expected, gameResult);
	}

	@Test
	public void testP2Victory() {
		char[] p1Cards = { '2' };
		char[] p2Cards = { '3' };
		String gameResult = game.gameResult(p1Cards, p2Cards);
		String expected = "p2 wins 1 to 0";
		assertEquals(expected, gameResult);
	}
	
	@Test
	public void testP2Wins() {
		char[] p1Cards = { '2','2' };
		char[] p2Cards = { '3','3' };
		String gameResult = game.gameResult(p1Cards, p2Cards);
		String expected = "p2 wins 2 to 0";
		assertEquals(expected, gameResult);
	}
	
}
