const foo = (n) => {
  if (n === 1) {
    return 1;
  }

  const out = n + foo(n - 1);
  console.log("out => ", out);

  return out;
};

const out = foo(4);
console.log(out);
