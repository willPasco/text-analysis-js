/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  const counts = new Map();

  array.forEach((value) => {
    if (!counts.has(value)) {
      counts.set(value, 0);
    }

    const count = counts.get(value);
    counts.set(value, count + 1);
  });

  return counts;
}

function isString(string) {
  return typeof string === 'string';
}

function convertStringToArray(word) {
  if (isString(word)) {
    return word.split('');
  }
  return [];
}

module.exports = { itemCounts, convertStringToArray };

if (require.main === module) {
  const word = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const lettersArray = convertStringToArray(word);
  const result = itemCounts(lettersArray);

  console.log(`The counts for ${word} are...`);

  result.forEach((value, key) => {
    console.log(`${key}  ${value}`);
  });
}
