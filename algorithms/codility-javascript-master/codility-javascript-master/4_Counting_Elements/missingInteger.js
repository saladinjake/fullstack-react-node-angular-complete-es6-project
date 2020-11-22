
<body>
    <p>Task name: MissingInteger
        <br/>Find the minimal positive integer not occurring in a given sequence.</p>
    <br/>
    <a href="https://codility.com/programmers/lessons/2">codility.com/programmers/lessons/2</a>
    <br/>
    <p>Write a function:</p>
    <code>function solution(A);</code>
    <p>
        that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer that does not occur in A.</p>
    <p>For example, given:</p>
    <code>A[0] = 1
        <br/>A[1] = 3
        <br/>A[2] = 6
        <br/>A[3] = 4
        <br/>A[4] = 1
        <br/>A[5] = 2
    </code>
    <p>the function should return 5.</p>

</body>

function solution(A){
  //that, given a non-empty zero-indexed array A of N integers
   const given = A;


    //task :returns //returns the minimal positive integer that does not occur in A

}

/**
 * MissingInteger
 * https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 * @param {number[]} A is an array (where each element is an integer within the range [−1,000,000..1,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};
    let maxValue = 1;

    for (let i = 0; i < N; i++) {
        const currentValue = A[i];

        if (currentValue > 0) {
            if (maxValue < currentValue) {
                maxValue = currentValue;
            }
            counters[currentValue] ? counters[currentValue]++ : counters[currentValue] = 1;
        }
    }

    for (let i = 1; i <= maxValue; i++) {
        if (!counters[i]) {
            return i;
        }
    }

    return maxValue + 1;
}

module.exports = solution;
