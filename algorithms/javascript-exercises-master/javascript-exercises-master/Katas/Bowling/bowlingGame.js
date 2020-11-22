"use strict";

function BowlingGame() {
    this.roll = 0;
    this.rolls = new Array(21);
    this.rolls.fill(0);
}

BowlingGame.prototype.oneRoll = function(pinsDown) {
    this.rolls[this.roll] = pinsDown;
    this.roll++;
};

BowlingGame.prototype.multipleRolls = function(times, pinDown) {
    for (let i = 0; i < times; i++) {
        this.oneRoll(pinDown);
    }
};

BowlingGame.prototype.score = function() {
    let score = 0;
    let roll = 0;
    for (let frame = 0; frame < 10; frame++) {
        // If spare
        if (this.isStrike(roll)) {
            score += 10 + this.rolls[roll+1] + this.rolls[roll+2];
            roll += 1;
        } else if (this.isSpare(roll)) {
            score += 10 + this.rolls[roll+2];
            roll += 2;
        } else {
            score += this.rolls[roll] + this.rolls[roll + 1];
            roll += 2;
        }
    }
    return score
};

BowlingGame.prototype.isSpare = function(roll) {
    return this.rolls[roll] + this.rolls[roll + 1] === 10;
};

BowlingGame.prototype.isStrike = function(roll) {
    return this.rolls[roll] === 10;
};

module.exports = BowlingGame;