const fish = require('../../7_Stacks_and_Queues/fish');

describe('fish function', () => {
    test('it should return 3 if X = 10, Y = 85 and D = 30', () => {
        const A = [4, 3, 2, 1, 5];
        const B = [0, 1, 0, 0, 0];
        const input = [A, B];
        const output = 2;

        expect(fish(...input)).toEqual(output);
    })
})