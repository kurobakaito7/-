Array.prototype._map = function (fn) {
  if (typeof fn !== "function") return;
  const arr = this;
  let newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let result = fn(arr[i], i, arr);
    newArr[i] = result;
  }
  return newArr;
};

Array.prototype._map = function (fn) {
  if (typeof fn !== "function") return;
  const arr = this;
  let newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(arguments[1], arr[i], i, arr);
    newArr[i] = result;
  }
  return newArr;
};


let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr._map((item) => item - 1);
console.log(arr);
console.log(newArr);
