const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(results[item]);
    }
  }
  return results;
};

const string = "LHL";
const resultOne = countLetters(string, { "L": true });

assertEqual(resultOne["L"], 2);

module.exports = (countLetters);