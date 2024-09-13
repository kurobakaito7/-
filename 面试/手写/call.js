function _call(context) {
    let args = [...arguments].slice(1);
    let result = null;
    // 判断 context 是否存在，如果未传入则为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

function _apply(context) {
    let result = null;
    context = context || window;
    context.fn = this;
    // 判断参数是否传入
    if(arguments[1]) {
        result = context.fn(...arguments[1]);
    }else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

function _bind(context) {
    let args = [...arguments].slice(1);
    let fn = this;
    return function Fn() {
        // 根据调用方式，传入不同的绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}