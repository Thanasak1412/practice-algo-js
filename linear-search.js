const linearSearch = (arr, item) => {
  for (let value of arr) {
    if (value === item) {
      return value;
    }
  }
};

linearSearch([2, 6, 7, 90, 103], 90);
