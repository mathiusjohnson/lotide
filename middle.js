const middle = (arr) => {
  const middleVal = Math.floor(arr.length / 2);
  const secondMiddle = Math.floor(arr.length / 2 - 1);
  if (arr.length === 1 || arr.length === 2 || arr === 0) {
    return [];
  } if (arr.length % 2 === 0 && arr.length !== 2) {
    for (let i = 0; i < arr.length; i++) {
      return [arr[secondMiddle], arr[middleVal]];

    }
  } else {
    return [arr[middleVal]];
  }
};

module.exports = (middle);