/**
 * @param {string} s
 * @return {number}
 */
// 栈
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for(let i = 0; i< s.length;i++){
        const c = s[i];
        if(c === '('){// 左括号的索引，入栈
            stack.push(i);
        }else{// 匹配到右括号
            stack.pop();// 栈顶的左括号被匹配，出栈
            if(stack.length){ // 栈未空
                const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
                maxLen = Math.max(maxLen,curMaxLen);// 比较最大值
            }else {// 栈空了 
                stack.push(i) // 入栈充当参照
            }
        }
    }
    return maxLen;
};
// 动态规划
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for(let i = 1;i < len;i++) {
        if(s[i] === ')'){
            if(s[i-1] === '('){
                if(i - 2 >= 0){
                    dp[i] = dp[i-2]+2;
                }else{
                    dp[i] = 2;
                }
            }else if(s[i - dp[i-1] - 1] === '('){
                if(i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i-1]+2+dp[i-dp[i-1]-2];
                }else{
                    dp[i] = dp[i-1]+2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};