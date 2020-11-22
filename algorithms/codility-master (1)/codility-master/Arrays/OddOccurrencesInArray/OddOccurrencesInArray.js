// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a-b)
    const result = []
    for (let i=0; i < A.length; i++) {
        if(result.includes(A[i])) result.pop()
        else result.push(A[i])
    }
    return result[0]
}