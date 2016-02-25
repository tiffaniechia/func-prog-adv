var chai = require('chai');
chai.should();

var Model = require('../src/Model.js');

describe('Model', function () {
    var model;
    describe('#init', function () {
        model = new Model({
            attr1: "first, last",
            attr2: "email"
        });
        it('should initialize with attr1, attr2', function () {
            model.attr1.should.equal("first, last");
            model.attr2.should.equal("email");
        });
    });
});