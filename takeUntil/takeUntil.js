// https://stackoverflow.com/questions/3619797/why-are-javascript-negative-numbers-not-always-true-or-false/3619813

const eqArrays = function(actual, expected) {
  // console.log("this is actual:", actual, "this is expected:", expected);
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
  console.log('assertArraysEqual', eqArrays(arrayOne, arrayTwo));
};


const takeUntil = (data, callback) => {
  let arr = [];
  for (let item of data) {
    if (!callback(item)) {
      arr.push(item);
    } else {
      break;
    }
  }
  console.log("takeUntil", arr);
  return arr;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
/*

Expected Output:
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/
module.exports = (takeUntil);
