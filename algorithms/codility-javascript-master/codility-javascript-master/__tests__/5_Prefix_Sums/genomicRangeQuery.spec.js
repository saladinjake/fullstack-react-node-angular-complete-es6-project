const genomicRangeQuery = require('../../5_Prefix_Sums/genomicRangeQuery');

describe('genomicRangeQuery function', () => {
    test('it should return [2, 4, 1] if S = "CAGCCTA", P = [2, 5, 0] and Q = [4, 5, 6]', () => {
        const S = 'CAGCCTA';
        const P = [2, 5, 0];
        const Q = [4, 5, 6];
        const input = [S, P, Q];
        const output = [2, 4, 1];

        expect(genomicRangeQuery(...input)).toEqual(output);
    })
})
