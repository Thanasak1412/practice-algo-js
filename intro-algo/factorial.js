// Write the function that finds the factorial of any number.

// recursive
function findFactorialRecursive(number) {
  if (number === undefined) {
    return undefined;
  }

  if (number === 0) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

// for loop
function findFactorialIterative(number) {
  if (number === undefined) {
    return undefined;
  }

  if (number === 0) {
    return 1;
  }

  let output = 1;
  for (let i = number; i > 0 && i <= number; i--) {
    output *= i;
  }

  return output;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
