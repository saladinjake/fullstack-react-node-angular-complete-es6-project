const minAvgTwoSlice = require('../../5_Prefix_Sums/minAvgTwoSlice');

describe('minAvgTwoSlice function', () => {
    test('it should return 1 if A = [4, 2, 2, 5, 1, 5, 8]', () => {
        const A = [4, 2, 2, 5, 1, 5, 8];
        const input = A;
        const output = 1;

        expect(minAvgTwoSlice(input)).toEqual(output);
    })
})
