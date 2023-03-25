/**
 * * Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements,
 * * compares adjacent elements and swaps them if they are in the wrong order.
 */

/**
 * TODO - Implementation
 * TODO - 1. Start at the beginning of the list.
 * TODO - 2. Compare the first two elements. If the first is greater than the second, swap them.
 * TODO - 3. Continue to the next pair of elements, comparing and swapping as necessary.
 * TODO - 4. Repeat steps 2 and 3 for each pair of adjacent elements until the end of the list is reached.
 * TODO - 5. The above steps are one pass through the list. Repeat steps 1-4 for as many passes as necessary
 * TODO - until no more swaps are needed.
 */

function bubbleSort(array) {
    if (!array.length) {
      return [];
    }
    if (array.length === 1) {
      return array;
    }
  
    for (let i = 0; i < array.length; ++i) {
      for (let j = 0; j < array.length - 1; ++j) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  
    return array;
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  console.log("bubbleSort => ", bubbleSort([-6, 20, 8, -2, 4]));
  