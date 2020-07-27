const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const chai = require('chai');
const assert = chai.assert;
const head = require('../head');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns the tail of an array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[0], "Lighthouse");
    assert.equal(result[1], "Labs");
    assert.equal(result.length, 2);
  });
  it("returns true when arrays are equal value", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // =>) should PASS
  });
  it("asserts arrays are equal value in eqArrays", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
  });
});