/**
 * Triangle
 * https://app.codility.com/programmers/lessons/6-sorting/triangle/
 * @param {number[]} A is an array (where each element is an integer within the range [−2,147,483,648..2,147,483,647])
 */
function solution(A) {
    const N = A.length;
    const sides = [];

    for (let i = 0; i < N; i++) {
        const side = {idx: i, element: A[i]}
        sides.push(side);
    }

    sides.sort(({element: elemA}, {element: elemB}) => {
        if (elemA < elemB) {
            return 1;
        } else if (elemA > elemB) {
            return -1;
        } else {
            return 0;
        }
    })

    for (let i = 0; i < N - 2; i++) {
        const P = sides[i].element;
        const Q = sides[i + 1].element;
        const R = sides[i + 2].element;

        if (P + Q > R && Q + R > P && R + P > Q) {
            return 1;
        }
    }

    return 0;
}

module.exports = solution;