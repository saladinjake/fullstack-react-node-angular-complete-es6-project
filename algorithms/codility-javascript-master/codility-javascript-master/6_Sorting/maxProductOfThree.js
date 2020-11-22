/**
 * MaxProductOfThree
 * https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
 * @param {number[]} A is an array (where each element is an integer within the range [−1,000..1,000])
 */
function solution(A) {
    const N = A.length;
    A.sort((a, b) => a - b);

    return Math.max((A[N - 1] * A[N - 2] * A[N - 3]), (A[0] * A[1] * A[N - 1]));
}

module.exports = solution;