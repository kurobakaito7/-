const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class MyPromise {
    status = PENDING
    value = undefined
    reason = undefined
    // 存储成功和失败回调函数的数组
    onFulFilledCallback = []
    onRejectedCallback = []
    constructor(executor) {
        try {
            executor(this.resolve,this.reject)
        } catch(e) {
            this.reject(e)
        }
    }

    resolve = (value) => {
        if(this.status === PENDING){
            this.status = FULFILLED
            this.value = value
            while (this.onFulFilledCallback.length) {
                // shift()取出数组的第一个元素，然后()调用
                this.onFulFilledCallback.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if(this.status === PENDING){
            this.status = REJECTED
            this.reason = reason
            while(this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason)
            }
        }
    }

    then = (onFulFilled, onRejected) => {
        // 如果不传，就使用默认参数
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
        // 为了链式调用，这里直接创建了一个MyPromise，实现值穿透后再return出去
        const promise2 = new MyPromise((resolve,reject) => {
            const fulfilledMicrotask = () => {
                // 创建一个微任务等待promise2完成初始化
                queueMicrotask(() => {
                    // 执行任务时的错误捕捉
                    try {
                        // 获取成功回调函数的执行结果
                        const x = onFulFilled(this.value);
                        // 传入fn进行处理
                        fn(x,resolve,reject,promise2);
                    } catch (e) {
                        reject(e)
                    }
                })
            }

            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason)
                        fn(x , resolve,reject,promise2)
                    }catch (e) {
                        reject(e)
                    }
                })
            }

            if(this.status === FULFILLED) 
                fulfilledMicrotask()
            else if(this.status === REJECTED) 
                rejectedMicrotask()
            else{
                // 将成功回调和失败回调存储起来
                // 等到执行成功/失败函数的时候再传递
                this.onFulFilledCallback.push(fulfilledMicrotask)
                this.onRejectedCallback.push(rejectedMicrotask)
            }
        })
        return promise2;
    }

    // 实现resolve、reject的静态方法
    static resolve(value) {
        // 如果是MyPromise直接返回
        if(value instanceof MyPromise) return value
        // 如果不是，转成常规的方式
        else return new MyPromise((resolve,reject) => {
            return resolve(value)
        })
    }

    static reject(reason) {
        return new MyPromise((resolve,reject) => {
            return reject(reason)
        })
    }
}

function fn(x,resolve,reject,promise2) {
    // 如果相等，说明return的是自己，抛出类型错误并返回
    if (promise2 === x) return reject(new TypeError("发生类型错误"))
    // 如果是MyPromise实例对象
    if (x instanceof MyPromise) {
        // 更改then中返回的promise2对象的状态，实现值穿透
        x.then(value => resolve(value),reason => reject(reason))
    }else{
        resolve(x)
    }
}
const p = new MyPromise((resolve, reject) => {
    resolve(1)
})
p.then().then().then(value => console.log(value))