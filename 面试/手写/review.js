/* function curry(fn) {
    let args = [];
    return function temp(...newArgs) {
        if(newArgs.length) {
            args = [...args, ...newArgs];
            return temp;
        }else {
            let val = fn.apply(this, args);
            args = [];
            return val
        }
    }
} */

function arrToTree(arr) {
  let result = [];
  let map = {};
  arr.forEach((item) => {
    map[item.id] = item;
  });
  arr.forEach((item) => {
    let parent = map[item.pid];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

let source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];

let tree = arrToTree(source);
console.log(JSON.stringify(tree, null, 2))