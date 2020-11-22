/**
 * OddOccurrencesInArray
 * https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 * @param {number[]} A is an array (where each element is an integer within the range [1..1,000,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};

    for (let i = 0; i < N; i++) {
        if (A[i] in counters && counters[A[i]] === 1) {
            delete counters[A[i]];
            continue;
        }

        counters[A[i]] = 1;
    }

    return Number(Object.keys(counters)[0]);
}

module.exports = solution;