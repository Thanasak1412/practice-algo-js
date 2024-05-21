// Finding pairs with a given sum: in a sorted array, use one pointer at the start and one at the end.
// Move the pointers towards each other until you find the pair that sums to the target value.
function findPairWithSum(arr, target) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let pointerA = 0;
  let pointerB = arr.length - 1;

  while (pointerA < pointerB) {
    const currentValue = arr[pointerA] + arr[pointerB];
    if (currentValue === target) {
      return [arr[pointerA], arr[pointerB]];
    } else if (currentValue < target) {
      pointerA++;
    } else {
      pointerB--;
    }
  }

  return null;
}

const arr = [10, 20, 30, 40, 50, 60, 100, 120, 500];
const target = 70;

console.log(findPairWithSum(arr, target));
