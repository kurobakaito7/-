/**
 * @param {string} s
 * @return {string}
 */
// 栈解
var decodeString = function(s) {
    let numStack = [];        // 存倍数的栈
    let strStack = [];        // 存 待拼接的str 的栈
    let num = 0;              // 倍数的“搬运工”
    let result = '';          // 字符串的“搬运工”
    for (const char of s) {   // 逐字符扫描
        if (!isNaN(char)) {   // 遇到数字
            num = num * 10 + Number(char); // 算出倍数
        } else if (char == '[') {  // 遇到 [
            strStack.push(result); // result串入栈
            result = '';           // 入栈后清零
            numStack.push(num);    // 倍数num进入栈等待
            num = 0;               // 入栈后清零
        } else if (char == ']') {  // 遇到 ]，两个栈的栈顶出栈
            let repeatTimes = numStack.pop(); // 获取拷贝次数
            result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
        } else {                   
            result += char;        // 遇到字母，追加给result串
        }
    }
    return result;
};

// 从后往前考虑
var decodeString = function(s) {
    let stack = []
  for (const char of s) {
    if (char !== ']') { // ] 前的字符都入栈
      stack.push(char)
      continue
    }
    let cur = stack.pop() // 弹出一个来检测
    let str = '' // 组装字符串
    // 接下来肯定是遇到字母，直到遇到 [
    while (cur !== '[') {
      str = cur + str // cur字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 此时cur为 [，接下来要遇到数字
    let num = ''
    cur = stack.pop() // 用下一个将 [ 覆盖
    while (!isNaN(cur)) {
      num = cur + num // 数字字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 现在要么是字母，要么是 [
    stack.push(cur)
    stack.push(str.repeat(num))
  }
  return stack.join('')
};