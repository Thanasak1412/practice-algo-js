function reverseStringIterative(string = "") {
  const output = [];
  for (let i = 0; i < string.length; i++) {
    output.unshift(string[i]);
  }

  return output.join("");
}

function reverseStringRecursive(string = "") {
  if (string.length <= 1) {
    return string;
  }

  const first = string[0];
  const last = string[string.length - 1];
  let output = "";

  output =
    last +
    reverseStringRecursive(string.substring(1, string.length - 1)) +
    first;

  return output;
}

function _swap(string) {
  const temp = string;
  string[0] = temp[temp.length - 1];
  string[string.length - 1] = temp[0];
}

const text = "algo";

console.log(reverseStringIterative(text));
console.log(reverseStringRecursive(text));
