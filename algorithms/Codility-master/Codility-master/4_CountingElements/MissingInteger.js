
// 77%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n = A.length;
    if (n == 0){
        return 1;
    }
    var counts = new Array(n);
    counts.fill(0);
    var neg = 0;
    let i = 0;
    while (A[i]){
        const el = A[i];
        if ((el > 0 == true)){
            if (el <= n){
                counts[el-1] += 1;
            }}
            else{
                neg += 1;
            }
        i++;
    }
    
    if (neg == n){
        return 1;   
    }
    for (i = 0; i< n ; i++){
        if (counts[i] == 0){
            return i+1;
        }
    }      
    return n+1;       
}

// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length
    let arr = new Array(len)
    let curMax = 0;
    
    for(let i=0; i<len;i++) {
        let idx = A[i] - 1
        arr[idx] = arr[idx] || 0
        arr[idx]++
        
        if (curMax < A[i]) {
            curMax = A[i]
        }
    }
    
    for(let j=0;j<len;j++) {
        if(arr[j] === undefined) return j+1
    }
    
    return curMax+1
}