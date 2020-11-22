//  https://app.codility.com/demo/results/trainingZHQ9NA-H62/
// Explanation: https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/
// ==> There must be 2-element and/or 3-element slices having the global minimum average

/* A non-empty zero-indexed array A consisting of N integers is given. A pair of integers
(P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains
at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q]
divided by the length of the slice. To be precise, the average equals
(A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:
slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.
*/

function solution(A) {
    let avg_two = [];
    let avg_three = [];
    let min_avg = Infinity;
    let min_avg_index = -1;

    for (let i = 1; i < A.length; i++) {
        avg_two[i] = (A[i] + A[i-1])/2;
        if (avg_two[i] < min_avg) {
            min_avg = avg_two[i];
            min_avg_index = i-1;
        }
        if (i > 1) {
            avg_three[i] = (A[i] + A[i-1] + A[i-2])/3;
            if (avg_three[i] < min_avg) {
                min_avg = avg_three[i];
                min_avg_index = i-2;
            }
        }
    }
    return min_avg_index;
}