

// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0){
        return 1;
    }
    if ((A.length == 1) && (A[0] != 1)){
        return 1;
    }
    
    let n = A.length + 1;
    var nums = Math.floor(((n+1)/2)*n);
    
    for(let i=0; i<A.length ; i++){
        nums -= A[i];
    }
        
    return nums;
}