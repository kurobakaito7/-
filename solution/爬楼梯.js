/**
 * @param {number} n
 * @return {number}
 */
// 滚动轮盘法
var climbStairs = function(n) {
    let p = 0,q = 0,r = 1;
    for(let i = 1;i<=n;i++){
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};

// 动态规划
var climbStairs = function(n) {
    const dp = []
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2;i<= n;i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};