/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力
var moveZeroes = function(nums) {
    for(let i = 0;i<nums.length-1;i++){
        if(nums[i] === 0){
            for(let j = i+1;j<nums.length;j++){
                if(nums[j] !== 0){
                    nums[i] = nums[j]
                    nums[j] = 0
                    break;
                }else{
                    continue;
                }
            }
        }
    }
};
// 两次遍历
var moveZeroes = function(nums) {
    let j = 0
    for(let i = 0;i<nums.length;i++) {
        if(nums[i] !== 0){
            nums[j++] = nums[i];
        }
    }
    for(let i = j;i<nums.length;i++){
        nums[i] = 0;
    }
}