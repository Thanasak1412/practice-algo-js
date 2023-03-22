/**
 * TODO - Write a function, times10, that takes an argument, n , and multiples n times 10
 */
function times10(n) {
  return n * 10;
}

/**
 * TODO - Use an object cache the results of your times10 function.
 * TODO - Create a function that checks if the value for n has been calculated before.
 * TODO - If the value for n has not been calculated, calculate and then save the result int he cache object.
 */

const cache = {};

function memoTimes10(n) {
  if (cache[n]) {
    return cache[n];
  }
  const result = times10(n);
  cache[n] = result;
  return result;
}
