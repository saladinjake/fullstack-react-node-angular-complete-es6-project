const permMissingElem = require('../../3_Time_Complexity/permMissingElem');

describe('frogJmp function', () => {
    test('it should return 4 if A = [2, 3, 1, 5]', () => {
        const A = [2, 3, 1, 5];
        const input = A;
        const output = 4;

        expect(permMissingElem(input)).toEqual(output);
    })

    test('it should return 1 if A = []', () => {
        const A = [];
        const input = A;
        const output = 1;

        expect(permMissingElem(input)).toEqual(output);
    })

    test('it should return 2 if A = [1]', () => {
        const A = [1];
        const input = A;
        const output = 2;

        expect(permMissingElem(input)).toEqual(output);
    })
})