const eqArrays = require('../eqArrays');
const chai = require('chai');
const assert = chai.assert;


describe("#eqArrays", () => {

  it("returns true when arrays are equal value", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // =>) should PASS
  });

});