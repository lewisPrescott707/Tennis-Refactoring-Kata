import { TennisGame1 } from '../src';

describe('TennisGame', function () {

  describe('TennisGame1', function () {
    it(`scores 0:0 as Love-All`, function () {
      // Arrange
      const game = new TennisGame1();
      // Assert
      expect(game.getScore()).toBe("Love-All");
    });

    it(`scores 15:0 as Fifteen-Love`, function () {
      // Arrange
      const game = new TennisGame1();
      // Act
      game.wonPoint('player1');
      // Assert
      expect(game.getScore()).toBe("Fifteen-Love");
    });

    it('', function () {
      
    });

  });
});
