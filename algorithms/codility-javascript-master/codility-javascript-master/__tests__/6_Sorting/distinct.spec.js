const distinct = require('../../6_Sorting/distinct');

describe('distinct function', () => {
    test('it should return 3 if A = [2, 1, 1, 2, 3, 1]', () => {
        const A = [2, 1, 1, 2, 3, 1];
        const input = A;
        const output = 3;

        expect(distinct(input)).toEqual(output);
    })
})
