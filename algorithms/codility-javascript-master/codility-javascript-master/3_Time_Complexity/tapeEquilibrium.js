/**
 * TapeEquilibrium
 * https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 * @param {number} A is an array (where each element is an integer within the range [−1,000..1,000])
 */
function solution(A) {
    const N = A.length;
    let sumStart = A[0];
    let sumEnd = A.reduce((acc, cur) => acc + cur, -sumStart);
    let min = Math.abs(sumStart - sumEnd);

    for (let i = 1; i < N - 1; i++) {
        sumStart += A[i];
        sumEnd = sumEnd - A[i];
        const newMin = Math.abs(sumStart - sumEnd);
        if (newMin < min) {
            min = newMin;
        }
    }
    
    return min;
}

module.exports = solution;