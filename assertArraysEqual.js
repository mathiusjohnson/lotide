const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo) === false) {
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
    return false;
  } if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`😁😁😁Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    return true;
  }
};

module.exports = (assertArraysEqual);