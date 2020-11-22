

// 100 %
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (Y <= X){
        return 0
    }
    let dis = Y - X
    if  (dis % D == 0){
        return Math.floor(dis / D)
    }
    else{
       return Math.floor(dis / D + 1)
    }
}
