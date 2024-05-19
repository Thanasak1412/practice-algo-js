function power(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return power(x, n + 1) / x;
  }

  return x * power(x, n - 1);
}
