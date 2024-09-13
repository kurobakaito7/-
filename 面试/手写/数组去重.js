const unique = (arr) => {
  if (!Array.isArray(arr)) return;
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return newArr;
};

let arr1 = [1, 2, 3, 6, 6, 7, 4, 5, 5, 6, 6, 7];
console.log(unique(arr1));
