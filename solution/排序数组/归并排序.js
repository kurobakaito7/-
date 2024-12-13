/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};
function mergeSort(nums, l, r) {
  if (l >= r) {
    return nums;
  }
  let mid = (l + r) >> 1;
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  return merge(nums, l, mid, r);
}

function merge(nums, l, mid, r) {
  let tmp = [],
    cnt = 0;
  let i = l,
    j = mid + 1;
  while (i <= mid && j <= r) {
    if (nums[i] <= nums[j]) {
      tmp[cnt++] = nums[i++];
    } else {
      tmp[cnt++] = nums[j++];
    }
  }
  while (i <= mid) {
    tmp[cnt++] = nums[i++];
  }
  while (j <= r) {
    tmp[cnt++] = nums[j++];
  }
  for (let k = 0; k < tmp.length; k++) {
    nums[k + l] = tmp[k];
  }
  return nums;
}
