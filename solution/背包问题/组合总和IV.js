/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 完全背包问题，求排列数
// 外层for遍历背包，内层for循环遍历物品。
var combinationSum4 = function(nums, target) {
    let dp = Array(target+1).fill(0);
    dp[0] = 1;

    for(let i = 0;i <= target;i++){
        for(let j = 0; j < nums.length;j++){
            if(i >= nums[j]){
                dp[i] += dp[i - nums[j]];
            }
        }
    }
    return dp[target];
};