import { TennisGame1 } from '../src';

describe('TennisGame', function () {

  describe('TennisGame1', function () {
    it(`scores 0:0 as Love-All`, function () {
      const game = new TennisGame1();
      expect(game.getScore()).toBe("Love-All");
    });

    it(`scores 15:0 as Fifteen-Love`, function () {
      const game = new TennisGame1();
      game.wonPoint('player2')
      expect(game.getScore()).toBe("Fifteen-Love");
    });
  });
});
