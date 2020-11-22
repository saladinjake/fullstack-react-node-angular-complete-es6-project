/**
 * Dominator
 * https://app.codility.com/programmers/lessons/8-leader/dominator/
 * @param {number[]} A is an array (where each element is an integer within the range [−2,147,483,648..2,147,483,647])
 */
function solution(A) {
    const N = A.length;
    const sorted = [...A].sort((a, b) => a - b);
    const candidate = sorted[Math.floor(N / 2)];
    let count = 0;

    for (let i = 0; i < N; i++) {
        if (sorted[i] === candidate) {
            count++;
        }
    }

    if (count > N / 2) {
        for (let i = 0; i < N; i++) {
            if (A[i] === candidate) {
                return i;
            }
        }
    }

    return -1;
}

module.exports = solution;