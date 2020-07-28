const findKeyByValue = require('../findKeyByValue');
const chai = require('chai');
const assert = chai.assert;


describe("#findKeyByVaue", () => {
  it("should return key by value listed", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
		
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});