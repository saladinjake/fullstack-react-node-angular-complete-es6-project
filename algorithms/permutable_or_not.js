A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
/**
 * PermCheck
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * @param {number[]} A is an array (where each element is an integer within the range [1..1,000,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};
    // Why "Math.max.apply" ⤵ – https://bit.ly/31xo0Ss
    const maxValue = Math.max.apply(null, A);

    for (let i = 0; i < N; i++) {
        const currentValue = A[i];

        if (counters[currentValue]) {
            return 0;
        }
        counters[currentValue] = 1;
    }

    let count = 0;
    for (let i = 1; i <= maxValue; i++) {
        count = i;
        if (!counters[i]) {
            break;
        }
    }

    return count === maxValue ? 1 : 0;
}
