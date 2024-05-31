// * Merge sort
// recursively dividing the array into two halves
// sorting each half
// and then merging the two sorted halves back together
function mergeSort(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return [...result, ...left, ...right];
}

const array = [5, 2, 1, 10, 99, -55];

console.log(mergeSort(array));
