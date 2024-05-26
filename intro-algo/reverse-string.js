function reverseString(string = "") {
  if (!string) {
    return "";
  }

  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}
