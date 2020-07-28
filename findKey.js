const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (let key of keys) {
    console.log("key = ", key);
    console.log("x = ", object[key]);
    if (callback(object[key])) {
      console.log("returning :", key);
      return key;
    }
  }
};

module.exports = (findKey);