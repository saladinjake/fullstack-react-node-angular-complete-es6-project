<body>
    <p>Task name: FrogRiverOne
        <br/>Find the earliest time when a frog can jump to the other side of a river.</p>
    <br/>
    <a href="https://codility.com/programmers/lessons/2">codility.com/programmers/lessons/2</a>
    <br/>
    <p>A small frog wants to get to the other side of a river. The frog is currently located at position 0, and wants to get to position X. Leaves fall from a tree onto the surface of the river.</p>
    <p>You are given a non-empty zero-indexed array A consisting of N integers representing the falling leaves.
    A[K] represents the position where one leaf falls at time K, measured in minutes.</p>
    <p>The goal is to find the earliest time when the frog can jump to the other side of the river.
    The frog can cross only when leaves appear at every position across the river from 1 to X.</p>
    <p>For example, you are given integer X = 5 and array A such that:</p>
    <code>A[0] = 1
        <br/>A[1] = 3
        <br/>A[2] = 1
        <br/>A[3] = 4
        <br/>A[4] = 2
        <br/>A[5] = 3
        <br/>A[6] = 5
        <br/>A[7] = 4
    </code>
    <p>In minute 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.</p>
    <p>Write a function:</p>
    <code>function solution(X, A);</code>
    <p>that, given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.</p>
    <p>If the frog is never able to jump to the other side of the river, the function should return −1. For example, given X = 5 and array A such that:</p>
    <code>A[0] = 1
        <br/>A[1] = 3
        <br/>A[2] = 1
        <br/>A[3] = 4
        <br/>A[4] = 2
        <br/>A[5] = 3
        <br/>A[6] = 5
        <br/>A[7] = 4</code>
    <p>the function should return 6, as explained above.</p>

</body>

function solution(A,X){
  const given = A;
  const initailPos =0; //K
  const destination =X;
  const initialStep = 1;

  const searchResult ={

  }

 //task: The goal is to find the earliest time when the frog can jump to the other side of the river
  for(let i=0;i<A.length;i++){
    //condition: The frog can cross only when leaves appear at every position across the river from 1 to X
    if(A[i] ==X && (initialStep > 0  && (X >= initialStep) ) ){
      initialStep++
      return i
    }else{
      return -1
    }
  }






}

/**
 * FrogRiverOne
 * https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 * @param {number} X integer within the range [1..100,000]
 * @param {number[]} A is an array (where each element is an integer within the range [1..X])
 */
function solution(X, A) {
   //You are given a non-empty zero-indexed array A consisting of N integers representing the falling leaves

    const N = A.length;

    const steps = {};
    let found = false;
    let count = X - 1;

    //The frog is currently located at position 0, and wants to get to position X
    for (var i = 1; i < X; i++) {
        steps[i] = 1;
    }

    for (let i = 0; i < N; i++) {
        if (A[i] in steps && steps[A[i]] === 1) {
            steps[A[i]] = 0;
            --count;
        }
        if (A[i] === X) {
            found = true;
        }
        if (found && count === 0) {
            return i;
        }
    }

    return -1;
}

module.exports = solution;
