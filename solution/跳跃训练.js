/**
 * @param {number} num
 * @return {number}
 */

// 递归（超时）
var trainWays = function(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    return trainWays(num-1)+trainWays(num-2)
};

// 动态规划
var trainWays = function(num) {
    if(num <= 1) {
        return 1;
    }
    let dp = [1,1];
    for(let i=2;i<=num;i++) {
        dp[i] = (dp[i-1]+dp[i-2]) % 1000000007;
    }
    return dp[num];
}

// 滚动数组
var trainWays = function(num) {
    if(num === 0) {
        return 1;
    }
    let pre=0,cur=0,res=1;
    for(let i=1;i<=num;i++) {
        pre = cur;
        cur = res;
        res = (pre+cur) % 1000000007;
    }
    return res;
}