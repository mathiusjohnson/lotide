const eqObjects = require('../eqObjects');
const chai = require('chai');
const assert = chai.assert;


describe("#eqObjects", () => {
  it("returns true if objects are equal", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
		
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
		
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
		
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});