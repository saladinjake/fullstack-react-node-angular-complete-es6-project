const frogRiverOne = require('../../4_Counting_Elements/frogRiverOne');

describe('frogRiverOne function', () => {
    test('it should return 6 if X = 5 and A = [1, 3, 1, 4, 2, 3, 5, 4]', () => {
        const X = 5;
        const A = [1, 3, 1, 4, 2, 3, 5, 4];
        const input = [X, A];
        const output = 6;

        expect(frogRiverOne(...input)).toEqual(output);
    })
})
