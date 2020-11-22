const triangle = require('../../6_Sorting/triangle');

describe('triangle function', () => {
    test('it should return 1 if A = [10, 2, 5, 1, 8, 20]', () => {
        const A = [10, 2, 5, 1, 8, 20];
        const input = A;
        const output = 1;

        expect(triangle(input)).toEqual(output);
    })

    test('it should return 0 if A = [10, 2, 5, 1]', () => {
        const A = [10, 2, 5, 1];
        const input = A;
        const output = 0;

        expect(triangle(input)).toEqual(output);
    })
})
