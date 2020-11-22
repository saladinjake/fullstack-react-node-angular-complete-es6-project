
// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length <=1){
        return 0;
    }
    if (A.length == 2){
        return Math.abs(A[1] - A[0]);
    }
    
    let sum_l = A[0];
    let sum_r = A.reduce((a, b) => a + b) - A[0]
    let dis = Math.abs(sum_l - sum_r);
    
    for (let i=1; i < (A.length - 1); i++){
        sum_l += A[i];
        sum_r -= A[i];
        dis = Math.min(dis, Math.abs(sum_l - sum_r));
    }
    return dis;   
}
