// * Selection sort
// repeatedly selects the next-smallest element
// and swaps it into place.
function selectionSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      minIndex = findMinValue(array, i, j);

      if (array[i] > array[minIndex]) {
        swap(array, i, minIndex);
      }
    }
  }

  return array;
}

function findMinValue(array, i, j) {
  return array[i] > array[j] ? j : i;
}

let i = 0;
function swap(array, pos1, pos2) {
  i++;

  console.log(i);
  const temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

const array = [1, 4, 2, 3, 10, 5, 7, -5];

console.log(selectionSort(array));
