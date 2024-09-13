/**
 * 函数在n秒之后执行，如果多次触发，重新计时，保证函数在n秒之后执行
 * 1. 核心是setTimeout函数
 * 2. 每次事件触发时，先判断有没有定时器
 * 3. 如果存在定时器，则清空
 * 4. 重新开启一个定时器存入定时器变量里面
 */
function debounce(fn,t) {
    let timer;
    //return 一个匿名函数
    return function() {
        if(timer) clearTimeout(timer)
        timer = setTimeout(function() {
            fn();//括号表示函数调用
        },t)
    }
}

function debounce(fn, t) {
    let timer = null;
    return function() {
        let context = this
        let args = [...arguments]
        // 如果存在定时器，取消定时器重新计时
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        // 设置定时器，使事件间隔指定时间执行
        timer = setTimeout(() => {
            fn.apply(context,args)
        },t)
    }
}