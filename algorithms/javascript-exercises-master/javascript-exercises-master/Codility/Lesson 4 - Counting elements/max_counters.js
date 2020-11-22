// My solution: https://app.codility.com/demo/results/training944954-PC2/

/* You are given N counters, initially set to 0, and you have two possible operations on them:
increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:
if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:
    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Note for optimization: no counter can have a value less than the last max...
 */
function solution(N, A) {
    // Initialize all counters in a dict
    let counters = {}
    for (i = 1; i <= N; i++) {
        counters[i] = 0;
    }

    // Run through the given operations
    let max_counter = 0;
    A.forEach(function(operation) {
        // If increment operation: increment counter and update max counter smaller than current counter
        if (operation < N+1) {
            counters[operation]++;
            max_counter = Math.max(max_counter, counters[operation]);
        }
        // If set maximum value operation to all counters
        else {
            for (var key in counters) {
                counters[key] = max_counter;
            }
        }
    });

    // Returns an array of a given object's own enumerable property values
    // in the same order as that provided by a for...in loop
    return Object.values(counters)
}