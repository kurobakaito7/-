Array.prototype.group = function (fn) {
  let result = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(this[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let test = arr.group((item) => {
  return item % 2 === 0 ? "even" : "odd";
});

console.log(test);
