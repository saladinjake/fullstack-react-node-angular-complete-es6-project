

// 100%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A.length == 0){
        return 0;
    }
    
    var s = A.sort(function(a, b){return a - b});
    for (let i =0 ; i< A.length ; i++){
        if ((s[i]-1 - i) != 0){
            return 0;
        }
    }
    return 1;
}
