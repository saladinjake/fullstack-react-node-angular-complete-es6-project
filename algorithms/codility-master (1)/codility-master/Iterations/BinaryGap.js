// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    const preparedArray = N.toString(2).split('1').map(item => item.length)
    return Math.max(...preparedArray.slice(0, preparedArray.length - 1))
}
