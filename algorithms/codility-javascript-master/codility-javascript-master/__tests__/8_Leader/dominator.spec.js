const dominator = require('../../8_Leader/dominator');

describe('dominator function', () => {
    test('it should return (0, 2, 4, 6 or 7) if A = [3, 4, 3, 2, 3, -1, 3, 3]', () => {
        const A = [3, 4, 3, 2, 3, -1, 3, 3];
        const input = A;
        const output = 0;

        expect(dominator(input)).toEqual(output);
    })

    test('it should return -1 if A = [3, 4, 3, 2, 8, -1, 5, 6]', () => {
        const A = [3, 4, 3, 2, 8, -1, 5, 6];
        const input = A;
        const output = -1;

        expect(dominator(input)).toEqual(output);
    })
})