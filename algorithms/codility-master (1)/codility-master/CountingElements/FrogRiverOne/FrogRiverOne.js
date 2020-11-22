function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const result = new Map()
    let resultValue = 0

    if(X === 1 && A[0] === 1) return resultValue

    for (let i = 0; i < A.length; i++) {
        if(!result.has(A[i])) {
            result.set(A[i], i)
        }
    }

    if (!result.has(X) || result.size < X) return -1

    for (let value of result) {
        resultValue = value[1]
    }
    return resultValue
}