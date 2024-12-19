function curry(fn) {
  let args = [];
  return function temp(...newArgs) {
    if(newArgs.length) {
      args = [...args, ...newArgs]
      return temp;
    }else {
      let val = fn.apply(this, args);
      args = [];
      return val;
    }
  }
}

function add(...args) {
  return args.reduce((pre,cur) => {
    return pre+cur
  })
}

let curryAdd = curry(add);
console.log(curryAdd(1)(2,3)(4,5)());