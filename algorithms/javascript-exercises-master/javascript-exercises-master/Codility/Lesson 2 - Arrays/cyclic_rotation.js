/* A zero-indexed array A consisting of N integers is given.
Rotation of the array means that each element is shifted right by one index,
and the last element of the array is moved to the first place.
For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]
(elements are shifted right by one index and 6 is moved to the first place).
The goal is to rotate array A K times; that is, each element of A will be
shifted to the right K times.
 */
function solution(array, K) {

    for (i = 1; i <= K; i++) {
        last_element = array.pop();
        array.unshift(last_element);
        // console.log(A)
    }

    return array;
}

console.log(solution([1], 0));