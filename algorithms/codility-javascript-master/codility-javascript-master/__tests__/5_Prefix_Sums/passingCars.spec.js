const passingCars = require('../../5_Prefix_Sums/passingCars');

describe('passingCars function', () => {
    test('it should return 5 if A = [0, 1, 0, 1, 1]', () => {
        const A = [0, 1, 0, 1, 1];
        const input = A;
        const output = 5;

        expect(passingCars(input)).toEqual(output);
    })
})
