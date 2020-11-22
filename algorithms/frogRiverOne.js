// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let givenPos =0;
    let givenDest = X;
    givenDest = X+ 1
    let given = A // N integers representing fallen leaves[...]

    let steps = new Array(given.length)
    let counter = 1
    for(let i =0;i< given.length;i++){
        steps[i] = given[i]
        if(i == givenDest ){
            //console.log(steps[i])
            return i
        }

    }

    console.log(steps)

    //A[k] iterates = positions where leaf falls



}
