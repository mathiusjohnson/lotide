const head = function(array) {
  let arrayed = array;
  for (let i = 0; i < arrayed.length; i++) {
    console.log(arrayed[0]);
    return arrayed[0];
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5, 6, 7]), 5);
