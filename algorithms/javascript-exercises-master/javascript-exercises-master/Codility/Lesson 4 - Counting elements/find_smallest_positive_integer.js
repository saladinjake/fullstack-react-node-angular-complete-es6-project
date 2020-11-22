// My solution: https://app.codility.com/demo/results/trainingWVJ6V5-UE2/

/*

 */

function solution(A) {
    // Sort the array so that smallest positive element can be found with linear search
    A.sort(function(a, b) { return a - b; });

    // Run through the sorted array and increment smallest if larger
    let smallest = 1;  // minimum positive integer
    for (i = 0; i < A.length; i++) {
        // Do not increment if current element is equal to previous or negative
        // Note: for i = 0; A[i-1] = A[-1] = undefined
        if (A[i] === A[i-1] || A[i] <= 0) {
            continue;
        }

        // If smallest equals current element, increment
        if (smallest === A[i]) {
            smallest++;
            // Return smallest element early otherwise
        } else {
            return smallest;
        }
    }
    // Return smallest element at the end if
    // 1. All numbers were negative.
    // 2. Last numbers of the array were all equal to smallest
    return smallest;
}