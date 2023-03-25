const memoMakeChange = () => {
  const coins = [10, 6, 1];
  const cache = {};

  return function makeChange(c) {
    if (cache[c]) {
      return cache[c];
    }

    let minCoins = -1;

    coins.forEach((coin) => {
      if (c - coin >= 0) {
        const currMinCoins = makeChange(c - coin);
        if (minCoins === -1 || currMinCoins < minCoins) {
          minCoins = currMinCoins;
        }
      }
    });

    cache[c] = minCoins + 1;
    return cache[c];
  };
};

const mc = memoMakeChange();
console.log("memoMakeChange => ", mc(50));
