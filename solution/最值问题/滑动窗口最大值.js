/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    const q = [];
    for(let i =0;i<k;i++) {
        while(q.length && nums[i] > nums[q[q.length - 1]]){
            q.pop();
        }
        q.push(i);
    }
    let ans = [nums[q[0]]];
    for(let i = k;i<len;i++) {
        while(q.length && nums[i] > nums[q[q.length-1]]){
            q.pop();
        }
        q.push(i)
        while(q[0] <= i-k){
            q.shift();
        }
        ans.push(nums[q[0]])
    }
    return ans;
};