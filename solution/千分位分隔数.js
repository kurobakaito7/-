/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let numStr = n.toString();
    if(numStr.length <= 3){
        return numStr;
    }
    let count = 0;
    let ans = "";
    for(let i = numStr.length - 1;i>=0;i--){
        count++;
        if(count === 3){
            ans += '.'
        }
        ans += numStr.charAt(i);
    }
    return ans.split('').reverse().join('');
};