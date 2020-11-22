const numberOfDiscIntersections = require('../../6_Sorting/numberOfDiscIntersections');

describe('numberOfDiscIntersections function', () => {
    test('it should return 60 if A = [1, 5, 2, 1, 4, 0]', () => {
        const A = [1, 5, 2, 1, 4, 0];
        const input = A;
        const output = 60;

        expect(numberOfDiscIntersections(input)).toEqual(output);
    })
})
