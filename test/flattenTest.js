const flatten = require('../flatten');
const chai = require('chai');
const assert = chai.assert;


describe("#flatten", () => {
  it("should flatten nested arrays into one array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});

console.log(); // =>
