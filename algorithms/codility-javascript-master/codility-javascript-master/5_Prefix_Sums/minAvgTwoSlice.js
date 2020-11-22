/**
 * MinAvgTwoSlice
 * https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 * @param {number[]} A is an array (where each element is an integer within the range [−10,000..10,000])
 */
function solution(A) {
    const N = A.length;
    let minAvg = Number.MAX_SAFE_INTEGER;
    let idx = -1;

    for (let i = 0; i < N - 1; i++) {
        let sliceLenTwo = 0;
        let sliceLenThree = 0;

        const P = i;
        let Q = P + 1;

        sliceLenTwo = parseFloat((A[P] + A[Q]) / 2);
        Q = P + 2;
        sliceLenThree = parseFloat((A[P] + A[P + 1] + A[Q]) / 3);
        
        let minValue = sliceLenTwo;
        if (!isNaN(sliceLenThree)) {
            minValue = Math.min(sliceLenTwo, sliceLenThree);
        }
        
        if (minValue < minAvg) {
            minAvg = minValue;
            idx = i;
        }
    }

    return idx;
}

module.exports = solution;