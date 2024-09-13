/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;// 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while(i>=0&&nums[i]>=nums[i+1]){// 寻找第一个小于右邻居的数
        i--;
    }
    //这个数在数组中存在，从身后挑一个数与它进行交换
    if(i>=0){
        let j = nums.length - 1;// 从最后一项从左遍历
        while(j>=0 && nums[i]>=nums[j]){// 寻找第一个大于num[i]的数
            j--;
        }
        // 两数交换，实现变大
        [nums[i],nums[j]] = [nums[j],nums[i]];
    }
    // 如果i-1，说明是递减排列，直接反转
    let l = i + 1;
    let r = nums.length - 1;
    while(l < r){
        [nums[l],nums[r]] = [nums[r],nums[l]];
        l++;
        r--;
    }
};