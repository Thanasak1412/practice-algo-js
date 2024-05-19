// Takes in an array that has two sorted subarrays,
// from [p..q] and [q+1..r], and merges the array
function merge(array, p, q, r) {
  const leftArray = [],
    rightArray = [];
  let i, j, k;

  for (i = 0, k = p; k <= q; i++, k++) {
    leftArray[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    rightArray[j] = array[k];
  }
  k = p;
  for (i = 0, j = 0; i < leftArray.length && j < rightArray.length; ) {
    if (leftArray[i] < rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  for (; i < leftArray.length; i++, k++) {
    array[k] = leftArray[i];
  }
  for (; j < rightArray.length; j++, k++) {
    array[k] = rightArray[j];
  }
}

// Takes in an array and recursively merge sorts it
function mergeSort(array, p, r) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (p < r) {
    const q = Math.floor((p + r) / 2);

    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
}
