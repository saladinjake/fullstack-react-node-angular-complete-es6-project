const oddOccurrencesInArray = require('../../2_Arrays/oddOccurrencesInArray');

describe('oddOccurrencesInArray function', () => {
    test('it should return 1 if A = [1]', () => {
        const A = [1];
        const input = A;
        const output = 1;

        expect(oddOccurrencesInArray(input)).toEqual(output);
    })

    test('it should return 2 if A = [1, 2, 1]', () => {
        const A = [1, 2, 1];
        const input = A;
        const output = 2;

        expect(oddOccurrencesInArray(input)).toEqual(output);
    })

    test('it should return 7 if A = [9, 3, 9, 3, 9, 7, 9]', () => {
        const A = [9, 3, 9, 3, 9, 7, 9];
        const input = A;
        const output = 7;

        expect(oddOccurrencesInArray(input)).toEqual(output);
    })
})