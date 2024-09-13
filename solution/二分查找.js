/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length){
        return -1;
    }
    if(nums.length === 1){
        return nums[0]===target?0:-1;
    }
    let l = 0,r = nums.length - 1;
    while(l<=r){
        let mid = l + ((r - l)>>1)
        if(nums[mid] === target){
            return mid;
        }
        if(target < nums[mid]){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return -1;
};