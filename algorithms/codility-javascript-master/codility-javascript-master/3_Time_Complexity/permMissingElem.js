/**
 * PermMissingElem
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 * @param {number[]} A is an array (where each element is an integer within the range [1..(N + 1)])
 */
function solution(A) {
    const N = A.length;

    if (N === 0) {
        return 1;
    }

    const elements = new Array(N + 1).fill(1);

    for (let i = 0; i < N; i++) {
        elements[A[i] - 1] = -1;
    }

    return elements.indexOf(1) + 1;
}

module.exports = solution;