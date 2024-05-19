function factorial(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i < n; i++) {
    result *= i + 1;
  }

  return result;
}
