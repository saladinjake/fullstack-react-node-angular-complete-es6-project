// 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 2) return 0;
    let min_price = Number.MAX_VALUE
    let max_profit = 0;
    for (let i=0; i< A.length; i++){
        min_price = Math.min(min_price, A[i]);
        max_profit = Math.max(max_profit, A[i] - min_price);
    }
    return max_profit;
}