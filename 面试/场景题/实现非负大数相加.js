// JavaScript对数值有范围的限制
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991

// 如果想要对一个超大的整数(> Number.MAX_SAFE_INTEGER)进行加法运算，但是又想输出一般形式，那么使用 + 是无法达到的，
// 一旦数字超过 Number.MAX_SAFE_INTEGER 数字会被立即转换为科学计数法，并且数字精度相比以前将会有误差。

// 实现一个算法进行大数的相加

function sumBigNumber(num1, num2) {
    let i = num1.length - 1,j = num2.length - 1,add = 0;
    const ans = [];
    while(i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const result = x + y + add;
        ans.push(result % 10);
        add = Math.floor(result / 10);
        i --;
        j --;
    }
    return ans.reverse().join('')
}

let a = "9007199254740991";
let b = "1234567899999999999";

console.log(sumBigNumber(a, b));

