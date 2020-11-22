
function solution(A){
   let given = A; //A permutation is a sequence containing each element from 1 to N once, and only once
    const sorted = given.sort(function(a,b){
     return a > b;
   })
   let isPermutable = false;
   //instance given A[0] - A[2] means a loop thru the given arrays
   for(let i = 0 ; i< given.length; i++){
     //now look for the Task : The goal is to check whether array A is a permutation
     //result: returns 1 if array A is a permutation and 0 if it is not
     if(parseInt(sorted[i] +1) == parseInt(sorted[i+1]) ){
          //and follow the conditions that apply
          isPermutable = true
     }else{
          isPermutable = false
     }
   }
   if(!isPermutable){
      return 0;
   }else{
     return 1
   }
}
<body>
    <p>Task name: PermCheck
        <br/>Check whether array A is a permutation.</p>
    <br/>
    <a href="https://codility.com/programmers/lessons/2">codility.com/programmers/lessons/2</a>
    <br/>
    <p>A non-empty zero-indexed array A consisting of N integers is given.</p>
    <p>A permutation is a sequence containing each element from 1 to N once, and only once.</p>
    <p>For example, array A such that:</p>
    <code>A[0] = 4
        <br/>A[1] = 1
        <br/>A[2] = 3
        <br/>A[3] = 2</code>
    <p>is a permutation, but array A such that:</p>
    <code>A[0] = 4
        <br/>A[1] = 1
        <br/>A[2] = 3</code>
    <p>is not a permutation, because value 2 is missing. The goal is to check whether array A is a permutation.</p>
    <p>Write a function:</p>
    <code>int solution(int A[], int N);</code>
    <p>that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.</p>
    <p>For example, given array A such that:</p>
    <code>A[0] = 4
        <br/>A[1] = 1
        <br/>A[2] = 3
        <br/>A[3] = 2</code>
    <p>the function should return 1.</p>
    <p>Given array A such that:</p>
    <code>A[0] = 4
        <br/>A[1] = 1
        <br/>A[2] = 3</code>
    <p>the function should return 0.</p>

</body>







/**
 * PermCheck
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * @param {number[]} A is an array (where each element is an integer within the range [1..1,000,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};
    // Why "Math.max.apply" ⤵ – https://bit.ly/31xo0Ss
    const maxValue = Math.max.apply(null, A);

    for (let i = 0; i < N; i++) {
        const currentValue = A[i];

        if (counters[currentValue]) {
            return 0;
        }
        counters[currentValue] = 1;
    }

    let count = 0;
    for (let i = 1; i <= maxValue; i++) {
        count = i;
        if (!counters[i]) {
            break;
        }
    }

    return count === maxValue ? 1 : 0;
}

module.exports = solution;
