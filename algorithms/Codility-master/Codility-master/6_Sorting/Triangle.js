function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A.length <= 2) return 0;
    
    let sorA = A.sort(function(a, b){return a - b})
    
    for (let i=0; i<sorA.length - 2; i++ ){
        if (sorA[i]+sorA[i + 1]> sorA[i + 2]) return 1;
    }
                
    return 0
}
