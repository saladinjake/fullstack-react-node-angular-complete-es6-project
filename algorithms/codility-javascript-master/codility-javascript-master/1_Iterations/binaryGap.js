/**
 * BinaryGap
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 * @param {number} N is an integer within the range [1..2,147,483,647]
 */
function solution(N) {
    const decimalToBinary = decimal => (decimal >>> 0).toString(2);

    const result = Math.max(
        ...decimalToBinary(N)
        .split('1')
        .map(cur => cur.length)
        .slice(1, -1)
    );

    return isFinite(result) ? result : 0;
}

module.exports = solution;