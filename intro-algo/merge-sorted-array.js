// Merging two sorted  arrays
// use two pointers to iterate through both arrays and merge them into a single sorted array
function mergeSortedArray(arr1, arr2) {
  let i = 0,
    j = 0;
  const mergeArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    mergeArray.push(arr1[i]);
  }
  for (; j < arr2.length; j++) {
    mergeArray.push(arr2[j]);
  }

  return mergeArray;
}

const arr1 = [1, 20, 40, 60, 100, 101, 200];
const arr2 = [2, 20, 50, 55, 56, 101, 102, 105];

console.log(mergeSortedArray(arr1, arr2));
