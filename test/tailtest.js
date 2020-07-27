const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;


describe("#tail", () => {
  it("returns the tail of an array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[0], "Lighthouse");
    assert.equal(result[1], "Labs");
    assert.equal(result.length, 2);
  });
});