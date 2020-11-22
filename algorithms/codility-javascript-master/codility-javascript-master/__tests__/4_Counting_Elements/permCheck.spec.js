const permCheck = require('../../4_Counting_Elements/permCheck');

describe('permCheck function', () => {
    test('it should return 1 if A = [4, 1, 3, 2]', () => {
        const A = [4, 1, 3, 2];
        const input = A;
        const output = 1;

        expect(permCheck(input)).toEqual(output);
    })

    test('it should return 0 if A = [4, 1, 3]', () => {
        const A = [4, 1, 3];
        const input = A;
        const output = 0;

        expect(permCheck(input)).toEqual(output);
    })
})
