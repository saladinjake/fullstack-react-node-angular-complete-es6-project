const countDiv = require('../../5_Prefix_Sums/countDiv');

describe('countDiv function', () => {
    test('it should return 3 if A = 6, B = 11 and K = 2', () => {
        const A = 6;
        const B = 11;
        const K = 2;
        const input = [A, B, K];
        const output = 3;

        expect(countDiv(...input)).toEqual(output);
    })
})
