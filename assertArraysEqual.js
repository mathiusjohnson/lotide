const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo) === false) {
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  } if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`😁😁😁Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  }
};

module.exports = (assertArraysEqual);