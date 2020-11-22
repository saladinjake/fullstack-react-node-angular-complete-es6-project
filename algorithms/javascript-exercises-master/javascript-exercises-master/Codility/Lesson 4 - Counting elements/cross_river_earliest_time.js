// My solution: https://app.codility.com/demo/results/trainingA7B975-VYQ/

/* A small frog wants to get to the other side of a river. The frog is initially
located on one bank of the river (position 0) and wants to get to the opposite
bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given a zero-indexed array A consisting of N integers representing the falling leaves.
A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river.

The frog can cross only when leaves appear at every position across the river from 1 to X
(that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
You may assume that the speed of the current in the river is negligibly small, i.e. the leaves
do not change their positions once they fall in the river.

 */
function solution(X, A) {
    var leaves = {};
    var earliest = 0;

    // Go forwards in time incrementally
    for (let time = 0; time < A.length; time++) {
        // If it is the first time a leaf falls (i.e. key not in dict yet)
        if (!(A[time] in leaves)) {
            leaves[A[time]] = time;  // record time (could be anything really)
            earliest = Math.max(earliest, time);  // update earliest time if record time is later
        }
    }

    // Unable to jump if not all leaves fell
    if (Object.keys(leaves).length < X) {
        return -1;
    }

    return earliest;
}