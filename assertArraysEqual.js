const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo) === false) {
    return false;
  } if (eqArrays(arrayOne, arrayTwo) === true) {
    return true;
  }
};

module.exports = (assertArraysEqual);