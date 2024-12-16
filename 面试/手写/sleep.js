function sleep(fn, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fn);
        }, time)
    })
}

async function autoPlay() {
    console.log('sleep之前');
    await sleep(()=>{}, 5000);
    console.log('sleep之后')
}

autoPlay()