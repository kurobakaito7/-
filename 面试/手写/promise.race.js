function promiseRace(promiseArray) {
    // 确保传入的是一个数组
    if(!Array.isArray(promiseArray)){
        return Promise.reject(new Error('不是一个数组'));
    }

    // 返回一个Promise对象
    return new Promise((resolve,reject) => {
        for(let i = 0;i < promiseArray.length;i++) {
            // 确保是一个Promise对象
            let promise = Promise.resolve(promiseArray[i]);
            promise.then(value => {
                resolve(value);
            },reason => {
                reject(reason);
            })
        }
    })
}

// 该方法的参数是 Promise 实例数组, 然后其 then 注册的回调方法是数组中的某一个 Promise 的状态变为 fulfilled 的时候就执行. 
// 因为 Promise 的状态只能改变一次, 那么我们只需要把 Promise.race 中产生的 Promise 对象的 resolve 方法, 注入到数组中的每一个 Promise 实例中的回调函数中即可.

function promiseRace2(promiseArr) {
    return new Promise((resolve, reject) => {
        for(let i=0;i<promiseArr.length;i++) {
            Promise.resolve(promiseArr[i]).then(resolve, reject);
        }
    })
}

const arr = [
    Promise.reject(1),
    Promise.reject(2),
    Promise.resolve(3)
]
promiseRace2(arr).then(values => {
    console.log('res',values)
},reason => {
    console.log('err',reason)
});