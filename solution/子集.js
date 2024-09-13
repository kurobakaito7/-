/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路一：逐个考察数字，每个数都选或不选。等到递归结束时，把集合加入解集。
var subsets = function (nums) {
  const res = [];
  function helper(index, list) {
    if (index === nums.length) {
      // 指针越界
      res.push(list.slice()); // 加入解集
      return; // 结束当前的递归
    }
    list.push(nums[index]); // 选择这个数
    helper(index + 1, list); // 基于该选择，继续往下递归，考察下一个数
    list.pop(); // 上面的递归结束，撤销该选择
    helper(index + 1, list); // 不选这个数，继续往下递归，考察下一个数
  }
  helper(0, []);
  return res;
};

// 思路二：在执行子递归之前，加入解集，即，在递归压栈前 “做事情”。

var subsets = function (nums) {
  const res = [];
  function helper(index, list) {
    res.push(list.slice()); // 调用子递归前，加入解集
    for (let i = index; i < nums.length; i++) {
      // 枚举出所有可选的数
      list.push(nums[i]); // 选这个数
      helper(i + 1, list); // 基于选这个数，继续递归，传入的是i+1，不是index+1
      list.pop(); // 撤销选这个数
    }
  }
  helper(0, []);
  return res;
};
