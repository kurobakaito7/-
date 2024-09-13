/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
// 递归+迭代
var iceBreakingGame = function(num, target) {
    let ans = 0;
    for(let i=2; i<= num;i++) {
        ans = (ans +target) % i;
    }
    return ans;
};
