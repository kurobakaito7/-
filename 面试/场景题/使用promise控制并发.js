/**
 *
 * @param { 并发限制 } poolLimit
 * @param { promise 数组 } array
 * @param { callback } iteratorFn
 */
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = new Set(); // 保存正在执行的promise
  for (const item of array) {
    // 生成一个 promise 实例，并在 then 方法中的 onFullfilled 函数里返回实际要执行的 promise，
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);
    executing.add(p);
    // 将执行完毕的promise移除
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    // 如果正在执行的 promise 数量达到了并发限制，则通过 Promise.race 触发新的 promise 执行
    if (executing.length >= poolLimit) {
      await Promise.race(executing);
    }
  }
  // 所有 promise 都执行完了，调用 Promise.all 返回
  return Promise.all(ret);
}


const timeout = (i) => new Promise((resolve) => setTimeout(() => {
    console.log(i);
    resolve(i);
},i))
asyncPool(4, [1000, 5000, 3000, 2000, 4000], timeout)


// fetch已实现，可直接使用
// 向url发起请求，返回一个Promise
// fetch(url:string)=>Promise

// 请你实现一个函数，控制并发请求数量，接受两个参数
// urls:string[]  待请求的url
// k:number  并发请求数量

