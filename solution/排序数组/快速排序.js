/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快速排序
// 普通快速排序——在力扣中会超时
var sortArray = function(nums) {
    if(nums.length < 2) {
        return nums;
    }
    return quickSort(nums,0,nums.length-1)
}
function quickSort(nums,l,r) {
    if(l>=r) return;
    let pivotIndex = partiton(nums,l,r);
    quickSort(nums,l,pivotIndex-1);
    quickSort(nums,pivotIndex+1,r);
    return nums;
}

function partiton(nums,l,r) {
    let pivot = r;
    let leftIndex = l;
    for(let i= l;i<r;i++) {
        if(nums[i] < nums[pivot]) {
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
    return leftIndex;
}

// 优化快排
function quickSortPlus(nums, l, r) {
    if(l >= r) return nums;
    let i=l-1, j = r+1, x = nums[l];
    while(i < j) {
        while(nums[++i] < x);
        while(nums[--j] > x);
        if(i<j){
            [nums[i],nums[j]] = [nums[j], nums[i]];
        }
    }
    quickSortPlus(nums, l, j);
    quickSortPlus(nums, j+1, r);
    return nums;
}