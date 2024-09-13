Array.prototype._filter = function(fn) {
    if(typeof(fn) !== 'function') return;
    const arr = this;
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        let result = fn(arr[i], i, arr);
        result && newArr.push(arr[i]);
    }
    return newArr;
}

Array.prototype._filter = function(fn) {
    if(typeof(fn) !== 'function') return;
    const arr = this;
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        let result = fn.call(arguments[1], arr[i], i, arr);
        result && newArr.push(arr[i]);
    }
    return newArr;
}


const arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr._filter(item => item % 2 === 0);

console.log(newArr);