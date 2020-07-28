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



module.exports = (countLetters);