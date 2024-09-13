// 对象
const obj = {age:19};
// 1. 利用展开运算符
const o = {...obj};
// 2. 利用Object.assign(新对象, 原对象)
Object.assign(o1,obj);
// 3. Object.create(原对象)
const o2 = Object.create(obj);

// 数组
const arr = [1,2,3];
// 4. [].concat()
let a1 = [].concat(arr);
// 5. arr.slice() 参数为空时则返回整个数组
let a2 = arr.slice();
