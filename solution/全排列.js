/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [],path = [];
    backTrack(nums,nums.length,[]);
    return res;

    function backTrack(nums,k,used) {
        if(path.length === k) {
            res.push(Array.from(path));// 注意这里需要将path转换为数组后在进行入栈
            return;
        }
        for(let i=0;i<nums.length;i++) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true;// 同枝
            backTrack(nums,k,used);
            path.pop();
            used[i] = false;
        }
    }
}