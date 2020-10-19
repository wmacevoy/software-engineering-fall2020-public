var expect    = require("chai").expect;

describe("JSON", function() {
  describe("JSON Object to String", function() {
    it("converts objects to strings", function() {
        const object = { a : [ 1, 2, 3], b : "word" };
        const expected = '{"a":[1,2,3],"b":"word"}';
        const result = JSON.stringify(object);
        expect(result).to.equal(expected);
    });
  });
  describe("JSON String to Object", function() {
    it("converts string to object", function() {
        const expected = { a : [ 1, 2, 3], b : "word" };
        const string = '{"a":[1,2,3],"b":"word"}';
        const result = JSON.parse(string);
        expect(result).to.eql(expected);
    });
  });
});