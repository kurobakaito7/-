/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快速排序
var sortArray = function (nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums, 0, nums.length - 1);
};
function quickSort(nums, l, r) {
  if (l >= r) return;
  let pivotIndex = partiton(nums, l, r);
  quickSort(nums, l, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, r);
  return nums;
}
function partiton(nums, l, r) {
  let pivot = r;
  let leftIndex = l;
  for (let i = l; i < r; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
      leftIndex++;
    }
  }
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  return leftIndex;
}
// 归并排序
var sortArray = function (nums) {
  return mergeSort(nums, 0, nums.length-1);
};
function mergeSort(nums, l, r) {
    if (l >= r) {
      return nums;
    }
    let mid = (l + r) >> 1;
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    return merge(nums,l,mid,r);
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
  // 如果有一个指针已经移到了区间的末尾，那么就把另一个区间里的数按顺序加入 tmp 数组中即可。
  // 这样能保证我们每次都是让两个区间中较小的数加入临时数组里
  // 那么整个归并过程结束后 [l,r] 即为有序的。
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
// 堆排序
var sortArray = function (nums) {
  buildMaxHeap(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    // 堆头与i交换后进行调整
    maxHeapify(nums, 0, i); //随着i减小，逐渐排序
  }
  return nums;
};

// 建立大根堆
function buildMaxHeap(nums) {
  const n = nums.length;
  for (let i = n >> 1; i >= 0; i--) {
    maxHeapify(nums, i, n);
  }
}

// 调整堆
function maxHeapify(nums, index, heapSize) {
  let largest = index;
  let l = index * 2 + 1;
  let r = l + 1;
  // 寻找子节点是否大于父节点
  if (l < heapSize && nums[l] > nums[largest]) {
    largest = l;
  }
  if (r < heapSize && nums[r] > nums[largest]) {
    largest = r;
  }
  // 有则交换位置后继续调整
  if (largest !== index) {
    [nums[largest], nums[index]] = [nums[index], nums[largest]];
    maxHeapify(nums, largest, heapSize);
  }
}
