const binarySearch = (arr, item) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const middle = Math.floor((lo + hi) / 2);

    if (arr[middle] === item) {
      return middle;
    } else if (arr[middle] > item) {
      hi = middle;
    } else {
      lo = middle - 1;
    }
  }

  return -1;
};
