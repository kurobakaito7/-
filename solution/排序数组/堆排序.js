/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
    // 建立大根堆
    buildMaxHeap(nums);
    for(let i=nums.length-1;i>0;i--){
        [nums[0], nums[i]] = [nums[i], nums[0]];
        // 堆头与i交换后调整
        maxHeapify(nums,0,i);// 随着i减小，逐渐排序
    }
    return nums;
}

function buildMaxHeap(nums) {
    const n = nums.length;
    for(let i=n>>1;i>=0;i--) {
        maxHeapify(nums,i,n);
    }
}

function maxHeapify(nums, index, heapSize) {
    let largest = index;
    let leftIndex = index*2+1;
    let rightIndex = leftIndex+1;
    if(leftIndex < heapSize && nums[leftIndex] > nums[largest]) {
        largest = leftIndex;
    }
    if(rightIndex < heapSize && nums[rightIndex] > nums[largest]) {
        largest = rightIndex;
    }
    if(largest !== index){
        [nums[index], nums[largest]] = [nums[largest], nums[index]];
        maxHeapify(nums, largest, heapSize);
    }
}