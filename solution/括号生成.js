/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    const dfs = (lRemain,rRemain,str) => { // 左右括号所剩的数量，str是构建的字符串
        // 字符串构建完成
        if(str.length === 2*n){
             // 加入解集
            res.push(str);
            return;//结束当前递归分支
        }
        // 只要左括号有剩，就可以选它，然后继续递归
        if(lRemain > 0){ 
            dfs(lRemain - 1,rRemain,str+'(');
        }
        // 只有右括号比左括号剩的多，才能选右括号
        if(lRemain < rRemain){
            dfs(lRemain,rRemain - 1,str+')');
        }
    }
    dfs(n,n,""); // 递归入口，剩余数量都是n，初始字符串是空串
    return res
};