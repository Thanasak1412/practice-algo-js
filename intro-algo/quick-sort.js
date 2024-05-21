function quickSort(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (array.length <= 1) {
    return array;
  }

  const pivot = Math.floor((0, array.length - 1) / 2);
  const left = [];
  const middle = [];
  const right = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] < array[pivot]) {
      left.push(array[i]);
    } else if (array[i] === array[pivot]) {
      middle.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}
