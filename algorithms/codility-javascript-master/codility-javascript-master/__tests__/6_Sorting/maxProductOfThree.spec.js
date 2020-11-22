const maxProductOfThree = require('../../6_Sorting/maxProductOfThree');

describe('maxProductOfThree function', () => {
    test('it should return 60 if A = [-3, 1, 2, -2, 5, 6]', () => {
        const A = [-3, 1, 2, -2, 5, 6];
        const input = A;
        const output = 60;

        expect(maxProductOfThree(input)).toEqual(output);
    })
})
