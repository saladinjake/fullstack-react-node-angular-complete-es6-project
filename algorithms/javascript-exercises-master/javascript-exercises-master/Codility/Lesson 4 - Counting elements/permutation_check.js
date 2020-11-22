// My solution: https://app.codility.com/demo/results/trainingXR7UJC-9C7/
/*
A non-empty zero-indexed array A consisting of N integers is given.
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
Write a function that, given a zero-indexed array A, returns 1 if array A
is a permutation and 0 if it is not.
 */

function solution(A) {
    // Sort the array, so that missing element can be found with linear search
    A.sort(function(a, b) { return a - b; });

    // Increment the test elemen next. Return 0 when not in array.
    let next = 1;  // minimum positive integer
    for (i = 0; i < A.length; i++) {
        if (next === A[i]) {
            next++
        } else {
            return 0
        }
    }
    // If no missing element was found
    return 1;
}