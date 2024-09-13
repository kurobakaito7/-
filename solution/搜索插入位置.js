/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2); 
        // 除以二的表示还有 (left+right) >> 1 或者 ((right - left) >> 1) + left
        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else if(nums[mid] > target) {
            right = mid - 1;
        }
    }
    return left;
};