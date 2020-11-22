const maxCounters = require('../../4_Counting_Elements/maxCounters');

describe('maxCounters function', () => {
    test('it should return [3, 2, 2, 4, 2] if N = 5 and A = [3, 4, 4, 6, 1, 4, 4]', () => {
        const N = 5;
        const A = [3, 4, 4, 6, 1, 4, 4];
        const input = [N, A];
        const output = [3, 2, 2, 4, 2];

        expect(maxCounters(...input)).toEqual(output);
    })
})
