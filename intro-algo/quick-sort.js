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

  for (const element of array) {
    if (element < array[pivot]) {
      left.push(element);
    } else if (element === array[pivot]) {
      middle.push(element);
    } else {
      right.push(element);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}
