function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

map([1, 2, 3, 4, 5, 6], (x) => x * 2);
