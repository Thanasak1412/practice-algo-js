// * bubble sort
// repeatedly steps through the list, compares adjacent elements
// and swaps theme if they are in the wrong order
// The process is repeated until the list is sorted.
function bubbleSort(array) {
  if (!array || (Array.isArray(array) && !array.length)) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) { // NOSONAR
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const array = [64, 34, 25, 12, 22, 11, 90];

const sorted = bubbleSort(array);

console.log(sorted);
