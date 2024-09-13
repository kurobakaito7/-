Array.prototype._reduce = function (fn, prev) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (prev === undefined) {
      prev = fn(arr[i], arr[i + 1], i + 1, arr);
      ++i; // 这一步千万别忘！！！
    } else {
      prev = fn(prev, arr[i], i, arr);
    }
  }
  return prev;
};

let arr = [1, 2, 3, 4];
let result = arr._reduce((prev, cur) => {
  return prev * cur;
}, 1);
console.log(result);
