// 100%


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0){
        return 0;
    }else{
        let map = new Set(A);
        return map.size;
    }
}
