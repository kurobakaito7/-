// 1. 递归实现
const obj = {
    age:18,
    uname:'pink',
    hobby:['乒乓球','足球'],
    family:{
        name:'pinkpink'
    }
}
//参数为两个对象
const deepClone1 = (newObj, oldObj) => {
    for(let k in oldObj) {
        // 一定先写数组再写对象
        if(oldObj[k] instanceof Array) {
            newObj[k] = [];
            deepClone1(newObj[k],oldObj[k]);
        }else if(oldObj[k] instanceof Object) {
            newObj[k] = {};
            deepClone1(newObj[k],oldObj[k]);
        }else{
            newObj[k] = oldObj[k];
        }   
    }
}
// 参数为一个对象
const deepClone2 = (obj) => {
    // 是基本数据类型就直接返回
    if (!(obj instanceof Object)) return obj;
    // 如果是数组，就创建数组；如果是对象，就创建对象
    let objCopy = obj instanceof Array ? [] : {};

    for (let k in obj) {
        // 用来判断是不是对象自有属性（而不是继承来的属性）
        if(obj.hasOwnProperty(k)) {
            objCopy[k] = deepClone2(obj[k]);
        }
    }
    return objCopy;
}

// 处理循环依赖以及特殊类型
const _completeDeepClone = (target, map = new Map()) => {
    // 补全代码
    if(target == null) return target;
    if(typeof target !== 'object') return target;
    // 如果是下面几个对象引用类型之一，直接返回使用作为构造函数生成的新对象
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(target)
    // 如果有循环引用
    if(map.has(target)) return map.get(target);
    const targetCopy = target instanceof Array ? [] : {};
    map.set(obj, targetCopy);
    for(let k in target){
        if(target.hasOwnProperty(k)) {
            targetCopy[k] = _completeDeepClone(target[k],map);
        }
    }
    return targetCopy;
}

// JSON实现
const deepClone3 = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

