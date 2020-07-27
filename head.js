const assertEqual = require('./assertEqual');


const head = function(array) {
  let arrayed = array;
  for (let i = 0; i < arrayed.length; i++) {
    return arrayed[0];
  }
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

module.exports = (head);