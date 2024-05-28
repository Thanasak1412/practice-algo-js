const arr = [1, 2, 3, 5, 4, 5, 6, 2, 4];

function findDuplicate(arr) {
  const lookup = {};

  for (let item of arr) {
    if (lookup[item]) {
      return item;
    }

    lookup[item] = true;
  }

  return undefined;
}

console.log(findDuplicate(arr));
