// Quick sort
// 1. Pivot selection: choose an element in the array as the pivot
// 2. Partitioning:
// - rearrange the array elements,
// - greater than pivot come after it,
// - less than come before it
// 3. Recursive: recursively apply the aboves steps
function quickSort(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return array;
  }

  const left = [];
  const right = [];
  const middle = [];
  const pivot = Math.floor(array.length / 2);

  for (const val of array) {
    if (val < array[pivot]) {
      left.push(val);
    } else if (val > array[pivot]) {
      right.push(val);
    } else {
      middle.push(array[pivot]);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const array = [5, 2, 7, -4, 10, 20, 99, -55, -99, 99];

console.log(quickSort(array));
