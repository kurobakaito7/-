/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 枚举——超时
var subarraySum = function(nums, k) {
    let count = 0;
    for(let i = 0;i<nums.length;i++) {
        let sum = 0;
        for(let j = i;j>=0;--j) {
            sum += nums[j];
            if(sum == k){
                count++;
            }
        }
    }
    return count;
};
// 方法二；前缀和+哈希表优化
var subarraySum = function(nums, k) {
    const map = { 0:1 };
    let prefixSum = 0;
    let count = 0;

    for(let i=0;i<nums.length;i++) {
        prefixSum += nums[i];

        if(map[prefixSum -k]){
            count += map[prefixSum - k];
        }

        if(map[prefixSum]){
            map[prefixSum]++;
        }else {
            map[prefixSum] = 1;
        }
    }
    return count;
};

var subarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0,
      prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
      if (map.has(prefixSum - k)) {
        count += map.get(prefixSum - k);
      }
  
      if (map.has(prefixSum)) {
        map.set(prefixSum, map.get(prefixSum) + 1);
      } else {
        map.set(prefixSum, 1);
      }
    }
    return count;
  };