function jsonToTree(data) {
  // 初始化结果数组
  let result = [];
  // 判断传入数据的格式
  if (!Array.isArray(data)) {
    return result;
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });
  // 通过pid将父元素和子元素对应
  data.forEach((item) => {
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

let tree = jsonToTree(source);
console.log(tree); // children只会显示Object
console.log(JSON.stringify(tree,null,2)); // 转化为json字符串，里面的内容也会显示出来