const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log("😁😁😁Assertion Passed");
  } else {
    console.log("😡😡😡Assertion Failed");
  }
};


const eqArrays = function(actual,expected) {
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

assertEqual(true,true);

assertEqual(eqArrays([1,2,3],[1,2,3]),true); // => should PASS

assertEqual(eqArrays([1,2,3],[3,2,1]),false);// => false

assertEqual(eqArrays(["1","2","3"],["1","2","3"]),true); // => true
assertEqual(eqArrays(["1","2","3"],["1","2",3]),false); // => false

assertEqual(eqArrays([1,2,3],[1,2,3]),true); // => should PASS
