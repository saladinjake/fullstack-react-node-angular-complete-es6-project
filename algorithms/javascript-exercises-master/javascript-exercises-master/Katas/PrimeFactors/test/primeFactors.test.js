"use strict";

const should = require('chai').should();
const PrimeFactors = require("../primeFactors");

// Test collection
describe('PrimeFactors()', function() {

    it('should return the prime factors of 1', function () {
        PrimeFactors(1).length.should.equal(0);
    });

    it('should return the prime factors of 2', function () {
        PrimeFactors(2).should.have.members([2]);
    });

    it('should return the prime factors of 3', function () {
        PrimeFactors(3).should.have.members([3]);
    });

    it('should return the prime factors of 4', function () {
        PrimeFactors(4).should.have.members([2, 2]);
    });

    it('should return the prime factors of 6', function () {
        PrimeFactors(6).should.have.members([2, 3]);
    });

    it('should return the prime factors of 8', function () {
        PrimeFactors(8).should.have.members([2, 2, 2]);
    });

    it('should return the prime factors of 9', function () {
        PrimeFactors(9).should.have.members([3, 3]);
    });

    it('should return the prime factors of 100', function () {
        PrimeFactors(100).should.have.members([2, 2, 5, 5]);
    });

    it('should return the prime factors of a product of prime numbers', function () {
        const product = 2 * 2 * 2 * 3 * 3 * 7 * 11;
        PrimeFactors(product).should.have.members([2, 2, 2, 3, 3, 7, 11]);
    });
});