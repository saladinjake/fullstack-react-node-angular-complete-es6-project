var should = require("chai").should();

describe("Learning tests", function() {
    it("should have property model with value BT-50", function() {
        let car = {"model": "BT-50", "Maker": "Mazda"};

        car.should.have.property("model").equal("BT-50");
    });

    it("check for null", function() {
        let car = null;
        // car.should.not.exist; (Cannot read property 'should' of null)
        should.not.exist(car);
    });
});
