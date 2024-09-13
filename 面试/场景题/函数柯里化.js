// 固定参数长度
function curry1(fn, args) {
    // 获取函数需要的参数长度
    let length = fn.length;

    args = args || [];
    return function() {
        let subArgs = args.slice(0);// 深拷贝一份
        // 拼接得到现有的所有参数
        for (let i=0;i<arguments.length;i++) {
            subArgs.push(arguments[i]);
        }
        // 判断参数的长度是否已经满足函数所需参数的长度
        if(subArgs.length === length) {
            // 执行函数
            return fn.apply(this, subArgs);
        }else {
            return curry.call(this, fn, subArgs);
        }
    };

}

const add = (a,b,c,d)=>{
    return a + b + c + d
}
const curAdd = curry1(add)
// console.log(curAdd(1,2,3)(4));
// console.log(curAdd(1)(2)(3)(4));


// 不固定参数长度
function curry(fn) {
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
}
function add1 (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}
let curryAdd = curry(add1);
console.log(curryAdd(1)(2)(3)(4, 5)()); // 15
console.log(curryAdd(1)(2)(3, 4, 5)()); // 15
console.log(curryAdd(1)(2, 3, 4, 5)())  //15


