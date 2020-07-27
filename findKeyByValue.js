const findKeyByValue = (object, value) => {
  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      if (object[prop] === value) {
        return prop;
      }
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("this is actual:", actual);
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = (findKeyByValue);