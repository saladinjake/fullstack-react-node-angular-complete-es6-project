const cyclicRotation = require('../../2_Arrays/cyclicRotation');

describe('cyclicRotation function', () => {
    test('it should return [9, 7, 6, 3, 8] if A = [3, 8, 9, 7, 6] and K = 3', () => {
        const A = [3, 8, 9, 7, 6];
        const K = 3;
        const input = [A, K];
        const output = [9, 7, 6, 3, 8];

        expect(cyclicRotation(...input)).toEqual(output);
    })

    test('it should return [0, 0, 0] if A = [0, 0, 0] and K = 1', () => {
        const A = [0, 0, 0];
        const K = 1;
        const input = [A, K];
        const output = [0, 0, 0];

        expect(cyclicRotation(...input)).toEqual(output);
    })

    test('it should return [1, 2, 3, 4] if A = [1, 2, 3, 4] and K = 4', () => {
        const A = [1, 2, 3, 4];
        const K = 4;
        const input = [A, K];
        const output = [1, 2, 3, 4];

        expect(cyclicRotation(...input)).toEqual(output);
    })
})