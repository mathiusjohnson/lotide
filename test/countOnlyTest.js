const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;


describe("#countOnly", () => {
  it("should return specified words counted", () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
		
    const resultOne = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
		
    assert.strictEqual(resultOne["Jason"], 1);
    assert.strictEqual(resultOne["Karima"], undefined);
    assert.strictEqual(resultOne["Fang"], 2);


  });
});