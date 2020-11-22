

// 81%
function solutionB(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0){
        return -1;
    }
    if ((A.length == 1) && (X != 1)){
        return -1;
    }
    
    var nums = [];
    
    for(let i=0; i< A.length ; i++){
        if( typeof nums[A[i]] == 'undefined'){
            nums[A[i]] = i ;
        }
    }

    if (nums.length <= X) {
        return -1;
    }

    if (!(-1 in nums.slice(1))){
        
        res = Math.floor(Math.max(...nums));
        return res;
    }
    
    return -1;
}

// 100%
function solution(X, A) {

    var leaves = [];
    var res = -1;

    for (let i = 0; i < A.length; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if (leaves.length <= X) {
        return -1;
    }

    for (let i = 1; i <= X; i++) {
        if (typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }

    return res;

}