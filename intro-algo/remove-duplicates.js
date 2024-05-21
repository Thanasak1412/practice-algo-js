// Removing duplicates from a sorted array
// Use two pointers to overwrite duplicate elements and keep track of unique elements
function removeDuplicates(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return [];
  }

  if (arr.length === 1) {
    return arr;
  }

  console.log("greater than 1");

  let uniqueIndex = 1;
  const uniqueArray = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uniqueArray.push(arr[i]);
      uniqueIndex++;
    }
  }

  return uniqueArray;
}

const sortedArray = [1, 2, 3, 3, 4, 4, 5, 6, 6, 10, 10, 100, 100, 101];

console.log(removeDuplicates(sortedArray));
