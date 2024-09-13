function myNew(constructor,...args) {
    // 创建一个空对象
    const obj = {};
    // 将空对象的__proto__指向构造函数的原型对象
    obj = Object.create(constructor.prototype);
    // 利用apply方法，将constructor指向对象，并传入参数
    const result = constructor.apply(obj,args);
    // 如果执行结果有返回值并且是一个对象，返回执行的结果，否则返回新创建的对象
    return result instanceof Object ? result : obj;
}

function _new() {
    let newObj = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;

    // 新建一个空对象，对象的原型为构造函数的prototype对象
    newObj = Object.create(constructor.prototype);
    // 将this指向新建对象，并执行函数
    result = constructor.apply(newObj,arguments);
    let flag = result && result instanceof Object;
    return flag? result : newObj;
}

// 使用方法：_new(构造函数, 初始化参数)