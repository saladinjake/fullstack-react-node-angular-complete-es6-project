function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leftCount = 0, rightCount = 0, difference = 0
    const leftSumArray = [], rightSumArray = [], result = []
    const length = A.length - 1
    for (let i = 0; i < length; i++) {
        leftSumArray.push(leftCount += A[i])
        rightSumArray.push(rightCount += A[length - i])
    }
    const reverseRightArray = rightSumArray.reverse()
    for (let i = 0; i < leftSumArray.length; i++) {
        result.push(Math.abs(leftSumArray[i] - reverseRightArray[i]))
    }
    return Math.min(...result)
}