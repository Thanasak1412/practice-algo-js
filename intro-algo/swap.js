function swap(arr, firstIndex, secondIndex) {
  if (!arr[firstIndex] || !arr[secondIndex]) {
    return arr;
  }

  const temp = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;

  return arr;
}
