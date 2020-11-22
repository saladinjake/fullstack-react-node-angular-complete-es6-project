
// 100%
function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (H.length < 2 )return H.length;
    let stack = [];
    let count = 0;
    for (let i=0; i<H.length; i++){
        while((stack.length != 0) && (stack[stack.length-1]>H[i])){
            stack.pop();
        }
        if ((stack.length !=0) && (stack[stack.length-1] == H[i])) continue;
        stack.push(H[i]);
        count += 1
    }
    return count;
}