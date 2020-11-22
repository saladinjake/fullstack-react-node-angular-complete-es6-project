/**
 * Nesting
 * https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
 * @param {string} S consists only of the characters "(" and/or ")"
 */
function solution(S) {
    const N = S.length;

    if (N === 0) {
        return 1;
    }

    if (N % 2 !== 0) {
        return 0;
    }

    let counter = 0;
    for (let i = 0; i < N; i++) {
        /\(/i.test(S[i]) ? counter++ : counter--;
        if (counter < 0) {
            return 0;
        }
    }

    return counter === 0 ? 1 : 0;
}

module.exports = solution;