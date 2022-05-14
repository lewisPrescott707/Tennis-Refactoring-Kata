import scores from './scores';
import { TennisGame, TennisGame1, TennisGame2, TennisGame3 } from '../src';

function checkScore(game: TennisGame, player1Score: number, player2Score: number, expectedScore: string): void {
  const highestScore: number = Math.max(player1Score, player2Score);
  for (let i = 0; i < highestScore; i++) {
    if (i < player1Score) {
      game.wonPoint('player1');
    }
    if (i < player2Score) {
      game.wonPoint('player2');
    }
  }
  expect(game.getScore()).toEqual(expectedScore);
}

describe('TennisGame', function () {

  describe('TennisGame1', function () {
    scores.forEach(([player1Score, player2Score, expectedScore]) => {
      it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, function () {
        checkScore(new TennisGame1('player1', 'player2'), player1Score, player2Score, expectedScore);
      });
    });
  });

  describe('TennisGame2', function () {
    scores.forEach(([player1Score, player2Score, expectedScore]) => {
      it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, function () {
        checkScore(new TennisGame2('player1', 'player2'), player1Score, player2Score, expectedScore);
      });
    });
  });

  describe('TennisGame3', function () {
    scores.forEach(([player1Score, player2Score, expectedScore]) => {
      it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, function () {
        checkScore(new TennisGame3('player1', 'player2'), player1Score, player2Score, expectedScore);
      });
    });
  });

});
