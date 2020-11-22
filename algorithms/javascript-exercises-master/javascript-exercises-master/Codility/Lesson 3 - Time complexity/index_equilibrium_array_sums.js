
function solution(A) {
    // Initialize left and right sum arrays
    let left = [0];
    let right = [0];

    // Summing elements as they come from the left
    // idx is the index of the tape, not included in the sum
    // when idx = 0, sum = 0 and when idx = N-1, sum also = 0
    for (let idx = 1; idx < A.length; idx++) {
        left.push(left[idx-1] + A[idx-1]);
    }

    // Sum elements as they come from the right (using reverse() twice)
    A.reverse();
    for (let idx = 1; idx < A.length; idx++) {
        right.push(right[idx-1] + A[idx-1]);
    }
    right.reverse();

    console.log(`left sums: ${left}`);
    console.log(`right sums: ${right}`);
    equilibrium_indexes = [];
    for (let idx = 0; idx < left.length; idx++) {
        if (left[idx] === right[idx]) {
            equilibrium_indexes.push(idx);
        }
    }
    return equilibrium_indexes;
}


input = [-1, 3, -4, 5, 1, -6, 2, 1];
output = solution(input);
console.log(`equilibrium indexes: ${output}`);