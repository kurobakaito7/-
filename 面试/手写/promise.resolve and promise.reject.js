function myPromiseResolve(value) {
    if(value instanceof Promise) return value;
    else return new Promise((resolve,reject) => resolve(value));
}

function myPromiseReject(reason) {
    return new Promise((resolve,reject) => reject(reason))
}