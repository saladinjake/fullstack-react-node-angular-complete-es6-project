// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if( A.length == 0){
        return 0;
    }else{
        let B = A.sort((a, b) => b - a);
        let x = Math.max((B[0] * B[B.length-2] * B[B.length-1]) ,( B[0] * B[1] * B[2]));
        return x;
    }
}
