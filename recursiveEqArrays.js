const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😁😁😁Assertion Passed");
  } else {
    console.log("😡😡😡Assertion Failed");
  }
};

const isEqual = (a, b) => {
  if (a === b) return true;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => isEqual(a[k], b[k]));
};

assertEqual(isEqual([[[2, [4, 4]], 3], [4]], [[2, 3], [4]]), false);

assertEqual(isEqual([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(isEqual([[2, 3], [4]], [[2, 3], 4]), false);