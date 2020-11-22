function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a - b)

    const setA = new Set(A)
    const uniqueArray = [...setA]
    const positiveArray = uniqueArray.filter(item => item > 0)

    if (A[0] > 1
        || positiveArray.length === 0
        || (positiveArray.length === 1 && positiveArray[0] !== 1)) {
        return 1
    }
    for (let i = 0; i < positiveArray.length; i++) {
        if (positiveArray[i] + 1 !== positiveArray[i + 1]) {
            return positiveArray[i] + 1
        }
    }
}