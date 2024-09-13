function allSettled(promises) {
  // 创建一个数组，用来存放每个 Promise 的结果
  let results = new Array(promises.length);

  // 返回一个新的 Promise
  return new Promise((resolve, reject) => {
    // 处理每个 Promise
    promises.forEach((promise, index) => {
      // 处理每个 Promise 的结果
      Promise.resolve(promise).then(
        (value) => {
          // 如果成功，保存结果，并检查是否所有 Promise 都完成了
          results[index] = { status: "fulfilled", value: value };
          if (
            results.length === promises.length &&
            results.every((result) => result !== undefined)
          ) {
            resolve(results);
          }
        },
        (reason) => {
          // 如果失败，保存结果，并检查是否所有 Promise 都完成了
          results[index] = { status: "rejected", reason: reason };
          if (
            results.length === promises.length &&
            results.every((result) => result !== undefined)
          ) {
            resolve(results);
          }
        }
      );
    });
  });
}
