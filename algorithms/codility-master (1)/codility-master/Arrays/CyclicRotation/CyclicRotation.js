// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    if(K === A.length) return A
    else {
        const step = K % A.length
        const leftArray = A.slice(0, A.length - step)
        const rightArray = A.slice(A.length - step)
        return [...rightArray, ...leftArray]
    }
}