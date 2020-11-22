
<body>
    <p>Task name: CountDiv
        <br/>Compute number of integers divisible by k in range [a..b].</p>
    <br/>
    <a href="https://codility.com/programmers/lessons/3">codility.com/programmers/lessons/3</a>
    <br/>
    <p>Write a function:</p>
    <code>function solution(A, B, K);</code>
    <p>
        that, given three integers A, B and K,
        returns the number of integers within the range [A..B] that are divisible by K, i.e.:</p>
    <code>{ i : A ≤ i ≤ B, i mod K = 0 }</code>
    <p>For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.</p>


</body>

</html>
function solution(A,B,K){
  var count =0;
  //task:
  //figureout: what is i ? within the range [A..B]
  for(let i = A; i<=B; i++){
    //conditions: i : A ≤ i ≤ B
    if(i<=A && i<=B && A < B){
      // conditions: that are divisible by K
      if(i % K == 0){
        counter++
      //returns the number of integers within the range [A..B]
      }
    }
  }
  return count; 


}







/**
 * CountDiv
 * https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 * @param {number} A integers within the range [0..2,000,000,000]
 * @param {number} B integers within the range [0..2,000,000,000]
 * @param {number} K integers within the range [1..2,000,000,000]
 */
function solution(A, B, K) {
    let start = A;
    let count = A === 0 ? 1 : 0;

    if (A === B) {
        return A % K ? 0 : 1;
    }

    if (A < K) {
        start = K;
    }

    for (var i = start; i < B + 1; i++) {
        if (i % K === 0) {
            count += parseInt((B - i) / K) + 1;
            break;
        }
    }

    return count;
}

module.exports = solution;
