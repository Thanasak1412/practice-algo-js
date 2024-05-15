function indexOfMinimum(array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let index = startIndex; index < array.length; index++) {
    const element = array[index];

    if (element < minValue) {
      minValue = element;
      minIndex = index;
    }
  }

  return minIndex;
}
