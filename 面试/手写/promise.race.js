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

const arr = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]
promiseRace(arr).then(values => {
    console.log('res',values)
},reason => {
    console.log('err',reason)
});