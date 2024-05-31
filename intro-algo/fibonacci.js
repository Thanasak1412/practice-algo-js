// Fibonacci

// for loop
function fibonacciIterative(number) {
  if (number <= 2) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  let answer = 0;

  for (let i = 1; i < number; i++) {
    answer = prev + current;
    prev = current;
    current = answer;
  }

  return answer;
}

// recursive
function fibonacciRecursive(number) {
  if (number === 0) {
    return 0;
  }

  if (number <= 2) {
    return 1;
  }

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(20));
