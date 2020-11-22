// 44%
function mostCommon(A) {
    
    let B = [];
    const threshold = Math.floor(A.length / 2) + 1;
    let i = 0;
    while (i < A.length) {
        B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1;
        if (B[A[i]] === threshold)  return A[i];
        i++;
    }

    return -1;
}

function solution(A) {
    var count = 0;

    for (i = 0; i < A.length - 1; i++) {
        var first = A.slice(0, i + 1);
        var second = A.slice(i + 1, A.length);

        var elemFirst = mostCommon(first);
        var elemSecond = mostCommon(second);

        if (elemFirst !== undefined && elemSecond !== undefined) {
            if ((elemFirst === elemSecond)) (count++);
        }
    }

    return count;
}