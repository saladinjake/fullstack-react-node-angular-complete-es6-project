// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0) return 0;
    if (A.length == 0) return A[0];
    let count = 0;
    let max_slice = -Number.MAX_VALUE;
    for (let i=0; i< A.length; i++){
        count = Math.max(A[i], count + A[i]);
        max_slice = Math.max(max_slice, count);
    }
    return Math.floor(max_slice);
}