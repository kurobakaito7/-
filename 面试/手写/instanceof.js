function myInstanceof(left, right) {
    // 如果不是对象，返回false
    if(Object(left) !== left) return false;
    if(!right.prototype) return false;
    // 获取对象原型
    let proto = Object.getPrototypeOf(left); // left.__proto__
    // 获取构造函数的原型对象
    let prototype = right.prototype;
    // 判断构造函数的prototype是否在对象原型的原型链上
    while(true) {
        if(!proto) return false;
        if(proto === prototype) return true;
        // 如果没有找到，就继续从原型链上找，Object.getPrototypeOf 用来获取指定对象的原型
        proto = Object.getPrototypeOf(proto);
    }
}