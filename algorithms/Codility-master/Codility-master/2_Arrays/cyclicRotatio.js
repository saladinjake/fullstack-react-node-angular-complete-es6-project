
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(A.length <= 1){
        return A;
    }
    var temp;
    for (let i = 0; i < K; i++) {
        temp = A.pop();
        A.unshift(temp);
    }
    return A;
}
