/**
 * * Closure is a function that has access to variable from its outer scope, even after the outer function has returned.
 * * a closure allows a function to access variable in its parent scope, even when that parent function already completed execution.
 * * closures are created whenever a function is defined within another function.
 * * The inner function has access to the outer function's variables and parameters,
 * * even after the outer function has returned.
 */

const memoizedClosureTimes10 = () => {
  const cache = {};
  return (n) => {
    if (!cache[n]) {
      cache[n] = n * 10;
    }
    return cache[n];
  };
};

const times10 = memoizedClosureTimes10();

console.log("times10 => ", times10(10));
