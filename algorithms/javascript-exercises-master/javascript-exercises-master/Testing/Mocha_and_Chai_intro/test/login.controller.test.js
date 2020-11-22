// Import assertion from Chai
// Possibility to use the Node.js built-in module assert instead.
var expect = require('chai').expect;
var should = require('chai').should();

var loginController = require('../login.controller')

// For Promise
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();

// Test collection
describe('LoginController()', function() {

    // Hook called before each test
    beforeEach('Setting up the userList', function(){
        console.log('beforeEach: loading the user list.');
        loginController.loadUserList(['abc123','xyz321']);
        //throw {error: 'Throwing Error to fail'}
    });

    describe("isValidUserId()", function() {
        it('should return true if valid user id', function () {
            // ARRANGE
            let user = 'abc123';
            // ACT
            let isValid = loginController.isValidUserId(user)
            // ASSERT
            expect(isValid).to.be.equal(true);
        });

        it('should return false if invalid user id', function () {
            // ARRANGE
            let user = 'abc124';
            // ACT
            let isValid = loginController.isValidUserId(user)
            // ASSERT
            expect(isValid).to.be.equal(false);
        });
    });

    // With asynchronous function, we need to tell Mocha that the test is complete
    describe("isValidUserIdAsync()", function() {
        it("should return true if valid user id", function(done) {
            // ARRANGE
            let user = 'abc123';
            // ACT
            loginController.isValidUserIdAsync(user,  function(isValid) {
                // ASSERT
                isValid.should.equal(true);
                done(); // done() is called to complete the test
            });
        });
    });

    // Test with Promise
    describe.skip("isAuthorizedpromise()", function () {
        it("should return true if valid user id", function() {
            // ARRANGE
            let user = "abc123";
            // ACT
            let isValid = loginController.isAuthorizedPromise(user);
            // ASSERT
            return isValid.should.eventually.equal(true);
        });
    });
});