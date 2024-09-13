/**
 * @param {number[]} nums
 * @return {number}
 */
// 一、动态规划
var maxSubArray = function(nums) {
    let pre = 0,maxArrSum = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre+x,x);
        maxArrSum = Math.max(maxArrSum,pre);
    })
    return maxArrSum;
};

// 二、分治
var maxSubArray = function(nums) {
    return getInfo(nums,0,nums.length - 1).mSum;
};
function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum,l.iSum+r.lSum);
    const rSum = Math.max(r.rSum,r.iSum+l.rSum);
    const mSum = Math.max(Math.max(l.mSum,r.mSum),l.rSum+r.lSum);
    return new Status(lSum,rSum,mSum,iSum);
}

const getInfo = (a,l,r) => {
    if(l === r) {
        return new Status(a[l],a[l],a[l],a[l]);
    }
    const m = (l+r) >> 1;
    const lSub = getInfo(a,l,m);
    const rSub = getInfo(a,m+1,r);
    return pushUp(lSub,rSub);
}