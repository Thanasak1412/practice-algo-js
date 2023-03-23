const joinElement = (arr, joinString) => {
  let resultString = "";
  for (let i = 0; i < arr.length - 1; ++i) {
    resultString += arr[i] + joinString;
  }

  return resultString;
};

console.log(
  "joinElement => ",
  joinElement(["s", "cr", "t cod", " :) :)"], "e")
);
