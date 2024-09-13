/**
 * 函数在n秒内只执行一次，如果n秒内多次触发，只执行第一次触发的
 * 1. 核心是setTimeout定时器
 * 2. 当事件每次触发先判断是否有定时器，如果有定时器则不开启新的定时器
 * 3. 如果没有定时器则开启定时器存入变量中
 */
function throttle(fn, t) {
    let timer = null;
    return function() {
        if(!timer) {
            timer = setTimeout(() => {
                fn();
                //清空定时器
                //在setTimeout中是无法删除定时器的，因为定时器还在运作。
                //所以使用timer = null 而不是 clearTimeout(timer)
                timer = null;
            },t)
        }
    }
}

function throttle(fn, t) {
    let timer = null;
    return function() {
        let context = this;
        let args = [...arguments]
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context,args)
                timer = null
            },t)
        }
    }
}