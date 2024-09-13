// 直接使用setTimeout
/* function demo() {
    console.log('开始');
    setTimeout(() => {
        console.log('结束')
    },2000)
}

demo(); */

// 使用setTimeout 或者 Promise
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// 使用
async function demo() {
    console.log('开始');
    await sleep(2000);// 等待2秒
    console.log('结束');
}

demo();