// 100%
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length == 0) return 1;
    let pairs = {'(':')'};
    let stack = [];
    for (let i=0; i< S.length; i ++){
        
        if (S.charAt(i) in pairs){
            
            stack.push(pairs[S.charAt(i)]);
        }
        
        if (stack.length != 0){
            if ((stack[stack.length-1]) == S.charAt(i)){
                stack.pop();
            }
        }else{
            return 0;
        }
    }
    if (stack.length == 0) return 1
    return 0;
        
}