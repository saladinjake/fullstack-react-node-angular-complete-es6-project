// Import assertion from Chai
// Possibility to use the Node.js built-in module assert instead.
var expect = require('chai').expect;

// Import function to test
var addTwoNumbers = require('../addTwoNumbers');

// describe block creates a test environment (collections of test cases)
// 1st arg: name of the functionality to test.
// 2nd arg: function containing one or multiple test cases.
describe('addTwoNumbers()', function () {

    // it block define a test case which need to pass
    // 1st arg: description of the test.
    // 2nd arg: function holding the body of the test.
    it('should add two numbers', function () {

        // 1. ARRANGE
        var x = 5;
        var y = 1;
        var sum1 = x + y;

        // 2. ACT
        var sum2 = addTwoNumbers(x, y);

        // 3. ASSERT
        expect(sum2).to.be.equal(sum1);
    });
});