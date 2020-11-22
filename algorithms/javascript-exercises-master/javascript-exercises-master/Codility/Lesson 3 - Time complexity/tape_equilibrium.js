// My solution: https://app.codility.com/demo/results/trainingXBU5UC-XB2/
// Note: intializing an array and fill is faster than dynamically create one.
/*
A non-empty zero-indexed array A consisting of N integers is given.
Array A represents numbers on a tape.
Any integer P, such that 0 < P < N, splits this tape into two non-empty parts:
 A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
The difference between the two parts is the value of:
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
In other words, it is the absolute difference between the sum of the first
part and the sum of the second part.
Write a function that, given a non-empty zero-indexed array A of N integers,
 returns the minimal difference that can be achieved.
 */

function solution(A) {
    // Initialize left and right sum arrays
    let left = new Array(A.length-1);
    left[0] = A[0];
    let right = new Array(A.length-1);
    right[right.length-1] = A[A.length-1];

    // Do a bidirectional run on the array, adding and summing elements as they come
    for (let idx = 1; idx < left.length; idx++) {
        left[idx] = left[idx-1] + A[idx];  // add elements to the right ==> build from the left
        right[right.length-idx-1] = right[right.length-idx] + A[A.length-idx-1];  // add elements to the left ==> build from the right
    }

    // Compute diff pairs and find the minimum
    let min_diff = Math.abs(left[0] - right[0]);
    for (let idx = 1; idx < left.length; idx++) {
        let diff = Math.abs(left[idx] - right[idx]);
        min_diff = Math.min(min_diff, diff);
    }
    return min_diff;
}

array = [1, 2, 3, 4, 5, 6];
console.log(solution(array));