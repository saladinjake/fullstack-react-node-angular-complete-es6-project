function(A){
  const consecutiveCars = A;
  P = 0;
  Q = 1;
  //The goal is to count passing cars.
  for(var i =0; i<consecutiveCars.length;i++){

  }
}
<body>
    <p>Task name: PassingCars
        <br/>Count the number of passing cars on the road.</p>
    <br/>
    <a href="https://codility.com/programmers/lessons/3">codility.com/programmers/lessons/3</a>
    <br/>
    <p>A non-empty zero-indexed array A consisting of N integers is given.
    The consecutive elements of array A represent consecutive cars on a road.</p>
    <p>Array A contains only 0s and/or 1s:</p>
    <code>0 represents a car traveling east,
        <br/>1 represents a car traveling west.</code>
    <p>The goal is to count passing cars. We say that a pair of cars (P, Q),
    where 0 ≤ P &lt; Q &lt; N, is passing when P is traveling to the east and Q is traveling to the west.</p>
    <p>For example, consider array A such that:</p>
    <code>A[0] = 0
        <br/>A[1] = 1
        <br/>A[2] = 0
        <br/>A[3] = 1
        <br/>A[4] = 1</code>
    <p>We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).</p>
    <p>Write a function:</p>
    <code>function solution(A);</code>
    <p>that, given a non-empty zero-indexed array A of N integers, returns the number of passing cars. The function should return −1 if the number of passing cars exceeds 1,000,000,000.</p>
    <p>For example, given:</p>
    <code>A[0] = 0
        <br/>A[1] = 1
        <br/>A[2] = 0
        <br/>A[3] = 1
        <br/>A[4] = 1</code>
    <p>the function should return 5, as explained above.</p>


</body>

</html>

/**
 * PassingCars
 * https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * @param {number[]} A is an array (where each element is an integer that can have one of the following values: 0, 1)
 */
function solution(A) {
    const N = A.length;
    let countPairs = 0;

    let totalWest = 0; // Q
    for (let i = 0; i < N; i++) {
        totalWest += A[i];
    }
    let totalEast = N - totalWest;

    for (let i = 0; i < N; i++) {
        currentValue = A[i];
        if (currentValue === 1) {
            totalWest--;
            continue;
        }

        countPairs += totalWest;

        if (countPairs > 10e8) {
            return -1;
        }
    }

    return countPairs;
}

module.exports = solution;
