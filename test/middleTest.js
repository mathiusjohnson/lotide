const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;


describe("#middle", () => {
  it("should return the middle one or two values of an array whether odd or even length respectively", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle(middle([1, 2]), []));
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  });
});