// Takes in an array that has two sorted subarrays,
// form [p..q] and [q+1..r], and merges the array
function merge(array, p, q, r) {
  const lowHalf = [];
  const highHalf = [];
  let i, j, k;

  for (i = 0, k = p; k <= q; k++, i++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }
  k = p;

  for (i = 0, j = 0; i < lowHalf.length && j < highHalf.length; ) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }

  for (; i < lowHalf.length; i++, k++) {
    array[k] = lowHalf[i];
  }
  for (; j < highHalf.length; j++, k++) {
    array[k] = highHalf[j];
  }
}
