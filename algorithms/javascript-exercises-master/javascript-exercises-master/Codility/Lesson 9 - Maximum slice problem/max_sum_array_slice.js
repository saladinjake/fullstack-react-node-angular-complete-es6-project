// My solution: https://app.codility.com/demo/results/trainingU9GRQ7-HVQ/
// Goal: given an array A consisting of N integers, returns the
// maximum sum of any slice of A.

function solution(A) {
    // Base case
    if (A.length === 1) {
        return A[0]
    }

    let maxSum = A[0]; // first max sum must be the first element
    let maxSumList = [maxSum]; // list of of successive max sums

    // Scan the array for each element
    for (let i = 1; i < A.length; i++) {
        // Next maximum sum is either current element or
        // sum of current element + previous max sum
        maxSumList[i] = Math.max(maxSumList[i-1] + A[i], A[i]);
        // Update overall maximum sum of a slice if larger
        maxSum = Math.max(maxSumList[i], maxSum);
    }
    return maxSum;
}