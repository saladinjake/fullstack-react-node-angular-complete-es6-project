/**
 * FrogJmp
 * https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 * @param {number} X integer within the range [1..1,000,000,000]
 * @param {number} Y integer within the range [1..1,000,000,000]
 * @param {number} D integer within the range [1..1,000,000,000]
 */
function solution(X, Y, D) {
    if (X === Y) {
        return 0;
    }

    let count = Math.floor(Y / D) - Math.floor(X / D);
    let sum = (count * D) + X;
    if (sum < Y) {
        while (sum <= Y) {
            sum += D;
            count++;
        }
    }

    return count;
}

module.exports = solution;