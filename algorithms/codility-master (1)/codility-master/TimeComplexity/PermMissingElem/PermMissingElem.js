// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a - b)
    if(A[0] !== 1) return 1
    for(let i = 0; i < A.length; i++) {
        if (A[i+1] - A[i] !== 1) return A[i] + 1
    }
}