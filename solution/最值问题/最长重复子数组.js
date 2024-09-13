/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 动态规划
var findLength = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const dp = new Array(m + 1);
    for(let i = 0;i <= m;i++){
        dp[i] = new Array(n + 1).fill(0);
    }
    let res = 0;
    for(let i = 1;i <= m;i++){//从1快开始遍历
        for(let j = 1;j <= n;j++){// 从一开始遍历
            if(nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }// nums1[i-1] !== nums2[j-1]的情况为0，初始化时就已经包括了
            res = Math.max(res,dp[i][j]);
        }
    }
    return res;
};
// 动态规划降维优化
var findLength = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const dp = new Array(n+1).fill(0);
    let res = 0;
    for(let i = 1;i<=m;i++){
        for(let j = n;j>=1;j--){
            if(nums1[i-1] === nums2[j-1]){
                dp[j] = dp[j-1]+1;
            }else{
                dp[j] = 0;
            }
            res = Math.max(res,dp[j]);
        }
    }
    return res;
};

// 滑动窗口
var findLength = function(nums1, nums2) {
    return nums1.length <= nums2.length ? findMax(nums1,nums2) : findMax(nums2,nums1);
};
function findMax(nums1,nums2) {
    let m = nums1.length,n = nums2.length;
    let max = 0;
    /**
        nums1,nums2中较短的数组不动，这里默认nums1，较长的数组滑动
        初始位置：nums2右边界挨着nums1左边界，nums2从左往右滑动
     */
    // 第一阶段：nums2从左往右滑动，两数组重合部分长度不断增加，重合部分长度len从1开始增加
    // 重合部分：nums1起点下标0，nums2起点下标n-len，
    for(let len = 1;len <= m;len++) {
        max = Math.max(max,maxLen(nums1,0,nums2,n-len,len));
    }
    // 第二阶段：nums2从左往右滑动，两数组重合部分长度不变，重合部分长度始终为nums1长度m
    //  重合部分：nums1起点下标0，nums2起点下标n-m，然后递减
    for(let j = n-m;j >= 0;j--) {
        max = Math.max(max,maxLen(nums1,0,nums2,j,m));
    }
    // 第三阶段：nums2从左往右滑动，两数组重合部分长度递减，重合部分长度始终为nums1长度m-i
    //  重合部分：nums1起点下标i，递增，nums2起点下标0
    for(let i = 1;i<m;i++) {
        max = Math.max(max,maxLen(nums1,i,nums2,0,m-i));
    }
    return max;
}
/**
    nums1中下标i开始，nums2中下标j开始，长度为len子数组中，最长公共子数组(注意要连续)长度
 */
function maxLen(nums1,i,nums2,j,len) {
    let count = 0,res = 0;
    for(let k = 0;k<len;k++){
        if(nums1[i+k] === nums2[j+k]){
            count++;
        }else if(count > 0){
            //进入到这个if判断体里面，说明当前 nums1[i+k]!=nums2[j+k],即之前的公共子数组不再连续，
            // 所以要记录最大值，同时将count置零
            res = Math.max(count,res);
            count = 0;
        }
    }
    /**
        1，count>0,说明有公共子数组是以nums1[i+len-1],nums2[j+len-1]结尾的，
           上面最后一步for循环没有进入到else if判断题里面，所以最终结果要取当前count和res的最大值
        2，count=0，说明res已经更新过了，res即为最终结果
     */
    return count>0?Math.max(count,res):res;
}