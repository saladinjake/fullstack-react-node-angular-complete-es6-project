// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n =  A.length;
    if ( n == 0){
        return -1;
    }
    
    var count = 0;
    var east = 0;
    let i;
    for ( i = 0; i<n; i++){
        if (A[i] == 0){
            east += 1;
        }
        if (A[i] == 1){
            count += east;
        }
        if (count > 1e9){
            return -1;
        }
    }
    return count;
}
