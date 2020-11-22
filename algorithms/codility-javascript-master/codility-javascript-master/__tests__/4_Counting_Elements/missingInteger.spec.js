const missingInteger = require('../../4_Counting_Elements/missingInteger');

describe('missingInteger function', () => {
    test('it should return 5 if A = [1, 3, 6, 4, 1, 2]', () => {
        const A = [1, 3, 6, 4, 1, 2];
        const input = A;
        const output = 5;

        expect(missingInteger(input)).toEqual(output);
    })

    test('it should return 4 if A = [1, 2, 3]', () => {
        const A = [1, 2, 3];
        const input = A;
        const output = 4;

        expect(missingInteger(input)).toEqual(output);
    })

    test('it should return 1 if A = [-1, -3]', () => {
        const A = [-1, -3];
        const input = A;
        const output = 1;

        expect(missingInteger(input)).toEqual(output);
    })
})
