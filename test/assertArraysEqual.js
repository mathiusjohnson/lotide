const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const chai = require('chai');
const assert = chai.assert;
const head = require('../head');


describe("#arrays", () => {
  it("returns true when arrays are equal value", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // =>) should PASS
  });
  it("asserts arrays are equal value in eqArrays", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
  });
});