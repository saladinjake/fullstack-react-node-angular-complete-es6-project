// My solution: https://app.codility.com/demo/results/trainingP95XJD-6QP/
/*
A zero-indexed array A consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], which means
that exactly one element is missing.
Your goal is to find that missing element.
 */

function solution(A) {
    // Sort the array, so that test element can be found with linear search
    A.sort(function(a, b) { return a - b; });

    // Increment the test element. Return it when not in the array.
    let next = 1;  // minimum positive integer
    let i = 0;
    while (next === A[i]) {
        next++;
        i++;
    }

    return next;
}