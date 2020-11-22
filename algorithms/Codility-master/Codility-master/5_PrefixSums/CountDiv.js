
// 100%

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var res ;
    if( A % K == 0){
        res = 1
    }else{
        res = 0
    }
    return Math.floor(B/K) - Math.floor(A/K) + res
}
