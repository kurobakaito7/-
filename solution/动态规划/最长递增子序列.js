/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 动态规划
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0
    let dp = [1]
    let maxLen = 1
    for(let i = 1;i<nums.length;i++){
        dp[i] = 1
        for(let j = 0;j<i;j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
        maxLen = Math.max(maxLen,dp[i])
    }
    return maxLen   
};
// 2. 贪心算法+二分查找
var lengthOfLIS1 = function(nums) {
    let len = 1,n = nums.length;
    if (n == 0) return 0;
    let d = []
    d[len] = nums[0]
    for(let i = 1; i< n;i++){
        if(nums[i] > d[len]){
            d[++len] = nums[i]
        }else{
            let l = 1,r = len,pos = 0;//这里找不到说明d中所有的数都比num[i]大，此时要更新d[1],所以将这里的pos设为0
            while(l<=r) {
                let mid = (l+r)>>1
                if(d[mid]<nums[i]){
                    pos = mid
                    l = mid + 1
                }else{
                    r = mid - 1
                }
            }
            d[pos + 1]  =nums[i]
        }
    }
    return len
};