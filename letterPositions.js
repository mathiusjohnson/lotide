const letterPositions = (letters) => {
  const results = {};
  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
    if (letters[i] !== " ") {
      if (results[letters[i]] === undefined)
        results[letters[i]] = [];
      results[letters[i]].push(i);
    }
  }
  return results;
};

const eqArrays = function(actual, expected) {
  // console.log("this is actual:", actual);
  // console.log("this is expected:", expected);
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  // console.log("this is arrayOne:", arrayOne);
  // console.log("this is arrayTwo:", arrayTwo);
  console.log(eqArrays(arrayOne, arrayTwo));
};

console.log("this is letter Positions function:", letterPositions("hello"));
// const string = "lighthouse in the house";
// const resultOne = letterPositions(string, { "H": true, "e": true, "l": true, "o": true });
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = (letterPositions);