/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    let j = x;
    let ans = 0;
    while(i<=j){
        let mid = i + Math.floor((j - i)/2);
        if(mid <= Math.floor(x/mid)){
            i = mid + 1;
            ans = mid;
        }else{
            j = mid - 1;
        }
    }
    return ans;
};
var mySqrt = function(x) {
    let left = 1;
    let right = x;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(mid * mid <= x){
            if(mid * mid <= x && (mid+1)*(mid+1) > x){
                return mid;
            }
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return 0;
};