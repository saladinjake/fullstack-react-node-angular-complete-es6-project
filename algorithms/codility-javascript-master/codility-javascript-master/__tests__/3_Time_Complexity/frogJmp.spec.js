const frogJmp = require('../../3_Time_Complexity/frogJmp');

describe('frogJmp function', () => {
    test('it should return 3 if X = 10, Y = 85 and D = 30', () => {
        const X = 10;
        const Y = 85;
        const D = 30;
        const input = [X, Y, D];
        const output = 3;

        expect(frogJmp(...input)).toEqual(output);
    })

    test('it should return 1 if X = 18, Y = 20 and D = 2', () => {
        const X = 18;
        const Y = 20;
        const D = 2;
        const input = [X, Y, D];
        const output = 1;

        expect(frogJmp(...input)).toEqual(output);
    })

    test('it should return 0 if X = 18, Y = 18 and D = 3', () => {
        const X = 18;
        const Y = 18;
        const D = 3;
        const input = [X, Y, D];
        const output = 0;

        expect(frogJmp(...input)).toEqual(output);
    })
})