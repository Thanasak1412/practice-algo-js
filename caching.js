/**
 * TODO - Transform this simple sorting algorithm into a unique sort.
 * TODO - It should not return any duplicate value in the sorted array.
 */

const uniqueSort = (arr) => {
  const cache = {};
  const result = [];

  for (let value of arr) {
    if (!cache[value]) {
      result.push(value);
      cache[value] = true;
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2, 2]));
