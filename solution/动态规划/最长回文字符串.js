/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function(s) {
    if(s.length < 2) {
        return s;
    }
    let l = 0;
    let r = 0;
    for(let i = 0;i < s.length;i++) {
        // 回文串长度是奇数
        helper(i,i);
        // 回文串长度是偶数
        helper(i, i+1);
    }
    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] === s[n]){
            m--;
            n++;
        }
        // 注意此处m，n的值循环完后，是恰好不满足循环条件的时刻，如果轮询得到的字符串长度大于之前的记录，记录此轮询边界
        if(n - m - 1 > r - l -1){
            l = m;
            r = n;
        }
    }
    return s.slice(l+1, r);
};
// 动态规划
var longestPalindrome = function(s) {
    let len = s.length;
    if(len < 2){
        return s;
    }
    let res = '';
    let dp = Array.from(new Array(len),() => new Array(len).fill(0));
    for(let i = len-1;i >= 0;i--){
        for(let j = i;j < len;j++){
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    return res;
}
