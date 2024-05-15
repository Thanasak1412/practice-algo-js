function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];

  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let index = minIndex + 1; index < array.length; index++) {
    const element = array[index];

    if (element < minValue) {
      minValue = element;
      minIndex = index;
    }
  }

  return minIndex;
}

function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    const smIdx = indexOfMinimum(array, index);

    if (smIdx !== index) {
      swap(array, index, smIdx);
    }
  }
}
