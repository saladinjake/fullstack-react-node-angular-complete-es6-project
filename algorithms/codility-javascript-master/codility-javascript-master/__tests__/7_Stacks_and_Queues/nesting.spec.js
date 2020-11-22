const nesting = require('../../7_Stacks_and_Queues/nesting');

describe('nesting function', () => {
    test('it should return 1 if S = "(()(())())"', () => {
        const S = '(()(())())';
        const input = S;
        const output = 1;

        expect(nesting(input)).toEqual(output);
    })

    test('it should return 0 if S = "())"', () => {
        const S = '())';
        const input = S;
        const output = 0;

        expect(nesting(input)).toEqual(output);
    })
})