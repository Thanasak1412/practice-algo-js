const loopNTimes = (n) => {
  console.log("n === ", n);
  if (n <= 1) {
    return "complete";
  }

  return loopNTimes(n - 1);
};

loopNTimes(3);
