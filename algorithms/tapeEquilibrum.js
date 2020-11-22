// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
//
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
//
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
//
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
//
// For example, consider array A such that:
//
// A[0] = 3
// A[1] = 1
// A[2] = 2
// A[3] = 4
// A[4] = 3
// We can split this tape in four places:
//
// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:
//
// function solution(A);
//
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
//
// For example, given:
//
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [2..100,000]; each element of array A is an integer within the range [−1,000..1,000].






// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const given = A;
    // 0<P<N ? what is p
    //since p > 0 and p< N
    //then p = range(1, N-1) where N = A.length

    let pmin = 1;
    let pmax = given.length -1;
    //split tape in two
    let halfLength = Math.ceil(given.length/2)

    // let firstArr = given.splice(0,halfLength);
    // let secArr = given.splice(-halfLength)

    let sum1 = parseInt(given[0]); //initial sum left is given as this
    let sum2 =0; //set initially as zero
    let taken = [].concat(A);
    let absDiff = [1000000000000000000]
    for(pmin =1; pmin< pmax;pmin++){
        // console.log(given[pmin])
         // console.log(sum1 +"sum")

          //find an array with out the indexed sum1
        let newArr = taken.shift();
        // console.log(taken + "is here")
        sum2 = eval(taken.join("+"));
         // console.log(sum2 + "is here")
        //now lets get thhe absolute diff
        // absDiff.push(Math.abs(sum1 -sum2))
        let diff = Math.abs(sum1 - sum2);
        if(absDiff[0] ==1000000000000000000){
          absDiff[0] = diff;

        }else if(diff<absDiff ){
          absDiff[0] =diff
        }

        // absDiff.push(Math.abs(sum1 - sum2))
        // console.log(absDiff)

        sum1 += given[pmin];

    }

    // let min = absDiff.sort(function(a,b){
    //     return a -b
    // })

    // return min[0]
    return absDiff[0]

    /// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

    // let absoluteDiff = Math.abs(sum1 -sum2)
    // return absoluteDiff

}
















A = []
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3

function solution(A) {
  let sum = A.reduce((total, value) => total + value, 0)
  let min = Number.POSITIVE_INFINITY
  let cumulativeSum = 0
  for (let i = 0; i < A.length - 1; ++i) {
    cumulativeSum = cumulativeSum + A[i]
    sum = sum - A[i]
    diff = Math.abs(sum - cumulativeSum)
    if (diff < min) {
      min = diff
    }
  }
  return min
}

console.log(solution(A))
