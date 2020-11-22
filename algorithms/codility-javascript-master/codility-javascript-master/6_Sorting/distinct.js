/**
 * Distinct
 * https://app.codility.com/programmers/lessons/6-sorting/distinct/
 * @param {number[]} A is an array (where each element is an integer within the range [−1,000,000..1,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};

    for (const currentValue of A) {
        counters[currentValue] = 1;
    }

    return Object.keys(counters).length;
}

module.exports = solution;