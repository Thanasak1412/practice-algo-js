const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

const memoized = (cb) => {
  const cache = {};

  return (n) => {
    if (!cache[n]) {
      cache[n] = cb(n);
    }

    return cache[n];
  };
};

const memoFac = memoized(factorial);
console.log("memoFac => ", memoFac(4));