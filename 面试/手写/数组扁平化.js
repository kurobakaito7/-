// 数组扁平化
const arr = [1, 2, [1, 2, 3, [4, 5, 6]]]

// 1. flat
let arr1 = arr.flat(Infinity);
console.log(arr1)

// 2. reduce
function flatten1(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
}

// 3. 普通递归实现
function flatten2(array) {
    let result = [];
    // 定义一个递归函数
    function flat(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          // 递归展平数组拼接到结果数组
          flat(arr[i])
        } else {
          result.push(arr[i]);
        }
      }
    }
    flat(array);
    return result;
  }

// 4. 扩展运算符实现
function flatten3(arr) {
    // 循环 当数组里面有一项元素还是数组时
    while(arr.some(item => Array.isArray(item))){
        console.log("...arr",...arr);
        // arr1.concat(arr2,arr3,num) 用于链接两个或多个数组（num也行）
        arr = [].concat(...arr)
        console.log(arr);
    }
    return arr;
}

// 5. split + toString实现
function flatten4(arr) {
    // toString()方法会将数组展平成一维后再转换成字符串
    // split(',')再将字符串切割为数组
    // map() 将数组中的字符元素转换为数字元素
    return arr.toString().split(',').map(i => Number(i));
    // 需要注意的是，这个方法具有一定的局限性
    // 对于包含引用类型的数组来说，在toString过程中会发生类型转换，从而使转换结果异常。
}

