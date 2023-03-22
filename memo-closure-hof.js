const times10 = (n) => {
  if (Number.isInteger(n)) {
    return n * 10;
  }

  return n.reduce((prev, curr) => curr * 10 + prev, 0);
};

const memoized = (cb) => {
  const cache = {};

  return (...args) => {
    if (!cache[args]) {
      cache[args] = cb(...args);
    }

    return cache[args];
  };
};

const memoizedTimes10 = memoized(times10);

memoizedTimes10([10, 8, 100, 1000]);
memoizedTimes10(10);
