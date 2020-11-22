const tapeEquilibrium = require('../../3_Time_Complexity/tapeEquilibrium');

describe('tapeEquilibrium function', () => {
    test('it should return 1 if A = [3, 1, 2, 4, 3]', () => {
        const A = [3, 1, 2, 4, 3];
        const input = A;
        const output = 1;

        expect(tapeEquilibrium(input)).toEqual(output);
    })
})