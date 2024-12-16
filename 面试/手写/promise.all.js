function promiseAll(promiseArray) {
  // 检查是否是迭代对象
  if (typeof promises[Symbol.iterator] !== "function") {
    throw `传入的参数不是一个可迭代对象`;
  }
  return new Promise((resolve, reject) => {
    // 确保传的是一个数组
    if (!Array.isArray(promiseArray)) {
      return Promise.reject(new Error("不是数组"));
    }
    // 初始化结果数组
    const result = [];
    // 记录完成的promise数量
    let completed = 0;
    // 遍历promise数组
    for (let i = 0; i < promiseArray.length; i++) {
      // 确保每个元素都是promise对象
      // Promise.resolve(value)是一个静态方法,用于将一个值或者一个可能是 Promise 的值转换成一个确定的 Promise 对象
      promiseArray[i] = Promise.resolve(promiseArray[i]);
      promiseArray[i].then(
        (value) => {
          // 将每个promise的结果存入结果数组
          result[i] = value;
          // 完成数量+1
          completed++;
          // 如果全部完成，则resolve返回结果数组
          if (completed === promiseArray.length) {
            resolve(result);
          }
        },
        (reason) => {
          // 如果有任何一个promise失败，则立即reject
          reject(reason);
        }
      );
    }
  });
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
