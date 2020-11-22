"use strict";

const should = require('chai').should();
const BowlingGame = require("../bowlingGame");

// Test collection
describe('bowlingGame()', function() {

    let game = undefined;

    // Called before each test
    beforeEach('reset score to 0', function() {
        game = new BowlingGame();
    });

    it('should score a game of 0s', function () {
        game.multipleRolls(20, 0);
        game.score().should.equal(0);
    });

    it('should score a game of 1s', function () {
        game.multipleRolls(20, 1);
        game.score().should.equal(20);
    });

    it('should score spare followed by 3', function () {
        game.oneRoll(5);
        game.oneRoll(5);
        game.oneRoll(3);
        game.multipleRolls(17, 0);
        game.score().should.equal(16);
    });

    it('should score strike followed by 3 and 3', function () {
        game.oneRoll(10);
        game.oneRoll(3);
        game.oneRoll(3);
        game.multipleRolls(17, 0);
        game.score().should.equal(22);
    });

    it('should score perfect game (all strikes)', function () {
        game.multipleRolls(12, 10);
        game.score().should.equal(300);
    });
});