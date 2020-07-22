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

const without = (array, remove) => {
  let output = [];
  for (let element of array) {
    if (!contains(remove, element)) {
      output.push(element);
    }
  }
  return output;
};

const contains = (array, item) => {
  for (let element of array) {
    if (element === item) {
      return true;
    }
    return false;
  }
};

const words = ["hello", "world", "lighthouse"];
const modified = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, modified);