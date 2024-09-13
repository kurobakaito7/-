/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.original = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.original.slice();
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i=0;i<this.nums.length;i++) {
        const j = Math.floor(Math.random() * (this.nums.length - i))+i;
        const temp = this.nums[i];
        this.nums[i] = this.nums[j];
        this.nums[j] = temp;
    }
    return this.nums;
};