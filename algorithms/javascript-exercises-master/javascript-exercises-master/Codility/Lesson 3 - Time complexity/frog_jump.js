/* See https://app.codility.com/demo/results/trainingUP6R84-CWY/
A small frog wants to get to the other side of the road. The frog is
currently located at position X and wants to get to a position greater
than or equal to Y. The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.
 */

function solution(posX, posY, jumpDist) {
    diff = posY - posX;
    n_jump = Math.ceil(diff / jumpDist);

    return n_jump;
}

console.log(solution(25, 100, 50));