const eqObjects = (object1, object2) => {
  let arrayOne = Object.keys(object1);
  let arrayTwo = Object.keys(object2);
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } for (const key of arrayOne) {
    console.log(key);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (objectOne, objectTwo) => {
  console.log(eqObjects(objectOne, objectTwo));
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);


module.exports = (assertObjectsEqual);