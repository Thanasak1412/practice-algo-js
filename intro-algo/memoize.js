function memoize() {
  const cache = {};

  return function fibonacci(number) {
    if (cache[number]) {
      return cache[number];
    }

    if (number <= 1) {
      return number;
    }

    const output = fibonacci(number - 1) + fibonacci(number - 2);

    cache[number] = output;

    return output;
  };
}

const memoized = memoize();
const cache1 = memoized(40);
const cache2 = memoized(50);

console.log(cache1);
