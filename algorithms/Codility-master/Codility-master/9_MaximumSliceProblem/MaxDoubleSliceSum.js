// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let L_slice = 0
    let R_slice = 0;
    let count = 0;
    for (let Z=3; Z < A.length; Z++){
        L_slice = Math.max(0, A[Z-2] + L_slice);
        R_slice = Math.max(L_slice, A[Z-1] + R_slice);
        count = Math.max(R_slice, count);
    }
     return count;
}