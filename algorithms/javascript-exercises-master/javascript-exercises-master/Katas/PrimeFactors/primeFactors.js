"use strict";

function PrimeFactors(n) {

    const factors = [];

    for (let divisor = 2; n > 1; divisor++) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        }
    }

    return factors
}

module.exports = PrimeFactors;