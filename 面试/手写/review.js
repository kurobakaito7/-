const arr = [1, 2, [1, 2, 3, [4, 5, 6]]]

function flatten(arr) {
  return arr.toString().split(',');
}
console.log(flatten(arr))