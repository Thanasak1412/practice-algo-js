/**
 * Merge sort is a divide-and-conquer algorithm used for sorting arrays.
 * It works by dividing the input array into two halves, recursively sorting each halt,
 * and then merging the sorted halves back together to obtain a sorted array.
 * * The basic idea behind merge sort is to divide the input array into smaller and smaller subarrays
 * * until subarray has only one element, which is by definition sorted.
 * * Then, adjacent subarrays are merged together in a sorted manner
 * * until the entire array is merged back together
 * * Time complexity = O(n log n)
 */

function mergeSort(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

console.log("mergeSort => ", mergeSort([1, 200, 34]));
