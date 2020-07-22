const letterPositions = (sentence) => {
  const results = {};

  return results;
}

const eqArrays = function(actual, expected) {
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
  console.log(eqArrays(arrayOne, arrayTwo));
};

assertArraysEqual([1, 2, 3], [1, 2, 4]);