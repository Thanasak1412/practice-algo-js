function doSearch(array, targetValue) {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
}
