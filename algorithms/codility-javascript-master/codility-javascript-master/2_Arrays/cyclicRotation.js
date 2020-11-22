/**
 * CyclicRotation
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 * @param {number[]} A is an array (where each element is an integer within the range [−1,000..1,000])
 * @param {number} K is integer within the range [0..100]
 */
function solution(A, K) {
    const N = A.length;
    const nbOfRotation = K % N;

    if (nbOfRotation === 0) {
        return A;
    }

    const start = A.slice(-nbOfRotation);
    const end = A.slice(0, N - nbOfRotation);

    return start.concat(end);
}

module.exports = solution;