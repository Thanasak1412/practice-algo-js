const array = [5, 2, 3, 10, 99, -5, -4];

function insertionSort(array) {
  if (array.length <= 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}

console.log(insertionSort(array));
