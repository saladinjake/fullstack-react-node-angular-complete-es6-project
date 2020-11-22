
function countSquares(a, b) {

    if (a < 0) {
        a = 0;
    }
    if (b < 0 || a > b) {
        return 0
    }

    // Take square roots and
    // 1. Round up sqrt(a) to consider squares after a.
    // 2. Round down sqrt(b) to consider squares before b.
    const sqrt_a = Math.ceil(Math.sqrt(a));
    const sqrt_b = Math.floor(Math.sqrt(b));
    return sqrt_b - sqrt_a + 1;
}

const a = 4;
const b = 4;
console.log(`There are ${countSquares(a, b)} perfect squares between ${a} and ${b}.`);