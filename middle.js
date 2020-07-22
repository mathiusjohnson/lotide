const eqArrays = (actual, expected) => {
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


const middle = (arr) => {
  const middleVal = Math.floor(arr.length / 2);
  const secondMiddle = Math.floor(arr.length / 2 - 1);
  if (arr.length === 1 || arr.length === 2 || arr === 0) {
    return [];
  } if (arr.length % 2 === 0 && arr.length !== 2) {
    for (let i = 0; i < arr.length; i++) {
      console.log(middleVal[1]);
      return [arr[secondMiddle], arr[middleVal]];

    }
  } else {
    return [arr[middleVal]];
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// console.log("this is the middle:", middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]