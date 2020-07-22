const eqArrays = function(actual, expected) {
  console.log("this is actual:", actual);
  console.log("this is expected:", expected);
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

assertArraysEqual([1, 2, 3], [1, 2, 4]);