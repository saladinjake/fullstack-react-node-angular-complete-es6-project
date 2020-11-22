const binaryGap = require('../../1_Iterations/binaryGap');

describe('binaryGap function', () => {
    test('it should return 2 if N = 9', () => {
        const input = 9;
        const output = 2;

        expect(binaryGap(input)).toEqual(output);
    })

    test('it should return 4 if N = 529', () => {
        const input = 529;
        const output = 4;

        expect(binaryGap(input)).toEqual(output);
    })

    test('it should return 1 if N = 20', () => {
        const input = 20;
        const output = 1;

        expect(binaryGap(input)).toEqual(output);
    })

    test('it should return 0 if N = 15', () => {
        const input = 15;
        const output = 0;

        expect(binaryGap(input)).toEqual(output);
    })

    test('it should return 0 if N = 32', () => {
        const input = 32;
        const output = 0;

        expect(binaryGap(input)).toEqual(output);
    })

    test('it should return 5 if N = 1041', () => {
        const input = 1041;
        const output = 5;

        expect(binaryGap(input)).toEqual(output);
    })
})